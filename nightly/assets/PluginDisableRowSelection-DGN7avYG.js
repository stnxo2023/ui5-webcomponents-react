import{j as e}from"./iframe-DFi9UtKE.js";import{useMDXComponents as n}from"./index-PehDt-ON.js";import{I as r,F as s}from"./CommandsAndQueries-BgA_2y6P.js";import{M as l,C as a}from"./blocks-BZiPfi5R.js";import"./Tag-DyC770Wv.js";import"./index-DRo_4cI_.js";import"./copy-BtJq9lRd.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BH6xSE6g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlgbWjqC.js";import"./index-mz_qMVbD.js";import"./index-Bj7syw50.js";import"./Link-CKaRASof.js";import"./index-hjE9MH8j.js";import"./index-CgUZ8Jrz.js";import"./index-C91-M52B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-QdlayBuh.js";import"./addCustomCSSWithScoping-C-Twfd1m.js";import"./index-BVIBsTLM.js";import"./information-C2fQMAhn.js";import"./sys-enter-2-C-DHMglr.js";import"./alert-Do2a0hn1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGUruPrM.js";import"./delete-DnjgQmJs.js";import"./settings-tQnYQhED.js";import"./NoData-Cvn2BBQC.js";import"./IllustratedMessage-CWKDl7hN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CnHwZ3TE.js";import"./index-_Ri4cZaB.js";import"./index-BuaB4iYp.js";import"./slim-arrow-down-BnAZSFTD.js";import"./Input-CnIKzm01.js";import"./ResponsivePopoverCommon.css-CTa7xzuq.js";import"./ValueStateMessage.css-CK9Tsjr5.js";import"./Suggestions.css-CKUgORQE.js";import"./ListBoxItemGroupTemplate-CwYyaj2Y.js";import"./ComboBoxItemGroup-ap13ELrg.js";import"./ListItemBaseTemplate-DLVnCBxv.js";import"./Token-BvOFy9vC.js";import"./ScrollEnablement-CctDMVQ2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cocq2_my.js";import"./ToggleButton-B3acrASm.js";import"./SuggestionItem-BtRBHRZ3.js";import"./index-CzNkF4P7.js";import"./Option-CJrXuDru.js";import"./index-CgtODsdA.js";import"./SegmentedButton-C3Uwsy12.js";import"./index-CLrfWu0q.js";import"./Select-B3hk7S5M.js";import"./InvisibleMessage-Bx6P5Mxd.js";import"./slim-arrow-down-BaBVBPPF.js";import"./index-ClKsX4f6.js";import"./index-CnYJlaUy.js";import"./index-Bw-4XbFY.js";import"./index-Bl4FUUb0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ZLAIgZY3.js";import"./group-2-CfKb4jtJ.js";import"./sort-descending-BiejtERO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BKsuI6BF.js";import"./utils-ZPoy0Ic4.js";import"./index-CsP7hgLG.js";import"./index-Bl1zXw1e.js";import"./index-BTA4KG7R.js";import"./navigation-down-arrow-CqGMawe5.js";import"./navigation-right-arrow-BdCckcZj.js";import"./navigation-right-arrow-B3mRpH6q.js";import"./useCurrentTheme-DNJ4oWB7.js";import"./index-Bsk6bWqP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgMIeq-k.js";import"./paper-plane-D5b3pIt_.js";import"./index-DafdWF5y.js";import"./less-CCPciuoh.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
