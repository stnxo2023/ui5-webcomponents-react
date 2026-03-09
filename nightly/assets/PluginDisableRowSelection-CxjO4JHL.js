import{j as e}from"./iframe-BdGmxA0i.js";import{useMDXComponents as n}from"./index-C_zfuZcr.js";import{I as r}from"./CommandsAndQueries-DPqSrKc7.js";import{M as s,C as l}from"./blocks-CvQb1zUF.js";import"./Tag-BZN3xK1V.js";import"./index-BNIHl_tg.js";import"./copy-uDMRF36v.js";import{F as a}from"./Footer-Do6hcOrL.js";import"./PageNotFound-CY9FLBWR.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B8ML7JX1.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CQvrABtJ.js";import"./index-DweznLO9.js";import"./index-C9pyPHSx.js";import"./index-DNgHnsc0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-XhNISppA.js";import"./addCustomCSSWithScoping-CVesT24B.js";import"./index-DZ9SK43g.js";import"./index-B2qLcI40.js";import"./index-rE0jwRpd.js";import"./information-CGm_Wlhu.js";import"./sys-enter-2-ckHTVyHn.js";import"./alert-iCvnQY_C.js";import"./index-BdC4vT1G.js";import"./Illustrations-D5W8On_q.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChIqXbcW.js";import"./delete-CTJk0IsQ.js";import"./settings-1l_UOAce.js";import"./NoData-Djl2JIk3.js";import"./NoFilterResults-DFkoAIau.js";import"./index-CfsWq6ap.js";import"./IllustratedMessage-BtAlBlE6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dwbmm60M.js";import"./Input-C_M3LRG8.js";import"./ResponsivePopoverCommon.css-EBeNizWh.js";import"./ValueStateMessage.css-B4ysw5cr.js";import"./Suggestions.css-Dvu4kY1O.js";import"./ListBoxItemGroupTemplate-BOvb3JSv.js";import"./ComboBoxItemGroup-CGG0HGrS.js";import"./ListItemBaseTemplate-DmKob6Ye.js";import"./Token-YSryXaLU.js";import"./ScrollEnablement-Bx9yVDLi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDBEqEtu.js";import"./ToggleButton-J8mmndXN.js";import"./multiselect-all-Ly4Q_TyH.js";import"./SuggestionItem-Dym0n5j2.js";import"./index-CevOS8v4.js";import"./Option-DvimpLtc.js";import"./index-CGPpfces.js";import"./SegmentedButton-FdRkB1du.js";import"./index-Da-1EDwC.js";import"./Select-D5Nsgp52.js";import"./InvisibleMessage-moo-UDrP.js";import"./index-BE8W69-D.js";import"./index-DsUL3khw.js";import"./index-d6_tfAg9.js";import"./index-D5VX-3sq.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4cujpVB.js";import"./group-2-Dkh6CIdZ.js";import"./sort-descending-BBVHoidp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DrhR_CYD.js";import"./utils-DG7feN6u.js";import"./index-CGXbN4gw.js";import"./index-Bh3ez5ii.js";import"./index-CUQ38Ums.js";import"./navigation-down-arrow-BSMjHANS.js";import"./navigation-right-arrow-8rES_Lpx.js";import"./navigation-right-arrow-DLSm8pNj.js";import"./useCurrentTheme-DDtUANJS.js";import"./index-MAbIbvmC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C8ybJVgJ.js";import"./paper-plane-Bst4p13C.js";import"./index-Cf38JKFu.js";import"./less-Bq49TC9A.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
