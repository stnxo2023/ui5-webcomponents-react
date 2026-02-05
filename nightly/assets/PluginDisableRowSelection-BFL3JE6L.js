import{j as e}from"./iframe-u8FS7fYy.js";import{useMDXComponents as n}from"./index-C5mdpSHf.js";import{I as r,F as s}from"./CommandsAndQueries-q_IHoPaq.js";import{M as l,C as a}from"./blocks-CA6IPYk4.js";import"./Tag-DslDE0Bb.js";import"./index-feIb_zWP.js";import"./copy-DnscT9w9.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-G0EhQtQ2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dm5-M5Tp.js";import"./index-BLjc-MlZ.js";import"./index-Dt8N5TZZ.js";import"./Link-B1qI_6K5.js";import"./index-B2lRXwRR.js";import"./index-Ck97t6iE.js";import"./index-Cr0S2U_P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VZfInv7D.js";import"./addCustomCSSWithScoping-Bi-KBOqo.js";import"./index-39vhHnbo.js";import"./information-eayia0M9.js";import"./sys-enter-2-Bq8G42J8.js";import"./alert-C2jJRi0I.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-IUrgbwed.js";import"./delete-Cy6nStvu.js";import"./settings-CsmDkRWR.js";import"./NoData-Dl4cDDvc.js";import"./IllustratedMessage-DJn7OKbx.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-WNq2o82Q.js";import"./index-B8Yw7-ed.js";import"./index-DoELuHg5.js";import"./slim-arrow-down-BzdglbBq.js";import"./Input-BzkAXBhe.js";import"./ResponsivePopoverCommon.css-B6vVrffQ.js";import"./ValueStateMessage.css-Dzp1zAdp.js";import"./Suggestions.css-CAMRCZc2.js";import"./ListBoxItemGroupTemplate-Do83mcvC.js";import"./ComboBoxItemGroup-DHIXSohN.js";import"./ListItemBaseTemplate-Bwno4fVU.js";import"./Token-3SQMJSyT.js";import"./ScrollEnablement-DD98dGgr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BMXLX1H8.js";import"./ToggleButton-C6hKc49t.js";import"./SuggestionItem-DkOZoD1a.js";import"./index-BU3s_1Ip.js";import"./Option-BhGVz_yi.js";import"./index-DdIT0IEq.js";import"./SegmentedButton-FB1pLwEh.js";import"./index-BUE39DSG.js";import"./Select-DGVfvIxr.js";import"./InvisibleMessage-DkTNwmO6.js";import"./slim-arrow-down-BbWvK7SD.js";import"./index-CnuUXHea.js";import"./index-C_nlngWN.js";import"./index-D_yNDnhr.js";import"./index-DXUHUv71.js";import"./IconDesign-DXd8PPVF.js";import"./filter-yxN8PX9Y.js";import"./group-2-DoGrMQPN.js";import"./sort-descending-C5L9Lo2Z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DprFiL_z.js";import"./utils-BPFvLxt3.js";import"./index-DFCmj0mv.js";import"./index-DyfLxNJ7.js";import"./index-C4EDa0au.js";import"./navigation-down-arrow-BuZsOLrp.js";import"./navigation-right-arrow-CGDJY1aB.js";import"./navigation-right-arrow-GAvN6s_t.js";import"./useCurrentTheme-GbCKdsaA.js";import"./index-C5a3zBKu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmVGl_xM.js";import"./paper-plane-C4HjhJCN.js";import"./index-BeDOg-Ts.js";import"./less-m02jLT-2.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
