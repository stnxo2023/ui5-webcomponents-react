import{j as e}from"./iframe-BkU8WQpb.js";import{useMDXComponents as n}from"./index-BeG8GrN5.js";import{I as r,F as s}from"./CommandsAndQueries-DetvrItO.js";import{M as l,C as a}from"./blocks-CLMMfPPt.js";import"./Tag-Cih70sHI.js";import"./index-DnBqZpyB.js";import"./copy-B4HTDbaZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BvLI3kX2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dj6CZlQQ.js";import"./index-f6jDEWAh.js";import"./index-eFI2U8Up.js";import"./Link-DLFy93gF.js";import"./index-D4xCyo8q.js";import"./index-DWR5LsZZ.js";import"./index-BysDONg4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Fp7idO2l.js";import"./addCustomCSSWithScoping-CehjyWVu.js";import"./index-DATmYB4_.js";import"./information-CjNccefj.js";import"./sys-enter-2-RLTSxo4s.js";import"./alert-DdBYY2qU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CsenYKF8.js";import"./delete-B_OD3K68.js";import"./settings-CJS1NR3M.js";import"./NoData-AjIR6FXV.js";import"./IllustratedMessage-DUpdSioN.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DmtWxoyx.js";import"./index-B_Lo1ajO.js";import"./index-CRA6hnYw.js";import"./slim-arrow-down-BTmhvktL.js";import"./Input-LLlRvrNn.js";import"./ResponsivePopoverCommon.css-NpFXxOXP.js";import"./ValueStateMessage.css-BdFRF0eK.js";import"./Suggestions.css-Dl4BPrxO.js";import"./ListBoxItemGroupTemplate-DEE5SIID.js";import"./ComboBoxItemGroup-BWN-cMPv.js";import"./ListItemBaseTemplate-B2kevfSs.js";import"./Token-BQND7Ztt.js";import"./ScrollEnablement-BpahqvCY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgczD3q6.js";import"./ToggleButton-CDkfCjtp.js";import"./SuggestionItem-CrbDQNDp.js";import"./index-BCLLjiA_.js";import"./Option-DModAxyu.js";import"./index-CXuec-HL.js";import"./SegmentedButton-DfLnf31k.js";import"./index-D4IOGR9a.js";import"./Select-D4yKPFL9.js";import"./InvisibleMessage-52jPagfA.js";import"./slim-arrow-down-CpyZ1Zfr.js";import"./index-B49HkTlG.js";import"./index-DHOtv1YS.js";import"./index-v2LmQFFt.js";import"./index-D2fRocR2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DhKFVNcX.js";import"./group-2-CYuJGq9D.js";import"./sort-descending-GfYRxa9q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BqWvECKK.js";import"./utils-CekyTbg1.js";import"./index-BJRBwXE4.js";import"./index-Fsnq8hnt.js";import"./index-lT6ku5Z4.js";import"./navigation-down-arrow-CfiNm6dT.js";import"./navigation-right-arrow-UY7xGVP3.js";import"./navigation-right-arrow-DgO3Fp25.js";import"./useCurrentTheme-hKMovh50.js";import"./index-Dm5lGjM9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlWYfZgO.js";import"./paper-plane-DxMEXvmI.js";import"./index-D1dGw7D4.js";import"./less-DRAo-dZd.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
