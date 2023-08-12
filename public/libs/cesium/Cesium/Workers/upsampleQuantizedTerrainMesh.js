define(["./AttributeCompression-b7460594","./Transforms-bf0664c5","./Matrix2-dd990207","./Matrix3-f3e9d70a","./defaultValue-040c41f9","./TerrainEncoding-37abf1c5","./IndexDatatype-eddea9c9","./Math-8e567554","./OrientedBoundingBox-3103b5e5","./createTaskProcessorWorker","./ComponentDatatype-dd0b58d1","./WebGLConstants-f7267ced","./combine-6eb6e848","./RuntimeError-3c5db370","./EllipsoidTangentPlane-7ce18521","./AxisAlignedBoundingBox-0671303f","./IntersectionTests-d8d3e347","./Plane-cf08f792"],(function(e,t,n,i,s,r,h,o,u,d,p,l,a,f,c,g,m,x){"use strict";const w={clipTriangleAtAxisAlignedThreshold:function(e,t,n,i,r,h){let o,u,d;s.defined(h)?h.length=0:h=[],t?(o=n<e,u=i<e,d=r<e):(o=n>e,u=i>e,d=r>e);const p=o+u+d;let l,a,f,c,g,m;return 1===p?o?(l=(e-n)/(i-n),a=(e-n)/(r-n),h.push(1),h.push(2),1!==a&&(h.push(-1),h.push(0),h.push(2),h.push(a)),1!==l&&(h.push(-1),h.push(0),h.push(1),h.push(l))):u?(f=(e-i)/(r-i),c=(e-i)/(n-i),h.push(2),h.push(0),1!==c&&(h.push(-1),h.push(1),h.push(0),h.push(c)),1!==f&&(h.push(-1),h.push(1),h.push(2),h.push(f))):d&&(g=(e-r)/(n-r),m=(e-r)/(i-r),h.push(0),h.push(1),1!==m&&(h.push(-1),h.push(2),h.push(1),h.push(m)),1!==g&&(h.push(-1),h.push(2),h.push(0),h.push(g))):2===p?o||n===e?u||i===e?d||r===e||(a=(e-n)/(r-n),f=(e-i)/(r-i),h.push(2),h.push(-1),h.push(0),h.push(2),h.push(a),h.push(-1),h.push(1),h.push(2),h.push(f)):(m=(e-r)/(i-r),l=(e-n)/(i-n),h.push(1),h.push(-1),h.push(2),h.push(1),h.push(m),h.push(-1),h.push(0),h.push(1),h.push(l)):(c=(e-i)/(n-i),g=(e-r)/(n-r),h.push(0),h.push(-1),h.push(1),h.push(0),h.push(c),h.push(-1),h.push(2),h.push(0),h.push(g)):3!==p&&(h.push(0),h.push(1),h.push(2)),h},computeBarycentricCoordinates:function(e,t,n,r,h,o,u,d,p){const l=n-u,a=u-h,f=o-d,c=r-d,g=1/(f*l+a*c),m=t-d,x=e-u,w=(f*x+a*m)*g,C=(-c*x+l*m)*g,B=1-w-C;return s.defined(p)?(p.x=w,p.y=C,p.z=B,p):new i.Cartesian3(w,C,B)},computeLineSegmentLineSegmentIntersection:function(e,t,i,r,h,o,u,d,p){const l=(d-o)*(i-e)-(u-h)*(r-t);if(0===l)return;const a=((u-h)*(t-o)-(d-o)*(e-h))/l,f=((i-e)*(t-o)-(r-t)*(e-h))/l;return a>=0&&a<=1&&f>=0&&f<=1?(s.defined(p)||(p=new n.Cartesian2),p.x=e+a*(i-e),p.y=t+a*(r-t),p):void 0}};var C=w;const B=32767,y=16383,I=[],A=[],b=[],v=new i.Cartographic;let T=new i.Cartesian3;const M=[],z=[],V=[],N=[],E=[],R=new i.Cartesian3,H=new t.BoundingSphere,O=new u.OrientedBoundingBox,S=new n.Cartesian2,U=new i.Cartesian3;function F(){this.vertexBuffer=void 0,this.index=void 0,this.first=void 0,this.second=void 0,this.ratio=void 0}F.prototype.clone=function(e){return s.defined(e)||(e=new F),e.uBuffer=this.uBuffer,e.vBuffer=this.vBuffer,e.heightBuffer=this.heightBuffer,e.normalBuffer=this.normalBuffer,e.index=this.index,e.first=this.first,e.second=this.second,e.ratio=this.ratio,e},F.prototype.initializeIndexed=function(e,t,n,i,s){this.uBuffer=e,this.vBuffer=t,this.heightBuffer=n,this.normalBuffer=i,this.index=s,this.first=void 0,this.second=void 0,this.ratio=void 0},F.prototype.initializeFromClipResult=function(e,t,n){let i=t+1;return-1!==e[t]?n[e[t]].clone(this):(this.vertexBuffer=void 0,this.index=void 0,this.first=n[e[i]],++i,this.second=n[e[i]],++i,this.ratio=e[i],++i),i},F.prototype.getKey=function(){return this.isIndexed()?this.index:JSON.stringify({first:this.first.getKey(),second:this.second.getKey(),ratio:this.ratio})},F.prototype.isIndexed=function(){return s.defined(this.index)},F.prototype.getH=function(){return s.defined(this.index)?this.heightBuffer[this.index]:o.CesiumMath.lerp(this.first.getH(),this.second.getH(),this.ratio)},F.prototype.getU=function(){return s.defined(this.index)?this.uBuffer[this.index]:o.CesiumMath.lerp(this.first.getU(),this.second.getU(),this.ratio)},F.prototype.getV=function(){return s.defined(this.index)?this.vBuffer[this.index]:o.CesiumMath.lerp(this.first.getV(),this.second.getV(),this.ratio)};let P=new n.Cartesian2,D=-1;const W=[new i.Cartesian3,new i.Cartesian3],X=[new i.Cartesian3,new i.Cartesian3];function k(t,n){++D;let s=W[D],r=X[D];return s=e.AttributeCompression.octDecode(t.first.getNormalX(),t.first.getNormalY(),s),r=e.AttributeCompression.octDecode(t.second.getNormalX(),t.second.getNormalY(),r),T=i.Cartesian3.lerp(s,r,t.ratio,T),i.Cartesian3.normalize(T,T),e.AttributeCompression.octEncode(T,n),--D,n}F.prototype.getNormalX=function(){return s.defined(this.index)?this.normalBuffer[2*this.index]:(P=k(this,P),P.x)},F.prototype.getNormalY=function(){return s.defined(this.index)?this.normalBuffer[2*this.index+1]:(P=k(this,P),P.y)};const K=[];function L(e,t,n,i,r,h,o,u,d){if(0===o.length)return;let p=0,l=0;for(;l<o.length;)l=K[p++].initializeFromClipResult(o,l,u);for(let r=0;r<p;++r){const o=K[r];if(o.isIndexed())o.newIndex=h[o.index],o.uBuffer=e,o.vBuffer=t,o.heightBuffer=n,d&&(o.normalBuffer=i);else{const r=o.getKey();if(s.defined(h[r]))o.newIndex=h[r];else{const s=e.length;e.push(o.getU()),t.push(o.getV()),n.push(o.getH()),d&&(i.push(o.getNormalX()),i.push(o.getNormalY())),o.newIndex=s,h[r]=s}}}3===p?(r.push(K[0].newIndex),r.push(K[1].newIndex),r.push(K[2].newIndex)):4===p&&(r.push(K[0].newIndex),r.push(K[1].newIndex),r.push(K[2].newIndex),r.push(K[0].newIndex),r.push(K[2].newIndex),r.push(K[3].newIndex))}return K.push(new F),K.push(new F),K.push(new F),K.push(new F),d((function(e,s){const d=e.isEastChild,p=e.isNorthChild,l=d?y:0,a=d?B:y,f=p?y:0,c=p?B:y,g=M,m=z,x=V,w=E;g.length=0,m.length=0,x.length=0,w.length=0;const P=N;P.length=0;const D={},W=e.vertices;let X=e.indices;X=X.subarray(0,e.indexCountWithoutSkirts);const k=r.TerrainEncoding.clone(e.encoding),K=k.hasVertexNormals;let Y=0;const _=e.vertexCountWithoutSkirts,G=e.minimumHeight,J=e.maximumHeight,Z=new Array(_),j=new Array(_),q=new Array(_),Q=K?new Array(2*_):void 0;let $,ee,te,ne,ie;for(ee=0,te=0;ee<_;++ee,te+=2){const e=k.decodeTextureCoordinates(W,ee,S);if($=k.decodeHeight(W,ee),ne=o.CesiumMath.clamp(e.x*B|0,0,B),ie=o.CesiumMath.clamp(e.y*B|0,0,B),q[ee]=o.CesiumMath.clamp(($-G)/(J-G)*B|0,0,B),ne<20&&(ne=0),ie<20&&(ie=0),B-ne<20&&(ne=B),B-ie<20&&(ie=B),Z[ee]=ne,j[ee]=ie,K){const e=k.getOctEncodedNormal(W,ee,U);Q[te]=e.x,Q[te+1]=e.y}(d&&ne>=y||!d&&ne<=y)&&(p&&ie>=y||!p&&ie<=y)&&(D[ee]=Y,g.push(ne),m.push(ie),x.push(q[ee]),K&&(w.push(Q[te]),w.push(Q[te+1])),++Y)}const se=[];se.push(new F),se.push(new F),se.push(new F);const re=[];let he,oe;for(re.push(new F),re.push(new F),re.push(new F),ee=0;ee<X.length;ee+=3){const e=X[ee],t=X[ee+1],n=X[ee+2],i=Z[e],s=Z[t],r=Z[n];se[0].initializeIndexed(Z,j,q,Q,e),se[1].initializeIndexed(Z,j,q,Q,t),se[2].initializeIndexed(Z,j,q,Q,n);const h=C.clipTriangleAtAxisAlignedThreshold(y,d,i,s,r,I);he=0,he>=h.length||(he=re[0].initializeFromClipResult(h,he,se),he>=h.length||(he=re[1].initializeFromClipResult(h,he,se),he>=h.length||(he=re[2].initializeFromClipResult(h,he,se),oe=C.clipTriangleAtAxisAlignedThreshold(y,p,re[0].getV(),re[1].getV(),re[2].getV(),A),L(g,m,x,w,P,D,oe,re,K),he<h.length&&(re[2].clone(re[1]),re[2].initializeFromClipResult(h,he,se),oe=C.clipTriangleAtAxisAlignedThreshold(y,p,re[0].getV(),re[1].getV(),re[2].getV(),A),L(g,m,x,w,P,D,oe,re,K)))))}const ue=d?-32767:0,de=p?-32767:0,pe=[],le=[],ae=[],fe=[];let ce=Number.MAX_VALUE,ge=-ce;const me=b;me.length=0;const xe=i.Ellipsoid.clone(e.ellipsoid),we=n.Rectangle.clone(e.childRectangle),Ce=we.north,Be=we.south;let ye=we.east;const Ie=we.west;for(ye<Ie&&(ye+=o.CesiumMath.TWO_PI),ee=0;ee<g.length;++ee)ne=Math.round(g[ee]),ne<=l?(pe.push(ee),ne=0):ne>=a?(ae.push(ee),ne=B):ne=2*ne+ue,g[ee]=ne,ie=Math.round(m[ee]),ie<=f?(le.push(ee),ie=0):ie>=c?(fe.push(ee),ie=B):ie=2*ie+de,m[ee]=ie,$=o.CesiumMath.lerp(G,J,x[ee]/B),$<ce&&(ce=$),$>ge&&(ge=$),x[ee]=$,v.longitude=o.CesiumMath.lerp(Ie,ye,ne/B),v.latitude=o.CesiumMath.lerp(Be,Ce,ie/B),v.height=$,xe.cartographicToCartesian(v,T),me.push(T.x),me.push(T.y),me.push(T.z);const Ae=t.BoundingSphere.fromVertices(me,i.Cartesian3.ZERO,3,H),be=u.OrientedBoundingBox.fromRectangle(we,ce,ge,xe,O),ve=new r.EllipsoidalOccluder(xe).computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid(Ae.center,me,3,Ae.center,ce,R),Te=ge-ce,Me=new Uint16Array(g.length+m.length+x.length);for(ee=0;ee<g.length;++ee)Me[ee]=g[ee];let ze=g.length;for(ee=0;ee<m.length;++ee)Me[ze+ee]=m[ee];for(ze+=m.length,ee=0;ee<x.length;++ee)Me[ze+ee]=B*(x[ee]-ce)/Te;const Ve=h.IndexDatatype.createTypedArray(g.length,P);let Ne;if(K){const e=new Uint8Array(w);s.push(Me.buffer,Ve.buffer,e.buffer),Ne=e.buffer}else s.push(Me.buffer,Ve.buffer);return{vertices:Me.buffer,encodedNormals:Ne,indices:Ve.buffer,minimumHeight:ce,maximumHeight:ge,westIndices:pe,southIndices:le,eastIndices:ae,northIndices:fe,boundingSphere:Ae,orientedBoundingBox:be,horizonOcclusionPoint:ve}}))}));