define(["exports","./ArcType-dc1c5aee","./arrayRemoveDuplicates-89f704e4","./Cartesian2-e9bb1bb3","./ComponentDatatype-b3120730","./when-208fe5b0","./EllipsoidRhumbLine-938626ba","./GeometryAttribute-dddfbf98","./GeometryAttributes-b0b294d8","./GeometryPipeline-aac4ecee","./IndexDatatype-4d4b60a0","./Math-56f06cd5","./Transforms-b2c3e401","./PolygonPipeline-6a47f72e"],function(e,I,T,x,E,A,f,P,_,p,G,L,d,M){"use strict";function D(){this._array=[],this._offset=0,this._length=0}Object.defineProperties(D.prototype,{length:{get:function(){return this._length}}}),D.prototype.enqueue=function(e){this._array.push(e),this._length++},D.prototype.dequeue=function(){if(0!==this._length){var e=this._array,t=this._offset,r=e[t];return e[t]=void 0,10<++t&&2*t>e.length&&(this._array=e.slice(t),t=0),this._offset=t,this._length--,r}},D.prototype.peek=function(){if(0!==this._length)return this._array[this._offset]},D.prototype.contains=function(e){return-1!==this._array.indexOf(e)},D.prototype.clear=function(){this._array.length=this._offset=this._length=0},D.prototype.sort=function(e){0<this._offset&&(this._array=this._array.slice(this._offset),this._offset=0),this._array.sort(e)};var S={computeHierarchyPackedLength:function(e){for(var t=0,r=[e];0<r.length;){var i=r.pop();if(A.defined(i)){t+=2;var n=i.positions,a=i.holes;if(A.defined(n)&&(t+=n.length*x.Cartesian3.packedLength),A.defined(a))for(var o=a.length,s=0;s<o;++s)r.push(a[s])}}return t},packPolygonHierarchy:function(e,t,r){for(var i=[e];0<i.length;){var n=i.pop();if(A.defined(n)){var a=n.positions,o=n.holes;if(t[r++]=A.defined(a)?a.length:0,t[r++]=A.defined(o)?o.length:0,A.defined(a))for(var s=a.length,u=0;u<s;++u,r+=3)x.Cartesian3.pack(a[u],t,r);if(A.defined(o))for(var l=o.length,h=0;h<l;++h)i.push(o[h])}}return r},unpackPolygonHierarchy:function(e,t){for(var r=e[t++],i=e[t++],n=new Array(r),a=0<i?new Array(i):void 0,o=0;o<r;++o,t+=x.Cartesian3.packedLength)n[o]=x.Cartesian3.unpack(e,t);for(var s=0;s<i;++s)a[s]=S.unpackPolygonHierarchy(e,t),t=a[s].startingIndex,delete a[s].startingIndex;return{positions:n,holes:a,startingIndex:t}}},y=new x.Cartesian3;S.subdivideLineCount=function(e,t,r){t=x.Cartesian3.distance(e,t),r=Math.max(0,Math.ceil(L.CesiumMath.log2(t/r)));return Math.pow(2,r)};var g=new x.Cartographic,m=new x.Cartographic,v=new x.Cartographic,C=new x.Cartesian3;S.subdivideRhumbLineCount=function(e,t,r,i){t=e.cartesianToCartographic(t,g),r=e.cartesianToCartographic(r,m),i=new f.EllipsoidRhumbLine(t,r,e).surfaceDistance/i,i=Math.max(0,Math.ceil(L.CesiumMath.log2(i)));return Math.pow(2,i)},S.subdivideLine=function(e,t,r,i){var n=S.subdivideLineCount(e,t,r),a=x.Cartesian3.distance(e,t),o=a/n,s=i=!A.defined(i)?[]:i;s.length=3*n;for(var u,l,h=0,c=0;c<n;c++){var f=(f=e,u=c*o,l=a,x.Cartesian3.subtract(t,f,y),x.Cartesian3.multiplyByScalar(y,u/l,y),x.Cartesian3.add(f,y,y),[y.x,y.y,y.z]);s[h++]=f[0],s[h++]=f[1],s[h++]=f[2]}return s},S.subdivideRhumbLine=function(e,t,r,i,n){var t=e.cartesianToCartographic(t,g),r=e.cartesianToCartographic(r,m),a=new f.EllipsoidRhumbLine(t,r,e),i=a.surfaceDistance/i,i=Math.max(0,Math.ceil(L.CesiumMath.log2(i))),o=Math.pow(2,i),s=a.surfaceDistance/o,u=n=!A.defined(n)?[]:n;u.length=3*o;for(var l=0,h=0;h<o;h++){var c=a.interpolateUsingSurfaceDistance(h*s,v),c=e.cartographicToCartesian(c,C);u[l++]=c.x,u[l++]=c.y,u[l++]=c.z}return u};var b=new x.Cartesian3,w=new x.Cartesian3,R=new x.Cartesian3,N=new x.Cartesian3;S.scaleToGeodeticHeightExtruded=function(e,t,r,i,n){i=A.defaultValue(i,x.Ellipsoid.WGS84);var a=b,o=w,s=R,u=N;if(A.defined(e)&&A.defined(e.attributes)&&A.defined(e.attributes.position))for(var l=e.attributes.position.values,h=l.length/2,c=0;c<h;c+=3)x.Cartesian3.fromArray(l,c,s),i.geodeticSurfaceNormal(s,a),u=i.scaleToGeodeticSurface(s,u),o=x.Cartesian3.multiplyByScalar(a,r,o),o=x.Cartesian3.add(u,o,o),l[c+h]=o.x,l[c+1+h]=o.y,l[c+2+h]=o.z,n&&(u=x.Cartesian3.clone(s,u)),o=x.Cartesian3.multiplyByScalar(a,t,o),o=x.Cartesian3.add(u,o,o),l[c]=o.x,l[c+1]=o.y,l[c+2]=o.z;return e},S.polygonOutlinesFromHierarchy=function(e,t,r){var i,n,a=[],o=new D;for(o.enqueue(e);0!==o.length;){var s=o.dequeue(),u=s.positions;if(t)for(n=u.length,h=0;h<n;h++)r.scaleToGeodeticSurface(u[h],u[h]);if(!((u=T.arrayRemoveDuplicates(u,x.Cartesian3.equalsEpsilon,!0)).length<3)){for(var l=s.holes?s.holes.length:0,h=0;h<l;h++){var c=s.holes[h],f=c.positions;if(t)for(n=f.length,i=0;i<n;++i)r.scaleToGeodeticSurface(f[i],f[i]);if(!((f=T.arrayRemoveDuplicates(f,x.Cartesian3.equalsEpsilon,!0)).length<3)){a.push(f);var p=0;for(A.defined(c.holes)&&(p=c.holes.length),i=0;i<p;i++)o.enqueue(c.holes[i])}}a.push(u)}}return a},S.polygonsFromHierarchy=function(e,t,r,i){var n=[],a=[],o=new D;for(o.enqueue(e);0!==o.length;){var s,u=o.dequeue(),l=u.positions,h=u.holes;if(r)for(s=l.length,m=0;m<s;m++)i.scaleToGeodeticSurface(l[m],l[m]);if(!((l=T.arrayRemoveDuplicates(l,x.Cartesian3.equalsEpsilon,!0)).length<3)){var c=t(l);if(A.defined(c)){var f=[];M.PolygonPipeline.computeWindingOrder2D(c)===M.WindingOrder.CLOCKWISE&&(c.reverse(),l=l.slice().reverse());for(var p,d=l.slice(),y=A.defined(h)?h.length:0,g=[],m=0;m<y;m++){var v=h[m],C=v.positions;if(r)for(s=C.length,p=0;p<s;++p)i.scaleToGeodeticSurface(C[p],C[p]);if(!((C=T.arrayRemoveDuplicates(C,x.Cartesian3.equalsEpsilon,!0)).length<3)){var b=t(C);if(A.defined(b)){M.PolygonPipeline.computeWindingOrder2D(b)===M.WindingOrder.CLOCKWISE&&(b.reverse(),C=C.slice().reverse()),g.push(C),f.push(d.length);var d=d.concat(C),c=c.concat(b),w=0;for(A.defined(v.holes)&&(w=v.holes.length),p=0;p<w;p++)o.enqueue(v.holes[p])}}}n.push({outerRing:l,holes:g}),a.push({positions:d,positions2D:c,holes:f})}}}return{hierarchy:n,polygons:a}};var O=new x.Cartesian2,q=new x.Cartesian3,B=new d.Quaternion,H=new d.Matrix3;S.computeBoundingRectangle=function(e,t,r,i,n){for(var i=d.Quaternion.fromAxisAngle(e,i,B),a=d.Matrix3.fromQuaternion(i,H),o=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,h=r.length,c=0;c<h;++c){var f=x.Cartesian3.clone(r[c],q);d.Matrix3.multiplyByVector(a,f,f);f=t(f,O);A.defined(f)&&(o=Math.min(o,f.x),s=Math.max(s,f.x),u=Math.min(u,f.y),l=Math.max(l,f.y))}return n.x=o,n.y=u,n.width=s-o,n.height=l-u,n},S.createGeometryFromPositions=function(e,t,r,i,n,a){var o=M.PolygonPipeline.triangulate(t.positions2D,t.holes);o.length<3&&(o=[0,1,2]);var s=t.positions;if(i){for(var u=s.length,l=new Array(3*u),h=0,c=0;c<u;c++){var f=s[c];l[h++]=f.x,l[h++]=f.y,l[h++]=f.z}i=new P.Geometry({attributes:{position:new P.GeometryAttribute({componentDatatype:E.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l})},indices:o,primitiveType:P.PrimitiveType.TRIANGLES});return n.normal?p.GeometryPipeline.computeNormal(i):i}return a===I.ArcType.GEODESIC?M.PolygonPipeline.computeSubdivision(e,s,o,r):a===I.ArcType.RHUMB?M.PolygonPipeline.computeRhumbLineSubdivision(e,s,o,r):void 0};var k=[],z=new x.Cartesian3,W=new x.Cartesian3;S.computeWallGeometry=function(e,t,r,i,n){var a,o,s,u=e.length,l=0;if(i)for(o=3*u*2,a=new Array(2*o),s=0;s<u;s++)p=e[s],d=e[(s+1)%u],a[l]=a[l+o]=p.x,a[++l]=a[l+o]=p.y,a[++l]=a[l+o]=p.z,a[++l]=a[l+o]=d.x,a[++l]=a[l+o]=d.y,a[++l]=a[l+o]=d.z,++l;else{var h=L.CesiumMath.chordLength(r,t.maximumRadius),c=0;if(n===I.ArcType.GEODESIC)for(s=0;s<u;s++)c+=S.subdivideLineCount(e[s],e[(s+1)%u],h);else if(n===I.ArcType.RHUMB)for(s=0;s<u;s++)c+=S.subdivideRhumbLineCount(t,e[s],e[(s+1)%u],h);for(o=3*(c+u),a=new Array(2*o),s=0;s<u;s++){var f,p=e[s],d=e[(s+1)%u];n===I.ArcType.GEODESIC?f=S.subdivideLine(p,d,h,k):n===I.ArcType.RHUMB&&(f=S.subdivideRhumbLine(t,p,d,h,k));for(var y=f.length,g=0;g<y;++g,++l)a[l]=f[g],a[l+o]=f[g];a[l]=d.x,a[l+o]=d.x,a[++l]=d.y,a[l+o]=d.y,a[++l]=d.z,a[l+o]=d.z,++l}}var u=a.length,m=G.IndexDatatype.createTypedArray(u/3,u-6*e.length),v=0;for(u/=6,s=0;s<u;s++){var C=s,b=C+1,w=C+u,T=w+1;p=x.Cartesian3.fromArray(a,3*C,z),d=x.Cartesian3.fromArray(a,3*b,W),x.Cartesian3.equalsEpsilon(p,d,L.CesiumMath.EPSILON10,L.CesiumMath.EPSILON10)||(m[v++]=C,m[v++]=w,m[v++]=b,m[v++]=b,m[v++]=w,m[v++]=T)}return new P.Geometry({attributes:new _.GeometryAttributes({position:new P.GeometryAttribute({componentDatatype:E.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:a})}),indices:m,primitiveType:P.PrimitiveType.TRIANGLES})},e.PolygonGeometryLibrary=S});
//# sourceMappingURL=PolygonGeometryLibrary-f3f26cdf.js.map
