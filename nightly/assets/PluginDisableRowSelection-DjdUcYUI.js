import{j as e}from"./iframe-BQw543fO.js";import{useMDXComponents as n}from"./index-BxhW0hRZ.js";import{I as r,F as s}from"./CommandsAndQueries-C4NyJWbb.js";import{M as l,C as a}from"./blocks-DVt0JaPi.js";import"./Tag-sELDi5ig.js";import"./index-DRKxBO9I.js";import"./copy-9tJvlpXS.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C2_U3nDd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2T-_GlF.js";import"./index-DlwOY2o8.js";import"./index-8hxRUREt.js";import"./Link-CGxFiH0u.js";import"./index-DqHN2E4G.js";import"./index-B74G-VBW.js";import"./index-B0V2Rdv7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUFLcfGV.js";import"./addCustomCSSWithScoping-JZmabDZV.js";import"./index-CButcFfg.js";import"./information-giMaU9kv.js";import"./sys-enter-2-8R25DHYh.js";import"./alert-DoRuAU1t.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CM2uzcB4.js";import"./delete-C24k1AlE.js";import"./settings-CGiD0aRJ.js";import"./NoData-DkFDQhZS.js";import"./IllustratedMessage-BHzFOR23.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BzR8x5cH.js";import"./index-C6Gx5LBV.js";import"./index-I9qS98gj.js";import"./slim-arrow-down-Y3VcW7MM.js";import"./Input-Dqe9_Cgh.js";import"./ResponsivePopoverCommon.css-BUtvUiTp.js";import"./ValueStateMessage.css-B4a25LJP.js";import"./Suggestions.css-CWOCvyz5.js";import"./ListBoxItemGroupTemplate-Cjp35C8X.js";import"./ComboBoxItemGroup-Y846uSl7.js";import"./ListItemBaseTemplate-BydcNEAt.js";import"./Token-zZiPj9PM.js";import"./ScrollEnablement-C3bXHz1R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Yv4CXx4-.js";import"./ToggleButton-BXvmSzD8.js";import"./SuggestionItem-C_wlXKJi.js";import"./index-DvR3wRKz.js";import"./Option-ezhIbOLI.js";import"./index-BWs4o4Dm.js";import"./SegmentedButton-CRv9M-40.js";import"./index-Cxe3oJI6.js";import"./Select-D4f1CrB5.js";import"./InvisibleMessage-DIaEl61G.js";import"./slim-arrow-down-6K51CIbd.js";import"./index-CzWzZBFG.js";import"./index-BCXvLyuV.js";import"./index-CVp7cd0k.js";import"./index-BbqsQoi1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-t5x_Oax_.js";import"./group-2-CsbviiZ6.js";import"./sort-descending-FFgYtEEy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbS6xyk7.js";import"./utils-B51JP7MS.js";import"./index-Cyxa-Lg1.js";import"./index-ePsAp63A.js";import"./index-DgaKDpsv.js";import"./navigation-down-arrow-D3N52Tck.js";import"./navigation-right-arrow-C56keY6-.js";import"./navigation-right-arrow-DtVrQ57T.js";import"./useCurrentTheme-NBNMJ8GX.js";import"./index-DPNHq_j6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1lcnCzB.js";import"./paper-plane-CY_k9ZwL.js";import"./index-ZJKQMD2K.js";import"./less-BFId0QYp.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
