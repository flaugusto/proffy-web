(this["webpackJsonpproffy-web"]=this["webpackJsonpproffy-web"]||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/logo.1f9a96a1.svg"},29:function(e,a,t){e.exports=t.p+"static/media/landing.c86272eb.svg"},30:function(e,a,t){e.exports=t.p+"static/media/study.3c22fb01.svg"},31:function(e,a,t){e.exports=t.p+"static/media/give-classes.9ed76be5.svg"},32:function(e,a,t){e.exports=t.p+"static/media/purple-heart.e042bb23.svg"},34:function(e,a,t){e.exports=t.p+"static/media/back.1fbb1f8b.svg"},35:function(e,a,t){e.exports=t.p+"static/media/whatsapp.c2ffa8a6.svg"},37:function(e,a,t){e.exports=t.p+"static/media/warning.744fb7ba.svg"},39:function(e,a,t){e.exports=t(75)},61:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(27),r=t.n(c),o=t(6),i=t(1),s=t(2),u=t(28),m=t.n(u).a.create({baseURL:"http://192.168.0.109:3333"}),b=t(11),f=t.n(b),v=t(29),d=t.n(v),p=t(30),E=t.n(p),g=t(31),h=t.n(g),j=t(32),O=t.n(j);t(61);var y=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){m.get("connections").then((function(e){var a=e.data.total;c(a)}))}),[]),l.a.createElement("div",{id:"page-landing"},l.a.createElement("div",{id:"page-landing-content",className:"container"},l.a.createElement("div",{className:"logo-container"},l.a.createElement("img",{src:f.a,alt:"Proffy"}),l.a.createElement("h2",null,"Sua plataforma de estudos online.")),l.a.createElement("img",{src:d.a,alt:"Plataforma de Estudos",className:"hero-image"}),l.a.createElement("div",{className:"buttons-container"},l.a.createElement(o.b,{to:"/study",className:"study"},l.a.createElement("img",{src:E.a,alt:"Estudar"}),"Estudar"),l.a.createElement(o.b,{to:"/give-classes",className:"give-classes"},l.a.createElement("img",{src:h.a,alt:"Estudar"}),"Dar aulas")),l.a.createElement("span",{className:"total-connections"},"Total de ",t," conex\xf5es j\xe1 realizadas. ",l.a.createElement("img",{src:O.a,alt:""}))))},S=(t(67),t(34)),C=t.n(S),k=function(e){return l.a.createElement("header",{className:"page-header"},l.a.createElement("div",{className:"top-bar-container"},l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{src:C.a,alt:"Voltar"})),l.a.createElement("img",{src:f.a,alt:"Proffy"})),l.a.createElement("div",{className:"header-content"},l.a.createElement("strong",null,e.title),e.description&&l.a.createElement("p",null,e.description),e.children))},N=t(35),w=t.n(N),x=(t(68),function(e){var a=e.teacher;return l.a.createElement("article",{className:"teacher-item"},l.a.createElement("header",null,l.a.createElement("img",{src:a.avatar,alt:a.name}),l.a.createElement("div",null,l.a.createElement("strong",null,a.name),l.a.createElement("span",null,a.subject))),l.a.createElement("p",null,a.bio),l.a.createElement("footer",null,l.a.createElement("p",null,"Pre\xe7o/hora",l.a.createElement("strong",null,"R$",a.cost)),l.a.createElement("a",{target:"blank",onClick:function(){m.post("connections",{user_id:a.id})},href:"https://wa.me/".concat(a.whatsapp)},l.a.createElement("img",{src:w.a,alt:"Whatsapp"}),"Entrar em contato")))}),_=t(7),A=(t(69),function(e){var a=e.label,t=e.name,n=Object(_.a)(e,["label","name"]);return l.a.createElement("div",{className:"input-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("input",Object.assign({type:"text",id:t},n)))}),D=(t(70),function(e){var a=e.label,t=e.name,n=e.options,c=Object(_.a)(e,["label","name","options"]);return l.a.createElement("div",{className:"select-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("select",Object.assign({value:"",id:t},c),l.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Selecione uma op\xe7\xe3o"),n.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value,label:e.label})}))))});t(71);var F=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),i=o[0],u=o[1],b=Object(n.useState)(""),f=Object(s.a)(b,2),v=f[0],d=f[1],p=Object(n.useState)(""),E=Object(s.a)(p,2),g=E[0],h=E[1];return l.a.createElement("div",{id:"page-teacher-list",className:"container"},l.a.createElement(k,{title:"Estes s\xe3o os proffys dispon\xedveis."},l.a.createElement("form",{id:"search-teachers",onSubmit:function(e){e.preventDefault(),m.get("classes",{params:{subject:i,week_day:v,time:g}}).then((function(e){c(e.data)})).catch((function(e){400===e.response.status&&alert("Faltam filtros. Por favor preencha todos.")}))}},l.a.createElement(D,{name:"subject",label:"Mat\xe9ria",value:i,onChange:function(e){u(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ci\xeancias",label:"Ci\xeancias"},{value:"F\xedsica",label:"F\xedsica"},{value:"Geografia",label:"Geografia"},{value:"Matem\xe1tica",label:"Matem\xe1tica"}]}),l.a.createElement(D,{name:"week_day",label:"Dia da semana",value:v,onChange:function(e){d(e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),l.a.createElement(A,{type:"time",name:"time",label:"Hora",value:g,onChange:function(e){h(e.target.value)}}),l.a.createElement("button",{type:"submit"},"Buscar"))),l.a.createElement("main",null,t.map((function(e){return l.a.createElement(x,{key:e.id,teacher:e})}))))},B=t(12),M=t(36),P=t(38),Q=(t(72),function(e){var a=e.label,t=e.name,n=Object(_.a)(e,["label","name"]);return l.a.createElement("div",{className:"textarea-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("textarea",Object.assign({id:t},n)))}),G=(t(73),t(37)),T=t.n(G);var q=function(){var e=Object(i.e)(),a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),b=u[0],f=u[1],v=Object(n.useState)(""),d=Object(s.a)(v,2),p=d[0],E=d[1],g=Object(n.useState)(""),h=Object(s.a)(g,2),j=h[0],O=h[1],y=Object(n.useState)(""),S=Object(s.a)(y,2),C=S[0],N=S[1],w=Object(n.useState)(""),x=Object(s.a)(w,2),_=x[0],F=x[1],G=Object(n.useState)([{week_day:0,from:"",to:""}]),q=Object(s.a)(G,2),z=q[0],H=q[1];function I(e,a,t){var n=z.map((function(n,l){return l===e?Object(M.a)({},n,Object(B.a)({},a,t)):n}));H(n)}return l.a.createElement("div",{id:"page-teacher-form",className:"container"},l.a.createElement(k,{title:"Que incr\xedvel que voc\xea quer dar aulas.",description:"O primeiro passo \xe9 preencher esse formul\xe1rio de inscri\xe7\xe3o."}),l.a.createElement("main",null,l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),m.post("classes",{name:c,avatar:b,whatsapp:j,bio:p,subject:C,cost:Number(_),schedule:z}).then((function(){alert("Cadastro realizado com sucesso!"),e.push("/")})).catch((function(){alert("Cadastro falhou!")}))}},l.a.createElement("fieldset",null,l.a.createElement("legend",null," Seus dados"),l.a.createElement(A,{name:"name",label:"Nome completo",value:c,onChange:function(e){r(e.target.value)}}),l.a.createElement(A,{name:"avatar",label:"Avatar",value:b,onChange:function(e){f(e.target.value)}}),l.a.createElement(A,{name:"whatsapp",label:"WhatsApp",value:j,onChange:function(e){O(e.target.value)}}),l.a.createElement(Q,{name:"bio",label:"Biografia",value:p,onChange:function(e){E(e.target.value)}})),l.a.createElement("fieldset",null,l.a.createElement("legend",null," Sobre a aula "),l.a.createElement(D,{name:"subject",label:"Mat\xe9ria",value:C,onChange:function(e){N(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ci\xeancias",label:"Ci\xeancias"},{value:"F\xedsica",label:"F\xedsica"},{value:"Geografia",label:"Geografia"},{value:"Matem\xe1tica",label:"Matem\xe1tica"}]}),l.a.createElement(A,{name:"cost",value:_,onChange:function(e){F(e.target.value)},label:"Custo da sua hora por aula"})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Hor\xe1rios dispon\xedveis",l.a.createElement("button",{type:"button",onClick:function(){H([].concat(Object(P.a)(z),[{week_day:0,from:"",to:""}]))}},"+ Novo hor\xe1rio")),z.map((function(e,a){return l.a.createElement("div",{key:e.week_day,className:"schedule-item"},l.a.createElement(D,{name:"week_day",label:"Dia da semana",value:e.week_day,onChange:function(e){return I(a,"week_day",e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),l.a.createElement(A,{name:"from",label:"Das",type:"time",value:e.from,onChange:function(e){return I(a,"from",e.target.value)}}),l.a.createElement(A,{name:"to",label:"At\xe9",type:"time",value:e.to,onChange:function(e){return I(a,"to",e.target.value)}}))}))),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("img",{src:T.a,alt:"Aviso importante"}),"Importante! ",l.a.createElement("br",null),"Preencha todos os dados"),l.a.createElement("button",{type:"submit"},"Salvar cadastro")))))};var z=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{path:"/",exact:!0,component:y}),l.a.createElement(i.a,{path:"/study",component:F}),l.a.createElement(i.a,{path:"/give-classes",component:q}))};t(74);var H=function(){return l.a.createElement(z,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.4070eb1d.chunk.js.map