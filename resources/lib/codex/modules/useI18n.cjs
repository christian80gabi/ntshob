"use strict";const e=require("vue");function s(u,n,i=[]){const t=e.inject("CdxI18nFunction",void 0);return e.computed(()=>{const c=i.map(r=>typeof r=="function"?r():r.value),o=t==null?void 0:t(u,...c);return o!=null?o:typeof n=="function"?n(...c):n})}module.exports=s;
