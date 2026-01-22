import{j as e}from"./iframe-CuVq63aR.js";import{useMDXComponents as n}from"./index-0t9brk-b.js";import{I as r,F as s}from"./CommandsAndQueries-Ca8tTwEu.js";import{M as l,C as a}from"./blocks-Cc_3mMVm.js";import"./Tag-Dg3yp9Ne.js";import"./index-CzEXcp-Y.js";import"./copy-B33m91ys.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CQ8uPA3L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wXdy4JWU.js";import"./index-BxKmXxxw.js";import"./index-KhF7LlaL.js";import"./Link-CIBW5Nwu.js";import"./index-Bncw1rp-.js";import"./index-CTTCfriq.js";import"./index-CNebcKEn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmxSnjHn.js";import"./addCustomCSSWithScoping-C8i5UOAF.js";import"./index-B7_hFjeD.js";import"./information-DZp5RqnQ.js";import"./sys-enter-2-CNKv6pdA.js";import"./alert-7PGhDeFz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUTeCcsm.js";import"./delete-ctqT1k32.js";import"./settings-BlGasMPb.js";import"./NoData-B4qjQOP9.js";import"./IllustratedMessage-Dx5bOO0b.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-RTNt-sqx.js";import"./index-DNtyE7Tf.js";import"./index-CyQxDGbx.js";import"./slim-arrow-down-Df_1rhWQ.js";import"./Input-BPkYam4a.js";import"./ResponsivePopoverCommon.css-CoaP-B_2.js";import"./ValueStateMessage.css-CiGME_0H.js";import"./Suggestions.css-C6D57ItQ.js";import"./ListBoxItemGroupTemplate-Cnml-jV3.js";import"./ComboBoxItemGroup-Ck56pMKA.js";import"./ListItemBaseTemplate-B7HCXwDc.js";import"./Token-BoF8gI7v.js";import"./ScrollEnablement-DzyyEcpH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DVdmxQUQ.js";import"./ToggleButton-vxPiqrWZ.js";import"./SuggestionItem-D09qkYgU.js";import"./index-BtHyX5_Y.js";import"./Option-Dpfgd9IN.js";import"./index-BTZ1Q1Qt.js";import"./SegmentedButton-Dp0F9lUa.js";import"./index-CYXbTMeF.js";import"./Select-wajBJflJ.js";import"./InvisibleMessage-DX2fP_3y.js";import"./slim-arrow-down-4yhTg3ae.js";import"./index-FN0CAgw1.js";import"./index-DqqzPQVu.js";import"./index-QDr3UQtb.js";import"./index-BhS6UWMS.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ThOPmQi4.js";import"./group-2-DZoGw3jS.js";import"./sort-descending-D4HKH5sT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbRTpC6F.js";import"./utils-Dk_P20L2.js";import"./index-CtIA8VPH.js";import"./index-DXqJthz9.js";import"./index-DTgqJJJQ.js";import"./navigation-down-arrow-O_bSI2G2.js";import"./navigation-right-arrow-BX8UrvSq.js";import"./navigation-right-arrow-v_EVNqHP.js";import"./useCurrentTheme-v99UfhTF.js";import"./index-tYGt_G7s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqK0RzMa.js";import"./paper-plane-2lg_ymEl.js";import"./index-CR4SU2MA.js";import"./less-cuFYL3WR.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
