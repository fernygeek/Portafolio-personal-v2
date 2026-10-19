export class CDP {
  constructor(ws) {
    this.ws=ws;this.seq=0;this.pending=new Map();this.listeners=new Map();this.events=[];
    ws.addEventListener('message',event=>{
      const message=JSON.parse(event.data);
      if(message.id){
        const pending=this.pending.get(message.id);if(!pending)return;
        clearTimeout(pending.timer);this.pending.delete(message.id);
        message.error?pending.reject(new Error(JSON.stringify(message.error))):pending.resolve(message.result);
      } else {
        this.events.push(message);
        for(const fn of this.listeners.get(message.method)||[])fn(message.params);
      }
    });
  }
  static async connect(url){
    const ws=new WebSocket(url);
    await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true});});
    return new CDP(ws);
  }
  send(method,params={}){
    const id=++this.seq;
    return new Promise((resolve,reject)=>{
      const timer=setTimeout(()=>{this.pending.delete(id);reject(new Error(`CDP timeout: ${method}`));},20000);
      this.pending.set(id,{resolve,reject,timer});
      this.ws.send(JSON.stringify({id,method,params}));
    });
  }
  once(method,timeout=20000){
    return new Promise((resolve,reject)=>{
      const listeners=this.listeners.get(method)||new Set();this.listeners.set(method,listeners);
      const fn=params=>{clearTimeout(timer);listeners.delete(fn);resolve(params);};
      const timer=setTimeout(()=>{listeners.delete(fn);reject(new Error(`Event timeout: ${method}`));},timeout);
      listeners.add(fn);
    });
  }
  async evaluate(expression){
    const result=await this.send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});
    if(result.exceptionDetails)throw new Error(result.exceptionDetails.text+' '+JSON.stringify(result.exceptionDetails.exception));
    return result.result.value;
  }
  close(){this.ws.close();}
}
export async function target(debuggerUrl='http://127.0.0.1:9222'){
  const info=await (await fetch(debuggerUrl+'/json/new?about:blank',{method:'PUT'})).json();
  const cdp=await CDP.connect(info.webSocketDebuggerUrl);
  return {cdp,close:async()=>{cdp.close();await fetch(debuggerUrl+'/json/close/'+info.id);}};
}
