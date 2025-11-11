import{j as e}from"./iframe-BzFFzKD_.js";import{useMDXComponents as n}from"./index-CZpqZls8.js";import{I as r,F as s}from"./CommandsAndQueries-98tICPmn.js";import{M as l,C as a}from"./blocks-Dfn8aDA2.js";import"./Tag-Du7Hh6Mn.js";import"./index-BnnU1inb.js";import"./copy-CYosl6Ho.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BlawaMrj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-s8GS1odQ.js";import"./index-CjTZ8O9p.js";import"./index-BTogfKzr.js";import"./Link-CMUJ7C_U.js";import"./index-DDykH0pl.js";import"./index-DXrTedKP.js";import"./index-DWEvXFon.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUUeXWCw.js";import"./addCustomCSSWithScoping-26WgEUoU.js";import"./index-BkRjFulW.js";import"./information-ItcJqxXi.js";import"./sys-enter-2-Y1mMTef-.js";import"./alert-BnuKtxZV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJxmxwdy.js";import"./delete-DvlzQjzU.js";import"./settings-BtDwJkQy.js";import"./NoData-RN4fv0I6.js";import"./IllustratedMessage-22prqt92.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CuqFQkP0.js";import"./index-BZwhzjSN.js";import"./index-DeWW5-Td.js";import"./slim-arrow-down-CQstKHsd.js";import"./Input-DWRBGriJ.js";import"./ResponsivePopoverCommon.css-Dh0AbpYk.js";import"./ValueStateMessage.css-D95mkauN.js";import"./Suggestions.css-B-ge1jIP.js";import"./ListBoxItemGroupTemplate-Duu4RMpx.js";import"./ComboBoxItemGroup-C3kd4aNe.js";import"./ListItemBaseTemplate-25qboxfo.js";import"./Token-D-De-6_k.js";import"./ScrollEnablement-CN1jgR1Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKrmQxvq.js";import"./ToggleButton-CD3XCDqC.js";import"./SuggestionItem-DfQZW9Bt.js";import"./index-DlK_9Aw2.js";import"./Option-DGgXyVE9.js";import"./index-kQWOveMj.js";import"./SegmentedButton-BD5wjYvX.js";import"./index-DPt3z0Xm.js";import"./Select-Biz1LhyR.js";import"./InvisibleMessage-DAn4ghj3.js";import"./slim-arrow-down-Dy8U4h34.js";import"./index-BpbvvaJA.js";import"./index-BNuehqek.js";import"./index-T2JpUHkX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXv10JXZ.js";import"./group-2-BaX0RAg9.js";import"./sort-descending-C1aqy8QD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-HIY5U8Xd.js";import"./utils-BOfme5mX.js";import"./index-DEFnuKWD.js";import"./index-BqaTO31J.js";import"./index-lM2ViReC.js";import"./navigation-down-arrow-DyEHJO4J.js";import"./navigation-right-arrow-DOrImmdb.js";import"./navigation-right-arrow-XetH_fh1.js";import"./useCurrentTheme-KwChezx1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-5mNQu9kN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CtHY0-jf.js";import"./paper-plane-BYoF07I-.js";import"./index-BVE1VzVn.js";import"./less-BAX0c4ch.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
