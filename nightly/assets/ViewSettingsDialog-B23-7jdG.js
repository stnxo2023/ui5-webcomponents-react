import{s as D,m as I,aA as b,w as _,j as e,e as l}from"./iframe-BsSawXP0.js";import{useMDXComponents as y}from"./index-DRH2teYu.js";import{M as C,C as V,a as v,D as c,A as d}from"./blocks-CXfuXrzt.js";import"./Tag-CNlUSOaG.js";import"./index-Dmc2-Gsy.js";import{C as F}from"./ControlsWithNote-DQTiYyBM.js";import{D as G}from"./DocsHeader-FBj4PZhc.js";import{F as N}from"./CommandsAndQueries-iaa-8XF0.js";import{S as M}from"./SubcomponentsSection-BVy4lpQe.js";import{C as f,D as g,S as x,F as j,a as w}from"./ViewSettingsDialog.stories-CezPzVsR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BFVQ2hiO.js";import"./sys-enter-2-BXLoixfD.js";import"./alert-KY-hq2Su.js";import"./index-BP2Csnbb.js";import"./index-Crhu2fjF.js";import"./Link-DnipqSX8.js";import"./copy-qa9YjcU8.js";import"./copy-DbiVl2cO.js";import"./GitHub-Mark-Bz_74SOX.js";import"./TableOfContent-Hx7KrrNg.js";import"./index-DXS7E1yl.js";import"./index-BhcqlC9n.js";import"./index-ZJs7Cg1o.js";import"./index-ButdZwwN.js";import"./index-CaYKw0vF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Czipwrtn.js";import"./addCustomCSSWithScoping-BEgtXhqx.js";import"./query-CzSBusdE.js";import"./InvisibleMessage-B4KGUE1s.js";import"./sort-C34lQagE.js";import"./filter-BanJ6C6c.js";import"./group-2-B-E_bDzf.js";import"./i18n-defaults-uALom2Bu.js";import"./SegmentedButton-gHDmBFsf.js";import"./ListItemStandard-DOvPo6gu.js";import"./parameters-bundle.css-CI_QlIDr.js";var h=function(o,t,i,p){var a=arguments.length,n=a<3?t:p===null?p=Object.getOwnPropertyDescriptor(t,i):p,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,i,p);else for(var u=o.length-1;u>=0;u--)(m=o[u])&&(n=(a<3?m(n):a>3?m(t,i,n):m(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let r=class extends b{constructor(){super(...arguments),this.selected=!1}};h([D()],r.prototype,"text",void 0);h([D({type:Boolean})],r.prototype,"selected",void 0);r=h([I("ui5-group-item")],r);r.define();const s=_("ui5-group-item",["text"],["selected"],[],[]);s.displayName="GroupItem";try{s.displayName="GroupItem",s.__docgenInfo={description:`The \`GroupItem\` component defines the grouping criteria for data in \`ViewSettingsDialog\`.
It represents a single group option that users can select to organize data into logical groups.

### Usage

The \`GroupItem\` is used within the \`ViewSettingsDialog\` to provide grouping options.
Each group item represents a column or field by which data can be grouped.



__Note:__ This is a UI5 Web Component! [GroupItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/GroupItem) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"GroupItem",props:{selected:{defaultValue:{value:"false"},description:"Defines if the group item is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the text of the group item.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function S(o){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...y(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(C,{of:f}),`
`,e.jsx(G,{of:f,since:"0.20.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(V,{of:g}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(F,{of:g}),`
`,e.jsx(t.h2,{id:"opening-viewsettingsdialog",children:"Opening ViewSettingsDialog"}),`
`,e.jsxs(t.p,{children:["You can open and close the ",e.jsx(t.code,{children:"ViewSettingsDialog"})," component in a declarative way using the ",e.jsx(t.code,{children:"open"})," prop."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const ViewSettingsDialogComponent = () => {
  const [showVSD, setShowVSD] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShowVSD(true);
        }}
      >
        Open ViewSettingsDialog
      </Button>
      <ViewSettingsDialog
        open={showVSD}
        onClose={() => {
          setShowVSD(false);
        }}
        sortItems={
          <>
            <SortItem text="Name" />
            <SortItem text="Position" />
            <SortItem text="Company" />
            <SortItem text="Department" />
          </>
        }
      />
    </>
  );
};
`})}),`
`,e.jsx(v,{children:M}),`
`,e.jsx(t.h2,{id:"sortitem",children:"SortItem"}),`
`,e.jsx(c,{of:x}),`
`,e.jsx(d,{exclude:l,of:x}),`
`,e.jsx(t.h2,{id:"filteritem",children:"FilterItem"}),`
`,e.jsx(c,{of:j}),`
`,e.jsx(d,{exclude:l,of:j}),`
`,e.jsx(t.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,e.jsx(c,{of:w}),`
`,e.jsx(d,{exclude:l,of:w}),`
`,e.jsx(t.h2,{id:"groupitem",children:"GroupItem"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Since v2.15.0"})}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(d,{exclude:l,of:s}),`
`,e.jsx(N,{})]})}function je(o={}){const{wrapper:t}={...y(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(S,{...o})}):S(o)}export{je as default};
