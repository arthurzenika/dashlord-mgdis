(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return A}});var l=t(85893),r=t(9008),u=t.n(r),s=t(67294),d=t(45697),o=t.n(d);function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},i.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var v=(0,s.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,d=n(e,["color","size"]);return s.createElement("svg",i({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),s.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.createElement("polyline",{points:"17 6 23 6 23 12"}))}));v.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},v.displayName="TrendingUp";var T=v;function Z(){return Z=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Z.apply(this,arguments)}function h(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=(0,s.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,d=h(e,["color","size"]);return s.createElement("svg",Z({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),s.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),s.createElement("polyline",{points:"17 18 23 18 23 12"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="TrendingDown";var p=c,g=t(74041),_=t(18121),G=t(49384),f={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},m=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=f[e],l=a[0],r=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,G.BE)(r)-(0,G.BE)(l):t.reverse?l-r:r-l}(e.key,e.values)>0?(0,l.jsx)(T,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(p,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return f[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],b=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in f})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var r=l[0],u=l[l.length-1],s=f[t].treshold;(!s||Math.abs(r-u)>(s||0))&&r!==u&&(a[t]=[r,u])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(_.s,{title:(0,G.p5)(e),url:"/url/".concat(encodeURIComponent((0,G.N0)(e))),children:(0,l.jsx)(g.Table,{columns:m,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},y=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2022-06-14T13:18:56.000Z","value":8}],"httpGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A+"}],"nmapGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T13:18:56.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"dependabotGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"E"}],"dependabotCount":[{"date":"2022-06-14T13:18:56.000Z","value":14}],"testsslExpireSoon":[{"date":"2022-06-14T13:18:56.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-14T13:18:56.000Z","value":"2022-07-18T06:24:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-14T13:18:56.000Z","value":2}],"trackersGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-14T13:18:56.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-14T13:18:56.000Z","value":0.3}],"lighthouse_performanceGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"E"}],"lighthouse_accessibility":[{"date":"2022-06-14T13:18:56.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T13:18:56.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-14T13:18:56.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T13:18:56.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"D"}],"declaration-a11y":[{"date":"2022-06-14T13:18:56.000Z","value":"C"}]},"https://beta.gouv.fr":{"404":[{"date":"2022-06-14T13:18:56.000Z","value":7}],"httpGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"D+"}],"nmapGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T13:18:56.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-14T13:18:56.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-14T13:18:56.000Z","value":"2022-08-27T07:18:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-14T13:18:56.000Z","value":2}],"trackersGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-14T13:18:56.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-14T13:18:56.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-14T13:18:56.000Z","value":0.91}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T13:18:56.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-14T13:18:56.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T13:18:56.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2022-06-14T13:18:56.000Z","value":"B"}],"declaration-a11y":[{"date":"2022-06-14T13:18:56.000Z","value":"C"}]},"https://les-aides.paysdelaloire.fr/":{"404":[{"date":"2022-06-14T14:23:49.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"nmapGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-14T14:23:49.000Z","value":true},{"date":"2022-06-26T03:02:13.000Z","value":false},{"date":"2022-08-07T02:59:30.000Z","value":true},{"date":"2022-09-04T03:15:42.000Z","value":false},{"date":"2022-09-25T03:29:49.000Z","value":true},{"date":"2022-10-16T03:22:23.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-14T14:23:49.000Z","value":"2022-06-26T00:30:00.000Z"},{"date":"2022-06-26T03:02:13.000Z","value":"2022-08-25T00:32:00.000Z"},{"date":"2022-09-04T03:15:42.000Z","value":"2022-10-24T00:37:00.000Z"},{"date":"2022-10-16T03:22:23.000Z","value":"2022-12-23T00:36:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"trackersGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"trackersCount":[{"date":"2022-06-14T14:23:49.000Z","value":16},{"date":"2022-08-07T02:59:30.000Z","value":17},{"date":"2022-09-04T03:15:42.000Z","value":16},{"date":"2022-10-16T03:22:23.000Z","value":19}],"lighthouse_performance":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"lighthouse_performanceGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-06-14T14:23:49.000Z","value":0.94},{"date":"2022-06-26T03:02:13.000Z","value":0.98},{"date":"2022-10-16T03:22:23.000Z","value":0.91}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T14:23:49.000Z","value":0.87},{"date":"2022-09-04T03:15:42.000Z","value":0.83},{"date":"2022-10-16T03:22:23.000Z","value":0.75}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"},{"date":"2022-09-04T03:15:42.000Z","value":"B"}],"lighthouse_seo":[{"date":"2022-06-14T14:23:49.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T14:23:49.000Z","value":0.33},{"date":"2022-09-04T03:15:42.000Z","value":0.2}],"lighthouse_pwaGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-06-15T09:21:14.000Z","value":"F"}],"declaration-rgpd":[]},"https://aideseco.mgcloud.fr/":{"404":[{"date":"2022-06-14T14:23:49.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"nmapGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-14T14:23:49.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-14T14:23:49.000Z","value":"2023-03-17T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"trackersGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"},{"date":"2022-06-15T09:21:14.000Z","value":"C"}],"trackersCount":[{"date":"2022-06-14T14:23:49.000Z","value":2},{"date":"2022-06-15T09:21:14.000Z","value":6}],"lighthouse_performance":[{"date":"2022-06-14T14:23:49.000Z","value":0.019536781311035156},{"date":"2022-06-15T09:21:14.000Z","value":0.006102561950683594},{"date":"2022-06-19T02:52:52.000Z","value":0.006148910522460938},{"date":"2022-06-26T03:02:13.000Z","value":0.005913162231445312},{"date":"2022-07-24T03:04:53.000Z","value":0.004791450500488281},{"date":"2022-08-14T03:09:53.000Z","value":0.0029651641845703123},{"date":"2022-08-21T03:06:55.000Z","value":0.0027738571166992187},{"date":"2022-08-28T03:18:15.000Z","value":0.002543067932128906},{"date":"2022-09-11T03:22:41.000Z","value":0.0016292572021484376},{"date":"2022-09-25T03:29:49.000Z","value":0.00142822265625},{"date":"2022-10-02T03:28:20.000Z","value":0.0014894485473632812},{"date":"2022-10-23T03:12:58.000Z","value":0.0014760971069335937},{"date":"2022-10-30T03:06:28.000Z","value":0.003937721252441406},{"date":"2022-11-13T02:32:20.411Z","value":0.003638458251953125}],"lighthouse_performanceGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-06-14T14:23:49.000Z","value":1},{"date":"2022-08-21T03:06:55.000Z","value":0.98}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T14:23:49.000Z","value":0.93},{"date":"2022-08-21T03:06:55.000Z","value":0.92},{"date":"2022-10-30T03:06:28.000Z","value":0.83}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"},{"date":"2022-10-30T03:06:28.000Z","value":"B"}],"lighthouse_seo":[{"date":"2022-06-14T14:23:49.000Z","value":0.91}],"lighthouse_seoGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T14:23:49.000Z","value":0.33},{"date":"2022-08-21T03:06:55.000Z","value":0.2}],"lighthouse_pwaGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-06-19T02:52:52.000Z","value":"F"}],"declaration-rgpd":[]},"https://ma-carqueiranne.mgcloud.fr/":{"404":[{"date":"2022-06-14T14:23:49.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"nmapGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-14T14:23:49.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-14T14:23:49.000Z","value":"2023-03-17T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"trackersGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"},{"date":"2022-06-15T09:21:14.000Z","value":"C"}],"trackersCount":[{"date":"2022-06-14T14:23:49.000Z","value":2},{"date":"2022-06-15T09:21:14.000Z","value":6}],"lighthouse_performance":[{"date":"2022-06-14T14:23:49.000Z","value":0.04797515869140625},{"date":"2022-06-15T09:21:14.000Z","value":0.034503746032714847},{"date":"2022-06-19T02:52:52.000Z","value":0.034546279907226564},{"date":"2022-06-26T03:02:13.000Z","value":0.034307670593261716},{"date":"2022-07-10T03:09:43.000Z","value":0},{"date":"2022-08-07T02:59:30.000Z","value":0.0312286376953125},{"date":"2022-09-18T03:40:12.000Z","value":0.02976055145263672},{"date":"2022-10-09T03:08:25.000Z","value":0.02969074249267578}],"lighthouse_performanceGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-06-14T14:23:49.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T14:23:49.000Z","value":0.93},{"date":"2022-09-18T03:40:12.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-14T14:23:49.000Z","value":0.88},{"date":"2022-06-15T09:21:14.000Z","value":0.91}],"lighthouse_seoGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T14:23:49.000Z","value":0.33},{"date":"2022-09-18T03:40:12.000Z","value":0.2}],"lighthouse_pwaGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"declaration-rgpd":[]},"https://subventions.fipd.interieur.gouv.fr/":{"404":[{"date":"2022-06-14T14:23:49.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"D"}],"nmapGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-14T14:23:49.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-14T14:23:49.000Z","value":"2023-01-17T22:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"T"}],"cookiesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"trackersGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"trackersCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"lighthouse_performance":[{"date":"2022-06-14T14:23:49.000Z","value":0.09349689483642579},{"date":"2022-06-15T09:21:14.000Z","value":0.09346141815185546},{"date":"2022-06-19T02:52:52.000Z","value":0.09350242614746093},{"date":"2022-06-26T03:02:13.000Z","value":0.0935049057006836}],"lighthouse_performanceGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-06-14T14:23:49.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T14:23:49.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-14T14:23:49.000Z","value":0.89}],"lighthouse_seoGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T14:23:49.000Z","value":0.33}],"lighthouse_pwaGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"declaration-rgpd":[]},"https://aides.cud.fr/":{"404":[{"date":"2022-06-14T14:23:49.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"nmapGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-14T14:23:49.000Z","value":false},{"date":"2022-08-14T03:09:53.000Z","value":true}],"testsslExpireDate":[{"date":"2022-06-14T14:23:49.000Z","value":"2022-09-06T08:39:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"cookiesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"trackersGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"C"}],"trackersCount":[{"date":"2022-06-14T14:23:49.000Z","value":6}],"lighthouse_performance":[{"date":"2022-06-14T14:23:49.000Z","value":0.030810546875},{"date":"2022-06-15T09:21:14.000Z","value":0.03061962127685547},{"date":"2022-06-19T02:52:52.000Z","value":0.030808448791503906},{"date":"2022-06-26T03:02:13.000Z","value":0.030584335327148438}],"lighthouse_performanceGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-06-14T14:23:49.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T14:23:49.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-14T14:23:49.000Z","value":0.91}],"lighthouse_seoGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T14:23:49.000Z","value":0.33}],"lighthouse_pwaGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"declaration-rgpd":[]},"https://portaildesaides.mairie-saintpaul.fr/":{"404":[{"date":"2022-06-14T14:23:49.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"nmapGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-14T14:23:49.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-14T14:23:49.000Z","value":"2023-06-16T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"trackersGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"},{"date":"2022-06-15T09:21:14.000Z","value":"C"}],"trackersCount":[{"date":"2022-06-14T14:23:49.000Z","value":2},{"date":"2022-06-15T09:21:14.000Z","value":6}],"lighthouse_performance":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"lighthouse_performanceGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-06-14T14:23:49.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T14:23:49.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-14T14:23:49.000Z","value":0.88},{"date":"2022-06-15T09:21:14.000Z","value":0.91}],"lighthouse_seoGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T14:23:49.000Z","value":0.33}],"lighthouse_pwaGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-06-19T02:52:52.000Z","value":"F"}],"declaration-rgpd":[]},"https://aidesdepartementales.lot.fr/aides":{"404":[{"date":"2022-06-14T14:23:49.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"D"}],"nmapGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-14T14:23:49.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-14T14:23:49.000Z","value":"2023-02-25T09:17:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"T"}],"cookiesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"trackersGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"trackersCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"lighthouse_performance":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"lighthouse_performanceGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-06-14T14:23:49.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T14:23:49.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-14T14:23:49.000Z","value":0.91}],"lighthouse_seoGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T14:23:49.000Z","value":0.33}],"lighthouse_pwaGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-06-15T09:21:14.000Z","value":"F"}],"declaration-rgpd":[]},"https://subventions.ha-py.fr/":{"404":[{"date":"2022-06-14T14:23:49.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"nmapGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-14T14:23:49.000Z","value":false},{"date":"2022-09-18T03:40:12.000Z","value":true}],"testsslExpireDate":[{"date":"2022-06-14T14:23:49.000Z","value":"2022-10-14T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"trackersGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"trackersCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"lighthouse_performance":[{"date":"2022-06-14T14:23:49.000Z","value":0.058549118041992185},{"date":"2022-06-15T09:21:14.000Z","value":0.015695762634277344},{"date":"2022-06-19T02:52:52.000Z","value":0.058571243286132814},{"date":"2022-06-26T03:02:13.000Z","value":0.05838203430175781}],"lighthouse_performanceGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-06-14T14:23:49.000Z","value":0.97}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T14:23:49.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-14T14:23:49.000Z","value":0.89}],"lighthouse_seoGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T14:23:49.000Z","value":0.33}],"lighthouse_pwaGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"declaration-rgpd":[]},"https://monespace-aides.normandie.fr/":{"404":[{"date":"2022-06-14T14:23:49.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"D+"}],"nmapGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-14T14:23:49.000Z","value":false},{"date":"2022-10-23T03:12:58.000Z","value":true}],"testsslExpireDate":[{"date":"2022-06-14T14:23:49.000Z","value":"2022-11-15T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"trackersGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"C"}],"trackersCount":[{"date":"2022-06-14T14:23:49.000Z","value":6},{"date":"2022-06-26T03:02:13.000Z","value":4}],"lighthouse_performance":[{"date":"2022-06-14T14:23:49.000Z","value":0.004989433288574219},{"date":"2022-06-15T09:21:14.000Z","value":0.005036544799804687},{"date":"2022-06-19T02:52:52.000Z","value":0.005035972595214844},{"date":"2022-06-26T03:02:13.000Z","value":0.005084419250488281}],"lighthouse_performanceGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-06-14T14:23:49.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T14:23:49.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-14T14:23:49.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T14:23:49.000Z","value":0.33}],"lighthouse_pwaGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"declaration-rgpd":[]},"https://fondscommerce.anct.gouv.fr/":{"404":[{"date":"2022-06-14T14:23:49.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"B"}],"nmapGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-14T14:23:49.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-14T14:23:49.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-14T14:23:49.000Z","value":"2023-02-28T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"trackersGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"C"}],"trackersCount":[{"date":"2022-06-14T14:23:49.000Z","value":6}],"lighthouse_performance":[{"date":"2022-06-14T14:23:49.000Z","value":0}],"lighthouse_performanceGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-06-14T14:23:49.000Z","value":0.98}],"lighthouse_accessibilityGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-14T14:23:49.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-14T14:23:49.000Z","value":0.91}],"lighthouse_seoGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-14T14:23:49.000Z","value":0.33}],"lighthouse_pwaGrade":[{"date":"2022-06-14T14:23:49.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-06-19T02:52:52.000Z","value":"F"}],"declaration-rgpd":[]}}'),A=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u(),{children:(0,l.jsx)("title",{children:"DashLord - evolutions"})}),(0,l.jsx)(b,{trends:y})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return Z}});var l=t(85893),r=(t(67294),t(94184)),u=t.n(r),s=t(659),d=t(73973),o=t(83206),i=t(41664),n=t.n(i),v=t(75670),T=t.n(v),Z=function(e){var a=e.title,t=e.children,r=e.info,i=e.url,v=e.urlText,Z=void 0===v?"":v,h=e.className,c=e.isExternal,p=void 0!==c&&c;return(0,l.jsxs)("div",{className:u()(T().container,h),children:[(0,l.jsxs)("div",{className:T().banner,children:[(0,l.jsx)("h5",{className:T().mainTitle,children:a}),r&&(0,l.jsx)(s.Z,{overlay:r,children:(0,l.jsx)(d.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),i&&(p?(0,l.jsx)("a",{style:{float:"right"},href:i,target:"_blank",rel:"noreferrer noopener",children:Z}):(0,l.jsx)(n(),{prefetch:!1,href:i,children:(0,l.jsxs)("a",{style:{float:"right"},children:[Z,(0,l.jsx)(o.Z,{})]})}))]}),(0,l.jsx)("div",{className:T().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return a=21105,e(e.s=a);var a}));var a=e.O();_N_E=a}]);