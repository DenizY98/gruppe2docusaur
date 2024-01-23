"use strict";(self.webpackChunkgruppe_2=self.webpackChunkgruppe_2||[]).push([[7637],{4402:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=i(5893),r=i(1151);const s={sidebar_position:3},a="3.4.3 Optimiertes Heizen",d={id:"umsetzung/optimiertes-heizen",title:"3.4.3 Optimiertes Heizen",description:"Szenario",source:"@site/docs/umsetzung/optimiertes-heizen.md",sourceDirName:"umsetzung",slug:"/umsetzung/optimiertes-heizen",permalink:"/docs/umsetzung/optimiertes-heizen",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/umsetzung/optimiertes-heizen.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"3.4.2 Smarte IR-Heizung (realistisch)",permalink:"/docs/umsetzung/realitaetsnahere-umsetzung342"},next:{title:"3.4.4 Optimiertes Heizen (realistisch)",permalink:"/docs/umsetzung/realitaetsnahere-umsetzung344"}},u={},l=[{value:"Szenario",id:"szenario",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Aufbau",id:"aufbau",level:2},{value:"Funktionsweise",id:"funktionsweise",level:2},{value:"Betrieb",id:"betrieb",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"343-optimiertes-heizen",children:"3.4.3 Optimiertes Heizen"}),"\n",(0,t.jsx)(n.h2,{id:"szenario",children:"Szenario"}),"\n",(0,t.jsx)(n.p,{children:"Mithilfe eines stromerzeugenden Balkonkraftwerkes soll ein Verbraucher (eine Infrarotheizung) automatisiert an- und ausgeschalten werden. Zudem soll ein \xdcberhitzungsschutz, eine Steuerung durch den Benutzer und die M\xf6glichkeit, die Automatisierung bedarfsgerecht anzupassen, erm\xf6glicht werden. Um einen realistischeren Ansatz zu gew\xe4hrleisten, soll die Aktivit\xe4t der Heizung an aktuelle Temperatur- und Luftfeuchtigkeitswerte gekoppelt werden."}),"\n",(0,t.jsx)(n.h2,{id:"hardware",children:"Hardware"}),"\n",(0,t.jsx)(n.p,{children:"Zur Umsetzung der smarten Infrarotheizung wurde folgende Hardware verwendet:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Eine graue Verteilerdose mit integriertem Shelly 2.5PM"}),"\n",(0,t.jsx)(n.li,{children:"Ein Mehrfachstecker bildet den Anschluss an das Haus-/Wohnungsnetz ab"}),"\n",(0,t.jsx)(n.li,{children:"Eine Gl\xfchbirne als Ersatz f\xfcr das Balkonkraftwerk"}),"\n",(0,t.jsx)(n.li,{children:"Eine zweite Gl\xfchbirne als Ersatz f\xfcr die Infrarotheizung"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)("img",{src:"/img/3.4.3 (Aufbau).png",alt:"3.4.3 (Aufbau)",width:""}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"aufbau",children:"Aufbau"}),"\n",(0,t.jsxs)(n.p,{children:['Das Balkonkraftwerk ist \xfcber den Kanal 1 an eine Shelly 2.5PM angeschlossen. Die Infrarotheizung ist \xfcber den Kanal 2 ebenfalls an die Shelly 2.5PM angeschlossen. Durch die Steckdose ist die Shelly 2.5PM an das Heimnetz angeschlossen. Diese misst den vom Balkonkraftwerk erzeugten Strom und erm\xf6glicht die Ein- und Abschaltung der Infrarotheizung. \xdcber das Homeautomationssystem "Home Assistant" kann die Shelly 2.5PM konfiguriert und gesteuert werden. Die aktuellen Luftfeuchtigkeits- und Temperaturdaten werden von einem Sensor im Hobbyraum erfasst und auf ',(0,t.jsx)(n.a,{href:"https://measurements.mobile-alerts.eu/Home/MeasurementDetails?deviceid=035DD29D94C5&vendorid=244DD836-16DE-465E-B265-B3F1596A26D4&appbundle=de.synertronixx.remotemonitor",children:"dieser Webseite"})," angegeben. Sie werden in Homeassistent integriert und k\xf6nnen so f\xfcr die  Automationen abgerufen werden. F\xfcr das vorliegende Szenario wurden dementsprechend eine bzw. mehrere Automationen angelegt."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)("img",{src:"/img/3.4.3 (Funktion).png",alt:"3.4.3 (Funktion)",width:""}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"funktionsweise",children:"Funktionsweise"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sensordaten:"}),"\nDie ber\xfccksichtigten Sensordaten werden alle 7 Minuten auf der Website aktualisiert."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Automatisiertes Einschalten:"}),"\nWenn im Hobbyraum die Temperatur unter ",(0,t.jsx)(n.code,{children:"19\xb0"})," sinkt oder die Luftfeuchtigkeit \xfcber ",(0,t.jsx)(n.code,{children:"75%"})," steigt, wird die Infrarotheizung \xfcber Shelly Kanal 2 automatisch angeschalten."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Automatisiertes Abschalten:"}),"\nWenn im Hobbyraum die Temperatur \xfcber ",(0,t.jsx)(n.code,{children:"21\xb0"})," steigt oder die Luftfeuchtigkeit unter ",(0,t.jsx)(n.code,{children:"70%"})," sinkt, wird die Infrarotheizung \xfcber Shelly Kanal 2 automatisch abgeschalten."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\xdcberhitzungsschutz:"}),"\nDamit die Heizung nicht im Dauerbetrieb verweilt und eventuell \xfcberhitzt, wird die Betriebsdauer der Heizung \xfcberwacht. Wenn diese l\xe4nger als ",(0,t.jsx)(n.code,{children:"120 Minuten"})," betr\xe4gt, wird die Heizung automatisiert f\xfcr ",(0,t.jsx)(n.code,{children:"15 Minuten"})," abgeschalten um abzuk\xfchlen."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Automatisierte Reaktivierung"}),"\nNach Ablauf der K\xfchlzeit, wird wieder in den Regelbetrieb \xfcbergegangen und die Heizung folglich bei Erf\xfcllung der definierten Bedingungen wieder eingeschalten."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)("img",{src:"/img/3.4.3 (Betrieb).png",alt:"3.4.3 (Betrieb)",width:""}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"betrieb",children:"Betrieb"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Benutzersteuerung:"}),'\nDie erstellte Automatisierung des "Optimiertes Heizen per Infrarotheizung" kann durch den Benutzer sowohl per Shelly App als auch \xfcber die Home Assistant GUI aktiviert oder deaktiviert werden.']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Anpassungen:"}),"\nDie hervorgehobenen initialen Werte wie die Unter- und Obergrenzen der Luftfeuchtigkeit und Temperatur sowie die Zeitintervalle k\xf6nnen durch den Benutzer in der Home Assistant GUI beliebig definiert und entsprechend angepasst werden."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>a});var t=i(7294);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);