define(["exports","./Cartesian2-716c2715","./Check-d18af7c4","./when-208fe5b0"],function(e,n,a,h){"use strict";function t(){this.high=n.Cartesian3.clone(n.Cartesian3.ZERO),this.low=n.Cartesian3.clone(n.Cartesian3.ZERO)}t.encode=function(e,n){var i;return a.Check.typeOf.number("value",e),h.defined(n)||(n={high:0,low:0}),0<=e?(i=65536*Math.floor(e/65536),n.high=i,n.low=e-i):(i=65536*Math.floor(-e/65536),n.high=-i,n.low=e+i),n};var o={high:0,low:0};t.fromCartesian=function(e,n){a.Check.typeOf.object("cartesian",e);var i=(n=!h.defined(n)?new t:n).high,r=n.low;return t.encode(e.x,o),i.x=o.high,r.x=o.low,t.encode(e.y,o),i.y=o.high,r.y=o.low,t.encode(e.z,o),i.z=o.high,r.z=o.low,n};var c=new t;t.writeElements=function(e,n,i){a.Check.defined("cartesianArray",n),a.Check.typeOf.number("index",i),a.Check.typeOf.number.greaterThanOrEquals("index",i,0),t.fromCartesian(e,c);var r=c.high,e=c.low;n[i]=r.x,n[i+1]=r.y,n[i+2]=r.z,n[i+3]=e.x,n[i+4]=e.y,n[i+5]=e.z},e.EncodedCartesian3=t});
//# sourceMappingURL=EncodedCartesian3-7a9c1496.js.map
