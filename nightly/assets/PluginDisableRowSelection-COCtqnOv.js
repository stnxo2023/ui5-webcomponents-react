import{j as e}from"./iframe-CeMquKfU.js";import{useMDXComponents as n}from"./index-BbFo7jBM.js";import{I as r,F as s}from"./CommandsAndQueries-DG6G8TEI.js";import{M as l,C as a}from"./blocks-Db1iDIvu.js";import"./Tag-DBOPR6ka.js";import"./index-BWGqmYD4.js";import"./copy-DuOXgjDa.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B1wSYbCh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYb2g8Yq.js";import"./index-srI8srsL.js";import"./index-WnbBQODb.js";import"./Link-B4KwrrH9.js";import"./index-Brk-KPPC.js";import"./index-jfPm289V.js";import"./index-DMujUK6u.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RK7-B4yx.js";import"./addCustomCSSWithScoping-06k5HVP6.js";import"./index-CQMy8EdC.js";import"./information-BF8hjIJ6.js";import"./sys-enter-2-CBCKgEbS.js";import"./alert-DPPxzZqA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DPG_OKYP.js";import"./delete-Uj8hBt6S.js";import"./settings-CRRgNt-N.js";import"./NoData-YotdDZfS.js";import"./IllustratedMessage-C9SN6Yvr.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-gYz_1-Iq.js";import"./index-DTmGPPPG.js";import"./index-lo7sxx3g.js";import"./slim-arrow-down-rp2vwRxt.js";import"./Input-DQRA-VuS.js";import"./ResponsivePopoverCommon.css-BClm2dDh.js";import"./ValueStateMessage.css-CKCH07QR.js";import"./Suggestions.css-BWIb4a3h.js";import"./ListBoxItemGroupTemplate-DCHeqAW1.js";import"./ComboBoxItemGroup-SnnIm8Sr.js";import"./ListItemBaseTemplate-1_D2ATm3.js";import"./Token-CruD5fzF.js";import"./ScrollEnablement-C-b-W7id.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7spGUwG.js";import"./ToggleButton-_yDrgV6p.js";import"./SuggestionItem-CL3ZaIy3.js";import"./index-UEVtisfD.js";import"./Option-BKd77GhM.js";import"./index-3m2Ir6Wd.js";import"./SegmentedButton-PLCet70E.js";import"./index-DSexaJxi.js";import"./Select-mBwpFl_7.js";import"./InvisibleMessage-DPIiF7tN.js";import"./slim-arrow-down-DP9BktZN.js";import"./index-DBpNwbAj.js";import"./index-CT9C6QTI.js";import"./index-CBp7yPzh.js";import"./index-_bp4qzZ2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BgkPuhmB.js";import"./group-2-Cjy-hE1J.js";import"./sort-descending-Bvfrz-CE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CHxxDtPV.js";import"./utils-BpaGkPqN.js";import"./index-DWISqHTN.js";import"./index-BO-Xqwo9.js";import"./index-2AndXKS7.js";import"./navigation-down-arrow-C-MSOhmQ.js";import"./navigation-right-arrow-PEzIwvoX.js";import"./navigation-right-arrow-Df3YrvYp.js";import"./useCurrentTheme-DkydNdML.js";import"./index-C0E2EBUT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CjonKQN8.js";import"./paper-plane-Cz43U6io.js";import"./index-BtaWLEfD.js";import"./less-BiaIGbp3.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
