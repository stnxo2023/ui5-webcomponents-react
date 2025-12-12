import{j as e}from"./iframe-5Ai_0qn6.js";import{useMDXComponents as n}from"./index-B7f66Dmz.js";import{I as r,F as s}from"./CommandsAndQueries-JQTwJq8J.js";import{M as l,C as a}from"./blocks-B56i3DPI.js";import"./Tag-COMV1q97.js";import"./index-DmI0q2i9.js";import"./copy-DNLRE2WL.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Cly1OFy0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ce1oa-YM.js";import"./index-q1btkUh6.js";import"./index-BRDhzPf9.js";import"./Link-D--4KGaX.js";import"./index-B-uO6_4g.js";import"./index-D661wfa7.js";import"./index-Bq31yNzK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COAGvdy_.js";import"./addCustomCSSWithScoping-DYNqCkls.js";import"./index-BkdUYSuU.js";import"./information-D04M7OHu.js";import"./sys-enter-2-1BgXqzpT.js";import"./alert-BhFUrxxf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DptVgLxH.js";import"./delete-BKhqWRT0.js";import"./settings-C7ek-hnD.js";import"./NoData-wohXKQfm.js";import"./IllustratedMessage-CPRROUzO.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DbUMx87M.js";import"./index-CWkjXrf_.js";import"./index-DZC-KX_7.js";import"./slim-arrow-down-CVsfCMuZ.js";import"./Input-irwstt8P.js";import"./ResponsivePopoverCommon.css-C3FRXGqL.js";import"./ValueStateMessage.css-CE7fKOnd.js";import"./Suggestions.css-Dq5Dns8R.js";import"./ListBoxItemGroupTemplate-DBU-Amvn.js";import"./ComboBoxItemGroup-Bq4VJjC4.js";import"./ListItemBaseTemplate-D2M6voVm.js";import"./Token-PzQXz8IW.js";import"./ScrollEnablement-BpTg3nyv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BzBCEa9G.js";import"./ToggleButton-ietgb841.js";import"./SuggestionItem-DlAE1lsO.js";import"./index-DEaM6HA1.js";import"./Option-9p-hiMpG.js";import"./index-br9mqeEo.js";import"./SegmentedButton-AE0tpI52.js";import"./index-BFBqEJBM.js";import"./Select-DeIsnLIh.js";import"./InvisibleMessage-CmGdQZT2.js";import"./slim-arrow-down-ZE4Gr-dz.js";import"./index-B-aNjF0L.js";import"./index-CoK8JjT_.js";import"./index-O_J6wUes.js";import"./index-Cyt6o_O8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BpA9S_eu.js";import"./group-2-DpjVfqgj.js";import"./sort-descending-BGJJks9P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bx98osqc.js";import"./utils-BOfVxA4M.js";import"./index-Cb8kvc5z.js";import"./index-S4uAEFIo.js";import"./index-DwAuXlyS.js";import"./navigation-down-arrow-DfJbyOqR.js";import"./navigation-right-arrow-B-Vhmt5L.js";import"./navigation-right-arrow-D1zxr9Vh.js";import"./useCurrentTheme-DiluXBTF.js";import"./index-CcKvpDiG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0oo9ftu.js";import"./paper-plane-C_f61Wz0.js";import"./index-Dae_Omsb.js";import"./less-fRAvhj5N.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
