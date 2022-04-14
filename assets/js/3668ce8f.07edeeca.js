"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[213],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={sidebar_position:5},u="Interrupts",c={unversionedId:"Fundamentals/Interuppts",id:"Fundamentals/Interuppts",title:"Interrupts",description:"An interrupt is a signal to the processor emitted by hardware or software indicating an event that needs immediate attention. Whenever an interrupt occurs, the controller completes the execution of the current instruction and starts the execution of an Interrupt Service Routine (ISR) or Interrupt Handler.",source:"@site/docs/Fundamentals/Interuppts.md",sourceDirName:"Fundamentals",slug:"/Fundamentals/Interuppts",permalink:"/IEEE_ADGITM_Docs/docs/Fundamentals/Interuppts",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Fundamentals/Interuppts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Pulse Width Modulation (PWM)",permalink:"/IEEE_ADGITM_Docs/docs/Fundamentals/PWM"},next:{title:"Arduino Platform",permalink:"/IEEE_ADGITM_Docs/docs/Arduino Fundamentals"}},l=[{value:"Hardware Interrupt",id:"hardware-interrupt",children:[],level:2},{value:"Software Interrupt",id:"software-interrupt",children:[{value:"Interrupt Service Routine",id:"interrupt-service-routine",children:[],level:3}],level:2},{value:"Video for better understanding",id:"video-for-better-understanding",children:[],level:2},{value:"Types",id:"types",children:[],level:2}],p={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interrupts"},"Interrupts"),(0,o.kt)("p",null,"An interrupt is a signal to the processor emitted by hardware or software indicating an event that needs immediate attention. Whenever an interrupt occurs, the controller completes the execution of the current instruction and starts the execution of an Interrupt Service Routine (ISR) or Interrupt Handler."),(0,o.kt)("h2",{id:"hardware-interrupt"},"Hardware Interrupt"),(0,o.kt)("p",null,"A hardware interrupt is an electronic alerting signal sent to the processor from an external device, like a disk controller or an external peripheral.",(0,o.kt)("br",{parentName:"p"}),"\n","For example, when we press a key on the keyboard or move the mouse, they trigger hardware interrupts which cause the processor to read the keystroke or mouse position."),(0,o.kt)("h2",{id:"software-interrupt"},"Software Interrupt"),(0,o.kt)("p",null,"A software interrupt is caused either by an exceptional condition or a special instruction in the instruction set which causes an interrupt when it is executed by the processor.",(0,o.kt)("br",{parentName:"p"}),"\n","For example, if the processor's arithmetic logic unit runs a command to divide a number by zero, to cause a divide-by-zero exception, thus causing the computer to abandon the calculation or display an error message. Software interrupt instructions work similar to subroutine calls."),(0,o.kt)("h3",{id:"interrupt-service-routine"},"Interrupt Service Routine"),(0,o.kt)("p",null,"For every interrupt, there must be an interrupt service routine (ISR), or interrupt handler. When an interrupt occurs, the microcontroller runs the interrupt service routine. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For every interrupt, there is a fixed location in memory that holds the address of its interrupt service routine, ISR. "),(0,o.kt)("li",{parentName:"ul"},"The table of memory locations set aside to hold the addresses of ISRs is called as the Interrupt Vector Table.")),(0,o.kt)("img",{src:"/img/isr.png",height:"800",width:"800"}),(0,o.kt)("h1",{id:"handling-multiple-devices"},"Handling Multiple Devices:"),(0,o.kt)("p",null,"When more than one device raises an interrupt request signal, then additional information is needed to decide which device to be considered first. The following methods are used to decide which device to select: Polling, Vectored Interrupts, and Interrupt Nesting. These are explained as following below. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Polling"),":  In polling, the first device encountered with the IRQ bit set is the device that is to be serviced first. Appropriate ISR is called to service the same. It is easy to implement but a lot of time is wasted by interrogating the IRQ bit of all devices. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Vectored Interrupts"),": In vectored interrupts, a device requesting an interrupt identifies itself directly by sending a special code to the processor over the bus. This enables the processor to identify the device that generated the interrupt. The special code can be the starting address of the ISR or where the ISR is located in memory and is called the interrupt vector. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Interrupt Nesting"),": In this method, the I/O device is organized in a priority structure. Therefore, an interrupt request from a higher priority device is recognized whereas a request from a lower priority device is not.  The processor accepts interrupts only from devices/processes having priority.")),(0,o.kt)("h2",{id:"video-for-better-understanding"},"Video for better understanding"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/Cd6nQ5sAkRE"},(0,o.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/Cd6nQ5sAkRE/hqdefault.jpg",alt:"Watch the video"}))),(0,o.kt)("h2",{id:"types"},"Types"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/arAEbSt6tyg"},(0,o.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/arAEbSt6tyg/hqdefault.jpg",alt:"Watch the video"}))))}d.isMDXComponent=!0}}]);