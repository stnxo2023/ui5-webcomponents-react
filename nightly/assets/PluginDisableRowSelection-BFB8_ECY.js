import{j as e}from"./iframe-D9-3X0JI.js";import{useMDXComponents as n}from"./index-dMdAMZT7.js";import{I as r,F as s}from"./CommandsAndQueries-Cnpdrmv-.js";import{M as l,C as a}from"./blocks-BYKnuPZj.js";import"./Tag-rAEScKNS.js";import"./index-DwPMNEU4.js";import"./copy-B87NDbR1.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BFQ_A00u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B0kTLMxV.js";import"./index-Bo2p0dAu.js";import"./index-BC71hX7l.js";import"./Link-B5zjhOqH.js";import"./index-DhzIoMaL.js";import"./index-j1saZdO-.js";import"./index-CxPR9JIx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DORD8sYf.js";import"./addCustomCSSWithScoping-CDB2w5BM.js";import"./index-BjUikPJy.js";import"./information-e-gqJ6X6.js";import"./sys-enter-2-BhYBtaW9.js";import"./alert-XeF5lKFk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DHZG-a9h.js";import"./delete-Cqn9h0fS.js";import"./settings-D0TIiCOY.js";import"./NoData-h_3BPE3I.js";import"./IllustratedMessage-DrYfSsmV.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BQhnxhD2.js";import"./index-BnP9b9Ky.js";import"./index-lEFQSdUo.js";import"./slim-arrow-down-B8HgmHUP.js";import"./Input-DADAhjMq.js";import"./ResponsivePopoverCommon.css-CWBdwhTg.js";import"./ValueStateMessage.css-BQV-lfyq.js";import"./Suggestions.css-RW7Qb5Rw.js";import"./ListBoxItemGroupTemplate-95aXC4Zd.js";import"./ComboBoxItemGroup-BmvBFBsQ.js";import"./ListItemBaseTemplate-CeEtHuiX.js";import"./Token-D4ouf1p4.js";import"./ScrollEnablement-C4sfEIZB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhetoAjI.js";import"./ToggleButton-Cf16CjNh.js";import"./SuggestionItem-BznSOywU.js";import"./index-a8oDzDPg.js";import"./Option-DuBZhqYX.js";import"./index-CS7_81Z1.js";import"./SegmentedButton-CrnUIMou.js";import"./index-BaqGrvUy.js";import"./Select-jAoE6kcO.js";import"./InvisibleMessage-B78hZJHf.js";import"./slim-arrow-down-DRw17b4-.js";import"./index-PO4-y7XB.js";import"./index-BwtfdfmC.js";import"./index-C3d2BxPO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DzvCSHnC.js";import"./group-2-DG9Xxc_K.js";import"./sort-descending-DQD9wlqN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DakTmcy-.js";import"./utils-CCWGeWj_.js";import"./index-lNoXPje7.js";import"./index-B5sC3CbN.js";import"./index-CoAbgxwH.js";import"./navigation-down-arrow-BCk2Xe8o.js";import"./navigation-right-arrow-BcVav5TW.js";import"./navigation-right-arrow-DiWFJr_y.js";import"./useCurrentTheme-r_mdZh15.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DMLJfOS0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bu1wdE8w.js";import"./paper-plane-CSjFaLDV.js";import"./index-C6Aqw5an.js";import"./less-BQc0aqcX.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
