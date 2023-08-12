define(["exports","./GeometryOffsetAttribute-6fce6185","./Transforms-b2c3e401","./Cartesian2-e9bb1bb3","./Check-5e798bbf","./ComponentDatatype-b3120730","./when-208fe5b0","./EllipseGeometryLibrary-5a2158c0","./GeometryAttribute-dddfbf98","./GeometryAttributes-b0b294d8","./GeometryInstance-fc30134d","./GeometryPipeline-aac4ecee","./IndexDatatype-4d4b60a0","./Math-56f06cd5","./VertexFormat-9eeda9f8"],function(e,L,R,j,d,k,z,B,Y,H,m,p,c,y,h){"use strict";var U=new j.Cartesian3,Q=new j.Cartesian3,W=new j.Cartesian3,S=new j.Cartesian3,q=new j.Cartesian2,J=new R.Matrix3,Z=new R.Matrix3,K=new R.Quaternion,X=new j.Cartesian3,$=new j.Cartesian3,ee=new j.Cartesian3,te=new j.Cartographic,re=new j.Cartesian3,ae=new j.Cartesian2,ie=new j.Cartesian2;function f(e,t,r){var a=t.vertexFormat,i=t.center,n=t.semiMajorAxis,o=t.semiMinorAxis,s=t.ellipsoid,u=t.stRotation,l=r?e.length/3*2:e.length/3,m=t.shadowVolume,p=a.st?new Float32Array(2*l):void 0,c=a.normal?new Float32Array(3*l):void 0,y=a.tangent?new Float32Array(3*l):void 0,d=a.bitangent?new Float32Array(3*l):void 0,h=m?new Float32Array(3*l):void 0,f=0,A=X,x=$,g=ee,b=new R.GeographicProjection(s),_=b.project(s.cartesianToCartographic(i,te),re),i=s.scaleToGeodeticSurface(i,U);s.geodeticSurfaceNormal(i,i);var C=J,v=Z;v=0!==u?(S=R.Quaternion.fromAxisAngle(i,u,K),C=R.Matrix3.fromQuaternion(S,C),S=R.Quaternion.fromAxisAngle(i,-u,K),R.Matrix3.fromQuaternion(S,v)):(C=R.Matrix3.clone(R.Matrix3.IDENTITY,C),R.Matrix3.clone(R.Matrix3.IDENTITY,v));for(var w=j.Cartesian2.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,ae),M=j.Cartesian2.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,ie),E=e.length,I=r?E:0,T=I/3*2,G=0;G<E;G+=3){var N,P=G+1,F=G+2,D=j.Cartesian3.fromArray(e,G,U);a.st&&(N=R.Matrix3.multiplyByVector(C,D,Q),N=b.project(s.cartesianToCartographic(N,te),W),j.Cartesian3.subtract(N,_,N),q.x=(N.x+n)/(2*n),q.y=(N.y+o)/(2*o),w.x=Math.min(q.x,w.x),w.y=Math.min(q.y,w.y),M.x=Math.max(q.x,M.x),M.y=Math.max(q.y,M.y),r&&(p[f+T]=q.x,p[f+1+T]=q.y),p[f++]=q.x,p[f++]=q.y),(a.normal||a.tangent||a.bitangent||m)&&(A=s.geodeticSurfaceNormal(D,A),m&&(h[G+I]=-A.x,h[P+I]=-A.y,h[F+I]=-A.z),(a.normal||a.tangent||a.bitangent)&&((a.tangent||a.bitangent)&&(x=j.Cartesian3.normalize(j.Cartesian3.cross(j.Cartesian3.UNIT_Z,A,x),x),R.Matrix3.multiplyByVector(v,x,x)),a.normal&&(c[G]=A.x,c[P]=A.y,c[F]=A.z,r&&(c[G+I]=-A.x,c[P+I]=-A.y,c[F+I]=-A.z)),a.tangent&&(y[G]=x.x,y[P]=x.y,y[F]=x.z,r&&(y[G+I]=-x.x,y[P+I]=-x.y,y[F+I]=-x.z)),a.bitangent&&(g=j.Cartesian3.normalize(j.Cartesian3.cross(A,x,g),g),d[G]=g.x,d[P]=g.y,d[F]=g.z,r&&(d[G+I]=g.x,d[P+I]=g.y,d[F+I]=g.z))))}if(a.st)for(var E=p.length,V=0;V<E;V+=2)p[V]=(p[V]-w.x)/(M.x-w.x),p[V+1]=(p[V+1]-w.y)/(M.y-w.y);var O,S=new H.GeometryAttributes;return a.position&&(O=B.EllipseGeometryLibrary.raisePositionsToHeight(e,t,r),S.position=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:O})),a.st&&(S.st=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:p})),a.normal&&(S.normal=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:c})),a.tangent&&(S.tangent=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})),a.bitangent&&(S.bitangent=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:d})),m&&(S.extrudeDirection=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:h})),r&&z.defined(t.offsetAttribute)&&(O=new Uint8Array(l),O=t.offsetAttribute===L.GeometryOffsetAttribute.TOP?L.arrayFill(O,1,0,l/2):(t=t.offsetAttribute===L.GeometryOffsetAttribute.NONE?0:1,L.arrayFill(O,t)),S.applyOffset=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:O})),S}function A(e){for(var t,r,a=new Array(e*(e+1)*12-6),i=0,n=0,o=1,s=0;s<3;s++)a[i++]=o++,a[i++]=n,a[i++]=o;for(s=2;s<e+1;++s){for(o=s*(s+1)-1,n=(s-1)*s-1,a[i++]=o++,a[i++]=n,a[i++]=o,t=2*s,r=0;r<t-1;++r)a[i++]=o,a[i++]=n++,a[i++]=n,a[i++]=o++,a[i++]=n,a[i++]=o;a[i++]=o++,a[i++]=n,a[i++]=o}for(t=2*e,++o,++n,s=0;s<t-1;++s)a[i++]=o,a[i++]=n++,a[i++]=n,a[i++]=o++,a[i++]=n,a[i++]=o;for(a[i++]=o,a[i++]=n++,a[i++]=n,a[i++]=o++,a[i++]=n++,a[i++]=n,++n,s=e-1;1<s;--s){for(a[i++]=n++,a[i++]=n,a[i++]=o,t=2*s,r=0;r<t-1;++r)a[i++]=o,a[i++]=n++,a[i++]=n,a[i++]=o++,a[i++]=n,a[i++]=o;a[i++]=n++,a[i++]=n++,a[i++]=o++}for(s=0;s<3;s++)a[i++]=n++,a[i++]=n,a[i++]=o;return a}var n=new j.Cartesian3;var x=new R.BoundingSphere,g=new R.BoundingSphere;function o(e){var t=e.center,r=e.ellipsoid,a=e.semiMajorAxis,i=j.Cartesian3.multiplyByScalar(r.geodeticSurfaceNormal(t,U),e.height,U);x.center=j.Cartesian3.add(t,i,x.center),x.radius=a,i=j.Cartesian3.multiplyByScalar(r.geodeticSurfaceNormal(t,i),e.extrudedHeight,i),g.center=j.Cartesian3.add(t,i,g.center),g.radius=a;var n=B.EllipseGeometryLibrary.computeEllipsePositions(e,!0,!0),r=n.positions,t=n.numPts,i=n.outerPositions,a=R.BoundingSphere.union(x,g),n=f(r,e,!0),o=(l=A(t)).length;l.length=2*o;for(var s=r.length/3,u=0;u<o;u+=3)l[u+o]=l[u+2]+s,l[u+1+o]=l[u+1]+s,l[u+2+o]=l[u]+s;var r=c.IndexDatatype.createTypedArray(2*s/3,l),r=new Y.Geometry({attributes:n,indices:r,primitiveType:Y.PrimitiveType.TRIANGLES}),e=function(e,t){var r=t.vertexFormat,a=t.center,i=t.semiMajorAxis,n=t.semiMinorAxis,o=t.ellipsoid,s=t.height,u=t.extrudedHeight,l=t.stRotation,m=e.length/3*2,p=new Float64Array(3*m),c=r.st?new Float32Array(2*m):void 0,y=r.normal?new Float32Array(3*m):void 0,d=r.tangent?new Float32Array(3*m):void 0,h=r.bitangent?new Float32Array(3*m):void 0,f=t.shadowVolume,A=f?new Float32Array(3*m):void 0,x=0,g=X,b=$,_=ee,C=new R.GeographicProjection(o),v=C.project(o.cartesianToCartographic(a,te),re),a=o.scaleToGeodeticSurface(a,U);o.geodeticSurfaceNormal(a,a);for(var a=R.Quaternion.fromAxisAngle(a,l,K),w=R.Matrix3.fromQuaternion(a,J),M=j.Cartesian2.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,ae),E=j.Cartesian2.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,ie),I=(V=e.length)/3*2,T=0;T<V;T+=3){var G=T+1,N=T+2,P=j.Cartesian3.fromArray(e,T,U);r.st&&(D=R.Matrix3.multiplyByVector(w,P,Q),F=C.project(o.cartesianToCartographic(D,te),W),j.Cartesian3.subtract(F,v,F),q.x=(F.x+i)/(2*i),q.y=(F.y+n)/(2*n),M.x=Math.min(q.x,M.x),M.y=Math.min(q.y,M.y),E.x=Math.max(q.x,E.x),E.y=Math.max(q.y,E.y),c[x+I]=q.x,c[x+1+I]=q.y,c[x++]=q.x,c[x++]=q.y),P=o.scaleToGeodeticSurface(P,P),D=j.Cartesian3.clone(P,Q),g=o.geodeticSurfaceNormal(P,g),f&&(A[T+V]=-g.x,A[G+V]=-g.y,A[N+V]=-g.z);var F=j.Cartesian3.multiplyByScalar(g,s,S),P=j.Cartesian3.add(P,F,P),F=j.Cartesian3.multiplyByScalar(g,u,F),D=j.Cartesian3.add(D,F,D);r.position&&(p[T+V]=D.x,p[G+V]=D.y,p[N+V]=D.z,p[T]=P.x,p[G]=P.y,p[N]=P.z),(r.normal||r.tangent||r.bitangent)&&(_=j.Cartesian3.clone(g,_),F=j.Cartesian3.fromArray(e,(T+3)%V,S),j.Cartesian3.subtract(F,P,F),P=j.Cartesian3.subtract(D,P,W),g=j.Cartesian3.normalize(j.Cartesian3.cross(P,F,g),g),r.normal&&(y[T]=g.x,y[G]=g.y,y[N]=g.z,y[T+V]=g.x,y[G+V]=g.y,y[N+V]=g.z),r.tangent&&(b=j.Cartesian3.normalize(j.Cartesian3.cross(_,g,b),b),d[T]=b.x,d[G]=b.y,d[N]=b.z,d[T+V]=b.x,d[T+1+V]=b.y,d[T+2+V]=b.z),r.bitangent&&(h[T]=_.x,h[G]=_.y,h[N]=_.z,h[T+V]=_.x,h[G+V]=_.y,h[N+V]=_.z))}if(r.st)for(var V=c.length,O=0;O<V;O+=2)c[O]=(c[O]-M.x)/(E.x-M.x),c[O+1]=(c[O+1]-M.y)/(E.y-M.y);return l=new H.GeometryAttributes,r.position&&(l.position=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})),r.st&&(l.st=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:c})),r.normal&&(l.normal=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})),r.tangent&&(l.tangent=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:d})),r.bitangent&&(l.bitangent=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:h})),f&&(l.extrudeDirection=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:A})),z.defined(t.offsetAttribute)&&(a=new Uint8Array(m),a=t.offsetAttribute===L.GeometryOffsetAttribute.TOP?L.arrayFill(a,1,0,m/2):(t=t.offsetAttribute===L.GeometryOffsetAttribute.NONE?0:1,L.arrayFill(a,t)),l.applyOffset=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})),l}(i,e),l=function(e){for(var t=e.length/3,r=c.IndexDatatype.createTypedArray(t,6*t),a=0,i=0;i<t;i++){var n=i,o=i+t,s=(n+1)%t,u=s+t;r[a++]=n,r[a++]=o,r[a++]=s,r[a++]=s,r[a++]=o,r[a++]=u}return r}(i),i=c.IndexDatatype.createTypedArray(2*i.length/3,l),i=new Y.Geometry({attributes:e,indices:i,primitiveType:Y.PrimitiveType.TRIANGLES}),i=p.GeometryPipeline.combineInstances([new m.GeometryInstance({geometry:r}),new m.GeometryInstance({geometry:i})]);return{boundingSphere:a,attributes:i[0].attributes,indices:i[0].indices}}function s(e,t,r,a,i,n,o){for(var s=B.EllipseGeometryLibrary.computeEllipsePositions({center:e,semiMajorAxis:t,semiMinorAxis:r,rotation:a,granularity:i},!1,!0).outerPositions,u=s.length/3,l=new Array(u),m=0;m<u;++m)l[m]=j.Cartesian3.fromArray(s,3*m);o=j.Rectangle.fromCartesianArray(l,n,o);return o.width>y.CesiumMath.PI&&(o.north=0<o.north?y.CesiumMath.PI_OVER_TWO-y.CesiumMath.EPSILON7:o.north,o.south=o.south<0?y.CesiumMath.EPSILON7-y.CesiumMath.PI_OVER_TWO:o.south,o.east=y.CesiumMath.PI,o.west=-y.CesiumMath.PI),o}function b(e){var t=(e=z.defaultValue(e,z.defaultValue.EMPTY_OBJECT)).center,r=z.defaultValue(e.ellipsoid,j.Ellipsoid.WGS84),a=e.semiMajorAxis,i=e.semiMinorAxis,n=z.defaultValue(e.granularity,y.CesiumMath.RADIANS_PER_DEGREE),o=z.defaultValue(e.vertexFormat,h.VertexFormat.DEFAULT);if(d.Check.defined("options.center",t),d.Check.typeOf.number("options.semiMajorAxis",a),d.Check.typeOf.number("options.semiMinorAxis",i),a<i)throw new d.DeveloperError("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(n<=0)throw new d.DeveloperError("granularity must be greater than zero.");var s=z.defaultValue(e.height,0),u=z.defaultValue(e.extrudedHeight,s);this._center=j.Cartesian3.clone(t),this._semiMajorAxis=a,this._semiMinorAxis=i,this._ellipsoid=j.Ellipsoid.clone(r),this._rotation=z.defaultValue(e.rotation,0),this._stRotation=z.defaultValue(e.stRotation,0),this._height=Math.max(u,s),this._granularity=n,this._vertexFormat=h.VertexFormat.clone(o),this._extrudedHeight=Math.min(u,s),this._shadowVolume=z.defaultValue(e.shadowVolume,!1),this._workerName="createEllipseGeometry",this._offsetAttribute=e.offsetAttribute,this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0}b.packedLength=j.Cartesian3.packedLength+j.Ellipsoid.packedLength+h.VertexFormat.packedLength+9,b.pack=function(e,t,r){return d.Check.defined("value",e),d.Check.defined("array",t),r=z.defaultValue(r,0),j.Cartesian3.pack(e._center,t,r),r+=j.Cartesian3.packedLength,j.Ellipsoid.pack(e._ellipsoid,t,r),r+=j.Ellipsoid.packedLength,h.VertexFormat.pack(e._vertexFormat,t,r),r+=h.VertexFormat.packedLength,t[r++]=e._semiMajorAxis,t[r++]=e._semiMinorAxis,t[r++]=e._rotation,t[r++]=e._stRotation,t[r++]=e._height,t[r++]=e._granularity,t[r++]=e._extrudedHeight,t[r++]=e._shadowVolume?1:0,t[r]=z.defaultValue(e._offsetAttribute,-1),t};var _=new j.Cartesian3,C=new j.Ellipsoid,v=new h.VertexFormat,w={center:_,ellipsoid:C,vertexFormat:v,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,stRotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};b.unpack=function(e,t,r){d.Check.defined("array",e),t=z.defaultValue(t,0);var a=j.Cartesian3.unpack(e,t,_);t+=j.Cartesian3.packedLength;var i=j.Ellipsoid.unpack(e,t,C);t+=j.Ellipsoid.packedLength;var n=h.VertexFormat.unpack(e,t,v);t+=h.VertexFormat.packedLength;var o=e[t++],s=e[t++],u=e[t++],l=e[t++],m=e[t++],p=e[t++],c=e[t++],y=1===e[t++],t=e[t];return z.defined(r)?(r._center=j.Cartesian3.clone(a,r._center),r._ellipsoid=j.Ellipsoid.clone(i,r._ellipsoid),r._vertexFormat=h.VertexFormat.clone(n,r._vertexFormat),r._semiMajorAxis=o,r._semiMinorAxis=s,r._rotation=u,r._stRotation=l,r._height=m,r._granularity=p,r._extrudedHeight=c,r._shadowVolume=y,r._offsetAttribute=-1===t?void 0:t,r):(w.height=m,w.extrudedHeight=c,w.granularity=p,w.stRotation=l,w.rotation=u,w.semiMajorAxis=o,w.semiMinorAxis=s,w.shadowVolume=y,w.offsetAttribute=-1===t?void 0:t,new b(w))},b.computeRectangle=function(e,t){var r=(e=z.defaultValue(e,z.defaultValue.EMPTY_OBJECT)).center,a=z.defaultValue(e.ellipsoid,j.Ellipsoid.WGS84),i=e.semiMajorAxis,n=e.semiMinorAxis,o=z.defaultValue(e.granularity,y.CesiumMath.RADIANS_PER_DEGREE),e=z.defaultValue(e.rotation,0);if(d.Check.defined("options.center",r),d.Check.typeOf.number("options.semiMajorAxis",i),d.Check.typeOf.number("options.semiMinorAxis",n),i<n)throw new d.DeveloperError("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(o<=0)throw new d.DeveloperError("granularity must be greater than zero.");return s(r,i,n,e,o,a,t)},b.createGeometry=function(e){if(!(e._semiMajorAxis<=0||e._semiMinorAxis<=0)){var t=e._height,r=e._extrudedHeight,a=!y.CesiumMath.equalsEpsilon(t,r,0,y.CesiumMath.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);var i,t={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:t,granularity:e._granularity,vertexFormat:e._vertexFormat,stRotation:e._stRotation};return a?(t.extrudedHeight=r,t.shadowVolume=e._shadowVolume,t.offsetAttribute=e._offsetAttribute,i=o(t)):(i=function(e){var t=e.center;n=j.Cartesian3.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(t,n),e.height,n),n=j.Cartesian3.add(t,n,n);var r=new R.BoundingSphere(n,e.semiMajorAxis),t=(a=B.EllipseGeometryLibrary.computeEllipsePositions(e,!0,!1)).positions,a=a.numPts,e=f(t,e,!1),a=A(a);return{boundingSphere:r,attributes:e,indices:a=c.IndexDatatype.createTypedArray(t.length/3,a)}}(t),z.defined(e._offsetAttribute)&&(r=i.attributes.position.values.length,t=new Uint8Array(r/3),r=e._offsetAttribute===L.GeometryOffsetAttribute.NONE?0:1,L.arrayFill(t,r),i.attributes.applyOffset=new Y.GeometryAttribute({componentDatatype:k.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t}))),new Y.Geometry({attributes:i.attributes,indices:i.indices,primitiveType:Y.PrimitiveType.TRIANGLES,boundingSphere:i.boundingSphere,offsetAttribute:e._offsetAttribute})}},b.createShadowVolume=function(e,t,r){var a=e._granularity,i=e._ellipsoid,t=t(a,i),r=r(a,i);return new b({center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:i,rotation:e._rotation,stRotation:e._stRotation,granularity:a,extrudedHeight:t,height:r,vertexFormat:h.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(b.prototype,{rectangle:{get:function(){return z.defined(this._rectangle)||(this._rectangle=s(this._center,this._semiMajorAxis,this._semiMinorAxis,this._rotation,this._granularity,this._ellipsoid)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return z.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(e){var t=-e._stRotation;if(0==t)return[0,0,0,1,1,0];for(var r=B.EllipseGeometryLibrary.computeEllipsePositions({center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,rotation:e._rotation,granularity:e._granularity},!1,!0).outerPositions,a=r.length/3,i=new Array(a),n=0;n<a;++n)i[n]=j.Cartesian3.fromArray(r,3*n);var o=e._ellipsoid,e=e.rectangle;return Y.Geometry._textureCoordinateRotationPoints(i,t,o,e)}(this)),this._textureCoordinateRotationPoints}}}),e.EllipseGeometry=b});
//# sourceMappingURL=EllipseGeometry-9546dea3.js.map
