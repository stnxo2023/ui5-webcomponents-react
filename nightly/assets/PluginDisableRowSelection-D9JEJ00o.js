import{j as e}from"./iframe-Bqqr6LRd.js";import{useMDXComponents as n}from"./index-Br4hcxKx.js";import{I as r,F as s}from"./CommandsAndQueries-18MjfAFY.js";import{M as l,C as a}from"./blocks-Cu3AJo0i.js";import"./Tag-CwbUvZ-m.js";import"./index-B04Rzf_f.js";import"./copy-Bhrou6qI.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-vtE8StoO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Eu6KN1OU.js";import"./index-DkY4sX_i.js";import"./index-B4-rpm-y.js";import"./Link-1XxvN6x_.js";import"./index-uP3qKYkO.js";import"./index-CFiaIaQb.js";import"./index-BFr0IkwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_soG_jSZ.js";import"./addCustomCSSWithScoping-DM5M0hyQ.js";import"./index-JLAmYdlt.js";import"./information-BWf6xVI-.js";import"./sys-enter-2-NBiqC5e1.js";import"./alert-eITYjrPF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B7kkSgms.js";import"./delete-FfRmnN9Y.js";import"./settings-DlvvQWHj.js";import"./NoData-Cnw4Kevx.js";import"./IllustratedMessage-lIXFssI-.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CLTUfrTe.js";import"./index-BNj-eJpZ.js";import"./index-3uq2_G_9.js";import"./slim-arrow-down-BZm47vFp.js";import"./Input-vcWbAoGp.js";import"./ResponsivePopoverCommon.css-DVi9wNNs.js";import"./ValueStateMessage.css-DbIMxrdT.js";import"./Suggestions.css-Co8vDkCG.js";import"./ListBoxItemGroupTemplate-uy6aJTW5.js";import"./ComboBoxItemGroup-BTvCb2Kc.js";import"./ListItemBaseTemplate-blGXO2lB.js";import"./Token-Bae9FhVJ.js";import"./ScrollEnablement-Cxy5Bzo0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Hnm9afMy.js";import"./ToggleButton-BgVCtHZJ.js";import"./SuggestionItem-D9DXt2U6.js";import"./index-ByYfrQl-.js";import"./Option-DOx9ZJ94.js";import"./index-DVPlV14N.js";import"./SegmentedButton-Bh--EjsV.js";import"./index-DtQZgkhi.js";import"./Select-BdSnKAc1.js";import"./InvisibleMessage-Bp5Ok78e.js";import"./slim-arrow-down-DZ6p3Bwi.js";import"./index-C4tZRj-d.js";import"./index-CwgCLf6W.js";import"./index-CJC3e2m0.js";import"./index-RQz2GPrc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwEOts-V.js";import"./group-2-CDRA2oju.js";import"./sort-descending-CUlou7JN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bVqMVufC.js";import"./utils-BMPv-A8F.js";import"./index-BgEIZIwU.js";import"./index-CKnDUyrg.js";import"./index-DCQPDRVf.js";import"./navigation-down-arrow-CxlZv9_c.js";import"./navigation-right-arrow-Wb7vj7-O.js";import"./navigation-right-arrow-83NG2uzj.js";import"./useCurrentTheme-dPM8OGfa.js";import"./index-DMlsPBCZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-5BH4o7Dk.js";import"./paper-plane-Abb2eC1B.js";import"./index-BeQjUBuP.js";import"./less-DEcTl8Yh.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
