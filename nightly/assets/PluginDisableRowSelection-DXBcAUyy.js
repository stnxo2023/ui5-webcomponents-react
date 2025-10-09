import{j as e}from"./iframe-DeMwMmGx.js";import{useMDXComponents as n}from"./index-CWwj9Mnl.js";import{I as r,F as s}from"./CommandsAndQueries-BBLmRDsb.js";import{M as l,C as a}from"./blocks-8D0p5thu.js";import"./Tag-CJlss1uo.js";import"./index-fzrObdgv.js";import"./copy-BgdiHhBm.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CWwR-y9u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DaGO4DII.js";import"./index-CvQAJVIm.js";import"./index-CqRETC9D.js";import"./Link-DuK3KTb6.js";import"./index-x-nhhmJ1.js";import"./index-QSmrzR-p.js";import"./index-C3DV1EGu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ0_IZyX.js";import"./addCustomCSSWithScoping-DmQSYZoL.js";import"./index-DwA6oYWp.js";import"./information-IgIWD04z.js";import"./sys-enter-2-B6dBkbbN.js";import"./alert-DXbxKJCI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BgVD4qXY.js";import"./delete-mq69ob-m.js";import"./settings-DsHd3P0n.js";import"./NoData--TQXjPxp.js";import"./IllustratedMessage-q7ABRVJa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DN8h-kj9.js";import"./index-Bqo4E53G.js";import"./index-Ce9C4-0M.js";import"./slim-arrow-down-CB1uueTx.js";import"./Input-DRHd5nbL.js";import"./ResponsivePopoverCommon.css-Nq-6b_ms.js";import"./ValueStateMessage.css-Tpbst_AR.js";import"./Suggestions.css-BcZrXAjC.js";import"./ListBoxItemGroupTemplate-DWp2fAWp.js";import"./ComboBoxItemGroup-B99x6mYV.js";import"./ListItemBaseTemplate-BE7nd5FZ.js";import"./Token-fAbSmEQt.js";import"./ScrollEnablement-BDJVsvmw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-eMNK3qV1.js";import"./ToggleButton-DVIEs1wL.js";import"./SuggestionItem-C9Fa1J1D.js";import"./index-HyDyLjGn.js";import"./Option-C1H5Qp9e.js";import"./index-EGOdPRwf.js";import"./SegmentedButton-BLiDf_5M.js";import"./index-Cjfludll.js";import"./Select-BWPut0uV.js";import"./InvisibleMessage-RemLUX1t.js";import"./slim-arrow-down-Cavo_L7e.js";import"./index-BwxK2g44.js";import"./index-B0LvNv03.js";import"./index-5d-X9JJE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4tw820b.js";import"./group-2-DLLjtbHP.js";import"./sort-descending-DFffTKv8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hbWTH7_c.js";import"./utils-mFF1dh2e.js";import"./index-DfGmmuHK.js";import"./index-CEQRcaEk.js";import"./index-BPZ4GFnq.js";import"./navigation-down-arrow-BQ77KqPN.js";import"./navigation-right-arrow-BckoNBw3.js";import"./navigation-right-arrow-F7WHq2_o.js";import"./useCurrentTheme-BnPNa_8f.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BXvWjhnt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dy9MOOru.js";import"./paper-plane-4ZqR7r5W.js";import"./index-BFzoLWvR.js";import"./less-DFrGBfi9.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
