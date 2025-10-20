import{j as e}from"./iframe-D7LtZGbE.js";import{useMDXComponents as n}from"./index-DPe-hK9n.js";import{I as r,F as s}from"./CommandsAndQueries-16gk4cWC.js";import{M as l,C as a}from"./blocks-pr2PodND.js";import"./Tag-CAGvJLHq.js";import"./index-8IYrQOsB.js";import"./copy-irE93QLw.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B9VjvtYg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTJj7zal.js";import"./index-CQrPSC4r.js";import"./index-DCDoujQt.js";import"./Link-DR-Yc_uT.js";import"./index-D9f7QWgZ.js";import"./index-7y0cv8s8.js";import"./index-B5kVVFk8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0rw92sk.js";import"./addCustomCSSWithScoping-Q6oWMzUs.js";import"./index-nlmJusRV.js";import"./information-DGR9jLKW.js";import"./sys-enter-2-pukk9ibo.js";import"./alert-ltuZ9R-x.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C2wuCET-.js";import"./delete-BsnXpo15.js";import"./settings-18EA03mw.js";import"./NoData-DD1I2RW2.js";import"./IllustratedMessage-GNJtNDK1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DbgaenG_.js";import"./index-Cvm9n84J.js";import"./index-CONzwepJ.js";import"./slim-arrow-down-CSg5EB5A.js";import"./Input-smzufGTw.js";import"./ResponsivePopoverCommon.css-BuYzr302.js";import"./ValueStateMessage.css-B17FpIm5.js";import"./Suggestions.css-D7t7e06T.js";import"./ListBoxItemGroupTemplate-D6TYIJcU.js";import"./ComboBoxItemGroup-DVpFxRma.js";import"./ListItemBaseTemplate-DPI4cuqZ.js";import"./Token-DsqCbMj8.js";import"./ScrollEnablement-BHoJsn2l.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJhw0qF_.js";import"./ToggleButton-c8Z5hSFG.js";import"./SuggestionItem-Ccdg184n.js";import"./index-CyQ4JYW2.js";import"./Option-DijjA4Vk.js";import"./index-DtP90_Pc.js";import"./SegmentedButton-6lreoM-F.js";import"./index-DvCsGyO6.js";import"./Select-BbkKcK4f.js";import"./InvisibleMessage-Cv3DnnE8.js";import"./slim-arrow-down-CRqqmTAd.js";import"./index-DWNwOieW.js";import"./index-Ce0fYx_h.js";import"./index-DOsdkp8m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcZJAP96.js";import"./group-2-MIHTxi8_.js";import"./sort-descending-BXMcQwtn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1VTd4aoY.js";import"./utils-aOFiSUxD.js";import"./index-Q9bXyf1m.js";import"./index-BpcjvSLQ.js";import"./index-B66V5vGh.js";import"./navigation-down-arrow-CJtYN5Co.js";import"./navigation-right-arrow-IFUe67pQ.js";import"./navigation-right-arrow-LlpQSEVq.js";import"./useCurrentTheme-D1sCc5b1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DZFiI2KH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BMbyDpGC.js";import"./paper-plane-C_ZVdgGb.js";import"./index-CdvQl7dB.js";import"./less-DCpc4-xW.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
