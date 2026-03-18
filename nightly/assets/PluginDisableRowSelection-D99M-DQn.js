import{j as e}from"./iframe-ClKZoppV.js";import{useMDXComponents as n}from"./index-BBP-HRkM.js";import{I as r}from"./CommandsAndQueries-BSg7r23V.js";import{M as s,C as l}from"./blocks-C6PUfAN7.js";import"./Tag-CnAKe81V.js";import"./index-Brz6Jamn.js";import"./copy-rX2zRtcl.js";import{F as a}from"./Footer-BJ8-oElo.js";import"./PageNotFound-DkMfdMip.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DGZTteEt.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DLU4uHoZ.js";import"./index-BFw8ePED.js";import"./index-W9ERffOR.js";import"./index-DG_kdwr6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJ7j91qP.js";import"./addCustomCSSWithScoping-5Po78CSL.js";import"./index-Tx9EfJkS.js";import"./index-Dnwis2Yb.js";import"./index-CEU-nQxX.js";import"./information-C2rgVrmf.js";import"./sys-enter-2-zNCrvlrA.js";import"./alert-DLSg1FPP.js";import"./index-kUQXQip-.js";import"./Illustrations-CjXAC4Lw.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqRIgD2H.js";import"./delete-DTLw9kFa.js";import"./settings-CKxE0u5y.js";import"./NoData-Beno5Ixn.js";import"./NoFilterResults-DAtw42t7.js";import"./index-owrFuFXC.js";import"./IllustratedMessage-Bq2mIffC.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Ct-vvlBG.js";import"./Input-DifhVVae.js";import"./ResponsivePopoverCommon.css-Dcm-qCQM.js";import"./ValueStateMessage.css-C3kGxfwH.js";import"./Suggestions.css-DMuxG7ST.js";import"./ListBoxItemGroupTemplate-DCEyEHtj.js";import"./ComboBoxItemGroup-CZ_yERJC.js";import"./ListItemBaseTemplate-wnFyFdMD.js";import"./Token-BGJ_CPca.js";import"./ScrollEnablement-DisvRpMe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgPpv9rh.js";import"./ToggleButton-EH5FNVd0.js";import"./multiselect-all-DfoaZX6L.js";import"./SuggestionItem-DvrIUtwR.js";import"./index-BiHnlYBo.js";import"./Option-hV2MsLrQ.js";import"./index-DFcrPMwa.js";import"./SegmentedButton-Dw0Q0pVv.js";import"./index-CqtCXtRM.js";import"./Select-BNOIoVRp.js";import"./InvisibleMessage-BAsmVFY2.js";import"./index-BNyltB7F.js";import"./index-CGhnN41O.js";import"./index-CxZDjTcS.js";import"./index-BLYzCrAG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CrnnRFsr.js";import"./group-2-Bqh4dqd8.js";import"./sort-descending-Vzr3Ff4Q.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C86D3ysp.js";import"./utils-Dz6AVwqM.js";import"./index-CAsRf7dg.js";import"./index-IVfxG6E8.js";import"./index-DiTwbDsk.js";import"./navigation-down-arrow-C05xj5np.js";import"./navigation-right-arrow-DlzjCvaV.js";import"./navigation-right-arrow-D7tfucyq.js";import"./useCurrentTheme-D4VUyUoQ.js";import"./index-CUey85Pp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CHRGMaLR.js";import"./paper-plane-Ddvc44cX.js";import"./index-B-c0kiTT.js";import"./less-C_ayitlz.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
