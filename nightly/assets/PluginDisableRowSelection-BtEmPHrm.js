import{j as e}from"./iframe-DE39xjY3.js";import{useMDXComponents as n}from"./index-B1qSHwoi.js";import{I as r,F as s}from"./CommandsAndQueries-wC1q0WhV.js";import{M as l,C as a}from"./blocks-Cj7tOVqz.js";import"./Tag-BcxJDVC2.js";import"./index-C8AzPoWi.js";import"./copy-SEjk-khs.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dm3vFAGq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dsw7NAug.js";import"./index-BNYAB6MW.js";import"./index-BytuhZWp.js";import"./Link-hO4SGyLs.js";import"./index-HOUf-EPf.js";import"./index-Di0pge-x.js";import"./index-Crm_KYfs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-k5eDoZ.js";import"./addCustomCSSWithScoping-DCdxMV4u.js";import"./index-BUS86rTR.js";import"./information-D52A35LG.js";import"./sys-enter-2-7R5MTao8.js";import"./alert-jxZm3lXE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdKgUR62.js";import"./delete-T1M_hPVY.js";import"./settings-XWWzFZWZ.js";import"./NoData-BNLEFYaI.js";import"./IllustratedMessage-0CDzNeqq.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-4G5p8MTf.js";import"./index-CqckHJYn.js";import"./index-BmDqxMXN.js";import"./slim-arrow-down-vZvcV55c.js";import"./Input-CDMm82xo.js";import"./ResponsivePopoverCommon.css-DaP0rv_w.js";import"./ValueStateMessage.css-Bvo1cNpH.js";import"./Suggestions.css-1EDkOxF1.js";import"./ListBoxItemGroupTemplate-CUQfeUJ-.js";import"./ComboBoxItemGroup-BIc4wSHj.js";import"./ListItemBaseTemplate-0o_W1vV3.js";import"./Token-quGRFBgA.js";import"./ScrollEnablement-hjYz1q63.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CEgmb2VH.js";import"./ToggleButton-B6AmBWfy.js";import"./SuggestionItem-CSHXkULE.js";import"./index-DuKoEI6Y.js";import"./Option-BmVldsJm.js";import"./index-GTGNu_hG.js";import"./SegmentedButton-aldcdMHp.js";import"./index-BBixzXs5.js";import"./Select-BgNYkp7a.js";import"./InvisibleMessage-Bo13I8mP.js";import"./slim-arrow-down-P7fnq_jn.js";import"./index-iZDIdJI7.js";import"./index-RO4633KM.js";import"./index-BcBVfEn1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B-mQ8wvX.js";import"./group-2-siU1eXmx.js";import"./sort-descending-3jJw3NoM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBKL-rtx.js";import"./utils-C2TjvMrQ.js";import"./index-BT2WMOZw.js";import"./index-uMqGW6va.js";import"./index-DtdnKfDC.js";import"./navigation-down-arrow-BajRWoAT.js";import"./navigation-right-arrow-DZoWocnv.js";import"./navigation-right-arrow-X0_-tw_X.js";import"./useCurrentTheme-CpMEMe1l.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D2kS9nAL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-rImD7_or.js";import"./paper-plane-DPstJvtB.js";import"./index-CPZM_tz3.js";import"./less-JTA9sx1u.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
