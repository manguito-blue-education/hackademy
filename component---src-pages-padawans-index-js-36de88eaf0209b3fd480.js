(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{gROJ:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return v}));var t=n("q1tI"),i=n.n(t),r=n("jw5u"),o=n("vOnD"),l=[{heading:"Desarrollamos Talento",paragraphOne:"En Hackademy sabemos que hay mucho contenido en la red sobre\n    programación desde cero más lo poco o mucho que vemos en la\n    escuela.",paragraphTwo:"Es por esto que Hackademy no es un curso, nos enfocamos en el\n    nivel más alto de la capacitación y trabajamos directamente en\n    la practica y la implementación de los conocimientos que han\n    adquirido previamente."},{heading:"Trabajamos con los mejores",paragraphOne:"Para poder obtener experiencia, en esta industria tan competida, necesitas tener una imagen general de las herramientas que estan cambiando el panorama.",paragraphTwo:"Al entrar a Hackademy obtienes acceso a herramientas empresariales de GitHub y AWS de manera gratuita."},{heading:"Sin costo, sin cobros",paragraphOne:"La educación siempre debe de ser de facil acceso para mejorar las condiciones en las que vivimos y estos por esto que Hackademy nunca te cobrará un solo centavo.",paragraphTwo:"En Hackademy tu inversión es tú tiempo y tú conocimiento, de lo demás nos encargamos nosotros."}],s=["/padawans-slide-one.png","/padawans-slide-two.png","/padawans-slide-three.png"],c=function(){var e=[0,0,0],a=Object(t.useState)(0),n=a[0],r=a[1];Object(t.useEffect)((function(){console.log(n)}),[n]);var o,c,v,E;return i.a.createElement(m,null,i.a.createElement(p,null,i.a.createElement(h,null,i.a.createElement(f,null,(c=(o=l[n]).heading,v=o.paragraphOne,E=o.paragraphTwo,i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,c),i.a.createElement("div",null,i.a.createElement("p",null,v),i.a.createElement("p",null,E)))),i.a.createElement(b,null,i.a.createElement("strong",null,"Saber más"),i.a.createElement(y,null,i.a.createElement("img",{src:"/more-arrow.svg",alt:"Flecha botón para saber más "})))))),i.a.createElement(d,null,i.a.createElement(g,{style:{objectFit:"cover",height:"100%",width:"100%"},src:s[n],alt:"Imagen "+(n+1)+" del slider"})),i.a.createElement(u,null,i.a.createElement(w,null,i.a.createElement(x,{onClick:function(){return r((n-1+e.length)%e.length)}},i.a.createElement("img",{src:"/previous-slider-arrow.svg",alt:"Flecha para imagen previa del slider"})),i.a.createElement(x,{onClick:function(){return r((n+1)%e.length)}},i.a.createElement("img",{src:"/next-slider-arrow.svg",alt:"Flecha para siguiente imagen del slider"})))))},m=o.a.main.withConfig({displayName:"Main__PadawansMain",componentId:"s50pyn-0"})(["display:grid;height:100vh;width:100vw;grid-template-columns:minmax(600px,1fr) minmax(450px,660px) 170px;background:var(--main-black);overflow:hidden;@media screen and (max-width:1100px){grid-template-columns:1fr;grid-template-rows:4fr 1fr;}"]),p=o.a.section.withConfig({displayName:"Main__TextSection",componentId:"s50pyn-1"})([""]),d=o.a.section.withConfig({displayName:"Main__CarouselImages",componentId:"s50pyn-2"})(["background:grey;@media screen and (max-width:1100px){display:none;}"]),u=o.a.section.withConfig({displayName:"Main__CarouselController",componentId:"s50pyn-3"})(["display:flex;align-items:flex-end;@media screen and (max-width:1100px){align-items:flex-start;justify-content:center;}"]),g=o.a.img.withConfig({displayName:"Main__CarouselImage",componentId:"s50pyn-4"})([""]),h=o.a.div.withConfig({displayName:"Main__TextWrapper",componentId:"s50pyn-5"})(["color:#fff;display:flex;height:100%;justify-content:center;align-items:center;"]),f=o.a.div.withConfig({displayName:"Main__TextContainer",componentId:"s50pyn-6"})(["max-width:525px;h2{font-weight:bold;font-size:60px;line-height:70px;margin-bottom:42px;}p{max-width:325px;margin-bottom:20px;}"]),w=o.a.div.withConfig({displayName:"Main__SliderButtonsWrapper",componentId:"s50pyn-7"})(["display:flex;flex-direction:column;margin:0 20px 20px;@media screen and (max-width:1100px){flex-direction:row;}"]),x=o.a.button.withConfig({displayName:"Main__SliderButton",componentId:"s50pyn-8"})(["height:40px;width:40px;border-radius:50%;background:transparent;border:1px solid white;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-top:12px;img{margin:0;}"]),y=o.a.button.withConfig({displayName:"Main__MoreBtn",componentId:"s50pyn-9"})(["height:35px;width:35px;border-radius:50%;border:none;display:flex;justify-content:center;align-items:center;cursor:pointer;"]),b=o.a.div.withConfig({displayName:"Main__MoreWrapper",componentId:"s50pyn-10"})(["display:flex;align-items:center;> *{margin-right:20px;}"]);function v(){return i.a.createElement(r.a,null,i.a.createElement(c,null))}},jw5u:function(e,a,n){"use strict";var t=n("q1tI"),i=n.n(t),r=n("vOnD"),o=n("Wbzz"),l=function(){var e=Object(t.useState)(!1),a=e[0],n=e[1];return i.a.createElement("div",null,i.a.createElement(s,{onClick:function(){return n(!a)}},i.a.createElement(c,{isOpen:a}),i.a.createElement(m,{isOpen:a})),i.a.createElement(p,{isOpen:a},i.a.createElement(o.Link,{to:"/padawans/bootcamp"},i.a.createElement(d,null,"Bootcamp")),i.a.createElement(o.Link,{to:"/padawans/about-us"},i.a.createElement(d,null,"Nosotros")),i.a.createElement(o.Link,{to:"/padawans/programming-club"},i.a.createElement(d,null,"Club de programación")),i.a.createElement(o.Link,{to:"/padawans/backend-program"},i.a.createElement(d,null,"Programas")),i.a.createElement(o.Link,{to:"/padawans/contact"},i.a.createElement(d,null,"Contacto"))))},s=r.a.div.withConfig({displayName:"Navbar__HamburgerMenu",componentId:"sc-1mw1068-0"})(["position:absolute;top:75px;right:40px;z-index:3;> div{margin-bottom:10px;}cursor:pointer;"]),c=r.a.div.withConfig({displayName:"Navbar__Line",componentId:"sc-1mw1068-1"})(["width:30px;height:2px;background:#fff;transition:transform 0.3s ease-in-out;",";"],(function(e){return e.isOpen&&"transform: translateY(6px) rotate(45deg)"})),m=Object(r.a)(c).withConfig({displayName:"Navbar__LineTwo",componentId:"sc-1mw1068-2"})(["",";"],(function(e){return e.isOpen&&"transform: translateY(-6px) rotate(-45deg)"})),p=r.a.div.withConfig({displayName:"Navbar__Menu",componentId:"sc-1mw1068-3"})(["background:var(--main-black);position:fixed;height:100vh;width:100vw;z-index:2;transition:clip-path 0.5s ease-out;clip-path:circle( "," at calc(100% - 70px) 80px );color:white;display:flex;flex-direction:column;align-items:center;justify-content:center;"],(function(e){return e.isOpen?"120vmax":"0"})),d=r.a.p.withConfig({displayName:"Navbar__MenuItem",componentId:"sc-1mw1068-4"})(["font-family:Roboto;font-weight:bold;font-size:91px;line-height:107px;color:#ffffff;@media screen and (max-width:920px){font-size:72px;}@media screen and (max-width:768px){font-size:22px;}"]);a.a=function(e){var a=e.children;return i.a.createElement("div",null,i.a.createElement(l,null),a)}}}]);
//# sourceMappingURL=component---src-pages-padawans-index-js-36de88eaf0209b3fd480.js.map