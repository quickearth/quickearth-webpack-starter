define(["./Transforms-bf0664c5","./Matrix2-dd990207","./Matrix3-f3e9d70a","./ComponentDatatype-dd0b58d1","./CylinderGeometryLibrary-db7678f5","./defaultValue-040c41f9","./GeometryAttribute-716f70e8","./GeometryAttributes-52134c76","./GeometryOffsetAttribute-b6810db4","./IndexDatatype-eddea9c9","./Math-8e567554","./combine-6eb6e848","./RuntimeError-3c5db370","./WebGLConstants-f7267ced"],(function(t,e,i,n,o,r,a,s,u,f,d,c,l,b){"use strict";const m=new e.Cartesian2;function p(t){const e=(t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT)).length,i=t.topRadius,n=t.bottomRadius,o=r.defaultValue(t.slices,128),a=Math.max(r.defaultValue(t.numberOfVerticalLines,16),0);this._length=e,this._topRadius=i,this._bottomRadius=n,this._slices=o,this._numberOfVerticalLines=a,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}p.packedLength=6,p.pack=function(t,e,i){return i=r.defaultValue(i,0),e[i++]=t._length,e[i++]=t._topRadius,e[i++]=t._bottomRadius,e[i++]=t._slices,e[i++]=t._numberOfVerticalLines,e[i]=r.defaultValue(t._offsetAttribute,-1),e};const y={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return p.unpack=function(t,e,i){e=r.defaultValue(e,0);const n=t[e++],o=t[e++],a=t[e++],s=t[e++],u=t[e++],f=t[e];return r.defined(i)?(i._length=n,i._topRadius=o,i._bottomRadius=a,i._slices=s,i._numberOfVerticalLines=u,i._offsetAttribute=-1===f?void 0:f,i):(y.length=n,y.topRadius=o,y.bottomRadius=a,y.slices=s,y.numberOfVerticalLines=u,y.offsetAttribute=-1===f?void 0:f,new p(y))},p.createGeometry=function(d){let c=d._length;const l=d._topRadius,b=d._bottomRadius,p=d._slices,y=d._numberOfVerticalLines;if(c<=0||l<0||b<0||0===l&&0===b)return;const _=2*p,h=o.CylinderGeometryLibrary.computePositions(c,l,b,p,!1);let A,R=2*p;if(y>0){const t=Math.min(y,p);A=Math.round(p/t),R+=t}const G=f.IndexDatatype.createTypedArray(_,2*R);let O,V=0;for(O=0;O<p-1;O++)G[V++]=O,G[V++]=O+1,G[V++]=O+p,G[V++]=O+1+p;if(G[V++]=p-1,G[V++]=0,G[V++]=p+p-1,G[V++]=p,y>0)for(O=0;O<p;O+=A)G[V++]=O,G[V++]=O+p;const L=new s.GeometryAttributes;L.position=new a.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:h}),m.x=.5*c,m.y=Math.max(b,l);const g=new t.BoundingSphere(i.Cartesian3.ZERO,e.Cartesian2.magnitude(m));if(r.defined(d._offsetAttribute)){c=h.length;const t=d._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,e=new Uint8Array(c/3).fill(t);L.applyOffset=new a.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}return new a.Geometry({attributes:L,indices:G,primitiveType:a.PrimitiveType.LINES,boundingSphere:g,offsetAttribute:d._offsetAttribute})},function(t,e){return r.defined(e)&&(t=p.unpack(t,e)),p.createGeometry(t)}}));
