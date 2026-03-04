import{j as e}from"./iframe-BliOtBpf.js";import{useMDXComponents as n}from"./index-Cfm9mwpf.js";import{I as r,F as s}from"./CommandsAndQueries-BFQnO0Kc.js";import{M as l,C as a}from"./blocks-DFxqqk7r.js";import"./Tag-slUCA2Mk.js";import"./index-B1gTXVZK.js";import"./copy-Co-SMUUy.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-UaxsE2L5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CljUsgff.js";import"./index-DtASDt-o.js";import"./index-BpaxVzpl.js";import"./Link-AWzdE9bP.js";import"./index-B5gV3DVy.js";import"./index-D6Ss-oF4.js";import"./index-riDZyvDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BuCRse4K.js";import"./addCustomCSSWithScoping-CtbnqYJf.js";import"./index-Dq7D7J3c.js";import"./information-0hx7iK2K.js";import"./sys-enter-2-CKBXubjR.js";import"./alert-DPJIvRdz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CzSx9BSc.js";import"./delete-BAKYftsy.js";import"./settings--3ZxUOpw.js";import"./NoData-B5uAOIws.js";import"./IllustratedMessage-Dgh84RpM.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Bk2zxQjJ.js";import"./index-2GHHQCcG.js";import"./index-SPs9Bq6c.js";import"./slim-arrow-down-BaX0Om3C.js";import"./Input-BJthTOz5.js";import"./ResponsivePopoverCommon.css-m2t9TZaE.js";import"./ValueStateMessage.css-CdBoC1bH.js";import"./Suggestions.css-CtAAVjVZ.js";import"./ListBoxItemGroupTemplate-BwSthZB6.js";import"./ComboBoxItemGroup-BAlpXruZ.js";import"./ListItemBaseTemplate-DfgzIweD.js";import"./Token-WshlA1RE.js";import"./ScrollEnablement-VwJkenso.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bfo68tSl.js";import"./ToggleButton-B0wgBzO_.js";import"./SuggestionItem-Cx4QFGUe.js";import"./index-CCUcUAYq.js";import"./Option-DWUsGFP0.js";import"./index-D3hBYyPJ.js";import"./SegmentedButton-Dadeaudg.js";import"./index-BsDhDrjf.js";import"./Select-Dsi_WDA5.js";import"./InvisibleMessage-B2hidsMu.js";import"./slim-arrow-down-DODTVyKq.js";import"./index-CsWitsoB.js";import"./index-Bj3TIez2.js";import"./index-BHkeFt_0.js";import"./index-CRM_hxbu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlRoUKXb.js";import"./group-2-Wzqe8kOu.js";import"./sort-descending-BtwzdLhc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-304L1YOg.js";import"./utils-C4J9K8Pj.js";import"./index-ex6RM4xz.js";import"./index-BwzMcLPF.js";import"./index-ZYmLwwKJ.js";import"./navigation-down-arrow-B4INFMdI.js";import"./navigation-right-arrow-BpdCpvV-.js";import"./navigation-right-arrow-CVR_Dlxl.js";import"./useCurrentTheme-C0qBvptG.js";import"./index-CSnn3rsq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-nTnNpDkc.js";import"./paper-plane-CH-qxYcc.js";import"./index-DEa7pMZH.js";import"./less-CUNTC7tA.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
