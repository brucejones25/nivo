"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[8590],{41584:function(t,n){var e=Math.PI,r=2*e,i=1e-6,o=r-i;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function u(){return new a}a.prototype=u.prototype={constructor:a,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,r,o,a){t=+t,n=+n,r=+r,o=+o,a=+a;var u=this._x1,s=this._y1,l=r-t,c=o-n,f=u-t,d=s-n,h=f*f+d*d;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(h>i)if(Math.abs(d*l-c*f)>i&&a){var g=r-u,p=o-s,v=l*l+c*c,x=g*g+p*p,y=Math.sqrt(v),R=Math.sqrt(h),A=a*Math.tan((e-Math.acos((v+h-x)/(2*y*R)))/2),m=A/R,M=A/y;Math.abs(m-1)>i&&(this._+="L"+(t+m*f)+","+(n+m*d)),this._+="A"+a+","+a+",0,0,"+ +(d*g>f*p)+","+(this._x1=t+M*l)+","+(this._y1=n+M*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,a,u,s,l){t=+t,n=+n,l=!!l;var c=(a=+a)*Math.cos(u),f=a*Math.sin(u),d=t+c,h=n+f,g=1^l,p=l?u-s:s-u;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+d+","+h:(Math.abs(this._x1-d)>i||Math.abs(this._y1-h)>i)&&(this._+="L"+d+","+h),a&&(p<0&&(p=p%r+r),p>o?this._+="A"+a+","+a+",0,1,"+g+","+(t-c)+","+(n-f)+"A"+a+","+a+",0,1,"+g+","+(this._x1=d)+","+(this._y1=h):p>i&&(this._+="A"+a+","+a+",0,"+ +(p>=e)+","+g+","+(this._x1=t+a*Math.cos(s))+","+(this._y1=n+a*Math.sin(s))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}},n.Z=u},29140:function(t,n,e){e.d(n,{Z:function(){return h}});var r=e(41584),i=e(3583),o=e(79074);function a(t){return t.innerRadius}function u(t){return t.outerRadius}function s(t){return t.startAngle}function l(t){return t.endAngle}function c(t){return t&&t.padAngle}function f(t,n,e,r,i,a,u,s){var l=e-t,c=r-n,f=u-i,d=s-a,h=d*l-f*c;if(!(h*h<o.Ho))return[t+(h=(f*(n-a)-d*(t-i))/h)*l,n+h*c]}function d(t,n,e,r,i,a,u){var s=t-e,l=n-r,c=(u?a:-a)/(0,o._b)(s*s+l*l),f=c*l,d=-c*s,h=t+f,g=n+d,p=e+f,v=r+d,x=(h+p)/2,y=(g+v)/2,R=p-h,A=v-g,m=R*R+A*A,M=i-a,_=h*v-p*g,C=(A<0?-1:1)*(0,o._b)((0,o.Fp)(0,M*M*m-_*_)),b=(_*A-R*C)/m,k=(-_*R-A*C)/m,L=(_*A+R*C)/m,O=(-_*R+A*C)/m,E=b-x,T=k-y,Z=L-x,P=O-y;return E*E+T*T>Z*Z+P*P&&(b=L,k=O),{cx:b,cy:k,x01:-f,y01:-d,x11:b*(i/M-1),y11:k*(i/M-1)}}function h(){var t=a,n=u,e=(0,i.Z)(0),h=null,g=s,p=l,v=c,x=null;function y(){var i,a,u=+t.apply(this,arguments),s=+n.apply(this,arguments),l=g.apply(this,arguments)-o.ou,c=p.apply(this,arguments)-o.ou,y=(0,o.Wn)(c-l),R=c>l;if(x||(x=i=(0,r.Z)()),s<u&&(a=s,s=u,u=a),s>o.Ho)if(y>o.BZ-o.Ho)x.moveTo(s*(0,o.mC)(l),s*(0,o.O$)(l)),x.arc(0,0,s,l,c,!R),u>o.Ho&&(x.moveTo(u*(0,o.mC)(c),u*(0,o.O$)(c)),x.arc(0,0,u,c,l,R));else{var A,m,M=l,_=c,C=l,b=c,k=y,L=y,O=v.apply(this,arguments)/2,E=O>o.Ho&&(h?+h.apply(this,arguments):(0,o._b)(u*u+s*s)),T=(0,o.VV)((0,o.Wn)(s-u)/2,+e.apply(this,arguments)),Z=T,P=T;if(E>o.Ho){var H=(0,o.ZR)(E/u*(0,o.O$)(O)),B=(0,o.ZR)(E/s*(0,o.O$)(O));(k-=2*H)>o.Ho?(C+=H*=R?1:-1,b-=H):(k=0,C=b=(l+c)/2),(L-=2*B)>o.Ho?(M+=B*=R?1:-1,_-=B):(L=0,M=_=(l+c)/2)}var I=s*(0,o.mC)(M),w=s*(0,o.O$)(M),q=u*(0,o.mC)(b),F=u*(0,o.O$)(b);if(T>o.Ho){var W,$=s*(0,o.mC)(_),V=s*(0,o.O$)(_),S=u*(0,o.mC)(C),j=u*(0,o.O$)(C);if(y<o.pi&&(W=f(I,w,S,j,$,V,q,F))){var z=I-W[0],U=w-W[1],D=$-W[0],G=V-W[1],J=1/(0,o.O$)((0,o.Kh)((z*D+U*G)/((0,o._b)(z*z+U*U)*(0,o._b)(D*D+G*G)))/2),K=(0,o._b)(W[0]*W[0]+W[1]*W[1]);Z=(0,o.VV)(T,(u-K)/(J-1)),P=(0,o.VV)(T,(s-K)/(J+1))}}L>o.Ho?P>o.Ho?(A=d(S,j,I,w,s,P,R),m=d($,V,q,F,s,P,R),x.moveTo(A.cx+A.x01,A.cy+A.y01),P<T?x.arc(A.cx,A.cy,P,(0,o.fv)(A.y01,A.x01),(0,o.fv)(m.y01,m.x01),!R):(x.arc(A.cx,A.cy,P,(0,o.fv)(A.y01,A.x01),(0,o.fv)(A.y11,A.x11),!R),x.arc(0,0,s,(0,o.fv)(A.cy+A.y11,A.cx+A.x11),(0,o.fv)(m.cy+m.y11,m.cx+m.x11),!R),x.arc(m.cx,m.cy,P,(0,o.fv)(m.y11,m.x11),(0,o.fv)(m.y01,m.x01),!R))):(x.moveTo(I,w),x.arc(0,0,s,M,_,!R)):x.moveTo(I,w),u>o.Ho&&k>o.Ho?Z>o.Ho?(A=d(q,F,$,V,u,-Z,R),m=d(I,w,S,j,u,-Z,R),x.lineTo(A.cx+A.x01,A.cy+A.y01),Z<T?x.arc(A.cx,A.cy,Z,(0,o.fv)(A.y01,A.x01),(0,o.fv)(m.y01,m.x01),!R):(x.arc(A.cx,A.cy,Z,(0,o.fv)(A.y01,A.x01),(0,o.fv)(A.y11,A.x11),!R),x.arc(0,0,u,(0,o.fv)(A.cy+A.y11,A.cx+A.x11),(0,o.fv)(m.cy+m.y11,m.cx+m.x11),R),x.arc(m.cx,m.cy,Z,(0,o.fv)(m.y11,m.x11),(0,o.fv)(m.y01,m.x01),!R))):x.arc(0,0,u,b,C,R):x.lineTo(q,F)}else x.moveTo(0,0);if(x.closePath(),i)return x=null,i+""||null}return y.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+g.apply(this,arguments)+ +p.apply(this,arguments))/2-o.pi/2;return[(0,o.mC)(r)*e,(0,o.O$)(r)*e]},y.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:(0,i.Z)(+n),y):t},y.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:(0,i.Z)(+t),y):n},y.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:(0,i.Z)(+t),y):e},y.padRadius=function(t){return arguments.length?(h=null==t?null:"function"==typeof t?t:(0,i.Z)(+t),y):h},y.startAngle=function(t){return arguments.length?(g="function"==typeof t?t:(0,i.Z)(+t),y):g},y.endAngle=function(t){return arguments.length?(p="function"==typeof t?t:(0,i.Z)(+t),y):p},y.padAngle=function(t){return arguments.length?(v="function"==typeof t?t:(0,i.Z)(+t),y):v},y.context=function(t){return arguments.length?(x=null==t?null:t,y):x},y}},3583:function(t,n,e){function r(t){return function(){return t}}e.d(n,{Z:function(){return r}})},18091:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(41584),i=e(3583),o=e(30964),a=e(92519);function u(){var t=a.x,n=a.y,e=(0,i.Z)(!0),u=null,s=o.Z,l=null;function c(i){var o,a,c,f=i.length,d=!1;for(null==u&&(l=s(c=(0,r.Z)())),o=0;o<=f;++o)!(o<f&&e(a=i[o],o,i))===d&&((d=!d)?l.lineStart():l.lineEnd()),d&&l.point(+t(a,o,i),+n(a,o,i));if(c)return l=null,c+""||null}return c.x=function(n){return arguments.length?(t="function"==typeof n?n:(0,i.Z)(+n),c):t},c.y=function(t){return arguments.length?(n="function"==typeof t?t:(0,i.Z)(+t),c):n},c.defined=function(t){return arguments.length?(e="function"==typeof t?t:(0,i.Z)(!!t),c):e},c.curve=function(t){return arguments.length?(s=t,null!=u&&(l=s(u)),c):s},c.context=function(t){return arguments.length?(null==t?u=l=null:l=s(u=t),c):u},c}},92519:function(t,n,e){function r(t){return t[0]}function i(t){return t[1]}e.d(n,{x:function(){return r},y:function(){return i}})},30042:function(t,n,e){e.d(n,{Xr:function(){return A},Ju:function(){return B},_D:function(){return T},Bs:function(){return q},UV:function(){return h},CU:function(){return F},N5:function(){return m},Vf:function(){return Z},oO:function(){return W},aG:function(){return $},DW:function(){return M},Uz:function(){return P}});var r=e(27378),i=e(45434),o=e(79234),a=e(58493),u=e(18091),s=e(29140);function l(){return l=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},l.apply(this,arguments)}var c=function(t){var n=t%(2*Math.PI);return n<0&&(n+=2*Math.PI),n},f=function(t,n){return t.filter((function(t){return Math.abs((0,i.vi)(t.arc.endAngle-t.arc.startAngle))>=n}))},d=function(t,n,e,r,i){return["A",t,t,0,n,e,r,i].join(" ")},h=["startAngle","middleAngle","endAngle","innerRadius","centerRadius","outerRadius","pushIn","pushOut"],g={startAngle:{enter:function(t){return l({},t,{endAngle:t.startAngle})},update:function(t){return t},leave:function(t){return l({},t,{startAngle:t.endAngle})}},middleAngle:{enter:function(t){var n=t.startAngle+(t.endAngle-t.startAngle)/2;return l({},t,{startAngle:n,endAngle:n})},update:function(t){return t},leave:function(t){var n=t.startAngle+(t.endAngle-t.startAngle)/2;return l({},t,{startAngle:n,endAngle:n})}},endAngle:{enter:function(t){return l({},t,{startAngle:t.endAngle})},update:function(t){return t},leave:function(t){return l({},t,{endAngle:t.startAngle})}},innerRadius:{enter:function(t){return l({},t,{outerRadius:t.innerRadius})},update:function(t){return t},leave:function(t){return l({},t,{innerRadius:t.outerRadius})}},centerRadius:{enter:function(t){var n=t.innerRadius+(t.outerRadius-t.innerRadius)/2;return l({},t,{innerRadius:n,outerRadius:n})},update:function(t){return t},leave:function(t){var n=t.innerRadius+(t.outerRadius-t.innerRadius)/2;return l({},t,{innerRadius:n,outerRadius:n})}},outerRadius:{enter:function(t){return l({},t,{innerRadius:t.outerRadius})},update:function(t){return t},leave:function(t){return l({},t,{outerRadius:t.innerRadius})}},pushIn:{enter:function(t){return l({},t,{innerRadius:t.innerRadius-t.outerRadius+t.innerRadius,outerRadius:t.innerRadius})},update:function(t){return t},leave:function(t){return l({},t,{innerRadius:t.outerRadius,outerRadius:t.outerRadius+t.outerRadius-t.innerRadius})}},pushOut:{enter:function(t){return l({},t,{innerRadius:t.outerRadius,outerRadius:t.outerRadius+t.outerRadius-t.innerRadius})},update:function(t){return t},leave:function(t){return l({},t,{innerRadius:t.innerRadius-t.outerRadius+t.innerRadius,outerRadius:t.innerRadius})}}},p=function(t,n){return(0,r.useMemo)((function(){var e=g[t];return{enter:function(t){return l({progress:0},e.enter(t.arc),n?n.enter(t):{})},update:function(t){return l({progress:1},e.update(t.arc),n?n.update(t):{})},leave:function(t){return l({progress:0},e.leave(t.arc),n?n.leave(t):{})}}}),[t,n])},v=function(t,n){var e=(0,i.Vp)(t)-Math.PI/2,r=t.innerRadius+(t.outerRadius-t.innerRadius)*n;return(0,i.re)(e,r)},x=function(t){return function(n,e,r,i){return(0,a.to)([n,e,r,i],(function(n,e,r,i){var o=v({startAngle:n,endAngle:e,innerRadius:r,outerRadius:i},t);return"translate("+o.x+","+o.y+")"}))}},y={pointerEvents:"none"},R=function(t){var n=t.label,e=t.style,r=(0,i.Fg)();return React.createElement(a.q.g,{transform:e.transform,opacity:e.progress,style:y},React.createElement(a.q.text,{textAnchor:"middle",dominantBaseline:"central",style:l({},r.labels.text,{fill:e.textColor})},n))},A=function(t){var n=t.center,e=t.data,u=t.transitionMode,s=t.label,c=t.radiusOffset,f=t.skipAngle,d=t.textColor,h=t.component,g=void 0===h?R:h,v=(0,i.LR)(s),y=(0,i.Fg)(),A=(0,o.Bf)(d,y),m=(0,r.useMemo)((function(){return e.filter((function(t){return Math.abs((0,i.vi)(t.arc.endAngle-t.arc.startAngle))>=f}))}),[e,f]),M=function(t,n,e,r){void 0===n&&(n=.5),void 0===e&&(e="innerRadius");var o=(0,i.tf)(),u=o.animate,s=o.config,l=p(e,r);return{transition:(0,a.useTransition)(t,{keys:function(t){return t.id},initial:l.update,from:l.enter,enter:l.update,update:l.update,leave:l.leave,config:s,immediate:!u}),interpolate:x(n)}}(m,c,u),_=M.transition,C=M.interpolate,b=g;return React.createElement("g",{transform:"translate("+n[0]+","+n[1]+")"},_((function(t,n){return(0,r.createElement)(b,{key:n.id,datum:n,label:v(n),style:l({},t,{transform:C(t.startAngle,t.endAngle,t.innerRadius,t.outerRadius),textColor:A(n)})})})))},m=function(t,n,e){t.textAlign="center",t.textBaseline="middle",t.font=e.labels.text.fontSize+"px "+e.labels.text.fontFamily,n.forEach((function(n){t.fillStyle=n.textColor,t.fillText(""+n.label,n.x,n.y)}))},M=function(t){var n=t.data,e=t.offset,a=t.skipAngle,u=t.label,s=t.textColor,c=(0,i.LR)(u),d=(0,i.Fg)(),h=(0,o.Bf)(s,d),g=(0,r.useCallback)((function(t){return{label:c(t),textColor:h(t)}}),[c,h]);return function(t){var n=t.data,e=t.offset,i=void 0===e?.5:e,o=t.skipAngle,a=void 0===o?0:o,u=t.computeExtraProps,s=void 0===u?function(){return{}}:u;return(0,r.useMemo)((function(){return f(n,a).map((function(t){var n=v(t.arc,i);return l({},s(t),{x:n.x,y:n.y,data:t})}))}),[n,i,a,s])}({data:n,offset:e,skipAngle:a,computeExtraProps:g})},_=function(t,n,e,r){var o,a,u=c(t.startAngle+(t.endAngle-t.startAngle)/2-Math.PI/2),s=(0,i.re)(u,t.outerRadius+n),l=(0,i.re)(u,t.outerRadius+n+e);return u<Math.PI/2||u>1.5*Math.PI?(o="after",a={x:l.x+r,y:l.y}):(o="before",a={x:l.x-r,y:l.y}),{side:o,points:[s,l,a]}},C=(0,u.Z)().x((function(t){return t.x})).y((function(t){return t.y})),b=function(t,n,e,r,i,o,u){return(0,a.to)([t,n,e,r,i,o,u],(function(t,n,e,r,i,o,a){var u=_({startAngle:t,endAngle:n,innerRadius:e,outerRadius:r},i,o,a).points;return C(u)}))},k=function(t,n,e,r){return(0,a.to)([t,n,e,r],(function(t,n,e,r){return function(t){var n=c(t.startAngle+(t.endAngle-t.startAngle)/2-Math.PI/2);return n<Math.PI/2||n>1.5*Math.PI?"start":"end"}({startAngle:t,endAngle:n,innerRadius:e,outerRadius:r})}))},L=function(t,n,e,r,i,o,u,s){return(0,a.to)([t,n,e,r,i,o,u,s],(function(t,n,e,r,i,o,a,u){var s=_({startAngle:t,endAngle:n,innerRadius:e,outerRadius:r},i,o,a),l=s.points,c=s.side,f=l[2];return"before"===c?f.x-=u:f.x+=u,"translate("+f.x+","+f.y+")"}))},O=function(t){var n=t.data,e=t.offset,u=void 0===e?0:e,s=t.diagonalLength,l=t.straightLength,c=t.skipAngle,d=void 0===c?0:c,h=t.textOffset,g=t.linkColor,p=t.textColor,v=(0,i.tf)(),x=v.animate,y=v.config,R=(0,i.Fg)(),A=(0,o.Bf)(g,R),m=(0,o.Bf)(p,R),M=function(t,n){return(0,r.useMemo)((function(){return f(t,n)}),[t,n])}(n,d),_=function(t){var n=t.offset,e=t.diagonalLength,i=t.straightLength,o=t.textOffset,a=t.getLinkColor,u=t.getTextColor;return(0,r.useMemo)((function(){return{enter:function(t){return{startAngle:t.arc.startAngle,endAngle:t.arc.endAngle,innerRadius:t.arc.innerRadius,outerRadius:t.arc.outerRadius,offset:n,diagonalLength:0,straightLength:0,textOffset:o,linkColor:a(t),textColor:u(t),opacity:0}},update:function(t){return{startAngle:t.arc.startAngle,endAngle:t.arc.endAngle,innerRadius:t.arc.innerRadius,outerRadius:t.arc.outerRadius,offset:n,diagonalLength:e,straightLength:i,textOffset:o,linkColor:a(t),textColor:u(t),opacity:1}},leave:function(t){return{startAngle:t.arc.startAngle,endAngle:t.arc.endAngle,innerRadius:t.arc.innerRadius,outerRadius:t.arc.outerRadius,offset:n,diagonalLength:0,straightLength:0,textOffset:o,linkColor:a(t),textColor:u(t),opacity:0}}}}),[e,i,o,a,u])}({offset:u,diagonalLength:s,straightLength:l,textOffset:h,getLinkColor:A,getTextColor:m});return{transition:(0,a.useTransition)(M,{keys:function(t){return t.id},initial:_.update,from:_.enter,enter:_.update,update:_.update,leave:_.leave,config:y,immediate:!x}),interpolateLink:b,interpolateTextAnchor:k,interpolateTextPosition:L}},E=function(t){var n=t.label,e=t.style,r=(0,i.Fg)();return React.createElement(a.q.g,{opacity:e.opacity},React.createElement(a.q.path,{fill:"none",stroke:e.linkColor,strokeWidth:e.thickness,d:e.path}),React.createElement(a.q.text,{transform:e.textPosition,textAnchor:e.textAnchor,dominantBaseline:"central",style:l({},r.labels.text,{fill:e.textColor})},n))},T=function(t){var n=t.center,e=t.data,o=t.label,a=t.skipAngle,u=t.offset,s=t.diagonalLength,c=t.straightLength,f=t.strokeWidth,d=t.textOffset,h=t.textColor,g=t.linkColor,p=t.component,v=void 0===p?E:p,x=(0,i.LR)(o),y=O({data:e,skipAngle:a,offset:u,diagonalLength:s,straightLength:c,textOffset:d,linkColor:g,textColor:h}),R=y.transition,A=y.interpolateLink,m=y.interpolateTextAnchor,M=y.interpolateTextPosition,_=v;return React.createElement("g",{transform:"translate("+n[0]+","+n[1]+")"},R((function(t,n){return(0,r.createElement)(_,{key:n.id,datum:n,label:x(n),style:l({},t,{thickness:f,path:A(t.startAngle,t.endAngle,t.innerRadius,t.outerRadius,t.offset,t.diagonalLength,t.straightLength),textAnchor:m(t.startAngle,t.endAngle,t.innerRadius,t.outerRadius),textPosition:M(t.startAngle,t.endAngle,t.innerRadius,t.outerRadius,t.offset,t.diagonalLength,t.straightLength,t.textOffset)})})})))},Z=function(t,n,e,r){t.textBaseline="middle",t.font=e.labels.text.fontSize+"px "+e.labels.text.fontFamily,n.forEach((function(n){t.fillStyle=n.textColor,t.textAlign=i.a6.canvas.align[n.textAnchor],t.fillText(""+n.label,n.x,n.y),t.beginPath(),t.strokeStyle=n.linkColor,t.lineWidth=r,n.points.forEach((function(n,e){0===e?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y)})),t.stroke()}))},P=function(t){var n=t.data,e=t.skipAngle,a=t.offset,u=t.diagonalLength,s=t.straightLength,c=t.textOffset,f=void 0===c?0:c,d=t.label,h=t.linkColor,g=t.textColor,p=(0,i.LR)(d),v=(0,i.Fg)(),x=(0,o.Bf)(h,v),y=(0,o.Bf)(g,v),R=(0,r.useCallback)((function(t){var n,e={x:t.points[2].x,y:t.points[2].y};return"before"===t.side?(e.x-=f,n="end"):(e.x+=f,n="start"),l({},e,{label:p(t.data),linkColor:x(t.data),textAnchor:n,textColor:y(t.data)})}),[p,x,y,f]);return function(t){var n=t.data,e=t.skipAngle,o=void 0===e?0:e,a=t.offset,u=void 0===a?.5:a,s=t.diagonalLength,c=t.straightLength,f=t.computeExtraProps,d=void 0===f?function(){return{}}:f,h=(0,r.useMemo)((function(){return n.filter((function(t){return Math.abs((0,i.vi)(t.arc.endAngle-t.arc.startAngle))>=o})).map((function(t){return l({},_(t.arc,u,s,c),{data:t})}))}),[n,o,u,s,c]);return(0,r.useMemo)((function(){return h.map((function(t){return l({},d(t),t)}))}),[h,d])}({data:n,skipAngle:e,offset:a,diagonalLength:u,straightLength:s,computeExtraProps:R})},H=["animated"],B=function(t){var n=t.animated,e=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,H);return React.createElement(a.q.path,l({d:(0,a.to)([n.radius,n.startAngle,n.endAngle],(function(t,n,e){return function(t,n,e){var r=Math.min(n,e),o=Math.max(n,e),a=(0,i.re)((0,i.Ht)(o),t),u=(0,i.re)((0,i.Ht)(r),t);if(o-r>=360){var s=(0,i.re)((0,i.Ht)(r+180),t);return["M "+a.x+" "+a.y,d(t,1,1,s.x,s.y),"M "+a.x+" "+a.y,d(t,1,0,s.x,s.y)].join(" ")}var l=o-r<=180?0:1;return["M "+a.x+" "+a.y,d(t,l,0,u.x,u.y)].join(" ")}(t,n,e)}))},e))},I=function(t){var n=t.datum,e=t.style,i=t.onClick,o=t.onMouseEnter,u=t.onMouseMove,s=t.onMouseLeave,l=(0,r.useCallback)((function(t){return null==i?void 0:i(n,t)}),[i,n]),c=(0,r.useCallback)((function(t){return null==o?void 0:o(n,t)}),[o,n]),f=(0,r.useCallback)((function(t){return null==u?void 0:u(n,t)}),[u,n]),d=(0,r.useCallback)((function(t){return null==s?void 0:s(n,t)}),[s,n]);return r.createElement(a.q.path,{d:e.path,opacity:e.opacity,fill:n.fill||e.color,stroke:e.borderColor,strokeWidth:e.borderWidth,onClick:i?l:void 0,onMouseEnter:o?c:void 0,onMouseMove:u?f:void 0,onMouseLeave:s?d:void 0})},w=function(t,n,e,r,i){return(0,a.to)([t,n,e,r],(function(t,n,e,r){return i({startAngle:t,endAngle:n,innerRadius:Math.max(0,e),outerRadius:Math.max(0,r)})}))},q=function(t){var n=t.center,e=t.data,u=t.arcGenerator,s=t.borderWidth,c=t.borderColor,f=t.onClick,d=t.onMouseEnter,h=t.onMouseMove,g=t.onMouseLeave,v=t.transitionMode,x=t.component,y=void 0===x?I:x,R=(0,i.Fg)(),A=(0,o.Bf)(c,R),m=function(t,n,e){void 0===n&&(n="innerRadius");var r=(0,i.tf)(),o=r.animate,u=r.config,s=p(n,e);return{transition:(0,a.useTransition)(t,{keys:function(t){return t.id},initial:s.update,from:s.enter,enter:s.update,update:s.update,leave:s.leave,config:u,immediate:!o}),interpolate:w}}(e,v,{enter:function(t){return{opacity:0,color:t.color,borderColor:A(t)}},update:function(t){return{opacity:1,color:t.color,borderColor:A(t)}},leave:function(t){return{opacity:0,color:t.color,borderColor:A(t)}}}),M=m.transition,_=m.interpolate,C=y;return React.createElement("g",{transform:"translate("+n[0]+","+n[1]+")"},M((function(t,n){return(0,r.createElement)(C,{key:n.id,datum:n,style:l({},t,{borderWidth:s,path:_(t.startAngle,t.endAngle,t.innerRadius,t.outerRadius,u)}),onClick:f,onMouseEnter:d,onMouseMove:h,onMouseLeave:g})})))},F=function(t,n,e,r,o,a){void 0===a&&(a=!0);var u=[],s=(0,i.re)((0,i.Ht)(r),e);u.push([s.x,s.y]);var l=(0,i.re)((0,i.Ht)(o),e);u.push([l.x,l.y]);for(var c=Math.round(Math.min(r,o));c<=Math.round(Math.max(r,o));c++)if(c%90==0){var f=(0,i.re)((0,i.Ht)(c),e);u.push([f.x,f.y])}u=u.map((function(e){var r=e[0],i=e[1];return[t+r,n+i]})),a&&u.push([t,n]);var d=u.map((function(t){return t[0]})),h=u.map((function(t){return t[1]})),g=Math.min.apply(Math,d),p=Math.max.apply(Math,d),v=Math.min.apply(Math,h);return{points:u,x:g,y:v,width:p-g,height:Math.max.apply(Math,h)-v}},W=function(t,n,e,r,o,a,u){if(function(t,n,e,r,o,a){var u=(0,i.Sp)(o,a,t,n);return u<e&&u>r}(t,n,e,r,a,u)){var s=(0,i._O)(a,u,t,n);return o.find((function(t){var n=t.startAngle,e=t.endAngle;return s>=n&&s<e}))}},$=function(t){var n=void 0===t?{}:t,e=n.cornerRadius,i=void 0===e?0:e,o=n.padAngle,a=void 0===o?0:o;return(0,r.useMemo)((function(){return(0,s.Z)().innerRadius((function(t){return t.innerRadius})).outerRadius((function(t){return t.outerRadius})).cornerRadius(i).padAngle(a)}),[i,a])}}}]);
//# sourceMappingURL=8c100872d36789d92c6d44f3d0917111aaa22371-a71c02d24cca96fd6712.js.map