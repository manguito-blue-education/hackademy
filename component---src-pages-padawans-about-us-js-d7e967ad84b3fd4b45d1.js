(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"26Ng":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),o=a.n(n),i=a("vOnD"),r=function(e){var t=e.text,a=e.btnText;return o.a.createElement(l,null,o.a.createElement(s,null),o.a.createElement(c,null,t),o.a.createElement(m,null,o.a.createElement("p",null,a),o.a.createElement("button",null,"v")))},l=i.a.section.withConfig({displayName:"Hero__HeroWrapper",componentId:"sc-1d51hry-0"})(['position:relative;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;grid-template-areas:"main";height:100vh;color:#ffffff;']),s=i.a.div.withConfig({displayName:"Hero__ImagePlaceholder",componentId:"sc-1d51hry-1"})(["grid-area:main;height:100%;width:100%;background:#c4c4c4;"]),c=i.a.p.withConfig({displayName:"Hero__MainText",componentId:"sc-1d51hry-2"})(["grid-area:main;align-self:end;max-width:550px;position:relative;bottom:30px;justify-self:center;"]),m=i.a.div.withConfig({displayName:"Hero__ContactButtonWrapper",componentId:"sc-1d51hry-3"})(["position:absolute;bottom:30px;right:20px;display:flex;align-items:center;button{width:65px;height:65px;margin-left:30px;border-radius:50%;background:#ffffff;border:none;}"])},"9KWx":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),o=a.n(n),i=a("vOnD"),r=function(e){var t=e.content,a=t.text,n=t.images;return o.a.createElement(c,null,o.a.createElement(m,null,a),o.a.createElement(l,null,function(e){return e.map((function(e,t){e.src;var a=e.title,n=e.subtitle;return o.a.createElement("div",{key:t},o.a.createElement(s,null),o.a.createElement("div",null,o.a.createElement("p",null,a),o.a.createElement("p",null,n)))}))}(n)))},l=i.a.div.withConfig({displayName:"WideGallery__Grid",componentId:"rmfb8m-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:20px;"]),s=i.a.div.withConfig({displayName:"WideGallery__ImagePlaceHolder",componentId:"rmfb8m-1"})(["width:100%;height:496.81px;background:#c4c4c4;"]),c=i.a.section.withConfig({displayName:"WideGallery__WideGalleryWrapper",componentId:"rmfb8m-2"})(["color:#fff;"]),m=i.a.p.withConfig({displayName:"WideGallery__Title",componentId:"rmfb8m-3"})(["font-size:27px;line-height:32px;text-align:center;letter-spacing:0.04em;max-width:min(1090px,calc(100vw - 24vmin));margin:0 auto 10px;"])},"9h06":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=a("vOnD"),r=a("26Ng"),l=a("O8FS"),s=[{title:"THE STORY",subtitle:"Hackademy es un entrenamiento de alto rendimiento donde ponemos manos a la obra y, durante 16 semanas, desarrollamos un prototipo funcional de una solucion a un problema del mundo real. Para desarrollar este prototipo seguiremos el proceso completo del desarrollo de software",texts:["En Hackademy sabemos que hay mucho contenido en la red sobre programación desde cero más lo poco o mucho que vemos en la escuela.","Es por esto que Hackademy no es un curso, nos enfocamos en el nivel más alto de la capacitación y trabajamos directamente en la practica y la implementación de los conocimientos que han adquirido previamente."]},{title:"THE STORY",subtitle:"Desarrolla tu talento a travez de la practica y con apoyo de mentores que compartiran contigo su experiencia.",texts:["Nuestro compromiso es que desarrolles todo tu potencial y que obtengas tu primer empleo o mejores el que tienes demostrando  que tienes todas las herramientas necesarias y el talento que la industria demanda.","Para lograr esto hemos desarrollado un modelo que se enfoca 100% a la practica donde aplicaras tus conocimientos en proyectos realesn"],lists:[{title:"PROCESO",items:["Registro en el club de programación","Entrevista","Firma de carta compromiso","Acceso al entrenamieto técnico","Acceso a la agenda de entrevistas"]},{title:"BENEFICIOS",items:["Acceso a GitHub","Acceso a AWS educate","Acceso a webinars","Mejora en las habilidades","Acceso a entrevistas de empleo","Acceso a becas del 100%"]}]}],c={text:"Nuestro programa es 100% sin costo monetario, es completamente becado por empresas qeu buscan talento... Solo te pedimos una inversión de minimo 4 horas diarias de practica",images:[{src:"",title:"Jeremy Evans",subtitle:"CEO"},{src:"",title:"Jeremy Evans",subtitle:"CEO"},{src:"",title:"Jeremy Evans",subtitle:"CEO"},{src:"",title:"Jeremy Evans",subtitle:"CEO"}]},m=a("9KWx"),d=i.a.section.withConfig({displayName:"about-us__AboutUsWrapper",componentId:"sc-18p14ds-0"})(["background:var(--main-black);"]);t.default=function(){return o.a.createElement(d,null,o.a.createElement(r.a,{text:"Hackademy no es un curso, nos enfocamos en el nivel más alto de la capacitación y trabajamos directamente en la practica y la implementación de los conocimientos que han adquirido previamente. ",btnText:"HACKADEMY"}),o.a.createElement(l.a,{content:s}),o.a.createElement(m.a,{content:c}))}},O8FS:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),o=a.n(n),i=a("vOnD"),r=function(e){var t=e.content;return t.map((function(e,t){var a=e.title,n=e.subtitle,i=e.texts,r=e.lists;return o.a.createElement(l,{key:t},o.a.createElement(s,null,a),o.a.createElement("div",null,o.a.createElement(c,null,n),function(e){return e.map((function(e,t){return o.a.createElement(m,{key:t},e)}))}(i),o.a.createElement(p,null,function(e){return e?e.map((function(e,t){var a=e.title,n=e.items;return o.a.createElement("div",{key:t},o.a.createElement(d,null,a),o.a.createElement(u,null,n.map((function(e,t){return o.a.createElement("li",{style:{marginTop:15},key:t},"- ",e)}))))})):null}(r))))}))},l=i.a.section.withConfig({displayName:"Content__Grid",componentId:"sc-1lstdum-0"})(["max-width:var(--max-width);display:grid;grid-template-columns:max-content 1fr;grid-column-gap:24px;margin:0 auto 24px;color:#fff;"]),s=i.a.p.withConfig({displayName:"Content__Title",componentId:"sc-1lstdum-1"})(["font-size:12px;line-height:14px;letter-spacing:0.04em;color:#909090;"]),c=i.a.p.withConfig({displayName:"Content__Subtitle",componentId:"sc-1lstdum-2"})(["font-size:27px;line-height:32px;letter-spacing:0.04em;margin-bottom:24px;"]),m=i.a.p.withConfig({displayName:"Content__Text",componentId:"sc-1lstdum-3"})(["font-size:13px;line-height:27px;letter-spacing:0.04em;color:#c7c7c7;max-width:720px;"]),d=i.a.p.withConfig({displayName:"Content__ListTitle",componentId:"sc-1lstdum-4"})(["font-weight:bold;font-size:18px;line-height:204.19%;letter-spacing:0.015em;"]),p=i.a.div.withConfig({displayName:"Content__ListContainer",componentId:"sc-1lstdum-5"})(["display:flex;justify-content:space-between;flex-wrap:wrap;width:50%;"]),u=i.a.ul.withConfig({displayName:"Content__List",componentId:"sc-1lstdum-6"})(["max-width:200px;"])}}]);
//# sourceMappingURL=component---src-pages-padawans-about-us-js-d7e967ad84b3fd4b45d1.js.map