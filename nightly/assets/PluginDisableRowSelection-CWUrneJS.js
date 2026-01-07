import{j as e}from"./iframe-Bx5nPEOl.js";import{useMDXComponents as n}from"./index-xw1HgrxR.js";import{I as r,F as s}from"./CommandsAndQueries-DQbk5l2-.js";import{M as l,C as a}from"./blocks-BnfvreJd.js";import"./Tag-Czmfabca.js";import"./index-DySSVXhZ.js";import"./copy-CNcXjyuB.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CrixVdQ8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJ7q1nh3.js";import"./index-CHjTsZ6I.js";import"./index-DkrrTKjv.js";import"./Link-kOQVQryb.js";import"./index-DAgUYXjE.js";import"./index-EX-yWEKJ.js";import"./index-Bwj8Rahv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hIxCZ-4.js";import"./addCustomCSSWithScoping-BnQjkpis.js";import"./index-D030oFb6.js";import"./information-C_BRWXUj.js";import"./sys-enter-2-lnnKHtcu.js";import"./alert-CZSvHkOp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BwNoBN7k.js";import"./delete-DojygiWC.js";import"./settings-CdO75LQa.js";import"./NoData-BxLSGnmz.js";import"./IllustratedMessage-CznMqB69.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BIAQtnD-.js";import"./index-DV1-UqSW.js";import"./index-CpsQPo3e.js";import"./slim-arrow-down-eJKhvhkE.js";import"./Input-CxXLCf6q.js";import"./ResponsivePopoverCommon.css-CalmLiVM.js";import"./ValueStateMessage.css-BZ1EUbwN.js";import"./Suggestions.css-DQV6aIGz.js";import"./ListBoxItemGroupTemplate-VNyv00pZ.js";import"./ComboBoxItemGroup-jUyYtSAM.js";import"./ListItemBaseTemplate-Dykvp_EK.js";import"./Token-DhwxhKpj.js";import"./ScrollEnablement-DNpNAWna.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zfIyxVpK.js";import"./ToggleButton-CQ5gk1wa.js";import"./SuggestionItem-CcFTbcr2.js";import"./index-MISqvFi7.js";import"./Option-DPppUzFK.js";import"./index-BfR1hjK_.js";import"./SegmentedButton-3fKGQQxX.js";import"./index-C4WckVVh.js";import"./Select-C1QLPr_H.js";import"./InvisibleMessage-CQ0u2q5u.js";import"./slim-arrow-down-CAhFqhr1.js";import"./index-FDm07H3e.js";import"./index-djmxjVZM.js";import"./index-8AWyZMWh.js";import"./index-AroNelzF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cozu-6eK.js";import"./group-2-o5ZUKu4E.js";import"./sort-descending-BldoBMrB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6ekE9Pr.js";import"./utils-D64FTNul.js";import"./index-DBe8VqoY.js";import"./index-BK8Wq19O.js";import"./index-Cp2_alMF.js";import"./navigation-down-arrow-CRFET8c4.js";import"./navigation-right-arrow-BmtWA2-q.js";import"./navigation-right-arrow-JKoD_tiK.js";import"./useCurrentTheme-BTp0qmA6.js";import"./index-CiSPkYgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wht3LnSl.js";import"./paper-plane-C5y4Nddn.js";import"./index-DH3g5PUN.js";import"./less-BXKa_8RC.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
