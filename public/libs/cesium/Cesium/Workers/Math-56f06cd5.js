define(["exports","./Check-5e798bbf","./when-208fe5b0"],function(e,o,a){"use strict";function r(e){null==e&&(e=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,this.init_genrand(e)}r.prototype.init_genrand=function(e){for(this.mt[0]=e>>>0,this.mti=1;this.mti<this.N;this.mti++){e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(1812433253*((4294901760&e)>>>16)<<16)+1812433253*(65535&e)+this.mti,this.mt[this.mti]>>>=0}},r.prototype.genrand_int32=function(){var e,r,t=new Array(0,this.MATRIX_A);if(this.mti>=this.N){for(this.mti==this.N+1&&this.init_genrand(5489),r=0;r<this.N-this.M;r++)e=this.mt[r]&this.UPPER_MASK|this.mt[r+1]&this.LOWER_MASK,this.mt[r]=this.mt[r+this.M]^e>>>1^t[1&e];for(;r<this.N-1;r++)e=this.mt[r]&this.UPPER_MASK|this.mt[r+1]&this.LOWER_MASK,this.mt[r]=this.mt[r+(this.M-this.N)]^e>>>1^t[1&e];e=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^e>>>1^t[1&e],this.mti=0}return e=this.mt[this.mti++],e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,(e^=e>>>18)>>>0},r.prototype.random=function(){return this.genrand_int32()*(1/4294967296)};var u={EPSILON1:.1,EPSILON2:.01,EPSILON3:.001,EPSILON4:1e-4,EPSILON5:1e-5,EPSILON6:1e-6,EPSILON7:1e-7,EPSILON8:1e-8,EPSILON9:1e-9,EPSILON10:1e-10,EPSILON11:1e-11,EPSILON12:1e-12,EPSILON13:1e-13,EPSILON14:1e-14,EPSILON15:1e-15,EPSILON16:1e-16,EPSILON17:1e-17,EPSILON18:1e-18,EPSILON19:1e-19,EPSILON20:1e-20,EPSILON21:1e-21,GRAVITATIONALPARAMETER:3986004418e5,SOLAR_RADIUS:6955e5,LUNAR_RADIUS:1737400,SIXTY_FOUR_KILOBYTES:65536,FOUR_GIGABYTES:4294967296};u.sign=a.defaultValue(Math.sign,function(e){return 0===(e=+e)||e!=e?e:0<e?1:-1}),u.signNotZero=function(e){return e<0?-1:1},u.toSNorm=function(e,r){return r=a.defaultValue(r,255),Math.round((.5*u.clamp(e,-1,1)+.5)*r)},u.fromSNorm=function(e,r){return r=a.defaultValue(r,255),u.clamp(e,0,r)/r*2-1},u.normalize=function(e,r,t){return 0===(t=Math.max(t-r,0))?0:u.clamp((e-r)/t,0,1)},u.sinh=a.defaultValue(Math.sinh,function(e){return(Math.exp(e)-Math.exp(-e))/2}),u.cosh=a.defaultValue(Math.cosh,function(e){return(Math.exp(e)+Math.exp(-e))/2}),u.lerp=function(e,r,t){return(1-t)*e+t*r},u.PI=Math.PI,u.ONE_OVER_PI=1/Math.PI,u.PI_OVER_TWO=Math.PI/2,u.PI_OVER_THREE=Math.PI/3,u.PI_OVER_FOUR=Math.PI/4,u.PI_OVER_SIX=Math.PI/6,u.THREE_PI_OVER_TWO=3*Math.PI/2,u.TWO_PI=2*Math.PI,u.ONE_OVER_TWO_PI=1/(2*Math.PI),u.RADIANS_PER_DEGREE=Math.PI/180,u.DEGREES_PER_RADIAN=180/Math.PI,u.RADIANS_PER_ARCSECOND=u.RADIANS_PER_DEGREE/3600,u.toRadians=function(e){if(!a.defined(e))throw new o.DeveloperError("degrees is required.");return e*u.RADIANS_PER_DEGREE},u.toDegrees=function(e){if(!a.defined(e))throw new o.DeveloperError("radians is required.");return e*u.DEGREES_PER_RADIAN},u.convertLongitudeRange=function(e){if(!a.defined(e))throw new o.DeveloperError("angle is required.");var r=u.TWO_PI,e=e-Math.floor(e/r)*r;return e<-Math.PI?e+r:e>=Math.PI?e-r:e},u.clampToLatitudeRange=function(e){if(!a.defined(e))throw new o.DeveloperError("angle is required.");return u.clamp(e,-1*u.PI_OVER_TWO,u.PI_OVER_TWO)},u.negativePiToPi=function(e){if(!a.defined(e))throw new o.DeveloperError("angle is required.");return e>=-u.PI&&e<=u.PI?e:u.zeroToTwoPi(e+u.PI)-u.PI},u.zeroToTwoPi=function(e){if(!a.defined(e))throw new o.DeveloperError("angle is required.");if(0<=e&&e<=u.TWO_PI)return e;var r=u.mod(e,u.TWO_PI);return Math.abs(r)<u.EPSILON14&&Math.abs(e)>u.EPSILON14?u.TWO_PI:r},u.mod=function(e,r){if(!a.defined(e))throw new o.DeveloperError("m is required.");if(!a.defined(r))throw new o.DeveloperError("n is required.");if(0===r)throw new o.DeveloperError("divisor cannot be 0.");return u.sign(e)===u.sign(r)&&Math.abs(e)<Math.abs(r)?e:(e%r+r)%r},u.equalsEpsilon=function(e,r,t,i){if(!a.defined(e))throw new o.DeveloperError("left is required.");if(!a.defined(r))throw new o.DeveloperError("right is required.");t=a.defaultValue(t,0),i=a.defaultValue(i,t);var n=Math.abs(e-r);return n<=i||n<=t*Math.max(Math.abs(e),Math.abs(r))},u.lessThan=function(e,r,t){if(!a.defined(e))throw new o.DeveloperError("first is required.");if(!a.defined(r))throw new o.DeveloperError("second is required.");if(!a.defined(t))throw new o.DeveloperError("absoluteEpsilon is required.");return e-r<-t},u.lessThanOrEquals=function(e,r,t){if(!a.defined(e))throw new o.DeveloperError("first is required.");if(!a.defined(r))throw new o.DeveloperError("second is required.");if(!a.defined(t))throw new o.DeveloperError("absoluteEpsilon is required.");return e-r<t},u.greaterThan=function(e,r,t){if(!a.defined(e))throw new o.DeveloperError("first is required.");if(!a.defined(r))throw new o.DeveloperError("second is required.");if(!a.defined(t))throw new o.DeveloperError("absoluteEpsilon is required.");return t<e-r},u.greaterThanOrEquals=function(e,r,t){if(!a.defined(e))throw new o.DeveloperError("first is required.");if(!a.defined(r))throw new o.DeveloperError("second is required.");if(!a.defined(t))throw new o.DeveloperError("absoluteEpsilon is required.");return-t<e-r};var h=[1];u.factorial=function(e){if("number"!=typeof e||e<0)throw new o.DeveloperError("A number greater than or equal to 0 is required.");var r=h.length;if(r<=e)for(var t=h[r-1],i=r;i<=e;i++){var n=t*i;h.push(n),t=n}return h[e]},u.incrementWrap=function(e,r,t){if(t=a.defaultValue(t,0),!a.defined(e))throw new o.DeveloperError("n is required.");if(r<=t)throw new o.DeveloperError("maximumValue must be greater than minimumValue.");return e=r<++e?t:e},u.isPowerOfTwo=function(e){if("number"!=typeof e||e<0||4294967295<e)throw new o.DeveloperError("A number between 0 and (2^32)-1 is required.");return 0!==e&&0==(e&e-1)},u.nextPowerOfTwo=function(e){if("number"!=typeof e||e<0||2147483648<e)throw new o.DeveloperError("A number between 0 and 2^31 is required.");return--e,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,++e},u.previousPowerOfTwo=function(e){if("number"!=typeof e||e<0||4294967295<e)throw new o.DeveloperError("A number between 0 and (2^32)-1 is required.");return e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e=((e|=e>>32)>>>0)-(e>>>1)},u.clamp=function(e,r,t){if(!a.defined(e))throw new o.DeveloperError("value is required");if(!a.defined(r))throw new o.DeveloperError("min is required.");if(!a.defined(t))throw new o.DeveloperError("max is required.");return e<r?r:t<e?t:e};var t=new r;u.setRandomNumberSeed=function(e){if(!a.defined(e))throw new o.DeveloperError("seed is required.");t=new r(e)},u.nextRandomNumber=function(){return t.random()},u.randomBetween=function(e,r){return u.nextRandomNumber()*(r-e)+e},u.acosClamped=function(e){if(!a.defined(e))throw new o.DeveloperError("value is required.");return Math.acos(u.clamp(e,-1,1))},u.asinClamped=function(e){if(!a.defined(e))throw new o.DeveloperError("value is required.");return Math.asin(u.clamp(e,-1,1))},u.chordLength=function(e,r){if(!a.defined(e))throw new o.DeveloperError("angle is required.");if(!a.defined(r))throw new o.DeveloperError("radius is required.");return 2*r*Math.sin(.5*e)},u.logBase=function(e,r){if(!a.defined(e))throw new o.DeveloperError("number is required.");if(!a.defined(r))throw new o.DeveloperError("base is required.");return Math.log(e)/Math.log(r)},u.cbrt=a.defaultValue(Math.cbrt,function(e){var r=Math.pow(Math.abs(e),1/3);return e<0?-r:r}),u.log2=a.defaultValue(Math.log2,function(e){return Math.log(e)*Math.LOG2E}),u.fog=function(e,r){r*=e;return 1-Math.exp(-r*r)},u.fastApproximateAtan=function(e){return o.Check.typeOf.number("x",e),e*(-.1784*Math.abs(e)-.0663*e*e+1.0301)},u.fastApproximateAtan2=function(e,r){o.Check.typeOf.number("x",e),o.Check.typeOf.number("y",r);var t=Math.abs(e),i=Math.abs(r),n=Math.max(t,i),n=Math.min(t,i)/n;if(isNaN(n))throw new o.DeveloperError("either x or y must be nonzero");return t=u.fastApproximateAtan(n),t=Math.abs(r)>Math.abs(e)?u.PI_OVER_TWO-t:t,t=e<0?u.PI-t:t,t=r<0?-t:t},e.CesiumMath=u});
//# sourceMappingURL=Math-56f06cd5.js.map
