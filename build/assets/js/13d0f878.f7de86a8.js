"use strict";(self.webpackChunkgruppe_2=self.webpackChunkgruppe_2||[]).push([[8223],{4280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(5893),s=n(1151);var a=n(7294);const i=()=>{const[e,t]=(0,a.useState)({username:"",apiurl:"",password:"",longitude:"",latitude:"",homename:"",sensors:""}),[n,s]=(0,a.useState)({}),i=n=>{t({...e,[n.target.name]:n.target.value})};return(0,r.jsx)("div",{className:"user-form-container",children:(0,r.jsxs)("form",{onSubmit:async n=>{if(n.preventDefault(),(()=>{const t={},n=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i"),r=/^-?\d+(\.\d+)?$/;return e.username.trim()||(t.username="Username is required"),n.test(e.apiurl)||(t.apiurl="Invalid API URL"),e.password||(t.password="Password is required"),r.test(e.longitude)||(t.longitude="Invalid longitude"),r.test(e.latitude)||(t.latitude="Invalid latitude"),e.homename.trim()||(t.homename="Home name is required"),e.sensors.trim()||(t.sensors="At least one sensor is required"),s(t),0===Object.keys(t).length})())try{(await fetch("https://api.yueksel.me/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(alert("User created successfully"),t({username:"",apiurl:"",password:"",longitude:"",latitude:"",homename:"",sensors:""})):alert("Error creating user")}catch(r){alert("Error submitting form")}},className:"user-form",children:[(0,r.jsx)("input",{type:"text",name:"username",placeholder:"Benutzername",value:e.username,onChange:i,required:!0}),n.username&&(0,r.jsx)("p",{children:n.username}),(0,r.jsx)("input",{type:"text",name:"apiurl",placeholder:"Homeassistant-api-url http://w.x.y.z:8123/api/",value:e.apiurl,onChange:i,required:!0}),n.apiurl&&(0,r.jsx)("p",{children:n.apiurl}),(0,r.jsx)("input",{type:"password",name:"password",placeholder:"Homeassistant-api-token like eyGabGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",value:e.password,onChange:i,required:!0}),n.password&&(0,r.jsx)("p",{children:n.password}),(0,r.jsx)("input",{type:"text",name:"longitude",placeholder:"Longitude like 48.123456",value:e.longitude,onChange:i,required:!0}),n.longitude&&(0,r.jsx)("p",{children:n.longitude}),(0,r.jsx)("input",{type:"text",name:"latitude",placeholder:"Latitude like 12.123456",value:e.latitude,onChange:i,required:!0}),n.latitude&&(0,r.jsx)("p",{children:n.latitude}),(0,r.jsx)("input",{type:"text",name:"homename",placeholder:"Home Name like Balkonkraftwerk Stgt",value:e.homename,onChange:i,required:!0}),n.homename&&(0,r.jsx)("p",{children:n.homename}),(0,r.jsx)("input",{type:"text",name:"sensors",placeholder:"Sensors like Key:'value' comma-separated Heute:'sensor.daily_energy'",value:e.sensors,onChange:i,required:!0}),n.sensors&&(0,r.jsx)("p",{children:n.sensors}),(0,r.jsx)("button",{type:"submit",className:"submit-button",children:"Submit"})]})})},o={title:"User Registration Form"},u="Sensorerfassung",l={type:"mdx",permalink:"/form",source:"@site/src/pages/form.mdx",title:"User Registration Form",description:"Werde ein Teil unserer Community und trage deine Sensorwerte in die Live aktualisierte Karte ein.",frontMatter:{title:"User Registration Form"},unlisted:!1},d={},p=[];function m(e){const t={h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"sensorerfassung",children:"Sensorerfassung"}),"\n",(0,r.jsx)(t.p,{children:"Werde ein Teil unserer Community und trage deine Sensorwerte in die Live aktualisierte Karte ein."}),"\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)("a",{href:"/config",className:"edit-button",children:"Edit Configuration"})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(7294);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);