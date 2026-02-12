import{j as e}from"./iframe-Hc0Jcm1H.js";import{useMDXComponents as n}from"./index-DuUU5AC1.js";import{I as r,F as s}from"./CommandsAndQueries-DaPP_-f6.js";import{M as l,C as a}from"./blocks-Blx2ursY.js";import"./Tag-DWcxngX2.js";import"./index-X6pjtL8_.js";import"./copy-BhskYI2N.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CSkHzbUH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQCUFERN.js";import"./index-BZHpmRs9.js";import"./index-BP8PtjoR.js";import"./Link-B4jgiGqN.js";import"./index-D4_s-XzL.js";import"./index-DixWMcP9.js";import"./index-YGVe_Lue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSgKpTfU.js";import"./addCustomCSSWithScoping-C31rwvDU.js";import"./index-CJBWc845.js";import"./information-MEaUQuQF.js";import"./sys-enter-2-Bor4HzlU.js";import"./alert-B5sjmhde.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUSpAEyp.js";import"./delete-B_UVOxI5.js";import"./settings-DoJo7PIR.js";import"./NoData-BtiqKpF_.js";import"./IllustratedMessage-7Q0rSxAX.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DY07_HAn.js";import"./index-C4-ueurv.js";import"./index-CVAhSMmh.js";import"./slim-arrow-down-CnQoJTna.js";import"./Input-jvbkedmk.js";import"./ResponsivePopoverCommon.css-BUymfbWg.js";import"./ValueStateMessage.css-DYbIayMA.js";import"./Suggestions.css-DAulSdYD.js";import"./ListBoxItemGroupTemplate-C3BPGY4S.js";import"./ComboBoxItemGroup-S4DHHq5B.js";import"./ListItemBaseTemplate-D1J42Smc.js";import"./Token-C_NNBIIw.js";import"./ScrollEnablement-DdNa3g_Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DI8nzW2J.js";import"./ToggleButton-Dqx5ood8.js";import"./SuggestionItem-BQwZmd1n.js";import"./index-B2zqQYOB.js";import"./Option-DYDjvvQF.js";import"./index-B-jLNkJI.js";import"./SegmentedButton-B6hVMkZG.js";import"./index-Cl268kCu.js";import"./Select-DcomDJKy.js";import"./InvisibleMessage-1eRkmfyK.js";import"./slim-arrow-down-DpK-rqPH.js";import"./index-BDvJxbiT.js";import"./index-D_cylvMd.js";import"./index-CtZBQQM2.js";import"./index-BF_BhXaP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D_PK0427.js";import"./group-2-CVFEbsNN.js";import"./sort-descending-DZXbPc0n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hjnENwQI.js";import"./utils-CMQMf6l5.js";import"./index-CP62UNNy.js";import"./index-C89QNOBV.js";import"./index-Dc4nb1AV.js";import"./navigation-down-arrow-Dgmp7r6E.js";import"./navigation-right-arrow-B3FKHK8J.js";import"./navigation-right-arrow-DBBKbyJD.js";import"./useCurrentTheme-D1RNYWH0.js";import"./index-3YVdwNdJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BnF71Q9x.js";import"./paper-plane-BEnc2lHw.js";import"./index-DJj6qKVN.js";import"./less-Bx2mAaAT.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
