import{j as e}from"./iframe-4UX9zVtN.js";import{useMDXComponents as n}from"./index-BBCkKRvO.js";import{I as r,F as s}from"./CommandsAndQueries-DudJ8lrA.js";import{M as l,C as a}from"./blocks-BFxvjNAv.js";import"./Tag-B3FvlNgH.js";import"./index-BXHIuf-D.js";import"./copy-Cyt5Uff4.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BeOdInDA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-S5ZW1bjA.js";import"./index-CXoNptYK.js";import"./index-DctXwSyI.js";import"./Link-fA-SeXAj.js";import"./index-C3GdV3vE.js";import"./index-De4g9Au_.js";import"./index-DnrxmRVZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-rUq1jEzN.js";import"./addCustomCSSWithScoping-DCDZu8w8.js";import"./index-oGM8b9YF.js";import"./information-WWzzOZjz.js";import"./sys-enter-2-CaiZT1Nw.js";import"./alert-G68zeMJP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BFQW1jvL.js";import"./delete-CPKq1-iv.js";import"./settings-BeAaSNnX.js";import"./NoData-CU3h5MDZ.js";import"./IllustratedMessage-gFd3OmYv.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-ZSvcbIjO.js";import"./index-QNs_CVCy.js";import"./index-BhSpDM5B.js";import"./slim-arrow-down-BheOSzby.js";import"./Input-CtYIRUY4.js";import"./ResponsivePopoverCommon.css-D8f7fYw-.js";import"./ValueStateMessage.css-BaAl7IoW.js";import"./Suggestions.css-BO3NfIZR.js";import"./ListBoxItemGroupTemplate-DmypcSPh.js";import"./ComboBoxItemGroup-tnGGzqCQ.js";import"./ListItemBaseTemplate-qK1e_MJK.js";import"./Token-BUnyf5To.js";import"./ScrollEnablement-0B710n07.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CK8Tux93.js";import"./ToggleButton-CN__x2LS.js";import"./SuggestionItem-ChOawdH9.js";import"./index-Bsid_d0h.js";import"./Option-BzI4AWst.js";import"./index-BcgU9rpx.js";import"./SegmentedButton-BNYfI6jW.js";import"./index-BBRP-eLa.js";import"./Select-BflInANe.js";import"./InvisibleMessage-D3fa-sIT.js";import"./slim-arrow-down-6GOcwo6b.js";import"./index-Bjl35UV4.js";import"./index-CodV0zr0.js";import"./index-Dc1dnONs.js";import"./index-CPXil7Dy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BV09TBnF.js";import"./group-2-tHCPmnSd.js";import"./sort-descending-6ECAK0fQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7pVLkOw.js";import"./utils-BL-JB8rb.js";import"./index-18NioiXD.js";import"./index-CTTeQqwG.js";import"./index-B9dyUeRS.js";import"./navigation-down-arrow-BFC6z2qR.js";import"./navigation-right-arrow-D7uahuKZ.js";import"./navigation-right-arrow-s6C2P9I8.js";import"./useCurrentTheme-9YePhqUt.js";import"./index-BFekAKgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bs2Ad4ZO.js";import"./paper-plane-DkaqpPYC.js";import"./index-DiVVQKHa.js";import"./less-jLdy7f8K.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
