(this.webpackJsonpflight_count=this.webpackJsonpflight_count||[]).push([[0],{11:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){e.exports=a(51)},36:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(25),i=a.n(l),c=(a(36),a(1)),o=a(5),s=a(3),u=a(4),m=a(9),d=a(28);a(11);var h=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(window.innerWidth),l=Object(m.a)(a,2),i=l[0],c=l[1],o=Object(n.useState)(window.innerHeight),s=Object(m.a)(o,2),u=s[0],h=s[1],p=function(){c(window.innerWidth/1.5),h(window.innerHeight/1.5)};return Object(n.useEffect)((function(){window.addEventListener("resize",p);var e=t.current.controls();return e.autoRotate=!0,e.autoRotateSpeed="1.0",e.maxDistance="280.0",e.enabled=!1,t.current.enablePointerInteraction=!1,t.current.width=600,t.current.height=500,function(){return window.removeEventListener("resize",p)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"GlobeMap"},r.a.createElement(d.a,{ref:t,globeImageUrl:"//unpkg.com/three-globe/example/img/earth-night.jpg",width:i,height:u})))};var p=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null," Cosmic Data "))};var g=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null," Data provided by ",r.a.createElement("a",{href:"https://api.nasa.gov/",target:"_blank",rel:"noopener noreferrer"},"NASA API")),r.a.createElement("p",null," ",r.a.createElement("a",{href:"https://github.com/pieper-chris",target:"_blank",rel:"noopener noreferrer"},"Github")))};var f=function(e){return r.a.createElement("div",{className:"toggle_msg"},r.a.createElement("u",null," Click any element to toggle "))},v=a(8),b=a.n(v),E=a(15);a(24);var _=function(e){var t=e.name,a=e.danger,n=e.h_abs_mag,l=e.km_diameter,i=e.miles_diameter,c=(e.close_app_date,e.link);return r.a.createElement("div",{className:"Neo"},r.a.createElement("h1",null," Name:  ",r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"}," ",t," ")),r.a.createElement("p",null," H (absolute magnitude): ",String(n)," "),r.a.createElement("p",null," Diameter (km): ",String(l.estimated_diameter_min),"- ",String(l.estimated_diameter_max)," "),r.a.createElement("p",null,"  Diameter (miles): ",String(i.estimated_diameter_min),"- ",String(i.estimated_diameter_max)," "),r.a.createElement("p",null," Potentially Dangerous?: ",String(a)," "))};var w=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(!1),c=Object(m.a)(i,2),o=c[0],s=c[1];Object(n.useEffect)((function(){u()}),[]);var u=function(){var e=Object(E.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"WMtTrqwesceUk1odHg4uWnSjNH2FMdWVQdw0h6zG",e.next=3,fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?"+new URLSearchParams({api_key:"WMtTrqwesceUk1odHg4uWnSjNH2FMdWVQdw0h6zG"}));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(a.near_earth_objects),console.log(a.near_earth_objects);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",{onClick:function(e){s(!o)},className:"toggle_list"},"Current Near-Earth Object (Asteroids) list"),o?r.a.createElement("div",null,a.map((function(e){return r.a.createElement(_,{key:e.id,name:e.name,h_abs_mag:e.absolute_magnitude_h,km_diameter:e.estimated_diameter.kilometers,miles_diameter:e.estimated_diameter.miles,danger:e.is_potentially_hazardous_asteroid,link:e.nasa_jpl_url})}))):null)};var j=function(e){var t=e.name,a=(e.date,e.copyright),n=e.explanation,l=e.media_type,i=e.img_url;return r.a.createElement("div",{className:"apod"},r.a.createElement("h1",null," Title:  ",t," "),r.a.createElement("p",null," Copyright:  ",a," "),r.a.createElement("u",null," Description "),r.a.createElement("p",null," ",n," "),"video"===l?r.a.createElement("p",{className:"video_msg"},' Occasionally, NASA\'s APOD API sends a youtube video for the "Astronomy Picture of the Day". Today is one of those days. You can view the video  ',r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"here. "),"Apologies for the inconveniece; hopefully tomorrow a nice big image will be shown here! "):r.a.createElement("img",{id:"apod_image",src:i,alt:"APOD currently unavailable :( please try again later!"}))};var y=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(!1),c=Object(m.a)(i,2),o=c[0],s=c[1],u=Object(n.useState)([]),d=Object(m.a)(u,2),h=d[0],p=d[1],g=Object(n.useState)(),f=Object(m.a)(g,2),v=f[0],_=f[1];Object(n.useEffect)((function(){w()}),[]);var w=function(){var e=Object(E.a)(b.a.mark((function e(){var t,a,n,r,i,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"WMtTrqwesceUk1odHg4uWnSjNH2FMdWVQdw0h6zG",t=new Date,a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear(),a<10&&(a="0"+a),n<10&&(n="0"+n),i=r+"-"+n+"-"+a,console.log(i),e.next=13,fetch("https://api.nasa.gov/planetary/apod?"+new URLSearchParams({date:i,hd:!0,api_key:"WMtTrqwesceUk1odHg4uWnSjNH2FMdWVQdw0h6zG"}));case 13:return c=e.sent,e.next=16,c.json();case 16:o=e.sent,l(o),console.log(o),_(o.media_type),p("video"===o.media_type?o.url:o.hdurl);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",{onClick:function(e){s(!o)},className:"toggle_list"},"NASA Astronomy Picture of the Day"),o?r.a.createElement("div",null,r.a.createElement(j,{name:a.title,copyright:a.copyright,explanation:a.explanation,media_type:v,img_url:h})):null)},O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(h,null),r.a.createElement(f,null),r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(g,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.83f672f3.chunk.js.map