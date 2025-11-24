import{j as e}from"./iframe-D7AtRUpE.js";import{useMDXComponents as n}from"./index-DRFX2LG8.js";import{I as r,F as s}from"./CommandsAndQueries-BtIPK2kL.js";import{M as l,C as a}from"./blocks-DtVmZnZe.js";import"./Tag-DZXgvHmp.js";import"./index-ehmuZHI1.js";import"./copy-BpQCF5oY.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C8-IDFGy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CCJ9pFYK.js";import"./index-BGkf-dJq.js";import"./index-Dd6OnJpC.js";import"./Link-DWIR53PW.js";import"./index-CjaPk49X.js";import"./index-CH_KzusP.js";import"./index-54VAs-Li.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RhrsIb0U.js";import"./addCustomCSSWithScoping-C2Eje0Og.js";import"./index-BWvZCzda.js";import"./information-D-fAW1gu.js";import"./sys-enter-2-DRPF_4qy.js";import"./alert-fnVpcWPE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BecdAPGm.js";import"./delete-BIPIzrZS.js";import"./settings-DmIbC4ht.js";import"./NoData-EkhAAOIw.js";import"./IllustratedMessage-BdbwIayy.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BlO2CkwR.js";import"./index-BxDxP0Wt.js";import"./index-zp7M-Hgb.js";import"./slim-arrow-down-DhUBKwq5.js";import"./Input-BNhpkyEe.js";import"./ResponsivePopoverCommon.css-C_ECllnd.js";import"./ValueStateMessage.css-AtrprVNc.js";import"./Suggestions.css-CrAZUaHe.js";import"./ListBoxItemGroupTemplate-DVPT-6e2.js";import"./ComboBoxItemGroup-JbQ_GC3z.js";import"./ListItemBaseTemplate-B8mCobtS.js";import"./Token-Bn9BgD8D.js";import"./ScrollEnablement-DFMfFOOU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dkffh3P6.js";import"./ToggleButton-CzxwP7cy.js";import"./SuggestionItem-BRpUqzth.js";import"./index-MmfJ-udd.js";import"./Option-GuUiDPkM.js";import"./index-CTMtFbt2.js";import"./SegmentedButton-CA3GNGc8.js";import"./index-Dfah0KCS.js";import"./Select-Uv1fBISx.js";import"./InvisibleMessage-BJQIWg2w.js";import"./slim-arrow-down-gQRYAOdn.js";import"./index-C8-WBKC9.js";import"./index-vY1U5G9O.js";import"./index-BViGaWYT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-gJxBGSRQ.js";import"./group-2-B6wj3ZWV.js";import"./sort-descending-JTCNKPca.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XI1WfX02.js";import"./utils-By-8NwbJ.js";import"./index-C0mqrK_u.js";import"./index-VhkSZqEG.js";import"./index-DyzGdEk8.js";import"./navigation-down-arrow-Cfi1KmUR.js";import"./navigation-right-arrow-CYpfcLCR.js";import"./navigation-right-arrow-Bhbe0IU9.js";import"./useCurrentTheme-a_GAr54p.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CGVcTX0I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ck-SQTsB.js";import"./paper-plane-QmuJkXHS.js";import"./index-DUFp6-MR.js";import"./less-CskDW-lD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
