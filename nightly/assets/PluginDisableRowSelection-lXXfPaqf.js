import{j as e}from"./iframe-BfEtcTHs.js";import{useMDXComponents as n}from"./index-CPCxp1pX.js";import{I as r,F as s}from"./CommandsAndQueries-XBwAul-0.js";import{M as l,C as a}from"./blocks-BEk0eltt.js";import"./Tag-5zjMhKbj.js";import"./index-Cdy39dSN.js";import"./copy-CuNW8uGj.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-iqlA5Rsi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpslN8bF.js";import"./index-C2AzqXEp.js";import"./index-BoD67Q0d.js";import"./Link-Dx6E4Ul6.js";import"./index-zG-h4Dtj.js";import"./index-DZog4k2R.js";import"./index-SIE8WAww.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DzVstS1R.js";import"./addCustomCSSWithScoping-BOC9QupD.js";import"./index-BwoaU2AB.js";import"./information-DXNiXlp4.js";import"./sys-enter-2-Da7fZjtE.js";import"./alert-sulwnQm9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DefV3fg4.js";import"./delete-DRp_vKLL.js";import"./settings-8cBiGhEo.js";import"./NoData-DRiCv3V7.js";import"./IllustratedMessage-BcierAe3.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DC3p8tpO.js";import"./index-BU6h6RcY.js";import"./index-inlCeEQP.js";import"./slim-arrow-down-PFXKhKTH.js";import"./Input-kpy9MJfL.js";import"./ResponsivePopoverCommon.css-DnHFDVo1.js";import"./ValueStateMessage.css-71Kwz1nQ.js";import"./Suggestions.css-CVcapq67.js";import"./ListBoxItemGroupTemplate-Yo3vvIxC.js";import"./ComboBoxItemGroup-CVRBhhBV.js";import"./ListItemBaseTemplate-BekWMZBh.js";import"./Token-jUwPkdch.js";import"./ScrollEnablement-CI0R8iiH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CRg3tQau.js";import"./ToggleButton-C-eT4TLR.js";import"./SuggestionItem-BFsIrsax.js";import"./index-C-6LBD30.js";import"./Option-Bnm7Q230.js";import"./index-BbL5VZ3R.js";import"./SegmentedButton-CyHKGesR.js";import"./index-BX9NA7Ty.js";import"./Select-CHLFQnon.js";import"./InvisibleMessage-c4INzckP.js";import"./slim-arrow-down-C0u-ePLI.js";import"./index-CGv8fhvM.js";import"./index-oDy6hXsG.js";import"./index-BywWnLvF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Ceyg-lSX.js";import"./group-2-DC-4yjr6.js";import"./sort-descending-C2KIxNMI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bx6m_JwS.js";import"./utils-lSaTNz_p.js";import"./index-DKB6a4-7.js";import"./index-BKyhgX99.js";import"./index-B2EjrpGu.js";import"./navigation-down-arrow-BfqJo7nx.js";import"./navigation-right-arrow-BDRcromZ.js";import"./navigation-right-arrow-DPFdFbno.js";import"./useCurrentTheme-K8lHxNsa.js";import"./IndicationColor-DVw-fSM_.js";import"./index-SiSH1lpP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwLDEYmZ.js";import"./paper-plane-C_6zFKE6.js";import"./index-BlUB7lqP.js";import"./less-BJgq7N11.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
