(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return un}));var r,i=t(0),o=t.n(i),a=t(14),c=t.n(a),u=t(18),l=t(36);!function(n){n.FETCH_TIKI_PRODUCT="Application/FETCH_TIKI_PRODUCT",n.FETCH_TIKI_PRODUCT_SUCCESS="Application/FETCH_TIKI_PRODUCT_SUCCESS"}(r||(r={}));var p,f=r,s=function(n){var e=n.data;return Object(l.action)(f.FETCH_TIKI_PRODUCT_SUCCESS,{data:e})};!function(n){n.CORS_BYBASS="https://cors-anywhere.herokuapp.com/"}(p||(p={}));var d={title:void 0,price:void 0,imgURL:void 0},m=t(69),b=c.a.mark(h),g=c.a.mark(v);function h(n){var e,t;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.payload,r.next=3,Object(u.a)(m.a,{method:"get",route:p.CORS_BYBASS+e.url});case 3:if(!(t=r.sent).success){r.next=7;break}return r.next=7,Object(u.b)(s(t));case 7:e.callback&&e.callback(t);case 8:case"end":return r.stop()}}),b)}function v(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.c)(f.FETCH_TIKI_PRODUCT,h);case 2:case"end":return n.stop()}}),g)}var x=t(68),w=t(24),O=t.n(w),y=t(40),C=t.n(y),j=t(9),k=t(25);var E=t(6),S=t.n(E),_=t(139),T=t.n(_),P=t(141);function R(){var n=O()(["\n  position: relative;\n  height: 80px;\n  line-height: 80px;\n  color: pink;\n  font-size: 5em;\n  font-weight: 800;\n  text-transform: uppercase;\n  will-change: transform, opacity;\n  overflow: hidden;\n"]);return R=function(){return n},n}function U(){var n=O()(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 60px 0px;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return U=function(){return n},n}function I(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function D(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?I(Object(t),!0).forEach((function(e){S()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var z=["Reminder"],F={mass:5,tension:2e3,friction:200};function H(){var n=Object(i.useState)(!0),e=C()(n,2),t=e[0],r=e[1],a=Object(P.b)(z.length,{config:F,opacity:t?1:0,x:t?0:20,height:t?80:0,from:{opacity:0,x:20,height:0}});return o.a.createElement(K,{onClick:function(){return r((function(n){return!n}))}},a.map((function(n,e){var t=n.x,r=n.height,i=T()(n,["x","height"]);return o.a.createElement(L,{key:z[e],style:D({},i,{transform:t.interpolate((function(n){return"translate3d(0,".concat(n,"px,0)")}))})},o.a.createElement(P.a.div,{style:{height:r}},z[e]))})))}var K=k.b.div(U()),L=Object(k.b)(P.a.div)(R());function A(){var n=O()(["\n  outline: none;\n  font-family: 'Courier New', Courier, monospace;\n  padding: 15px;\n  color: pink;\n  background-color: white;\n  font-size: 20px;\n  font-weight: 530;\n  border: 2px solid pink;\n  border-radius: 27px;\n  margin: 10px;\n  &:hover {\n    box-shadow: inset 0px 0px 24px -13px rgba(255, 192, 203, 1);\n  }\n  &:active {\n    box-shadow: inset 0px 0px 34px -13px rgba(255, 192, 203, 1);\n  }\n"]);return A=function(){return n},n}function B(){var n=O()(["\n  font-family: 'Courier New', Courier, monospace;\n  color: pink;\n  font-size: 20px;\n  font-weight: 530;\n  width: 400px;\n  padding: 15px 25px;\n  border: 2px solid pink;\n  border-radius: 27px;\n  outline: none;\n  &::placeholder {\n    color: pink;\n  }\n"]);return B=function(){return n},n}function N(){var n=O()(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]);return N=function(){return n},n}function J(){var n=O()(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n"]);return J=function(){return n},n}function Y(n){return o.a.createElement(q,{onSubmit:n.handleOnSubmit,onChange:n.handleOnChange},o.a.createElement(G,null,o.a.createElement(M,{placeholder:"Please input your link here.."}),o.a.createElement(Q,{type:"submit"},"Submit")))}var q=k.b.form(J()),G=k.b.div(N()),M=k.b.input(B()),Q=k.b.button(A());function V(){var n=O()(["\n  display: inline-block;\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 12px;\n"]);return V=function(){return n},n}var W=k.b.span(V());function X(){var n=O()(["\n  position: relative !important;\n  margin-top: 40px;\n  color: white;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: flex-end;\n  background-image: url(",");\n  background-color: pink;\n  background-blend-mode: multiply;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 50%;\n  height: 400px;\n  padding: 40px;\n  border-radius: 30px;\n"]);return X=function(){return n},n}function Z(){var n=O()(["\n  font-family: sans-serif;\n  font-size: 1.9em;\n  font-weight: bold;\n"]);return Z=function(){return n},n}function $(){var n=O()(["\n  font-family: sans-serif;\n  font-size: 2em;\n  font-weight: bold;\n"]);return $=function(){return n},n}function nn(n){return o.a.createElement(rn,{imgURL:n.imgURL},o.a.createElement(en,null,n.title),o.a.createElement(tn,null,n.price&&"PRICE: "+n.price))}var en=Object(k.b)(W)($()),tn=Object(k.b)(W)(Z()),rn=k.b.div(X(),(function(n){return n.imgURL}));function on(){var n=O()(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"]);return on=function(){return n},n}function an(){var n=Object(j.d)(),e=o.a.useState(""),t=C()(e,2),r=t[0],i=t[1],a=o.a.useState(d),c=C()(a,2),u=c[0],p=c[1];return o.a.createElement(cn,null,o.a.createElement(H,null),o.a.createElement(Y,{handleOnChange:function(n){n.preventDefault(),n.stopPropagation(),i(n.target.value)},handleOnSubmit:function(e){e.preventDefault(),e.stopPropagation();n(function(n,e){return Object(l.action)(f.FETCH_TIKI_PRODUCT,{url:n,callback:e})}(r,(function(n){var e,t,r,i,o=(e=n.response,{title:null===(t=/meta name="title" content="(.*?)"/.exec(e))||void 0===t?void 0:t[1],price:null===(r=/<span class="product-price__current-price">(.*?)</.exec(e))||void 0===r?void 0:r[1],imgURL:null===(i=/large_url":"(.*?)"/.exec(e))||void 0===i?void 0:i[1]});p(o)})))}}),u.title&&o.a.createElement(nn,{title:u.title,price:u.price,imgURL:u.imgURL}))}var cn=k.b.div(on());function un(){return Object(x.a)({key:"homepage",saga:v}),o.a.createElement(an,null)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Ib21lcGFnZS9hY3Rpb25UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Ib21lcGFnZS9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvSG9tZXBhZ2UvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Ib21lcGFnZS9zYWdhLnRzIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0hvbWVwYWdlL2NvbnRhaW5lcnMvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Ib21lcGFnZS9jb250YWluZXJzL1NlYXJjaC50c3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2dsb2JhbC9jb21wb25lbnRzL1AudHN4Iiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0hvbWVwYWdlL2NvbnRhaW5lcnMvSW5mby50c3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvSG9tZXBhZ2UvY29udGFpbmVycy9Ib21lcGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvSG9tZXBhZ2UvYWRhcHRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvSG9tZXBhZ2UvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFjdGlvblR5cGVzIiwiQXBpQ29uZmlnIiwiZmV0Y2hUaWtpUHJvZHVjdFN1Y2Nlc3MiLCJyZXNwb25zZSIsImRhdGEiLCJhY3Rpb24iLCJGRVRDSF9USUtJX1BST0RVQ1RfU1VDQ0VTUyIsInByb2R1Y3RJbml0aWFsU3RhdGUiLCJ0aXRsZSIsInVuZGVmaW5lZCIsInByaWNlIiwiaW1nVVJMIiwiZmV0Y2hUaWtpUHJvZHVjdCIsImhvbWVwYWdlU2FnYSIsInBheWxvYWQiLCJjYWxsIiwiY2FsbEFwaSIsIm1ldGhvZCIsInJvdXRlIiwiQ09SU19CWUJBU1MiLCJ1cmwiLCJzdWNjZXNzIiwicHV0IiwiYWN0aW9ucyIsImNhbGxiYWNrIiwidGFrZUxhdGVzdCIsIkZFVENIX1RJS0lfUFJPRFVDVCIsIml0ZW1zIiwiY29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsIkhlYWRlciIsInVzZVN0YXRlIiwic2hvd1RleHQiLCJzZXRTaG93VGV4dCIsInRyYWlsIiwidXNlVHJhaWwiLCJsZW5ndGgiLCJvcGFjaXR5IiwieCIsImhlaWdodCIsImZyb20iLCJDb250YWluZXIiLCJvbkNsaWNrIiwic3RhdGUiLCJtYXAiLCJpbmRleCIsInJlc3QiLCJUZXh0Iiwia2V5Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJpbnRlcnBvbGF0ZSIsImRpdiIsInN0eWxlZCIsImFuaW1hdGVkIiwiSW5mbyIsInByb3BzIiwib25TdWJtaXQiLCJoYW5kbGVPblN1Ym1pdCIsIm9uQ2hhbmdlIiwiaGFuZGxlT25DaGFuZ2UiLCJJdGVtQ29udGFpbmVyIiwiU3R5bGVkSW5wdXQiLCJwbGFjZWhvbGRlciIsIlN0eWxlZEJ1dHRvbiIsInR5cGUiLCJmb3JtIiwiaW5wdXQiLCJidXR0b24iLCJQIiwic3BhbiIsIkluZm9Db250YWluZXIiLCJTdHlsZWRUaXRsZSIsIlN0eWxlZFByaWNlIiwiSG9tZXBhZ2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiUmVhY3QiLCJpbnB1dERhdGEiLCJzZXRJbnB1dERhdGEiLCJwcm9kdWN0RGF0YSIsInNldFByb2R1Y3REYXRhIiwiSG9tZXBhZ2VXcmFwcGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsInZhbHVlIiwicmVzdWx0IiwiZXhlYyIsInVzZUluamVjdFNhZ2EiLCJzYWdhIl0sIm1hcHBpbmdzIjoiOElBQUtBLEUsMkRBQUFBLEssb0RBQUFBLEUscUVBQUFBLE0sS0FLVUEsSUNISEMsRURHR0QsSUVLRkUsRUFBMEIsU0FBQ0MsR0FDdEMsSUFBTUMsRUFBT0QsRUFBU0MsS0FDdEIsT0FBT0MsaUJBQU9MLEVBQVlN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QUFDLEVBQUQsQ0FBVzhCLGVBbEJRLFNBQUN1QixHQUN0QkEsRUFBTUMsaUJBQ05ELEVBQU1FLGtCQUNOTixFQUFjSSxFQUFNRyxPQUFlQyxRQWVVN0IsZUFaeEIsU0FBQ3lCLEdBQ3RCQSxFQUFNQyxpQkFDTkQsRUFBTUUsa0JBS05WLEVOMUI0QixTQUFDekQsRUFBYUksR0FDNUMsT0FBT25CLGlCQUFPTCxFQUFZMEIsbUJBQW9CLENBQzVDTixNQUNBSSxhTXVCU1osQ0FBaUJvRSxHQUpULFNBQUM3RSxHQUNoQixJQzFCcUJDLEVBQWMsTUQwQjdCc0YsR0MxQmV0RixFRDBCS0QsRUFBU0EsU0N0QmhDLENBQ0xLLE1BQUssVUFKWSxvQ0FJQ21GLEtBQUt2RixVQUFsQixhQUFFLEVBQXdCLEdBQy9CTSxNQUFLLFVBSlksb0RBSUNpRixLQUFLdkYsVUFBbEIsYUFBRSxFQUF3QixHQUMvQk8sT0FBTSxVQUpXLHFCQUlFZ0YsS0FBS3ZGLFVBQWxCLGFBQUUsRUFBd0IsS0RvQjlCK0UsRUFBZU8sVUFRZFIsRUFBWTFFLE9BQ1gsa0JBQUMsR0FBRCxDQUFlQSxNQUFPMEUsRUFBWTFFLE1BQU9FLE1BQU93RSxFQUFZeEUsTUFBT0MsT0FBUXVFLEVBQVl2RSxVQU0vRixJQUFNeUUsR0FBa0I3QixJQUFPRCxJQUFWLE1FckNOLFNBQVNzQixLQUV0QixPQURBZ0IsWUFBYyxDQUFFMUMsSUFBSyxXQUFZMkMsS0FBTWhGLElBQ2hDLGtCQUFDK0QsR0FBRCIsImZpbGUiOiIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImVudW0gQWN0aW9uVHlwZXMge1xuICBGRVRDSF9USUtJX1BST0RVQ1QgPSAnQXBwbGljYXRpb24vRkVUQ0hfVElLSV9QUk9EVUNUJyxcbiAgRkVUQ0hfVElLSV9QUk9EVUNUX1NVQ0NFU1MgPSAnQXBwbGljYXRpb24vRkVUQ0hfVElLSV9QUk9EVUNUX1NVQ0NFU1MnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25UeXBlcztcbiIsImltcG9ydCB7IFByb2R1Y3RJbml0aWFsU3RhdGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGVudW0gQXBpQ29uZmlnIHtcbiAgQ09SU19CWUJBU1MgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJyxcbn1cblxuLy8vIEFwcGxpY2F0aW9uIExvZ2ljXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0SW5pdGlhbFN0YXRlOiBQcm9kdWN0SW5pdGlhbFN0YXRlID0ge1xuICB0aXRsZTogdW5kZWZpbmVkLFxuICBwcmljZTogdW5kZWZpbmVkLFxuICBpbWdVUkw6IHVuZGVmaW5lZCxcbn07XG4iLCJpbXBvcnQgeyBhY3Rpb24gfSBmcm9tICd0eXBlc2FmZS1hY3Rpb25zJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGNvbnN0IGZldGNoVGlraVByb2R1Y3QgPSAodXJsOiBzdHJpbmcsIGNhbGxiYWNrPzogKHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpID0+IHtcbiAgcmV0dXJuIGFjdGlvbihBY3Rpb25UeXBlcy5GRVRDSF9USUtJX1BST0RVQ1QsIHtcbiAgICB1cmwsXG4gICAgY2FsbGJhY2ssXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGlraVByb2R1Y3RTdWNjZXNzID0gKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gIHJldHVybiBhY3Rpb24oQWN0aW9uVHlwZXMuRkVUQ0hfVElLSV9QUk9EVUNUX1NVQ0NFU1MsIHtcbiAgICBkYXRhOiBkYXRhLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBjYWxsLCB0YWtlTGF0ZXN0LCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgQXBpQ29uZmlnIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY2FsbEFwaSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS9zYWdhJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZnVuY3Rpb24qIGZldGNoVGlraVByb2R1Y3QoeyBwYXlsb2FkIH06IFJldHVyblR5cGU8dHlwZW9mIGFjdGlvbnMuZmV0Y2hUaWtpUHJvZHVjdD4pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGNhbGxBcGksIHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJvdXRlOiBBcGlDb25maWcuQ09SU19CWUJBU1MgKyBwYXlsb2FkLnVybCxcbiAgfSk7XG4gIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgeWllbGQgcHV0KGFjdGlvbnMuZmV0Y2hUaWtpUHJvZHVjdFN1Y2Nlc3MocmVzcG9uc2UpKTtcbiAgfVxuICBpZiAocGF5bG9hZC5jYWxsYmFjaykge1xuICAgIHBheWxvYWQuY2FsbGJhY2socmVzcG9uc2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBob21lcGFnZVNhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQWN0aW9uVHlwZXMuRkVUQ0hfVElLSV9QUk9EVUNULCBmZXRjaFRpa2lQcm9kdWN0KTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlVHJhaWwsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcblxuY29uc3QgaXRlbXMgPSBbJ1JlbWluZGVyJ107XG5jb25zdCBjb25maWcgPSB7IG1hc3M6IDUsIHRlbnNpb246IDIwMDAsIGZyaWN0aW9uOiAyMDAgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbc2hvd1RleHQsIHNldFNob3dUZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB0cmFpbCA9IHVzZVRyYWlsKGl0ZW1zLmxlbmd0aCwge1xuICAgIGNvbmZpZyxcbiAgICBvcGFjaXR5OiBzaG93VGV4dCA/IDEgOiAwLFxuICAgIHg6IHNob3dUZXh0ID8gMCA6IDIwLFxuICAgIGhlaWdodDogc2hvd1RleHQgPyA4MCA6IDAsXG4gICAgZnJvbTogeyBvcGFjaXR5OiAwLCB4OiAyMCwgaGVpZ2h0OiAwIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgb25DbGljaz17KCkgPT4gc2V0U2hvd1RleHQoc3RhdGUgPT4gIXN0YXRlKX0+XG4gICAgICB7dHJhaWwubWFwKCh7IHgsIGhlaWdodCwgLi4ucmVzdCB9LCBpbmRleCkgPT4gKFxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGtleT17aXRlbXNbaW5kZXhdfVxuICAgICAgICAgIHN0eWxlPXt7IC4uLnJlc3QsIHRyYW5zZm9ybTogKHggYXMgYW55KS5pbnRlcnBvbGF0ZSgoeDogYW55KSA9PiBgdHJhbnNsYXRlM2QoMCwke3h9cHgsMClgKSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17eyBoZWlnaHQgfX0+e2l0ZW1zW2luZGV4XX08L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDYwcHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkKGFuaW1hdGVkLmRpdilgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgY29sb3I6IHBpbms7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaGFuZGxlT25DaGFuZ2U6IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHZvaWQ7XG4gIGhhbmRsZU9uU3VibWl0OiAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvKHByb3BzOiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgb25TdWJtaXQ9e3Byb3BzLmhhbmRsZU9uU3VibWl0fSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlT25DaGFuZ2V9PlxuICAgICAgPEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxTdHlsZWRJbnB1dCBwbGFjZWhvbGRlcj1cIlBsZWFzZSBpbnB1dCB5b3VyIGxpbmsgaGVyZS4uXCIgLz5cbiAgICAgICAgPFN0eWxlZEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9TdHlsZWRCdXR0b24+XG4gICAgICA8L0l0ZW1Db250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGNvbG9yOiBwaW5rO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MzA7XG4gIHdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBwaW5rO1xuICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICBvdXRsaW5lOiBub25lO1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHBpbms7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiBwaW5rO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTMwO1xuICBib3JkZXI6IDJweCBzb2xpZCBwaW5rO1xuICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICBtYXJnaW46IDEwcHg7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjRweCAtMTNweCByZ2JhKDI1NSwgMTkyLCAyMDMsIDEpO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDM0cHggLTEzcHggcmdiYSgyNTUsIDE5MiwgMjAzLCAxKTtcbiAgfVxuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBQID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgUDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQIGZyb20gJy4uLy4uLy4uL2dsb2JhbC9jb21wb25lbnRzL1AnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwcmljZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBpbWdVUkw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29udGVudD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mbyhwcm9wczogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8SW5mb0NvbnRhaW5lciBpbWdVUkw9e3Byb3BzLmltZ1VSTH0+XG4gICAgICA8U3R5bGVkVGl0bGU+e3Byb3BzLnRpdGxlfTwvU3R5bGVkVGl0bGU+XG4gICAgICA8U3R5bGVkUHJpY2U+e3Byb3BzLnByaWNlICYmICdQUklDRTogJyArIHByb3BzLnByaWNlfTwvU3R5bGVkUHJpY2U+XG4gICAgPC9JbmZvQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZChQKWBcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmNvbnN0IFN0eWxlZFByaWNlID0gc3R5bGVkKFApYFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjllbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5pbnRlcmZhY2UgSW5mb0NvbnRhaW5lclByb3BzIHtcbiAgaW1nVVJMOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IEluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHM6IEluZm9Db250YWluZXJQcm9wcykgPT4gcHJvcHMuaW1nVVJMfSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBQcm9kdWN0SW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZmV0Y2hUaWtpUHJvZHVjdCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgdGlraVBhcnNlciB9IGZyb20gJy4uL2FkYXB0ZXJzJztcbmltcG9ydCB7IHByb2R1Y3RJbml0aWFsU3RhdGUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoJztcbmltcG9ydCBJbmZvQ29udGFpbmVyIGZyb20gJy4vSW5mbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtpbnB1dERhdGEsIHNldElucHV0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwcm9kdWN0RGF0YSwgc2V0UHJvZHVjdERhdGFdID0gUmVhY3QudXNlU3RhdGU8UHJvZHVjdEluaXRpYWxTdGF0ZT4ocHJvZHVjdEluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBzZXRJbnB1dERhdGEoKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPbnN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRpa2lQYXJzZXIocmVzcG9uc2UucmVzcG9uc2UpO1xuICAgICAgc2V0UHJvZHVjdERhdGEocmVzdWx0KTtcbiAgICB9O1xuICAgIGRpc3BhdGNoKGZldGNoVGlraVByb2R1Y3QoaW5wdXREYXRhLCBjYWxsYmFjaykpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxIb21lcGFnZVdyYXBwZXI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8U2VhcmNoQmFyIGhhbmRsZU9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX0gaGFuZGxlT25TdWJtaXQ9e2hhbmRsZU9uc3VibWl0fSAvPlxuICAgICAge3Byb2R1Y3REYXRhLnRpdGxlICYmIChcbiAgICAgICAgPEluZm9Db250YWluZXIgdGl0bGU9e3Byb2R1Y3REYXRhLnRpdGxlfSBwcmljZT17cHJvZHVjdERhdGEucHJpY2V9IGltZ1VSTD17cHJvZHVjdERhdGEuaW1nVVJMfSAvPlxuICAgICAgKX1cbiAgICA8L0hvbWVwYWdlV3JhcHBlcj5cbiAgKTtcbn1cblxuY29uc3QgSG9tZXBhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG4iLCJleHBvcnQgZnVuY3Rpb24gdGlraVBhcnNlcihkYXRhOiBzdHJpbmcpIHtcbiAgY29uc3QgdGl0bGVSZWdleCA9IC9tZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9XCIoLio/KVwiLztcbiAgY29uc3QgcHJpY2VSZWdleCA9IC88c3BhbiBjbGFzcz1cInByb2R1Y3QtcHJpY2VfX2N1cnJlbnQtcHJpY2VcIj4oLio/KTwvO1xuICBjb25zdCBpbWFnZVJlZ2V4ID0gL2xhcmdlX3VybFwiOlwiKC4qPylcIi87XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHRpdGxlUmVnZXguZXhlYyhkYXRhKT8uWzFdLFxuICAgIHByaWNlOiBwcmljZVJlZ2V4LmV4ZWMoZGF0YSk/LlsxXSxcbiAgICBpbWdVUkw6IGltYWdlUmVnZXguZXhlYyhkYXRhKT8uWzFdLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBob21lcGFnZVNhZ2EgZnJvbSAnLi9zYWdhJztcbmltcG9ydCB7IHVzZUluamVjdFNhZ2EgfSBmcm9tICcuLi8uLi91dGlscy9pbmplY3RTYWdhJztcbmltcG9ydCBIb21lcGFnZUNvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvSG9tZXBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcbiAgdXNlSW5qZWN0U2FnYSh7IGtleTogJ2hvbWVwYWdlJywgc2FnYTogaG9tZXBhZ2VTYWdhIH0pO1xuICByZXR1cm4gPEhvbWVwYWdlQ29udGFpbmVyIC8+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==