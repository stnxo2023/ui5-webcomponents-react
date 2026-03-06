import{j as e}from"./iframe-E6MBpCAt.js";import{useMDXComponents as n}from"./index-BRlgPkCG.js";import{I as r}from"./CommandsAndQueries-8ny61uxe.js";import{M as s,C as l}from"./blocks-WvceCUw-.js";import"./Tag-QOlCM1ZS.js";import"./index-BJtwwTA3.js";import"./copy-fO140460.js";import{F as a}from"./Footer-BLsFxTJ-.js";import"./PageNotFound-yO0YjSZG.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-3WGY_Sv8.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BKpa2-tj.js";import"./index-CzOa4uz9.js";import"./index-D8EadMTD.js";import"./index-C4VaG2ve.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AugRixR5.js";import"./addCustomCSSWithScoping-B5scap8C.js";import"./index-D9THgfPW.js";import"./index-Bbo3k75A.js";import"./index-Cae4RJ4g.js";import"./information-CRaf149E.js";import"./sys-enter-2-61rHxTWm.js";import"./alert-CCfxXDIv.js";import"./index-B2yJC31G.js";import"./Illustrations-AQfBdOwC.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDiz7W4Y.js";import"./delete-DyWtQ8v9.js";import"./settings-Cbn3T6Mx.js";import"./NoData-CtZtXwou.js";import"./NoFilterResults-B6R10kLg.js";import"./index-DsV7MKC8.js";import"./IllustratedMessage-Cs-cJ461.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-xfv3WGPy.js";import"./Input-CqRxWs6T.js";import"./ResponsivePopoverCommon.css-DTaErEQ_.js";import"./ValueStateMessage.css-BqIVd8me.js";import"./Suggestions.css-CcvXoNrX.js";import"./ListBoxItemGroupTemplate-ZWEg9Kwh.js";import"./ComboBoxItemGroup-BRsUx9Vu.js";import"./ListItemBaseTemplate-B16pPr0h.js";import"./Token-CtjOVKkz.js";import"./ScrollEnablement-Be3TO5d_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CLkVuZpQ.js";import"./ToggleButton-pP-fjxvO.js";import"./multiselect-all-MRD8MY9n.js";import"./SuggestionItem-D_jhouUB.js";import"./index-eoNwP9LZ.js";import"./Option-YcQmhF0Q.js";import"./index-DtG_JeRQ.js";import"./SegmentedButton-BJA9KoKC.js";import"./index-PyVys7-g.js";import"./Select-Dfg1e6B2.js";import"./InvisibleMessage-DjQ_P1pD.js";import"./index-u_TZ6o1u.js";import"./index-BcHhd9JA.js";import"./index-Hz-7wqYf.js";import"./index-DEWKs-pp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CE3S0Fdh.js";import"./group-2-Z21NISb5.js";import"./sort-descending-DGLIXonJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcrVqvMv.js";import"./utils-B83oV3Es.js";import"./index-gdkWggA6.js";import"./index-DFduNpb6.js";import"./index-CimvstOb.js";import"./navigation-down-arrow-BgwaJox2.js";import"./navigation-right-arrow-CNlAllMr.js";import"./navigation-right-arrow-6LbFyY1t.js";import"./useCurrentTheme-DnYQl_RE.js";import"./index-Cx4xZGwM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DIRCSoA5.js";import"./paper-plane-B1UzQNaq.js";import"./index-CFs-Fzgi.js";import"./less-BXmJ-FBk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
