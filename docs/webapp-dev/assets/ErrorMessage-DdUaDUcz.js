import{d as A,u as c,i as l,v as u,a1 as te,y as x,z as $,A as q,j as a,D as U,q as g,t as w,_ as z,H as se,F as L,l as E,aa as Y,k as M,Y as ie,aj as ne}from"./HorizontalSelector-9CConAia.js";const V={};function oe(e){if(V[e])return;const t=document.createElement("img");t.src=e,V[e]=t}var O=(e=>(e.BUSY="busy",e.ERROR="error",e.INFO="info",e.GAME="game",e.INTERNET="internet",e.STOP="stop",e.RESIGN="resign",e.RESEARCH="research",e.END="end",e.QUIZ="quiz",e.EDIT="edit",e.CHECK="check",e.SWAP="swap",e.SWAP_H="swap_h",e.SETTINGS="settings",e.ENGINE_SETTINGS="engineSettings",e.FLIP="flip",e.FILE="file",e.OPEN="open",e.SAVE="save",e.SAVE_AS="saveAs",e.PASTE="paste",e.COPY="copy",e.DELETE="delete",e.COMMENT="comment",e.BRAIN="brain",e.PV="pv",e.CHART="chart",e.PERCENT="percent",e.MONITOR="monitor",e.ARROW_DROP="arrowDrop",e.ARROW_UP="arrowUp",e.FIRST="first",e.BACK="back",e.NEXT="next",e.LAST="last",e.QUESTION="question",e.ANALYSIS="analysis",e.DESCRIPTION="description",e.PLAY="play",e.CLOSE="close",e.CALL="call",e.SCORE="score",e.GRID="grid",e.MATE_SEARCH="mateSearch",e.ADD="add",e.TREE="tree",e.NOTE="note",e.BATCH="batch",e.OPEN_FOLDER="openFolder",e.HISTORY="history",e.PAUSE="pause",e.RESUME="resume",e.HELP="help",e.LICENSE="license",e.LINK="link",e.SHARE="share",e.EQUALIZER="equalizer",e.REFRESH="refresh",e.ROBOT="robot",e))(O||{});const Q={busy:"icon/hourglass_empty.svg",error:"icon/error_outline.svg",info:"icon/info.svg",game:"icon/sports_esports.svg",internet:"icon/language_FILL0.svg",stop:"icon/block.svg",resign:"icon/flag.svg",research:"icon/science.svg",end:"icon/do_disturb_on.svg",quiz:"icon/quiz_FILL0.svg",edit:"icon/app_registration.svg",check:"icon/check_circle.svg",swap:"icon/swap_vert.svg",swap_h:"icon/swap_horiz.svg",settings:"icon/settings.svg",engineSettings:"icon/settings_input_component.svg",flip:"icon/flip_camera_android.svg",file:"icon/draft_FILL0.svg",open:"icon/file_open_FILL0.svg",save:"icon/save_FILL0.svg",saveAs:"icon/save_as_FILL0.svg",paste:"icon/content_paste.svg",copy:"icon/content_copy.svg",delete:"icon/backspace.svg",comment:"icon/edit_note.svg",brain:"icon/psychology.svg",pv:"icon/manage_search_FILL0.svg",chart:"icon/show_chart.svg",percent:"icon/percent.svg",monitor:"icon/browse_activity_FILL0.svg",arrowDrop:"icon/arrow_drop_down.svg",arrowUp:"icon/arrow_drop_up_FILL0.svg",first:"icon/first_page.svg",back:"icon/chevron_left.svg",next:"icon/chevron_right.svg",last:"icon/last_page.svg",question:"icon/help.svg",analysis:"icon/query_stats.svg",description:"icon/description.svg",play:"icon/play_arrow_FILL1.svg",close:"icon/close_FILL0.svg",call:"icon/record_voice_over_FILL0.svg",score:"icon/scoreboard_FILL0.svg",grid:"icon/grid_on_FILL0.svg",mateSearch:"icon/psychology_alt_FILL0.svg",add:"icon/add_circle_FILL0.svg",tree:"icon/account_tree_FILL0.svg",note:"icon/note_alt_FILL0.svg",batch:"icon/home_storage_FILL0.svg",openFolder:"icon/folder_open_FILL0.svg",history:"icon/history_FILL0.svg",pause:"icon/pause_circle_FILL0.svg",resume:"icon/play_circle_FILL0.svg",help:"icon/help_FILL0.svg",license:"icon/license_FILL0.svg",link:"icon/open_in_new_FILL0.svg",share:"icon/share_FILL0.svg",equalizer:"icon/instant_mix_FILL0.svg",refresh:"icon/refresh_FILL0.svg",robot:"icon/smart_toy_FILL0.svg"};Object.values(Q).forEach(e=>{oe(e)});const re=["src"],B=A({__name:"Icon",props:{icon:{type:String,required:!0}},setup(e){return(t,s)=>(c(),l("img",{class:"icon",src:u(Q)[e.icon],draggable:"false"},null,8,re))}});function W(e,t){e.addEventListener("cancel",s=>{s.preventDefault(),s.stopPropagation(),t==null||t()}),e.addEventListener("keydown",s=>{s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),t==null||t())}),e.addEventListener("copy",s=>{s.stopPropagation()}),e.addEventListener("paste",s=>{s.stopPropagation()}),e.showModal()}class P{constructor(t){this.children=[],this.parent=t}delete(t){const s=this.children.indexOf(t);return s===-1?!1:(this.children=this.children.slice(0,s).concat(this.children.slice(s+1)),this.children.length===0&&this.parent.delete(this),!0)}add(t){return this.children.push(t),this}}class b{constructor(t){this.parent=null,this.children={},this.parent=t||null}get(t){return this.children[t]}insert(t){let s=this;for(let i=0;i<t.length;i+=1){const n=t[i];let o=s.get(n);if(i===t.length-1)return o instanceof b&&(s.delete(o),o=null),o||(o=new P(s),s.children[n]=o),o;o instanceof P&&(o=null),o||(o=new b(s),s.children[n]=o),s=o}return s}delete(t){for(const s in this.children)if(this.children[s]===t){const n=delete this.children[s];return Object.keys(this.children).length===0&&this.parent&&this.parent.delete(this),n}return!1}}const ae={"¡":"1","™":"2","£":"3","¢":"4","∞":"5","§":"6","¶":"7","•":"8",ª:"9",º:"0","–":"-","≠":"=","⁄":"!","€":"@","‹":"#","›":"$",ﬁ:"%",ﬂ:"^","‡":"&","°":"*","·":"(","‚":")","—":"_","±":"+",œ:"q","∑":"w","®":"r","†":"t","¥":"y",ø:"o",π:"p","“":"[","‘":"]","«":"\\",Œ:"Q","„":"W","´":"E","‰":"R","ˇ":"T",Á:"Y","¨":"U","ˆ":"I",Ø:"O","∏":"P","”":"{","’":"}","»":"|",å:"a",ß:"s","∂":"d",ƒ:"f","©":"g","˙":"h","∆":"j","˚":"k","¬":"l","…":";",æ:"'",Å:"A",Í:"S",Î:"D",Ï:"F","˝":"G",Ó:"H",Ô:"J","":"K",Ò:"L",Ú:":",Æ:'"',Ω:"z","≈":"x",ç:"c","√":"v","∫":"b",µ:"m","≤":",","≥":".","÷":"/","¸":"Z","˛":"X",Ç:"C","◊":"V",ı:"B","˜":"N",Â:"M","¯":"<","˘":">","¿":"?"},ce={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+","[":"{","]":"}","\\":"|",";":":","'":'"',",":"<",".":">","/":"?",q:"Q",w:"W",e:"E",r:"R",t:"T",y:"Y",u:"U",i:"I",o:"O",p:"P",a:"A",s:"S",d:"D",f:"F",g:"G",h:"H",j:"J",k:"K",l:"L",z:"Z",x:"X",c:"C",v:"V",b:"B",n:"N",m:"M"},le={" ":"Space","+":"Plus"};function Z(e,t=navigator.platform){var s,i,n;const{ctrlKey:o,altKey:r,metaKey:d,shiftKey:p,key:_}=e,h=[],C=[o,r,d,p];for(const[m,S]of C.entries())S&&h.push(G[m]);if(!G.includes(_)){const m=h.includes("Alt")&&D.test(t)&&(s=ae[_])!==null&&s!==void 0?s:_,S=h.includes("Shift")&&D.test(t)&&(i=ce[m])!==null&&i!==void 0?i:m,ee=(n=le[S])!==null&&n!==void 0?n:S;h.push(ee)}return h.join("+")}const G=["Control","Alt","Meta","Shift"];function ue(e,t){let s;return s=de(e),s=fe(s),s}const D=/Mac|iPod|iPhone|iPad/i;function de(e,t){var s;const i=typeof window>"u"?void 0:window,n=(s=i==null?void 0:i.navigator.platform)!==null&&s!==void 0?s:"",o=D.test(n)?"Meta":"Control";return e.replace("Mod",o)}function fe(e){const t=e.split("+").pop(),s=[];for(const i of["Control","Alt","Meta","Shift"])e.includes(i)&&s.push(i);return t&&s.push(t),s.join("+")}const X=" ";class y{constructor({onReset:t}={}){this._path=[],this.timer=null,this.onReset=t}get path(){return this._path}get sequence(){return this._path.join(X)}registerKeypress(t){this._path=[...this._path,Z(t)],this.startTimer()}reset(){var t;this.killTimer(),this._path=[],(t=this.onReset)===null||t===void 0||t.call(this)}killTimer(){this.timer!=null&&window.clearTimeout(this.timer),this.timer=null}startTimer(){this.killTimer(),this.timer=window.setTimeout(()=>this.reset(),y.CHORD_TIMEOUT)}}y.CHORD_TIMEOUT=1500;function H(e){if(!(e instanceof HTMLElement))return!1;const t=e.nodeName.toLowerCase(),s=(e.getAttribute("type")||"").toLowerCase();return t==="select"||t==="textarea"||t==="input"&&s!=="submit"&&s!=="reset"&&s!=="checkbox"&&s!=="radio"&&s!=="file"||e.isContentEditable}function ge(e,t){const s=new CustomEvent("hotkey-fire",{cancelable:!0,detail:{path:t}});e.dispatchEvent(s)&&(H(e)?e.focus():e.click())}function he(e){const t=[];let s=[""],i=!1;for(let n=0;n<e.length;n++){if(i&&e[n]===","){t.push(s),s=[""],i=!1;continue}if(e[n]===X){s.push(""),i=!1;continue}else e[n]==="+"?i=!1:i=!0;s[s.length-1]+=e[n]}return t.push(s),t.map(n=>n.map(o=>ue(o)).filter(o=>o!=="")).filter(n=>n.length>0)}const k=new b,J=new WeakMap;let K=k;const F=new y({onReset(){K=k}});function T(e){if(e.defaultPrevented||!(e.target instanceof Node))return;if(H(e.target)){const s=e.target;if(!s.id||!s.ownerDocument.querySelector(`[data-hotkey-scope="${s.id}"]`))return}const t=K.get(Z(e));if(!t){F.reset();return}if(F.registerKeypress(e),K=t,t instanceof P){const s=e.target;let i=!1,n;const o=H(s);for(let r=t.children.length-1;r>=0;r-=1){n=t.children[r];const d=n.getAttribute("data-hotkey-scope");if(!o&&!d||o&&s.id===d){i=!0;break}}n&&i&&(ge(n,F.path),e.preventDefault()),F.reset()}}function _e(e,t){Object.keys(k.children).length===0&&document.addEventListener("keydown",T);const i=he(e.getAttribute("data-hotkey")||"").map(n=>k.insert(n).add(e));J.set(e,i)}function ve(e){const t=J.get(e);if(t&&t.length)for(const s of t)s&&s.delete(e);Object.keys(k.children).length===0&&document.removeEventListener("keydown",T)}function N(e){for(const t of e.querySelectorAll("[data-hotkey]"))_e(t)}function R(e){for(const t of e.querySelectorAll("[data-hotkey]"))ve(t)}const v=[],f=[];function Ke(e){f.length===0&&N(e),v.push(e)}function xe(e){f.length===0&&R(e);for(let t=0;t<v.length;t++)if(v[t]===e){v.splice(t,1);break}}function j(e){if(f.length===0)for(const t of v)R(t);else R(f[f.length-1]);N(e),f.push(e)}function I(e){for(let t=0;t<f.length;t++)if(f[t]===e){f.splice(t,1),t===f.length&&R(e);break}if(f.length===0)for(const t of v)N(t);else N(f[f.length-1])}const pe={class:"message-box"},me={class:"message"},Le={class:"main-buttons"},Ee=A({__name:"ConfirmDialog",setup(e){const t=te(),s=x(),i=()=>{t.ok()},n=()=>{t.cancel()};return $(()=>{W(s.value,n),j(s.value)}),q(()=>{I(s.value)}),(o,r)=>(c(),l("div",null,[a("dialog",{ref_key:"dialog",ref:s,class:"confirm"},[a("div",pe,[U(B,{icon:u(O).QUESTION},null,8,["icon"]),a("div",me,g(u(t).message),1)]),a("div",Le,[a("button",{"data-hotkey":"Enter",autofocus:"",onClick:r[0]||(r[0]=d=>i())},"OK"),a("button",{"data-hotkey":"Escape",onClick:r[1]||(r[1]=d=>n())},g(u(w).cancel),1)])],512)]))}}),$e=z(Ee,[["__scopeId","data-v-212ce444"]]),ke={class:"message-box"},Se={class:"message"},Fe={key:0,class:"list"},we=["onClick"],be={class:"main-buttons"},Ne=A({__name:"InfoMessage",setup(e){const t=se(),s=x();$(()=>{W(s.value,i),j(s.value)}),q(()=>{I(s.value)});const i=()=>{t.dequeue()};return(n,o)=>(c(),l("div",null,[a("dialog",{ref_key:"dialog",ref:s,class:"info"},[a("div",ke,[U(B,{icon:u(O).INFO},null,8,["icon"]),a("div",Se,[(c(!0),l(L,null,E(u(t).message.text.split(`
`),(r,d)=>(c(),l("div",{key:d},g(r),1))),128))])]),(c(!0),l(L,null,E(u(t).message.attachments,(r,d)=>(c(),l("div",{key:d,class:"attachment"},[r.type==="list"?(c(),l("ul",Fe,[(c(!0),l(L,null,E(r.items,(p,_)=>(c(),l("li",{key:_,class:"list-item"},[Y(g(p.text)+" ",1),a("ul",null,[(c(!0),l(L,null,E(p.children,(h,C)=>(c(),l("li",{key:C,class:"list-child-item"},g(h),1))),128))])]))),128))])):M("",!0),r.type==="link"?(c(),l("button",{key:1,onClick:p=>u(ie).openWebBrowser(r.url)},g(r.text),9,we)):M("",!0)]))),128)),a("div",be,[a("button",{autofocus:"","data-hotkey":"Escape",onClick:o[0]||(o[0]=r=>i())},g(u(w).close),1)])],512)]))}}),qe=z(Ne,[["__scopeId","data-v-1c0d0040"]]),Re={class:"message-box"},Ae={class:"column"},Oe={class:"notice"},ye={class:"index"},Ce={key:0},Me={class:"message"},Pe={class:"main-buttons"},De=A({__name:"ErrorMessage",setup(e){const t=ne(),s=x();$(()=>{W(s.value,i),j(s.value)}),q(()=>{I(s.value)});const i=()=>{t.clear()};return(n,o)=>(c(),l("div",null,[a("dialog",{ref_key:"dialog",ref:s,class:"error"},[a("div",Re,[U(B,{icon:u(O).ERROR},null,8,["icon"]),a("div",Ae,[a("div",Oe,g(u(w).errorsOccurred(u(t).errors.length)),1),(c(!0),l(L,null,E(u(t).errors,(r,d)=>(c(),l("div",{key:d,class:"item"},[a("p",ye,[Y(g(d+1)+" ",1),r.count>=2?(c(),l("span",Ce,"("+g(r.count)+" 回)",1)):M("",!0)]),a("p",Me,g(r.message),1)]))),128))])]),a("div",Pe,[a("button",{autofocus:"","data-hotkey":"Escape",onClick:o[0]||(o[0]=r=>i())},g(u(w).close),1)])],512)]))}}),Ue=z(De,[["__scopeId","data-v-d267f904"]]);export{$e as C,Ue as E,O as I,B as _,Ke as a,xe as b,qe as c,j as i,oe as p,W as s,I as u};