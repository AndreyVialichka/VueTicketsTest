import{o as n,c as s,a as o,d as u,t as p,n as b,q as f,v as y,x as i,H as h,r as $,I as P,F as B,B as g,_ as x,b as a,p as k,e as D,C as I}from"./entry.2515b40e.js";const M={class:"first Name"},V={__name:"Name",props:{firstName:String},setup(t){return(r,e)=>(n(),s("div",M,[o("h3",null,[u(" Имя: "),o("b",null,p(t.firstName),1)])]))}},T=V,w={class:"last Name"},C={__name:"LastName",props:{lastName:String},setup(t){return(r,e)=>(n(),s("div",w,[o("h3",null,[u(" фамилия: "),o("b",null,p(t.lastName),1)])]))}},L=C,q={class:"last Name"},F={__name:"Description",props:{description:String},setup(t){return(r,e)=>(n(),s("div",q,[o("h3",null,[u(" Описание: "),o("b",null,p(t.description),1)])]))}},U=F,m=b("profile",{state:()=>({profile:{firstName:"admin",lastName:"admin",birthdate:"2023-11-05",description:"description",city:"Minsk"}}),actions:{updateProfile(t){this.profile=t}}}),A=o("label",{for:"birthdate"},"Дата рождения:",-1),E={__name:"BirthDate",setup(t){const e=m().profile.birthdate;return(d,l)=>(n(),s("div",null,[A,f(o("input",{type:"date",id:"birthdate","onUpdate:modelValue":l[0]||(l[0]=c=>h(e)?e.value=c:null),required:""},null,512),[[y,i(e)]])]))}},H=E,K=o("label",{for:"city"},"Город:",-1),R={__name:"SelectCity",setup(t){const e=m().profile.city,d=$(["Minsk","Mosckow","Kiev","ST.Pt","Toronto"]);return(l,c)=>(n(),s("div",null,[K,f(o("select",{"onUpdate:modelValue":c[0]||(c[0]=_=>h(e)?e.value=_:null)},[(n(!0),s(B,null,g(i(d),_=>(n(),s("option",null,p(_),1))),256))],512),[[P,i(e)]])]))}},j=R;const z=t=>(k("data-v-16852bd4"),t=t(),D(),t),G={class:"profile"},J=z(()=>o("h1",null,"Профиль",-1)),O={__name:"index",setup(t){const e=m().profile;return(d,l)=>{const c=T,_=L,N=U,S=H,v=j;return n(),s("div",G,[J,a(c,{firstName:i(e).firstName},null,8,["firstName"]),a(_,{lastName:i(e).lastName},null,8,["lastName"]),a(N,{description:i(e).description},null,8,["description"]),a(S),a(v)])}}},Q=x(O,[["__scopeId","data-v-16852bd4"]]),W={};function X(t,r){const e=Q;return n(),I(e)}const Z=x(W,[["render",X]]);export{Z as default};
