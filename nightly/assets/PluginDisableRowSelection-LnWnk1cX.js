import{j as e}from"./iframe-bao9qRDH.js";import{useMDXComponents as n}from"./index-D58rFl3P.js";import{I as r}from"./CommandsAndQueries-Bg8yb33a.js";import{M as s,C as l}from"./blocks-uUz_WETG.js";import"./Tag-DnPLRNDs.js";import"./index-B3NnTsyp.js";import"./copy-jfQcw6pd.js";import{F as a}from"./Footer-WVPZdxr3.js";import"./PageNotFound-sLpD2w2i.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D8DfZE8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-ZWtIcHaY.js";import"./index-BNO-qx4N.js";import"./index-Dl2g3tcZ.js";import"./index-DOBS9bga.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L1xKvRVU.js";import"./addCustomCSSWithScoping-D0v__xyi.js";import"./index-DPEMBgxp.js";import"./index-5JMcfQSp.js";import"./index-CwfO5OAT.js";import"./information-DbPZ0LCP.js";import"./sys-enter-2-Ch2YqKTp.js";import"./alert-CeM8CijD.js";import"./index-D32QYjx2.js";import"./Illustrations-BL_lLuOy.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DKlJM-ya.js";import"./delete-B4gN8aLw.js";import"./settings-DtxXcVBU.js";import"./NoData-xbyYJYqd.js";import"./NoFilterResults-rv2yTnQi.js";import"./index-Cq3Mz4O1.js";import"./IllustratedMessage-DduXifRX.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BASehbAX.js";import"./Input-B4vfEymz.js";import"./ResponsivePopoverCommon.css-boUjI9kL.js";import"./ValueStateMessage.css-Betpi1RU.js";import"./Suggestions.css-Czb7XS0g.js";import"./ListBoxItemGroupTemplate-Dxoq36lY.js";import"./ComboBoxItemGroup-BUGeYATz.js";import"./ListItemBaseTemplate-RRyIrX0q.js";import"./Token-CmOxgLRY.js";import"./ScrollEnablement-DTj4JYqk.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_fmCfmaL.js";import"./ToggleButton-y0YtkiXF.js";import"./multiselect-all-BxizFlon.js";import"./SuggestionItem-rNzbWoyR.js";import"./index-vSP-bfQy.js";import"./Option-DAUEl0Pa.js";import"./index-BZpv7IWE.js";import"./SegmentedButton-JBMqYtuM.js";import"./index-WWi3sBsb.js";import"./Select-BY45_jlB.js";import"./InvisibleMessage-lmhcQGzA.js";import"./index-BGpmUKYQ.js";import"./index-CnrqoCE-.js";import"./index-CLyNAv9_.js";import"./index-C8x-DaOR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vG2O0XVd.js";import"./group-2-Cn2rIsnU.js";import"./sort-descending-Dbm-NR0R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BBPmP6UZ.js";import"./utils-CPXWtj8G.js";import"./index--h_XAmYP.js";import"./index-BLVSX5Bx.js";import"./index-1cD6iEHz.js";import"./navigation-down-arrow-DkqjrQmu.js";import"./navigation-right-arrow-DBBJoASN.js";import"./navigation-right-arrow-l91271wa.js";import"./useCurrentTheme-Cu36YjS3.js";import"./index-ReeUPo0U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuL1NiTR.js";import"./paper-plane-C0i82_xb.js";import"./index-CQKF89is.js";import"./less-ps9JngL0.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
