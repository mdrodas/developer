"use strict";(self.webpackChunkdeveloper_site=self.webpackChunkdeveloper_site||[]).push([[958],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7259:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"M26: Ask for Help",sidebar_label:"M26"},s=void 0,p={unversionedId:"platform/pilots/m26",id:"platform/pilots/m26",isDocsHomePage:!1,title:"M26: Ask for Help",description:"The use case",source:"@site/docs/platform/pilots/m26.md",sourceDirName:"platform/pilots",slug:"/platform/pilots/m26",permalink:"/developer/docs/platform/pilots/m26",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/platform/pilots/m26.md",tags:[],version:"current",lastUpdatedAt:1622712165,formattedLastUpdatedAt:"6/3/2021",frontMatter:{title:"M26: Ask for Help",sidebar_label:"M26"},sidebar:"pilot",previous:{title:"Interaction protocol engine",permalink:"/developer/docs/platform/interaction-protocol-engine"}},u=[{value:"The use case",id:"the-use-case",children:[]},{value:"Usage",id:"usage",children:[{value:"Telegram",id:"telegram",children:[]},{value:"Conversations",id:"conversations",children:[]},{value:"Badges",id:"badges",children:[]},{value:"Nudges",id:"nudges",children:[]}]},{value:"The pilots",id:"the-pilots",children:[{value:"London",id:"london",children:[]},{value:"Copenhagen",id:"copenhagen",children:[]},{value:"Mongolia",id:"mongolia",children:[]},{value:"Paraguay",id:"paraguay",children:[]},{value:"Trento",id:"trento",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-use-case"},"The use case"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Ask for Help")," is a Telegram bot allowing users to ask questions, provide answers and pick the most useful one."),(0,o.kt)("p",null,"During the pilot users will have the possibility of winning badges (they can we won by asking questions, by answering and by providing the best answer)."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Each Telegram application requires a user to have an active WeNet user.\nThis can be created ",(0,o.kt)("a",{parentName:"p",href:"https://internetofus.u-hopper.com/prod/hub/frontend"},"here"),"."),(0,o.kt)("p",null,"In order to start using the bot, just click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Start")," button."),(0,o.kt)("p",null,"The bot will walk each non-authorised user through the process of user creation and app authorisation.\nOnce the process is completed, the user will be notified within the conversation and will have the possibility to start chatting."),(0,o.kt)("h3",{id:"telegram"},"Telegram"),(0,o.kt)("p",null,"Telegram is an instant messaging app available for all mobile and computer platforms.\nTelegram can be downloaded for"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/telegram-messenger/id686449807"},"iPhone")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en_US&gl=US"},"Android")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://telegram.org/apps"},"laptop"))),(0,o.kt)("p",null,"After downloading Telegram, the sign-up process requires to provide the country and mobile phone number information.\nAnd that's it, you are ready to roll!"),(0,o.kt)("h3",{id:"conversations"},"Conversations"),(0,o.kt)("p",null,"Users can take advantage of Telegram commands in order to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ask a question with the ",(0,o.kt)("inlineCode",{parentName:"li"},"/question")," command"),(0,o.kt)("li",{parentName:"ul"},"look for open questions to answer to with the ",(0,o.kt)("inlineCode",{parentName:"li"},"/answer")," command")),(0,o.kt)("p",null,"Once a question is asked, it will be proposed to other users in the pilot community. The will have the possibility of answering, ignoring or report the question."),(0,o.kt)("p",null,"Direct user interaction is not allowed.\nAll communication goes through the WeNet platform that will make sure to forward all messages to the expected recipients."),(0,o.kt)("h3",{id:"badges"},"Badges"),(0,o.kt)("p",null,"Badges can be won while using the application and contributing to the discussion of the community. There are various levels and they can be unlocked when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"questions are asked"),(0,o.kt)("li",{parentName:"ul"},"answers are provided"),(0,o.kt)("li",{parentName:"ul"},"answers are picked as the best ones by the question creator")),(0,o.kt)("h3",{id:"nudges"},"Nudges"),(0,o.kt)("p",null,"Periodical nudge messages are going to be send to the whole community in order to propose discussion topics.\nNudges can be configured ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1raSAmjUlln8-km32SEgaaqS9Oaun7t356ftJGWoODY4/edit#gid=0"},"here"),"."),(0,o.kt)("p",null,"When ready, please notify the platform managers so that the updated version of nudges can be made available to the platform."),(0,o.kt)("h2",{id:"the-pilots"},"The pilots"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"Ask for Help")," pilot is going to be run in multiple cities.\nEach of them will have its own dedicated application."),(0,o.kt)("p",null,"A version of the application that is not linked to any particular pilot is available ",(0,o.kt)("a",{parentName:"p",href:"https://internetofus.u-hopper.com/prod/hub/frontend/wenetapp/app-details?id=xAcauSmrhd&back=index"},"here"),"."),(0,o.kt)("h3",{id:"london"},"London"),(0,o.kt)("p",null,"The London pilot is run by LSE and has taken place during March 12th - 28th 2021."),(0,o.kt)("h3",{id:"copenhagen"},"Copenhagen"),(0,o.kt)("p",null,"The Copenhagen pilot is run by AAU and has taken place during March 12th - 28th 2021."),(0,o.kt)("h3",{id:"mongolia"},"Mongolia"),(0,o.kt)("p",null,"The Mongolia pilot is run by NUM and has taken place during March 12th - 28th 2021."),(0,o.kt)("h3",{id:"paraguay"},"Paraguay"),(0,o.kt)("p",null,"The Paraguay pilot is run by US and has taken place during March 17th - 31st 2021."),(0,o.kt)("h3",{id:"trento"},"Trento"),(0,o.kt)("p",null,"The Trento pilot is run by UniTN and has taken place during June 4th - 19th 2021."))}d.isMDXComponent=!0}}]);