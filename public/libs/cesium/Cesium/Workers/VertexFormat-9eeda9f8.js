define(["exports","./when-208fe5b0","./Check-5e798bbf"],function(e,o,i){"use strict";function r(e){e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT),this.position=o.defaultValue(e.position,!1),this.normal=o.defaultValue(e.normal,!1),this.st=o.defaultValue(e.st,!1),this.bitangent=o.defaultValue(e.bitangent,!1),this.tangent=o.defaultValue(e.tangent,!1),this.color=o.defaultValue(e.color,!1)}r.POSITION_ONLY=Object.freeze(new r({position:!0})),r.POSITION_AND_NORMAL=Object.freeze(new r({position:!0,normal:!0})),r.POSITION_NORMAL_AND_ST=Object.freeze(new r({position:!0,normal:!0,st:!0})),r.POSITION_AND_ST=Object.freeze(new r({position:!0,st:!0})),r.POSITION_AND_COLOR=Object.freeze(new r({position:!0,color:!0})),r.ALL=Object.freeze(new r({position:!0,normal:!0,st:!0,tangent:!0,bitangent:!0})),r.DEFAULT=r.POSITION_NORMAL_AND_ST,r.packedLength=6,r.pack=function(e,t,n){if(!o.defined(e))throw new i.DeveloperError("value is required");if(!o.defined(t))throw new i.DeveloperError("array is required");return n=o.defaultValue(n,0),t[n++]=e.position?1:0,t[n++]=e.normal?1:0,t[n++]=e.st?1:0,t[n++]=e.tangent?1:0,t[n++]=e.bitangent?1:0,t[n]=e.color?1:0,t},r.unpack=function(e,t,n){if(!o.defined(e))throw new i.DeveloperError("array is required");return t=o.defaultValue(t,0),(n=!o.defined(n)?new r:n).position=1===e[t++],n.normal=1===e[t++],n.st=1===e[t++],n.tangent=1===e[t++],n.bitangent=1===e[t++],n.color=1===e[t],n},r.clone=function(e,t){if(o.defined(e))return(t=!o.defined(t)?new r:t).position=e.position,t.normal=e.normal,t.st=e.st,t.tangent=e.tangent,t.bitangent=e.bitangent,t.color=e.color,t},e.VertexFormat=r});
//# sourceMappingURL=VertexFormat-9eeda9f8.js.map