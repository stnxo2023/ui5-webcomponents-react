import{j as e}from"./iframe-D_CdPJGB.js";import{useMDXComponents as n}from"./index-CU-ptlAE.js";import{I as r,F as s}from"./CommandsAndQueries-mK8OCXMD.js";import{M as l,C as a}from"./blocks-CCtPO9cz.js";import"./Tag-Bp64ITEl.js";import"./index-DvHG4NxR.js";import"./copy-BADAjupU.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DYjJZZgv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CZ_x4nC8.js";import"./index-px1zqH5W.js";import"./index-BjO8dbVD.js";import"./Link-D2G2Fur_.js";import"./index-rQn5W4JD.js";import"./index-BtAl8RaU.js";import"./index-Bp0lp_Bf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CAznTGJj.js";import"./addCustomCSSWithScoping-CCFJUFLD.js";import"./index-C4kKrQ_A.js";import"./information-D72qH7xY.js";import"./sys-enter-2-hXCOpqjq.js";import"./alert-DtWkY9xa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D_IhUX-d.js";import"./delete-7Ml3hpJC.js";import"./settings-zWMvdB3T.js";import"./NoData-B6osxBGy.js";import"./IllustratedMessage-BSFIsl3K.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-mv1-qqSd.js";import"./index-DdLYl7JB.js";import"./index-DU-QIP1X.js";import"./slim-arrow-down-DjB7mIxL.js";import"./Input-DDlyZUe3.js";import"./ResponsivePopoverCommon.css-BLJDaaVS.js";import"./ValueStateMessage.css-BCduw_aJ.js";import"./Suggestions.css-BidsuWHC.js";import"./ListBoxItemGroupTemplate-xzts4k2L.js";import"./ComboBoxItemGroup-CHXVN60o.js";import"./ListItemBaseTemplate-DxdVRh6Y.js";import"./Token-C48gjgFU.js";import"./ScrollEnablement-DdqyZen4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKWpRsaf.js";import"./ToggleButton-D2rDUs9L.js";import"./SuggestionItem-DDpzUX_W.js";import"./index-B4aMp4lg.js";import"./Option-DUZ1b-TT.js";import"./index-B2ct1whH.js";import"./SegmentedButton-Do-ayQ2t.js";import"./index-D1WIrmAT.js";import"./Select-6cSgUjJb.js";import"./InvisibleMessage-C5We_rGd.js";import"./slim-arrow-down-CHdhic0E.js";import"./index-B4pCbKOH.js";import"./index-CVUQsMX1.js";import"./index-DPMPQ5O6.js";import"./index-DcE2qBtK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlD1QirN.js";import"./group-2-Dor_fq4O.js";import"./sort-descending-DgbKssf5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-L2EXVoeb.js";import"./utils-BUKq5qYC.js";import"./index-DKu9DJJF.js";import"./index-BV1E9Rhs.js";import"./index-BylnBWRJ.js";import"./navigation-down-arrow-DunPFpLG.js";import"./navigation-right-arrow-BwWM6KQQ.js";import"./navigation-right-arrow-D3e7CxpK.js";import"./useCurrentTheme-C6BNKx_P.js";import"./index-DeJpfMkF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D_nqdA78.js";import"./paper-plane-DQ1C_A2n.js";import"./index-BQbEiE4i.js";import"./less-bDMIhIOC.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
