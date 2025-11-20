import{j as e}from"./iframe-HT1spLTi.js";import{useMDXComponents as n}from"./index-DBCrLany.js";import{I as r,F as s}from"./CommandsAndQueries-BbzR7uR6.js";import{M as l,C as a}from"./blocks-BHdc3k3Z.js";import"./Tag-D0fQ6cD9.js";import"./index-QNmDooaX.js";import"./copy-CRfxWZGx.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-iUJ8V_z6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZj-Nofr.js";import"./index-gqzRfHPw.js";import"./index-CWHtqZOi.js";import"./Link-dxeMesAc.js";import"./index-ILnTo0yK.js";import"./index-CNJfOrlA.js";import"./index-CV40RAYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tr8O9Dg_.js";import"./addCustomCSSWithScoping-DOmP-F21.js";import"./index-BXPXbeEl.js";import"./information-BYNrnqUc.js";import"./sys-enter-2-D7etVCyM.js";import"./alert-D38Y2b3l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DwM3SLbd.js";import"./delete-B4h0y0b6.js";import"./settings-OrML4UsD.js";import"./NoData-BOiGAXx7.js";import"./IllustratedMessage-CIWXNurR.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DJEc1V4G.js";import"./index-CDNfdMib.js";import"./index-BooXjxoU.js";import"./slim-arrow-down-D7gKmzcO.js";import"./Input-CG3jepqS.js";import"./ResponsivePopoverCommon.css-DumVabDv.js";import"./ValueStateMessage.css-Dec25e9Z.js";import"./Suggestions.css-B7Xe6SyY.js";import"./ListBoxItemGroupTemplate-DLkL2x3G.js";import"./ComboBoxItemGroup-BKuEkjmd.js";import"./ListItemBaseTemplate-BJduEMQT.js";import"./Token-CJWVjFqm.js";import"./ScrollEnablement-COl_OArp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B0rWPz1n.js";import"./ToggleButton-bT-nmWTF.js";import"./SuggestionItem-DlRh-CU9.js";import"./index-CAapkdBY.js";import"./Option-BJPjR69C.js";import"./index-DW6SW4K6.js";import"./SegmentedButton-BvcAggKa.js";import"./index-Bthc5YEN.js";import"./Select-yvOIU7AH.js";import"./InvisibleMessage-K2bP2Bc6.js";import"./slim-arrow-down-hfwx64af.js";import"./index-D8DCAi2g.js";import"./index-Bjt-sPUz.js";import"./index-DfU0YBTN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-r_rnPDRk.js";import"./group-2-DtVNA77I.js";import"./sort-descending-DgqXD-Zl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpK1GvE-.js";import"./utils-BnqKx2k1.js";import"./index-D0O_r2Gf.js";import"./index-Cb097oS5.js";import"./index-BXOm-GNk.js";import"./navigation-down-arrow-DIWWzNLp.js";import"./navigation-right-arrow-FOKc4XUb.js";import"./navigation-right-arrow-BpHafmpc.js";import"./useCurrentTheme-CmCSQj3_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-0CLxpaxv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-lcSwUg68.js";import"./paper-plane-B1Mwkky7.js";import"./index-JqGFdXCE.js";import"./less-Di54MHdD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
