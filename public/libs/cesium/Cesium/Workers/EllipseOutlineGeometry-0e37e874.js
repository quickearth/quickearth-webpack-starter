define(["exports","./GeometryOffsetAttribute-d63c288d","./Transforms-f1816abc","./Cartesian2-716c2715","./ComponentDatatype-549ec0d3","./when-208fe5b0","./Check-d18af7c4","./EllipseGeometryLibrary-54fe1659","./GeometryAttribute-0ee94cf1","./GeometryAttributes-b0b294d8","./IndexDatatype-d9b71b2b","./Math-3ba16bed"],function(e,f,m,c,h,y,b,A,_,g,v,E){"use strict";var x=new c.Cartesian3,s=new c.Cartesian3;var M=new m.BoundingSphere,w=new m.BoundingSphere;function C(e){var t=(e=y.defaultValue(e,y.defaultValue.EMPTY_OBJECT)).center,i=y.defaultValue(e.ellipsoid,c.Ellipsoid.WGS84),r=e.semiMajorAxis,a=e.semiMinorAxis,n=y.defaultValue(e.granularity,E.CesiumMath.RADIANS_PER_DEGREE);if(!y.defined(t))throw new b.DeveloperError("center is required.");if(!y.defined(r))throw new b.DeveloperError("semiMajorAxis is required.");if(!y.defined(a))throw new b.DeveloperError("semiMinorAxis is required.");if(r<a)throw new b.DeveloperError("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(n<=0)throw new b.DeveloperError("granularity must be greater than zero.");var o=y.defaultValue(e.height,0),s=y.defaultValue(e.extrudedHeight,o);this._center=c.Cartesian3.clone(t),this._semiMajorAxis=r,this._semiMinorAxis=a,this._ellipsoid=c.Ellipsoid.clone(i),this._rotation=y.defaultValue(e.rotation,0),this._height=Math.max(s,o),this._granularity=n,this._extrudedHeight=Math.min(s,o),this._numberOfVerticalLines=Math.max(y.defaultValue(e.numberOfVerticalLines,16),0),this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipseOutlineGeometry"}C.packedLength=c.Cartesian3.packedLength+c.Ellipsoid.packedLength+8,C.pack=function(e,t,i){if(!y.defined(e))throw new b.DeveloperError("value is required");if(!y.defined(t))throw new b.DeveloperError("array is required");return i=y.defaultValue(i,0),c.Cartesian3.pack(e._center,t,i),i+=c.Cartesian3.packedLength,c.Ellipsoid.pack(e._ellipsoid,t,i),i+=c.Ellipsoid.packedLength,t[i++]=e._semiMajorAxis,t[i++]=e._semiMinorAxis,t[i++]=e._rotation,t[i++]=e._height,t[i++]=e._granularity,t[i++]=e._extrudedHeight,t[i++]=e._numberOfVerticalLines,t[i]=y.defaultValue(e._offsetAttribute,-1),t};var D=new c.Cartesian3,G=new c.Ellipsoid,L={center:D,ellipsoid:G,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};C.unpack=function(e,t,i){if(!y.defined(e))throw new b.DeveloperError("array is required");t=y.defaultValue(t,0);var r=c.Cartesian3.unpack(e,t,D);t+=c.Cartesian3.packedLength;var a=c.Ellipsoid.unpack(e,t,G);t+=c.Ellipsoid.packedLength;var n=e[t++],o=e[t++],s=e[t++],u=e[t++],l=e[t++],d=e[t++],p=e[t++],t=e[t];return y.defined(i)?(i._center=c.Cartesian3.clone(r,i._center),i._ellipsoid=c.Ellipsoid.clone(a,i._ellipsoid),i._semiMajorAxis=n,i._semiMinorAxis=o,i._rotation=s,i._height=u,i._granularity=l,i._extrudedHeight=d,i._numberOfVerticalLines=p,i._offsetAttribute=-1===t?void 0:t,i):(L.height=u,L.extrudedHeight=d,L.granularity=l,L.rotation=s,L.semiMajorAxis=n,L.semiMinorAxis=o,L.numberOfVerticalLines=p,L.offsetAttribute=-1===t?void 0:t,new C(L))},C.createGeometry=function(e){if(!(e._semiMajorAxis<=0||e._semiMinorAxis<=0)){var t=e._height,i=e._extrudedHeight,r=!E.CesiumMath.equalsEpsilon(t,i,0,E.CesiumMath.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);var a,t={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:t,granularity:e._granularity,numberOfVerticalLines:e._numberOfVerticalLines};return r?(t.extrudedHeight=i,t.offsetAttribute=e._offsetAttribute,a=function(e){var t=e.center,i=e.ellipsoid,r=e.semiMajorAxis,a=c.Cartesian3.multiplyByScalar(i.geodeticSurfaceNormal(t,x),e.height,x);M.center=c.Cartesian3.add(t,a,M.center),M.radius=r,a=c.Cartesian3.multiplyByScalar(i.geodeticSurfaceNormal(t,a),e.extrudedHeight,a),w.center=c.Cartesian3.add(t,a,w.center),w.radius=r;var t=A.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,t=(a=new g.GeometryAttributes({position:new _.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:A.EllipseGeometryLibrary.raisePositionsToHeight(t,e,!0)})})).position.values,r=m.BoundingSphere.union(M,w),n=t.length/3;y.defined(e.offsetAttribute)&&(o=new Uint8Array(n),o=e.offsetAttribute===f.GeometryOffsetAttribute.TOP?f.arrayFill(o,1,0,n/2):(t=e.offsetAttribute===f.GeometryOffsetAttribute.NONE?0:1,f.arrayFill(o,t)),a.applyOffset=new _.GeometryAttribute({componentDatatype:h.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:o}));var o=y.defaultValue(e.numberOfVerticalLines,16),o=E.CesiumMath.clamp(o,0,n/2),s=v.IndexDatatype.createTypedArray(n,2*n+2*o);n/=2;var u=0;for(p=0;p<n;++p)s[u++]=p,s[u++]=(p+1)%n,s[u++]=p+n,s[u++]=(p+1)%n+n;if(0<o)for(var e=Math.min(o,n),l=Math.round(n/e),d=Math.min(l*o,n),p=0;p<d;p+=l)s[u++]=p,s[u++]=p+n;return{boundingSphere:r,attributes:a,indices:s}}(t)):(a=function(e){var t=e.center;s=c.Cartesian3.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(t,s),e.height,s),s=c.Cartesian3.add(t,s,s);for(var i=new m.BoundingSphere(s,e.semiMajorAxis),t=A.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,e=new g.GeometryAttributes({position:new _.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:A.EllipseGeometryLibrary.raisePositionsToHeight(t,e,!1)})}),r=t.length/3,a=v.IndexDatatype.createTypedArray(r,2*r),n=0,o=0;o<r;++o)a[n++]=o,a[n++]=(o+1)%r;return{boundingSphere:i,attributes:e,indices:a}}(t),y.defined(e._offsetAttribute)&&(i=a.attributes.position.values.length,t=new Uint8Array(i/3),i=e._offsetAttribute===f.GeometryOffsetAttribute.NONE?0:1,f.arrayFill(t,i),a.attributes.applyOffset=new _.GeometryAttribute({componentDatatype:h.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t}))),new _.Geometry({attributes:a.attributes,indices:a.indices,primitiveType:_.PrimitiveType.LINES,boundingSphere:a.boundingSphere,offsetAttribute:e._offsetAttribute})}},e.EllipseOutlineGeometry=C});
//# sourceMappingURL=EllipseOutlineGeometry-0e37e874.js.map