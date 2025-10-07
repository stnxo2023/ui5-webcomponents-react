import{j as e}from"./iframe-BBABn56p.js";import{useMDXComponents as n}from"./index-JaA5rKoZ.js";import{I as r,F as s}from"./CommandsAndQueries-BQ3fu09v.js";import{M as l,C as a}from"./blocks-C48pq8eI.js";import"./Tag-2o8WwGUn.js";import"./index-CDfsiwkh.js";import"./copy-DZ9Ywk1q.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DkIX-1rK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J2oyeWCO.js";import"./index-CKtBuMmX.js";import"./index-DWO5htBk.js";import"./Link-Ber6JvTK.js";import"./index-bK0pQ8Eu.js";import"./index-D_78KBK9.js";import"./index-BkrG37On.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGZzwSbc.js";import"./addCustomCSSWithScoping-BtxahzH2.js";import"./index-Ckf8DLFv.js";import"./information-BZFlG9j_.js";import"./sys-enter-2-DjgAxbYG.js";import"./alert-CS_Fjm7A.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BAH4TUxy.js";import"./delete-DsWdS96_.js";import"./settings-Df6DL7Gq.js";import"./NoData-BNjlB7uw.js";import"./IllustratedMessage-Di319cue.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BsO5uN5a.js";import"./index-DhLGJCjj.js";import"./index-BqTDCnco.js";import"./slim-arrow-down-BG1nt-P_.js";import"./Input-CYLSHt27.js";import"./ResponsivePopoverCommon.css-BpyfczN_.js";import"./ValueStateMessage.css-B7LgM9S6.js";import"./Suggestions.css-CEnMSpxy.js";import"./ListBoxItemGroupTemplate-DMJ27KCA.js";import"./ComboBoxItemGroup-DdXTq1Vh.js";import"./ListItemBaseTemplate-DaYbGn7R.js";import"./Token-CJDolX8T.js";import"./ScrollEnablement-BLTuKYfn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B5ygJNfI.js";import"./ToggleButton-7E3RKcQ8.js";import"./SuggestionItem-Bine1zmz.js";import"./index-B6Q789ah.js";import"./Option-BjUcgJcl.js";import"./index-Ch7wW-jX.js";import"./SegmentedButton-DhLiQXqU.js";import"./index-6d4BSX0F.js";import"./Select-BKOJ5f1a.js";import"./InvisibleMessage-W81utmZk.js";import"./slim-arrow-down-CNYLbtEw.js";import"./index-BEp2nlaX.js";import"./index-CPKR6tvC.js";import"./index-BCqZx7KV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bg-CqXDw.js";import"./group-2-UoqYeskz.js";import"./sort-descending-BBmoGOXL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJgZ-Sj2.js";import"./utils-CQ2iljMS.js";import"./index-BlzTje2S.js";import"./index-10H1aut2.js";import"./index-CJlMvGeI.js";import"./navigation-down-arrow-CZ7v8mT2.js";import"./navigation-right-arrow-GIyVM7JZ.js";import"./navigation-right-arrow-BtregVCK.js";import"./useCurrentTheme-CTzRqOqk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BfiFzDtl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BoTjglKk.js";import"./paper-plane-D5Xcc4aT.js";import"./index-FOPI05Cv.js";import"./less-DX_0GEda.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
