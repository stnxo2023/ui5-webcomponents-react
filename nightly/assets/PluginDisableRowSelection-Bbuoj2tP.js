import{j as e}from"./iframe-D9bwNIEw.js";import{useMDXComponents as n}from"./index-C7Zm3EXU.js";import{I as r}from"./CommandsAndQueries-C_WJZTxK.js";import{M as s,C as l}from"./blocks-CdTlBqmb.js";import"./Tag-nAJAFGwR.js";import"./index-v7UWUzZA.js";import"./copy-C4qxUcFd.js";import{F as a}from"./Footer-rCYhEoIf.js";import"./PageNotFound-C24XQEWZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CLnRqfAO.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DLbf1NX7.js";import"./index-DiWu_OvK.js";import"./index-BWceQhWo.js";import"./index-DX-an7LC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYx-bkvu.js";import"./addCustomCSSWithScoping-CTtTC3T9.js";import"./index-DpP2zBoF.js";import"./index-B5Io8E3V.js";import"./index-DYbVUH4U.js";import"./information-BBRTwn-C.js";import"./sys-enter-2-BgYzXgjA.js";import"./alert-Dvz5ATv0.js";import"./index-B24aDDF0.js";import"./Illustrations-CAUI_mYY.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Czt5as8-.js";import"./delete-BNMsGxXn.js";import"./settings-D-Mp7imo.js";import"./NoData-DTpV-vmY.js";import"./NoFilterResults-CAt1ldiT.js";import"./index-Bz7cIJno.js";import"./IllustratedMessage-BZ0vFLV2.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CGD-1joK.js";import"./Input-CYuZcn_p.js";import"./ResponsivePopoverCommon.css-CkiXBi7B.js";import"./ValueStateMessage.css-oZNuDkL6.js";import"./Suggestions.css-CMZyvU-Z.js";import"./ListBoxItemGroupTemplate-D6WAuS51.js";import"./ComboBoxItemGroup-SbXrXIXH.js";import"./ListItemBaseTemplate-CuVwXQqy.js";import"./Token-DONenf2t.js";import"./ScrollEnablement-C9fhfdHG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CLmJtC2x.js";import"./ToggleButton-Hap8L6WH.js";import"./multiselect-all-DA9VqXJi.js";import"./SuggestionItem-BeJwmeJ_.js";import"./index-B7JFUA5M.js";import"./Option-BoCXKUm2.js";import"./index-78TbmELJ.js";import"./SegmentedButton-CfF5Zavs.js";import"./index-CnThYA-n.js";import"./Select-BgIvcjPK.js";import"./InvisibleMessage-BbRDjx9q.js";import"./index-Cmx6PnM9.js";import"./index-pF_dZyqg.js";import"./index-CqsSgeDP.js";import"./index-CVcQTqV4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BQ8RHn1K.js";import"./group-2-B5dpY6uH.js";import"./sort-descending-DDi3yN4n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8EuiRxkG.js";import"./utils-uqv3geid.js";import"./index-CxdTHADh.js";import"./index-D8i2I1pU.js";import"./index-CjyQYo-y.js";import"./navigation-down-arrow-Ds7Luypq.js";import"./navigation-right-arrow-B6z7lltw.js";import"./navigation-right-arrow-BSWKpFds.js";import"./useCurrentTheme-BeLIUtpu.js";import"./index-BzcMPirF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Df4rTIOc.js";import"./paper-plane-DcuCs8QG.js";import"./index-D9PFjJIf.js";import"./less-DhdsysxP.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
