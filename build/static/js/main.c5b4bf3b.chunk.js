(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(17),i=c.n(n),o=c(2),r=c(0);var b=function(){return Object(r.jsx)("div",{className:"navbarLeft",children:Object(r.jsx)(o.b,{to:"/",children:Object(r.jsx)("i",{className:"bx bxs-cube-alt bx-md logoIcon"})})})},l=Object(s.createContext)();var j=function(){var e=Object(s.useContext)(l),t=e.homeNavBar,c=e.setHomeNavBar,a=e.projectsNavBar,n=e.setProjectsNavBar,i=e.gamesNavBar,b=e.setGamesNavBar,j=e.contactNavBar,x=e.setContactNavBar,m=e.aboutNavBar,u=e.setAboutNavBar,O=function(e){switch(e.target.title){case"Home":c(!0),b(!1),n(!1),x(!1),u(!1);break;case"Projects":c(!1),n(!0),b(!1),x(!1),u(!1);break;case"Games":c(!1),n(!1),b(!0),n(!1),x(!1),u(!1);break;case"Contact":c(!1),b(!1),n(!1),x(!0),u(!1);break;case"About":c(!1),b(!1),n(!1),x(!1),u(!0)}};return Object(r.jsxs)("ul",{className:"navbarRight",children:[Object(r.jsx)("li",{onClick:function(e){return O(e)},className:"navItem",title:"Home",children:Object(r.jsx)(o.b,{to:"/",title:"Home",children:t?Object(r.jsx)("i",{className:"bx bxs-home bx-sm iconStyle"}):Object(r.jsx)("i",{className:"bx bx-home bx-sm iconStyle",title:"Home"})})}),Object(r.jsx)("li",{onClick:function(e){return O(e)},className:"navItem",title:"Projects",children:Object(r.jsx)(o.b,{to:"/projects",title:"Projects",children:a?Object(r.jsx)("i",{className:"bx bxs-folder bx-sm iconStyle"}):Object(r.jsx)("i",{className:"bx bx-folder bx-sm iconStyle",title:"Projects"})})}),Object(r.jsx)("li",{onClick:function(e){return O(e)},className:"navItem",title:"Games",children:Object(r.jsx)(o.b,{to:"/games",title:"Games",children:i?Object(r.jsx)("i",{className:"bx bxs-joystick-button bx-sm iconStyle"}):Object(r.jsx)("i",{className:"bx bx-joystick-button bx-sm iconStyle",title:"Games"})})}),Object(r.jsx)("li",{onClick:function(e){return O(e)},className:"navItem",title:"Contact",children:Object(r.jsx)(o.b,{to:"/contact",title:"Contact",children:j?Object(r.jsx)("i",{className:"bx bxs-paper-plane bx-sm iconStyle"}):Object(r.jsx)("i",{className:"bx bx-paper-plane bx-sm iconStyle",title:"Contact"})})}),Object(r.jsx)("li",{onClick:function(e){return O(e)},className:"navItem",title:"About",children:Object(r.jsx)(o.b,{to:"/about",title:"About",children:m?Object(r.jsx)("i",{className:"bx bxs-user bx-sm iconStyle"}):Object(r.jsx)("i",{className:"bx bx-user bx-sm iconStyle",title:"About"})})})]})};var x=function(){return Object(r.jsxs)("nav",{className:"navBar",children:[Object(r.jsx)(b,{}),Object(r.jsx)(j,{})]})};var m=function(){var e=Object(s.useContext)(l),t=e.homeActive,c=e.setHomeActive,a=e.exploreActive,n=e.setExploreActive,i=e.aboutActive,b=e.setAboutActive,j=e.setHomeNavBar,x=e.setProjectsNavBar,m=e.setGamesNavBar,u=e.setContactNavBar,O=e.setAboutNavBar,d=function(e){var t=e.target.title;"Home"===t&&(c("active"),n(""),b(""),j(!0),x(!1),m(!1),u(!1),O(!1)),"Explore"===t&&(n("active"),c(""),b(""),j(!1),x(!1),m(!1),u(!1),O(!1)),"About"===t&&(b("active"),n(""),c(""),j(!1),x(!1),m(!1),u(!1),O(!0))};return Object(r.jsxs)("ul",{className:"FooterItens",children:[Object(r.jsx)("li",{className:"navItem",title:"Home",onClick:function(e){return d(e)},children:Object(r.jsxs)(o.b,{to:"/",className:"navItemTag ".concat(t),title:"Home",children:[t?Object(r.jsx)("i",{className:"bx bxs-home bx-sm"}):Object(r.jsx)("i",{className:"bx bx-home bx-sm",title:"Home"}),Object(r.jsx)("p",{className:"textLink",title:"Home",children:"Home"})]})}),Object(r.jsx)("li",{className:"navItem",title:"Explore",onClick:function(e){return d(e)},children:Object(r.jsxs)(o.b,{to:"/explore",className:"navItemTag ".concat(a),title:"Explore",children:[a?Object(r.jsx)("i",{className:"bx bxs-compass bx-sm"}):Object(r.jsx)("i",{className:"bx bx-compass bx-sm",title:"Explore"}),Object(r.jsx)("p",{className:"textLink",title:"Explore",children:"Explore"})]})}),Object(r.jsx)("li",{className:"navItem",title:"About",onClick:function(e){return d(e)},children:Object(r.jsxs)(o.b,{to:"/about",className:"navItemTag ".concat(i),title:"About",children:[i?Object(r.jsx)("i",{className:"bx bxs-user bx-sm"}):Object(r.jsx)("i",{className:"bx bx-user bx-sm",title:"About"}),Object(r.jsx)("p",{className:"textLink",title:"About",children:"About"})]})})]})};var u=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(m,{})})},O=c(10),d=c(3);c(29);var h=function(e){var t=e.location.pathname,c=Object(s.useContext)(l),a=c.setHomeActive,n=c.setAboutActive,i=c.setExploreActive,b=c.setHomeNavBar;return Object(s.useEffect)((function(){t&&(a("active"),i(""),n(""),b(!0))}),[t,a,b]),Object(r.jsxs)("div",{className:"body",children:[Object(r.jsxs)("div",{className:"subBody",children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"intro",children:[Object(r.jsx)("i",{className:"bx bxs-info-square bx-lg infoIcon"}),Object(r.jsx)("h1",{className:"",children:"I'm Julio Cesar"})]}),Object(r.jsxs)("div",{className:"subTitle",children:[Object(r.jsx)("h4",{children:"Currently studying Software Development"}),Object(r.jsx)("h4",{children:"at Trybe"})]})]}),Object(r.jsx)("img",{src:"https://picsum.photos/536/354",alt:"randow",className:"randowImage",title:"Don't like it? Try reloading the page ;)"})]}),Object(r.jsx)(o.b,{to:"/explore",className:"Link",onClick:function(){return a("")},children:Object(r.jsxs)("button",{type:"button",className:"startButton",children:[Object(r.jsx)("i",{className:"bx bxs-right-arrow bx-sm"}),Object(r.jsx)("p",{children:"Get start"})]})})]})};var v=function(e){var t=e.location.pathname,c=Object(s.useContext)(l),a=c.setGamesNavBar,n=c.setHomeActive,i=c.setExploreActive,o=c.setAboutActive;return Object(s.useEffect)((function(){t&&(a(!0),n(""),i(""),o(""))}),[t,a,n,i,o]),Object(r.jsx)("div",{children:"oi Sou a Games"})};c(30);var N=function(e){var t=e.location.pathname,c=Object(s.useContext)(l),a=c.setContactNavBar,n=c.setAboutNavBar,i=c.setHomeActive,o=c.setExploreActive,b=c.setAboutActive;return Object(s.useEffect)((function(){t&&(a(!0),n(!1),i(""),o(""),b(""))}),[t,a,n,i,o,b]),Object(r.jsxs)("div",{className:"contact-body body",children:[Object(r.jsxs)("div",{className:"contactIntrodution",children:[Object(r.jsx)("h1",{className:"title",children:"Are you interested or want to get in touch?"}),Object(r.jsx)("h2",{className:"subTitle",children:"Feel free to access my networks and I will reply as soon as possible."})]}),Object(r.jsxs)("div",{className:"contactIntrodution",children:[Object(r.jsx)("h3",{className:"networkTitle",children:"Networks:"}),Object(r.jsxs)("div",{className:"parhList",children:[Object(r.jsxs)("a",{href:"https://www.linkedin.com/in/julio-cesar-monteiro-alves/?locale=en_US",className:"networks logoIcon",children:[Object(r.jsx)("i",{className:"bx bxl-linkedin-square bx-md"}),Object(r.jsx)("p",{className:"net-name",children:" Linkedin "})]}),Object(r.jsxs)("a",{href:"https://github.com/JulioCesar1402",className:"networks logoIcon",children:[Object(r.jsx)("i",{className:"bx bxl-github bx-md"}),Object(r.jsx)("p",{className:"net-name",children:" GitHub "})]}),Object(r.jsxs)("a",{href:"https://wa.me/qr/LIZRD5VU23K2M1",className:"networks logoIcon",children:[Object(r.jsx)("i",{className:"bx bxl-whatsapp bx-md"}),Object(r.jsx)("p",{className:"net-name",children:" WhatsApp "})]})]})]})]})},p=(c(31),c.p+"static/media/thumb.e497058e.png"),f=c.p+"static/media/photo.c4059f74.jpeg";var A=function(e){var t=e.location.pathname,c=Object(s.useContext)(l),a=c.setAboutActive,n=c.setHomeActive,i=c.setExploreActive,b=c.setAboutNavBar,j=c.setContactNavBar,x=c.setHomeNavBar;return Object(s.useEffect)((function(){t&&(a("active"),n(""),i(""),b(!0),x(!1))}),[t,a,b,x,i,n]),Object(r.jsxs)("div",{className:"headerAbout",children:[Object(r.jsxs)("div",{className:"bodyAbout",children:[Object(r.jsx)("img",{src:p,alt:"randow",className:"imageThumb"}),Object(r.jsx)("img",{src:f,alt:"randow",className:"MyIcon"})]}),Object(r.jsxs)("div",{className:"about",children:[Object(r.jsx)("h3",{children:"Julio Cesar"}),Object(r.jsx)("p",{className:"subtitle-about",children:"Web Developer"}),Object(r.jsx)("div",{className:"summary",children:Object(r.jsx)("p",{children:"Currently studying Software Development at Trybe, a school that teaches how to program, learn and work, seeking to spread my passion for technology around the world, in order to always seek to learn more and more."})})]}),Object(r.jsxs)("div",{className:"knowledge-contact",children:[Object(r.jsxs)("div",{className:"knowledge",children:[Object(r.jsx)("i",{className:"bx bxl-javascript bx-md icon"}),Object(r.jsx)("i",{className:"bx bxl-html5 bx-md icon"}),Object(r.jsx)("i",{className:"bx bxl-css3 bx-md icon"}),Object(r.jsx)("i",{className:"bx bxl-react bx-md icon"}),Object(r.jsx)("i",{className:"bx bxl-redux bx-md icon"}),Object(r.jsx)("i",{className:"bx bxl-git bx-md icon"})]}),Object(r.jsx)(o.b,{to:"/contact",children:Object(r.jsx)("button",{type:"button",className:"contact-about",onClick:function(){return j("")},children:"Contact"})})]})]})};c(32);var k=function(e){var t=e.location.pathname,c=Object(s.useContext)(l),a=c.setProjectsNavBar,n=c.setHomeActive,i=c.setExploreActive,o=c.setAboutActive;return Object(s.useEffect)((function(){t&&(a(!0),n(""),i(""),o(""))}),[t,a,n,i,o]),Object(r.jsx)("div",{children:"oi Sou a Projects"})};var g=function(e){var t=e.location.pathname,c=Object(s.useContext)(l),a=c.setExploreActive,n=c.setAboutActive,i=c.setHomeActive;return Object(s.useEffect)((function(){t&&(a("active"),n(""),i(""))}),[t,a,n,i]),Object(r.jsxs)("div",{className:"explore-body",children:[Object(r.jsx)("div",{className:"explore-option",children:Object(r.jsxs)(o.b,{to:"/projects",className:"Link",children:[Object(r.jsx)("div",{className:"explore-name",children:Object(r.jsx)("i",{className:"bx bx-folder bx-lg"})}),Object(r.jsx)("p",{children:"Projects"})]})}),Object(r.jsx)("div",{className:"explore-option",children:Object(r.jsxs)(o.b,{to:"/games",className:"Link",children:[Object(r.jsx)("div",{className:"explore-name",children:Object(r.jsx)("i",{className:"bx bx-joystick-button bx-lg"})}),Object(r.jsx)("p",{children:"Games"})]})}),Object(r.jsx)("div",{className:"explore-option",children:Object(r.jsxs)(o.b,{to:"/contact",className:"Link",children:[Object(r.jsx)("div",{className:"explore-name",children:Object(r.jsx)("i",{className:"bx bx-paper-plane bx-lg"})}),Object(r.jsx)("p",{children:"Contact"})]})})]})},y=function(){return Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",render:function(e){return Object(r.jsx)(h,Object(O.a)({},e))}}),Object(r.jsx)(d.a,{exact:!0,path:"/projects",render:function(e){return Object(r.jsx)(k,Object(O.a)({},e))}}),Object(r.jsx)(d.a,{exact:!0,path:"/games",render:function(e){return Object(r.jsx)(v,Object(O.a)({},e))}}),Object(r.jsx)(d.a,{exact:!0,path:"/contact",render:function(e){return Object(r.jsx)(N,Object(O.a)({},e))}}),Object(r.jsx)(d.a,{exact:!0,path:"/about",render:function(e){return Object(r.jsx)(A,Object(O.a)({},e))}}),Object(r.jsx)(d.a,{exact:!0,path:"/explore",render:function(e){return Object(r.jsx)(g,Object(O.a)({},e))}})]})},B=(c(33),c(8)),C=function(e){var t=e.children,c=Object(s.useState)(""),a=Object(B.a)(c,2),n=a[0],i=a[1],o=Object(s.useState)(""),b=Object(B.a)(o,2),j=b[0],x=b[1],m=Object(s.useState)(""),u=Object(B.a)(m,2),O=u[0],d=u[1],h=Object(s.useState)(!1),v=Object(B.a)(h,2),N=v[0],p=v[1],f=Object(s.useState)(!1),A=Object(B.a)(f,2),k=A[0],g=A[1],y=Object(s.useState)(!1),C=Object(B.a)(y,2),w=C[0],I=C[1],H=Object(s.useState)(!1),S=Object(B.a)(H,2),E=S[0],G=S[1],L=Object(s.useState)(!1),P=Object(B.a)(L,2),T={homeActive:n,setHomeActive:i,exploreActive:j,setExploreActive:x,aboutActive:O,setAboutActive:d,homeNavBar:N,setHomeNavBar:p,projectsNavBar:k,setProjectsNavBar:g,gamesNavBar:w,setGamesNavBar:I,contactNavBar:E,setContactNavBar:G,aboutNavBar:P[0],setAboutNavBar:P[1]};return Object(r.jsx)(l.Provider,{value:T,children:t})};var w=function(){return Object(r.jsx)(C,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("link",{href:"https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css",rel:"stylesheet"}),Object(r.jsx)(x,{}),Object(r.jsx)(y,{}),Object(r.jsx)(u,{})]})})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(o.a,{children:Object(r.jsx)(w,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c5b4bf3b.chunk.js.map