import{j as e}from"./iframe-Cu2r5DBt.js";import{useMDXComponents as n}from"./index-DsEnC-S2.js";import{I as r,F as s}from"./CommandsAndQueries-DfbTmmri.js";import{M as l,C as a}from"./blocks-DrEEcrJV.js";import"./Tag-BfeG-i6G.js";import"./index-DcYlZ6P4.js";import"./copy-D0JAZV9l.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BiMefP11.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCrFY3fH.js";import"./index-BlqIDgbk.js";import"./index-Os4Zeg9n.js";import"./Link-DyRt210A.js";import"./index-DiFMEeWS.js";import"./index-CMEHSo2E.js";import"./index-COwVlcqf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CO5icxsl.js";import"./addCustomCSSWithScoping-81SqKEKs.js";import"./index-DacMIu3h.js";import"./information-Bxm8KRwL.js";import"./sys-enter-2-f8dz7x8Q.js";import"./alert-848W8p-Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D76FbZtk.js";import"./delete-B-IsQiZR.js";import"./settings-CD2c-woD.js";import"./NoData-DTI18JF6.js";import"./IllustratedMessage-DX1YYOhS.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CmTEtjIx.js";import"./index-DoOj6a-I.js";import"./index-BfnkmY72.js";import"./slim-arrow-down-QBkKAVhi.js";import"./Input-D3OZDz2j.js";import"./ResponsivePopoverCommon.css-D6DQUrFO.js";import"./ValueStateMessage.css-DVAUVrF2.js";import"./Suggestions.css-D_7WvW8J.js";import"./ListBoxItemGroupTemplate-CAqv16Vd.js";import"./ComboBoxItemGroup-Bkl0glqF.js";import"./ListItemBaseTemplate-B36zIliD.js";import"./Token-czU1vG1J.js";import"./ScrollEnablement-bEoR-zYl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BjU2dKNl.js";import"./ToggleButton-K4-PXkOC.js";import"./SuggestionItem-DpYfRwX3.js";import"./index-Bc3rhNIn.js";import"./Option-ylN_TdkI.js";import"./index-9JKg4cbf.js";import"./SegmentedButton-CJfA1Mtn.js";import"./index-O_QxZdYN.js";import"./Select-DHUaUoMk.js";import"./InvisibleMessage-BUdS_g5o.js";import"./slim-arrow-down-BHYyEM1X.js";import"./index-l2pP1Xti.js";import"./index-t_6EW66R.js";import"./index-CoFRC52-.js";import"./index-DWSSjAYi.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bsoqp3td.js";import"./group-2-wbi_dpVE.js";import"./sort-descending-DNwrriud.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BajIgag2.js";import"./utils-Gj7QsPnx.js";import"./index-B-UkReOd.js";import"./index-_95c2mxo.js";import"./index-CeTtedVZ.js";import"./navigation-down-arrow-ofZN1zUz.js";import"./navigation-right-arrow-Dj5fUfjl.js";import"./navigation-right-arrow-BCtmnaF7.js";import"./useCurrentTheme-DNnBzfxG.js";import"./index-qksCzBH3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-l2Qw6S3S.js";import"./paper-plane-ArZYudnw.js";import"./index-C37vfn-j.js";import"./less-DAgDXDNb.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
