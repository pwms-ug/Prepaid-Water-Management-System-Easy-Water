(function(){var h=this||self;function k(a){return"string"==typeof a}
function aa(a){a=a.split(".");for(var b=h,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
;var ca=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(k(a))return k(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},da=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=k(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var l=f[g];
b.call(void 0,l,g,a)&&(d[e++]=l)}return d};
function fa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=ba(d);if("array"==e||"object"==e&&"number"==typeof d.length){e=a.length||0;var f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var m;a:{var ha=h.navigator;if(ha){var ia=ha.userAgent;if(ia){m=ia;break a}}m=""};var ja="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ka(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ja.length;f++)c=ja[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var la=-1!=m.indexOf("Trident")||-1!=m.indexOf("MSIE"),ma=-1!=m.toLowerCase().indexOf("webkit")&&-1==m.indexOf("Edge");function p(a,b){this.width=a;this.height=b}
p.prototype.aspectRatio=function(){return this.width/this.height};
p.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function na(){var a=document;return k("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var r=window,t=document,oa=r.location;function pa(){}
var qa=/\[native code\]/;function w(a,b,c){return a[b]=a[b]||c}
function ra(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function x(){var a;if((a=Object.create)&&qa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var z=w(r,"gapi",{});var A;A=w(r,"___jsl",x());w(A,"I",0);w(A,"hel",10);function sa(){var a=oa.href;if(A.dpo)var b=A.h;else{b=A.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function ta(a){var b=w(A,"PQ",[]);A.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function ua(a){return w(w(A,"H",x()),a,x())}
;var B=w(A,"perf",x());w(B,"g",x());var va=w(B,"i",x());w(B,"r",[]);x();x();function C(a,b,c){b&&0<b.length&&(b=wa(b),c&&0<c.length&&(b+="___"+wa(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=w(va,"_p",x()),w(b,c,x())[a]=(new Date).getTime(),b=B.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function wa(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var xa=x(),D=[];function E(a){throw Error("Bad hint"+(a?": "+a:""));}
D.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?A[b]=w(A,b,[]).concat(c):w(A,b,c)}if(b=a.u)a=w(A,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var ya=/^(\/[a-zA-Z0-9_\-]+)+$/,za=[/\/amp\//,/\/amp$/,/^\/amp$/],Aa=/^[a-zA-Z0-9\-_\.,!]+$/,Ba=/^gapi\.loaded_[0-9]+$/,Ca=/^[a-zA-Z0-9,._-]+$/;function Da(a,b,c,d){var e=a.split(";"),f=e.shift(),g=xa[f],l=null;g?l=g(e,b,c,d):E("no hint processor for: "+f);l||E("failed to generate load url");b=l;c=b.match(Ea);(d=b.match(Fa))&&1===d.length&&Ga.test(b)&&c&&1===c.length||E("failed sanity: "+a);return l}
function Ha(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=Ia(a);Ba.test(c)||E("invalid_callback");b=Ja(b);d=d&&d.length?Ja(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.f?"/rs="+e(a.f):"",a.g?"/t="+e(a.g):"","/cb=",e(c)].join("")}
function Ia(a){"/"!==a.charAt(0)&&E("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))E("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),l=decodeURIComponent(f[1]);2==f.length&&g&&l&&(a[g]=a[g]||l)}b="/"+c.join("/");ya.test(b)||E("invalid_prefix");c=0;for(d=za.length;c<d;++c)za[c].test(b)&&E("invalid_prefix");c=I(a,"k",
!0);d=I(a,"am");e=I(a,"rs");a=I(a,"t");return{pathPrefix:b,version:c,a:d,f:e,g:a}}
function Ja(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Ca.test(e)&&b.push(e)}return b.join(",")}
function I(a,b,c){a=a[b];!a&&c&&E("missing: "+b);if(a){if(Aa.test(a))return a;E("invalid: "+b)}return null}
var Ga=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Fa=/\/cb=/g,Ea=/\/\//g;function Ka(){var a=sa();if(!a)throw Error("Bad hint");return a}
xa.m=function(a,b,c,d){(a=a[0])||E("missing_hint");return"https://apis.google.com"+Ha(a,b,c,d)};
var J=decodeURI("%73cript"),La=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Ma(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Na(){var a=A.nonce;return void 0!==a?a&&a===String(a)&&a.match(La)?a:A.nonce=null:t.querySelector?(a=t.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(La)?A.nonce=a:A.nonce=null):null:null}
function Oa(a){if("loading"!=t.readyState)Pa(a);else{var b=Na(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+J+' src="'+encodeURI(a)+'"'+c+"></"+J+">";t.write(a)}}
function Pa(a){var b=t.createElement(J);b.setAttribute("src",a);a=Na();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=t.getElementsByTagName(J)[0])?a.parentNode.insertBefore(b,a):(t.head||t.body||t.documentElement).appendChild(b)}
function Qa(a,b){var c=b&&b._c;if(c)for(var d=0;d<D.length;d++){var e=D[d][0],f=D[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Ra(a,b,c){Sa(function(){var d=b===sa()?w(z,"_",x()):x();d=w(ua(b),"_",d);a(d)},c)}
function Ta(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Qa(a,c);var d=a?a.split(":"):[],e=c.h||Ka(),f=w(A,"ah",x());if(f["::"]&&d.length){for(var g=[],l=null;l=d.shift();){var n=l.split(".");n=f[l]||f[n[1]&&"ns:"+n[0]||""]||e;var F=g.length&&g[g.length-1]||null,G=F;F&&F.hint==n||(G={hint:n,b:[]},g.push(G));G.b.push(l)}var L=g.length;if(1<L){var H=c.callback;H&&(c.callback=function(){0==--L&&H()})}for(;d=g.shift();)Ua(d.b,c,d.hint)}else Ua(d||[],c,e)}
function Ua(a,b,c){function d(y,M){if(L)return 0;r.clearTimeout(G);H.push.apply(H,q);var N=((z||{}).config||{}).update;N?N(f):f&&w(A,"cu",[]).push(f);if(M){C("me0",y,V);try{Ra(M,c,F)}finally{C("me1",y,V)}}return 1}
a=ra(a)||[];var e=b.callback,f=b.config,g=b.timeout,l=b.ontimeout,n=b.onerror,F=void 0;"function"==typeof n&&(F=n);var G=null,L=!1;if(g&&!l||!g&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";n=w(ua(c),"r",[]).sort();var H=w(ua(c),"L",[]).sort(),V=[].concat(n);0<g&&(G=r.setTimeout(function(){L=!0;l()},g));
var q=Ma(a,H);if(q.length){q=Ma(a,n);var u=w(A,"CP",[]),v=u.length;u[v]=function(y){function M(){var W=u[v+1];W&&W()}
function N(W){u[v]=null;d(q,y)&&ta(function(){e&&e();W()})}
if(!y)return 0;C("ml1",q,V);0<v&&u[v-1]?u[v]=function(){N(M)}:N(M)};
if(q.length){var ea="loaded_"+A.I++;z[ea]=function(y){u[v](y);z[ea]=null};
a=Da(c,q,"gapi."+ea,n);n.push.apply(n,q);C("ml0",q,V);b.sync||r.___gapisync?Oa(a):Pa(a)}else u[v](pa)}else d(q)&&e&&e()}
function Sa(a,b){if(A.hee&&0<A.hel)try{return a()}catch(c){b&&b(c),A.hel--,Ta("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
z.load=function(a,b){return Sa(function(){return Ta(a,b)})};function Va(a){if(a.classList)return a.classList;a=a.className;return k(a)&&a.match(/\S+/g)||[]}
function Wa(a,b){if(a.classList)var c=a.classList.contains(b);else c=Va(a),c=0<=ca(c,b);return c}
function Xa(a,b){a.classList?a.classList.add(b):Wa(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Ya(a,b){a.classList?a.classList.remove(b):Wa(a,b)&&(a.className=da(Va(a),function(c){return c!=b}).join(" "))}
;function Za(a){var b=a.offsetWidth,c=a.offsetHeight,d=ma&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){a:{try{var e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}la&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new p(e.right-e.left,e.bottom-e.top)}return new p(b,c)}
;var K=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{},O=["yt","config_"],P=h;O[0]in P||"undefined"==typeof P.execScript||P.execScript("var "+O[0]);for(var Q;O.length&&(Q=O.shift());)O.length||void 0===K?P[Q]&&P[Q]!==Object.prototype[Q]?P=P[Q]:P=P[Q]={}:P[Q]=K;function $a(a){var b=arguments;if(1<b.length)K[b[0]]=b[1];else{b=b[0];for(var c in b)K[c]=b[c]}}
;function ab(a,b,c,d){var e=bb,f=aa("yt.logging.errors.log");f?f(e,a,b,c,d):(f=[],f="ERRORS"in K?K.ERRORS:f,f.push([e,a,b,c,d]),$a("ERRORS",f))}
;function cb(){return aa("gapi.iframes.getContext")()}
function db(){return aa("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;function eb(a){try{a.register("msg-hovercard-subscription",fb,db())}catch(b){}}
function fb(a){if(a){a=!!a.isSubscribed;var b=na();a?Ya(b,"subscribe"):Xa(b,"subscribe");a?Xa(b,"subscribed"):Ya(b,"subscribed")}}
;function R(){var a=na();b:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=Za(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=Za(a);b.display=c;b.position=e;b.visibility=d}a={width:a.width,
height:a.height};cb().ready(a,null,void 0);a=db();cb().addOnOpenerHandler(eb,null,a)}
var S=R;S=void 0===S?{}:S;"function"==ba(S)&&(S={callback:S});R=S;var gb;(gb=R.gapiHintOverride)||(gb="GAPI_HINT_OVERRIDE"in K?K.GAPI_HINT_OVERRIDE:void 0);
if(gb){var hb;var T=document.location.href;if(-1!=T.indexOf("?")){T=(T||"").split("#")[0];var ib=T.split("?",2),U=1<ib.length?ib[1]:ib[0];"?"==U.charAt(0)&&(U=U.substr(1));for(var jb=U.split("&"),X={},kb=0,lb=jb.length;kb<lb;kb++){var Y=jb[kb].split("=");if(1==Y.length&&Y[0]||2==Y.length)try{var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),mb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==ba(X[Z])?fa(X[Z],mb):X[Z]=[X[Z],mb]:X[Z]=mb}catch(a){var bb=Error("Error decoding URL component");
bb.params="key: "+Y[0]+", value: "+Y[1];"q"==Y[0]?ab("WARNING",void 0,void 0,void 0):ab()}}hb=X}else hb={};var nb=hb.gapi_jsh;nb&&ka(R,{_c:{jsl:{h:nb}}})}Ta("gapi.iframes:gapi.iframes.style.common",R);}).call(this);
