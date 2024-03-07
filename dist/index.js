/*! kreda v0.1.0 | (c) 2024 Comandeer | MIT license (see LICENSE) */
import{styleText as e}from"node:util";class o extends Function{modifiers=[]}var n=function n(t){const r=new o;return r.modifiers=t,new Proxy(r,{get:(e,o)=>n([...t,o]),apply:(o,n,t)=>function(o,...n){let t=n.join(" ");for(const n of o.toReversed())t=e(n,t);return t}(o.modifiers,...t)})}([]);export{n as default};
//# sourceMappingURL=index.js.map
