import{j as e}from"./iframe-BSil-P7u.js";import{useMDXComponents as n}from"./index-vt-1HXZR.js";import{I as r,F as s}from"./CommandsAndQueries-D6srY1_t.js";import{M as l,C as a}from"./blocks-DAd1jcGX.js";import"./Tag-C9JFY3U3.js";import"./index-DHsON_5K.js";import"./copy-CwHd1VH0.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bxr1oTwn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FBl5xz3h.js";import"./index-TzMEaDq9.js";import"./index-CoIXLnKn.js";import"./Link-qL_T98pU.js";import"./index-DYtE3L5B.js";import"./index-BEx2FW11.js";import"./index-DzdENY0T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bp27VxQp.js";import"./addCustomCSSWithScoping-BLX4O9b7.js";import"./index-CM8rBgl_.js";import"./information-BmoL6a_m.js";import"./sys-enter-2-CRjOI67W.js";import"./alert-B93IgYs6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CoH36o8l.js";import"./delete-BI-937IP.js";import"./settings-CuEyn2tk.js";import"./NoData-CGFrF-GJ.js";import"./IllustratedMessage-bk9jckQm.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-DJ4x8n8R.js";import"./index-DM1cWKd-.js";import"./index-BAOnjwgh.js";import"./slim-arrow-down-CceGcM8g.js";import"./Input-Brq604ts.js";import"./ResponsivePopoverCommon.css-D6ugJ8J6.js";import"./ValueStateMessage.css-Bl9ehnfn.js";import"./Suggestions.css-DL5LMP4f.js";import"./ListBoxItemGroupTemplate-DTEnhQcP.js";import"./ComboBoxItemGroup-D278rfHD.js";import"./ListItemBaseTemplate-XePtjjIP.js";import"./Token-BjQ1h7zj.js";import"./ScrollEnablement-BseTvxzn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Co9OiWLE.js";import"./ToggleButton-CucfFvuo.js";import"./SuggestionItem-D-NzBmhj.js";import"./index-x2opHf5c.js";import"./Option-D_fhd8yQ.js";import"./index-0XEIKLHq.js";import"./SegmentedButton-CxPgyCvs.js";import"./index-B4ETCzn3.js";import"./Select-DIzgGRIh.js";import"./InvisibleMessage-8W7RFh9p.js";import"./slim-arrow-down-CEMmPYc4.js";import"./index-dpHfrh8L.js";import"./index-B81hxV8d.js";import"./index-BSCj-pol.js";import"./index-BxBIGX03.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDvkMb7O.js";import"./group-2-B3KKCYd6.js";import"./sort-descending-xaSeLobU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CwWYxgbu.js";import"./utils-BC-DJmvs.js";import"./index-BosJcweM.js";import"./index-BDjwx27j.js";import"./index-BBoe6R2N.js";import"./navigation-down-arrow-DZHe0qjz.js";import"./navigation-right-arrow-B-M3EsUK.js";import"./navigation-right-arrow-Caxsuv4H.js";import"./useCurrentTheme-BWoqnafC.js";import"./index-BbeYWMcG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B8wJR6kV.js";import"./paper-plane-CJEv3WjG.js";import"./index-CBHCu-XZ.js";import"./less-Cu4-mAFi.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
