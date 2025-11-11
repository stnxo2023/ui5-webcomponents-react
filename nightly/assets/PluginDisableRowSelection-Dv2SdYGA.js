import{j as e}from"./iframe-Di0CnA8S.js";import{useMDXComponents as n}from"./index-D1yNQJed.js";import{I as r,F as s}from"./CommandsAndQueries-zSui8mFJ.js";import{M as l,C as a}from"./blocks-CQfV0luP.js";import"./Tag-YM6QkIty.js";import"./index-Cv974V6E.js";import"./copy-BnyBSvmF.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CaMp0239.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bkm6KJyR.js";import"./index-FrAwh-uI.js";import"./index-CX_Pkcfg.js";import"./Link-WIuadCnC.js";import"./index-Bms_gXSs.js";import"./index-DEJJ6ZVN.js";import"./index-DChMCwxZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BL09SrHJ.js";import"./addCustomCSSWithScoping-D9ak18Ev.js";import"./index-C4vcrMlE.js";import"./information-DzISr5a2.js";import"./sys-enter-2-Vd3zyEtx.js";import"./alert-DaK0qpmR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkjZN1m5.js";import"./delete-CkgveXZV.js";import"./settings-O_SqiOO8.js";import"./NoData-Cm3Sgky-.js";import"./IllustratedMessage-BkwPs3fv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BXEHKTVt.js";import"./index-D5FQCJ2w.js";import"./index-DWNbjlf6.js";import"./slim-arrow-down-bK9T7o5_.js";import"./Input-BMxXpEmu.js";import"./ResponsivePopoverCommon.css--b7te08F.js";import"./ValueStateMessage.css-wgmiBQCU.js";import"./Suggestions.css-Bkytjk5E.js";import"./ListBoxItemGroupTemplate-DvN0aU6B.js";import"./ComboBoxItemGroup-N1tLGR-W.js";import"./ListItemBaseTemplate-0lg9M0fM.js";import"./Token-CZDcEwHC.js";import"./ScrollEnablement-DhAJ5JnK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D4_pyZ43.js";import"./ToggleButton-qVqa-FdV.js";import"./SuggestionItem-CDxntgT5.js";import"./index-XMMJdMJi.js";import"./Option-DNM61xVD.js";import"./index-nh3D4sX1.js";import"./SegmentedButton-DLLN3073.js";import"./index-D4LgD8pt.js";import"./Select-CSvcStkQ.js";import"./InvisibleMessage-CA5l1OrC.js";import"./slim-arrow-down-BZ32OfT-.js";import"./index-jyrIbm7X.js";import"./index-jLe1V_0t.js";import"./index-BCKZ26pG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CSxtsdcS.js";import"./group-2-D_KQdcyc.js";import"./sort-descending-CVK6o8y6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cn-IKnzn.js";import"./utils-CA_s0xCU.js";import"./index-Dj5ZK7Jm.js";import"./index-SGAGbvBy.js";import"./index-BY5Nj2YC.js";import"./navigation-down-arrow-Cn2Pb-ac.js";import"./navigation-right-arrow-BM8i-tol.js";import"./navigation-right-arrow-qgiVcRku.js";import"./useCurrentTheme-DDCiNxpb.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CdwOc6CH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DMJx-Dqa.js";import"./paper-plane-BU5KNFmh.js";import"./index-Dtz3OPe1.js";import"./less-DIBO8ral.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
