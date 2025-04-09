"use strict";const t=require("vue"),h=require("./CdxLabel.cjs"),k=require("./useLabelChecker.js"),C=require("./useModelWrapper.cjs"),r=require("./useGeneratedId.cjs"),y=require("./useFieldData.cjs"),u=require("./constants.js"),v=require("./_plugin-vue_export-helper.js"),$=u.makeStringTypeValidator(u.ValidationStatusTypes),V=t.defineComponent({name:"CdxCheckbox",components:{CdxLabel:h},props:{modelValue:{type:[Boolean,Array],default:!1},inputValue:{type:[String,Number,Boolean],default:!1},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},hideLabel:{type:Boolean,default:!1},status:{type:String,default:"default",validator:$}},emits:["update:modelValue"],setup(e,{emit:o,slots:s,attrs:l}){var c;k.useLabelChecker((c=s.default)==null?void 0:c.call(s),l,"CdxCheckbox");const{computedDisabled:i,computedStatus:a}=y(t.toRef(e,"disabled"),t.toRef(e,"status")),n=t.computed(()=>({"cdx-checkbox--inline":e.inline,["cdx-checkbox--status-".concat(a.value)]:!0})),d=t.computed(()=>({"cdx-checkbox__custom-input--inline":e.inline})),p=t.ref(),m=r("checkbox"),b=r("description"),f=C(t.toRef(e,"modelValue"),o);return{rootClasses:n,computedDisabled:i,input:p,checkboxId:m,descriptionId:b,wrappedModel:f,customInputClasses:d}}}),x={class:"cdx-checkbox__wrapper"},B=["id","aria-describedby","value","name","disabled",".indeterminate"],S=t.createElementVNode("span",{class:"cdx-checkbox__icon"},null,-1);function g(e,o,s,l,i,a){const n=t.resolveComponent("cdx-label");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["cdx-checkbox",e.rootClasses])},[t.createElementVNode("div",x,[t.withDirectives(t.createElementVNode("input",{id:e.checkboxId,ref:"input","onUpdate:modelValue":o[0]||(o[0]=d=>e.wrappedModel=d),class:"cdx-checkbox__input",type:"checkbox","aria-describedby":e.$slots.description&&e.$slots.description().length>0?e.descriptionId:void 0,value:e.inputValue,name:e.name,disabled:e.computedDisabled,".indeterminate":e.indeterminate},null,40,B),[[t.vModelCheckbox,e.wrappedModel]]),S,e.$slots.default&&e.$slots.default().length?(t.openBlock(),t.createBlock(n,{key:0,class:"cdx-checkbox__label","input-id":e.checkboxId,"description-id":e.$slots.description&&e.$slots.description().length>0?e.descriptionId:void 0,disabled:e.computedDisabled,"visually-hidden":e.hideLabel},t.createSlots({default:t.withCtx(()=>[t.renderSlot(e.$slots,"default")]),_:2},[e.$slots.description&&e.$slots.description().length>0?{name:"description",fn:t.withCtx(()=>[t.renderSlot(e.$slots,"description")]),key:"0"}:void 0]),1032,["input-id","description-id","disabled","visually-hidden"])):t.createCommentVNode("v-if",!0)]),e.$slots["custom-input"]?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(["cdx-checkbox__custom-input",e.customInputClasses])},[t.renderSlot(e.$slots,"custom-input")],2)):t.createCommentVNode("v-if",!0)],2)}const I=v._export_sfc(V,[["render",g]]);module.exports=I;
