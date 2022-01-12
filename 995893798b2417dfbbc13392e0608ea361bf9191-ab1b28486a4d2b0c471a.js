"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[2899],{55177:function(t,e,i){i(27378);var n=i(91542),o=i(62370),r=i(24246);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},l.apply(this,arguments)}var a=n.default.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"sc-14q5tfo-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;font-size:13px;background:",";padding:10px 20px;color:",";border:2px solid ",";box-shadow:9px 16px 0 rgba(0,0,0,0.15);"],(function(t){return t.theme.colors.cardBackground}),(function(t){return t.color}),(function(t){return t.color})),c=n.default.span.withConfig({displayName:"mapper__TooltipKey",componentId:"sc-14q5tfo-1"})(["font-weight:600;"]),s=n.default.span.withConfig({displayName:"mapper__TooltipValue",componentId:"sc-14q5tfo-2"})([""]),d=function(t){var e=t.feature;return(0,r.jsxs)(a,{color:e.color,children:[(0,r.jsx)(c,{children:"Custom tooltip"}),(0,r.jsx)("span",{}),(0,r.jsx)(c,{children:"id"}),(0,r.jsx)(s,{children:e.id}),(0,r.jsx)(c,{children:"value"}),(0,r.jsx)(s,{children:e.value}),(0,r.jsx)(c,{children:"color"}),(0,r.jsx)(s,{children:e.color})]})};e.Z=(0,o.h8)({theme:function(t,e){return e["custom tooltip example"]?l({},e.theme,{tooltip:{container:l({},e.theme.tooltip.container,{background:"#333"})}}):t},tooltip:function(t,e){if(e["custom tooltip example"])return d}},{exclude:["custom tooltip example"]})},34453:function(t,e,i){i.d(e,{N:function(){return l}});var n=i(89039),o=i(80169),r=i(3759),l=[].concat((0,r.nk)(["svg","canvas"]),[{key:"projectionType",flavors:["svg","canvas"],help:"Defines the projection to use.",type:"string",required:!1,defaultValue:n.xB.projectionType,group:"Projection",control:{type:"choices",choices:[{label:"azimuthalEqualArea",value:"azimuthalEqualArea"},{label:"azimuthalEquidistant",value:"azimuthalEquidistant"},{label:"gnomonic",value:"gnomonic"},{label:"orthographic",value:"orthographic"},{label:"stereographic",value:"stereographic"},{label:"equalEarth",value:"equalEarth"},{label:"equirectangular",value:"equirectangular"},{label:"mercator",value:"mercator"},{label:"transverseMercator",value:"transverseMercator"},{label:"naturalEarth1",value:"naturalEarth1"}]}},{key:"projectionScale",flavors:["svg","canvas"],help:"Projection scale.",required:!1,defaultValue:n.xB.projectionScale,type:"number",group:"Projection",control:{type:"range",min:0,max:400}},{key:"projectionTranslation",flavors:["svg","canvas"],type:"[number, number]",help:"Projection x/y translation.",required:!1,defaultValue:n.xB.projectionTranslation,group:"Projection",control:{type:"numberArray",unit:"px",items:[{label:"x",min:-1,max:1,step:.05},{label:"y",min:-1,max:1,step:.05}]}},{key:"projectionRotation",flavors:["svg","canvas"],type:"[number, number, number]",help:"Projection rotation.",required:!1,defaultValue:n.xB.projectionRotation,group:"Projection",control:{type:"numberArray",items:[{label:"lambda (λ)",min:-360,max:360},{label:"phi (φ)",min:-360,max:360},{label:"gamma (γ)",min:-360,max:360}]}},(0,o.JR)(["svg","canvas"]),{key:"borderWidth",flavors:["svg","canvas"],help:"Control border width.",type:"number",required:!1,defaultValue:n.xB.borderWidth,group:"Style",control:{type:"lineWidth",step:.5}},{key:"borderColor",flavors:["svg","canvas"],help:"Method to compute border color.",type:"string | object | Function",required:!1,defaultValue:n.xB.borderColor,control:{type:"inheritedColor"},group:"Style"},{key:"enableGraticule",flavors:["svg","canvas"],help:"Enable meridians and parallels, useful for showing projection distortion.",type:"boolean",required:!1,defaultValue:n.xB.enableGraticule,control:{type:"switch"},group:"Graticule"},{key:"graticuleLineWidth",flavors:["svg","canvas"],help:"Control meridians and parallel lines width.",type:"number",required:!1,defaultValue:n.xB.graticuleLineWidth,group:"Graticule",control:{type:"lineWidth",step:.5}},{key:"graticuleLineColor",flavors:["svg","canvas"],help:"Control meridians and parallel lines color.",type:"string",required:!1,defaultValue:n.xB.graticuleLineColor,control:{type:"colorPicker"},group:"Graticule"}],(0,o.uE)("Style",["svg"]),[(0,r.y1)({flavors:["svg","canvas"],defaultValue:n.xB.isInteractive}),{key:"onClick",flavors:["svg","canvas"],help:"onClick handler, it receives clicked node data and style plus mouse event.",type:"Function",required:!1,group:"Interactivity"}])},62370:function(t,e,i){i.d(e,{h8:function(){return c},h6:function(){return s},Ld:function(){return d}});var n=i(48159),o=i.n(n),r=i(76744),l=i.n(r);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},a.apply(this,arguments)}var c=function(t,e){var i=(void 0===e?{}:e).exclude,n=void 0===i?[]:i;return function(e,i){void 0===i&&(i={});var r={};return Object.keys(e).forEach((function(n){t[n]&&(r[n]=t[n](e[n],e,i))})),a({},o()(e,n),r)}},s=function(t){return function(e,i){return i["axis"+l()(t)].enable?o()(e,["enable"]):null}},d=function(t){var e=t.format;return t.enabled?e:void 0}},47425:function(t,e,i){i.d(e,{Bo:function(){return b},$6:function(){return j},iQ:function(){return O},Ae:function(){return k},aJ:function(){return W},as:function(){return A},_i:function(){return w}});var n=i(24246),o=i(9841),r=i(98383),l=i(14503),a=i(27378),c=i(23615),s=i.n(c);function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},d.apply(this,arguments)}var u={length:200,thickness:16,direction:"row",tickPosition:"after",tickSize:4,tickSpacing:3,tickOverlap:!1,tickFormat:function(t){return""+t},titleAlign:"start",titleOffset:4},h={top:0,right:0,bottom:0,left:0},g=function(t){var e,i=t.direction,n=t.itemsSpacing,o=t.padding,r=t.itemCount,l=t.itemWidth,a=t.itemHeight;if("number"!=typeof o&&("object"!=typeof(e=o)||Array.isArray(e)||null===e))throw new Error("Invalid property padding, must be one of: number, object");var c="number"==typeof o?{top:o,right:o,bottom:o,left:o}:d({},h,o),s=c.left+c.right,u=c.top+c.bottom,g=l+s,f=a+u,p=(r-1)*n;return"row"===i?g=l*r+p+s:"column"===i&&(f=a*r+p+u),{width:g,height:f,padding:c}},f=function(t){var e=t.anchor,i=t.translateX,n=t.translateY,o=t.containerWidth,r=t.containerHeight,l=t.width,a=t.height,c=i,s=n;switch(e){case"top":c+=(o-l)/2;break;case"top-right":c+=o-l;break;case"right":c+=o-l,s+=(r-a)/2;break;case"bottom-right":c+=o-l,s+=r-a;break;case"bottom":c+=(o-l)/2,s+=r-a;break;case"bottom-left":s+=r-a;break;case"left":s+=(r-a)/2;break;case"center":c+=(o-l)/2,s+=(r-a)/2}return{x:c,y:s}},p=function(t){var e,i,n,o,r,l,a=t.direction,c=t.justify,s=t.symbolSize,d=t.symbolSpacing,u=t.width,h=t.height;switch(a){case"left-to-right":e=0,i=(h-s)/2,o=h/2,l="central",c?(n=u,r="end"):(n=s+d,r="start");break;case"right-to-left":e=u-s,i=(h-s)/2,o=h/2,l="central",c?(n=0,r="start"):(n=u-s-d,r="end");break;case"top-to-bottom":e=(u-s)/2,i=0,n=u/2,r="middle",c?(o=h,l="alphabetic"):(o=s+d,l="text-before-edge");break;case"bottom-to-top":e=(u-s)/2,i=h-s,n=u/2,r="middle",c?(o=0,l="text-before-edge"):(o=h-s-d,l="alphabetic")}return{symbolX:e,symbolY:i,labelX:n,labelY:o,labelAnchor:r,labelAlignment:l}},m=function(t){var e,i=t.scale,n=t.ticks,a=t.length,c=void 0===a?u.length:a,s=t.thickness,d=void 0===s?u.thickness:s,h=t.direction,g=void 0===h?u.direction:h,f=t.tickPosition,p=void 0===f?u.tickPosition:f,m=t.tickSize,v=void 0===m?u.tickSize:m,y=t.tickSpacing,b=void 0===y?u.tickSpacing:y,x=t.tickOverlap,k=void 0===x?u.tickOverlap:x,S=t.tickFormat,j=void 0===S?u.tickFormat:S,C=t.title,A=t.titleAlign,W=void 0===A?u.titleAlign:A,w=t.titleOffset,O=void 0===w?u.titleOffset:w,B="column"===g?[].concat(i.domain()).reverse():i.domain(),z=(0,o.Z)().domain(B);2===B.length?z.range([0,c]):3===B.length&&z.range([0,c/2,c]),e="thresholds"in i?[B[0]].concat(i.thresholds(),[B[1]]):Array.isArray(n)?n:i.ticks(n);var q,E,X,Y,H,T,L,P,M,V,F,R,_,G,D=(0,l.TO)(i,32),I=(0,r.kZ)(j),N=[],Z=0,J=0;"row"===g?(q=c,E=d,J=1,H=0,X="start"===W?0:"middle"===W?c/2:c,"before"===p?(L=-v,P=k?d:0,M=-v-b,V="alphabetic",Y=d+O,T="hanging"):(L=k?0:d,M=(P=d+v)+b,V="hanging",Y=-O,T="alphabetic"),e.forEach((function(t){var e=z(t);N.push({x1:e,y1:L,x2:e,y2:P,text:I(t),textX:e,textY:M,textHorizontalAlign:"middle",textVerticalAlign:V})}))):(q=d,E=c,Z=1,H=-90,Y="start"===W?c:"middle"===W?c/2:0,"before"===p?(R=k?d:0,_=(F=-v)-b,G="end",X=d+O,T="hanging"):(F=k?0:d,_=(R=d+v)+b,G="start",X=-O,T="alphabetic"),e.forEach((function(t){var e=z(t);N.push({x1:F,y1:e,x2:R,y2:e,text:I(t),textX:_,textY:e,textHorizontalAlign:G,textVerticalAlign:"central"})})));return{width:q,height:E,gradientX1:0,gradientY1:Z,gradientX2:J,gradientY2:0,colorStops:D,ticks:N,titleText:C,titleX:X,titleY:Y,titleRotation:H,titleHorizontalAlign:W,titleVerticalAlign:T}},v=function(t){var e=t.scale,i=t.ticks,o=t.length,l=void 0===o?u.length:o,c=t.thickness,s=void 0===c?u.thickness:c,h=t.direction,g=void 0===h?u.direction:h,f=t.tickPosition,p=void 0===f?u.tickPosition:f,v=t.tickSize,y=void 0===v?u.tickSize:v,b=t.tickSpacing,x=void 0===b?u.tickSpacing:b,k=t.tickOverlap,S=void 0===k?u.tickOverlap:k,j=t.tickFormat,C=void 0===j?u.tickFormat:j,A=t.title,W=t.titleAlign,w=void 0===W?u.titleAlign:W,O=t.titleOffset,B=m({scale:e,ticks:i,length:l,thickness:s,direction:g,tickPosition:p,tickSize:y,tickSpacing:x,tickOverlap:S,tickFormat:C,title:A,titleAlign:w,titleOffset:void 0===O?u.titleOffset:O}),z=B.width,q=B.height,E=B.gradientX1,X=B.gradientY1,Y=B.gradientX2,H=B.gradientY2,T=B.ticks,L=B.colorStops,P=B.titleText,M=B.titleX,V=B.titleY,F=B.titleRotation,R=B.titleVerticalAlign,_=B.titleHorizontalAlign,G=(0,r.Fg)(),D="ContinuousColorsLegendSvgGradient."+g+"."+L.map((function(t){return t.offset})).join("_");return(0,n.jsxs)("g",{children:[(0,n.jsx)("defs",{children:(0,n.jsx)("linearGradient",{id:D,x1:E,y1:X,x2:Y,y2:H,children:L.map((function(t){return(0,n.jsx)("stop",d({},t))}))})}),P&&(0,n.jsx)("text",{transform:"translate("+M+", "+V+") rotate("+F+")",textAnchor:_,dominantBaseline:R,style:G.legends.title.text,children:P}),(0,n.jsx)("rect",{width:z,height:q,fill:"url(#"+D}),T.map((function(t,e){return(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)("line",{x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,style:G.legends.ticks.line}),(0,n.jsx)("text",{x:t.textX,y:t.textY,textAnchor:t.textHorizontalAlign,dominantBaseline:t.textVerticalAlign,style:G.legends.ticks.text,children:t.text})]},e)}))]})},y=["containerWidth","containerHeight","anchor","translateX","translateY","length","thickness","direction"],b=function(t){var e,i,o=t.containerWidth,r=t.containerHeight,l=t.anchor,a=t.translateX,c=void 0===a?0:a,s=t.translateY,h=void 0===s?0:s,g=t.length,p=void 0===g?u.length:g,m=t.thickness,b=void 0===m?u.thickness:m,x=t.direction,k=void 0===x?u.direction:x,S=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,y);"row"===k?(e=p,i=b):(e=b,i=p);var j=f({anchor:l,translateX:c,translateY:h,containerWidth:o,containerHeight:r,width:e,height:i}),C=j.x,A=j.y;return(0,n.jsx)("g",{transform:"translate("+C+", "+A+")",children:(0,n.jsx)(v,d({length:p,thickness:b,direction:k},S))})},x={circle:function(t){var e=t.x,i=t.y,o=t.size,r=t.fill,l=t.opacity,a=void 0===l?1:l,c=t.borderWidth,s=void 0===c?0:c,d=t.borderColor;return(0,n.jsx)("circle",{r:o/2,cx:e+o/2,cy:i+o/2,fill:r,opacity:a,strokeWidth:s,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})},diamond:function(t){var e=t.x,i=t.y,o=t.size,r=t.fill,l=t.opacity,a=void 0===l?1:l,c=t.borderWidth,s=void 0===c?0:c,d=t.borderColor;return(0,n.jsx)("g",{transform:"translate("+e+","+i+")",children:(0,n.jsx)("path",{d:"\n                    M"+o/2+" 0\n                    L"+.8*o+" "+o/2+"\n                    L"+o/2+" "+o+"\n                    L"+.2*o+" "+o/2+"\n                    L"+o/2+" 0\n                ",fill:r,opacity:a,strokeWidth:s,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})})},square:function(t){var e=t.x,i=t.y,o=t.size,r=t.fill,l=t.opacity,a=void 0===l?1:l,c=t.borderWidth,s=void 0===c?0:c,d=t.borderColor;return(0,n.jsx)("rect",{x:e,y:i,fill:r,opacity:a,strokeWidth:s,stroke:void 0===d?"transparent":d,width:o,height:o,style:{pointerEvents:"none"}})},triangle:function(t){var e=t.x,i=t.y,o=t.size,r=t.fill,l=t.opacity,a=void 0===l?1:l,c=t.borderWidth,s=void 0===c?0:c,d=t.borderColor;return(0,n.jsx)("g",{transform:"translate("+e+","+i+")",children:(0,n.jsx)("path",{d:"\n                M"+o/2+" 0\n                L"+o+" "+o+"\n                L0 "+o+"\n                L"+o/2+" 0\n            ",fill:r,opacity:a,strokeWidth:s,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})})}},k=function(t){var e,i,o,l,c,s,u,h,g,f,m,v=t.x,y=t.y,b=t.width,k=t.height,S=t.data,j=t.direction,C=void 0===j?"left-to-right":j,A=t.justify,W=void 0!==A&&A,w=t.textColor,O=t.background,B=void 0===O?"transparent":O,z=t.opacity,q=void 0===z?1:z,E=t.symbolShape,X=void 0===E?"square":E,Y=t.symbolSize,H=void 0===Y?16:Y,T=t.symbolSpacing,L=void 0===T?8:T,P=t.symbolBorderWidth,M=void 0===P?0:P,V=t.symbolBorderColor,F=void 0===V?"transparent":V,R=t.onClick,_=t.onMouseEnter,G=t.onMouseLeave,D=t.toggleSerie,I=t.effects,N=(0,a.useState)({}),Z=N[0],J=N[1],K=(0,r.Fg)(),Q=(0,a.useCallback)((function(t){if(I){var e=I.filter((function(t){return"hover"===t.on})).reduce((function(t,e){return d({},t,e.style)}),{});J(e)}null==_||_(S,t)}),[_,S,I]),$=(0,a.useCallback)((function(t){if(I){var e=I.filter((function(t){return"hover"!==t.on})).reduce((function(t,e){return d({},t,e.style)}),{});J(e)}null==G||G(S,t)}),[G,S,I]),U=p({direction:C,justify:W,symbolSize:null!=(e=Z.symbolSize)?e:H,symbolSpacing:L,width:b,height:k}),tt=U.symbolX,et=U.symbolY,it=U.labelX,nt=U.labelY,ot=U.labelAnchor,rt=U.labelAlignment,lt=[R,_,G,D].some((function(t){return void 0!==t})),at="function"==typeof X?X:x[X];return(0,n.jsxs)("g",{transform:"translate("+v+","+y+")",style:{opacity:null!=(i=Z.itemOpacity)?i:q},children:[(0,n.jsx)("rect",{width:b,height:k,fill:null!=(o=Z.itemBackground)?o:B,style:{cursor:lt?"pointer":"auto"},onClick:function(t){null==R||R(S,t),null==D||D(S.id)},onMouseEnter:Q,onMouseLeave:$}),a.createElement(at,d({id:S.id,x:tt,y:et,size:null!=(l=Z.symbolSize)?l:H,fill:null!=(c=null!=(s=S.fill)?s:S.color)?c:"black",borderWidth:null!=(u=Z.symbolBorderWidth)?u:M,borderColor:null!=(h=Z.symbolBorderColor)?h:F},S.hidden?K.legends.hidden.symbol:void 0)),(0,n.jsx)("text",{textAnchor:ot,style:d({},K.legends.text,{fill:null!=(g=null!=(f=null!=(m=Z.itemTextColor)?m:w)?f:K.legends.text.fill)?g:"black",dominantBaseline:rt,pointerEvents:"none",userSelect:"none"},S.hidden?K.legends.hidden.text:void 0),x:it,y:nt,children:S.label})]})},S=function(t){var e=t.data,i=t.x,o=t.y,r=t.direction,l=t.padding,a=void 0===l?0:l,c=t.justify,s=t.effects,d=t.itemWidth,u=t.itemHeight,h=t.itemDirection,f=void 0===h?"left-to-right":h,p=t.itemsSpacing,m=void 0===p?0:p,v=t.itemTextColor,y=t.itemBackground,b=void 0===y?"transparent":y,x=t.itemOpacity,S=void 0===x?1:x,j=t.symbolShape,C=t.symbolSize,A=t.symbolSpacing,W=t.symbolBorderWidth,w=t.symbolBorderColor,O=t.onClick,B=t.onMouseEnter,z=t.onMouseLeave,q=t.toggleSerie,E=g({itemCount:e.length,itemWidth:d,itemHeight:u,itemsSpacing:m,direction:r,padding:a}).padding,X="row"===r?d+m:0,Y="column"===r?u+m:0;return(0,n.jsx)("g",{transform:"translate("+i+","+o+")",children:e.map((function(t,e){return(0,n.jsx)(k,{data:t,x:e*X+E.left,y:e*Y+E.top,width:d,height:u,direction:f,justify:c,effects:s,textColor:v,background:b,opacity:S,symbolShape:j,symbolSize:C,symbolSpacing:A,symbolBorderWidth:W,symbolBorderColor:w,onClick:O,onMouseEnter:B,onMouseLeave:z,toggleSerie:q},e)}))})},j=function(t){var e=t.data,i=t.containerWidth,o=t.containerHeight,r=t.translateX,l=void 0===r?0:r,a=t.translateY,c=void 0===a?0:a,s=t.anchor,d=t.direction,u=t.padding,h=void 0===u?0:u,p=t.justify,m=t.itemsSpacing,v=void 0===m?0:m,y=t.itemWidth,b=t.itemHeight,x=t.itemDirection,k=t.itemTextColor,j=t.itemBackground,C=t.itemOpacity,A=t.symbolShape,W=t.symbolSize,w=t.symbolSpacing,O=t.symbolBorderWidth,B=t.symbolBorderColor,z=t.onClick,q=t.onMouseEnter,E=t.onMouseLeave,X=t.toggleSerie,Y=t.effects,H=g({itemCount:e.length,itemsSpacing:v,itemWidth:y,itemHeight:b,direction:d,padding:h}),T=H.width,L=H.height,P=f({anchor:s,translateX:l,translateY:c,containerWidth:i,containerHeight:o,width:T,height:L}),M=P.x,V=P.y;return(0,n.jsx)(S,{data:e,x:M,y:V,direction:d,padding:h,justify:p,effects:Y,itemsSpacing:v,itemWidth:y,itemHeight:b,itemDirection:x,itemTextColor:k,itemBackground:j,itemOpacity:C,symbolShape:A,symbolSize:W,symbolSpacing:w,symbolBorderWidth:O,symbolBorderColor:B,onClick:z,onMouseEnter:q,onMouseLeave:E,toggleSerie:"boolean"==typeof X?void 0:X})},C={start:"left",middle:"center",end:"right"},A=function(t,e){var i=e.data,n=e.containerWidth,o=e.containerHeight,r=e.translateX,l=void 0===r?0:r,a=e.translateY,c=void 0===a?0:a,s=e.anchor,d=e.direction,u=e.padding,h=void 0===u?0:u,m=e.justify,v=void 0!==m&&m,y=e.itemsSpacing,b=void 0===y?0:y,x=e.itemWidth,k=e.itemHeight,S=e.itemDirection,j=void 0===S?"left-to-right":S,A=e.itemTextColor,W=e.symbolSize,w=void 0===W?16:W,O=e.symbolSpacing,B=void 0===O?8:O,z=e.theme,q=g({itemCount:i.length,itemWidth:x,itemHeight:k,itemsSpacing:b,direction:d,padding:h}),E=q.width,X=q.height,Y=q.padding,H=f({anchor:s,translateX:l,translateY:c,containerWidth:n,containerHeight:o,width:E,height:X}),T=H.x,L=H.y,P="row"===d?x+b:0,M="column"===d?k+b:0;t.save(),t.translate(T,L),t.font=z.legends.text.fontSize+"px "+(z.legends.text.fontFamily||"sans-serif"),i.forEach((function(e,i){var n,o,r=i*P+Y.left,l=i*M+Y.top,a=p({direction:j,justify:v,symbolSize:w,symbolSpacing:B,width:x,height:k}),c=a.symbolX,s=a.symbolY,d=a.labelX,u=a.labelY,h=a.labelAnchor,g=a.labelAlignment;t.fillStyle=null!=(n=e.color)?n:"black",t.fillRect(r+c,l+s,w,w),t.textAlign=C[h],"central"===g&&(t.textBaseline="middle"),t.fillStyle=null!=(o=null!=A?A:z.legends.text.fill)?o:"black",t.fillText(String(e.label),r+d,l+u)})),t.restore()},W=function(t,e){var i=e.containerWidth,n=e.containerHeight,o=e.anchor,l=e.translateX,a=void 0===l?0:l,c=e.translateY,s=void 0===c?0:c,d=e.scale,h=e.length,g=void 0===h?u.length:h,p=e.thickness,v=void 0===p?u.thickness:p,y=e.direction,b=void 0===y?u.direction:y,x=e.ticks,k=e.tickPosition,S=void 0===k?u.tickPosition:k,j=e.tickSize,C=void 0===j?u.tickSize:j,A=e.tickSpacing,W=void 0===A?u.tickSpacing:A,w=e.tickOverlap,O=void 0===w?u.tickOverlap:w,B=e.tickFormat,z=void 0===B?u.tickFormat:B,q=e.title,E=e.titleAlign,X=void 0===E?u.titleAlign:E,Y=e.titleOffset,H=void 0===Y?u.titleOffset:Y,T=e.theme,L=m({scale:d,ticks:x,length:g,thickness:v,direction:b,tickPosition:S,tickSize:C,tickSpacing:W,tickOverlap:O,tickFormat:z,title:q,titleAlign:X,titleOffset:H}),P=L.width,M=L.height,V=L.gradientX1,F=L.gradientY1,R=L.gradientX2,_=L.gradientY2,G=L.colorStops,D=L.ticks,I=L.titleText,N=L.titleX,Z=L.titleY,J=L.titleRotation,K=L.titleVerticalAlign,Q=L.titleHorizontalAlign,$=f({anchor:o,translateX:a,translateY:s,containerWidth:i,containerHeight:n,width:P,height:M}),U=$.x,tt=$.y,et={font:t.font,textAlign:t.textAlign,textBaseline:t.textBaseline};t.save(),t.translate(U,tt);var it=t.createLinearGradient(V*P,F*M,R*P,_*M);G.forEach((function(t){it.addColorStop(t.offset,t.stopColor)})),t.fillStyle=it,t.fillRect(0,0,P,M),t.font=(T.legends.ticks.text.fontWeight?T.legends.ticks.text.fontWeight+" ":"")+T.legends.ticks.text.fontSize+"px "+T.legends.ticks.text.fontFamily,D.forEach((function(e){var i;(null!=(i=T.legends.ticks.line.strokeWidth)?i:0)>0&&(t.lineWidth=Number(T.axis.ticks.line.strokeWidth),T.axis.ticks.line.stroke&&(t.strokeStyle=T.axis.ticks.line.stroke),t.lineCap="square",t.beginPath(),t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.stroke()),T.legends.ticks.text.fill&&(t.fillStyle=T.legends.ticks.text.fill),t.textAlign="middle"===e.textHorizontalAlign?"center":e.textHorizontalAlign,t.textBaseline="central"===e.textVerticalAlign?"middle":e.textVerticalAlign,t.fillText(e.text,e.textX,e.textY)})),I&&(t.save(),t.translate(N,Z),t.rotate((0,r.Ht)(J)),t.font=(T.legends.title.text.fontWeight?T.legends.title.text.fontWeight+" ":"")+T.legends.title.text.fontSize+"px "+T.legends.title.text.fontFamily,T.legends.title.text.fill&&(t.fillStyle=T.legends.title.text.fill),t.textAlign="middle"===Q?"center":Q,t.textBaseline=K,t.fillText(I,0,0),t.restore()),t.restore(),t.font=et.font,t.textAlign=et.textAlign,t.textBaseline=et.textBaseline},w=function(t){var e=t.scale,i=t.domain,n=t.reverse,o=void 0!==n&&n,r=t.valueFormat,l=void 0===r?function(t){return t}:r,c=t.separator,s=void 0===c?" - ":c;return(0,a.useMemo)((function(){var t=(null!=i?i:e.range()).map((function(t,i){var n=e.invertExtent(t),o=n[0],r=n[1];return{id:t,index:i,extent:[o,r],label:""+l(o)+s+l(r),value:e(o),color:t}}));return o&&t.reverse(),t}),[i,e,o,s,l])},O={data:s().arrayOf(s().object),anchor:s().oneOf(["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left","center"]).isRequired,translateX:s().number,translateY:s().number,direction:s().oneOf(["row","column"]).isRequired,itemsSpacing:s().number,itemWidth:s().number.isRequired,itemHeight:s().number.isRequired,itemDirection:s().oneOf(["left-to-right","right-to-left","top-to-bottom","bottom-to-top"]),itemTextColor:s().string,itemBackground:s().string,itemOpacity:s().number,symbolShape:s().oneOfType([s().oneOf(["circle","diamond","square","triangle"]),s().func]),symbolSize:s().number,symbolSpacing:s().number,symbolBorderWidth:s().number,symbolBorderColor:s().string,onClick:s().func,onMouseEnter:s().func,onMouseLeave:s().func,effects:s().arrayOf(s().shape({on:s().oneOfType([s().oneOf(["hover"])]).isRequired,style:s().shape({itemTextColor:s().string,itemBackground:s().string,itemOpacity:s().number,symbolSize:s().number,symbolBorderWidth:s().number,symbolBorderColor:s().string}).isRequired}))}}}]);
//# sourceMappingURL=995893798b2417dfbbc13392e0608ea361bf9191-ab1b28486a4d2b0c471a.js.map