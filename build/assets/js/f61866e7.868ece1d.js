"use strict";(self.webpackChunkgruppe_2=self.webpackChunkgruppe_2||[]).push([[4117],{8021:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var i=s(5893),r=s(1151);const t={sidebar_position:1},a="3.1 Raspi 3",d={id:"setup/installation-setup-raspi",title:"3.1 Raspi 3",description:'Hier sind die Schritte, um die SD-Karte f\xfcr den Raspberry Pi mit dem "Raspberry Pi Imager" zu flashen und die Einstellungen entsprechend anzupassen:',source:"@site/docs/setup/installation-setup-raspi.md",sourceDirName:"setup",slug:"/setup/installation-setup-raspi",permalink:"/docs/setup/installation-setup-raspi",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup/installation-setup-raspi.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial \ud83d\udee0\ufe0f Setup & Installation ",permalink:"/docs/category/tutorial-\ufe0f-setup--installation-"},next:{title:"3.2 Sicherungskonzept",permalink:"/docs/setup/sicherungskonzept"}},o={},l=[];function c(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"31-raspi-3",children:"3.1 Raspi 3"}),"\n",(0,i.jsxs)(n.p,{children:["Hier sind die Schritte, um die SD-Karte f\xfcr den Raspberry Pi mit dem ",(0,i.jsx)(n.a,{href:"https://www.raspberrypi.com/software/",children:'"Raspberry Pi Imager"'})," zu flashen und die Einstellungen entsprechend anzupassen:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\xd6ffnen Sie den ",(0,i.jsx)(n.strong,{children:"Raspberry Pi Imager"})," und w\xe4hlen Sie das gew\xfcnschte Modell und Betriebssystem\n(other specific purposes OS -> Home assistants and Home automation -> Home Assistant)  aus."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/os.png",alt:"OS",width:"800"}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Unter dem Reiter ",(0,i.jsx)(n.strong,{children:"Dienste"})," aktivieren Sie ",(0,i.jsx)(n.strong,{children:"SSH"})," und speichern Sie die \xc4nderungen."]}),"\n",(0,i.jsxs)(n.li,{children:["Geben Sie die initialen Zugangsdaten ein: ",(0,i.jsx)(n.strong,{children:"Benutzername"})," (unix-user) ",(0,i.jsx)(n.code,{children:"admin"})," und ",(0,i.jsx)(n.strong,{children:"Passwort"})," ",(0,i.jsx)(n.code,{children:"admin"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/image.png",alt:"RaspiImager",width:"300"}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Klicken Sie auf den Button ",(0,i.jsx)(n.strong,{children:"Weiter"})," und best\xe4tigen Sie den Flashvorgang."]}),"\n",(0,i.jsx)(n.li,{children:"\u2615 bis der Vorgang abgeschlossen und verifiziert wurde."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Nachdem die SD-Karte erfolgreich geflasht wurde:"}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Entnehmen Sie die SD-Karte aus dem PC und stecken Sie sie in den Raspberry Pi."}),"\n",(0,i.jsxs)(n.li,{children:["Verbinden Sie den Raspberry Pi mit dem Stromnetz. Der Bootvorgang dauert etwa ",(0,i.jsx)(n.strong,{children:"30-60 Sekunden"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["\xdcberpr\xfcfen Sie, ob der Raspberry Pi hochgefahren ist, indem Sie einen ",(0,i.jsx)(n.strong,{children:"Ping-Befehl"})," ausf\xfchren:\n",(0,i.jsx)(n.code,{children:"ping homeassistant.local"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/ping.png",alt:"Ping",width:"500"}),"\n",(0,i.jsx)(n.p,{children:"Sobald der Raspberry Pi antwortet:"}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsxs)(n.li,{children:["Verbinden Sie einen Monitor mit dem Raspberry Pi und warten Sie auf den Anmeldebildschirm oder \xf6ffnen Sie einen Browser und geben Sie die URI ",(0,i.jsx)(n.code,{children:"homeassistant.local:8123"})," ein. Alternativ k\xf6nnen Sie auch einen Monitor an den Pi anschlie\xdfen und auf folgenden Bildschirm warten:"]}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/cli.png",alt:"HassioCLI",width:"400"}),"\n",(0,i.jsxs)(n.ol,{start:"9",children:["\n",(0,i.jsxs)(n.li,{children:["Melden Sie sich mit dem Passwort ",(0,i.jsx)(n.code,{children:"admin"})," an."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/ui.png",alt:"HassioUI",width:"400"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Wichtig"}),": \xc4ndern Sie das Passwort sofort nach der ersten Anmeldung:"]}),"\n",(0,i.jsxs)(n.ol,{start:"10",children:["\n",(0,i.jsxs)(n.li,{children:["\xd6ffnen Sie ein Terminal und geben Sie den Befehl ",(0,i.jsx)(n.code,{children:"passwd"})," ein, um das Passwort zu \xe4ndern. Sie werden aufgefordert, das neue Passwort zweimal einzugeben."]}),"\n",(0,i.jsxs)(n.li,{children:["Sichern Sie den ",(0,i.jsx)(n.strong,{children:"root"}),"-Benutzer, indem Sie ",(0,i.jsx)(n.code,{children:"sudo passwd"})," eingeben und das Passwort zweimal best\xe4tigen."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Verwenden Sie ein starkes Passwort, das nicht leicht zu erraten ist, wie z.B. ",(0,i.jsx)(n.code,{children:"WWI2021a!?"}),", um die Sicherheit zu erh\xf6hen."]}),"\n",(0,i.jsx)(n.p,{children:"Nachdem Sie das Passwort ge\xe4ndert haben, k\xf6nnen Sie sich mit dem neuen Passwort anmelden und Home Assistant testen. Viel Spa\xdf beim Ausprobieren und Entdecken der Funktionen von Home Assistant!!"})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>a});var i=s(7294);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);