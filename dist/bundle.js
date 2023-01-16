(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(81),i=n.n(r),a=n(645),o=n.n(a),d=n(667),s=n.n(d),l=new URL(n(494),n.b),c=new URL(n(44),n.b),u=o()(i()),m=s()(l),p=s()(c);u.push([e.id,"@font-face {\r\n    font-family: 'Bebas';\r\n    src: url("+m+");\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Jaldi';\r\n    src: url("+p+");\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    white-space: pre;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 16px;\r\n    color: black;\r\n    background-color: #f1f5f9;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    border-radius: 0.2rem;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #d4d4d8 !important; \r\n    cursor: pointer;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n/* top bar stylings */\r\n#top-bar {\r\n    font-family: 'Bebas';\r\n    font-size: 3rem;\r\n    padding: 0 3rem 0 3rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: #f4f4f5;\r\n    z-index: 1;\r\n    box-shadow: 0px 2px 5px rgb(0, 0, 0, 0.4);\r\n    min-height: 11vh;\r\n    max-height: 13vh;\r\n}\r\n\r\n#top-bar div {\r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n#top-bar img {\r\n    width: 4rem;\r\n    height: 4rem;\r\n}\r\n\r\n#login-btn {\r\n    height: 3rem;\r\n    width: 6rem;\r\n    font-size: 1.5rem;\r\n    background-color: var(--login-bg-color);\r\n}\r\n\r\n/* main content stylings */\r\n#main-content {\r\n    padding: 2rem;\r\n    min-height: 21rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n    background-color: #f1f5f9;\r\n}\r\n\r\n#button-div {\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\n#button-div button {\r\n    width: 100%;\r\n    height: 4.5rem;\r\n    font-size: 1.6rem;\r\n    font-weight: bold;\r\n    border: none;\r\n    background-color: #f1f5f9;\r\n    color: var(--text-color);\r\n}\r\n\r\n#book-div {\r\n    align-self: center;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, minmax(300px, 1fr));\r\n    gap: 6rem;\r\n}\r\n\r\n.book {\r\n    font-family: 'Jaldi';\r\n    border-radius: 1rem;\r\n    box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.4);\r\n    background-color: var(--book-color);\r\n    font-size: 1.4rem;\r\n    line-height: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem 0 1rem 0;\r\n}\r\n\r\n.book p {\r\n    margin: 0;\r\n}\r\n\r\n.book button {\r\n    font-family: 'Jaldi';\r\n    height: 2rem;\r\n    width: 15rem;\r\n    font-size: 1.3rem;\r\n    line-height: 1rem;\r\n}\r\n\r\n.has-read {\r\n    background-color:rgb(136, 211, 136);\r\n}\r\n\r\n.not-read {\r\n    background-color: #fde68a;\r\n}\r\n\r\n.red-btn {\r\n    background-color: rgb(247, 133, 133);\r\n}\r\n\r\n/* footer stylings */\r\n#footer {\r\n    margin-top: auto;\r\n    padding: 0.5rem;\r\n    background-color: #f4f4f5;\r\n    border-top: 1px solid gray;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: var(--footer-color);\r\n}\r\n\r\n#footer img {\r\n    vertical-align: middle;\r\n}\r\n\r\na {\r\n    color: rgb(14, 14, 176);\r\n    text-decoration: underline;\r\n}\r\n\r\na:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n/* overlay and modal forms stylings */\r\n#overlay {\r\n    display: block;\r\n    z-index: 1000;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* modal and form stylings */\r\nform, #success-div {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 1100;\r\n    background-color: #f4f4f5;\r\n    border-radius: 1rem;\r\n    font-size: 1.2rem;\r\n    font-family: 'Jaldi';\r\n\r\n    padding: 1rem 3rem 0 3rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/* book form stylings */\r\n#book-form {\r\n    gap: 5rem;\r\n}\r\n\r\n#book-form .input-div {\r\n    height: 18rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4rem;\r\n}\r\n\r\n#checkbox-label {\r\n    display: inline-block;\r\n}\r\n\r\n#checkbox-input {\r\n    vertical-align: middle;\r\n    margin-top: -0.1px;\r\n    margin-left: 5px;\r\n}\r\n\r\n#book-form .button-div {\r\n    margin-top: -2rem;\r\n}\r\n\r\n#book-form .small-div {\r\n    margin-top: -4rem;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n#book-form .error-message-div {\r\n    margin-top: -4rem;\r\n    width: 20rem;\r\n    height: 3rem;\r\n}\r\n\r\n/* login form stylings */\r\n#login-form {\r\n    gap: 1rem;\r\n}\r\n\r\n#login-form .button-div {\r\n    margin-top: 1rem;\r\n}\r\n\r\n#login-form .small-div {\r\n    display: flex;\r\n    gap: 0.2rem;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n/* new account form stylings */\r\n#new-account-form {\r\n    gap: 2.5rem;\r\n}\r\n\r\n#inner-div {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 4rem 7rem 4rem;\r\n    gap: 3.5rem;\r\n}\r\n\r\nul {\r\n    margin-top: -0.5rem;\r\n    display: grid;\r\n    grid-template-columns: 10rem 10rem;\r\n    grid-auto-rows: 1rem;\r\n}\r\n\r\n#new-account-form .small-div {\r\n    margin-top: -1.5rem;\r\n}\r\n\r\n#new-account-form .error-message-div {\r\n    margin-top: -1rem;\r\n    width: 60rem;\r\n    height: 3rem;\r\n    text-align: center;\r\n}\r\n\r\n/* success div stylings */\r\n#success-div {\r\n    height: 30%;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n/* shared form stylings */\r\n.small-div {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.no-submit {\r\n    border: 3px solid red;\r\n}\r\n\r\n.error-message-div {\r\n    margin-bottom: 0;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#error-div {\r\n    flex-direction: column;\r\n    width: 150%;\r\n}\r\n\r\n.error, #error-div {\r\n    font-size: 0.9rem;\r\n    display: flex;\r\n    color: red;\r\n}\r\n\r\nlabel {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 10%;\r\n}\r\n\r\ninput {\r\n    font-size: 1.2rem;\r\n    font-family: 'Jaldi';\r\n}\r\n\r\n.button-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\nform button, #success-div button {\r\n    height: 2rem;\r\n    width: 15rem;\r\n    font-size: 1.2rem;\r\n    font-family: 'Jaldi';\r\n    text-align: center;\r\n    background-color: #d4d4d8;\r\n}\r\n\r\nform button:hover, #success-div button:hover {\r\n    background-color: #a1a1aa !important;\r\n}",""]);const h=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],d=0;d<e.length;d++){var s=e[d],l=r.base?s[0]+r.base:s[0],c=a[l]||0,u="".concat(l," ").concat(c);a[l]=c+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=i(p,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var d=n(a[o]);t[d].references--}for(var s=r(e,i),l=0;l<a.length;l++){var c=n(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},494:(e,t,n)=>{e.exports=n.p+"12e3683f9192436a7be8.ttf"},44:(e,t,n)=>{e.exports=n.p+"28b1a1116a02c80207cc.ttf"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),a=n(569),o=n.n(a),d=n(565),s=n.n(d),l=n(216),c=n.n(l),u=n(589),m=n.n(u),p=n(426),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=c(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const f=n.p+"2c41fd36df94d95e7135.png",g=class{constructor(e,t,n,r,i){this.title=e,this.author=t,this.pageCount=n,this.hasRead=r,this.key=i}getTitle(){return this.title}getAuthor(){return this.author}getPageCount(){return this.pageCount}getHasRead(){return this.hasRead}getKey(){return this.key}};function b(){const e=document.getElementById("book-div");e.textContent="";for(let t=0;t<localStorage.length;t++){const n=localStorage.getItem(t);if("deleted"===n)continue;const r=JSON.parse(n),i=new g(r.title,r.author,r.pageCount,r.hasRead,r.key);e.appendChild(v(i))}}function v(e){const t=document.createElement("div");t.classList.add("book");const n=document.createElement("p"),r=document.createElement("p"),i=document.createElement("p"),a=document.createElement("button"),o=document.createElement("button");n.textContent=e.getTitle(),r.textContent=e.getAuthor(),i.textContent=e.getPageCount(),o.textContent="Remove",o.classList.add("red-btn"),"Yes"===e.getHasRead()?(a.textContent="Read",a.classList.add("has-read")):(a.textContent="Not read",a.classList.add("not-read"));const d=e.getKey();return a.addEventListener("click",(()=>{"Read"===a.textContent?(a.classList.remove("has-read"),a.textContent="Not read",a.classList.add("not-read"),e.hasRead="No"):(a.classList.remove("not-read"),a.textContent="Read",a.classList.add("has-read"),e.hasRead="Yes"),localStorage.setItem(d,JSON.stringify(e))})),o.addEventListener("click",(()=>{localStorage.setItem(d,"deleted"),b()})),t.appendChild(n),t.appendChild(r),t.appendChild(i),t.appendChild(a),t.appendChild(o),t}const y=b;function C(){document.getElementById("new-account-form").classList.remove("empty")}function E(){document.getElementById("book-form").classList.remove("empty")}function L(){const e=document.createElement("span");return e.classList.add("error"),e}function x(){!function(){const e=document.getElementById("email-input"),t=L();function n(){C(),e.validity.valueMissing?(e.classList.add("invalid"),t.classList.remove("hidden"),t.textContent="Please enter an email address"):e.validity.typeMismatch?(e.classList.add("invalid"),t.classList.remove("hidden"),t.textContent="Please enter a valid email address"):(e.classList.remove("invalid"),t.classList.add("hidden"),t.textContent="")}document.getElementById("email-label").appendChild(t),e.addEventListener("input",n),e.addEventListener("click",n)}(),function(){const e=document.getElementById("new-password-input"),t=document.createElement("div");t.setAttribute("id","error-div"),t.classList.add("hidden"),document.getElementById("new-password-label").appendChild(t),e.addEventListener("input",o),e.addEventListener("click",o);const n=/[a-z]+/,r=/[A-Z]+/,i=/[^A-Za-z 0-9]/g,a=/\d/;function o(){if(C(),!((o=e.value).length<8)&&o.match(n)&&o.match(r)&&o.match(i)&&o.match(a))e.classList.remove("invalid"),t.textContent="",t.classList.add("hidden");else{e.classList.add("invalid"),t.textContent="Password should contain at least:";const o=document.createElement("ul");t.appendChild(o),t.classList.remove("hidden"),e.value.length<8&&o.appendChild(d("8 characters")),e.value.match(n)||o.appendChild(d("one lowercase letter")),e.value.match(r)||o.appendChild(d("one uppercase letter")),e.value.match(i)||o.appendChild(d("one special character")),e.value.match(a)||o.appendChild(d("one number"))}var o}function d(e){const t=document.createElement("li");return t.textContent=e,t}}(),function(){const e=document.getElementById("new-password-input"),t=document.getElementById("confirm-password-input"),n=L();function r(){C(),t.value===e.value?(t.classList.remove("invalid"),n.textContent="",n.classList.add("hidden")):(t.classList.add("invalid"),n.classList.remove("hidden"),n.textContent="Passwords must match")}document.getElementById("confirm-password-label").appendChild(n),e.addEventListener("input",r),e.addEventListener("click",r),t.addEventListener("input",r),t.addEventListener("click",r)}(),function(){const e=document.getElementById("username-input"),t=L();function n(){C(),e.validity.valueMissing?(e.classList.add("invalid"),t.classList.remove("hidden"),t.textContent="Please enter a username"):(e.classList.remove("invalid"),t.classList.add("hidden"),t.textContent="")}document.getElementById("username-label").appendChild(t),e.addEventListener("input",n),e.addEventListener("click",n)}(),function(){const e=document.getElementById("title-input"),t=L();function n(){E(),e.validity.valueMissing?(e.classList.add("invalid"),t.classList.remove("hidden"),t.textContent="Please enter a book title"):(e.classList.remove("invalid"),t.classList.add("hidden"),t.textContent="")}document.getElementById("title-label").appendChild(t),e.addEventListener("input",n),e.addEventListener("click",n)}(),function(){const e=document.getElementById("author-input"),t=L();function n(){E(),e.validity.valueMissing?(e.classList.add("invalid"),t.classList.remove("hidden"),t.textContent="Please enter author's name"):(e.classList.remove("invalid"),t.classList.add("hidden"),t.textContent="")}document.getElementById("author-label").appendChild(t),e.addEventListener("input",n),e.addEventListener("click",n)}(),function(){const e=document.getElementById("pages-input"),t=L();function n(){E(),e.validity.valueMissing?(e.classList.add("invalid"),t.classList.remove("hidden"),t.textContent="Please enter book page count"):e.value.match(/\d/)?e.value<1?(e.classList.add("invalid"),t.classList.remove("hidden"),t.textContent="Page count should be greater than 0"):(e.classList.remove("invalid"),t.classList.add("hidden"),t.textContent=""):(e.classList.add("invalid"),t.classList.remove("hidden"),t.textContent="Please enter numbers only")}document.getElementById("pages-label").appendChild(t),e.addEventListener("input",n),e.addEventListener("click",n)}()}function w(){const e=document.getElementById("new-account-form"),t=e.getElementsByClassName("error-message-div")[0],n=document.getElementById("email-input"),r=document.getElementById("new-password-input"),i=document.getElementById("confirm-password-input"),a=document.getElementById("username-input");return e.classList.contains("empty")?(e.classList.add("no-submit"),void(t.textContent="Please fill out all required fields before submitting")):n.classList.contains("invalid")||r.classList.contains("invalid")||i.classList.contains("invalid")||a.classList.contains("invalid")?(e.classList.add("no-submit"),void(t.textContent="Please correct form errors before submitting")):void(n.classList.contains("invalid")||r.classList.contains("invalid")||i.classList.contains("invalid")||(e.addEventListener("submit",A),e.classList.remove("no-submit"),e.classList.add("hidden")))}function A(e){e.preventDefault(),document.getElementById("success-div").classList.remove("hidden")}function k(){const e=document.getElementById("book-form"),t=e.getElementsByClassName("error-message-div")[0],n=document.getElementById("title-input"),r=document.getElementById("author-input"),i=document.getElementById("pages-input");return e.classList.contains("empty")?(e.classList.add("no-submit"),void(t.textContent="Please fill out all fields before submitting")):n.classList.contains("invalid")||r.classList.contains("invalid")||i.classList.contains("invalid")?(e.classList.add("no-submit"),void(t.textContent="Please correct form errors before submitting")):void(n.classList.contains("invalid")||r.classList.contains("invalid")||i.classList.contains("invalid")||(e.addEventListener("submit",I),e.classList.remove("no-submit")))}function I(e){e.preventDefault();const t=document.getElementById("title-input").value,n=document.getElementById("author-input").value;let r=document.getElementById("pages-input").value;0==r[0]&&(r=r.slice(1));let i=document.getElementById("checkbox-input").checked?"Yes":"No";const a=localStorage.length;localStorage.setItem(a,JSON.stringify(new g(t,n,r,i,a))),T(),N(),y()}function B(){N(),T(),document.getElementById("login-form").classList.remove("hidden")}function S(){N(),document.getElementById("new-account-form").classList.remove("hidden")}function M(){const e=document.createElement("button");return e.type="button",e.textContent="Cancel",e.addEventListener("click",(()=>{T(),N()})),e}function P(){const e=document.createElement("div");return e.classList.add("button-div"),e}function z(){T(),document.getElementById("book-form").classList.remove("hidden")}function T(){const e=document.getElementById("overlay");e.classList.contains("hidden")?e.classList.remove("hidden"):e.classList.add("hidden")}function N(){Array.from(document.querySelectorAll("form")).forEach((e=>e.classList.add("hidden"))),Array.from(document.querySelectorAll("form")).forEach((e=>e.reset())),document.getElementById("success-div").classList.add("hidden")}const R=n.p+"85cb91830da6814d418f.png";!function(){const e=document.body;e.appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","top-bar"),e.appendChild(function(){const e=document.createElement("div");e.textContent="LIBRARY";const t=new Image;return t.src=f,e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("button");return t.setAttribute("id","login-btn"),t.textContent="Log in",t.addEventListener("click",B),e.appendChild(t),e}()),e}()),e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","button-div"),e.appendChild(function(){const e=document.createElement("button");return e.textContent="+Add Book",e.addEventListener("click",z),e}());const t=document.createElement("div");t.setAttribute("id","book-div");const n=document.createElement("div");return n.setAttribute("id","main-content"),n.appendChild(e),n.appendChild(t),n}()),y(),e.appendChild(function(){const e=new Image;e.src=R;const t=document.createElement("a");t.href="https://github.com/samoore036",t.appendChild(e);const n=document.createElement("div");return n.setAttribute("id","footer"),n.textContent="Copyright © 2022 Shaheen Moore",n.appendChild(t),n}());const t=function(){const e=document.createElement("div");return e.setAttribute("id","overlay"),e.classList.add("hidden"),e}();t.appendChild(function(){const e=document.createElement("form");e.setAttribute("id","login-form"),e.classList.add("hidden");const t=document.createElement("label");t.setAttribute("for","login-input"),t.setAttribute("id","login-label"),t.textContent="Username";const n=document.createElement("input");n.setAttribute("id","login-input"),n.type="text",t.appendChild(n),e.appendChild(t);const r=document.createElement("label");r.setAttribute("for","password-input"),r.setAttribute("id","password-label"),r.textContent="Password";const i=document.createElement("input");i.setAttribute("id","password-input"),i.type="password",r.appendChild(i),e.appendChild(r);const a=P(),o=document.createElement("button");return o.textContent="Login",o.type="submit",a.appendChild(o),a.appendChild(M()),e.appendChild(a),e.appendChild(function(){const e=document.createElement("div");e.classList.add("small-div"),e.textContent="No account?";const t=document.createElement("a");return t.textContent="Sign up here",t.addEventListener("click",S),e.appendChild(t),e}()),e}()),t.appendChild(function(){const e=document.createElement("form");e.setAttribute("id","book-form"),e.classList.add("hidden","empty");const t=document.createElement("div");t.classList.add("input-div"),e.appendChild(t);const n=document.createElement("label");n.setAttribute("for","title-input"),n.setAttribute("id","title-label"),n.textContent="Title";const r=document.createElement("input");r.setAttribute("id","title-input"),r.classList.add("invalid"),r.type="text",r.required="true",n.appendChild(r),t.appendChild(n);const i=document.createElement("label");i.setAttribute("for","author-input"),i.setAttribute("id","author-label"),i.textContent="Author";const a=document.createElement("input");a.setAttribute("id","author-input"),a.classList.add("invalid"),a.type="text",a.required="true",i.appendChild(a),t.appendChild(i);const o=document.createElement("label");o.setAttribute("for","pages-input"),o.setAttribute("id","pages-label"),o.textContent="# of pages";const d=document.createElement("input");d.setAttribute("id","pages-input"),d.classList.add("invalid"),d.type="number",d.required="true",d.minLength=1,o.appendChild(d),t.appendChild(o);const s=document.createElement("label");s.setAttribute("for","checkbox-input"),s.setAttribute("id","checkbox-label"),s.textContent="Have you read it?";const l=document.createElement("input");l.setAttribute("id","checkbox-input"),l.type="checkbox",s.appendChild(l),t.appendChild(s);const c=P(),u=document.createElement("button");u.textContent="Submit",u.type="submit",u.addEventListener("click",k),c.appendChild(u),c.appendChild(M()),e.appendChild(c);const m=document.createElement("div");m.classList.add("small-div"),m.textContent="*All fields are required",e.appendChild(m);const p=document.createElement("div");return p.classList.add("error-message-div"),e.appendChild(p),e}()),t.appendChild(function(){const e=document.createElement("form");e.setAttribute("id","new-account-form"),e.classList.add("hidden","empty");const t=document.createElement("div");t.setAttribute("id","inner-div"),e.appendChild(t);const n=document.createElement("label");n.setAttribute("for","email-input"),n.setAttribute("id","email-label"),n.textContent="Email*";const r=document.createElement("input");r.setAttribute("id","email-input"),r.classList.add("invalid"),r.type="email",r.required="true",n.appendChild(r),t.appendChild(n);const i=document.createElement("label");i.setAttribute("for","username-input"),i.setAttribute("id","username-label"),i.textContent="Username*";const a=document.createElement("input");a.setAttribute("id","username-input"),a.classList.add("invalid"),a.type="text",a.required="true",i.appendChild(a),t.appendChild(i);const o=document.createElement("label");o.setAttribute("for","new-password-input"),o.setAttribute("id","new-password-label"),o.textContent="Password*";const d=document.createElement("input");d.setAttribute("id","new-password-input"),d.classList.add("invalid"),d.type="password",d.required="true",o.appendChild(d),t.appendChild(o);const s=document.createElement("label");s.setAttribute("for","confirm-password-input"),s.setAttribute("id","confirm-password-label"),s.textContent="Confirm Password*";const l=document.createElement("input");l.setAttribute("id","confirm-password-input"),l.classList.add("invalid"),l.type="password",l.required="true",s.appendChild(l),t.appendChild(s);const c=document.createElement("label");c.setAttribute("for","country-input"),c.setAttribute("id","country-label"),c.textContent="Country";const u=document.createElement("select");u.setAttribute("id","country-select"),c.appendChild(u),t.appendChild(c),["","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"].forEach((e=>u.appendChild(function(e){const t=document.createElement("option");return t.value=e,t.textContent=e,t}(e))));const m=document.createElement("label");m.setAttribute("id","zipcode-input"),m.setAttribute("id","zipcode-label"),m.textContent="Zipcode";const p=document.createElement("input");p.setAttribute("id","zipcode-input"),p.type="text",m.appendChild(p),t.appendChild(m);const h=P(),f=document.createElement("button");f.textContent="Create Account",f.type="submit",f.addEventListener("click",w),h.appendChild(f),h.appendChild(M()),e.appendChild(h);const g=document.createElement("div");g.classList.add("small-div"),g.textContent="* indicates a required field",e.appendChild(g);const b=document.createElement("div");return b.classList.add("error-message-div"),e.appendChild(b),e}()),t.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","success-div"),e.classList.add("hidden"),e.textContent="Account successfully created. Please check your email to confirm your account.";const t=document.createElement("button");return t.textContent="Close",t.addEventListener("click",(()=>{T(),N()})),e.appendChild(t),e}()),e.appendChild(t),x(),Array.from(document.querySelectorAll("input")).forEach((e=>e.addEventListener("invalid",(function(e){e.preventDefault()}))))}()})()})();