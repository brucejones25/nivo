"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[4053],{17241:function(e,t,i){i.r(t);i(27378);var n=i(88700),o=i(69857),a=i(60167),r=i(54418),l=i(4141),c=i(67153),s=i(24246);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},d.apply(this,arguments)}var f={margin:{top:60,right:140,bottom:70,left:90},xScale:{type:"linear",min:0,max:"auto"},xFormat:{format:">-.2f",enabled:!0},yScale:{type:"linear",min:0,max:"auto"},yFormat:{format:">-.2f",enabled:!0},pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,colors:n.mX.colors,nodeSize:5,axisTop:{enable:!1,orient:"top",tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:36},axisRight:{enable:!1,orient:"right",tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:0},axisBottom:{enable:!0,orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"weight",legendPosition:"middle",legendOffset:46,format:function(e){return e+" kg"}},axisLeft:{enable:!0,orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"size",legendPosition:"middle",legendOffset:-60,format:function(e){return e+" cm"}},enableGridX:n.mX.enableGridX,enableGridY:n.mX.enableGridY,isInteractive:n.mX.isInteractive,useMesh:n.mX.useMesh,debugMesh:n.mX.debugMesh,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:130,translateY:0,itemWidth:100,itemHeight:12,itemsSpacing:5,itemDirection:"left-to-right",symbolSize:12,symbolShape:"rect",onClick:function(e){alert(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemOpacity:1}}]}]};t.default=function(){return(0,s.jsx)(o.T,{name:"ScatterPlotCanvas",meta:a.YW,icon:"scatterplot",flavors:a.Kk,currentFlavor:"canvas",properties:l.X,initialProperties:f,defaultProperties:n.mX,propertiesMapper:r.Z,generateData:c.g,children:function(e,t,i,o){return(0,s.jsx)(n.vZ,d({data:t},e,{theme:i,onClick:function(e){o({type:"click",label:"[node] id: "+e.id+", x: "+e.x+", y: "+e.y,color:e.color,data:e})}}))}})}}}]);
//# sourceMappingURL=component---src-pages-scatterplot-canvas-js-fcf0ff8c4a2d181b03e3.js.map