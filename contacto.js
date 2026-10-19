(() => {
    'use strict';

    const form = document.querySelector('#formulario-contacto');
    if (!form) return;

    const status = document.querySelector('#estado-formulario');
    const submitButton = document.querySelector('#validar-datos');
    const clearButton = document.querySelector('#solicitar-limpieza');
    const confirmation = document.querySelector('#confirmar-limpieza');
    const confirmButton = document.querySelector('#confirmar-borrado');
    const cancelButton = document.querySelector('#cancelar-borrado');
    const fields = ['nombre', 'email', 'celular', 'mensaje'].map(id => document.getElementById(id));

    if (!status || !submitButton || !clearButton || !confirmation || !confirmButton || !cancelButton || fields.some(field => !field)) return;

    const labels = { nombre: 'Nombre', email: 'Correo electrónico', celular: 'Celular', mensaje: 'Mensaje' };
    const descriptions = new Map(fields.map(field => [field.id, field.getAttribute('aria-describedby') || '']));
    const errors = new Map();
    let validationAttempted = false;
    let resetAllowed = false;

    function errorFor(field) {
        const value = field.value.trim();
        if (!value) {
            return {
                nombre: 'Escribe tu nombre.',
                email: 'Escribe tu correo electrónico.',
                celular: 'Escribe tu número de celular.',
                mensaje: 'Escribe un mensaje.'
            }[field.id];
        }

        if (field.id === 'email' && field.validity.typeMismatch) {
            return 'Escribe un correo con un formato válido, por ejemplo nombre@dominio.com.';
        }

        if (field.id === 'celular') {
            // Validate a local copy; preserve exactly what the person typed.
            const normalized = value.replace(/[\s-]/g, '');
            if (!/^(?:09\d{8}|\+5939\d{8})$/.test(normalized)) {
                return 'Usa 09 seguido de 8 dígitos, como 0991234567, o +593991234567.';
            }
        }

        return '';
    }

    function setFieldError(field, message) {
        const error = document.getElementById(`${field.id}-error`);
        error.textContent = message;
        error.hidden = !message;

        if (message) {
            errors.set(field.id, message);
            field.setAttribute('aria-invalid', 'true');
        } else {
            errors.delete(field.id);
            field.removeAttribute('aria-invalid');
        }

        const describedBy = [descriptions.get(field.id), message ? error.id : ''].filter(Boolean).join(' ');
        if (describedBy) field.setAttribute('aria-describedby', describedBy);
        else field.removeAttribute('aria-describedby');
    }

    function setStatus(message, state) {
        status.replaceChildren();
        status.dataset.state = state;
        const paragraph = document.createElement('p');
        paragraph.textContent = message;
        status.append(paragraph);
    }

    function showErrorSummary() {
        const count = errors.size;
        setStatus(count === 1 ? 'Revisa el siguiente campo. Tus datos se conservan.' : `Revisa los siguientes ${count} campos. Tus datos se conservan.`, 'error');
        const list = document.createElement('ul');
        fields.forEach(field => {
            if (!errors.has(field.id)) return;
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${field.id}`;
            link.textContent = `${labels[field.id]}: ${errors.get(field.id)}`;
            link.addEventListener('click', event => {
                event.preventDefault();
                field.focus();
            });
            item.append(link);
            list.append(item);
        });
        status.append(list);
    }

    function hideConfirmation(restoreFocus = false) {
        confirmation.hidden = true;
        clearButton.setAttribute('aria-expanded', 'false');
        if (restoreFocus) clearButton.focus();
    }

    function clearValidation() {
        validationAttempted = false;
        fields.forEach(field => setFieldError(field, ''));
        status.replaceChildren();
        delete status.dataset.state;
    }

    function requestClear() {
        if (!fields.some(field => field.value.length > 0)) {
            hideConfirmation();
            clearValidation();
            setStatus('El formulario ya está vacío.', 'info');
            return;
        }
        confirmation.hidden = false;
        clearButton.setAttribute('aria-expanded', 'true');
        cancelButton.focus();
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        hideConfirmation();
        validationAttempted = true;
        fields.forEach(field => setFieldError(field, errorFor(field)));

        if (errors.size) {
            showErrorSummary();
            fields.find(field => errors.has(field.id)).focus();
            return;
        }

        setStatus('Datos válidos. No se ha enviado ningún mensaje. Para conversar, utiliza LinkedIn o WhatsApp. Tus datos permanecen en el formulario.', 'success');
    });

    fields.forEach(field => {
        field.addEventListener('input', () => {
            hideConfirmation();
            if (!validationAttempted) return;

            const previousError = errors.get(field.id) || '';
            const nextError = errorFor(field);
            setFieldError(field, nextError);
            if (previousError !== nextError || status.dataset.state === 'success') {
                if (errors.size) showErrorSummary();
                else setStatus('Los campos están completos. Pulsa Validar datos para comprobarlos. No se ha enviado ningún mensaje.', 'info');
            }
        });
    });

    clearButton.addEventListener('click', requestClear);
    cancelButton.addEventListener('click', () => hideConfirmation(true));
    confirmation.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            event.preventDefault();
            hideConfirmation(true);
        }
    });
    confirmButton.addEventListener('click', () => {
        resetAllowed = true;
        try {
            form.reset();
        } finally {
            resetAllowed = false;
        }
        hideConfirmation();
        clearValidation();
        setStatus('Se han borrado los datos del formulario. No se envió ningún mensaje.', 'info');
        fields[0].focus();
    });
    form.addEventListener('reset', event => {
        if (!resetAllowed) {
            event.preventDefault();
            requestClear();
        }
    });

    // Native constraints remain in the HTML; custom validation starts only when ready.
    form.noValidate = true;
    submitButton.disabled = false;
    submitButton.hidden = false;
    clearButton.disabled = false;
    clearButton.hidden = false;
})();
