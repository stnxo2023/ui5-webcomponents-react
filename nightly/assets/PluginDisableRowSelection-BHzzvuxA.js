import{j as e}from"./iframe-DoO3B8k6.js";import{useMDXComponents as n}from"./index-c3qBf9j-.js";import{I as r,F as s}from"./CommandsAndQueries-BgTP9rvd.js";import{M as l,C as a}from"./blocks-SZ1zCtFT.js";import"./Tag-BQH01MnI.js";import"./index-0e8xkLwE.js";import"./copy-_xuz2Nel.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CmXCVKCh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSLJX4WE.js";import"./index-CQlaTUTv.js";import"./index-DHXtHkXk.js";import"./Link-BjpII7wh.js";import"./index-DkL8yUNi.js";import"./index-DNsrF3vl.js";import"./index-DeXyQXgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRtsvWdt.js";import"./addCustomCSSWithScoping-BMQmLAx8.js";import"./index-DcEck9MJ.js";import"./information-CQ3_UNon.js";import"./sys-enter-2-04wFErlJ.js";import"./alert-TTaxVgBW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIhT2n-D.js";import"./delete-SjnFcxET.js";import"./settings-C0lq9GEs.js";import"./NoData-DfBjPnbb.js";import"./IllustratedMessage-CXdSvR4a.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-xMjYb9KY.js";import"./index-CpiZNEne.js";import"./index-DQXIYNyl.js";import"./slim-arrow-down-GZWBJmnW.js";import"./Input-C10NYIPu.js";import"./ResponsivePopoverCommon.css-CPXMLCds.js";import"./ValueStateMessage.css-69Ktf8Dg.js";import"./Suggestions.css-DN6X2W_Y.js";import"./ListBoxItemGroupTemplate-B5AqpDrM.js";import"./ComboBoxItemGroup-j1Qew58i.js";import"./ListItemBaseTemplate-BsAW94PE.js";import"./Token-DC4trEDg.js";import"./ScrollEnablement-vDfjB2It.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BmumZdm7.js";import"./ToggleButton-C4VP5bTt.js";import"./SuggestionItem-IO39S43j.js";import"./index-B94XsNA0.js";import"./Option-BaLD8Fma.js";import"./index-NWr0Tsrk.js";import"./SegmentedButton-X1XX7xUF.js";import"./index-C_c4Byeq.js";import"./Select-9rIpwA3F.js";import"./InvisibleMessage-CgykMR3a.js";import"./slim-arrow-down-t7AVMtWo.js";import"./index-DQKXzwtk.js";import"./index-D9vcEjIT.js";import"./index-MnZkDyaG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ynF8pjf8.js";import"./group-2-Detpstok.js";import"./sort-descending-B0qjzB_P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_g-vZKh.js";import"./utils-LOEo2xLm.js";import"./index-GNYcE7dh.js";import"./index-DXQ56gFw.js";import"./index-BZhKH3An.js";import"./navigation-down-arrow-B33glP6f.js";import"./navigation-right-arrow-CD5NCtjH.js";import"./navigation-right-arrow-BNO-nAvK.js";import"./useCurrentTheme-DlkHXRgd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DVfnIZQS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0_rTS9I.js";import"./paper-plane-BCWKCy3u.js";import"./index-DZMzSe-F.js";import"./less-2TELAs2h.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
