import{j as e}from"./iframe-DNJyEiMc.js";import{useMDXComponents as n}from"./index-Buf0tSMZ.js";import{I as r}from"./CommandsAndQueries-Buhz4vLI.js";import{M as s,C as l}from"./blocks-Cd1leuxf.js";import"./Tag-D8I94QaD.js";import"./index-BGa7wgQo.js";import"./copy-DriogBoE.js";import{F as a}from"./Footer-DsUhWQr2.js";import"./PageNotFound-CGNJPiuA.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C53u1_Kf.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CHa9FW0P.js";import"./index-bWFHrqMY.js";import"./index-DcpLgbSq.js";import"./index-BNiXpovA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cm_sH4gX.js";import"./addCustomCSSWithScoping-QHxNEQro.js";import"./index-CRk1MYZt.js";import"./index-DfQ2RFhn.js";import"./index-C8jwJsjc.js";import"./information-CKmAqDt9.js";import"./sys-enter-2-D1jYlQdI.js";import"./alert-BbM4Afj3.js";import"./index-DbBWaCWe.js";import"./Illustrations-8c1koKlL.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LDPF3a89.js";import"./delete-cDZQdjVT.js";import"./settings-1s8BgQ_X.js";import"./NoData-WB6dabXf.js";import"./NoFilterResults-C5qt1K5x.js";import"./index-B8R9QwDI.js";import"./IllustratedMessage-DYh6wrAv.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BRVCdBaU.js";import"./Input-BwK_QO9m.js";import"./ResponsivePopoverCommon.css-DxGEQbl-.js";import"./ValueStateMessage.css-CgtkZrlq.js";import"./Suggestions.css-BOqaBsuR.js";import"./ListBoxItemGroupTemplate-CG0K-vjN.js";import"./ComboBoxItemGroup-AEcqyCPy.js";import"./ListItemBaseTemplate-BaNeY2LZ.js";import"./Token-mARndugh.js";import"./ScrollEnablement-gz1VS6rK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-yQaKLV68.js";import"./ToggleButton-Dq2kuoFa.js";import"./multiselect-all-BO8qqm2c.js";import"./SuggestionItem-JF6p_ddH.js";import"./index-B1-VZ-EY.js";import"./Option-DgY580TS.js";import"./index-CKPijgn-.js";import"./SegmentedButton-BIM0H3kM.js";import"./index-8XBAuycd.js";import"./Select-Ck3oYLRD.js";import"./InvisibleMessage-BoXj5AU1.js";import"./index-DqeRRPs0.js";import"./index-BPOoRnkM.js";import"./index-BiBEuW4q.js";import"./index-C4LD5Tmv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DpOwQjR3.js";import"./group-2-DsaYD9Xx.js";import"./sort-descending-24nWTAR8.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHlBOYOF.js";import"./utils-Byp4P8ND.js";import"./index-7feJEYJZ.js";import"./index-DjOPjAc9.js";import"./index-D-ZU151A.js";import"./navigation-down-arrow-DxMMwmKX.js";import"./navigation-right-arrow-33R7yPM9.js";import"./navigation-right-arrow-e5CJ7iL-.js";import"./useCurrentTheme-Qx4N1zdR.js";import"./index-CwHknFYt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Di8TIgI9.js";import"./paper-plane--oliTSv-.js";import"./index-CS9CmAAh.js";import"./less-CbU3wJ7O.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(l,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
