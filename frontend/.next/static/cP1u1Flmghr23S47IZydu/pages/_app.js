(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+Isj":function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=n("kKU3"),s=a.forwardRef((function(e,t){var n=e.children,c=e.classes,s=e.className,u=e.invisible,f=void 0!==u&&u,d=e.open,p=e.transitionDuration,v=Object(o.a)(e,["children","classes","className","invisible","open","transitionDuration"]);return a.createElement(l.a,Object(r.a)({in:d,timeout:p},v),a.createElement("div",{className:Object(i.a)(c.root,s,f&&c.invisible),"aria-hidden":!0,ref:t},n))}));t.a=Object(c.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(s)},"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"4sZo":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),a=(0,r(n("8/g6")).default)(o.default.createElement("path",{transform:"scale(0.5, 0.5)",d:"M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z"}),"Domain");t.default=a},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8/g6":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default.memo(a.default.forwardRef((function(t,n){return a.default.createElement(i.default,(0,o.default)({ref:n},t),e)})));0;return n.muiName=i.default.muiName,n};var o=r(n("pVnL")),a=r(n("q1tI")),i=r(n("UJJ5"))},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),c=n("FYa8"),l=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var s=f[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var u=o.props[s],d=r[s]||new Set;d.has(u)?a=!1:(d.add(u),r[s]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var p=a.default();function v(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}v.rewind=p.rewind,t.default=v},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},JxCS:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),a=(0,r(n("8/g6")).default)(o.default.createElement("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard");t.default=a},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},UJJ5:function(e,t,n){"use strict";n.r(t);var r=n("HR5l");n.d(t,"default",(function(){return r.a}))},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),i=n("tCBg"),c=n("T0f4"),l=n("48fX"),s=n("mPvQ");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(s){l(v,s);var f,p=(f=v,function(){var e,t=c(f);if(u()){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function v(e){var a;return r(this,v),a=p.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(v,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(v,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),v}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),a=n("tCBg"),i=n("T0f4"),c=n("48fX");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var s=n("AroE"),u=n("7KCV");t.__esModule=!0,t.default=void 0;var f,d=u(n("q1tI")),p=n("QmWs"),v=n("g/15"),h=s(n("nOHt"));function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var b=new Map,g=window.IntersectionObserver,y={};function O(){return f||(g?f=new g((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){c(s,e);var t,n=(t=s,function(){var e,n=i(t);if(l()){var r=i(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)});function s(e){var t;return r(this,s),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:m(e),as:t?m(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),i=a.href,c=a.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=(0,p.resolve)(l,i),c=c?(0,p.resolve)(l,c):i,e.preventDefault();var s=t.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[t.props.replace?"replace":"push"](i,c,{shallow:t.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,p.resolve)(e,n);return[o,r?(0,p.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=O();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),y[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),d.default.cloneElement(a,i)}}]),s}(d.Component);t.default=w},cha2:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("nOHt"),i=n("8Kt/"),c=n.n(i),l=n("wx14"),s=n("17x9"),u=n.n(s),f=n("OKji"),d=n("aXM8"),p=n("hfi/");var v=function(e){var t=e.children,n=e.theme,r=Object(d.a)(),a=o.a.useMemo((function(){var e=null===r?n:function(e,t){return"function"===typeof t?t(e):Object(l.a)({},e,{},t)}(r,n);return null!=e&&(e[p.a]=null!==r),e}),[n,r]);return o.a.createElement(f.a.Provider,{value:a},t)},h=n("H2TA"),m={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},b=function(e){return Object(l.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var g=Object(h.a)((function(e){return{"@global":{html:m,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(l.a)({margin:0},b(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,r.createElement(r.Fragment,null,n)})),y=n("74dO"),O=n("lync"),w=n("rePB"),x=n("ODXe"),j=n("iuhU"),k=n("lopY"),E=n("tr08"),C=n("YFqc"),S=n.n(C),D=n("eD//"),M=n("tVbE"),P=n("Z3vd"),R=n("Ff2n"),A=n("Xt1q"),_=n("+Isj"),T=n("i8i4"),U=n("l3Wi"),I=n("dRu9"),H=n("bfFb"),N=n("wpWl"),z=n("4Hym");function q(e,t){var n=function(e,t){var n,r=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var o=window.getComputedStyle(t);n=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform")}var a=0,i=0;if(n&&"none"!==n&&"string"===typeof n){var c=n.split("(")[1].split(")")[0].split(",");a=parseInt(c[4],10),i=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(-").concat(r.left-a,"px)"):"right"===e?"translateX(-".concat(r.left+r.width-a,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(-").concat(r.top-i,"px)"):"translateY(-".concat(r.top+r.height-i,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var W={enter:N.b.enteringScreen,exit:N.b.leavingScreen},B=r.forwardRef((function(e,t){var n=e.children,o=e.direction,a=void 0===o?"down":o,i=e.in,c=e.onEnter,s=e.onEntering,u=e.onExit,f=e.onExited,d=e.style,p=e.timeout,v=void 0===p?W:p,h=Object(R.a)(e,["children","direction","in","onEnter","onEntering","onExit","onExited","style","timeout"]),m=Object(E.a)(),b=r.useRef(null),g=r.useCallback((function(e){b.current=T.findDOMNode(e)}),[]),y=Object(H.a)(n.ref,g),O=Object(H.a)(y,t),w=r.useCallback((function(){b.current&&q(a,b.current)}),[a]);return r.useEffect((function(){if(!i&&"down"!==a&&"right"!==a){var e=Object(U.a)((function(){b.current&&q(a,b.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[a,i]),r.useEffect((function(){i||w()}),[i,w]),r.createElement(I.a,Object(l.a)({onEnter:function(e,t){var n=b.current;q(a,n),Object(z.b)(n),c&&c(n,t)},onEntering:function(e,t){var n=b.current,r=Object(z.a)({timeout:v,style:d},{mode:"enter"});n.style.webkitTransition=m.transitions.create("-webkit-transform",Object(l.a)({},r,{easing:m.transitions.easing.easeOut})),n.style.transition=m.transitions.create("transform",Object(l.a)({},r,{easing:m.transitions.easing.easeOut})),n.style.webkitTransform="none",n.style.transform="none",s&&s(n,t)},onExit:function(){var e=b.current,t=Object(z.a)({timeout:v,style:d},{mode:"exit"});e.style.webkitTransition=m.transitions.create("-webkit-transform",Object(l.a)({},t,{easing:m.transitions.easing.sharp})),e.style.transition=m.transitions.create("transform",Object(l.a)({},t,{easing:m.transitions.easing.sharp})),q(a,e),u&&u(e)},onExited:function(){var e=b.current;e.style.webkitTransition="",e.style.transition="",f&&f(e)},appear:!0,in:i,timeout:v},h),(function(e,t){return r.cloneElement(n,Object(l.a)({ref:O,style:Object(l.a)({visibility:"exited"!==e||i?void 0:"hidden"},d,{},n.props.style)},t))}))})),L=n("kKAo"),F=n("NqtD"),V={left:"right",right:"left",top:"down",bottom:"up"};var X={enter:N.b.enteringScreen,exit:N.b.leavingScreen},K=r.forwardRef((function(e,t){var n=e.anchor,o=void 0===n?"left":n,a=e.BackdropProps,i=e.children,c=e.classes,s=e.className,u=e.elevation,f=void 0===u?16:u,d=e.ModalProps,p=(d=void 0===d?{}:d).BackdropProps,v=Object(R.a)(d,["BackdropProps"]),h=e.onClose,m=e.open,b=void 0!==m&&m,g=e.PaperProps,y=void 0===g?{}:g,O=e.SlideProps,w=e.transitionDuration,x=void 0===w?X:w,k=e.variant,C=void 0===k?"temporary":k,S=Object(R.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","transitionDuration","variant"]),D=Object(E.a)(),M=r.useRef(!1);r.useEffect((function(){M.current=!0}),[]);var P=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?V[t]:t}(D,o),T=r.createElement(L.a,Object(l.a)({elevation:"temporary"===C?f:0,square:!0},y,{className:Object(j.a)(c.paper,c["paperAnchor".concat(Object(F.a)(P))],y.className,"temporary"!==C&&c["paperAnchorDocked".concat(Object(F.a)(P))])}),i);if("permanent"===C)return r.createElement("div",Object(l.a)({className:Object(j.a)(c.root,c.docked,s),ref:t},S),T);var U=r.createElement(B,Object(l.a)({in:b,direction:V[P],timeout:x,appear:M.current},O),T);return"persistent"===C?r.createElement("div",Object(l.a)({className:Object(j.a)(c.root,c.docked,s),ref:t},S),U):r.createElement(A.a,Object(l.a)({BackdropProps:Object(l.a)({},a,{},p,{transitionDuration:x}),BackdropComponent:_.a,className:Object(j.a)(c.root,c.modal,s),open:b,onClose:h,ref:t},S,v),U)})),Y=Object(h.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(K),G=n("cVXz"),J=n("jjAL"),Z=n("wb2y"),Q=n("JxCS"),$=n.n(Q),ee=n("oZgQ"),te=n.n(ee),ne=n("eHoR"),re=n.n(ne),oe=n("4sZo"),ae=n.n(oe),ie=n("aiuL"),ce=n("As0B"),le=Object(ce.a)(r.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var se=r.forwardRef((function(e,t){var n=e.alt,o=e.children,a=e.classes,i=e.className,c=e.component,s=void 0===c?"div":c,u=e.imgProps,f=e.sizes,d=e.src,p=e.srcSet,v=e.variant,h=void 0===v?"circle":v,m=Object(R.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),b=null,g=function(e){var t=e.src,n=e.srcSet,o=r.useState(!1),a=o[0],i=o[1];return r.useEffect((function(){if(t||n){i(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&i("loaded")},r.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,n]),a}({src:d,srcSet:p}),y=d||p,O=y&&"error"!==g;return b=O?r.createElement("img",Object(l.a)({alt:n,src:d,srcSet:p,sizes:f,className:a.img},u)):null!=o?o:y&&n?n[0]:r.createElement(le,{className:a.fallback}),r.createElement(s,Object(l.a)({className:Object(j.a)(a.root,a.system,a[h],i,!O&&a.colorDefault),ref:t},m),b)})),ue=Object(h.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(se),fe=n("ofer"),de=n("R/WZ"),pe=n("ZBNC"),ve=Object(de.a)((function(e){return Object(pe.a)({root:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"fit-content",padding:e.spacing(1)},avatar:{width:60,height:60},name:{marginTop:e.spacing(1)}})})),he=r.createElement,me=function(e){var t=e.name,n=e.role,r=ve();return he("div",{className:r.root},he(ue,{className:r.avatar}),he(fe.a,{className:r.name,variant:"body1"},t),n&&he(fe.a,{variant:"body2"},n))},be={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"},ge=Object(de.a)((function(e){return Object(pe.a)({root:{backgroundColor:e.palette.common.white,display:"flex",flexDirection:"column",height:"100%",padding:e.spacing(2)},drawer:Object(w.a)({width:240},e.breakpoints.up("lg"),{marginTop:64,height:"calc(100% - 64px)"}),divider:{margin:e.spacing(2,0)},nav:{marginBottom:e.spacing(2)},item:{display:"flex",paddingTop:0,paddingBottom:0},button:{color:be[800],padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%",fontWeight:e.typography.fontWeightMedium},icon:{color:be[300],width:24,height:24,display:"flex",alignItems:"center",marginRight:e.spacing(1)},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium,"& $icon":{color:e.palette.primary.main}}})})),ye=r.createElement,Oe=function(e){var t=e.items,n=ge();return ye(D.a,{className:n.nav},t.map((function(e,t){return ye(M.a,{className:n.item,disableGutters:!0,key:t},ye(S.a,{href:e.link.href,as:e.link.as},ye(P.a,{className:n.button},ye("div",{className:n.icon},e.icon),e.title)))})))},we=function(e){var t=e.open,n=e.variant,o=e.onClose,i=ge(),c=Object(ie.a)(),l=c.locale,s=c.t,u=Object(a.useRouter)(),f=[{title:"Dashboard",link:{href:"/[locale]",as:"/".concat(l)},icon:ye($.a,null)},{title:s("navigation-register-visitor"),link:{href:"/[locale]/visitor/register",as:"/".concat(l,"/visitor/register")},icon:ye(re.a,null)},{title:s("navigation-cancle-visitor"),link:{href:"/[locale]/visitor/cancle",as:"/".concat(l,"/visitor/cancle")},icon:ye(te.a,null)},{title:s("navigation-property-management"),link:{href:"/[locale]/property",as:"/".concat(l,"/property")},icon:ye(ae.a,null)}],d=r.useCallback((function(e){var t=new RegExp("^/(".concat(y.d.join("|"),")"));u.push(u.pathname,u.asPath.replace(t,"/".concat(e)))}),[u]);return ye(Y,{anchor:"left",classes:{paper:i.drawer},onClose:o,open:t,variant:n},ye("div",{className:i.root},ye(G.a,{value:l,onChange:function(e){return d(e.target.value)}},y.d.map((function(e){return ye(J.a,{key:e,value:e},e.toUpperCase())}))),ye(me,{name:"Stephan Gilli",role:"Angestellter"}),ye(Z.a,null),ye(Oe,{items:f})))},xe=r.forwardRef((function(e,t){var n=e.classes,o=e.className,a=e.color,i=void 0===a?"primary":a,c=e.position,s=void 0===c?"fixed":c,u=Object(R.a)(e,["classes","className","color","position"]);return r.createElement(L.a,Object(l.a)({square:!0,component:"header",elevation:4,className:Object(j.a)(n.root,n["position".concat(Object(F.a)(s))],n["color".concat(Object(F.a)(i))],o,"fixed"===s&&"mui-fixed"),ref:t},u))})),je=Object(h.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static",transform:"translateZ(0)"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(xe),ke=n("lO0E"),Ee=n("KQm4"),Ce=n("A+CX"),Se=n("2mql"),De=n.n(Se),Me=n("LEIi"),Pe=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?Me.b.indexOf(e)<=Me.b.indexOf(t):Me.b.indexOf(e)<Me.b.indexOf(t)},Re=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?Me.b.indexOf(t)<=Me.b.indexOf(e):Me.b.indexOf(t)<Me.b.indexOf(e)},Ae="undefined"===typeof window?r.useEffect:r.useLayoutEffect,_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.withTheme,o=void 0!==n&&n,a=e.noSSR,i=void 0!==a&&a,c=e.initialWidth;function s(e){var n=Object(E.a)(),a=e.theme||n,s=Object(Ce.a)({theme:a,name:"MuiWithWidth",props:Object(l.a)({},e)}),u=s.initialWidth,f=s.width,d=Object(R.a)(s,["initialWidth","width"]),p=r.useState(!1),v=p[0],h=p[1];Ae((function(){h(!0)}),[]);var m=Object(Ee.a)(a.breakpoints.keys).reverse().reduce((function(e,t){var n=Object(k.a)(a.breakpoints.up(t));return!e&&n?t:e}),null),b=Object(l.a)({width:f||(v||i?m:void 0)||u||c},o?{theme:a}:{},{},d);return void 0===b.width?null:r.createElement(t,b)}return De()(s,t),s}};function Te(e){var t=e.children,n=e.only,r=e.width,o=Object(E.a)(),a=!0;if(n)if(Array.isArray(n))for(var i=0;i<n.length;i+=1){if(r===n[i]){a=!1;break}}else n&&r===n&&(a=!1);if(a)for(var c=0;c<o.breakpoints.keys.length;c+=1){var l=o.breakpoints.keys[c],s=e["".concat(l,"Up")],u=e["".concat(l,"Down")];if(s&&Pe(l,r)||u&&Re(l,r)){a=!1;break}}return a?t:null}Te.propTypes={children:u.a.node,className:u.a.string,implementation:u.a.oneOf(["js","css"]),initialWidth:u.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:u.a.bool,lgUp:u.a.bool,mdDown:u.a.bool,mdUp:u.a.bool,only:u.a.oneOfType([u.a.oneOf(["xs","sm","md","lg","xl"]),u.a.arrayOf(u.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:u.a.bool,smUp:u.a.bool,width:u.a.string.isRequired,xlDown:u.a.bool,xlUp:u.a.bool,xsDown:u.a.bool,xsUp:u.a.bool};var Ue=_e()(Te);var Ie=Object(h.a)((function(e){var t={display:"none"};return e.breakpoints.keys.reduce((function(n,r){return n["only".concat(Object(F.a)(r))]=Object(w.a)({},e.breakpoints.only(r),t),n["".concat(r,"Up")]=Object(w.a)({},e.breakpoints.up(r),t),n["".concat(r,"Down")]=Object(w.a)({},e.breakpoints.down(r),t),n}),{})}),{name:"PrivateHiddenCss"})((function(e){var t=e.children,n=e.classes,o=e.className,a=e.only,i=(Object(R.a)(e,["children","classes","className","only"]),Object(E.a)()),c=[];o&&c.push(o);for(var l=0;l<i.breakpoints.keys.length;l+=1){var s=i.breakpoints.keys[l],u=e["".concat(s,"Up")],f=e["".concat(s,"Down")];u&&c.push(n["".concat(s,"Up")]),f&&c.push(n["".concat(s,"Down")])}return a&&(Array.isArray(a)?a:[a]).forEach((function(e){c.push(n["only".concat(Object(F.a)(e))])})),r.createElement("div",{className:c.join(" ")},t)}));var He=function(e){var t=e.implementation,n=void 0===t?"js":t,o=e.lgDown,a=void 0!==o&&o,i=e.lgUp,c=void 0!==i&&i,s=e.mdDown,u=void 0!==s&&s,f=e.mdUp,d=void 0!==f&&f,p=e.smDown,v=void 0!==p&&p,h=e.smUp,m=void 0!==h&&h,b=e.xlDown,g=void 0!==b&&b,y=e.xlUp,O=void 0!==y&&y,w=e.xsDown,x=void 0!==w&&w,j=e.xsUp,k=void 0!==j&&j,E=Object(R.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===n?r.createElement(Ue,Object(l.a)({lgDown:a,lgUp:c,mdDown:u,mdUp:d,smDown:v,smUp:m,xlDown:g,xlUp:O,xsDown:x,xsUp:k},E)):r.createElement(Ie,Object(l.a)({lgDown:a,lgUp:c,mdDown:u,mdUp:d,smDown:v,smUp:m,xlDown:g,xlUp:O,xsDown:x,xsUp:k},E))},Ne=n("PsDL"),ze=n("uniG"),qe=n.n(ze),We=Object(de.a)((function(e){return Object(pe.a)({root:{boxShadow:"none"},flexGrow:{flexGrow:1},signOutButton:{marginLeft:e.spacing(1)}})})),Be=r.createElement,Le=function(e){var t=e.onMenuClick,n=We();return Be(je,{className:n.root},Be(ke.a,null,Be(He,{mdDown:!0},Be(Ne.a,{className:n.signOutButton,color:"inherit"},Be(te.a,null))),Be(He,{lgUp:!0},Be(Ne.a,{color:"inherit",onClick:t},Be(qe.a,null)))))},Fe=Object(de.a)((function(e){return Object(pe.a)({root:Object(w.a)({backgroundColor:"#f4f6f8",paddingTop:56,height:"100%"},e.breakpoints.up("sm"),{paddingTop:64}),shiftContent:{paddingLeft:240},content:{height:"100%",position:"relative"}})})),Ve=r.createElement,Xe=function(e){var t,n=e.children,o=r.useState(!1),a=Object(x.a)(o,2),i=a[0],c=a[1],l=Object(E.a)(),s=Object(k.a)(l.breakpoints.up("lg"),{defaultMatches:!0}),u=Fe();return Ve("div",{className:Object(j.a)((t={},Object(w.a)(t,u.root,!0),Object(w.a)(t,u.shiftContent,s),t))},Ve(Le,{onMenuClick:function(){return c(!0)}}),Ve(we,{open:i,onClose:function(){return c(!1)},variant:s?"permanent":"temporary"}),Ve("main",{className:u.content},n))},Ke=n("viY9"),Ye=n("fWIC"),Ge=n.n(Ye),Je=Object(Ke.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:Ge.a.A400},background:{default:"#fff"}}}),Ze=o.a.createElement;t.default=function(e){var t=e.Component,n=e.pageProps,r=Object(a.useRouter)(),i=y.a;return r.query.locale&&(i=r.query.locale),o.a.useEffect((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}),[]),Ze(o.a.Fragment,null,Ze(c.a,null,Ze("title",null,"WirVsVirusHack"),Ze("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})),Ze(v,{theme:Je},Ze(g,null),Ze(O.a,{initialLocale:i},Ze(Xe,null,Ze(t,n)))))}},eHoR:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),a=(0,r(n("8/g6")).default)(o.default.createElement("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");t.default=a},fWIC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};t.default=r},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},kKU3:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=(n("17x9"),n("dRu9")),c=n("wpWl"),l=n("tr08"),s=n("4Hym"),u=n("bfFb"),f={entering:{opacity:1},entered:{opacity:1}},d={enter:c.b.enteringScreen,exit:c.b.leavingScreen},p=a.forwardRef((function(e,t){var n=e.children,c=e.in,p=e.onEnter,v=e.onExit,h=e.style,m=e.timeout,b=void 0===m?d:m,g=Object(o.a)(e,["children","in","onEnter","onExit","style","timeout"]),y=Object(l.a)(),O=Object(u.a)(n.ref,t);return a.createElement(i.a,Object(r.a)({appear:!0,in:c,onEnter:function(e,t){Object(s.b)(e);var n=Object(s.a)({style:h,timeout:b},{mode:"enter"});e.style.webkitTransition=y.transitions.create("opacity",n),e.style.transition=y.transitions.create("opacity",n),p&&p(e,t)},onExit:function(e){var t=Object(s.a)({style:h,timeout:b},{mode:"exit"});e.style.webkitTransition=y.transitions.create("opacity",t),e.style.transition=y.transitions.create("opacity",t),v&&v(e)},timeout:b},g),(function(e,t){return a.cloneElement(n,Object(r.a)({style:Object(r.a)({opacity:0,visibility:"exited"!==e||c?void 0:"hidden"},f[e],{},h,{},n.props.style),ref:O},t))}))}));t.a=p},lopY:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("wx14"),o=n("q1tI"),a=n("aXM8"),i=n("A+CX");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)(),c=Object(i.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var l="function"===typeof e?e(n):e;l=l.replace(/^@media( ?)/m,"");var s="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,u=Object(r.a)({},c,{},t),f=u.defaultMatches,d=void 0!==f&&f,p=u.matchMedia,v=void 0===p?s?window.matchMedia:null:p,h=u.noSsr,m=void 0!==h&&h,b=u.ssrMatchMedia,g=void 0===b?null:b,y=o.useState((function(){return m&&s?v(l).matches:g?g(l).matches:d})),O=y[0],w=y[1];return o.useEffect((function(){var e=!0;if(s){var t=v(l),n=function(){e&&w(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[l,v,s]),O}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||a()}},oZgQ:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),a=(0,r(n("8/g6")).default)(o.default.createElement("path",{d:"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"}),"Input");t.default=a},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},uniG:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),a=(0,r(n("8/g6")).default)(o.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=a},wb2y:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=n("ye/S"),s=a.forwardRef((function(e,t){var n=e.absolute,c=void 0!==n&&n,l=e.classes,s=e.className,u=e.component,f=void 0===u?"hr":u,d=e.flexItem,p=void 0!==d&&d,v=e.light,h=void 0!==v&&v,m=e.orientation,b=void 0===m?"horizontal":m,g=e.role,y=void 0===g?"hr"!==f?"separator":void 0:g,O=e.variant,w=void 0===O?"fullWidth":O,x=Object(o.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return a.createElement(f,Object(r.a)({className:Object(i.a)(l.root,s,"fullWidth"!==w&&l[w],c&&l.absolute,p&&l.flexItem,h&&l.light,"vertical"===b&&l.vertical),role:y,ref:t},x))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)}},[[0,0,1,2,3,4]]]);