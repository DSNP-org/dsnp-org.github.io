(self.webpackChunkgatsby_dsnp_org=self.webpackChunkgatsby_dsnp_org||[]).push([[332],{9774:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return y}});var o,M,i=n(7294),L=n(5444),s=n(2111),u=n(1431),r=n(8747),c=n(3444),a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},l=(M=o={path:void 0,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&o.path)}},o.exports,function(){var t={}.hasOwnProperty;function e(){for(var n=[],o=0;o<arguments.length;o++){var M=arguments[o];if(M){var i=typeof M;if("string"===i||"number"===i)n.push(M);else if(Array.isArray(M)&&M.length){var L=e.apply(null,M);L&&n.push(L)}else if("object"===i)for(var s in M)t.call(M,s)&&M[s]&&n.push(s)}}return n.join(" ")}M.exports?(e.default=e,M.exports=e):window.classNames=e}(),o.exports);function w(t,e,n){var o,M,i,L,s;function u(){var r=Date.now()-L;r<e&&r>=0?o=setTimeout(u,e-r):(o=null,n||(s=t.apply(i,M),i=M=null))}null==e&&(e=100);var r=function(){i=this,M=arguments,L=Date.now();var r=n&&!o;return o||(o=setTimeout(u,e)),r&&(s=t.apply(i,M),i=M=null),s};return r.clear=function(){o&&(clearTimeout(o),o=null)},r.flush=function(){o&&(s=t.apply(i,M),i=M=null,clearTimeout(o),o=null)},r}w.debounce=w;var j=w;!function(t,e){void 0===e&&(e={});var n=e.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],M=document.createElement("style");M.type="text/css","top"===n&&o.firstChild?o.insertBefore(M,o.firstChild):o.appendChild(M),M.styleSheet?M.styleSheet.cssText=t:M.appendChild(document.createTextNode(t))}}(".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n");var C,d=(C="indiana-scroll-container",function(t,e){if(!t)return C;var n;"string"==typeof t?n=t:e=t;var o=C;return n&&(o+="__"+n),o+(e?Object.keys(e).reduce((function(t,n){var M=e[n];return M&&(t+=" "+("boolean"==typeof M?o+"--"+n:o+"--"+n+"_"+M)),t}),""):"")}),D=function(t){function e(e){var n=t.call(this,e)||this;return n.onEndScroll=function(){n.scrolling=!1,!n.pressed&&n.started&&n.processEnd()},n.onScroll=function(t){var e=n.container.current;e.scrollLeft===n.scrollLeft&&e.scrollTop===n.scrollTop||(n.scrolling=!0,n.processScroll(t),n.onEndScroll())},n.onTouchStart=function(t){var e=n.props.nativeMobileScroll;if(n.isDraggable(t.target))if(n.internal=!0,e&&n.scrolling)n.pressed=!0;else{var o=t.touches[0];n.processClick(t,o.clientX,o.clientY),!e&&n.props.stopPropagation&&t.stopPropagation()}},n.onTouchEnd=function(t){var e=n.props.nativeMobileScroll;n.pressed&&(!n.started||n.scrolling&&e?n.pressed=!1:n.processEnd(),n.forceUpdate())},n.onTouchMove=function(t){var e=n.props.nativeMobileScroll;if(n.pressed&&(!e||!n.isMobile)){var o=t.touches[0];o&&n.processMove(t,o.clientX,o.clientY),t.preventDefault(),n.props.stopPropagation&&t.stopPropagation()}},n.onMouseDown=function(t){n.isDraggable(t.target)&&n.isScrollable()&&(n.internal=!0,-1!==n.props.buttons.indexOf(t.button)&&(n.processClick(t,t.clientX,t.clientY),t.preventDefault(),n.props.stopPropagation&&t.stopPropagation()))},n.onMouseMove=function(t){n.pressed&&(n.processMove(t,t.clientX,t.clientY),t.preventDefault(),n.props.stopPropagation&&t.stopPropagation())},n.onMouseUp=function(t){n.pressed&&(n.started?n.processEnd():(n.internal=!1,n.pressed=!1,n.forceUpdate(),n.props.onClick&&n.props.onClick(t)),t.preventDefault(),n.props.stopPropagation&&t.stopPropagation())},n.container=i.createRef(),n.onEndScroll=j(n.onEndScroll,300),n.scrolling=!1,n.started=!1,n.pressed=!1,n.internal=!1,n.getRef=n.getRef.bind(n),n}return function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.componentDidMount=function(){var t=this.props.nativeMobileScroll,e=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),e.addEventListener("touchstart",this.onTouchStart,{passive:!1}),e.addEventListener("mousedown",this.onMouseDown,{passive:!1}),t&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())},e.prototype.componentWillUnmount=function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},e.prototype.getElement=function(){return this.container.current},e.prototype.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},e.prototype.isDraggable=function(t){var e=this.props.ignoreElements;if(e){var n=t.closest(e);return null===n||n.contains(this.getElement())}return!0},e.prototype.isScrollable=function(){var t=this.container.current;return t&&(t.scrollWidth>t.clientWidth||t.scrollHeight>t.clientHeight)},e.prototype.processClick=function(t,e,n){var o=this.container.current;this.scrollLeft=o.scrollLeft,this.scrollTop=o.scrollTop,this.clientX=e,this.clientY=n,this.pressed=!0},e.prototype.processStart=function(t){void 0===t&&(t=!0);var e=this.props.onStartScroll;this.started=!0,t&&document.body.classList.add("indiana-dragging"),e&&e({external:!this.internal}),this.forceUpdate()},e.prototype.processScroll=function(t){if(this.started){var e=this.props.onScroll;e&&e({external:!this.internal})}else this.processStart(!1)},e.prototype.processMove=function(t,e,n){var o=this.props,M=o.horizontal,i=o.vertical,L=o.activationDistance,s=o.onScroll,u=this.container.current;this.started?(M&&(u.scrollLeft-=e-this.clientX),i&&(u.scrollTop-=n-this.clientY),s&&s({external:!this.internal}),this.clientX=e,this.clientY=n,this.scrollLeft=u.scrollLeft,this.scrollTop=u.scrollTop):(M&&Math.abs(e-this.clientX)>L||i&&Math.abs(n-this.clientY)>L)&&(this.clientX=e,this.clientY=n,this.processStart())},e.prototype.processEnd=function(){var t=this.props.onEndScroll;this.container.current&&t&&t({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("indiana-dragging"),this.forceUpdate()},e.prototype.getRef=function(t){[this.container,this.props.innerRef].forEach((function(e){e&&("function"==typeof e?e(t):e.current=t)}))},e.prototype.render=function(){var t=this.props,e=t.children,n=t.className,o=t.style,M=t.hideScrollbars,L=t.component;return i.createElement(L,{className:l(n,d({dragging:this.pressed,"hide-scrollbars":M,"native-scroll":this.isMobile})),style:o,ref:this.getRef,onScroll:this.onScroll},e)},e.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},component:"div",buttons:[0]},e}(i.PureComponent),S=n(4479),p=n(58),y=function(t){var e=t.data,n=t.location,o=(0,i.useState)(!1),M=o[0],a=o[1],l=(0,i.useState)(!1),w=l[0],j=l[1],C=e.allGhostPost.nodes,d=C.filter((function(t){return t.tags.some((function(t){return"#HomePageWhatWeDo"===t.name}))})),y=C.filter((function(t){return t.tags.some((function(t){return"#HomePageEcosystemCard"===t.name}))}));return(0,i.useEffect)((function(){M&&function(){var t=-100,e=-100,n="undefined"!=typeof document?document.querySelector(".cursor--small"):null;"undefined"!=typeof document&&document.addEventListener("mousemove",(function(n){t=n.clientX,e=n.clientY})),requestAnimationFrame((function o(){n.style.transform="translate("+t+"px, "+e+"px)",requestAnimationFrame(o)}));var o,M=0,i=0,L="undefined"!=typeof document?document.querySelector(".cursor--canvas"):null;S.setup(L);var s=new S.Path;s.strokeColor="#469abd",s.strokeWidth=2,s.add(new S.Point(15,15)),s.add(new S.Point(0,30)),s.add(new S.Point(15,45));var u=new S.Path.Circle(new S.Point(57.5,30),30);u.strokeColor="#469abd",u.strokeWidth=2;var r,c,a=new S.Path;a.strokeColor="#469abd",a.strokeWidth=2,a.add(new S.Point(100,15)),a.add(new S.Point(115,30)),a.add(new S.Point(100,45)),function(){o=new S.Group([s,u,a]);var n=function(t,e,n){return(1-n)*t+n*e};S.view.onFrame=function(){M=n(M,t,.2),i=n(i,e,.2),o.position=new S.Point(M,i),w&&(o.strokeWidth=3)}}(),r=function(){j(!0)},c=function(){j(!1)},("undefined"!=typeof document?document.querySelectorAll(".hoverLink"):null).forEach((function(t){t.addEventListener("mouseenter",r),t.addEventListener("mouseleave",c)}))}()}),[M]),i.createElement(c.Xu,null,i.createElement("div",{className:M?"Index__block Index__blockCustomCursor":"Index__block"},M&&i.createElement(i.Fragment,null,i.createElement("div",{className:"cursor cursor--small"}),i.createElement("canvas",{className:"cursor cursor--canvas"})),i.createElement(u.U,{location:n}),i.createElement(s.Ar,{isHome:!0},i.createElement("div",{className:"container"},i.createElement("div",null,i.createElement("section",{className:"site-banner-desc",dangerouslySetInnerHTML:{__html:d[0].html}}),i.createElement(L.Link,{to:"about-who-we-are"},i.createElement("img",{className:"Layout__arrowButton",src:p.Z,alt:"up-arrow-button"}))),i.createElement("div",{className:"body-block"},i.createElement("div",{className:"ContentCard__blockTitle","data-aos":"fade-right","data-aos-duration":"1400"},"Get Started"))),i.createElement("div",{onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)}},i.createElement(c.VS,null,i.createElement(D,{className:"ContentCard__block"},i.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNvbXBvbmVudF8xXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIKCSB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyMzUgMTcxLjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIzNSAxNzEuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiM0NjlBQkQ7c3Ryb2tlLXdpZHRoOjM7fQoJLnN0MntmaWxsOiM0NjlBQkQ7fQoJLnN0M3tlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KPC9zdHlsZT4KPGcgaWQ9IkVsbGlwc2VfMzg0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTguNjYzIDE3MS4yNDkpIHJvdGF0ZSgtMTM1KSI+Cgk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI2MC41IiBjeT0iNjAuNSIgcj0iNjAuNSIvPgoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNjAuNSIgY3k9IjYwLjUiIHI9IjU5Ii8+CjwvZz4KPGc+Cgk8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjIyNi45LDgyLjEgMjA1LjEsNjAuMiAyMDMuMyw2MiAyMjUuMiw4My44IDIyNy4zLDg1LjkgMjI1LjIsODguMSAyMDMuMywxMDkuOSAyMDUuMSwxMTEuNyAKCQkyMjYuOSw4OS44IDIzMC44LDg1LjkgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSI3LjcsODUuOSA5LjksODMuOCAzMS43LDYyIDI5LjksNjAuMiA4LjEsODIuMSA0LjIsODUuOSA4LjEsODkuOCAyOS45LDExMS43IDMxLjcsMTA5LjkgOS45LDg4LjEgCSIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTI5LjksMTExLjdMOC4xLDg5LjhsLTMuOS0zLjlsMy45LTMuOWwyMS44LTIxLjhsMS43LDEuN0w5LjksODMuOGwtMi4xLDIuMWwyLjEsMi4xbDIxLjgsMjEuOEwyOS45LDExMS43eiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTIyNi45LDg5LjhsLTIxLjgsMjEuOGwtMS43LTEuN2wyMS44LTIxLjhsMi4xLTIuMWwtMi4xLTIuMUwyMDMuMyw2MmwxLjctMS43bDIxLjgsMjEuOGwzLjksMy45TDIyNi45LDg5Ljh6IgoJCS8+CjwvZz4KPGcgY2xhc3M9InN0MyI+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNzMuOCw4M2MwLjUtMC44LDEuMS0xLjQsMS45LTEuOWMwLjgtMC41LDEuNy0wLjcsMi43LTAuN2MxLjEsMCwyLjEsMC4zLDMsMC44YzAuOSwwLjUsMS41LDEuMywxLjksMi4zaC0yLjEKCQljLTAuMy0wLjUtMC42LTEtMS4xLTEuMmMtMC41LTAuMy0xLTAuNC0xLjctMC40Yy0wLjcsMC0xLjMsMC4yLTEuOCwwLjVjLTAuNSwwLjMtMSwwLjgtMS4zLDEuM2MtMC4zLDAuNi0wLjUsMS4zLTAuNSwyCgkJYzAsMC44LDAuMiwxLjQsMC41LDJjMC4zLDAuNiwwLjcsMSwxLjMsMS4zYzAuNSwwLjMsMS4yLDAuNSwxLjgsMC41YzAuNiwwLDEuMi0wLjEsMS43LTAuNGMwLjUtMC4zLDAuOS0wLjcsMS4xLTEuMmgyLjEKCQljLTAuNCwxLTEsMS44LTEuOSwyLjNjLTAuOSwwLjUtMS45LDAuOC0zLDAuOGMtMSwwLTEuOS0wLjItMi43LTAuN3MtMS41LTEuMS0xLjktMS45Yy0wLjUtMC44LTAuNy0xLjctMC43LTIuNwoJCUM3Myw4NC43LDczLjMsODMuOCw3My44LDgzeiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTg2LjksNzkuOVY5MWgtMS43Vjc5LjlIODYuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04OS4zLDgxLjNjLTAuMi0wLjItMC4zLTAuNS0wLjMtMC44YzAtMC4zLDAuMS0wLjYsMC4zLTAuOHMwLjUtMC4zLDAuOC0wLjNjMC4zLDAsMC42LDAuMSwwLjgsMC4zCgkJYzAuMiwwLjIsMC4zLDAuNSwwLjMsMC44YzAsMC4zLTAuMSwwLjYtMC4zLDAuOGMtMC4yLDAuMi0wLjUsMC4zLTAuOCwwLjNDODkuNyw4MS42LDg5LjUsODEuNSw4OS4zLDgxLjN6IE05MC45LDgyLjdWOTFoLTEuN3YtOC4zCgkJSDkwLjl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNOTMuMSw4NC42YzAuMy0wLjYsMC44LTEuMSwxLjQtMS41YzAuNi0wLjMsMS4zLTAuNSwyLjEtMC41YzEsMCwxLjgsMC4yLDIuNSwwLjdzMS4xLDEuMiwxLjMsMmgtMS44CgkJYy0wLjEtMC40LTAuNC0wLjctMC43LTFjLTAuMy0wLjItMC43LTAuMy0xLjItMC4zYy0wLjcsMC0xLjMsMC4yLTEuNywwLjdjLTAuNCwwLjUtMC42LDEuMi0wLjYsMi4xYzAsMC45LDAuMiwxLjYsMC42LDIuMQoJCWMwLjQsMC41LDEsMC44LDEuNywwLjhjMSwwLDEuNi0wLjQsMi0xLjNoMS44Yy0wLjIsMC44LTAuNywxLjUtMS40LDJzLTEuNSwwLjctMi41LDAuN2MtMC44LDAtMS41LTAuMi0yLjEtMC41CgkJYy0wLjYtMC40LTEuMS0wLjktMS40LTEuNWMtMC4zLTAuNi0wLjUtMS40LTAuNS0yLjJDOTIuNiw4Niw5Mi43LDg1LjMsOTMuMSw4NC42eiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTEwNS40LDg2LjlsMy44LDQuMWgtMi4zbC0zLjEtMy42VjkxaC0xLjdWNzkuOWgxLjd2Ni40bDMtMy42aDIuNEwxMDUuNCw4Ni45eiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTEyMi40LDkxbC0xLjMtMS4zYy0wLjUsMC41LTEsMC45LTEuNiwxLjFjLTAuNiwwLjItMS4yLDAuNC0yLDAuNGMtMC43LDAtMS40LTAuMS0yLTAuNAoJCWMtMC42LTAuMy0xLTAuNi0xLjMtMS4xYy0wLjMtMC41LTAuNS0xLTAuNS0xLjdjMC0wLjcsMC4yLTEuNCwwLjYtMS45YzAuNC0wLjYsMS0xLDEuOC0xLjNjLTAuMy0wLjQtMC41LTAuNy0wLjYtMQoJCWMtMC4xLTAuMy0wLjItMC42LTAuMi0xYzAtMC41LDAuMS0wLjksMC40LTEuMnMwLjYtMC42LDEtMC45YzAuNC0wLjIsMC45LTAuMywxLjUtMC4zYzAuNiwwLDEuMSwwLjEsMS41LDAuMwoJCWMwLjQsMC4yLDAuNywwLjUsMC45LDAuOWMwLjIsMC40LDAuMywwLjgsMC4yLDEuM2gtMS43YzAtMC40LTAuMS0wLjctMC4zLTAuOWMtMC4yLTAuMi0wLjQtMC4zLTAuOC0wLjNzLTAuNiwwLjEtMC44LDAuMwoJCXMtMC4zLDAuNC0wLjMsMC43YzAsMC4zLDAuMSwwLjUsMC4yLDAuOGMwLjIsMC4zLDAuNCwwLjYsMC44LDFsMi44LDIuN2wxLjEtMS44aDEuOGwtMS4zLDIuM2wtMC40LDAuNmwyLjUsMi41SDEyMi40eiBNMTIwLDg4LjYKCQlsLTIuOC0yLjhjLTEuMiwwLjUtMS44LDEuMi0xLjgsMi4xYzAsMC41LDAuMiwwLjksMC42LDEuM2MwLjQsMC4zLDAuOSwwLjUsMS41LDAuNUMxMTguNCw4OS43LDExOS4zLDg5LjQsMTIwLDg4LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTM2LDgxLjJjMC44LDAuNCwxLjUsMSwxLjksMS44YzAuNSwwLjgsMC43LDEuNywwLjcsMi44cy0wLjIsMi0wLjcsMi44cy0xLjEsMS40LTEuOSwxLjhzLTEuOCwwLjYtMi45LDAuNgoJCWgtMy40VjgwLjZoMy40QzEzNC4yLDgwLjYsMTM1LjEsODAuOCwxMzYsODEuMnogTTEzNS45LDg4LjZjMC43LTAuNywxLTEuNiwxLTIuOGMwLTEuMi0wLjMtMi4yLTEtMi44Yy0wLjYtMC43LTEuNi0xLTIuOC0xaC0xLjcKCQl2Ny42aDEuN0MxMzQuMyw4OS42LDEzNS4yLDg5LjMsMTM1LjksODguNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNDMsODNjMC40LTAuMiwwLjktMC40LDEuNS0wLjR2MS44SDE0NGMtMC43LDAtMS4yLDAuMi0xLjUsMC41cy0wLjUsMC45LTAuNSwxLjhWOTFoLTEuN3YtOC4zaDEuN3YxLjIKCQlDMTQyLjIsODMuNSwxNDIuNiw4My4yLDE0Myw4M3oiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNDYsODQuNmMwLjMtMC42LDAuOC0xLjEsMS40LTEuNWMwLjYtMC40LDEuMy0wLjUsMi0wLjVjMC43LDAsMS4yLDAuMSwxLjcsMC40YzAuNSwwLjMsMC45LDAuNiwxLjIsMXYtMS4yCgkJaDEuN1Y5MWgtMS43di0xLjJjLTAuMywwLjQtMC43LDAuNy0xLjIsMXMtMS4xLDAuNC0xLjcsMC40Yy0wLjcsMC0xLjQtMC4yLTEuOS0wLjVjLTAuNi0wLjQtMS4xLTAuOS0xLjQtMS41CgkJYy0wLjMtMC43LTAuNS0xLjQtMC41LTIuMlMxNDUuNyw4NS4zLDE0Niw4NC42eiBNMTUxLjksODUuNGMtMC4yLTAuNC0wLjUtMC43LTAuOS0xcy0wLjgtMC4zLTEuMi0wLjNjLTAuNCwwLTAuOSwwLjEtMS4yLDAuMwoJCWMtMC40LDAuMi0wLjcsMC41LTAuOSwwLjljLTAuMiwwLjQtMC40LDAuOS0wLjQsMS41czAuMSwxLjEsMC40LDEuNWMwLjIsMC40LDAuNSwwLjgsMC45LDFzMC44LDAuMywxLjIsMC4zYzAuNCwwLDAuOC0wLjEsMS4yLTAuMwoJCXMwLjctMC41LDAuOS0xYzAuMi0wLjQsMC40LTAuOSwwLjQtMS41QzE1Mi4yLDg2LjMsMTUyLjEsODUuOCwxNTEuOSw4NS40eiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE2MS4zLDgzYzAuNSwwLjMsMC45LDAuNiwxLjIsMXYtMS4yaDEuN3Y4LjRjMCwwLjgtMC4yLDEuNC0wLjUsMmMtMC4zLDAuNi0wLjgsMS4xLTEuNCwxLjQKCQljLTAuNiwwLjMtMS4zLDAuNS0yLjIsMC41Yy0xLjEsMC0yLTAuMy0yLjgtMC44Yy0wLjctMC41LTEuMi0xLjItMS4zLTIuMWgxLjdjMC4xLDAuNCwwLjQsMC44LDAuOCwxYzAuNCwwLjMsMC45LDAuNCwxLjUsMC40CgkJYzAuNywwLDEuMi0wLjIsMS43LTAuNnMwLjYtMSwwLjYtMS44di0xLjRjLTAuMywwLjQtMC43LDAuNy0xLjIsMXMtMS4xLDAuNC0xLjcsMC40Yy0wLjcsMC0xLjQtMC4yLTItMC41cy0xLjEtMC45LTEuNC0xLjUKCQljLTAuMy0wLjctMC41LTEuNC0wLjUtMi4yczAuMi0xLjYsMC41LTIuMmMwLjMtMC42LDAuOC0xLjEsMS40LTEuNWMwLjYtMC40LDEuMy0wLjUsMi0wLjVDMTYwLjIsODIuNiwxNjAuOCw4Mi43LDE2MS4zLDgzegoJCSBNMTYyLjEsODUuNGMtMC4yLTAuNC0wLjUtMC43LTAuOS0xcy0wLjgtMC4zLTEuMi0wLjNjLTAuNCwwLTAuOSwwLjEtMS4yLDAuM2MtMC40LDAuMi0wLjcsMC41LTAuOSwwLjljLTAuMiwwLjQtMC40LDAuOS0wLjQsMS41CgkJczAuMSwxLjEsMC40LDEuNWMwLjIsMC40LDAuNSwwLjgsMC45LDFzMC44LDAuMywxLjIsMC4zYzAuNCwwLDAuOC0wLjEsMS4yLTAuM3MwLjctMC41LDAuOS0xYzAuMi0wLjQsMC40LTAuOSwwLjQtMS41CgkJQzE2Mi40LDg2LjMsMTYyLjMsODUuOCwxNjIuMSw4NS40eiIvPgo8L2c+Cjwvc3ZnPgo=",alt:"click-drag",className:"ContentCard__clickDrag"}),y.map((function(t,e){return i.createElement(r.Z,{cardData:t,key:(n=t.title,n+"_"+(new Date).getTime()),index:e+1});var n}))))))))}},858:function(){},4158:function(){}}]);
//# sourceMappingURL=component---src-templates-index-js-33ed8901bb1fbcfa4212.js.map