import{j as e}from"./iframe-DqhX_Hdp.js";import{useMDXComponents as n}from"./index-B-LlaBAd.js";import{I as r,F as s}from"./CommandsAndQueries-Ctn2WqFW.js";import{M as l,C as a}from"./blocks-BTKPnx40.js";import"./Tag-t-9sbcO3.js";import"./index-eBm8t70p.js";import"./copy-BkBAOPVd.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DrWG1jWH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BeJ9wz7o.js";import"./index-DCixdKQP.js";import"./index-BJOWTBa5.js";import"./Link-KAeBCRn4.js";import"./index-CZfYA9Jl.js";import"./index-D2G6pSj4.js";import"./index-CqRqJjYx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Duf1worp.js";import"./addCustomCSSWithScoping-BTNZ7_2D.js";import"./index-CuoIUeLC.js";import"./information-DBUGylnd.js";import"./sys-enter-2-CQyTlO0m.js";import"./alert-OnHFbpl_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BpMc5M9M.js";import"./delete-C7JHot2N.js";import"./settings-SKzIyHSS.js";import"./NoData-CX7evjUT.js";import"./IllustratedMessage-CqLVEv_t.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DAqM8TO4.js";import"./index-BzlXpFoZ.js";import"./index-BtdQUBMJ.js";import"./slim-arrow-down-B4S7UH3-.js";import"./Input-Bip1JtLT.js";import"./ResponsivePopoverCommon.css-B62B-Zvc.js";import"./ValueStateMessage.css-D02law6b.js";import"./Suggestions.css-CSoreWx6.js";import"./ListBoxItemGroupTemplate-DHoLoT8x.js";import"./ComboBoxItemGroup-C5WDhKir.js";import"./ListItemBaseTemplate-OClf921P.js";import"./Token-BLU09JyB.js";import"./ScrollEnablement-B9Jmoik0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7vVDnmd.js";import"./ToggleButton-D53MHrW_.js";import"./SuggestionItem-BeURI2s8.js";import"./index-C9P_P9K4.js";import"./Option-CHApBvDG.js";import"./index-DAJXbvOW.js";import"./SegmentedButton-DeqHvB3C.js";import"./index-BCK2EVsS.js";import"./Select-Be7QzEWT.js";import"./InvisibleMessage-Bdbv9Ef9.js";import"./slim-arrow-down-CarTb4uE.js";import"./index-BIu9-7Rg.js";import"./index-BCh3t8Up.js";import"./index-DxAT9tTr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CtE2b9bq.js";import"./group-2-eAJtoAsZ.js";import"./sort-descending-Cx0p3NMy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DDEoRTFB.js";import"./utils-BSyH8VJa.js";import"./index-BkR8Kcfn.js";import"./index-CfGNWRnm.js";import"./index-DNTS6-c1.js";import"./navigation-down-arrow-ahG-gz6o.js";import"./navigation-right-arrow-A7nXgQLK.js";import"./navigation-right-arrow-C6E29xwI.js";import"./useCurrentTheme-gRxjNOgY.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D-Tz76DO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DHOA1SXn.js";import"./paper-plane-Bzfws6My.js";import"./index-DrsUiW4k.js";import"./less-CCPik5WH.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{sourceState:"none",of:m}),`
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
`,e.jsx(s,{})]})}function Xe(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
