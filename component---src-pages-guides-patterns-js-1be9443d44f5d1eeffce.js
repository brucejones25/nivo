(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[2707],{45395:function(e,t,n){"use strict";var r,o,i=n(5817),a=n(39978),l=n(51302);t.Z=a.ZP.div.withConfig({displayName:"PageContent",componentId:"sc-5c9r0p-0"})(["margin:0 50px;position:relative;"," ",""],l.Z.tablet(r||(r=(0,i.Z)(["\n        & {\n            margin: 0 30px;\n        }\n    "]))),l.Z.mobile(o||(o=(0,i.Z)(["\n        & {\n            margin: 0 15px;\n        }\n    "]))))},80500:function(e,t,n){"use strict";n.d(t,{Xh:function(){return s},rm:function(){return c},Zb:function(){return d}});var r,o,i=n(5817),a=n(39978),l=n(51302),s=a.ZP.div.withConfig({displayName:"styled__FullWidthBanner",componentId:"sc-1aonzv1-0"})(["background:",";margin-bottom:40px;padding:20px;"],(function(e){return e.theme.colors.cardBackground})),c=a.ZP.div.withConfig({displayName:"styled__DescriptionBlock",componentId:"sc-1aonzv1-1"})(["max-width:800px;margin:0 auto 50px;"," ",""],l.Z.tablet(r||(r=(0,i.Z)(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "]))),l.Z.mobile(o||(o=(0,i.Z)(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "])))),d=a.ZP.div.withConfig({displayName:"styled__Card",componentId:"sc-1aonzv1-2"})(["background:",";box-shadow:",";"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.cardShadow}))},62443:function(e,t,n){"use strict";n.d(t,{p_:function(){return W},F6:function(){return B},lG:function(){return j},XB:function(){return S}});var r=n(27378),o=n(52770),i=n(44365),a=n(47425),l=n(58679),s=n(89193),c=n(24246),d=n(10832),u=n(36833),p=n(52535),f=n(45638);function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.layer,n=e.fillOpacity,i=e.borderWidth,a=e.getBorderColor,d=e.isInteractive,u=e.tooltip,p=(0,s.lL)(),f=p.showTooltipFromEvent,m=p.hideTooltip,g=(0,r.useCallback)((function(e){f((0,r.createElement)(u,{layer:t}),e,"left")}),[f,t]),h=(0,o.tf)(),y=h.animate,b=h.config,v=(0,o.NS)(t.path),x=(0,l.useSpring)({color:t.color,config:b,immediate:!y});return(0,c.jsx)(l.q.path,{d:v,fill:t.fill?t.fill:x.color,fillOpacity:n,stroke:a(t),strokeWidth:i,onMouseMove:d?g:void 0,onMouseEnter:d?g:void 0,onMouseLeave:d?m:void 0})},v=function(e){var t=e.layers,n=e.fillOpacity,r=e.borderWidth,o=e.getBorderColor,i=e.isInteractive,a=e.tooltip;return(0,c.jsx)("g",{children:t.map((function(e,t){return(0,c.jsx)(b,{layer:e,getBorderColor:o,borderWidth:r,fillOpacity:n,isInteractive:i,tooltip:a},t)}))})},x=function(e,t){var n=e.y2;return"center"===t?n=e.y1+(e.y2-e.y1)/2:"start"===t&&(n=e.y1),n},k=function(e){var t=e.data,n=e.dotComponent,o=e.position,i=e.getSize,a=e.getColor,l=e.getBorderWidth,s=e.getBorderColor;return(0,c.jsx)(c.Fragment,{children:t.map((function(e,t){return(0,r.createElement)(n,{key:t,datum:e,x:e.x,y:x(e,o),size:i(e),color:a(e),borderWidth:l(e),borderColor:s(e)})}))})};function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=function(e){var t=e.slice,n=e.height,o=e.tooltip,i=C((0,r.useState)(!1),2),a=i[0],l=i[1],d=(0,s.lL)(),u=d.showTooltipFromEvent,p=d.hideTooltip,f=(0,r.useCallback)((function(e){l(!0),u((0,r.createElement)(o,{slice:t}),e,"left")}),[l,u,o,t]),m=(0,r.useCallback)((function(){l(!1),p()}),[l,p]);return(0,c.jsxs)("g",{transform:"translate(".concat(t.x,", 0)"),children:[a&&(0,c.jsx)("line",{x1:0,x2:0,y1:0,y2:n,stroke:"#000",strokeOpacity:.35,strokeWidth:1}),(0,c.jsx)("rect",{x:-20,width:40,height:n,fill:"#000",fillOpacity:0,onMouseEnter:f,onMouseMove:f,onMouseLeave:m})]})},P=function(e){var t=e.slices,n=e.height,r=e.tooltip;return(0,c.jsx)("g",{children:t.map((function(e){return(0,c.jsx)(E,{slice:e,height:n,tooltip:r},e.index)}))})},j={label:"id",order:"none",offsetType:"wiggle",curve:"catmullRom",axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,colors:{scheme:"nivo"},fillOpacity:1,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableDots:!1,dotPosition:"center",dotComponent:function(e){var t=e.x,n=e.y,r=e.size,i=e.color,a=e.borderWidth,s=e.borderColor,d=(0,o.tf)(),u=d.animate,p=d.config,f=(0,l.useSpring)({x:t,y:n,radius:.5*r,color:i,config:p,immediate:!u});return(0,c.jsx)(l.q.circle,{cx:f.x,cy:f.y,r:f.radius,fill:f.color,strokeWidth:a,stroke:s})},dotSize:6,dotColor:{from:"color"},dotBorderWidth:0,dotBorderColor:{from:"color"},isInteractive:!0,tooltip:function(e){var t=e.layer;return(0,c.jsx)(s._5,{id:t.label,enableChip:!0,color:t.color})},enableStackTooltip:!0,stackTooltip:function(e){var t=e.slice,n=(0,r.useMemo)((function(){return t.stack.map((function(e){return[(0,c.jsx)(s.Af,{color:e.color},e.layerId),e.layerLabel,e.formattedValue]}))}),[t]);return(0,c.jsx)(s.zI,{rows:n})},legends:[],legendLabel:"id",role:"application"},S=y(y({},j),{},{layers:["grid","axes","layers","dots","slices","legends"],defs:[],fill:[],animate:!0,motionConfig:"default",role:"img",isFocusable:!1}),O=function(e){var t=e.data,n=e.keys,l=e.label,s=e.valueFormat,m=e.offsetType,g=e.order,h=e.curve,b=e.layers,x=void 0===b?S.layers:b,w=e.width,E=e.height,O=e.margin,B=e.axisTop,W=e.axisRight,_=e.axisBottom,I=void 0===_?S.axisBottom:_,D=e.axisLeft,T=void 0===D?S.axisLeft:D,z=e.enableGridX,Z=void 0===z?S.enableGridX:z,L=e.enableGridY,N=void 0===L?S.enableGridY:L,M=e.colors,q=e.fillOpacity,V=void 0===q?S.fillOpacity:q,A=e.borderWidth,H=void 0===A?S.borderWidth:A,F=e.borderColor,G=e.defs,U=void 0===G?S.defs:G,X=e.fill,J=void 0===X?S.fill:X,R=e.enableDots,Q=void 0===R?S.enableDots:R,Y=e.dotPosition,$=void 0===Y?S.dotPosition:Y,K=e.dotComponent,ee=void 0===K?S.dotComponent:K,te=e.dotSize,ne=e.dotColor,re=e.dotBorderWidth,oe=e.dotBorderColor,ie=e.isInteractive,ae=void 0===ie?S.isInteractive:ie,le=e.tooltip,se=void 0===le?S.tooltip:le,ce=e.enableStackTooltip,de=void 0===ce?S.enableStackTooltip:ce,ue=e.stackTooltip,pe=void 0===ue?S.stackTooltip:ue,fe=e.legends,me=void 0===fe?S.legends:fe,ge=e.role,he=e.ariaLabel,ye=e.ariaLabelledBy,be=e.ariaDescribedBy,ve=(0,o.Bs)(w,E,O),xe=ve.margin,ke=ve.innerWidth,we=ve.innerHeight,Ce=ve.outerWidth,Ee=ve.outerHeight,Pe=function(e){var t=e.width,n=e.height,i=e.data,a=e.keys,l=e.label,s=void 0===l?j.label:l,c=e.valueFormat,m=e.offsetType,g=void 0===m?j.offsetType:m,h=e.order,b=void 0===h?j.order:h,v=e.curve,x=void 0===v?j.curve:v,k=e.colors,w=void 0===k?j.colors:k,E=e.borderColor,P=void 0===E?j.borderColor:E,S=e.dotSize,O=void 0===S?j.dotSize:S,B=e.dotColor,W=void 0===B?j.dotColor:B,_=e.dotBorderWidth,I=void 0===_?j.dotBorderWidth:_,D=e.dotBorderColor,T=void 0===D?j.dotBorderColor:D,z=(0,o.d4)(x),Z=(0,r.useMemo)((function(){return(0,d.SO)().x((function(e){return e.x})).y0((function(e){return e.y1})).y1((function(e){return e.y2})).curve(z)}),[z]),L=(0,r.useMemo)((function(){return(0,d.kn)().keys(a).offset((0,o.kI)(g)).order((0,o.WC)(b))}),[a,g,b]),N=C((0,r.useMemo)((function(){var e=[],r=[],o=L(i).map((function(t){return t.map((function(n){return e.push(n[0]),r.push(n[1]),y(y({},n),{},{value:n.data[t.key]})}))})),a=Math.min.apply(Math,e),l=Math.max.apply(Math,r);return[o,(0,u.x)().domain(Array.from({length:i.length},(function(e,t){return t}))).range([0,t]),(0,p.Z)().domain([a,l]).range([n,0])]}),[L,i,t,n]),3),M=N[0],q=N[1],V=N[2],A=(0,o.Fg)(),H=(0,f.U)(w,"id"),F=(0,f.Bf)(P,A),G=(0,r.useMemo)((function(){return"function"==typeof O?O:function(){return O}}),[O]),U=(0,f.Bf)(W,A),X=(0,r.useMemo)((function(){return"function"==typeof I?I:function(){return I}}),[I]),J=(0,f.Bf)(T,A),R=(0,o.LR)(s),Q=(0,o.O_)(c),Y=(0,r.useMemo)((function(){return M.map((function(e,t){var n=e.map((function(e,n){return{layerId:a[t],layerLabel:"",index:n,color:"",x:q(n),value:e.value,formattedValue:Q(e.value),y1:V(e[0]),y2:V(e[1])}})),r={id:a[t],path:Z(n)},o=y(y({},r),{},{label:R(r),color:H(r)});return y(y({},o),{},{data:n.map((function(e){return e.layerLabel=o.label,e.color=o.color,e}))})}))}),[M,a,R,Z,H,q,V,Q]),$=(0,r.useMemo)((function(){return Array.from({length:i.length},(function(e,t){var n=Y.map((function(e){return e.data[t]})).sort((function(e,t){return e.y2-t.y2}));return{index:t,x:Y[0].data[t].x,stack:n}}))}),[i.length,Y]),K=(0,r.useMemo)((function(){return{xScale:q,yScale:V,layers:Y,slices:$}}),[q,V,Y,$]);return{xScale:q,yScale:V,layers:Y,slices:$,getBorderColor:F,getDotSize:G,getDotColor:U,getDotBorderWidth:X,getDotBorderColor:J,layerContext:K}}({width:ke,height:we,data:t,keys:n,label:l,valueFormat:s,offsetType:m,order:g,curve:h,colors:M,borderColor:F,dotSize:te,dotColor:ne,dotBorderWidth:re,dotBorderColor:oe}),je=Pe.xScale,Se=Pe.yScale,Oe=Pe.layers,Be=Pe.slices,We=Pe.getBorderColor,_e=Pe.getDotSize,Ie=Pe.getDotColor,De=Pe.getDotBorderWidth,Te=Pe.getDotBorderColor,ze=Pe.layerContext,Ze=(0,o.yU)(U,Oe,J),Le={grid:null,axes:null,layers:null,dots:null,slices:null,legends:null};return x.includes("grid")&&(Le.grid=(0,c.jsx)(i.rj,{width:ke,height:we,xScale:Z?je:null,yScale:N?Se:null},"grid")),x.includes("axes")&&(Le.axes=(0,c.jsx)(i.dk,{xScale:je,yScale:Se,width:ke,height:we,top:B,right:W,bottom:I,left:T},"axes")),x.includes("layers")&&(Le.layers=(0,c.jsx)(v,{layers:Oe,fillOpacity:V,borderWidth:H,getBorderColor:We,isInteractive:ae,tooltip:se},"layers")),x.includes("dots")&&Q&&(Le.dots=(0,c.jsx)(r.Fragment,{children:Oe.map((function(e){return(0,c.jsx)(k,{id:e.id,color:e.color,data:e.data,dotComponent:ee,position:$,getSize:_e,getColor:Ie,getBorderWidth:De,getBorderColor:Te},e.id)}))},"dots")),x.includes("slices")&&ae&&de&&(Le.slices=(0,c.jsx)(P,{slices:Be,height:we,tooltip:pe},"slices")),x.includes("legends")&&(Le.legends=(0,c.jsx)(r.Fragment,{children:me.map((function(e,t){var n=Oe.map((function(e){return{id:e.id,label:e.label,color:e.color,fill:e.fill}})).reverse();return(0,c.jsx)(a.$6,y(y({},e),{},{containerWidth:ke,containerHeight:we,data:n}),t)}))},"legends")),(0,c.jsx)(o.tM,{width:Ce,height:Ee,margin:xe,defs:Ze,role:ge,ariaLabel:he,ariaLabelledBy:ye,ariaDescribedBy:be,children:x.map((function(e,t){var n;return"function"==typeof e?(0,c.jsx)(r.Fragment,{children:(0,r.createElement)(e,ze)},t):null!==(n=null==Le?void 0:Le[e])&&void 0!==n?n:null}))})},B=function(e){var t=e.isInteractive,n=void 0===t?S.isInteractive:t,r=e.animate,i=void 0===r?S.animate:r,a=e.motionConfig,l=void 0===a?S.motionConfig:a,s=e.theme,d=e.renderWrapper,u=m(e,["isInteractive","animate","motionConfig","theme","renderWrapper"]);return(0,c.jsx)(o.W2,{animate:i,isInteractive:n,motionConfig:l,renderWrapper:d,theme:s,children:(0,c.jsx)(O,y({isInteractive:n},u))})},W=function(e){return(0,c.jsx)(o.d,{children:function(t){var n=t.width,r=t.height;return(0,c.jsx)(B,y({width:n,height:r},e))}})}},20987:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var r,o,i=n(27378),a=n(25414),l=n(80757),s=n(95546),c=n(45395),d=n(52770),u=n(74186),p=n(62443),f=n(12314),m=n(38681),g=n(80500),h=n(90230),y=function(){var e=(0,h.F)();return i.createElement(g.Xh,null,i.createElement("div",{className:"guide__illustrations"},i.createElement("div",{className:"guide__illustrations__item"},i.createElement(p.p_,{margin:{top:-2,right:-2,bottom:-2,left:-2},data:(0,m.aw)(["a","b","c"],{size:7}),indexBy:"country",keys:["a","b","c"],offsetType:"expand",axisLeft:null,axisBottom:null,enableGridX:!1,defs:[(0,d.l0)("example1.lines.1",{rotation:45,lineWidth:4,spacing:6,background:"transparent",color:"inherit"}),(0,d.l0)("example1.lines.2",{rotation:-45,lineWidth:1,spacing:3,background:"transparent",color:"inherit"}),(0,d.Qr)("example1.dots",{background:"transparent",color:"inherit",size:4,padding:0,stagger:!0})],fill:[{match:{id:"a"},id:"example1.lines.1"},{match:{id:"b"},id:"example1.dots"},{match:{id:"c"},id:"example1.lines.2"}],borderWidth:2,borderColor:"#333",isInteractive:!1,animate:!1,theme:e.nivo})),i.createElement("div",{className:"guide__illustrations__item"},i.createElement(u.jM,{margin:{top:15,right:-2,bottom:-2,left:-2},data:(0,m.aw)(["a","b","c"],{size:7}),indexBy:"country",keys:["a","b","c"],colors:{scheme:"spectral"},padding:.3,axisLeft:null,axisBottom:null,enableGridY:!1,enableLabel:!1,colorBy:"index",defs:[(0,d.l0)("example2.lines",{rotation:-45,lineWidth:4,spacing:6,background:"transparent",color:"inherit"}),(0,d.Qr)("example2.dots",{background:"transparent",color:"inherit",size:4,padding:0,stagger:!0}),(0,d.wU)("example2.squares",{background:"transparent",color:"inherit",stagger:!0,size:8,padding:0})],fill:[{match:function(e){return e.data.index%3==0},id:"example2.lines"},{match:function(e){return e.data.index%3==1},id:"example2.dots"},{match:function(e){return e.data.index%3==2},id:"example2.squares"}],borderWidth:2,borderColor:"inherit",isInteractive:!1,animate:!1,theme:e.nivo})),i.createElement("div",{className:"guide__illustrations__item"},i.createElement(f.R0,{margin:{top:-2,right:-2,bottom:-2,left:-2},data:{country:"root",children:(0,m.aw)(["value"],{size:9})},identity:"country",leavesOnly:!0,colors:{scheme:"spectral"},colorBy:"id",borderWidth:4,outerPadding:10,innerPadding:4,nodeOpacity:1,borderColor:"inherit",isInteractive:!1,animate:!1,enableLabel:!1,enableParentLabel:!1,defs:[(0,d.l0)("example3.lines",{rotation:-45,lineWidth:4,spacing:6,background:"transparent",color:"inherit"})],fill:[{match:"*",id:"example3.lines"}],theme:e.nivo})),i.createElement("div",{className:"guide__illustrations__legend"},"patterns applied to various nivo components.")))},b=n(37308),v="\nimport { patternDotsDef, patternSquaresDef } from '@nivo/core'\nimport { Stream } from '@nivo/stream'\n\nconst MyChart = () => (\n    <Stream\n        data={/*…*/}\n        keys={['react', 'vue', 'elm']}\n        // 1. defining patterns\n        defs={[\n            // using helpers (cannot be used with http rendering API)\n            // will use color from current element\n            patternDotsDef('dots', { color: 'inherit' }),\n            // will use background color from current element\n            patternSquaresDef('squares', { background: 'inherit' }),\n            // using plain object\n            { id: 'custom', type: 'patternSquares', size: 24 },\n        ]}\n        // 2. defining rules to apply those patterns\n        fill={[\n            // match using query object\n            // (can be used with http rendering API\n            { match: { id: 'react' }, id: 'dots' },\n            // match using function\n            // (cannot be used with http rendering API\n            { match: d => d.id === 'vue', id: 'squares' },\n            // match all, will only affect 'elm' because once\n            // a rule match, others are skipped\n            // (can be used with http rendering API\n            { match: '*', id: 'custom' },\n        ]}\n    />\n)\n".trim(),x=function(){return i.createElement(b.y,{code:v,language:"jsx"})},k=n(5817),w=n(39978),C=n(51302),E=n(95155),P=function(e){var t=e.title,n=e.expandedByDefault,r=void 0!==n&&n,o=e.children,a=(0,i.useState)(r),l=a[0],s=a[1],c=(0,i.useCallback)((function(){s((function(e){return!e}))}),[s]);return i.createElement(j,{isExpanded:l},i.createElement(S,{className:"no-select",onClick:c},i.createElement(O,null,t),l?i.createElement(E.y$z,null):i.createElement(E.gwH,null)),l&&i.createElement("div",{className:"card_body"},o))},j=(0,w.ZP)(g.Zb).withConfig({displayName:"CollapsibleCard__Wrapper",componentId:"sc-1jg0pc-0"})(["margin-bottom:",";svg{font-size:26px;}"],(function(e){return e.isExpanded?"30px":0})),S=w.ZP.div.withConfig({displayName:"CollapsibleCard__Header",componentId:"sc-1jg0pc-1"})(["height:52px;width:100%;position:relative;padding:0 24px;cursor:pointer;color:",";display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.borderLight})),O=w.ZP.h3.withConfig({displayName:"CollapsibleCard__Title",componentId:"sc-1jg0pc-2"})(["margin:0;color:",";"],(function(e){return e.theme.colors.text})),B=n(83123),W=w.ZP.div.withConfig({displayName:"GuideDemoBlock__Container",componentId:"sc-1j35ki3-0"})(["display:grid;grid-template-columns:4fr 6fr;grid-template-rows:4fr 6fr;max-height:600px;",""],C.Z.mobile(r||(r=(0,k.Z)(["\n        & {\n            display: block;\n            max-height: none;\n        }\n    "])))),_=w.ZP.div.withConfig({displayName:"GuideDemoBlock__Preview",componentId:"sc-1j35ki3-1"})(["display:flex;align-items:center;justify-content:center;background:",";",""],(function(e){return e.theme.colors.cardAltBackground}),C.Z.mobile(o||(o=(0,k.Z)(["\n        & {\n            padding: 20px 0;\n            border-bottom: 1px solid ",";\n        }\n    "])),(function(e){return e.theme.colors.borderLight}))),I=w.ZP.div.withConfig({displayName:"GuideDemoBlock__Code",componentId:"sc-1j35ki3-2"})(["grid-column-start:1;grid-row-start:2;overflow-x:hidden;overflow-y:auto;border-top:1px solid ",";"],(function(e){return e.theme.colors.borderLight})),D=w.ZP.div.withConfig({displayName:"GuideDemoBlock__Controls",componentId:"sc-1j35ki3-3"})(["background:",";border-left:1px solid ",";grid-row-start:1;grid-row-end:3;grid-column-start:2;overflow-x:hidden;overflow-y:auto;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.borderLight})),T=function(e){var t=e.title,n=e.initialSettings,r=e.controls,o=e.generateCode,a=e.children,l=(0,i.useState)(n),s=l[0],c=l[1];return i.createElement(P,{title:t,expandedByDefault:!0},i.createElement(W,null,i.createElement(_,null,a(s)),i.createElement(D,null,i.createElement(B.Z,{name:t,controls:r,settings:s,onChange:c})),i.createElement(I,null,i.createElement(b.y,{language:"jsx",code:o(s)}))))},z=120,Z="dots-pattern",L=[{name:"size",type:"number",help:"dots size.",controlType:"range",defaultValue:d.W4.defaultProps.size,controlOptions:{unit:"px",min:1,max:24}},{name:"padding",type:"number",help:"padding between dots.",controlType:"range",defaultValue:d.W4.defaultProps.padding,controlOptions:{unit:"px",min:0,max:36}},{name:"stagger",type:"boolean",help:"staggered dots.",defaultValue:d.W4.defaultProps.stagger,controlType:"switch"},{name:"background",type:"string",help:"pattern background color.",defaultValue:d.W4.defaultProps.background,controlType:"colorPicker"},{name:"color",type:"string",help:"dots color.",defaultValue:d.W4.defaultProps.color,controlType:"colorPicker"}],N={size:d.W4.defaultProps.size,padding:d.W4.defaultProps.padding,stagger:d.W4.defaultProps.stagger,background:d.W4.defaultProps.background,color:d.W4.defaultProps.color},M=function(e){return("\n// helper\npatternDotsDef('dots-pattern', "+JSON.stringify(e,null,"  ")+")\n// plain object\n"+JSON.stringify((0,d.Qr)(Z,e),null,"    ")+"\n").trim()},q=function(){return i.createElement(T,{title:"Dots",controls:L,initialSettings:N,generateCode:M},(function(e){return i.createElement("svg",{width:z,height:z},i.createElement(d.eP,{defs:[(0,d.Qr)(Z,e)]}),i.createElement("rect",{width:z,height:z,fill:"url(#dots-pattern)"}))}))},V=120,A="lines-pattern",H=[{name:"spacing",type:"number",help:"spacing between lines.",defaultValue:d.rr.defaultProps.spacing,controlType:"range",controlOptions:{min:0,max:32}},{name:"rotation",type:"number",help:"lines rotation.",defaultValue:d.rr.defaultProps.rotation,controlType:"angle",controlOptions:{start:90,min:-360,max:360}},{name:"lineWidth",type:"number",help:"lines thickness.",defaultValue:d.rr.defaultProps.lineWidth,controlType:"lineWidth",controlOptions:{min:1}},{name:"background",type:"string",help:"pattern background color.",defaultValue:d.rr.defaultProps.background,controlType:"colorPicker"},{name:"color",type:"string",help:"lines color.",defaultValue:d.rr.defaultProps.color,controlType:"colorPicker"}],F={spacing:d.rr.defaultProps.spacing,rotation:d.rr.defaultProps.rotation,lineWidth:d.rr.defaultProps.lineWidth,background:d.rr.defaultProps.background,color:d.rr.defaultProps.color},G=function(e){return("\n// helper\npatternLinesDef('lines-pattern', "+JSON.stringify(e,null,"  ")+")\n// plain object\n"+JSON.stringify((0,d.l0)(A,e),null,"    ")+"\n").trim()},U=function(){return i.createElement(T,{title:"Lines",controls:H,initialSettings:F,generateCode:G},(function(e){return i.createElement("svg",{width:V,height:V},i.createElement(d.eP,{defs:[(0,d.l0)(A,e)]}),i.createElement("rect",{width:V,height:V,fill:"url(#lines-pattern)"}))}))},X=120,J="squares-pattern",R=[{name:"size",type:"number",help:"squares size.",defaultValue:d.Ho.defaultProps.size,controlType:"range",controlOptions:{unit:"px",min:1,max:24}},{name:"padding",type:"number",help:"padding between squares.",defaultValue:d.Ho.defaultProps.padding,controlType:"range",controlOptions:{unit:"px",min:0,max:36}},{name:"stagger",type:"boolean",help:"staggered squares.",defaultValue:d.Ho.defaultProps.stagger,controlType:"switch"},{name:"background",type:"string",help:"pattern background color.",defaultValue:d.Ho.defaultProps.background,controlType:"colorPicker"},{name:"color",type:"string",help:"squares color.",defaultValue:d.Ho.defaultProps.color,controlType:"colorPicker"}],Q={size:d.Ho.defaultProps.size,padding:d.Ho.defaultProps.padding,stagger:d.Ho.defaultProps.stagger,background:d.Ho.defaultProps.background,color:d.Ho.defaultProps.color},Y=function(e){return("\n// helper\npatternSquaresDef('squares-pattern', "+JSON.stringify(e,null,"  ")+")\n// plain object\n"+JSON.stringify((0,d.wU)(J,e),null,"    ")+"\n").trim()},$=function(){return i.createElement(T,{title:"Squares",controls:R,initialSettings:Q,generateCode:Y},(function(e){return i.createElement("svg",{width:X,height:X},i.createElement(d.eP,{defs:[(0,d.wU)(J,e)]}),i.createElement("rect",{width:X,height:X,fill:"url(#squares-pattern)"}))}))},K=function(){return i.createElement(l.Z,null,i.createElement(s.p,{title:"Patterns Guide"}),i.createElement(c.Z,null,i.createElement("div",{className:"guide__header"},i.createElement("h1",null,"Patterns"))),i.createElement(g.rm,null,i.createElement("h2",null,"Purpose"),i.createElement("p",null,"Using patterns can be useful to ",i.createElement("strong",null,"group similar items"),", for example imagine you want to build a pie chart displaying various foods, you can use a color scale to assign a unique color to each one, then you can group vegetables/fruits/meats/… using a similar pattern for each group (while keeping color variation)."),i.createElement("h2",null,"Using patterns in nivo"),i.createElement("p",null,"Defining patterns in nivo is a ",i.createElement("strong",null,"2 steps process"),", first you'll have to declare available definitions (the same goes for"," ",i.createElement(a.Link,{to:"/guides/gradients"},"gradients"),") using dedicated helpers or providing plain objects.",i.createElement("br",null),"Then you must define the rules to apply those definitions using the"," ",i.createElement("code",null,"fill")," property.")),i.createElement(y,null),i.createElement(g.rm,null,i.createElement("p",null,i.createElement("strong",null,"Separating pattern definitions from application")," allows us to reuse those in various places, like fills and borders, and while maintaining a direct mapping for a bar chart with 5 items can be simple enough, when you're dealing with a complex heatmap with tens of nodes it can quickly become cumbersome. Doing so also provides the ability to"," ",i.createElement("strong",null,"use a pattern depending on chart element value"),". Last but not least,"," ",i.createElement("strong",null,"patterns colors can be inherited")," from current node ones."),i.createElement("h2",null,"Example"),i.createElement(x,null),i.createElement("h2",null,"Available patterns"),i.createElement(q,null),i.createElement(U,null),i.createElement($,null),i.createElement("h2",null,"Known limitations"),i.createElement("p",null,"Please be aware that pattern usage has some limitations, it's"," ",i.createElement("strong",null,"not supported for canvas")," chart implementations for now, and tooltips involving colored chips will use plain element color.")))}},85630:function(e){e.exports=function(e){return e.split("")}},39158:function(e,t,n){var r=n(75733);e.exports=function(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:r(e,t,n)}},62690:function(e,t,n){var r=n(39158),o=n(25348),i=n(63528),a=n(65567);e.exports=function(e){return function(t){t=a(t);var n=o(t)?i(t):void 0,l=n?n[0]:t.charAt(0),s=n?r(n,1).join(""):t.slice(1);return l[e]()+s}}},25348:function(e){var t=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},63528:function(e,t,n){var r=n(85630),o=n(25348),i=n(84890);e.exports=function(e){return o(e)?i(e):r(e)}},84890:function(e){var t="[\\ud800-\\udfff]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",l="(?:"+n+"|"+r+")"+"?",s="[\\ufe0e\\ufe0f]?",c=s+l+("(?:\\u200d(?:"+[o,i,a].join("|")+")"+s+l+")*"),d="(?:"+[o+n+"?",n,i,a,t].join("|")+")",u=RegExp(r+"(?="+r+")|"+d+c,"g");e.exports=function(e){return e.match(u)||[]}},76744:function(e,t,n){var r=n(62690)("toUpperCase");e.exports=r}}]);
//# sourceMappingURL=component---src-pages-guides-patterns-js-1be9443d44f5d1eeffce.js.map