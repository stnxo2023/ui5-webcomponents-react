import{j as e}from"./iframe-D4Wcvdi9.js";import{useMDXComponents as n}from"./index-CyoSS2tn.js";import{I as r,F as s}from"./CommandsAndQueries-CHCF8nk5.js";import{M as l,C as a}from"./blocks-BZVDlLxv.js";import"./Tag-C8CPshPM.js";import"./index-C0Cp4coA.js";import"./copy-ByuSrISy.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DvH8YaNx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfU-6WHW.js";import"./index-DRGYhnMd.js";import"./index-BoPvUO7L.js";import"./Link-DRjrHvv7.js";import"./index-C0aU4sgS.js";import"./index-DyEesLqq.js";import"./index-B5YCmd_L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_EKP5sQ.js";import"./addCustomCSSWithScoping-B3blWPk3.js";import"./index-iYqBFHCz.js";import"./information-BV6B4i17.js";import"./sys-enter-2-Be3rvkTR.js";import"./alert-Bj2TJcB4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bg9NkTF8.js";import"./delete-Dan4xo-W.js";import"./settings-Dc0Ay2Ol.js";import"./NoData-CPHXEiea.js";import"./IllustratedMessage-CqSfiYLz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Cc_7hoVU.js";import"./index-hA8G-1F0.js";import"./index-umARLA2o.js";import"./slim-arrow-down-BQ4prS5H.js";import"./Input-Dw523AWA.js";import"./ResponsivePopoverCommon.css-DXXW23Pq.js";import"./ValueStateMessage.css-CGX3TujJ.js";import"./Suggestions.css-yWvjMCYt.js";import"./ListBoxItemGroupTemplate-BXg8ZZhL.js";import"./ComboBoxItemGroup-BWf21BRm.js";import"./ListItemBaseTemplate-BtxWLyBh.js";import"./Token-CJew2pIR.js";import"./ScrollEnablement-B_7Hn9ne.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7i9H2_f.js";import"./ToggleButton-tkY9KnFv.js";import"./SuggestionItem-C-IyQ9GM.js";import"./index-CalwvC2l.js";import"./Option-o--nSFBp.js";import"./index-B4qdjTS3.js";import"./SegmentedButton-Dlsij53P.js";import"./index-Bs-Aw581.js";import"./Select-G5EwzUhf.js";import"./InvisibleMessage-z6pIlI85.js";import"./slim-arrow-down-BwasBD_7.js";import"./index-CbPN-lRT.js";import"./index-DZDIO8XF.js";import"./index-BNR4hbu3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-AltxkYtY.js";import"./group-2-DCKEVdUW.js";import"./sort-descending-D6BynqyS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C_DH5grj.js";import"./utils-BSZp2_tG.js";import"./index-Ddv6G0qJ.js";import"./index-MsmJ52zV.js";import"./index-BLw-L2xS.js";import"./navigation-down-arrow-CiJ3nX35.js";import"./navigation-right-arrow-CZ9bddNc.js";import"./navigation-right-arrow-B9tYbly4.js";import"./useCurrentTheme-DZ5Dd1Oz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_IB42fC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-pRkoq2nx.js";import"./paper-plane-C5O9xOBt.js";import"./index-D9uEVirk.js";import"./less-Bgb69ICn.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
