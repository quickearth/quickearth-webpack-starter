define(["exports","./Cartesian2-e9bb1bb3","./Check-5e798bbf","./when-208fe5b0","./Math-56f06cd5"],function(t,O,q,_,S){"use strict";function k(t,a,i,e,n,s,h){i=t*i*(4+t*(4-3*i))/16;return(1-i)*t*a*(e+i*n*(h+i*s*(2*h*h-1)))}var w=new O.Cartesian3,U=new O.Cartesian3;function e(t,a,i,e){var n,s,h,r,d,o,c,u,M,l,g,_,p,f,C,m,v,b=O.Cartesian3.normalize(e.cartographicToCartesian(a,U),w),H=O.Cartesian3.normalize(e.cartographicToCartesian(i,U),U);q.Check.typeOf.number.greaterThanOrEquals("value",Math.abs(Math.abs(O.Cartesian3.angleBetween(b,H))-Math.PI),.0125),function(t,a,i,e,n,s,h){var r=(a-i)/a,d=s-e,e=Math.atan((1-r)*Math.tan(n)),n=Math.atan((1-r)*Math.tan(h)),h=Math.cos(e),e=Math.sin(e),o=Math.cos(n),n=Math.sin(n),c=h*o,u=h*n,M=e*n,l=e*o,g=d,_=(S.CesiumMath.TWO_PI,Math.cos(g)),p=Math.sin(g);do{var f,C,m,v,b,_=Math.cos(g),p=Math.sin(g),H=u-l*_,O=g,q=(m=M+c*_)-2*M/(b=0===(C=Math.sqrt(o*o*p*p+H*H))?(f=0,1):1-(f=c*p/C)*f),g=d+k(r,f,b,v=Math.atan2(C,m),C,m,q=!isFinite(q)?0:q)}while(Math.abs(g-O)>S.CesiumMath.EPSILON12);e=i*(1+(n=b*(a*a-i*i)/(i*i))*(4096+n*(n*(320-175*n)-768))/16384)*(v-(e=n*(256+n*(n*(74-47*n)-128))/1024)*C*(q+e*(m*(2*(a=q*q)-1)-e*q*(4*C*C-3)*(4*a-3)/6)/4)),a=Math.atan2(o*p,u-l*_),h=Math.atan2(h*p,u*_-l),t._distance=e,t._startHeading=a,t._endHeading=h,t._uSquared=n}(t,e.maximumRadius,e.minimumRadius,a.longitude,a.latitude,i.longitude,i.latitude),t._start=O.Cartographic.clone(a,t._start),t._end=O.Cartographic.clone(i,t._end),t._start.height=0,t._end.height=0,s=(n=t)._uSquared,h=n._ellipsoid.maximumRadius,r=n._ellipsoid.minimumRadius,d=(h-r)/h,o=Math.cos(n._startHeading),c=Math.sin(n._startHeading),u=(1-d)*Math.tan(n._start.latitude),M=1/Math.sqrt(1+u*u),l=M*u,g=Math.atan2(u,o),f=1-(p=(_=M*c)*_),C=Math.sqrt(f),b=1-3*(m=s/4)+35*(v=m*m)/4,H=1-5*m,s=(i=1+m-3*v/4+5*(e=v*m)/4-175*(a=v*v)/64)*g-(t=1-m+15*v/8-35*e/8)*Math.sin(2*g)*m/2-b*Math.sin(4*g)*v/16-H*Math.sin(6*g)*e/48-5*Math.sin(8*g)*a/512,(n=n._constants).a=h,n.b=r,n.f=d,n.cosineHeading=o,n.sineHeading=c,n.tanU=u,n.cosineU=M,n.sineU=l,n.sigma=g,n.sineAlpha=_,n.sineSquaredAlpha=p,n.cosineSquaredAlpha=f,n.cosineAlpha=C,n.u2Over4=m,n.u4Over16=v,n.u6Over64=e,n.u8Over256=a,n.a0=i,n.a1=t,n.a2=b,n.a3=H,n.distanceRatio=s}function a(t,a,i){i=_.defaultValue(i,O.Ellipsoid.WGS84);this._ellipsoid=i,this._start=new O.Cartographic,this._end=new O.Cartographic,this._constants={},this._startHeading=void 0,this._endHeading=void 0,this._distance=void 0,this._uSquared=void 0,_.defined(t)&&_.defined(a)&&e(this,t,a,i)}Object.defineProperties(a.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return q.Check.defined("distance",this._distance),this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},startHeading:{get:function(){return q.Check.defined("distance",this._distance),this._startHeading}},endHeading:{get:function(){return q.Check.defined("distance",this._distance),this._endHeading}}}),a.prototype.setEndPoints=function(t,a){q.Check.defined("start",t),q.Check.defined("end",a),e(this,t,a,this._ellipsoid)},a.prototype.interpolateUsingFraction=function(t,a){return this.interpolateUsingSurfaceDistance(this._distance*t,a)},a.prototype.interpolateUsingSurfaceDistance=function(t,a){q.Check.defined("distance",this._distance);var i=this._constants,e=i.distanceRatio+t/i.b,n=Math.cos(2*e),s=Math.cos(4*e),h=Math.cos(6*e),r=Math.sin(2*e),d=Math.sin(4*e),o=Math.sin(6*e),c=Math.sin(8*e),u=e*e,M=i.u8Over256,l=i.u2Over4,g=i.u6Over64,t=i.u4Over16,u=2*(e*u)*M*n/3+e*(1-l+7*t/4-15*g/4+579*M/64-(t-15*g/4+187*M/16)*n-(5*g/4-115*M/16)*s-29*M*h/16)+(l/2-t+71*g/32-85*M/16)*r+(5*t/16-5*g/4+383*M/96)*d-u*((g-11*M/2)*r+5*M*d/2)+(29*g/96-29*M/16)*o+539*M*c/1536,r=Math.asin(Math.sin(u)*i.cosineAlpha),d=Math.atan(i.a/i.b*Math.tan(r));u-=i.sigma;g=Math.cos(2*i.sigma+u),o=Math.sin(u),M=Math.cos(u),c=i.cosineU*M,r=i.sineU*o,g=Math.atan2(o*i.sineHeading,c-r*i.cosineHeading)-k(i.f,i.sineAlpha,i.cosineSquaredAlpha,u,o,M,g);return _.defined(a)?(a.longitude=this._start.longitude+g,a.latitude=d,a.height=0,a):new O.Cartographic(this._start.longitude+g,d,0)},t.EllipsoidGeodesic=a});
//# sourceMappingURL=EllipsoidGeodesic-1c2b601e.js.map
