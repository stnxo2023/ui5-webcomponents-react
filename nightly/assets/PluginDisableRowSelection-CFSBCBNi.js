import{j as e}from"./iframe-DwL_U_4M.js";import{useMDXComponents as n}from"./index-DF1KaKr-.js";import{I as r,F as s}from"./CommandsAndQueries-Dz5IdIhG.js";import{M as l,C as a}from"./blocks-BkbxlrC9.js";import"./Tag-DWzoI0ag.js";import"./index-DgsDGr1U.js";import"./copy-Ds9kRn1x.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CDXE8hi2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOSg5TA3.js";import"./index-Dqsw9_lb.js";import"./index-Db6l5aQj.js";import"./Link-BdX-3dcl.js";import"./index-Vi2IbP0J.js";import"./index-DOHiCVZ-.js";import"./index-DKq2OUSi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dkqe7TGi.js";import"./addCustomCSSWithScoping-CE7eblPA.js";import"./index-ak-yAlnV.js";import"./information-BVmVMqd7.js";import"./sys-enter-2-B94IC9Xo.js";import"./alert-q5IjkK7H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BzDfrn-5.js";import"./delete-B6I0mZbY.js";import"./settings-D0VDSh3d.js";import"./NoData-C5CH-fWN.js";import"./IllustratedMessage-D15Dg6tX.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Demdetfk.js";import"./index-avC49Qb6.js";import"./index-DDkyeSI8.js";import"./slim-arrow-down-ByCeMr4H.js";import"./Input-usKDjDSg.js";import"./ResponsivePopoverCommon.css-CYR3rAjO.js";import"./ValueStateMessage.css-B8AI8KQ2.js";import"./Suggestions.css-CUQOIKID.js";import"./ListBoxItemGroupTemplate-DY25tZlO.js";import"./ComboBoxItemGroup-C3uToiVo.js";import"./ListItemBaseTemplate-BG93_W6E.js";import"./Token-CPniK2MA.js";import"./ScrollEnablement-CXLtDDEy.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-XOt9jxnj.js";import"./ToggleButton-CqFkZEKu.js";import"./SuggestionItem-B6ABjz01.js";import"./index-CPQ3riJn.js";import"./Option-CcfnhX8_.js";import"./index-BSRLtlm8.js";import"./SegmentedButton-m10F3ec1.js";import"./index-CGjb2kw-.js";import"./Select-BAca3Q1U.js";import"./InvisibleMessage-CeA3DNW4.js";import"./slim-arrow-down-BrKYHwbw.js";import"./index-BuK1gME8.js";import"./index-DMl1Ef82.js";import"./index-Dfj6plRX.js";import"./index-DHJJGQ-p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-7bwVwAS4.js";import"./group-2-DskrB8ej.js";import"./sort-descending-BXTEYcEJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxZSpw0g.js";import"./utils-SlffE8vX.js";import"./index-dMrvblLs.js";import"./index-Q2HLxENY.js";import"./index-B699imMP.js";import"./navigation-down-arrow-DQDDNWpd.js";import"./navigation-right-arrow-vbFYChxY.js";import"./navigation-right-arrow-BD_93O6z.js";import"./useCurrentTheme-Cixk1FnX.js";import"./index-CsMOgL6c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ABDzzkNE.js";import"./paper-plane-DcKv8aMK.js";import"./index-C3qjnFkq.js";import"./less-BreB1OVM.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
