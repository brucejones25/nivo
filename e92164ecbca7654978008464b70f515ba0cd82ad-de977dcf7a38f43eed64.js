"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[5506],{94942:function(e,r,i){i.d(r,{Z:function(){return s}});var n=i(41584),t=i(3583),o=i(30964),a=i(18091),l=i(92519);function s(){var e=l.x,r=null,i=(0,t.Z)(0),s=l.y,u=(0,t.Z)(!0),c=null,d=o.Z,f=null;function p(t){var o,a,l,p,h,y=t.length,b=!1,g=new Array(y),m=new Array(y);for(null==c&&(f=d(h=(0,n.Z)())),o=0;o<=y;++o){if(!(o<y&&u(p=t[o],o,t))===b)if(b=!b)a=o,f.areaStart(),f.lineStart();else{for(f.lineEnd(),f.lineStart(),l=o-1;l>=a;--l)f.point(g[l],m[l]);f.lineEnd(),f.areaEnd()}b&&(g[o]=+e(p,o,t),m[o]=+i(p,o,t),f.point(r?+r(p,o,t):g[o],s?+s(p,o,t):m[o]))}if(h)return f=null,h+""||null}function h(){return(0,a.Z)().defined(u).curve(d).context(c)}return p.x=function(i){return arguments.length?(e="function"==typeof i?i:(0,t.Z)(+i),r=null,p):e},p.x0=function(r){return arguments.length?(e="function"==typeof r?r:(0,t.Z)(+r),p):e},p.x1=function(e){return arguments.length?(r=null==e?null:"function"==typeof e?e:(0,t.Z)(+e),p):r},p.y=function(e){return arguments.length?(i="function"==typeof e?e:(0,t.Z)(+e),s=null,p):i},p.y0=function(e){return arguments.length?(i="function"==typeof e?e:(0,t.Z)(+e),p):i},p.y1=function(e){return arguments.length?(s=null==e?null:"function"==typeof e?e:(0,t.Z)(+e),p):s},p.lineX0=p.lineY0=function(){return h().x(e).y(i)},p.lineY1=function(){return h().x(e).y(s)},p.lineX1=function(){return h().x(r).y(i)},p.defined=function(e){return arguments.length?(u="function"==typeof e?e:(0,t.Z)(!!e),p):u},p.curve=function(e){return arguments.length?(d=e,null!=c&&(f=d(c)),p):d},p.context=function(e){return arguments.length?(null==e?c=f=null:f=d(c=e),p):c},p}},4014:function(e,r,i){i.d(r,{x1:function(){return _},t_:function(){return j},pY:function(){return M},fH:function(){return U},Y4:function(){return Q}});var n=i(27378),t=i(98383),o=i(14503),a=i(44365),l=i(47425),s=i(89193),u=i(18091),c=i(94942),d=i(770),f=i(23615),p=i.n(f),h=i(24246),y=i(58493),b=i(14035);function g(){return g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},g.apply(this,arguments)}var m=function(e){var r=e.point;return(0,h.jsx)(s._5,{id:(0,h.jsxs)("span",{children:["x: ",(0,h.jsx)("strong",{children:r.data.xFormatted}),", y:"," ",(0,h.jsx)("strong",{children:r.data.yFormatted})]}),enableChip:!0,color:r.serieColor})};m.propTypes={point:p().object.isRequired};var x=(0,n.memo)(m),v=function(e){var r=e.slice,i=e.axis,n=(0,t.Fg)(),o="x"===i?"y":"x";return(0,h.jsx)(s.zI,{rows:r.points.map((function(e){return[(0,h.jsx)(s.Af,{color:e.serieColor,style:n.tooltip.chip},"chip"),e.serieId,(0,h.jsx)("span",{style:n.tooltip.tableCellValue,children:e.data[o+"Formatted"]},"value")]}))})};v.propTypes={slice:p().object.isRequired,axis:p().oneOf(["x","y"]).isRequired};var R=(0,n.memo)(v),q={data:p().arrayOf(p().shape({id:p().oneOfType([p().string,p().number]).isRequired,data:p().arrayOf(p().shape({x:p().oneOfType([p().number,p().string,p().instanceOf(Date)]),y:p().oneOfType([p().number,p().string,p().instanceOf(Date)])})).isRequired})).isRequired,xScale:p().object.isRequired,xFormat:p().oneOfType([p().func,p().string]),yScale:p().object.isRequired,yFormat:p().oneOfType([p().func,p().string]),layers:p().arrayOf(p().oneOfType([p().oneOf(["grid","markers","axes","areas","crosshair","lines","slices","points","mesh","legends"]),p().func])).isRequired,curve:t.VZ.isRequired,axisTop:a.VT,axisRight:a.VT,axisBottom:a.VT,axisLeft:a.VT,enableGridX:p().bool.isRequired,enableGridY:p().bool.isRequired,gridXValues:p().oneOfType([p().number,p().arrayOf(p().oneOfType([p().number,p().string,p().instanceOf(Date)]))]),gridYValues:p().oneOfType([p().number,p().arrayOf(p().oneOfType([p().number,p().string,p().instanceOf(Date)]))]),enablePoints:p().bool.isRequired,pointSymbol:p().func,pointSize:p().number.isRequired,pointColor:p().any.isRequired,pointBorderWidth:p().number.isRequired,pointBorderColor:p().any.isRequired,enablePointLabel:p().bool.isRequired,pointLabel:p().oneOfType([p().string,p().func]).isRequired,markers:p().arrayOf(p().shape({axis:p().oneOf(["x","y"]).isRequired,value:p().oneOfType([p().number,p().string,p().instanceOf(Date)]).isRequired,style:p().object})),colors:o.qi.isRequired,enableArea:p().bool.isRequired,areaOpacity:p().number.isRequired,areaBlendMode:t.wM.isRequired,areaBaselineValue:p().oneOfType([p().number,p().string,p().instanceOf(Date)]).isRequired,lineWidth:p().number.isRequired,legends:p().arrayOf(p().shape(l.iQ)).isRequired,isInteractive:p().bool.isRequired,debugMesh:p().bool.isRequired,tooltip:p().oneOfType([p().func,p().object]).isRequired,enableSlices:p().oneOf(["x","y",!1]).isRequired,debugSlices:p().bool.isRequired,sliceTooltip:p().oneOfType([p().func,p().object]).isRequired,enableCrosshair:p().bool.isRequired,crosshairType:p().string.isRequired},O=g({},q,{enablePointLabel:p().bool.isRequired,role:p().string.isRequired,useMesh:p().bool.isRequired},t.w$,t._U),S=g({pixelRatio:p().number.isRequired},q),C={curve:"linear",xScale:{type:"point"},yScale:{type:"linear",min:0,max:"auto"},layers:["grid","markers","axes","areas","crosshair","lines","points","slices","mesh","legends"],axisBottom:{},axisLeft:{},enableGridX:!0,enableGridY:!0,enablePoints:!0,pointSize:6,pointColor:{from:"color"},pointBorderWidth:0,pointBorderColor:{theme:"background"},enablePointLabel:!1,pointLabel:"yFormatted",colors:{scheme:"nivo"},enableArea:!1,areaBaselineValue:0,areaOpacity:.2,areaBlendMode:"normal",lineWidth:2,legends:[],isInteractive:!0,tooltip:x,enableSlices:!1,debugSlices:!1,sliceTooltip:R,debugMesh:!1,enableCrosshair:!0,crosshairType:"bottom-left"},M=g({},C,{enablePointLabel:!1,useMesh:!1,animate:!0,motionConfig:"gentle",defs:[],fill:[],role:"img"}),j=g({},C,{pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),T=function(e){var r=e.curve;return(0,n.useMemo)((function(){return(0,u.Z)().defined((function(e){return null!==e.x&&null!==e.y})).x((function(e){return e.x})).y((function(e){return e.y})).curve((0,t.Bg)(r))}),[r])},w=function(e){var r=e.curve,i=e.yScale,o=e.areaBaselineValue;return(0,n.useMemo)((function(){return(0,c.Z)().defined((function(e){return null!==e.x&&null!==e.y})).x((function(e){return e.x})).y1((function(e){return e.y})).curve((0,t.Bg)(r)).y0(i(o))}),[r,i,o])},k=function(e){var r=e.data,i=e.xScale,a=void 0===i?M.xScale:i,l=e.xFormat,s=e.yScale,u=void 0===s?M.yScale:s,c=e.yFormat,f=e.width,p=e.height,h=e.colors,y=void 0===h?M.colors:h,b=e.curve,m=void 0===b?M.curve:b,x=e.areaBaselineValue,v=void 0===x?M.areaBaselineValue:x,R=e.pointColor,q=void 0===R?M.pointColor:R,O=e.pointBorderColor,S=void 0===O?M.pointBorderColor:O,C=e.enableSlices,j=void 0===C?M.enableSlicesTooltip:C,k=(0,t.O_)(l),B=(0,t.O_)(c),W=(0,o.U)(y,"id"),F=(0,t.Fg)(),G=(0,o.Bf)(q,F),L=(0,o.Bf)(S,F),P=(0,n.useState)([]),E=P[0],V=P[1],Y=(0,n.useMemo)((function(){return(0,d.Gi)(r.filter((function(e){return-1===E.indexOf(e.id)})),a,u,f,p)}),[r,E,a,u,f,p]),Z=Y.xScale,D=Y.yScale,A=Y.series,X=(0,n.useMemo)((function(){var e=r.map((function(e){return{id:e.id,label:e.id,color:W(e)}})),i=e.map((function(e){return g({},A.find((function(r){return r.id===e.id})),{color:e.color})})).filter((function(e){return Boolean(e.id)}));return{legendData:e.map((function(e){return g({},e,{hidden:!i.find((function(r){return r.id===e.id}))})})).reverse(),series:i}}),[r,A,W]),z=X.legendData,H=X.series,I=(0,n.useCallback)((function(e){V((function(r){return r.indexOf(e)>-1?r.filter((function(r){return r!==e})):[].concat(r,[e])}))}),[]),_=function(e){var r=e.series,i=e.getPointColor,t=e.getPointBorderColor,o=e.formatX,a=e.formatY;return(0,n.useMemo)((function(){return r.reduce((function(e,r){return[].concat(e,r.data.filter((function(e){return null!==e.position.x&&null!==e.position.y})).map((function(n,l){var s={id:r.id+"."+l,index:e.length+l,serieId:r.id,serieColor:r.color,x:n.position.x,y:n.position.y};return s.color=i(r),s.borderColor=t(s),s.data=g({},n.data,{xFormatted:o(n.data.x),yFormatted:a(n.data.y)}),s})))}),[])}),[r,i,t,o,a])}({series:H,getPointColor:G,getPointBorderColor:L,formatX:k,formatY:B}),U=function(e){var r=e.enableSlices,i=e.points,t=e.width,o=e.height;return(0,n.useMemo)((function(){if(!1===r)return[];if("x"===r){var e=new Map;return i.forEach((function(r){null!==r.data.x&&null!==r.data.y&&(e.has(r.x)?e.get(r.x).push(r):e.set(r.x,[r]))})),Array.from(e.entries()).sort((function(e,r){return e[0]-r[0]})).map((function(e,r,i){var n,a=e[0],l=e[1],s=i[r-1],u=i[r+1];return{id:a,x0:n=s?a-(a-s[0])/2:a,x:a,y0:0,y:0,width:u?a-n+(u[0]-a)/2:t-n,height:o,points:l.reverse()}}))}if("y"===r){var n=new Map;return i.forEach((function(e){null!==e.data.x&&null!==e.data.y&&(n.has(e.y)?n.get(e.y).push(e):n.set(e.y,[e]))})),Array.from(n.entries()).sort((function(e,r){return e[0]-r[0]})).map((function(e,r,i){var n,a,l=e[0],s=e[1],u=i[r-1],c=i[r+1];return n=u?l-(l-u[0])/2:l,a=c?l-n+(c[0]-l)/2:o-n,{id:l,x0:0,x:0,y0:n,y:l,width:t,height:a,points:s.reverse()}}))}}),[r,i])}({enableSlices:j,points:_,width:f,height:p});return{legendData:z,toggleSerie:I,lineGenerator:T({curve:m}),areaGenerator:w({curve:m,yScale:D,areaBaselineValue:v}),getColor:W,series:H,xScale:Z,yScale:D,slices:U,points:_}},B=function(e){var r=e.areaBlendMode,i=e.areaOpacity,n=e.color,o=e.fill,a=e.path,l=(0,t.tf)(),s=l.animate,u=l.config,c=(0,t.NS)(a),d=(0,y.useSpring)({color:n,config:u,immediate:!s});return(0,h.jsx)(y.q.path,{d:c,fill:o||d.color,fillOpacity:i,strokeWidth:0,style:{mixBlendMode:r}})};B.propTypes={areaBlendMode:t.wM.isRequired,areaOpacity:p().number.isRequired,color:p().string,fill:p().string,path:p().string.isRequired};var W=function(e){var r=e.areaGenerator,i=e.areaOpacity,n=e.areaBlendMode,t=e.lines.slice(0).reverse();return(0,h.jsx)("g",{children:t.map((function(e){return(0,h.jsx)(B,g({path:r(e.data.map((function(e){return e.position})))},g({areaOpacity:i,areaBlendMode:n},e)),e.id)}))})};W.propTypes={areaGenerator:p().func.isRequired,areaOpacity:p().number.isRequired,areaBlendMode:t.wM.isRequired,lines:p().arrayOf(p().object).isRequired};var F=(0,n.memo)(W),G=function(e){var r=e.lineGenerator,i=e.points,o=e.color,a=e.thickness,l=(0,n.useMemo)((function(){return r(i)}),[r,i]),s=(0,t.NS)(l);return(0,h.jsx)(y.q.path,{d:s,fill:"none",strokeWidth:a,stroke:o})};G.propTypes={points:p().arrayOf(p().shape({x:p().oneOfType([p().string,p().number]),y:p().oneOfType([p().string,p().number])})),lineGenerator:p().func.isRequired,color:p().string.isRequired,thickness:p().number.isRequired};var L=(0,n.memo)(G),P=function(e){var r=e.lines,i=e.lineGenerator,n=e.lineWidth;return r.slice(0).reverse().map((function(e){var r=e.id,t=e.data,o=e.color;return(0,h.jsx)(L,{id:r,points:t.map((function(e){return e.position})),lineGenerator:i,color:o,thickness:n},r)}))};P.propTypes={lines:p().arrayOf(p().shape({id:p().oneOfType([p().string,p().number]).isRequired,color:p().string.isRequired,data:p().arrayOf(p().shape({data:p().shape({x:p().oneOfType([p().string,p().number,p().instanceOf(Date)]),y:p().oneOfType([p().string,p().number,p().instanceOf(Date)])}).isRequired,position:p().shape({x:p().number,y:p().number}).isRequired})).isRequired})).isRequired,lineWidth:p().number.isRequired,lineGenerator:p().func.isRequired};var E=(0,n.memo)(P),V=function(e){var r=e.slice,i=e.axis,t=e.debug,o=e.tooltip,a=e.isCurrent,l=e.setCurrent,u=(0,s.lL)(),c=u.showTooltipFromEvent,d=u.hideTooltip,f=(0,n.useCallback)((function(e){c((0,n.createElement)(o,{slice:r,axis:i}),e,"right"),l(r)}),[c,o,r]),p=(0,n.useCallback)((function(e){c((0,n.createElement)(o,{slice:r,axis:i}),e,"right")}),[c,o,r]),y=(0,n.useCallback)((function(){d(),l(null)}),[d]);return(0,h.jsx)("rect",{x:r.x0,y:r.y0,width:r.width,height:r.height,stroke:"red",strokeWidth:t?1:0,strokeOpacity:.75,fill:"red",fillOpacity:a&&t?.35:0,onMouseEnter:f,onMouseMove:p,onMouseLeave:y})};V.propTypes={slice:p().object.isRequired,axis:p().oneOf(["x","y"]).isRequired,debug:p().bool.isRequired,height:p().number.isRequired,tooltip:p().oneOfType([p().func,p().object]),isCurrent:p().bool.isRequired,setCurrent:p().func.isRequired};var Y=(0,n.memo)(V),Z=function(e){var r=e.slices,i=e.axis,n=e.debug,t=e.height,o=e.tooltip,a=e.current,l=e.setCurrent;return r.map((function(e){return(0,h.jsx)(Y,{slice:e,axis:i,debug:n,height:t,tooltip:o,setCurrent:l,isCurrent:null!==a&&a.id===e.id},e.id)}))};Z.propTypes={slices:p().arrayOf(p().shape({id:p().oneOfType([p().number,p().string,p().instanceOf(Date)]).isRequired,x:p().number.isRequired,y:p().number.isRequired,points:p().arrayOf(p().object).isRequired})).isRequired,axis:p().oneOf(["x","y"]).isRequired,debug:p().bool.isRequired,height:p().number.isRequired,tooltip:p().oneOfType([p().func,p().object]).isRequired,current:p().object,setCurrent:p().func.isRequired};var D=(0,n.memo)(Z),A=function(e){var r=e.points,i=e.symbol,n=e.size,o=e.borderWidth,a=e.enableLabel,l=e.label,s=e.labelYOffset,u=(0,t.Fg)(),c=(0,t.ji)(l),d=r.reverse().map((function(e){return{id:e.id,x:e.x,y:e.y,datum:e.data,fill:e.color,stroke:e.borderColor,label:a?c(e.data):null}}));return(0,h.jsx)("g",{children:d.map((function(e){return(0,h.jsx)(t.F_,{x:e.x,y:e.y,datum:e.datum,symbol:i,size:n,color:e.fill,borderWidth:o,borderColor:e.stroke,label:e.label,labelYOffset:s,theme:u},e.id)}))})};A.propTypes={points:p().arrayOf(p().object),symbol:p().func,size:p().number.isRequired,color:p().func.isRequired,borderWidth:p().number.isRequired,borderColor:p().func.isRequired,enableLabel:p().bool.isRequired,label:p().oneOfType([p().string,p().func]).isRequired,labelYOffset:p().number};var X=(0,n.memo)(A),z=function(e){var r=e.points,i=e.width,t=e.height,o=e.margin,a=e.setCurrent,l=e.onMouseEnter,u=e.onMouseMove,c=e.onMouseLeave,d=e.onClick,f=e.tooltip,p=e.debug,y=(0,s.lL)(),g=y.showTooltipAt,m=y.hideTooltip,x=(0,n.useCallback)((function(e,r){g((0,n.createElement)(f,{point:e}),[e.x+o.left,e.y+o.top],"top"),a(e),l&&l(e,r)}),[a,g,f,l,o]),v=(0,n.useCallback)((function(e,r){g((0,n.createElement)(f,{point:e}),[e.x+o.left,e.y+o.top],"top"),a(e),u&&u(e,r)}),[a,g,f,u]),R=(0,n.useCallback)((function(e,r){m(),a(null),c&&c(e,r)}),[m,a,c]),q=(0,n.useCallback)((function(e,r){d&&d(e,r)}),[d]);return(0,h.jsx)(b.Kj,{nodes:r,width:i,height:t,onMouseEnter:x,onMouseMove:v,onMouseLeave:R,onClick:q,debug:p})};z.propTypes={points:p().arrayOf(p().object).isRequired,width:p().number.isRequired,height:p().number.isRequired,margin:p().object.isRequired,setCurrent:p().func.isRequired,onMouseEnter:p().func,onMouseMove:p().func,onMouseLeave:p().func,onClick:p().func,tooltip:p().oneOfType([p().func,p().object]).isRequired,debug:p().bool.isRequired};var H=(0,n.memo)(z),I=function(e){var r=e.data,i=e.xScale,u=e.xFormat,c=e.yScale,d=e.yFormat,f=e.layers,p=e.curve,y=e.areaBaselineValue,b=e.colors,m=e.margin,x=e.width,v=e.height,R=e.axisTop,q=e.axisRight,O=e.axisBottom,S=e.axisLeft,C=e.enableGridX,M=e.enableGridY,j=e.gridXValues,T=e.gridYValues,w=e.lineWidth,B=e.enableArea,W=e.areaOpacity,G=e.areaBlendMode,L=e.enablePoints,P=e.pointSymbol,V=e.pointSize,Y=e.pointColor,Z=e.pointBorderWidth,A=e.pointBorderColor,z=e.enablePointLabel,I=e.pointLabel,_=e.pointLabelYOffset,U=e.defs,$=e.fill,N=e.markers,K=e.legends,Q=e.isInteractive,J=e.useMesh,ee=e.debugMesh,re=e.onMouseEnter,ie=e.onMouseMove,ne=e.onMouseLeave,te=e.onClick,oe=e.tooltip,ae=e.enableSlices,le=e.debugSlices,se=e.sliceTooltip,ue=e.enableCrosshair,ce=e.crosshairType,de=e.role,fe=(0,t.Bs)(x,v,m),pe=fe.margin,he=fe.innerWidth,ye=fe.innerHeight,be=fe.outerWidth,ge=fe.outerHeight,me=k({data:r,xScale:i,xFormat:u,yScale:c,yFormat:d,width:he,height:ye,colors:b,curve:p,areaBaselineValue:y,pointColor:Y,pointBorderColor:A,enableSlices:ae}),xe=me.legendData,ve=me.toggleSerie,Re=me.lineGenerator,qe=me.areaGenerator,Oe=me.series,Se=me.xScale,Ce=me.yScale,Me=me.slices,je=me.points,Te=(0,t.Fg)(),we=(0,o.Bf)(Y,Te),ke=(0,o.Bf)(A,Te),Be=(0,n.useState)(null),We=Be[0],Fe=Be[1],Ge=(0,n.useState)(null),Le=Ge[0],Pe=Ge[1],Ee={grid:(0,h.jsx)(a.rj,{theme:Te,width:he,height:ye,xScale:C?Se:null,yScale:M?Ce:null,xValues:j,yValues:T},"grid"),markers:(0,h.jsx)(t.TL,{markers:N,width:he,height:ye,xScale:Se,yScale:Ce,theme:Te},"markers"),axes:(0,h.jsx)(a.dk,{xScale:Se,yScale:Ce,width:he,height:ye,theme:Te,top:R,right:q,bottom:O,left:S},"axes"),areas:null,lines:(0,h.jsx)(E,{lines:Oe,lineGenerator:Re,lineWidth:w},"lines"),slices:null,points:null,crosshair:null,mesh:null,legends:K.map((function(e,r){return(0,h.jsx)(l.$6,g({},e,{containerWidth:he,containerHeight:ye,data:e.data||xe,theme:Te,toggleSerie:e.toggleSerie?ve:void 0}),"legend."+r)}))},Ve=(0,t.yU)(U,Oe,$);return B&&(Ee.areas=(0,h.jsx)(F,{areaGenerator:qe,areaOpacity:W,areaBlendMode:G,lines:Oe},"areas")),Q&&!1!==ae&&(Ee.slices=(0,h.jsx)(D,{slices:Me,axis:ae,debug:le,height:ye,tooltip:se,current:Le,setCurrent:Pe},"slices")),L&&(Ee.points=(0,h.jsx)(X,{points:je,symbol:P,size:V,color:we,borderWidth:Z,borderColor:ke,enableLabel:z,label:I,labelYOffset:_},"points")),Q&&ue&&(null!==We&&(Ee.crosshair=(0,h.jsx)(s.YS,{width:he,height:ye,x:We.x,y:We.y,type:ce},"crosshair")),null!==Le&&(Ee.crosshair=(0,h.jsx)(s.YS,{width:he,height:ye,x:Le.x,y:Le.y,type:ae},"crosshair"))),Q&&J&&!1===ae&&(Ee.mesh=(0,h.jsx)(H,{points:je,width:he,height:ye,margin:pe,current:We,setCurrent:Fe,onMouseEnter:re,onMouseMove:ie,onMouseLeave:ne,onClick:te,tooltip:oe,debug:ee},"mesh")),(0,h.jsx)(t.tM,{defs:Ve,width:be,height:ge,margin:pe,role:de,children:f.map((function(r,i){return"function"==typeof r?(0,h.jsx)(n.Fragment,{children:r(g({},e,{innerWidth:he,innerHeight:ye,series:Oe,slices:Me,points:je,xScale:Se,yScale:Ce,lineGenerator:Re,areaGenerator:qe,currentPoint:We,setCurrentPoint:Fe,currentSlice:Le,setCurrentSlice:Pe}))},i):Ee[r]}))})};I.propTypes=O,I.defaultProps=M;var _=(0,t.li)(I),U=function(e){return(0,h.jsx)(t.d,{children:function(r){var i=r.width,n=r.height;return(0,h.jsx)(_,g({width:i,height:n},e))}})},$=function(e){var r=e.width,i=e.height,o=e.margin,u=e.pixelRatio,c=e.data,d=e.xScale,f=e.xFormat,p=e.yScale,y=e.yFormat,m=e.curve,x=e.layers,v=e.colors,R=e.lineWidth,q=e.enableArea,O=e.areaBaselineValue,S=e.areaOpacity,C=e.enablePoints,M=e.pointSize,j=e.pointColor,T=e.pointBorderWidth,w=e.pointBorderColor,B=e.enableGridX,W=e.gridXValues,F=e.enableGridY,G=e.gridYValues,L=e.axisTop,P=e.axisRight,E=e.axisBottom,V=e.axisLeft,Y=e.legends,Z=e.isInteractive,D=e.debugMesh,A=e.onMouseLeave,X=e.onClick,z=e.tooltip,H=e.canvasRef,I=(0,n.useRef)(null),_=(0,t.Bs)(r,i,o),U=_.margin,$=_.innerWidth,N=_.innerHeight,K=_.outerWidth,Q=_.outerHeight,J=(0,t.Fg)(),ee=(0,n.useState)(null),re=ee[0],ie=ee[1],ne=k({data:c,xScale:d,xFormat:f,yScale:p,yFormat:y,width:$,height:N,colors:v,curve:m,areaBaselineValue:O,pointColor:j,pointBorderColor:w}),te=ne.lineGenerator,oe=ne.areaGenerator,ae=ne.series,le=ne.xScale,se=ne.yScale,ue=ne.points,ce=(0,b.ZR)({points:ue,width:$,height:N,debug:D}),de=ce.delaunay,fe=ce.voronoi;(0,n.useEffect)((function(){H&&(H.current=I.current),I.current.width=K*u,I.current.height=Q*u;var e=I.current.getContext("2d");e.scale(u,u),e.fillStyle=J.background,e.fillRect(0,0,K,Q),e.translate(U.left,U.top),x.forEach((function(r){if("function"==typeof r&&r({ctx:e,innerWidth:$,innerHeight:N,series:ae,points:ue,xScale:le,yScale:se,lineWidth:R,lineGenerator:te,areaGenerator:oe,currentPoint:re,setCurrentPoint:ie}),"grid"===r&&J.grid.line.strokeWidth>0&&(e.lineWidth=J.grid.line.strokeWidth,e.strokeStyle=J.grid.line.stroke,B&&(0,a.FA)(e,{width:$,height:N,scale:le,axis:"x",values:W}),F&&(0,a.FA)(e,{width:$,height:N,scale:se,axis:"y",values:G})),"axes"===r&&(0,a.DZ)(e,{xScale:le,yScale:se,width:$,height:N,top:L,right:P,bottom:E,left:V,theme:J}),"areas"===r&&!0===q&&(e.save(),e.globalAlpha=S,oe.context(e),ae.forEach((function(r){e.fillStyle=r.color,e.beginPath(),oe(r.data.map((function(e){return e.position}))),e.fill()})),e.restore()),"lines"===r&&(te.context(e),ae.forEach((function(r){e.strokeStyle=r.color,e.lineWidth=R,e.beginPath(),te(r.data.map((function(e){return e.position}))),e.stroke()}))),"points"===r&&!0===C&&M>0&&ue.forEach((function(r){e.fillStyle=r.color,e.beginPath(),e.arc(r.x,r.y,M/2,0,2*Math.PI),e.fill(),T>0&&(e.strokeStyle=r.borderColor,e.lineWidth=T,e.stroke())})),"mesh"===r&&!0===D&&((0,b.qF)(e,fe),re&&(0,b.r$)(e,fe,re.index)),"legends"===r){var i=ae.map((function(e){return{id:e.id,label:e.id,color:e.color}})).reverse();Y.forEach((function(r){(0,l.as)(e,g({},r,{data:r.data||i,containerWidth:$,containerHeight:N,theme:J}))}))}}))}),[I,K,Q,x,J,te,ae,le,se,B,W,F,G,L,P,E,V,Y,ue,C,M,re]);var pe=(0,n.useCallback)((function(e){var r=(0,t.P6)(I.current,e),i=r[0],n=r[1];if(!(0,t.zn)(U.left,U.top,$,N,i,n))return null;var o=de.find(i-U.left,n-U.top);return ue[o]}),[I,U,$,N,de]),he=(0,s.lL)(),ye=he.showTooltipFromEvent,be=he.hideTooltip,ge=(0,n.useCallback)((function(e){var r=pe(e);ie(r),r?ye((0,n.createElement)(z,{point:r}),e):be()}),[pe,ie,ye,be,z]),me=(0,n.useCallback)((function(e){be(),ie(null),re&&A&&A(re,e)}),[be,ie,A]),xe=(0,n.useCallback)((function(e){if(X){var r=pe(e);r&&X(r,e)}}),[pe,X]);return(0,h.jsx)("canvas",{ref:I,width:K*u,height:Q*u,style:{width:K,height:Q,cursor:Z?"auto":"normal"},onMouseEnter:Z?ge:void 0,onMouseMove:Z?ge:void 0,onMouseLeave:Z?me:void 0,onClick:Z?xe:void 0})};$.propTypes=S,$.defaultProps=j;var N=(0,t.li)($),K=(0,n.forwardRef)((function(e,r){return(0,h.jsx)(N,g({},e,{canvasRef:r}))})),Q=(0,n.forwardRef)((function(e,r){return(0,h.jsx)(t.d,{children:function(i){var n=i.width,t=i.height;return(0,h.jsx)(K,g({width:n,height:t},e,{ref:r}))}})}))}}]);
//# sourceMappingURL=e92164ecbca7654978008464b70f515ba0cd82ad-de977dcf7a38f43eed64.js.map