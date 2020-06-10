(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"26Ng":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),i=t.n(n),r=t("vOnD"),o=function(e){var a=e.image,t=e.text,n=e.btnText;return i.a.createElement(l,null,i.a.createElement(c,{src:a}),i.a.createElement(m,null,t),i.a.createElement(s,null,i.a.createElement("p",null,n),i.a.createElement("button",null,"v")))},l=r.a.section.withConfig({displayName:"Hero__HeroWrapper",componentId:"sc-1d51hry-0"})(['position:relative;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;grid-template-areas:"main";height:100vh;color:#ffffff;']),c=r.a.img.withConfig({displayName:"Hero__Image",componentId:"sc-1d51hry-1"})(["object-fit:cover;grid-area:main;height:100%;width:100%;"]),m=r.a.p.withConfig({displayName:"Hero__MainText",componentId:"sc-1d51hry-2"})(["grid-area:main;align-self:end;max-width:550px;position:relative;bottom:30px;justify-self:center;"]),s=r.a.div.withConfig({displayName:"Hero__ContactButtonWrapper",componentId:"sc-1d51hry-3"})(["position:absolute;bottom:30px;right:20px;display:flex;align-items:center;button{width:65px;height:65px;margin-left:30px;border-radius:50%;background:#ffffff;border:none;}@media screen and (max-width:970px){display:none;}"])},"9KWx":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),i=t.n(n),r=t("vOnD"),o=function(e){var a=e.content,t=a.text,n=a.images;return i.a.createElement(c,null,i.a.createElement(m,null,t),i.a.createElement(l,null,function(e){return e.map((function(e,a){var t=e.src,n=e.title,r=e.subtitle;return i.a.createElement("div",{key:a},i.a.createElement("img",{style:{objectFit:"contain",width:"100%",height:500,display:"block"},src:t,alt:"Image of "+n}),i.a.createElement("div",null,i.a.createElement("p",null,n),i.a.createElement("p",null,r)))}))}(n)))},l=r.a.div.withConfig({displayName:"WideGallery__Grid",componentId:"rmfb8m-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:20px;justify-items:center;"]),c=(r.a.div.withConfig({displayName:"WideGallery__ImagePlaceHolder",componentId:"rmfb8m-1"})(["width:100%;height:496.81px;background:#c4c4c4;"]),r.a.section.withConfig({displayName:"WideGallery__WideGalleryWrapper",componentId:"rmfb8m-2"})(["color:#fff;"])),m=r.a.p.withConfig({displayName:"WideGallery__Title",componentId:"rmfb8m-3"})(["font-size:27px;line-height:32px;text-align:center;letter-spacing:0.04em;max-width:min(1090px,calc(100vw - 24vmin));margin:0 auto 10px;"])},KXL5:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),i=t.n(n),r=t("vOnD"),o=function(e){var a=e.content,t=a.text,n=a.images;return i.a.createElement(l,null,i.a.createElement(c,null,t),i.a.createElement(m,null,function(e){return e.map((function(e,a){e.src;return i.a.createElement(s,{key:a})}))}(n)))},l=r.a.section.withConfig({displayName:"SquareGallery__SquareGalleryWrapper",componentId:"fpa3zd-0"})(["max-width:var(--max-width);margin:0 auto;"]),c=r.a.p.withConfig({displayName:"SquareGallery__Title",componentId:"fpa3zd-1"})(["font-size:28px;line-height:33px;letter-spacing:0.01em;color:#ffffff;"]),m=r.a.div.withConfig({displayName:"SquareGallery__Grid",componentId:"fpa3zd-2"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));grid-gap:20px;justify-items:center;"]),s=r.a.div.withConfig({displayName:"SquareGallery__PlaceholderImage",componentId:"fpa3zd-3"})(["width:220px;height:220px;background:#c4c4c4;"])},O8FS:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),i=t.n(n),r=t("vOnD"),o=t("Wbzz"),l=function(e){var a=e.content,t={color:"white"},n={textDecoration:"underline"};return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,null,i.a.createElement(m,null,"Programas"),i.a.createElement(s,null,i.a.createElement(o.Link,{style:t,activeStyle:n,to:"/padawans/backend-program"},"Backend"),i.a.createElement(o.Link,{style:t,activeStyle:n,to:"/padawans/front-program"},"Frontend"),i.a.createElement(o.Link,{style:t,activeStyle:n,to:"/padawans/mobile-program"},"Móvil"),i.a.createElement(o.Link,{style:t,activeStyle:n,to:"/padawans/chatbot-program"},"Chatbot"))),a.map((function(e,a){var t=e.title,n=e.subtitle,r=e.texts,o=e.lists;return i.a.createElement(d,{key:a},i.a.createElement(p,null,t),i.a.createElement("div",null,i.a.createElement(u,null,n),function(e){return e.map((function(e,a){return i.a.createElement(f,{key:a},e)}))}(r),i.a.createElement(h,null,function(e){return e?e.map((function(e,a){var t=e.title,n=e.items;return i.a.createElement("div",{key:a},i.a.createElement(g,null,t),i.a.createElement(x,null,n.map((function(e,a){return i.a.createElement("li",{style:{marginTop:15},key:a},"- ",e)}))))})):null}(o))))})))},c=r.a.div.withConfig({displayName:"Content__Programs",componentId:"sc-1lstdum-0"})(["display:flex;max-width:var(--max-width);margin:24px auto 24px;font-size:24px;"]),m=r.a.p.withConfig({displayName:"Content__ProgramsTitle",componentId:"sc-1lstdum-1"})(["color:#909090;"]),s=r.a.div.withConfig({displayName:"Content__LinksWrapper",componentId:"sc-1lstdum-2"})(["margin-left:30px;> *{margin:0 15px;}"]),d=r.a.section.withConfig({displayName:"Content__Grid",componentId:"sc-1lstdum-3"})(["max-width:var(--max-width);display:grid;grid-template-columns:90px 1fr;grid-column-gap:24px;margin:0 auto 24px;color:#fff;"]),p=r.a.p.withConfig({displayName:"Content__Title",componentId:"sc-1lstdum-4"})(["font-size:12px;line-height:14px;letter-spacing:0.04em;color:#909090;"]),u=r.a.p.withConfig({displayName:"Content__Subtitle",componentId:"sc-1lstdum-5"})(["font-size:27px;line-height:32px;letter-spacing:0.04em;margin-bottom:24px;"]),f=r.a.p.withConfig({displayName:"Content__Text",componentId:"sc-1lstdum-6"})(["font-size:13px;line-height:27px;letter-spacing:0.04em;color:#c7c7c7;max-width:720px;"]),g=r.a.p.withConfig({displayName:"Content__ListTitle",componentId:"sc-1lstdum-7"})(["font-weight:bold;font-size:18px;line-height:204.19%;letter-spacing:0.015em;"]),h=r.a.div.withConfig({displayName:"Content__ListContainer",componentId:"sc-1lstdum-8"})(["display:flex;justify-content:space-between;flex-wrap:wrap;width:50%;"]),x=r.a.ul.withConfig({displayName:"Content__List",componentId:"sc-1lstdum-9"})(["max-width:200px;"])},"So+h":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),i=t.n(n),r=t("vOnD"),o=function(){return i.a.createElement(l,null,i.a.createElement(c,null,i.a.createElement(m,null,i.a.createElement(s,null,i.a.createElement(d,null,"Tu camino inicia en el club de programación donde tendrás que resolver minimo 5 ejercicos y donde conoceras a tus futuros compañeros de generación"),i.a.createElement(p,{src:"/pointer.png"})),i.a.createElement(s,null,i.a.createElement(d,null,"Una vez ternimano el club podrás agendar una entrevista con el equipo de Hackademy para conocernos mejor.Durante la entrevista podrás seleccionar a qué programa quieres aplicar"),i.a.createElement(p,{src:"/pointer.png"})),i.a.createElement(s,null,i.a.createElement(d,null,"Si pasas con exito el club y la entrevista ¡Bienvenido! Se te enviará una carta compromiso a tu correo personal para despues asignarte tu correo @hackademy.mx"),i.a.createElement(p,{src:"/pointer.png"})),i.a.createElement(s,null,i.a.createElement(d,null,"Empiezan 16 semanas super emocionantes donde deberas, junto con tu equipo, desarrollar la versión 1 del proyecto asignado... Todo esto con el apoyo de nuestros Masters"),i.a.createElement(p,{src:"/pointer.png"})),i.a.createElement(s,null,i.a.createElement(d,null,"Al cierre de la generación tendrás una agenda de entrevistas con empresas que buscan contratar al mejor talento... Nosotros te acompañaremos en todo momento para que sea la mejor experiencia"),i.a.createElement(p,{src:"/pointer.png"})))),i.a.createElement(u,{src:"/padawan-roadmap.png"}))},l=r.a.section.withConfig({displayName:"PadawanRoadMap__PadawanRoadMapWrapper",componentId:"vdy9dr-0"})(["@media screen and (max-width:800px){display:none;}"]),c=r.a.div.withConfig({displayName:"PadawanRoadMap__PadawanRoadMapTextWrapper",componentId:"vdy9dr-1"})(["padding:0 30px;"]),m=r.a.div.withConfig({displayName:"PadawanRoadMap__Grid",componentId:"vdy9dr-2"})(["display:grid;grid-template-columns:repeat(5,205px);justify-content:space-between;@media screen and (max-width:1205px){grid-template-columns:repeat(5,125px);}"]),s=r.a.div.withConfig({displayName:"PadawanRoadMap__TextContainer",componentId:"vdy9dr-3"})(["position:relative;:nth-child(1){top:20px;}:nth-child(2){top:5vmax;left:-3vmax;}:nth-child(3){top:3vmax;}:nth-child(4){top:10vmax;left:-4vmax;}:nth-child(5){top:25vmax;}"]),d=r.a.p.withConfig({displayName:"PadawanRoadMap__Text",componentId:"vdy9dr-4"})(["font-family:Roboto;font-size:16px;line-height:19px;letter-spacing:0.01em;color:#ffffff;margin-bottom:10px;@media screen and (max-width:1205px){font-size:14px;}"]),p=r.a.img.withConfig({displayName:"PadawanRoadMap__Pointer",componentId:"vdy9dr-5"})(["display:block;margin:0 auto;"]),u=r.a.img.withConfig({displayName:"PadawanRoadMap__PadawanRoadMapImage",componentId:"vdy9dr-6"})(["position:relative;z-index:2;margin-top:-6vmin;width:100%;"])},jw5u:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),r=t("vOnD"),o=t("Wbzz"),l=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return i.a.createElement("div",null,i.a.createElement(c,{onClick:function(){return t(!a)}},i.a.createElement(m,{isOpen:a}),i.a.createElement(s,{isOpen:a})),i.a.createElement(d,{isOpen:a},i.a.createElement(o.Link,{to:"/padawans/bootcamp"},i.a.createElement(p,null,"Bootcamp")),i.a.createElement(o.Link,{to:"/padawans/about-us"},i.a.createElement(p,null,"Nosotros")),i.a.createElement(o.Link,{to:"/padawans/programming-club"},i.a.createElement(p,null,"Club de programación")),i.a.createElement(o.Link,{to:"/padawans/backend-program"},i.a.createElement(p,null,"Programas")),i.a.createElement(o.Link,{to:"/padawans/contact"},i.a.createElement(p,null,"Contacto"))))},c=r.a.div.withConfig({displayName:"Navbar__HamburgerMenu",componentId:"sc-1mw1068-0"})(["position:absolute;top:75px;right:40px;z-index:3;> div{margin-bottom:10px;}cursor:pointer;"]),m=r.a.div.withConfig({displayName:"Navbar__Line",componentId:"sc-1mw1068-1"})(["width:30px;height:2px;background:#fff;transition:transform 0.3s ease-in-out;",";"],(function(e){return e.isOpen&&"transform: translateY(6px) rotate(45deg)"})),s=Object(r.a)(m).withConfig({displayName:"Navbar__LineTwo",componentId:"sc-1mw1068-2"})(["",";"],(function(e){return e.isOpen&&"transform: translateY(-6px) rotate(-45deg)"})),d=r.a.div.withConfig({displayName:"Navbar__Menu",componentId:"sc-1mw1068-3"})(["background:var(--main-black);position:fixed;height:100vh;width:100vw;z-index:2;transition:clip-path 0.5s ease-out;clip-path:circle( "," at calc(100% - 70px) 80px );color:white;display:flex;flex-direction:column;align-items:center;justify-content:center;"],(function(e){return e.isOpen?"120vmax":"0"})),p=r.a.p.withConfig({displayName:"Navbar__MenuItem",componentId:"sc-1mw1068-4"})(["font-family:Roboto;font-weight:bold;font-size:91px;line-height:107px;color:#ffffff;@media screen and (max-width:920px){font-size:72px;}@media screen and (max-width:768px){font-size:22px;}"]);a.a=function(e){var a=e.children;return i.a.createElement("div",null,i.a.createElement(l,null),a)}},sid7:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),i=t.n(n),r=t("vOnD"),o=t("26Ng"),l=t("O8FS"),c=[{title:"CHATBOT",subtitle:"En este programa trabajamos el desarrollo de chatbot conversacionales usanod diferentes herramientas",texts:["Al entrar a este programa formarás parte de un equipo en el cual tendrás el rol de desarrollar un chatbot que pueda consumir API’s y birndar servicios automatizados."]},{title:"INDUSTRIA",subtitle:"En los últimos años ha crecido la demanda del desarrollo de chatbot por ser una herramienta versatil.",texts:["Dentro de la industria de software hemos visto como cerce la demanda por talento con los conocimientos y experiencia suficiente en el desarrollo de chatbot y en el uso de las herramientas que nos permiten desarrollar plataformas robustas y seguras."],lists:[{title:"HERRAMIENTAS",items:["GIT / GitHub","AWS","Integración continua","NodeJS","Django","Dialogflow","PostgresQL"]},{title:"LENGUAJES",items:["Python","JavaScript"]}]}],m={text:"Nuestros Masters",images:[{src:"/max.png",title:"Max Rodríguez",subtitle:"CTO"},{src:"/oscar.png",title:"Oscar Oceguera",subtitle:"ReactJS"},{src:"/magaly.png",title:"Magaly Peña",subtitle:"Administración de proyectos"},{src:"/fer.png",title:"Fer Ochoa",subtitle:"Chatbot"}]},s=(t("KXL5"),t("jw5u")),d=t("So+h"),p=t("9KWx");var u=r.a.section.withConfig({displayName:"chatbot-program__ChatbotProgramWrapper",componentId:"sc-113kik4-0"})(["background:var(--main-black);"]);a.default=function(){return i.a.createElement(s.a,null,i.a.createElement(u,null,i.a.createElement(o.a,{image:"/chatbot-header.png",text:"El desarrollo de software no es un tema de memoria es un tema de habilidad y talento resolver problemas.",btnText:"CHATBOT"}),i.a.createElement(l.a,{content:c}),i.a.createElement(p.a,{content:m}),i.a.createElement(d.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-padawans-chatbot-program-js-03224e243b579417d8d1.js.map