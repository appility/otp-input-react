!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"));else if("function"===typeof define&&define.amd)define(["react"],t);else{var n="object"===typeof exports?t(require("react")):t(e.react);for(var r in n)("object"===typeof exports?exports:e)[r]=n[r]}}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/otp-input-react/",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){r(e,t,n[t])})}return e}function a(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}n.r(t);var o=n(0),c=n.n(o);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,u=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(i){u=!0,a=i}finally{try{r||null==c.return||c.return()}finally{if(u)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e){var t=e.maxTime,n=e.onTimerComplete,r=e.timeInterval,u=e.onResendClick,a=Object(o.useRef)(),c=i(Object(o.useState)(t),2),l=c[0],s=c[1];Object(o.useEffect)(function(){return a.current&&0===l?(clearTimeout(a.current),n&&n()):a.current=setTimeout(function(){s(function(e){return e-1})},r),function(){clearTimeout(a)}},[n,l,r]);return{handelResendClick:function(){u&&u(0===l),s(t)},remainingTime:l}};function s(e){var t=e.renderTime,n=e.renderButton,r=e.style,o=e.className,i=a(e,["renderTime","renderButton","style","className"]),s=l(i),f=s.remainingTime,p=s.handelResendClick;return c.a.createElement("div",{className:o||"","data-testid":"otp-resend-root",style:u({display:"flex",justifyContent:"space-between"},r)},t?t(f):c.a.createElement("span",null,f," sec"),n?n({disabled:0!==f,onClick:p,remainingTime:f}):c.a.createElement("button",{disabled:0!==f,onClick:p},"Resend OTP"))}s.defaultProps={maxTime:60,timeInterval:1e3,style:{}};var f=s,p={width:32,height:32,textAlign:"center",marginRight:20},d=c.a.memo(function(e){var t=e.focus,n=e.autoFocus,r=e.disabled,i=e.value,l=e.onInputFocus,s=e.index,f=e.secure,d=e.inputStyles,y=a(e,["focus","autoFocus","disabled","value","onInputFocus","index","secure","inputStyles"]),v=Object(o.useRef)(null),b=Object(o.useRef)(!1);Object(o.useEffect)(function(){n&&t&&v.current.focus()},[]),Object(o.useEffect)(function(){b.current&&t&&v.current.focus(),b.current=!0},[t]);return c.a.createElement("input",Object.assign({style:u({},p,d),type:f?"password":"tel",maxLength:"1",ref:v,disabled:r,onFocus:function(e){return l(s,e)},value:i||""},y))}),y=function(e){var t=e.autoFocus,n=e.value,r=e.otpType,u=e.onChange,a=e.OTPLength,c=i(Object(o.useState)(t?0:-1),2),l=c[0],s=c[1],f=function(){return n?n.toString().split(""):[]},p=function(e){var t=e.join("");u(t)},d=function(){!function(e){var t=Math.max(Math.min(a-1,e),0);s(t)}("next"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next")?l+1:l-1)},y=function(e){var t=i(e,1)[0],n=f();n[l]=t,p(n)},v=function(e){switch(r){case"number":return!(e.charCodeAt(0)>57||e.charCodeAt(0)<48);case"alpha":return!(e.charCodeAt(0)>122||e.charCodeAt(0)<65);case"alphanumeric":return!(e.charCodeAt(0)>122||e.charCodeAt(0)<48);default:return!0}};return{activeInput:l,getOtpValue:f,handleOnChange:function(e){v(e.target.value)&&(y(e.target.value),d("next"))},handleOnKeyDown:function(e){switch(e.key){case"Backspace":e.preventDefault(),y(""),d("prev");break;case"Delete":e.preventDefault(),y("");break;case"ArrowLeft":e.preventDefault(),d("prev");break;case"ArrowRight":e.preventDefault(),d("next")}},handelOnInput:function(e){e.target.value.length>1&&(e.preventDefault(),d("next"))},handleOnPaste:function(e,t){e.preventDefault();for(var n=f(),r=e.clipboardData.getData("text/plain").replace(/-/g,"").slice(0,a-l).split(""),u=0;u<a;++u)u>=l&&r.length>0&&(n[u]=r.shift());for(var o=[n.length],c=0,i=0;i<n.length;++i)v(n[i])&&(o[c]=n[i],c++);p(o)},onInputFocus:function(e,t){s(e),t.target.select()}}},v=function(e){var t=e.OTPLength,n=e.disabled,r=e.autoFocus,a=e.value,i=void 0===a?"":a,l=e.onChange,s=e.otpType,f=e.secure,p=e.className,v=e.inputClassName,b=e.inputStyles,m=e.style,h=y({autoFocus:r,value:i,otpType:s,onChange:l,OTPLength:t}),g=h.activeInput,O=h.getOtpValue,j=h.handleOnChange,x=h.handleOnKeyDown,T=h.handelOnInput,w=h.handleOnPaste,C=h.onInputFocus,P=Object(o.useMemo)(function(){for(var e=O(),u=[],a=0;a<t;a++)u.push(c.a.createElement(d,{className:v,inputStyles:b,key:a,focus:g===a,value:e[a],onChange:j,onKeyDown:x,onInput:T,onPaste:w,onInputFocus:C,index:a,disabled:n,autoFocus:r,secure:f,"data-testid":"input"}));return u},[O,t,v,b,g,j,x,T,w,C,n,r,f]);return c.a.createElement("div",{style:u({display:"flex"},m),className:"".concat(p),"data-testid":"otp-input-root"},P)};v.defaultProps={className:"",inputClassName:"",OTPLength:4,onChange:function(){},disabled:!1,secure:!1,autoFocus:!1,value:"",otpType:"any",inputStyles:{},style:{}};var b=v;n.d(t,"ResendOTP",function(){return f}),n.d(t,"default",function(){return b})}])});
//# sourceMappingURL=index.js.map