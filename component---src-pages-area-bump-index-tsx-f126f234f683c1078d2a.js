(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[9903],{41584:function(e,t){"use strict";var n=Math.PI,i=2*n,r=1e-6,a=i-r;function o(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function l(){return new o}o.prototype=l.prototype={constructor:o,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,n,i){this._+="Q"+ +e+","+ +t+","+(this._x1=+n)+","+(this._y1=+i)},bezierCurveTo:function(e,t,n,i,r,a){this._+="C"+ +e+","+ +t+","+ +n+","+ +i+","+(this._x1=+r)+","+(this._y1=+a)},arcTo:function(e,t,i,a,o){e=+e,t=+t,i=+i,a=+a,o=+o;var l=this._x1,s=this._y1,u=i-e,c=a-t,d=l-e,f=s-t,p=d*d+f*f;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=t);else if(p>r)if(Math.abs(f*u-c*d)>r&&o){var y=i-l,h=a-s,x=u*u+c*c,v=y*y+h*h,g=Math.sqrt(x),m=Math.sqrt(p),b=o*Math.tan((n-Math.acos((x+p-v)/(2*g*m)))/2),k=b/m,S=b/g;Math.abs(k-1)>r&&(this._+="L"+(e+k*d)+","+(t+k*f)),this._+="A"+o+","+o+",0,0,"+ +(f*y>d*h)+","+(this._x1=e+S*u)+","+(this._y1=t+S*c)}else this._+="L"+(this._x1=e)+","+(this._y1=t);else;},arc:function(e,t,o,l,s,u){e=+e,t=+t,u=!!u;var c=(o=+o)*Math.cos(l),d=o*Math.sin(l),f=e+c,p=t+d,y=1^u,h=u?l-s:s-l;if(o<0)throw new Error("negative radius: "+o);null===this._x1?this._+="M"+f+","+p:(Math.abs(this._x1-f)>r||Math.abs(this._y1-p)>r)&&(this._+="L"+f+","+p),o&&(h<0&&(h=h%i+i),h>a?this._+="A"+o+","+o+",0,1,"+y+","+(e-c)+","+(t-d)+"A"+o+","+o+",0,1,"+y+","+(this._x1=f)+","+(this._y1=p):h>r&&(this._+="A"+o+","+o+",0,"+ +(h>=n)+","+y+","+(this._x1=e+o*Math.cos(s))+","+(this._y1=t+o*Math.sin(s))))},rect:function(e,t,n,i){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +n+"v"+ +i+"h"+-n+"Z"},toString:function(){return this._}},t.Z=l},94942:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(41584),r=n(3583),a=n(30964),o=n(18091),l=n(92519);function s(){var e=l.x,t=null,n=(0,r.Z)(0),s=l.y,u=(0,r.Z)(!0),c=null,d=a.Z,f=null;function p(r){var a,o,l,p,y,h=r.length,x=!1,v=new Array(h),g=new Array(h);for(null==c&&(f=d(y=(0,i.Z)())),a=0;a<=h;++a){if(!(a<h&&u(p=r[a],a,r))===x)if(x=!x)o=a,f.areaStart(),f.lineStart();else{for(f.lineEnd(),f.lineStart(),l=a-1;l>=o;--l)f.point(v[l],g[l]);f.lineEnd(),f.areaEnd()}x&&(v[a]=+e(p,a,r),g[a]=+n(p,a,r),f.point(t?+t(p,a,r):v[a],s?+s(p,a,r):g[a]))}if(y)return f=null,y+""||null}function y(){return(0,o.Z)().defined(u).curve(d).context(c)}return p.x=function(n){return arguments.length?(e="function"==typeof n?n:(0,r.Z)(+n),t=null,p):e},p.x0=function(t){return arguments.length?(e="function"==typeof t?t:(0,r.Z)(+t),p):e},p.x1=function(e){return arguments.length?(t=null==e?null:"function"==typeof e?e:(0,r.Z)(+e),p):t},p.y=function(e){return arguments.length?(n="function"==typeof e?e:(0,r.Z)(+e),s=null,p):n},p.y0=function(e){return arguments.length?(n="function"==typeof e?e:(0,r.Z)(+e),p):n},p.y1=function(e){return arguments.length?(s=null==e?null:"function"==typeof e?e:(0,r.Z)(+e),p):s},p.lineX0=p.lineY0=function(){return y().x(e).y(n)},p.lineY1=function(){return y().x(e).y(s)},p.lineX1=function(){return y().x(t).y(n)},p.defined=function(e){return arguments.length?(u="function"==typeof e?e:(0,r.Z)(!!e),p):u},p.curve=function(e){return arguments.length?(d=e,null!=c&&(f=d(c)),p):d},p.context=function(e){return arguments.length?(null==e?c=f=null:f=d(c=e),p):c},p}},3583:function(e,t,n){"use strict";function i(e){return function(){return e}}n.d(t,{Z:function(){return i}})},18091:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(41584),r=n(3583),a=n(30964),o=n(92519);function l(){var e=o.x,t=o.y,n=(0,r.Z)(!0),l=null,s=a.Z,u=null;function c(r){var a,o,c,d=r.length,f=!1;for(null==l&&(u=s(c=(0,i.Z)())),a=0;a<=d;++a)!(a<d&&n(o=r[a],a,r))===f&&((f=!f)?u.lineStart():u.lineEnd()),f&&u.point(+e(o,a,r),+t(o,a,r));if(c)return u=null,c+""||null}return c.x=function(t){return arguments.length?(e="function"==typeof t?t:(0,r.Z)(+t),c):e},c.y=function(e){return arguments.length?(t="function"==typeof e?e:(0,r.Z)(+e),c):t},c.defined=function(e){return arguments.length?(n="function"==typeof e?e:(0,r.Z)(!!e),c):n},c.curve=function(e){return arguments.length?(s=e,null!=l&&(u=s(l)),c):s},c.context=function(e){return arguments.length?(null==e?l=u=null:u=s(l=e),c):l},c}},92519:function(e,t,n){"use strict";function i(e){return e[0]}function r(e){return e[1]}n.d(t,{x:function(){return i},y:function(){return r}})},62370:function(e,t,n){"use strict";n.d(t,{h8:function(){return s},h6:function(){return u},Ld:function(){return c}});var i=n(48159),r=n.n(i),a=n(76744),o=n.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}var s=function(e,t){var n=(void 0===t?{}:t).exclude,i=void 0===n?[]:n;return function(t,n){void 0===n&&(n={});var a={};return Object.keys(t).forEach((function(i){e[i]&&(a[i]=e[i](t[i],t,n))})),l({},r()(t,i),a)}},u=function(e){return function(t,n){return n["axis"+o()(e)].enable?r()(t,["enable"]):null}},c=function(e){var t=e.format;return e.enabled?t:void 0}},43384:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});n(27378);var i=n(4215),r=n.n(i),a=n(91311),o=n.n(a),l=n(25414),s=n(98383),u=n(10536),c=n(22543),d=n(70531),f=n(80169),p=n(3759),y=["svg"],h=[{key:"data",group:"Base",help:"Chart data.",description:"\n            Chart data, which must conform to this structure:\n\n            ```\n            {\n                id:   string\n                data: {\n                    x: number | string\n                    y: number\n                }[]\n            }[]\n            ```\n\n            This component assumes that every serie contains all\n            x values sorted the same way they should appear on the chart.\n            \n            As this component is a TypeScript generic, it is possible to customize\n            the datum using the `Datum` arg, and it's also possible to add\n            some extra properties to the series by passing `ExtraProps`.\n        ",required:!0,type:"AreaBumpSerie<Datum, ExtraProps>[]",flavors:y}].concat((0,p.nk)(y),[{key:"align",group:"Base",help:"Chart alignment.",type:"string",required:!1,defaultValue:u.ap.align,flavors:y,control:{type:"choices",choices:[{label:"start",value:"start"},{label:"middle",value:"middle"},{label:"end",value:"end"}]}},{key:"interpolation",group:"Base",type:"string",help:"Area interpolation.",required:!1,defaultValue:u.ap.interpolation,flavors:y,control:{type:"radio",choices:[{label:"smooth",value:"smooth"},{label:"linear",value:"linear"}]}},{key:"spacing",group:"Base",type:"number",help:"Spacing.",required:!1,flavors:y,defaultValue:u.ap.spacing,control:{type:"range",min:0,max:32}},{key:"xPadding",help:"X padding.",group:"Base",type:"number",required:!1,defaultValue:u.ap.xPadding,flavors:y,control:{type:"range",min:0,max:1,step:.05}},(0,f.JR)(y),(0,p.at)({flavors:y,defaultValue:u.ap.colors}),(0,p.bG)({target:"areas",flavors:["svg"],defaultValue:u.ap.blendMode}),{key:"fillOpacity",group:"Style",type:"number | (serie: Serie) => number",required:!1,help:"Area fill opacity.",defaultValue:u.ap.fillOpacity,flavors:y,control:{type:"opacity"}},{key:"activeFillOpacity",group:"Style",type:"number | (serie: Serie) => number",required:!1,help:"Area fill opacity for active series.",defaultValue:u.ap.activeFillOpacity,flavors:y,control:{type:"opacity"}},{key:"inactiveFillOpacity",group:"Style",type:"number | (serie: Serie) => number",required:!1,help:"Area fill opacity for inactive series.",defaultValue:u.ap.inactiveFillOpacity,flavors:y,control:{type:"opacity"}},{key:"borderWidth",group:"Style",type:"number | (serie: Serie) => number",required:!1,help:"Area border width.",defaultValue:u.ap.borderWidth,flavors:y,control:{type:"lineWidth"}},{key:"activeBorderWidth",group:"Style",type:"number | (serie: Serie) => number",required:!1,help:"Area border width for active series.",defaultValue:u.ap.activeBorderWidth,flavors:y,control:{type:"lineWidth"}},{key:"inactiveBorderWidth",group:"Style",type:"number | (serie: Serie) => number",required:!1,help:"Area border width for inactive series.",defaultValue:u.ap.inactiveBorderWidth,flavors:y,control:{type:"lineWidth"}},{key:"borderColor",group:"Style",type:"string | object | Function",required:!1,help:"Method to compute area border color.",defaultValue:u.ap.borderColor,flavors:y,control:{type:"inheritedColor"}},{key:"borderOpacity",group:"Style",type:"number | (serie: Serie) => number",required:!1,help:"Area border opacity.",flavors:y,defaultValue:u.ap.borderOpacity,control:{type:"opacity"}},{key:"activeBorderOpacity",group:"Style",type:"number | (serie: Serie) => number",required:!1,help:"Area border opacity for active series.",defaultValue:u.ap.activeBorderOpacity,flavors:y,control:{type:"opacity"}},{key:"inactiveBorderOpacity",group:"Style",type:"number | (serie: Serie) => number",required:!1,help:"Area border opacity for inactive series.",defaultValue:u.ap.inactiveBorderOpacity,flavors:y,control:{type:"opacity"}}],(0,f.uE)("Style",["svg"]),[{key:"startLabel",group:"Labels",type:"boolean | (serie: AreaBumpSerie) => string",required:!1,help:"Start label, use a boolean to enable/disable, or a function to customize its text.",defaultValue:u.ap.startLabel,flavors:y,control:{type:"switch"}},{key:"startLabelPadding",group:"Labels",type:"number",required:!1,help:"Define area start label padding.",defaultValue:u.ap.startLabelPadding,flavors:y,control:{type:"range",min:0,max:30}},{key:"startLabelTextColor",group:"Labels",type:"InheritedColorConfig<AreaBumpComputedSerie>",required:!1,help:"Method to compute start label text color.",flavors:y,defaultValue:u.ap.startLabelTextColor,control:{type:"inheritedColor"}},{key:"endLabel",group:"Labels",type:"boolean | (serie: AreaBumpSerie) => string",required:!1,help:"End label, use a boolean to enable/disable, or a function to customize its text.",defaultValue:u.ap.endLabel,flavors:y,control:{type:"switch"}},{key:"endLabelPadding",group:"Labels",type:"number",required:!1,help:"Define area end label padding.",defaultValue:u.ap.endLabelPadding,flavors:y,control:{type:"range",min:0,max:30}},{key:"endLabelTextColor",help:"Method to compute end label text color.",type:"InheritedColorConfig<AreaBumpComputedSerie>",required:!1,defaultValue:u.ap.endLabelTextColor,group:"Labels",flavors:y,control:{type:"inheritedColor"}}],(0,p.yW)({flavors:y,xDefault:u.ap.enableGridX,y:!1}),(0,p.Do)({flavors:y,exclude:["right","left"]}),[(0,p.y1)({flavors:["svg"],defaultValue:u.ap.isInteractive}),{key:"defaultActiveSerieIds",group:"Interactivity",type:"string[]",help:"Default active serie ids.",required:!1,flavors:y},{key:"onMouseEnter",group:"Interactivity",type:"(serie: AreaBumpComputedSerie, event: MouseEvent) => void",help:"onMouseEnter handler.",required:!1,flavors:y},{key:"onMouseMove",group:"Interactivity",type:"(serie: AreaBumpComputedSerie, event: MouseEvent) => void",help:"onMouseMove handler.",required:!1,flavors:y},{key:"onMouseLeave",group:"Interactivity",type:"(serie: AreaBumpComputedSerie, event: MouseEvent) => void",help:"onMouseLeave handler.",required:!1,flavors:y},{key:"onClick",group:"Interactivity",type:"(serie: AreaBumpComputedSerie, event: MouseEvent) => void",help:"onClick handler.",required:!1,flavors:y},{key:"tooltip",group:"Interactivity",type:"Function",required:!1,help:"Custom tooltip component.",flavors:y,description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML\n            element and will receive the series's data.\n        "}],(0,f.$j)(["svg"],u.ap,"react-spring")),x=(0,f.R2)(h),v=n(62370),g=(0,v.h8)({axisTop:(0,v.h6)("top"),axisBottom:(0,v.h6)("bottom")},{exclude:["enable axisTop","enable axisBottom"]}),m=n(24246);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},b.apply(this,arguments)}var k=["JavaScript","ReasonML","TypeScript","Elm","CoffeeScript"],S=function(){var e=r()(2e3,2006);return k.map((function(t){return{id:t,data:e.map((function(e){return{x:e,y:o()(10,30)}}))}}))},_={margin:{top:40,right:100,bottom:40,left:100},align:u.ap.align,interpolation:u.ap.interpolation,spacing:8,xPadding:u.ap.xPadding,colors:{scheme:"nivo"},blendMode:"multiply",fillOpacity:u.ap.fillOpacity,activeFillOpacity:u.ap.activeFillOpacity,inactiveFillOpacity:u.ap.inactiveFillOpacity,defs:[(0,s.Qr)("dots",{background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0}),(0,s.l0)("lines",{background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10})],fill:[{match:{id:"CoffeeScript"},id:"dots"},{match:{id:"TypeScript"},id:"lines"}],borderWidth:u.ap.borderWidth,activeBorderWidth:u.ap.activeBorderWidth,inactiveBorderWidth:u.ap.inactiveBorderWidth,borderColor:u.ap.borderColor,borderOpacity:u.ap.borderOpacity,activeBorderOpacity:u.ap.activeBorderOpacity,inactiveBorderOpacity:u.ap.inactiveBorderOpacity,startLabel:"id",startLabelPadding:u.ap.startLabelPadding,startLabelTextColor:u.ap.startLabelTextColor,endLabel:"id",endLabelPadding:u.ap.endLabelPadding,endLabelTextColor:u.ap.endLabelTextColor,enableGridX:u.ap.enableGridX,axisTop:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendPosition:"middle",legendOffset:-36},axisBottom:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendPosition:"middle",legendOffset:32},isInteractive:!0,animate:u.ap.animate,motionConfig:u.ap.motionConfig},P=function(){var e=(0,l.useStaticQuery)("2774393778").image.childImageSharp.gatsbyImageData;return(0,m.jsx)(c.T,{name:"AreaBump",meta:d.U,icon:"area-bump",flavors:d.K,currentFlavor:"svg",properties:x,defaultProperties:u.ap,initialProperties:_,propertiesMapper:g,generateData:S,image:e,children:function(e,t,n,i){return(0,m.jsx)(u.n6,b({data:t},e,{theme:n,onClick:function(e){return i({type:"click",label:"[serie] "+e.id,color:e.color,data:e})}}))}})}},44365:function(e,t,n){"use strict";n.d(t,{dk:function(){return k},RD:function(){return v},rj:function(){return P},VT:function(){return m},DZ:function(){return O},RN:function(){return C},FA:function(){return M}});var i=n(27378),r=n(58493),a=n(98383),o=n(6164),l=n(16935),s=n(770),u=n(24246),c=n(23615),d=n.n(c);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}var p=function(e){var t,n=e.axis,i=e.scale,r=e.ticksPosition,o=e.tickValues,l=e.tickSize,u=e.tickPadding,c=e.tickRotation,d=e.engine,p=void 0===d?"svg":d,y=(0,s.xX)(i,o),h=a.a6[p],x="bandwidth"in i?(0,s.Gv)(i):i,v={lineX:0,lineY:0},g={textX:0,textY:0},m="object"==typeof document&&"rtl"===document.dir,b=h.align.center,k=h.baseline.center;return"x"===n?(t=function(e){var t;return{x:null!=(t=x(e))?t:0,y:0}},v.lineY=l*("after"===r?1:-1),g.textY=(l+u)*("after"===r?1:-1),k="after"===r?h.baseline.top:h.baseline.bottom,0===c?b=h.align.center:"after"===r&&c<0||"before"===r&&c>0?(b=h.align[m?"left":"right"],k=h.baseline.center):("after"===r&&c>0||"before"===r&&c<0)&&(b=h.align[m?"right":"left"],k=h.baseline.center)):(t=function(e){var t;return{x:0,y:null!=(t=x(e))?t:0}},v.lineX=l*("after"===r?1:-1),g.textX=(l+u)*("after"===r?1:-1),b="after"===r?h.align.left:h.align.right),{ticks:y.map((function(e){return f({key:"number"==typeof e||"string"==typeof e?e:""+e,value:e},t(e),v,g)})),textAlign:b,textBaseline:k}},y=function(e,t){if(void 0===e||"function"==typeof e)return e;if("time"===t.type){var n=(0,o.i$)(e);return function(e){return n(e instanceof Date?e:new Date(e))}}return(0,l.WU)(e)},h=function(e){var t,n=e.width,i=e.height,r=e.scale,a=e.axis,o=e.values,l=(t=o,(Array.isArray(t)?o:void 0)||(0,s.xX)(r,o)),u="bandwidth"in r?(0,s.Gv)(r):r,c="x"===a?l.map((function(e){var t,n;return{key:""+e,x1:null!=(t=u(e))?t:0,x2:null!=(n=u(e))?n:0,y1:0,y2:i}})):l.map((function(e){var t,i;return{key:""+e,x1:0,x2:n,y1:null!=(t=u(e))?t:0,y2:null!=(i=u(e))?i:0}}));return c},x=(0,i.memo)((function(e){var t,n=e.value,o=e.format,l=e.lineX,s=e.lineY,c=e.onClick,d=e.textBaseline,p=e.textAnchor,y=e.animatedProps,h=(0,a.Fg)(),x=null!=(t=null==o?void 0:o(n))?t:n,v=(0,i.useMemo)((function(){var e={opacity:y.opacity};return c?{style:f({},e,{cursor:"pointer"}),onClick:function(e){return c(e,x)}}:{style:e}}),[y.opacity,c,x]);return(0,u.jsxs)(r.q.g,f({transform:y.transform},v,{children:[(0,u.jsx)("line",{x1:0,x2:l,y1:0,y2:s,style:h.axis.ticks.line}),(0,u.jsx)(r.q.text,{dominantBaseline:d,textAnchor:p,transform:y.textTransform,style:h.axis.ticks.text,children:x})]}))})),v=(0,i.memo)((function(e){var t=e.axis,n=e.scale,o=e.x,l=void 0===o?0:o,s=e.y,c=void 0===s?0:s,d=e.length,h=e.ticksPosition,v=e.tickValues,g=e.tickSize,m=void 0===g?5:g,b=e.tickPadding,k=void 0===b?5:b,S=e.tickRotation,_=void 0===S?0:S,P=e.format,C=e.renderTick,O=void 0===C?x:C,M=e.legend,B=e.legendPosition,T=void 0===B?"end":B,A=e.legendOffset,q=void 0===A?0:A,L=e.onClick,w=e.ariaHidden,V=(0,a.Fg)(),W=(0,i.useMemo)((function(){return y(P,n)}),[P,n]),j=p({axis:t,scale:n,ticksPosition:h,tickValues:v,tickSize:m,tickPadding:k,tickRotation:_}),Z=j.ticks,E=j.textAlign,X=j.textBaseline,F=null;if(void 0!==M){var z,I=0,Y=0,D=0;"y"===t?(D=-90,I=q,"start"===T?(z="start",Y=d):"middle"===T?(z="middle",Y=d/2):"end"===T&&(z="end")):(Y=q,"start"===T?z="start":"middle"===T?(z="middle",I=d/2):"end"===T&&(z="end",I=d)),F=(0,u.jsx)("text",{transform:"translate("+I+", "+Y+") rotate("+D+")",textAnchor:z,style:f({dominantBaseline:"central"},V.axis.legend.text),children:M})}var R=(0,a.tf)(),G=R.animate,H=R.config,N=(0,r.useSpring)({transform:"translate("+l+","+c+")",lineX2:"x"===t?d:0,lineY2:"x"===t?0:d,config:H,immediate:!G}),Q=(0,r.useTransition)(Z,{keys:function(e){return e.key},initial:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+_+")"}},from:function(e){return{opacity:0,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+_+")"}},enter:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+_+")"}},update:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+_+")"}},leave:{opacity:0},config:H,immediate:!G});return(0,u.jsxs)(r.q.g,{transform:N.transform,"aria-hidden":w,children:[Q((function(e,t,n,r){return i.createElement(O,f({tickIndex:r,format:W,rotate:_,textBaseline:X,textAnchor:E,animatedProps:e},t,L?{onClick:L}:{}))})),(0,u.jsx)(r.q.line,{style:V.axis.domain.line,x1:0,x2:N.lineX2,y1:0,y2:N.lineY2}),F]})})),g={ticksPosition:d().oneOf(["before","after"]),tickValues:d().oneOfType([d().number,d().arrayOf(d().oneOfType([d().number,d().string,d().instanceOf(Date)])),d().string]),tickSize:d().number,tickPadding:d().number,tickRotation:d().number,format:d().oneOfType([d().func,d().string]),renderTick:d().func,legend:d().node,legendPosition:d().oneOf(["start","middle","end"]),legendOffset:d().number,ariaHidden:d().bool},m=d().shape(g),b=["top","right","bottom","left"],k=(0,i.memo)((function(e){var t=e.xScale,n=e.yScale,i=e.width,r=e.height,a={top:e.top,right:e.right,bottom:e.bottom,left:e.left};return(0,u.jsx)(u.Fragment,{children:b.map((function(e){var o=a[e];if(!o)return null;var l="top"===e||"bottom"===e;return(0,u.jsx)(v,f({},o,{axis:l?"x":"y",x:"right"===e?i:0,y:"bottom"===e?r:0,scale:l?t:n,length:l?i:r,ticksPosition:"top"===e||"left"===e?"before":"after"}),e)}))})})),S=(0,i.memo)((function(e){var t=e.animatedProps,n=(0,a.Fg)();return(0,u.jsx)(r.q.line,f({},t,n.grid.line))})),_=(0,i.memo)((function(e){var t=e.lines,n=(0,a.tf)(),o=n.animate,l=n.config,s=(0,r.useTransition)(t,{keys:function(e){return e.key},initial:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},from:function(e){return{opacity:0,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},enter:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},update:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},leave:{opacity:0},config:l,immediate:!o});return(0,u.jsx)("g",{children:s((function(e,t){return(0,i.createElement)(S,f({},t,{key:t.key,animatedProps:e}))}))})})),P=(0,i.memo)((function(e){var t=e.width,n=e.height,r=e.xScale,a=e.yScale,o=e.xValues,l=e.yValues,s=(0,i.useMemo)((function(){return!!r&&h({width:t,height:n,scale:r,axis:"x",values:o})}),[r,o,t,n]),c=(0,i.useMemo)((function(){return!!a&&h({width:t,height:n,scale:a,axis:"y",values:l})}),[n,t,a,l]);return(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(_,{lines:s}),c&&(0,u.jsx)(_,{lines:c})]})})),C=function(e,t){var n,i=t.axis,r=t.scale,o=t.x,l=void 0===o?0:o,s=t.y,u=void 0===s?0:s,c=t.length,d=t.ticksPosition,f=t.tickValues,y=t.tickSize,h=void 0===y?5:y,x=t.tickPadding,v=void 0===x?5:x,g=t.tickRotation,m=void 0===g?0:g,b=t.format,k=t.legend,S=t.legendPosition,_=void 0===S?"end":S,P=t.legendOffset,C=void 0===P?0:P,O=t.theme,M=p({axis:i,scale:r,ticksPosition:d,tickValues:f,tickSize:h,tickPadding:v,tickRotation:m,engine:"canvas"}),B=M.ticks,T=M.textAlign,A=M.textBaseline;e.save(),e.translate(l,u),e.textAlign=T,e.textBaseline=A,e.font=(O.axis.ticks.text.fontWeight?O.axis.ticks.text.fontWeight+" ":"")+O.axis.ticks.text.fontSize+"px "+O.axis.ticks.text.fontFamily,(null!=(n=O.axis.domain.line.strokeWidth)?n:0)>0&&(e.lineWidth=Number(O.axis.domain.line.strokeWidth),e.lineCap="square",O.axis.domain.line.stroke&&(e.strokeStyle=O.axis.domain.line.stroke),e.beginPath(),e.moveTo(0,0),e.lineTo("x"===i?c:0,"x"===i?0:c),e.stroke());var q="function"==typeof b?b:function(e){return""+e};if(B.forEach((function(t){var n;(null!=(n=O.axis.ticks.line.strokeWidth)?n:0)>0&&(e.lineWidth=Number(O.axis.ticks.line.strokeWidth),e.lineCap="square",O.axis.ticks.line.stroke&&(e.strokeStyle=O.axis.ticks.line.stroke),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+t.lineX,t.y+t.lineY),e.stroke());var i=q(t.value);e.save(),e.translate(t.x+t.textX,t.y+t.textY),e.rotate((0,a.Ht)(m)),O.axis.ticks.text.fill&&(e.fillStyle=O.axis.ticks.text.fill),e.fillText(String(i),0,0),e.restore()})),void 0!==k){var L=0,w=0,V=0,W="center";"y"===i?(V=-90,L=C,"start"===_?(W="start",w=c):"middle"===_?(W="center",w=c/2):"end"===_&&(W="end")):(w=C,"start"===_?W="start":"middle"===_?(W="center",L=c/2):"end"===_&&(W="end",L=c)),e.translate(L,w),e.rotate((0,a.Ht)(V)),e.font=(O.axis.legend.text.fontWeight?O.axis.legend.text.fontWeight+" ":"")+O.axis.legend.text.fontSize+"px "+O.axis.legend.text.fontFamily,O.axis.legend.text.fill&&(e.fillStyle=O.axis.legend.text.fill),e.textAlign=W,e.textBaseline="middle",e.fillText(k,0,0)}e.restore()},O=function(e,t){var n=t.xScale,i=t.yScale,r=t.width,a=t.height,o=t.top,l=t.right,s=t.bottom,u=t.left,c=t.theme,d={top:o,right:l,bottom:s,left:u};b.forEach((function(t){var o=d[t];if(!o)return null;var l="top"===t||"bottom"===t,s="top"===t||"left"===t?"before":"after",u=l?n:i,p=y(o.format,u);C(e,f({},o,{axis:l?"x":"y",x:"right"===t?r:0,y:"bottom"===t?a:0,scale:u,format:p,length:l?r:a,ticksPosition:s,theme:c}))}))},M=function(e,t){var n=t.width,i=t.height,r=t.scale,a=t.axis,o=t.values;h({width:n,height:i,scale:r,axis:a,values:o}).forEach((function(t){e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()}))}},76418:function(e){var t=Math.floor,n=Math.random;e.exports=function(e,i){return e+t(n()*(i-e+1))}},91311:function(e,t,n){var i=n(76418),r=n(57535),a=n(94919),o=parseFloat,l=Math.min,s=Math.random;e.exports=function(e,t,n){if(n&&"boolean"!=typeof n&&r(e,t,n)&&(t=n=void 0),void 0===n&&("boolean"==typeof t?(n=t,t=void 0):"boolean"==typeof e&&(n=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=a(e),void 0===t?(t=e,e=0):t=a(t)),e>t){var u=e;e=t,t=u}if(n||e%1||t%1){var c=s();return l(e+c*(t-e+o("1e-"+((c+"").length-1))),t)}return i(e,t)}}}]);
//# sourceMappingURL=component---src-pages-area-bump-index-tsx-f126f234f683c1078d2a.js.map