import{j as e}from"./iframe-28qsVqoa.js";import{useMDXComponents as n}from"./index-BFNvmwXu.js";import{I as r,F as s}from"./CommandsAndQueries-BfKaGYgk.js";import{M as l,C as a}from"./blocks-BNVDqSKu.js";import"./Tag-CLPhNAjj.js";import"./index-SsxmriuV.js";import"./copy-D8k23l_a.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Cg1NtmUY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BaQxmIN-.js";import"./index-QZ0q645F.js";import"./index-CWduGffo.js";import"./Link-DXcAF61b.js";import"./index-BSTD78ro.js";import"./index-Ca0DqgDv.js";import"./index-DL1oyV4a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDZLmGFA.js";import"./addCustomCSSWithScoping-BQde53eT.js";import"./index-CLPTUIfm.js";import"./information-DHvzqwV5.js";import"./sys-enter-2-BKUUSCT4.js";import"./alert-D4ecQurj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-COPcPnn5.js";import"./delete-D6n8l8UK.js";import"./settings-KfG2DgI0.js";import"./NoData-BHcK-Aul.js";import"./IllustratedMessage-CGHyK5ha.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BFsCnHXw.js";import"./index-CK3Laxke.js";import"./index-CxlikhWp.js";import"./slim-arrow-down-2lG3bKMG.js";import"./Input-CrBqW3Ot.js";import"./ResponsivePopoverCommon.css-DsOR_HfQ.js";import"./ValueStateMessage.css-Dvyiq9XB.js";import"./Suggestions.css-CdBr9Iyq.js";import"./ListBoxItemGroupTemplate-D6s9h6mp.js";import"./ComboBoxItemGroup-BSE1TSV-.js";import"./ListItemBaseTemplate-DQ-a9maQ.js";import"./Token-Bg0__rMF.js";import"./ScrollEnablement-D20yGFFj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BH9JzmU2.js";import"./ToggleButton-DnstKIPi.js";import"./SuggestionItem-BYGj_peP.js";import"./index-C5RB-L2O.js";import"./Option-CBaHN4ua.js";import"./index-DTixF4LF.js";import"./SegmentedButton-BE8yfTm6.js";import"./index-CQtjld3i.js";import"./Select-CdXPeKkl.js";import"./InvisibleMessage-c9pOv6Ax.js";import"./slim-arrow-down-nj_KPop2.js";import"./index-Ak3FL7pI.js";import"./index-D9_Z31ZG.js";import"./index-Bq1PEsv_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Ch2Rtr4k.js";import"./group-2-Ca0UP8Bj.js";import"./sort-descending-D3OEeGWP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CD3TL1kj.js";import"./utils-DHg3ikqn.js";import"./index-CC-MGg2L.js";import"./index-CjppD4GJ.js";import"./index-BzTqkFjE.js";import"./navigation-down-arrow-DwBdfM0k.js";import"./navigation-right-arrow-CasD3Mbg.js";import"./navigation-right-arrow-FCQDrhAi.js";import"./useCurrentTheme-67g0YI4J.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFx0BUYp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B2mIAyDi.js";import"./paper-plane-CpCfXY5u.js";import"./index-CGLvNCn3.js";import"./less-4GZTBVpK.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
