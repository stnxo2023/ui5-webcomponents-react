import{j as e}from"./iframe-bPNgMO5h.js";import{useMDXComponents as n}from"./index-C4j4ILCK.js";import{I as r}from"./CommandsAndQueries-CzGU51jX.js";import{M as s,C as l}from"./blocks-DApk4By0.js";import"./Tag-eZA227UP.js";import"./index-CuRLQ5dh.js";import"./copy-DSB5O1lX.js";import{F as a}from"./Footer-Bh2hTs_t.js";import"./PageNotFound-Dw8P7BXA.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DjvL60Qy.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-ZXYeKMWB.js";import"./index-4UioHVXW.js";import"./index-CcoeKc2Y.js";import"./index-CjQWdaPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbYGGim3.js";import"./addCustomCSSWithScoping-BM8ISZdO.js";import"./index-QMND5HNb.js";import"./index-5px67lZR.js";import"./index-mw4j7xrs.js";import"./information-C2d19MHy.js";import"./sys-enter-2-D4Z01vRG.js";import"./alert-Ct4GAPph.js";import"./index-D8vCUd0L.js";import"./Illustrations--EfuNW2c.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bp92srSy.js";import"./delete-CZaWvsw2.js";import"./settings-yWmyjAh_.js";import"./NoData-tuasnKt_.js";import"./NoFilterResults-DJYt6ITG.js";import"./index-DfjjeQhE.js";import"./IllustratedMessage-D45xyK5E.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Bug9Y4_C.js";import"./Input--k2fVCdQ.js";import"./ResponsivePopoverCommon.css-C9m2n_WO.js";import"./ValueStateMessage.css-5RYJguS7.js";import"./Suggestions.css-kgVEttjd.js";import"./ListBoxItemGroupTemplate-D17nKtUN.js";import"./ComboBoxItemGroup-DtEK8K2r.js";import"./ListItemBaseTemplate-DOCzUHDT.js";import"./Token-DK_BK7Xd.js";import"./ScrollEnablement-0saldGDB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DqDMg7f9.js";import"./ToggleButton-oLAt7dS0.js";import"./multiselect-all-DOxz8ncZ.js";import"./SuggestionItem-DATbDIak.js";import"./index-DwTOmRJC.js";import"./Option-DjwKEC0h.js";import"./index-C9e7sFCK.js";import"./SegmentedButton-Dw3GdGu8.js";import"./index-C8DOH3y9.js";import"./Select-DqepO6nd.js";import"./InvisibleMessage-CiSDUG8R.js";import"./index-C43v6hU6.js";import"./index-ve0FQzF0.js";import"./index-SeTeuHTC.js";import"./index-CCfS2xdR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BpeMjZpa.js";import"./group-2-DKJR9cs7.js";import"./sort-descending-DvmMzoJz.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D2nJf9Zv.js";import"./utils-BldSJTDV.js";import"./index-CIZr7faC.js";import"./index-D_m5mtxi.js";import"./index-yfJAvgK-.js";import"./navigation-down-arrow-B9_zRrcu.js";import"./navigation-right-arrow-Dj2eD2zH.js";import"./navigation-right-arrow-sjpm_efd.js";import"./useCurrentTheme-jpUiEjmR.js";import"./index-C_ntH17V.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DkBNoMcS.js";import"./paper-plane-CvTWiV4j.js";import"./index-CPV1ISqE.js";import"./less-Dh8-HrfA.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
