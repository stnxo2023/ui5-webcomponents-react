import{j as e}from"./iframe-D2RmpAtO.js";import{useMDXComponents as n}from"./index-DiCnj7u5.js";import{I as r,F as s}from"./CommandsAndQueries-DvQ8BP-Z.js";import{M as l,C as a}from"./blocks-B4Ev-YXh.js";import"./Tag-BWvTCWNx.js";import"./index-chYDxilS.js";import"./copy-BW6gA-qB.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-in5GCq84.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BmyeAcwI.js";import"./index-D_sGGZyZ.js";import"./index-i343fVly.js";import"./Link-BzydKqDb.js";import"./index-Cm3TMOjS.js";import"./index-BeHBKa6s.js";import"./index-B2C__dDn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-fsmSjvJs.js";import"./addCustomCSSWithScoping-BvD5X_dz.js";import"./index-BieATUAG.js";import"./information-DyTRt78C.js";import"./sys-enter-2-BwNIaTDW.js";import"./alert-DiSc05uc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Db38Z4Pj.js";import"./delete-DXJZ50Ci.js";import"./settings-BpqXPtye.js";import"./NoData-ChGvGCJu.js";import"./IllustratedMessage-SNT48L7A.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DBajHU1V.js";import"./index-Bz7BBt1U.js";import"./index-CaYBagE_.js";import"./slim-arrow-down-BwUXjubF.js";import"./Input-0ALk-Ulf.js";import"./ResponsivePopoverCommon.css-Bu5Qc2tF.js";import"./ValueStateMessage.css-CBAbMCri.js";import"./Suggestions.css-C02nfz6y.js";import"./ListBoxItemGroupTemplate-CQ-G_Pqg.js";import"./ComboBoxItemGroup-DdwIQLIR.js";import"./ListItemBaseTemplate-DRnGHt_8.js";import"./Token-DYfjH-EW.js";import"./ScrollEnablement-Cm66ONH8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXwMpDTl.js";import"./ToggleButton-I7SxqJxx.js";import"./SuggestionItem-DhOTrIOf.js";import"./index-2Qoy0_XG.js";import"./Option-CMZEceos.js";import"./index-CJS4plQE.js";import"./SegmentedButton-DCg5Kbga.js";import"./index-D7uSjRf5.js";import"./Select-0CvvSnwM.js";import"./InvisibleMessage-CtMSUBcM.js";import"./slim-arrow-down-DBeujC-e.js";import"./index-b3oa9-sK.js";import"./index-B6DGWZKt.js";import"./index-BfnbleU3.js";import"./index-C_50PDoe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMBb2cz_.js";import"./group-2-BliQX8hG.js";import"./sort-descending-a4FwLL9N.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-owAeJ2tr.js";import"./utils-DpDD1Kik.js";import"./index-CLQQIqtQ.js";import"./index-B7nTnMBS.js";import"./index-DutVsOSq.js";import"./navigation-down-arrow-4ifYH4EI.js";import"./navigation-right-arrow-BZw6OC7t.js";import"./navigation-right-arrow-DPuDFCzF.js";import"./useCurrentTheme-DFOB5aNG.js";import"./index-B1sF1lOb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-y3GnqRIn.js";import"./paper-plane-DyqWmJB4.js";import"./index-DuNaoNls.js";import"./less-BWoqsgqa.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
