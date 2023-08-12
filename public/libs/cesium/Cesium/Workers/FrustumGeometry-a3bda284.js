define(["exports","./Transforms-b2c3e401","./Cartesian2-e9bb1bb3","./Check-5e798bbf","./ComponentDatatype-b3120730","./when-208fe5b0","./GeometryAttribute-dddfbf98","./GeometryAttributes-b0b294d8","./Math-56f06cd5","./Plane-6fbc10a1","./VertexFormat-9eeda9f8"],function(e,v,y,p,g,b,x,E,a,f,u){"use strict";function h(e){this.planes=b.defaultValue(e,[])}var l=[new y.Cartesian3,new y.Cartesian3,new y.Cartesian3];y.Cartesian3.clone(y.Cartesian3.UNIT_X,l[0]),y.Cartesian3.clone(y.Cartesian3.UNIT_Y,l[1]),y.Cartesian3.clone(y.Cartesian3.UNIT_Z,l[2]);var c=new y.Cartesian3,m=new y.Cartesian3,d=new f.Plane(new y.Cartesian3(1,0,0),0);function i(e){e=b.defaultValue(e,b.defaultValue.EMPTY_OBJECT),this.left=e.left,this._left=void 0,this.right=e.right,this._right=void 0,this.top=e.top,this._top=void 0,this.bottom=e.bottom,this._bottom=void 0,this.near=b.defaultValue(e.near,1),this._near=this.near,this.far=b.defaultValue(e.far,5e8),this._far=this.far,this._cullingVolume=new h,this._orthographicMatrix=new v.Matrix4}function n(e){if(!(b.defined(e.right)&&b.defined(e.left)&&b.defined(e.top)&&b.defined(e.bottom)&&b.defined(e.near)&&b.defined(e.far)))throw new p.DeveloperError("right, left, top, bottom, near, or far parameters are not set.");if(e.top!==e._top||e.bottom!==e._bottom||e.left!==e._left||e.right!==e._right||e.near!==e._near||e.far!==e._far){if(e.left>e.right)throw new p.DeveloperError("right must be greater than left.");if(e.bottom>e.top)throw new p.DeveloperError("top must be greater than bottom.");if(e.near<=0||e.near>e.far)throw new p.DeveloperError("near must be greater than zero and less than far.");e._left=e.left,e._right=e.right,e._top=e.top,e._bottom=e.bottom,e._near=e.near,e._far=e.far,e._orthographicMatrix=v.Matrix4.computeOrthographicOffCenter(e.left,e.right,e.bottom,e.top,e.near,e.far,e._orthographicMatrix)}}h.fromBoundingSphere=function(e,t){if(!b.defined(e))throw new p.DeveloperError("boundingSphere is required.");b.defined(t)||(t=new h);var r=l.length,a=t.planes;a.length=2*r;for(var i=e.center,n=e.radius,o=0,s=0;s<r;++s){var f=l[s],u=a[o],d=a[o+1];b.defined(u)||(u=a[o]=new v.Cartesian4),b.defined(d)||(d=a[o+1]=new v.Cartesian4),y.Cartesian3.multiplyByScalar(f,-n,c),y.Cartesian3.add(i,c,c),u.x=f.x,u.y=f.y,u.z=f.z,u.w=-y.Cartesian3.dot(f,c),y.Cartesian3.multiplyByScalar(f,n,c),y.Cartesian3.add(i,c,c),d.x=-f.x,d.y=-f.y,d.z=-f.z,d.w=-y.Cartesian3.dot(y.Cartesian3.negate(f,m),c),o+=2}return t},h.prototype.computeVisibility=function(e){if(!b.defined(e))throw new p.DeveloperError("boundingVolume is required.");for(var t=this.planes,r=!1,a=0,i=t.length;a<i;++a){var n=e.intersectPlane(f.Plane.fromCartesian4(t[a],d));if(n===v.Intersect.OUTSIDE)return v.Intersect.OUTSIDE;n===v.Intersect.INTERSECTING&&(r=!0)}return r?v.Intersect.INTERSECTING:v.Intersect.INSIDE},h.prototype.computeVisibilityWithPlaneMask=function(e,t){if(!b.defined(e))throw new p.DeveloperError("boundingVolume is required.");if(!b.defined(t))throw new p.DeveloperError("parentPlaneMask is required.");if(t===h.MASK_OUTSIDE||t===h.MASK_INSIDE)return t;for(var r=h.MASK_INSIDE,a=this.planes,i=0,n=a.length;i<n;++i){var o=i<31?1<<i:0;if(!(i<31&&0==(t&o))){var s=e.intersectPlane(f.Plane.fromCartesian4(a[i],d));if(s===v.Intersect.OUTSIDE)return h.MASK_OUTSIDE;s===v.Intersect.INTERSECTING&&(r|=o)}}return r},h.MASK_OUTSIDE=4294967295,h.MASK_INSIDE=0,h.MASK_INDETERMINATE=2147483647,Object.defineProperties(i.prototype,{projectionMatrix:{get:function(){return n(this),this._orthographicMatrix}}});var C=new y.Cartesian3,w=new y.Cartesian3,_=new y.Cartesian3,M=new y.Cartesian3;function D(e){e=b.defaultValue(e,b.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new i,this.width=e.width,this._width=void 0,this.aspectRatio=e.aspectRatio,this._aspectRatio=void 0,this.near=b.defaultValue(e.near,1),this._near=this.near,this.far=b.defaultValue(e.far,5e8),this._far=this.far}function o(e){if(!(b.defined(e.width)&&b.defined(e.aspectRatio)&&b.defined(e.near)&&b.defined(e.far)))throw new p.DeveloperError("width, aspectRatio, near, or far parameters are not set.");var t=e._offCenterFrustum;if(e.width!==e._width||e.aspectRatio!==e._aspectRatio||e.near!==e._near||e.far!==e._far){if(e.aspectRatio<0)throw new p.DeveloperError("aspectRatio must be positive.");if(e.near<0||e.near>e.far)throw new p.DeveloperError("near must be greater than zero and less than far.");e._aspectRatio=e.aspectRatio,e._width=e.width,e._near=e.near,e._far=e.far;var r=1/e.aspectRatio;t.right=.5*e.width,t.left=-t.right,t.top=r*t.right,t.bottom=-t.top,t.near=e.near,t.far=e.far}}function s(e){e=b.defaultValue(e,b.defaultValue.EMPTY_OBJECT),this.left=e.left,this._left=void 0,this.right=e.right,this._right=void 0,this.top=e.top,this._top=void 0,this.bottom=e.bottom,this._bottom=void 0,this.near=b.defaultValue(e.near,1),this._near=this.near,this.far=b.defaultValue(e.far,5e8),this._far=this.far,this._cullingVolume=new h,this._perspectiveMatrix=new v.Matrix4,this._infinitePerspective=new v.Matrix4}function V(e){if(!(b.defined(e.right)&&b.defined(e.left)&&b.defined(e.top)&&b.defined(e.bottom)&&b.defined(e.near)&&b.defined(e.far)))throw new p.DeveloperError("right, left, top, bottom, near, or far parameters are not set.");var t=e.top,r=e.bottom,a=e.right,i=e.left,n=e.near,o=e.far;if(t!==e._top||r!==e._bottom||i!==e._left||a!==e._right||n!==e._near||o!==e._far){if(e.near<=0||e.near>e.far)throw new p.DeveloperError("near must be greater than zero and less than far.");e._left=i,e._right=a,e._top=t,e._bottom=r,e._near=n,e._far=o,e._perspectiveMatrix=v.Matrix4.computePerspectiveOffCenter(i,a,r,t,n,o,e._perspectiveMatrix),e._infinitePerspective=v.Matrix4.computeInfinitePerspectiveOffCenter(i,a,r,t,n,e._infinitePerspective)}}i.prototype.computeCullingVolume=function(e,t,r){if(!b.defined(e))throw new p.DeveloperError("position is required.");if(!b.defined(t))throw new p.DeveloperError("direction is required.");if(!b.defined(r))throw new p.DeveloperError("up is required.");var a=this._cullingVolume.planes,i=this.top,n=this.bottom,o=this.right,s=this.left,f=this.near,u=this.far,d=y.Cartesian3.cross(t,r,C);y.Cartesian3.normalize(d,d);var h=w;y.Cartesian3.multiplyByScalar(t,f,h),y.Cartesian3.add(e,h,h);f=_;y.Cartesian3.multiplyByScalar(d,s,f),y.Cartesian3.add(h,f,f);s=a[0];return(s=!b.defined(s)?a[0]=new v.Cartesian4:s).x=d.x,s.y=d.y,s.z=d.z,s.w=-y.Cartesian3.dot(d,f),y.Cartesian3.multiplyByScalar(d,o,f),y.Cartesian3.add(h,f,f),s=a[1],(s=!b.defined(s)?a[1]=new v.Cartesian4:s).x=-d.x,s.y=-d.y,s.z=-d.z,s.w=-y.Cartesian3.dot(y.Cartesian3.negate(d,M),f),y.Cartesian3.multiplyByScalar(r,n,f),y.Cartesian3.add(h,f,f),s=a[2],(s=!b.defined(s)?a[2]=new v.Cartesian4:s).x=r.x,s.y=r.y,s.z=r.z,s.w=-y.Cartesian3.dot(r,f),y.Cartesian3.multiplyByScalar(r,i,f),y.Cartesian3.add(h,f,f),s=a[3],(s=!b.defined(s)?a[3]=new v.Cartesian4:s).x=-r.x,s.y=-r.y,s.z=-r.z,s.w=-y.Cartesian3.dot(y.Cartesian3.negate(r,M),f),s=a[4],(s=!b.defined(s)?a[4]=new v.Cartesian4:s).x=t.x,s.y=t.y,s.z=t.z,s.w=-y.Cartesian3.dot(t,h),y.Cartesian3.multiplyByScalar(t,u,f),y.Cartesian3.add(e,f,f),s=a[5],(s=!b.defined(s)?a[5]=new v.Cartesian4:s).x=-t.x,s.y=-t.y,s.z=-t.z,s.w=-y.Cartesian3.dot(y.Cartesian3.negate(t,M),f),this._cullingVolume},i.prototype.getPixelDimensions=function(e,t,r,a,i){if(n(this),!b.defined(e)||!b.defined(t))throw new p.DeveloperError("Both drawingBufferWidth and drawingBufferHeight are required.");if(e<=0)throw new p.DeveloperError("drawingBufferWidth must be greater than zero.");if(t<=0)throw new p.DeveloperError("drawingBufferHeight must be greater than zero.");if(!b.defined(r))throw new p.DeveloperError("distance is required.");if(!b.defined(a))throw new p.DeveloperError("pixelRatio is required.");if(a<=0)throw new p.DeveloperError("pixelRatio must be greater than zero.");if(!b.defined(i))throw new p.DeveloperError("A result object is required.");r=this.right-this.left,t=a*(this.top-this.bottom)/t;return i.x=a*r/e,i.y=t,i},i.prototype.clone=function(e){return(e=!b.defined(e)?new i:e).left=this.left,e.right=this.right,e.top=this.top,e.bottom=this.bottom,e.near=this.near,e.far=this.far,e._left=void 0,e._right=void 0,e._top=void 0,e._bottom=void 0,e._near=void 0,e._far=void 0,e},i.prototype.equals=function(e){return b.defined(e)&&e instanceof i&&this.right===e.right&&this.left===e.left&&this.top===e.top&&this.bottom===e.bottom&&this.near===e.near&&this.far===e.far},i.prototype.equalsEpsilon=function(e,t,r){return e===this||b.defined(e)&&e instanceof i&&a.CesiumMath.equalsEpsilon(this.right,e.right,t,r)&&a.CesiumMath.equalsEpsilon(this.left,e.left,t,r)&&a.CesiumMath.equalsEpsilon(this.top,e.top,t,r)&&a.CesiumMath.equalsEpsilon(this.bottom,e.bottom,t,r)&&a.CesiumMath.equalsEpsilon(this.near,e.near,t,r)&&a.CesiumMath.equalsEpsilon(this.far,e.far,t,r)},D.packedLength=4,D.pack=function(e,t,r){return p.Check.typeOf.object("value",e),p.Check.defined("array",t),r=b.defaultValue(r,0),t[r++]=e.width,t[r++]=e.aspectRatio,t[r++]=e.near,t[r]=e.far,t},D.unpack=function(e,t,r){return p.Check.defined("array",e),t=b.defaultValue(t,0),(r=!b.defined(r)?new D:r).width=e[t++],r.aspectRatio=e[t++],r.near=e[t++],r.far=e[t],r},Object.defineProperties(D.prototype,{projectionMatrix:{get:function(){return o(this),this._offCenterFrustum.projectionMatrix}}}),D.prototype.computeCullingVolume=function(e,t,r){return o(this),this._offCenterFrustum.computeCullingVolume(e,t,r)},D.prototype.getPixelDimensions=function(e,t,r,a,i){return o(this),this._offCenterFrustum.getPixelDimensions(e,t,r,a,i)},D.prototype.clone=function(e){return(e=!b.defined(e)?new D:e).aspectRatio=this.aspectRatio,e.width=this.width,e.near=this.near,e.far=this.far,e._aspectRatio=void 0,e._width=void 0,e._near=void 0,e._far=void 0,this._offCenterFrustum.clone(e._offCenterFrustum),e},D.prototype.equals=function(e){return!!(b.defined(e)&&e instanceof D)&&(o(this),o(e),this.width===e.width&&this.aspectRatio===e.aspectRatio&&this._offCenterFrustum.equals(e._offCenterFrustum))},D.prototype.equalsEpsilon=function(e,t,r){return!!(b.defined(e)&&e instanceof D)&&(o(this),o(e),a.CesiumMath.equalsEpsilon(this.width,e.width,t,r)&&a.CesiumMath.equalsEpsilon(this.aspectRatio,e.aspectRatio,t,r)&&this._offCenterFrustum.equalsEpsilon(e._offCenterFrustum,t,r))},Object.defineProperties(s.prototype,{projectionMatrix:{get:function(){return V(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return V(this),this._infinitePerspective}}});var F=new y.Cartesian3,O=new y.Cartesian3,z=new y.Cartesian3,R=new y.Cartesian3;function k(e){e=b.defaultValue(e,b.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new s,this.fov=e.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=e.aspectRatio,this._aspectRatio=void 0,this.near=b.defaultValue(e.near,1),this._near=this.near,this.far=b.defaultValue(e.far,5e8),this._far=this.far,this.xOffset=b.defaultValue(e.xOffset,0),this._xOffset=this.xOffset,this.yOffset=b.defaultValue(e.yOffset,0),this._yOffset=this.yOffset}function P(e){if(!(b.defined(e.fov)&&b.defined(e.aspectRatio)&&b.defined(e.near)&&b.defined(e.far)))throw new p.DeveloperError("fov, aspectRatio, near, or far parameters are not set.");var t=e._offCenterFrustum;if(e.fov!==e._fov||e.aspectRatio!==e._aspectRatio||e.near!==e._near||e.far!==e._far||e.xOffset!==e._xOffset||e.yOffset!==e._yOffset){if(e.fov<0||e.fov>=Math.PI)throw new p.DeveloperError("fov must be in the range [0, PI).");if(e.aspectRatio<0)throw new p.DeveloperError("aspectRatio must be positive.");if(e.near<0||e.near>e.far)throw new p.DeveloperError("near must be greater than zero and less than far.");e._aspectRatio=e.aspectRatio,e._fov=e.fov,e._fovy=e.aspectRatio<=1?e.fov:2*Math.atan(Math.tan(.5*e.fov)/e.aspectRatio),e._near=e.near,e._far=e.far,e._sseDenominator=2*Math.tan(.5*e._fovy),e._xOffset=e.xOffset,e._yOffset=e.yOffset,t.top=e.near*Math.tan(.5*e._fovy),t.bottom=-t.top,t.right=e.aspectRatio*t.top,t.left=-t.right,t.near=e.near,t.far=e.far,t.right+=e.xOffset,t.left+=e.xOffset,t.top+=e.yOffset,t.bottom+=e.yOffset}}s.prototype.computeCullingVolume=function(e,t,r){if(!b.defined(e))throw new p.DeveloperError("position is required.");if(!b.defined(t))throw new p.DeveloperError("direction is required.");if(!b.defined(r))throw new p.DeveloperError("up is required.");var a=this._cullingVolume.planes,i=this.top,n=this.bottom,o=this.right,s=this.left,f=this.near,u=this.far,d=y.Cartesian3.cross(t,r,F),h=O;y.Cartesian3.multiplyByScalar(t,f,h),y.Cartesian3.add(e,h,h);f=z;y.Cartesian3.multiplyByScalar(t,u,f),y.Cartesian3.add(e,f,f);u=R;y.Cartesian3.multiplyByScalar(d,s,u),y.Cartesian3.add(h,u,u),y.Cartesian3.subtract(u,e,u),y.Cartesian3.normalize(u,u),y.Cartesian3.cross(u,r,u),y.Cartesian3.normalize(u,u);s=a[0];return(s=!b.defined(s)?a[0]=new v.Cartesian4:s).x=u.x,s.y=u.y,s.z=u.z,s.w=-y.Cartesian3.dot(u,e),y.Cartesian3.multiplyByScalar(d,o,u),y.Cartesian3.add(h,u,u),y.Cartesian3.subtract(u,e,u),y.Cartesian3.cross(r,u,u),y.Cartesian3.normalize(u,u),s=a[1],(s=!b.defined(s)?a[1]=new v.Cartesian4:s).x=u.x,s.y=u.y,s.z=u.z,s.w=-y.Cartesian3.dot(u,e),y.Cartesian3.multiplyByScalar(r,n,u),y.Cartesian3.add(h,u,u),y.Cartesian3.subtract(u,e,u),y.Cartesian3.cross(d,u,u),y.Cartesian3.normalize(u,u),s=a[2],(s=!b.defined(s)?a[2]=new v.Cartesian4:s).x=u.x,s.y=u.y,s.z=u.z,s.w=-y.Cartesian3.dot(u,e),y.Cartesian3.multiplyByScalar(r,i,u),y.Cartesian3.add(h,u,u),y.Cartesian3.subtract(u,e,u),y.Cartesian3.cross(u,d,u),y.Cartesian3.normalize(u,u),s=a[3],(s=!b.defined(s)?a[3]=new v.Cartesian4:s).x=u.x,s.y=u.y,s.z=u.z,s.w=-y.Cartesian3.dot(u,e),s=a[4],(s=!b.defined(s)?a[4]=new v.Cartesian4:s).x=t.x,s.y=t.y,s.z=t.z,s.w=-y.Cartesian3.dot(t,h),y.Cartesian3.negate(t,u),s=a[5],(s=!b.defined(s)?a[5]=new v.Cartesian4:s).x=u.x,s.y=u.y,s.z=u.z,s.w=-y.Cartesian3.dot(u,f),this._cullingVolume},s.prototype.getPixelDimensions=function(e,t,r,a,i){if(V(this),!b.defined(e)||!b.defined(t))throw new p.DeveloperError("Both drawingBufferWidth and drawingBufferHeight are required.");if(e<=0)throw new p.DeveloperError("drawingBufferWidth must be greater than zero.");if(t<=0)throw new p.DeveloperError("drawingBufferHeight must be greater than zero.");if(!b.defined(r))throw new p.DeveloperError("distance is required.");if(!b.defined(a))throw new p.DeveloperError("pixelRatio is required");if(a<=0)throw new p.DeveloperError("pixelRatio must be greater than zero.");if(!b.defined(i))throw new p.DeveloperError("A result object is required.");var n=1/this.near,t=2*a*r*(o=this.top*n)/t,o=this.right*n;return i.x=2*a*r*o/e,i.y=t,i},s.prototype.clone=function(e){return(e=!b.defined(e)?new s:e).right=this.right,e.left=this.left,e.top=this.top,e.bottom=this.bottom,e.near=this.near,e.far=this.far,e._left=void 0,e._right=void 0,e._top=void 0,e._bottom=void 0,e._near=void 0,e._far=void 0,e},s.prototype.equals=function(e){return b.defined(e)&&e instanceof s&&this.right===e.right&&this.left===e.left&&this.top===e.top&&this.bottom===e.bottom&&this.near===e.near&&this.far===e.far},s.prototype.equalsEpsilon=function(e,t,r){return e===this||b.defined(e)&&e instanceof s&&a.CesiumMath.equalsEpsilon(this.right,e.right,t,r)&&a.CesiumMath.equalsEpsilon(this.left,e.left,t,r)&&a.CesiumMath.equalsEpsilon(this.top,e.top,t,r)&&a.CesiumMath.equalsEpsilon(this.bottom,e.bottom,t,r)&&a.CesiumMath.equalsEpsilon(this.near,e.near,t,r)&&a.CesiumMath.equalsEpsilon(this.far,e.far,t,r)},k.packedLength=6,k.pack=function(e,t,r){return p.Check.typeOf.object("value",e),p.Check.defined("array",t),r=b.defaultValue(r,0),t[r++]=e.fov,t[r++]=e.aspectRatio,t[r++]=e.near,t[r++]=e.far,t[r++]=e.xOffset,t[r]=e.yOffset,t},k.unpack=function(e,t,r){return p.Check.defined("array",e),t=b.defaultValue(t,0),(r=!b.defined(r)?new k:r).fov=e[t++],r.aspectRatio=e[t++],r.near=e[t++],r.far=e[t++],r.xOffset=e[t++],r.yOffset=e[t],r},Object.defineProperties(k.prototype,{projectionMatrix:{get:function(){return P(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return P(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return P(this),this._fovy}},sseDenominator:{get:function(){return P(this),this._sseDenominator}}}),k.prototype.computeCullingVolume=function(e,t,r){return P(this),this._offCenterFrustum.computeCullingVolume(e,t,r)},k.prototype.getPixelDimensions=function(e,t,r,a,i){return P(this),this._offCenterFrustum.getPixelDimensions(e,t,r,a,i)},k.prototype.clone=function(e){return(e=!b.defined(e)?new k:e).aspectRatio=this.aspectRatio,e.fov=this.fov,e.near=this.near,e.far=this.far,e._aspectRatio=void 0,e._fov=void 0,e._near=void 0,e._far=void 0,this._offCenterFrustum.clone(e._offCenterFrustum),e},k.prototype.equals=function(e){return!!(b.defined(e)&&e instanceof k)&&(P(this),P(e),this.fov===e.fov&&this.aspectRatio===e.aspectRatio&&this._offCenterFrustum.equals(e._offCenterFrustum))},k.prototype.equalsEpsilon=function(e,t,r){return!!(b.defined(e)&&e instanceof k)&&(P(this),P(e),a.CesiumMath.equalsEpsilon(this.fov,e.fov,t,r)&&a.CesiumMath.equalsEpsilon(this.aspectRatio,e.aspectRatio,t,r)&&this._offCenterFrustum.equalsEpsilon(e._offCenterFrustum,t,r))};function q(e){p.Check.typeOf.object("options",e),p.Check.typeOf.object("options.frustum",e.frustum),p.Check.typeOf.object("options.origin",e.origin),p.Check.typeOf.object("options.orientation",e.orientation);var t,r,a=e.frustum,i=e.orientation,n=e.origin,o=b.defaultValue(e.vertexFormat,u.VertexFormat.DEFAULT),e=b.defaultValue(e._drawNearPlane,!0);a instanceof k?(t=0,r=k.packedLength):a instanceof D&&(t=1,r=D.packedLength),this._frustumType=t,this._frustum=a.clone(),this._origin=y.Cartesian3.clone(n),this._orientation=v.Quaternion.clone(i),this._drawNearPlane=e,this._vertexFormat=o,this._workerName="createFrustumGeometry",this.packedLength=2+r+y.Cartesian3.packedLength+v.Quaternion.packedLength+u.VertexFormat.packedLength}q.pack=function(e,t,r){p.Check.typeOf.object("value",e),p.Check.defined("array",t),r=b.defaultValue(r,0);var a=e._frustumType,i=e._frustum;return 0===(t[r++]=a)?(k.pack(i,t,r),r+=k.packedLength):(D.pack(i,t,r),r+=D.packedLength),y.Cartesian3.pack(e._origin,t,r),r+=y.Cartesian3.packedLength,v.Quaternion.pack(e._orientation,t,r),r+=v.Quaternion.packedLength,u.VertexFormat.pack(e._vertexFormat,t,r),t[r+=u.VertexFormat.packedLength]=e._drawNearPlane?1:0,t};var S=new k,T=new D,A=new v.Quaternion,I=new y.Cartesian3,B=new u.VertexFormat;function L(e,t,r,a,i,n,o,s){for(var f=e/3*2,u=0;u<4;++u)b.defined(t)&&(t[e]=n.x,t[e+1]=n.y,t[e+2]=n.z),b.defined(r)&&(r[e]=o.x,r[e+1]=o.y,r[e+2]=o.z),b.defined(a)&&(a[e]=s.x,a[e+1]=s.y,a[e+2]=s.z),e+=3;i[f]=0,i[1+f]=0,i[2+f]=1,i[3+f]=0,i[4+f]=1,i[5+f]=1,i[6+f]=0,i[7+f]=1}q.unpack=function(e,t,r){p.Check.defined("array",e),t=b.defaultValue(t,0);var a,i=e[t++];0===i?(a=k.unpack(e,t,S),t+=k.packedLength):(a=D.unpack(e,t,T),t+=D.packedLength);var n=y.Cartesian3.unpack(e,t,I);t+=y.Cartesian3.packedLength;var o=v.Quaternion.unpack(e,t,A);t+=v.Quaternion.packedLength;var s=u.VertexFormat.unpack(e,t,B),e=1===e[t+=u.VertexFormat.packedLength];if(!b.defined(r))return new q({frustum:a,origin:n,orientation:o,vertexFormat:s,_drawNearPlane:e});t=i===r._frustumType?r._frustum:void 0;return r._frustum=a.clone(t),r._frustumType=i,r._origin=y.Cartesian3.clone(n,r._origin),r._orientation=v.Quaternion.clone(o,r._orientation),r._vertexFormat=u.VertexFormat.clone(s,r._vertexFormat),r._drawNearPlane=e,r};var N=new v.Matrix3,j=new v.Matrix4,G=new v.Matrix4,U=new y.Cartesian3,Q=new y.Cartesian3,K=new y.Cartesian3,W=new y.Cartesian3,Y=new y.Cartesian3,H=new y.Cartesian3,J=new Array(3),X=new Array(4);X[0]=new v.Cartesian4(-1,-1,1,1),X[1]=new v.Cartesian4(1,-1,1,1),X[2]=new v.Cartesian4(1,1,1,1),X[3]=new v.Cartesian4(-1,1,1,1);for(var Z=new Array(4),t=0;t<4;++t)Z[t]=new v.Cartesian4;q._computeNearFarPlanes=function(e,t,r,a,i,n,o,s){var t=v.Matrix3.fromQuaternion(t,N),n=b.defaultValue(n,U),o=b.defaultValue(o,Q),f=b.defaultValue(s,K),n=v.Matrix3.getColumn(t,0,n),o=v.Matrix3.getColumn(t,1,o),f=v.Matrix3.getColumn(t,2,f);y.Cartesian3.normalize(n,n),y.Cartesian3.normalize(o,o),y.Cartesian3.normalize(f,f),y.Cartesian3.negate(n,n);var u,d,n=v.Matrix4.computeView(e,f,o,n,j);0===r?(r=a.projectionMatrix,r=v.Matrix4.multiply(r,n,G),d=v.Matrix4.inverse(r,G)):u=v.Matrix4.inverseTransformation(n,G),b.defined(d)?(J[0]=a.near,J[1]=a.far):(J[0]=0,J[1]=a.near,J[2]=a.far);for(var h=0;h<2;++h)for(var p=0;p<4;++p){var l,c,m=v.Cartesian4.clone(X[p],Z[p]);b.defined(d)?(l=1/(m=v.Matrix4.multiplyByVector(d,m,m)).w,y.Cartesian3.multiplyByScalar(m,l,m),y.Cartesian3.subtract(m,e,m),y.Cartesian3.normalize(m,m),c=y.Cartesian3.dot(f,m),y.Cartesian3.multiplyByScalar(m,J[h]/c,m),y.Cartesian3.add(m,e,m)):(b.defined(a._offCenterFrustum)&&(a=a._offCenterFrustum),l=J[h],c=J[h+1],m.x=.5*(m.x*(a.right-a.left)+a.left+a.right),m.y=.5*(m.y*(a.top-a.bottom)+a.bottom+a.top),m.z=.5*(m.z*(l-c)-l-c),m.w=1,v.Matrix4.multiplyByVector(u,m,m)),i[12*h+3*p]=m.x,i[12*h+3*p+1]=m.y,i[12*h+3*p+2]=m.z}},q.createGeometry=function(e){var t=e._frustumType,r=e._frustum,a=e._origin,i=e._orientation,n=e._drawNearPlane,o=e._vertexFormat,s=n?6:5,f=new Float64Array(72);q._computeNearFarPlanes(a,i,t,r,f);var u=24;f[u]=f[12],f[u+1]=f[13],f[u+2]=f[14],f[u+3]=f[0],f[u+4]=f[1],f[u+5]=f[2],f[u+6]=f[9],f[u+7]=f[10],f[u+8]=f[11],f[u+9]=f[21],f[u+10]=f[22],f[u+11]=f[23],f[u+=12]=f[15],f[u+1]=f[16],f[u+2]=f[17],f[u+3]=f[3],f[u+4]=f[4],f[u+5]=f[5],f[u+6]=f[0],f[u+7]=f[1],f[u+8]=f[2],f[u+9]=f[12],f[u+10]=f[13],f[u+11]=f[14],f[u+=12]=f[3],f[u+1]=f[4],f[u+2]=f[5],f[u+3]=f[15],f[u+4]=f[16],f[u+5]=f[17],f[u+6]=f[18],f[u+7]=f[19],f[u+8]=f[20],f[u+9]=f[6],f[u+10]=f[7],f[u+11]=f[8],f[u+=12]=f[6],f[u+1]=f[7],f[u+2]=f[8],f[u+3]=f[18],f[u+4]=f[19],f[u+5]=f[20],f[u+6]=f[21],f[u+7]=f[22],f[u+8]=f[23],f[u+9]=f[9],f[u+10]=f[10],f[u+11]=f[11],n||(f=f.subarray(12));var d,h,p,l,c=new E.GeometryAttributes({position:new x.GeometryAttribute({componentDatatype:g.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f})});(b.defined(o.normal)||b.defined(o.tangent)||b.defined(o.bitangent)||b.defined(o.st))&&(d=b.defined(o.normal)?new Float32Array(12*s):void 0,h=b.defined(o.tangent)?new Float32Array(12*s):void 0,p=b.defined(o.bitangent)?new Float32Array(12*s):void 0,l=b.defined(o.st)?new Float32Array(8*s):void 0,e=Q,a=K,t=y.Cartesian3.negate(i=U,W),r=y.Cartesian3.negate(e,Y),o=y.Cartesian3.negate(a,H),u=0,n&&(L(u,d,h,p,l,o,i,e),u+=12),L(u,d,h,p,l,a,t,e),L(u+=12,d,h,p,l,t,o,e),L(u+=12,d,h,p,l,r,o,t),L(u+=12,d,h,p,l,i,a,e),L(u+=12,d,h,p,l,e,a,t),b.defined(d)&&(c.normal=new x.GeometryAttribute({componentDatatype:g.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:d})),b.defined(h)&&(c.tangent=new x.GeometryAttribute({componentDatatype:g.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:h})),b.defined(p)&&(c.bitangent=new x.GeometryAttribute({componentDatatype:g.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:p})),b.defined(l)&&(c.st=new x.GeometryAttribute({componentDatatype:g.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:l})));for(var m=new Uint16Array(6*s),C=0;C<s;++C){var w=6*C,_=4*C;m[w]=_,m[1+w]=1+_,m[2+w]=2+_,m[3+w]=_,m[4+w]=2+_,m[5+w]=3+_}return new x.Geometry({attributes:c,indices:m,primitiveType:x.PrimitiveType.TRIANGLES,boundingSphere:v.BoundingSphere.fromVertices(f)})},e.FrustumGeometry=q,e.OrthographicFrustum=D,e.PerspectiveFrustum=k});
//# sourceMappingURL=FrustumGeometry-a3bda284.js.map