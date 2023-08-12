define(["./arrayRemoveDuplicates-bb49591c","./BoundingRectangle-a94624e2","./Transforms-bf0664c5","./Matrix2-dd990207","./Matrix3-f3e9d70a","./ComponentDatatype-dd0b58d1","./CoplanarPolygonGeometryLibrary-559a9d3e","./defaultValue-040c41f9","./GeometryAttribute-716f70e8","./GeometryAttributes-52134c76","./GeometryInstance-2368b120","./GeometryPipeline-db870c07","./IndexDatatype-eddea9c9","./Math-8e567554","./PolygonGeometryLibrary-ac90f177","./PolygonPipeline-5665c0af","./VertexFormat-848ec33d","./combine-6eb6e848","./RuntimeError-3c5db370","./WebGLConstants-f7267ced","./OrientedBoundingBox-3103b5e5","./EllipsoidTangentPlane-7ce18521","./AxisAlignedBoundingBox-0671303f","./IntersectionTests-d8d3e347","./Plane-cf08f792","./AttributeCompression-b7460594","./EncodedCartesian3-b56e0ba9","./ArcType-3d26c7db","./EllipsoidRhumbLine-10115453"],(function(e,t,n,o,r,a,i,s,l,c,y,p,d,u,m,g,b,C,h,x,f,P,A,L,w,G,F,v,E){"use strict";const _=new r.Cartesian3,T=new t.BoundingRectangle,k=new o.Cartesian2,D=new o.Cartesian2,V=new r.Cartesian3,R=new r.Cartesian3,H=new r.Cartesian3,I=new r.Cartesian3,M=new r.Cartesian3,B=new r.Cartesian3,O=new n.Quaternion,z=new r.Matrix3,S=new r.Matrix3,N=new r.Cartesian3;function Q(e,t,i,y,p,m,b,C,h){const x=e.positions;let f=g.PolygonPipeline.triangulate(e.positions2D,e.holes);f.length<3&&(f=[0,1,2]);const P=d.IndexDatatype.createTypedArray(x.length,f.length);P.set(f);let A=z;if(0!==y){let e=n.Quaternion.fromAxisAngle(b,y,O);if(A=r.Matrix3.fromQuaternion(e,A),t.tangent||t.bitangent){e=n.Quaternion.fromAxisAngle(b,-y,O);const o=r.Matrix3.fromQuaternion(e,S);C=r.Cartesian3.normalize(r.Matrix3.multiplyByVector(o,C,C),C),t.bitangent&&(h=r.Cartesian3.normalize(r.Cartesian3.cross(b,C,h),h))}}else A=r.Matrix3.clone(r.Matrix3.IDENTITY,A);const L=D;t.st&&(L.x=i.x,L.y=i.y);const w=x.length,G=3*w,F=new Float64Array(G),v=t.normal?new Float32Array(G):void 0,E=t.tangent?new Float32Array(G):void 0,T=t.bitangent?new Float32Array(G):void 0,V=t.st?new Float32Array(2*w):void 0;let R=0,H=0,I=0,M=0,B=0;for(let e=0;e<w;e++){const n=x[e];if(F[R++]=n.x,F[R++]=n.y,F[R++]=n.z,t.st)if(s.defined(p)&&p.positions.length===w)V[B++]=p.positions[e].x,V[B++]=p.positions[e].y;else{const e=m(r.Matrix3.multiplyByVector(A,n,_),k);o.Cartesian2.subtract(e,L,e);const t=u.CesiumMath.clamp(e.x/i.width,0,1),a=u.CesiumMath.clamp(e.y/i.height,0,1);V[B++]=t,V[B++]=a}t.normal&&(v[H++]=b.x,v[H++]=b.y,v[H++]=b.z),t.tangent&&(E[M++]=C.x,E[M++]=C.y,E[M++]=C.z),t.bitangent&&(T[I++]=h.x,T[I++]=h.y,T[I++]=h.z)}const N=new c.GeometryAttributes;return t.position&&(N.position=new l.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:F})),t.normal&&(N.normal=new l.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:v})),t.tangent&&(N.tangent=new l.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:E})),t.bitangent&&(N.bitangent=new l.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T})),t.st&&(N.st=new l.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:V})),new l.Geometry({attributes:N,indices:P,primitiveType:l.PrimitiveType.TRIANGLES})}function j(e){const t=(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).polygonHierarchy,n=e.textureCoordinates,a=s.defaultValue(e.vertexFormat,b.VertexFormat.DEFAULT);this._vertexFormat=b.VertexFormat.clone(a),this._polygonHierarchy=t,this._stRotation=s.defaultValue(e.stRotation,0),this._ellipsoid=r.Ellipsoid.clone(s.defaultValue(e.ellipsoid,r.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this._textureCoordinates=n,this.packedLength=m.PolygonGeometryLibrary.computeHierarchyPackedLength(t,r.Cartesian3)+b.VertexFormat.packedLength+r.Ellipsoid.packedLength+(s.defined(n)?m.PolygonGeometryLibrary.computeHierarchyPackedLength(n,o.Cartesian2):1)+2}j.fromPositions=function(e){return new j({polygonHierarchy:{positions:(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid,textureCoordinates:e.textureCoordinates})},j.pack=function(e,t,n){return n=s.defaultValue(n,0),n=m.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n,r.Cartesian3),r.Ellipsoid.pack(e._ellipsoid,t,n),n+=r.Ellipsoid.packedLength,b.VertexFormat.pack(e._vertexFormat,t,n),n+=b.VertexFormat.packedLength,t[n++]=e._stRotation,s.defined(e._textureCoordinates)?n=m.PolygonGeometryLibrary.packPolygonHierarchy(e._textureCoordinates,t,n,o.Cartesian2):t[n++]=-1,t[n++]=e.packedLength,t};const U=r.Ellipsoid.clone(r.Ellipsoid.UNIT_SPHERE),Y=new b.VertexFormat,q={polygonHierarchy:{}};return j.unpack=function(e,t,n){t=s.defaultValue(t,0);const a=m.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,r.Cartesian3);t=a.startingIndex,delete a.startingIndex;const i=r.Ellipsoid.unpack(e,t,U);t+=r.Ellipsoid.packedLength;const l=b.VertexFormat.unpack(e,t,Y);t+=b.VertexFormat.packedLength;const c=e[t++],y=-1===e[t]?void 0:m.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,o.Cartesian2);s.defined(y)?(t=y.startingIndex,delete y.startingIndex):t++;const p=e[t++];return s.defined(n)||(n=new j(q)),n._polygonHierarchy=a,n._ellipsoid=r.Ellipsoid.clone(i,n._ellipsoid),n._vertexFormat=b.VertexFormat.clone(l,n._vertexFormat),n._stRotation=c,n._textureCoordinates=y,n.packedLength=p,n},j.createGeometry=function(t){const o=t._vertexFormat,a=t._polygonHierarchy,c=t._stRotation,g=t._textureCoordinates,b=s.defined(g);let C=a.positions;if(C=e.arrayRemoveDuplicates(C,r.Cartesian3.equalsEpsilon,!0),C.length<3)return;let h=V,x=R,f=H,P=M;const A=B;if(!i.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(C,I,P,A))return;if(h=r.Cartesian3.cross(P,A,h),h=r.Cartesian3.normalize(h,h),!r.Cartesian3.equalsEpsilon(I,r.Cartesian3.ZERO,u.CesiumMath.EPSILON6)){const e=t._ellipsoid.geodeticSurfaceNormal(I,N);r.Cartesian3.dot(h,e)<0&&(h=r.Cartesian3.negate(h,h),P=r.Cartesian3.negate(P,P))}const L=i.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(I,P,A),w=i.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(I,P,A);o.tangent&&(x=r.Cartesian3.clone(P,x)),o.bitangent&&(f=r.Cartesian3.clone(A,f));const G=m.PolygonGeometryLibrary.polygonsFromHierarchy(a,b,L,!1),F=G.hierarchy,v=G.polygons,E=b?m.PolygonGeometryLibrary.polygonsFromHierarchy(g,!0,(function(e){return e}),!1).polygons:void 0;if(0===F.length)return;C=F[0].outerRing;const _=n.BoundingSphere.fromPoints(C),k=m.PolygonGeometryLibrary.computeBoundingRectangle(h,w,C,c,T),D=[];for(let e=0;e<v.length;e++){const t=new y.GeometryInstance({geometry:Q(v[e],o,k,c,b?E[e]:void 0,w,h,x,f)});D.push(t)}const O=p.GeometryPipeline.combineInstances(D)[0];O.attributes.position.values=new Float64Array(O.attributes.position.values),O.indices=d.IndexDatatype.createTypedArray(O.attributes.position.values.length/3,O.indices);const z=O.attributes;return o.position||delete z.position,new l.Geometry({attributes:z,indices:O.indices,primitiveType:O.primitiveType,boundingSphere:_})},function(e,t){return s.defined(t)&&(e=j.unpack(e,t)),j.createGeometry(e)}}));