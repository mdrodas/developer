"use strict";(self.webpackChunkdeveloper_site=self.webpackChunkdeveloper_site||[]).push([[923],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,h=f["".concat(l,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4190:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Profile manager",sidebar_label:"Profile manager"},l=void 0,u={unversionedId:"platform/profile-manager",id:"platform/profile-manager",isDocsHomePage:!1,title:"Profile manager",description:"The profile manager component is the one responsible for storing and maintaining",source:"@site/docs/platform/profile-manager.md",sourceDirName:"platform",slug:"/platform/profile-manager",permalink:"/developer/docs/platform/profile-manager",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/platform/profile-manager.md",tags:[],version:"current",lastUpdatedAt:1643192825,formattedLastUpdatedAt:"1/26/2022",frontMatter:{title:"Profile manager",sidebar_label:"Profile manager"},sidebar:"pilot",previous:{title:"HUB",permalink:"/developer/docs/platform/hub"},next:{title:"Task manager",permalink:"/developer/docs/platform/task-manager"}},p=[],c={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The profile manager component is the one responsible for storing and maintaining\nthe WeNet user profiles and its historic. A user profile is a set of attributes\nthat define the state of the user. Some of these attributes are filled in by\nthe user, such as name, email, telephone,... , or by  other components of\nthe platform, such as social relationships, routines,.... "),(0,o.kt)("p",null,"Also, the profile manager is responsible to manage the communities that\nthe users can be aggregated. By default, each application has associated with\none community that contains the norms that manage how the incentives have\nto be notified to the users."),(0,o.kt)("p",null,"Another responsibility of the profile manager is to evaluate the trust of one user\nover another when it is doing some action. The trust is dynamic and will be\nupdated every time they collaborate to achieve a task. When a user has received\nhelp it can rate the performance of the user that has helped it. For this, it has\nto post a performance rating event to the profile manager. These events are used\nby the profile manager when it has to provide the trust that has a user that\nanother does a certain action. When you want to calculate the trust, you must\nspecify some parameters that are used to select with events has to be aggregated\nto obtain the trust. Also, you must define the aggregation function, that can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RECENCY_BASED: the trust is the average of the last 'n' rating events.\nAt the moment n=5."),(0,o.kt)("li",{parentName:"ul"},"AVERAGE: the trust is the average of all the rating events."),(0,o.kt)("li",{parentName:"ul"},"MEDIAN: the trust is the median of all the rating events."),(0,o.kt)("li",{parentName:"ul"},"MINIMUM: the trust is the minimum rating of all the events."),(0,o.kt)("li",{parentName:"ul"},"MAXIMUM: the trust is the maximum rating of all the events.")))}f.isMDXComponent=!0}}]);