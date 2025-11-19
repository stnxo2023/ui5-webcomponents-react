import{j as e}from"./iframe-DjfYWB_-.js";import{useMDXComponents as n}from"./index-CNEMb-s-.js";import{I as r,F as s}from"./CommandsAndQueries-BsOJw-5f.js";import{M as l,C as a}from"./blocks-nmBdCmu5.js";import"./Tag-BYbOAHsQ.js";import"./index-Cv9LJBlx.js";import"./copy-DOQqskn1.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bx8L5gGw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cwo-vKel.js";import"./index-B3I7HtBx.js";import"./index-CkJ-GMHH.js";import"./Link-CGcb-hqt.js";import"./index-3-iEB97a.js";import"./index-Blql2ABB.js";import"./index-B4phfj74.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6waVzUY.js";import"./addCustomCSSWithScoping-Bm9f8w42.js";import"./index-CPQFexs4.js";import"./information-6Bx96viV.js";import"./sys-enter-2-Dkjyf6Zz.js";import"./alert-Cr4CwR6P.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dg2EcDm-.js";import"./delete-Dn4VRsBO.js";import"./settings-Bqn2drvn.js";import"./NoData-BrXPHqk9.js";import"./IllustratedMessage-bJRZPLTh.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Bij97oPM.js";import"./index-CGkDrGvP.js";import"./index-BvLI0S8J.js";import"./slim-arrow-down-swQTdSNw.js";import"./Input-CJfaU7cK.js";import"./ResponsivePopoverCommon.css-DpaN_G4_.js";import"./ValueStateMessage.css-DaYi5Bjt.js";import"./Suggestions.css-CNISWm9D.js";import"./ListBoxItemGroupTemplate-BQ40pZer.js";import"./ComboBoxItemGroup-o1GMSWgz.js";import"./ListItemBaseTemplate-DNfVXr3f.js";import"./Token-D9FthG2R.js";import"./ScrollEnablement-B4FaEPu4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkthL8Bg.js";import"./ToggleButton-DPum5vk_.js";import"./SuggestionItem-CF8875wi.js";import"./index-BRPIgwS4.js";import"./Option-3-roLoVF.js";import"./index-Bs2a6dx4.js";import"./SegmentedButton-B7RnWeGJ.js";import"./index-CpZsNdqM.js";import"./Select-CpnB3P08.js";import"./InvisibleMessage-BuBF9yqs.js";import"./slim-arrow-down-DNZp2sIO.js";import"./index-BZ-x6-Bx.js";import"./index-BFkrGCCz.js";import"./index-B_HRORUp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DD4TJf9R.js";import"./group-2-ARDd1dPZ.js";import"./sort-descending-Bm1JystE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7WbgYwtx.js";import"./utils-B_rTI3PV.js";import"./index-0H0qN1a3.js";import"./index-k3f5SVhd.js";import"./index-B-bcUYN5.js";import"./navigation-down-arrow-BXADmo6h.js";import"./navigation-right-arrow-K_bO6q0G.js";import"./navigation-right-arrow-Bg66dsed.js";import"./useCurrentTheme-C9aR5EtN.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B14eBFuc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DoJ7z7ik.js";import"./paper-plane-KU6AFQvR.js";import"./index-BB7Dlsa8.js";import"./less-BADhD7u_.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
