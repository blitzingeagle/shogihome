var O=Object.defineProperty;var F=(p,e,r)=>e in p?O(p,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[e]=r;var k=(p,e,r)=>F(p,typeof e!="symbol"?e+"":e,r);import{d as P,y as f,z as T,A as U,u as l,i as d,j as a,m as q,q as t,v as i,t as o,b$ as y,n as B,k as h,F as x,l as M,a9 as _,X as m,ab as $,al as w,a0 as C,_ as E}from"./confirm-BU-8eJDn.js";import{P as R}from"./prompt-BVNwYAgJ.js";class g{constructor(e,r){this.width=e,this.height=r}add(e){return new g(this.width+e.width,this.height+e.height)}reduce(e){return new g(this.width-e.width,this.height-e.height)}equals(e){return this.width===e.width&&this.height===e.height}}class b{constructor(e,r,u,S){k(this,"x");k(this,"y");k(this,"width");k(this,"height");if(r!==void 0&&u!==void 0&&S!==void 0)this.x=e,this.y=r,this.width=u,this.height=S;else{const v=JSON.parse(e);this.x=v.x,this.y=v.y,this.width=v.width,this.height=v.height}}get json(){return JSON.stringify({x:this.x,y:this.y,width:this.width,height:this.height})}get style(){return{left:`${this.x}px`,top:`${this.y}px`,width:`${this.width}px`,height:`${this.height}px`}}get size(){return new g(this.width,this.height)}multiply(e){return new b(this.x*e,this.y*e,this.width*e,this.height*e)}}class I{constructor(e,r){this.x=e,this.y=r}add(e){return new I(this.x+e.x,this.y+e.y)}reduce(e){return new I(this.x-e.x,this.y-e.y)}distanceTo(e){return Math.sqrt((this.x-e.x)**2+(this.y-e.y)**2)}angleTo(e){return Math.atan2(e.y-this.y,e.x-this.x)}multiply(e){return new I(this.x*e,this.y*e)}equals(e){return this.x===e.x&&this.y===e.y}}const j={class:"full"},Q={class:"headers"},J={key:0,class:"entry"},z={class:"label"},X={key:0,class:"label warning"},G={class:"label"},H={class:"key"},K={class:"key"},W={key:1},Y={class:"key"},Z={class:"timestamp"},tt={key:2},et={class:"key"},st={key:3},at={class:"command"},it={key:4,class:"timestamp"},nt={key:5},ot={class:"key"},lt={key:6},dt={class:"command"},ct={key:7,class:"timestamp"},rt={class:"row"},ht=["onClick"],ut=["onClick"],vt={key:1,class:"entry"},_t={class:"label"},mt={key:0,class:"label warning"},pt={class:"label"},yt={class:"key"},St={class:"key"},kt={class:"key"},gt={class:"timestamp"},wt={key:1},It={class:"key"},Dt={key:2},$t={class:"command"},ft={key:3,class:"timestamp"},xt={key:4},Mt={class:"key"},Ct={key:5},Rt={class:"command"},bt={key:6,class:"timestamp"},Nt={class:"row"},Vt=["onClick"],At=["onClick"],Lt={key:1,class:"main"},Ot=P({__name:"MonitorView",props:{size:{type:g,required:!0}},setup(p){let e=null;const r=f({usiSessions:[],csaSessions:[]}),u=f(0);function S(){m.collectSessionStates().then(n=>{r.value=n,u.value=new Date().getTime()}).catch(n=>{$().add(n)})}function v(n,c){return`${((c-n)/1e3).toFixed(3)} seconds ago`}T(()=>{S(),e=window.setInterval(S,1e3)}),U(()=>{e!==null&&(window.clearInterval(e),e=null)});function N(n){m.log(w.INFO,`MonitorView: Open USI prompt for SID=${n.sessionID} Name=[${n.name}]`),m.openPrompt(R.USI,n.sessionID,n.name)}function V(n){C().show({message:`${n.name} に "quit" を送信します。本当に実行しますか？`,onOk:()=>{m.log(w.INFO,`MonitorView: Send USI quit command to SID=${n.sessionID} Name=[${n.name}]`),m.usiQuit(n.sessionID).catch(c=>{$().add(c)})}})}function A(n){m.log(w.INFO,`MonitorView: Open CSA prompt for SID=${n.sessionID} Server=[${n.host}:${n.port}]`);const c=`${n.host}:${n.port}`;m.openPrompt(R.CSA,n.sessionID,c)}function L(n){C().show({message:`${n.host}:${n.port} への接続を強制終了します。本当に実行しますか？`,onOk:()=>{m.log(w.INFO,`MonitorView: Close CSA session for SID=${n.sessionID} Server=[${n.host}:${n.port}]`),m.csaLogout(n.sessionID).catch(c=>{$().add(c)})}})}return(n,c)=>(l(),d("div",null,[a("div",j,[a("div",{ref:"root",class:"full column",onCopy:c[0]||(c[0]=q(()=>{},["stop"]))},[a("div",Q,[a("div",null,t(i(o).updatedAt)+": "+t(u.value?i(y)(new Date(u.value)):"---"),1),a("div",null,t(i(o).usiEngine)+": "+t(r.value.usiSessions.length),1),a("div",null,t(i(o).csaServer)+": "+t(r.value.csaSessions.length),1)]),u.value?(l(),d("div",{key:0,class:"main",style:B({height:`${p.size.height-20}px`})},[r.value.usiSessions.length===0?(l(),d("div",J,[a("div",z,t(i(o).noRunningUSIEngine),1)])):h("",!0),(l(!0),d(x,null,M(r.value.usiSessions,s=>(l(),d("div",{key:s.sessionID,class:"entry"},[s.closed?(l(),d("div",X,t(i(o).willBeRemovedFromTheListSoon),1)):h("",!0),a("div",G,t(i(o).usiEngine)+" - SID: "+t(s.sessionID),1),a("div",null,[a("span",H,t(i(o).name)+":",1),_(" "+t(s.name),1)]),a("div",null,[c[1]||(c[1]=a("span",{class:"key"},"URI:",-1)),_(" "+t(s.uri),1)]),a("div",null,[a("span",K,t(i(o).enginePath)+":",1),_(" "+t(s.path),1)]),s.pid?(l(),d("div",W,[c[2]||(c[2]=a("span",{class:"key"},"PID:",-1)),_(" "+t(s.pid),1)])):h("",!0),a("div",null,[a("span",Y,t(i(o).createdAt)+":",1),_(" "+t(i(y)(new Date(s.createdMs)))+" ",1),a("span",Z,"("+t(v(s.createdMs,u.value))+")",1)]),a("div",null,[c[3]||(c[3]=a("span",{class:"key"},"State:",-1)),_(" "+t(s.stateCode),1)]),s.lastSent?(l(),d("div",tt,[a("span",et,t(i(o).lastSent)+":",1)])):h("",!0),s.lastSent?(l(),d("div",st,[a("span",at,t(s.lastSent.command||`(${i(o).blankLine})`),1)])):h("",!0),s.lastSent?(l(),d("div",it," Sent at "+t(i(y)(new Date(s.lastSent.timeMs)))+" ("+t(v(s.lastSent.timeMs,u.value))+") ",1)):h("",!0),s.lastReceived?(l(),d("div",nt,[a("span",ot,t(i(o).lastReceived)+":",1)])):h("",!0),s.lastReceived?(l(),d("div",lt,[a("span",dt,t(s.lastReceived.command||`(${i(o).blankLine})`),1)])):h("",!0),s.lastReceived?(l(),d("div",ct," Received at "+t(i(y)(new Date(s.lastReceived.timeMs)))+" ("+t(v(s.lastReceived.timeMs,u.value))+") ",1)):h("",!0),a("div",rt,[a("button",{onClick:D=>N(s)},t(i(o).openPrompt),9,ht),a("button",{onClick:D=>V(s)},t(i(o).forceQuit),9,ut)])]))),128)),r.value.csaSessions.length===0?(l(),d("div",vt,[a("div",_t,t(i(o).noConnectedCSAServer),1)])):h("",!0),(l(!0),d(x,null,M(r.value.csaSessions,s=>(l(),d("div",{key:s.sessionID,class:"entry"},[s.closed?(l(),d("div",mt,t(i(o).willBeRemovedFromTheListSoon),1)):h("",!0),a("div",pt,t(i(o).csaServer)+" - SID: "+t(s.sessionID),1),a("div",null,[a("span",yt,t(i(o).server)+":",1),_(" "+t(s.host)+":"+t(s.port),1)]),a("div",null,[a("span",St,t(i(o).protocolVersion)+":",1),_(" "+t(s.protocolVersion),1)]),a("div",null,[c[4]||(c[4]=a("span",{class:"key"},"ID:",-1)),_(" "+t(s.loginID),1)]),a("div",null,[a("span",kt,t(i(o).createdAt)+":",1),_(" "+t(i(y)(new Date(s.createdMs)))+" ",1),a("span",gt,"("+t(v(s.createdMs,u.value))+")",1)]),a("div",null,[c[5]||(c[5]=a("span",{class:"key"},"State:",-1)),_(" "+t(s.stateCode),1)]),s.lastSent?(l(),d("div",wt,[a("span",It,t(i(o).lastSent)+":",1)])):h("",!0),s.lastSent?(l(),d("div",Dt,[a("span",$t,t(s.lastSent.command||`(${i(o).blankLine})`),1)])):h("",!0),s.lastSent?(l(),d("div",ft," Sent at "+t(i(y)(new Date(s.lastSent.timeMs)))+" ("+t(v(s.lastSent.timeMs,u.value))+") ",1)):h("",!0),s.lastReceived?(l(),d("div",xt,[a("span",Mt,t(i(o).lastReceived)+":",1)])):h("",!0),s.lastReceived?(l(),d("div",Ct,[a("span",Rt,t(s.lastReceived.command||`(${i(o).blankLine})`),1)])):h("",!0),s.lastReceived?(l(),d("div",bt," Received at "+t(i(y)(new Date(s.lastReceived.timeMs)))+" ("+t(v(s.lastReceived.timeMs,u.value))+") ",1)):h("",!0),a("div",Nt,[a("button",{onClick:D=>A(s)},t(i(o).openPrompt),9,Vt),a("button",{onClick:D=>L(s)},t(i(o).forceClose),9,At)])]))),128))],4)):(l(),d("div",Lt,"Collecting..."))],544)])]))}}),Ut=E(Ot,[["__scopeId","data-v-6c00d3ec"]]);export{Ut as M,I as P,g as R,b as a};