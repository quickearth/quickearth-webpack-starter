define(["exports","./Math-3ba16bed"],function(r,v){"use strict";var t={computePositions:function(r,t,e,a,i){for(var n=.5*r,o=-n,r=a+a,s=new Float64Array(3*(i?2*r:r)),u=0,c=0,f=i?3*r:0,h=i?3*(r+a):3*a,y=0;y<a;y++){var M=y/a*v.CesiumMath.TWO_PI,b=Math.cos(M),d=Math.sin(M),m=b*e,M=d*e,b=b*t,d=d*t;s[c+f]=m,s[c+f+1]=M,s[c+f+2]=o,s[c+h]=b,s[c+h+1]=d,s[c+h+2]=n,c+=3,i&&(s[u++]=m,s[u++]=M,s[u++]=o,s[u++]=b,s[u++]=d,s[u++]=n)}return s}};r.CylinderGeometryLibrary=t});
//# sourceMappingURL=CylinderGeometryLibrary-dc335e31.js.map
