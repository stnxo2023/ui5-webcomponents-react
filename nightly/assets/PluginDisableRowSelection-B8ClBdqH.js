import{j as e}from"./iframe-DtedCjfy.js";import{useMDXComponents as n}from"./index-CHHTCtpJ.js";import{I as r,F as s}from"./CommandsAndQueries-CefMw8Tu.js";import{M as l,C as a}from"./blocks-B76JpcnK.js";import"./Tag-UovGhxml.js";import"./index-DKt9EK6E.js";import"./copy-YvtV-MwK.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DaFgOxon.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DX3eFopX.js";import"./index-DeLaWQId.js";import"./index-B_rkL0I7.js";import"./Link-DZXvuASQ.js";import"./index-CYjF7K0n.js";import"./index-BwT8h001.js";import"./index-CSzpUMpn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDJ7Ajcv.js";import"./addCustomCSSWithScoping-ClguXaul.js";import"./index-Np4eK1ew.js";import"./information-Dgg1zzf6.js";import"./sys-enter-2-BS_wAjUh.js";import"./alert-DCJXRL-H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYN8eos6.js";import"./delete-C1Wyhlth.js";import"./settings-CptqO7gs.js";import"./NoData-F4hYh7Ek.js";import"./IllustratedMessage-C5F6SUC6.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BJoCUYm7.js";import"./index-s9vdjwfk.js";import"./index-D10KU1Ta.js";import"./slim-arrow-down-B5bCreHk.js";import"./Input-Dl-5sLwa.js";import"./ResponsivePopoverCommon.css-82X5LMAI.js";import"./ValueStateMessage.css-BmfTYgl7.js";import"./Suggestions.css-D0hxhwDs.js";import"./ListBoxItemGroupTemplate-DVxNdcM2.js";import"./ComboBoxItemGroup-DLcad7ol.js";import"./ListItemBaseTemplate-vodsce4v.js";import"./Token-dHSL_sqK.js";import"./ScrollEnablement-CJ3-LAJa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BKpRxXOc.js";import"./ToggleButton-D-pV1m-u.js";import"./SuggestionItem-DNzNqXr6.js";import"./index-CX53ZjFD.js";import"./Option-1uoBZugc.js";import"./index-CPryGVXA.js";import"./SegmentedButton-aUT_BGJH.js";import"./index-DOcX0ZLa.js";import"./Select-Dv5jHc6p.js";import"./InvisibleMessage-CMofOcZ8.js";import"./slim-arrow-down-DO0xZWHM.js";import"./index-DgAPvGu_.js";import"./index-BTiCeD2_.js";import"./index-ymNZsoic.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cm-ygou4.js";import"./group-2-DGbAk6nr.js";import"./sort-descending-C2Qum4wS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Doqujavl.js";import"./utils-C_iBhdzJ.js";import"./index--q_AhH3V.js";import"./index-DWer0OoI.js";import"./index-DR8LVVUU.js";import"./navigation-down-arrow-DjGJNutR.js";import"./navigation-right-arrow-CXzg5gO0.js";import"./navigation-right-arrow-C4yN2OeR.js";import"./useCurrentTheme-B3YW7Vit.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CAokvEvK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BGj6VAfy.js";import"./paper-plane-tyKPIBAt.js";import"./index-C0v4tUQf.js";import"./less-CM7xB0tS.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
