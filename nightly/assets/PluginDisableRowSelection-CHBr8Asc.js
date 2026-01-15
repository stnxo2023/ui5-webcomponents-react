import{j as e}from"./iframe-DCh7S_7o.js";import{useMDXComponents as n}from"./index-CQ2Rgf0f.js";import{I as r,F as s}from"./CommandsAndQueries-BHuSnwTn.js";import{M as l,C as a}from"./blocks-DmZmqlp_.js";import"./Tag-CZuGcFNN.js";import"./index-C5sgOYh1.js";import"./copy-BrUTFvSK.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dyg4late.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvoAW6NG.js";import"./index-BwuMWpwU.js";import"./index-BzGBt6gL.js";import"./Link-DOaKYpM4.js";import"./index-CqXebPST.js";import"./index-CKcNqeBZ.js";import"./index-Gt-7HKkD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDzt8G5a.js";import"./addCustomCSSWithScoping-DaHSAyiF.js";import"./index-gCdJvzAZ.js";import"./information-FYwlptxJ.js";import"./sys-enter-2-CNa4r-Sw.js";import"./alert-Bj_hkuex.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUMFQ1pn.js";import"./delete-D5M82eeI.js";import"./settings-D-G-hMFI.js";import"./NoData-Cks1g_4P.js";import"./IllustratedMessage-c9qO6qKJ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BhckPa9Q.js";import"./index-5XMRhuzg.js";import"./index-BAgLClg3.js";import"./slim-arrow-down-D91T-40j.js";import"./Input-LTgloMqk.js";import"./ResponsivePopoverCommon.css-YvTmosB3.js";import"./ValueStateMessage.css-_40RyXNK.js";import"./Suggestions.css-CEeo2on1.js";import"./ListBoxItemGroupTemplate-8cMH_8Hg.js";import"./ComboBoxItemGroup-wv4ICvd4.js";import"./ListItemBaseTemplate-B1GyPNZx.js";import"./Token-CxvB1hc0.js";import"./ScrollEnablement-CHt3xTrM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D-7OIxnD.js";import"./ToggleButton-CWn-VFiI.js";import"./SuggestionItem-1WqpyGaM.js";import"./index-DQ_ZwByO.js";import"./Option-Bd427Odz.js";import"./index-CYDuPw7n.js";import"./SegmentedButton-MFLETAjB.js";import"./index-CG2oTHho.js";import"./Select-DgXiFLA1.js";import"./InvisibleMessage-CO-uxLEE.js";import"./slim-arrow-down-N5l622ic.js";import"./index-FRjNpllp.js";import"./index-CkoxQ7YT.js";import"./index-BaU_AFbL.js";import"./index-D-grjYU9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CuMi9SwU.js";import"./group-2-JRco5MZe.js";import"./sort-descending-B05TUdbs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_tQWfdMG.js";import"./utils-BHbbXcFh.js";import"./index-BF5blqws.js";import"./index-CTOIsb5D.js";import"./index-JhMtSdTx.js";import"./navigation-down-arrow-DlTIQ6fX.js";import"./navigation-right-arrow-Cca6wH2s.js";import"./navigation-right-arrow-VnZvrXIO.js";import"./useCurrentTheme-Dna0LUjC.js";import"./index-DnXcPtid.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0YNVX7D.js";import"./paper-plane-DoMiy80N.js";import"./index-NjhBYZF2.js";import"./less-DQi8Ps2m.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
