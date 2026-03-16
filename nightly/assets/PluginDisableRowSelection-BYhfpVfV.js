import{j as e}from"./iframe-BFfiCRAQ.js";import{useMDXComponents as n}from"./index-CnIchwG9.js";import{I as r}from"./CommandsAndQueries-D2e25SQ4.js";import{M as s,C as l}from"./blocks-D8UGMoOU.js";import"./Tag-D5_wJnae.js";import"./index-BvMEXi75.js";import"./copy-CbWPHS6-.js";import{F as a}from"./Footer-3U2rULEI.js";import"./PageNotFound-CAIx-1qq.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Cju8RjRZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BzXMrnu2.js";import"./index-Arv69njm.js";import"./index-BEK-Ecqi.js";import"./index-CX51hblh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RE3-w7CJ.js";import"./addCustomCSSWithScoping-rUi9bOzC.js";import"./index-De1oz68R.js";import"./index-C_tePRTa.js";import"./index-BsyXKf0m.js";import"./information-mHfS5cWl.js";import"./sys-enter-2-BfeK50PI.js";import"./alert-DGgnTy1o.js";import"./index-stFY49PR.js";import"./Illustrations-DMZSmuvx.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DaxjLmz-.js";import"./delete-HE9f-xbA.js";import"./settings-nYLXQZ59.js";import"./NoData-D-G6iKM6.js";import"./NoFilterResults-DPpLw_XE.js";import"./index-DxmJnuS8.js";import"./IllustratedMessage-BUkhLd6d.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DpuJyxUQ.js";import"./Input-BSDYELEx.js";import"./ResponsivePopoverCommon.css-D4YzLUeU.js";import"./ValueStateMessage.css-CZS8cQna.js";import"./Suggestions.css-BRZ_skiF.js";import"./ListBoxItemGroupTemplate-B9xYubZz.js";import"./ComboBoxItemGroup-zb3CXtQM.js";import"./ListItemBaseTemplate-BM8be-0F.js";import"./Token-BROk1qEI.js";import"./ScrollEnablement-BWSWkQKK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xVznhyAm.js";import"./ToggleButton-QD-qILMO.js";import"./multiselect-all-BI6jGZO9.js";import"./SuggestionItem-D45_KCqM.js";import"./index-DxNz8cxh.js";import"./Option-nJWI7L3J.js";import"./index-Yf53TJNt.js";import"./SegmentedButton-C1RsLFa5.js";import"./index-CRSZng-3.js";import"./Select-Bn7-Juol.js";import"./InvisibleMessage-C0rjjrR1.js";import"./index-CnNyMgdN.js";import"./index-CGKXgT7t.js";import"./index-DtGyYGMv.js";import"./index-D4r21y2V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DeErRayA.js";import"./group-2-CcbLqHZL.js";import"./sort-descending-5U4Cc-Io.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-rwYIjJnj.js";import"./utils-B3YyPFzV.js";import"./index-dSthqGSi.js";import"./index-Dato8t9q.js";import"./index-BoRvqz2r.js";import"./navigation-down-arrow-ByE_fRjG.js";import"./navigation-right-arrow-Dn0VM6Bb.js";import"./navigation-right-arrow-Czbs9gPV.js";import"./useCurrentTheme-BiekrNKv.js";import"./index-CnomUQWd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C_1zrNbW.js";import"./paper-plane-S0TbXz67.js";import"./index-BFtFKw4r.js";import"./less-C3-m2tND.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
