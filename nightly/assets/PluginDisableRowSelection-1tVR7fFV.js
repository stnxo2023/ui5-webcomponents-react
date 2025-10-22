import{j as e}from"./iframe-aKs2ZWAj.js";import{useMDXComponents as n}from"./index-c4zJYkcR.js";import{I as r,F as s}from"./CommandsAndQueries-IBiFSZr-.js";import{M as l,C as a}from"./blocks-fvCr5kp9.js";import"./Tag-DSoVP5MU.js";import"./index-CMRRcr14.js";import"./copy-D9idsxI8.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BaQwIBgF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNGZMnOS.js";import"./index-9dBzyYap.js";import"./index-Bj8ei7PO.js";import"./Link--ytwK8Iw.js";import"./index-ChXUbPo1.js";import"./index-B_N5JODd.js";import"./index-MuWvZ7Ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1lURHaG.js";import"./addCustomCSSWithScoping--I2WhUfl.js";import"./index-Dqo0aPAB.js";import"./information-CcxaAVSU.js";import"./sys-enter-2-DseuEdAf.js";import"./alert-DbU8Ao5u.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CxMI9gU-.js";import"./delete-BtFgIOxP.js";import"./settings-ZFHQhdsu.js";import"./NoData-DZS9Ur76.js";import"./IllustratedMessage-qSdTMbb_.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-B6-4gdXH.js";import"./index-CmhJUl_b.js";import"./index-DepEoVTO.js";import"./slim-arrow-down-Dxd3QVtv.js";import"./Input-C4wOVg4W.js";import"./ResponsivePopoverCommon.css-Dn8ntY67.js";import"./ValueStateMessage.css-BbNN49z9.js";import"./Suggestions.css-CJQWNtEa.js";import"./ListBoxItemGroupTemplate-BlE3pbv5.js";import"./ComboBoxItemGroup-tqMfhz0v.js";import"./ListItemBaseTemplate-CtNEmA22.js";import"./Token-B4ffJEtp.js";import"./ScrollEnablement-loPYCCzg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xWRY6uoX.js";import"./ToggleButton-CGCRf2qx.js";import"./SuggestionItem-C0HWDl10.js";import"./index-CUVmuYtL.js";import"./Option-78QXYTZI.js";import"./index-DwEarF4u.js";import"./SegmentedButton-Dcqh0APM.js";import"./index-DA1062Kq.js";import"./Select-D7DdaJ-R.js";import"./InvisibleMessage-DezkuNLo.js";import"./slim-arrow-down-BlGxKe2j.js";import"./index-CBIaN5fI.js";import"./index-DnUR33pO.js";import"./index-Czu_4IUB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-rWMtqLgy.js";import"./group-2-CHhi29YF.js";import"./sort-descending-DHA1WIN6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLYrF4yE.js";import"./utils-B1uKdKfv.js";import"./index-3SWcYaJq.js";import"./index-B60Izm_h.js";import"./index-BFnuOW-D.js";import"./navigation-down-arrow-Cb1XkKbC.js";import"./navigation-right-arrow-CqaFjLeM.js";import"./navigation-right-arrow-Byp8Xbsp.js";import"./useCurrentTheme-RkZvjCi7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CjjC7c0Q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C1moqd-D.js";import"./paper-plane-CJQ7U-vp.js";import"./index-DQpXYUsU.js";import"./less-tAUMA1iF.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
