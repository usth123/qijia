(function(window){var svgSprite='<svg><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M934.48936 203.517183 89.511663 203.517183c-14.813381 0-26.824949-11.998265-26.824949-26.824949s12.010545-26.824949 26.824949-26.824949l844.977697 0c14.813381 0 26.824949 11.998265 26.824949 26.824949S949.302741 203.517183 934.48936 203.517183z"  ></path><path d="M934.48936 538.824949 89.511663 538.824949c-14.813381 0-26.824949-11.997242-26.824949-26.824949 0-14.826684 12.010545-26.824949 26.824949-26.824949l844.977697 0c14.813381 0 26.824949 11.998265 26.824949 26.824949C961.313286 526.826684 949.302741 538.824949 934.48936 538.824949z"  ></path><path d="M934.48936 874.132714 89.511663 874.132714c-14.813381 0-26.824949-11.997242-26.824949-26.824949s12.010545-26.824949 26.824949-26.824949l844.977697 0c14.813381 0 26.824949 11.997242 26.824949 26.824949S949.302741 874.132714 934.48936 874.132714z"  ></path></symbol><symbol id="icon-pic" viewBox="0 0 1024 1024"><path d="M771.830235 374.229217 557.80779 612.30345 403.025565 502.295987c-5.619998-5.646604-13.104459-7.990998-20.455891-7.510044-7.378038-0.479931-14.862499 1.863441-20.48352 7.510044L210.713584 704.889125c-10.468422 10.441816-10.468422 27.382651 0 37.824467 10.441816 10.440793 27.381627 10.440793 37.82242 0l139.333372-186.453552 154.303318 109.634979c5.40715 5.434779 12.545734 7.884574 19.657712 7.725962 7.085372 0.158612 14.223956-2.291183 19.631106-7.725962l228.191142-253.788124c10.468422-10.441816 10.468422-27.382651 0-37.877679C799.212886 363.7874 782.272052 363.7874 771.830235 374.229217zM913.401578 65.676815l-771.542174 0c-28.287253 0-51.221592 22.906709-51.221592 51.193962l0 710.918445c0 28.288277 22.934339 51.248198 51.221592 51.248198l771.542174 0c28.288277 0 51.220568-22.960944 51.220568-51.248198L964.622146 116.870778C964.621123 88.583524 941.688831 65.676815 913.401578 65.676815zM907.248438 799.448758c0 14.116509-11.452843 25.623587-25.598005 25.623587L171.904697 825.072345c-14.143115 0-25.596981-11.507078-25.596981-25.623587L146.307715 136.689149c0-14.117532 11.453866-25.571399 25.596981-25.571399l709.74676 0c14.144138 0 25.598005 11.453866 25.598005 25.571399L907.249461 799.448758zM356.945063 366.824573c42.431392 0 76.818573-34.360576 76.818573-76.81755 0-42.404786-34.387181-76.819596-76.818573-76.819596-42.431392 0-76.818573 34.413787-76.818573 76.819596C280.127514 332.463997 314.514695 366.824573 356.945063 366.824573zM331.348082 264.382413l51.221592 0 0 51.247174-51.221592 0L331.348082 264.382413z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)