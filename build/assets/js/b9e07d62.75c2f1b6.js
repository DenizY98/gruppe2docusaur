"use strict";(self.webpackChunkgruppe_2=self.webpackChunkgruppe_2||[]).push([[8501],{4227:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var i=r(5893),t=r(1151);const s={sidebar_position:2},l="3.4.2 Smarte IR-Heizung (realistisch)",a={id:"umsetzung/realitaetsnahere-umsetzung342",title:"3.4.2 Smarte IR-Heizung (realistisch)",description:"Szenario",source:"@site/docs/umsetzung/realitaetsnahere-umsetzung342.md",sourceDirName:"umsetzung",slug:"/umsetzung/realitaetsnahere-umsetzung342",permalink:"/docs/umsetzung/realitaetsnahere-umsetzung342",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/umsetzung/realitaetsnahere-umsetzung342.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"3.4.1 Smarte IR-Heizung",permalink:"/docs/umsetzung/smarte-ir-heizung"},next:{title:"3.4.3 Optimiertes Heizen",permalink:"/docs/umsetzung/optimiertes-heizen"}},d={},u=[{value:"Szenario",id:"szenario",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Aufbau",id:"aufbau",level:2},{value:"Funktionsweise",id:"funktionsweise",level:2},{value:"Shelly2Shelly-Kommunikation",id:"shelly2shelly-kommunikation",level:2},{value:"Betrieb",id:"betrieb",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"342-smarte-ir-heizung-realistisch",children:"3.4.2 Smarte IR-Heizung (realistisch)"}),"\n",(0,i.jsx)(n.h2,{id:"szenario",children:"Szenario"}),"\n",(0,i.jsx)(n.p,{children:"Mithilfe eines stromerzeugenden Balkonkraftwerkes soll ein Verbraucher (eine Infrarotheizung) automatisiert an- und ausgeschalten werden. Dazu sollen statt einer Shelly 2.5PM, zwei Shelly 1PM Plus verwendet werden. Zudem soll ein \xdcberhitzungsschutz, eine Steuerung durch den Benutzer und die M\xf6glichkeit, die Automatisierung bedarfsgerecht anzupassen, erm\xf6glicht werden."}),"\n",(0,i.jsx)(n.h2,{id:"hardware",children:"Hardware"}),"\n",(0,i.jsx)(n.p,{children:"Zur Umsetzung der smarten Infrarotheizung wurde folgende Hardware verwendet:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Zwei Shelly 1PM Plus (eine f\xfcr das Balkonkraftwerk und eine f\xfcr die Infrarotheizung)"}),"\n",(0,i.jsx)(n.li,{children:"Ein Mehrfachstecker bildet den Anschluss an das Haus-/Wohnungsnetz ab"}),"\n",(0,i.jsx)(n.li,{children:"Eine Gl\xfchbirne als Ersatz f\xfcr das Balkonkraftwerk"}),"\n",(0,i.jsx)(n.li,{children:"Eine zweite Gl\xfchbirne als Ersatz f\xfcr die Infrarotheizung"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)("img",{src:"/img/3.4.2 (Aufbau).png",alt:"3.4.2 (Aufbau)",width:""}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"aufbau",children:"Aufbau"}),"\n",(0,i.jsx)(n.p,{children:'Das Balkonkraftwerk ist auf dem Balkon \xfcber eine der Shelly 1PM Plus an das Hausnetz angeschlossen. Die Infrarotheizung ist \xfcber die zweite Shelly 1PM Plus in einer anderen Steckdose ebenfalls an das Hausnetz angeschlossen. Die erste Shelly 1PM Plus misst den vom Balkonkraftwerk erzeugten Strom und erm\xf6glicht die Ein- und Abschaltung der Infrarotheizung, in dem sie ein entsprechendes Signal an die zweite Shelly 1PM Plus sendet. \xdcber das Homeautomationssystem "Home Assistant" k\xf6nnen die beiden Shelly 1PM Plus konfiguriert und gesteuert werden. F\xfcr das vorliegende Szenario wurde dementsprechend eine bzw. mehrere Automationen angelegt.'}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)("img",{src:"/img/3.4.2 (Funktion).png",alt:"3.4.2 (Funktion)",width:""}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"funktionsweise",children:"Funktionsweise"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Periodische \xdcberpr\xfcfung:"}),"\nAlle ",(0,i.jsx)(n.code,{children:"5 Minuten"})," wird von Shelly 1 automatisch \xfcberpr\xfcft wieviel Strom das Balkonkraftwerk produziert."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Automatisiertes Einschalten:"}),"\nWenn der produzierte Strom den Schwellwert von ",(0,i.jsx)(n.code,{children:"300  Watt"})," \xfcbersteigt, sendet die erste Shelly ein Signal an die zweite Shelly zur Aktivierung der Infrarotheizung."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Automatisiertes Abschalten:"}),"\nWenn der produzierte Strom den Schwellwert von ",(0,i.jsx)(n.code,{children:"300  Watt"})," \xfcbersteigt, sendet die erste Shelly ein Signal an die zweite Shelly zur Deaktivierung der Infrarotheizung."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\xdcberhitzungsschutz:"}),"\nDamit die Heizung nicht im Dauerbetrieb verweilt und eventuell \xfcberhitzt, wird die Betriebsdauer der Heizung \xfcberwacht. Wenn diese l\xe4nger als ",(0,i.jsx)(n.code,{children:"120 Minuten"})," betr\xe4gt, wird die Heizung automatisiert f\xfcr ",(0,i.jsx)(n.code,{children:"15 Minuten"})," abgeschalten um abzuk\xfchlen."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Automatisierte Reaktivierung:"}),"\nNach Ablauf der K\xfchlzeit, wird wieder in den Regelbetrieb \xfcbergegangen und die Heizung folglich bei \xdcberschreiten des Strom-Schwellwertes von ",(0,i.jsx)(n.code,{children:"300 Watt"})," wieder eingeschalten."]}),"\n",(0,i.jsx)(n.h2,{id:"shelly2shelly-kommunikation",children:"Shelly2Shelly-Kommunikation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Direkte Kommunikation \xfcber die Shelly Cloud:"}),"\nSie k\xf6nnen das ",(0,i.jsx)(n.a,{href:"https://control.shelly.cloud/#",children:"Shelly-Webfrontend"})," verwenden, um die Kommunikation zwischen den beiden Shelly-Ger\xe4ten zu erm\xf6glichen. Im Webfrontend k\xf6nnen Sie die gew\xfcnschten Aktionen und Schalter auch manuell bedienen."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kommunikation \xfcber die Smart-Home Plattform:"}),"\nWenn Sie eine ",(0,i.jsx)(n.a,{href:"http://homeassistant.local",children:"Smart-Home-Plattform"})," verwenden, k\xf6nnen Sie die Shelly-Ger\xe4te in Ihre Plattform integrieren und die gew\xfcnschten Aktionen dort definieren. Die Plattform erm\xf6glicht eine zentralisierte Steuerung und \xdcberwachung aller Ihrer Smart-Home-Ger\xe4te."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)("img",{src:"/img/3.4.2 (Betrieb).png",alt:"3.4.2 (Betrieb)",width:""}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"betrieb",children:"Betrieb"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Benutzersteuerung:"}),'\nDie erstellte Automatisierung des "einfachen Heizens per Infrarotheizung (realistisch)" kann durch den Benutzer sowohl per Shelly App als auch \xfcber die Home Assistant GUI aktiviert oder deaktiviert werden.']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Anpassungen:"}),"\nDie hervorgehobenen initialen Werte wie der Strom-Schwellwert und die Zeitintervalle k\xf6nnen durch den Benutzer beliebig definiert und entsprechend angepasst werden."]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var i=r(7294);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);