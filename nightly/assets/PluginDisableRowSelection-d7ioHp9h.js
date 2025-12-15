import{j as e}from"./iframe-CMRYeg3m.js";import{useMDXComponents as n}from"./index-d3aogLFm.js";import{I as r,F as s}from"./CommandsAndQueries-DpsRc0ye.js";import{M as l,C as a}from"./blocks-B--XNN4Z.js";import"./Tag-DLJpwqrU.js";import"./index-X7c2uI6J.js";import"./copy-O4x8gwVx.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-NcPcxP0m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt6RwhRx.js";import"./index-BVsKPF1I.js";import"./index-csz7EJl3.js";import"./Link-Bxvjqypp.js";import"./index-PIXQ40x8.js";import"./index-Ca5PVHn4.js";import"./index-DVEpH7N4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-f1AMIobt.js";import"./addCustomCSSWithScoping-D9ZK4KgK.js";import"./index-TGfnZuTz.js";import"./information-2R4wAWn8.js";import"./sys-enter-2-h25AZJAc.js";import"./alert-EuMgWuer.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CbVSGA1k.js";import"./delete-1RwfcjcT.js";import"./settings-C5H9S65V.js";import"./NoData-CW7TgSmL.js";import"./IllustratedMessage-CGTR8uP0.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DAZPTCPU.js";import"./index-Dq8e-1UW.js";import"./index-GkNgVDAt.js";import"./slim-arrow-down-CmvdQO7m.js";import"./Input-2Nygg4-q.js";import"./ResponsivePopoverCommon.css-CqBO6fZ3.js";import"./ValueStateMessage.css-D51R__Qj.js";import"./Suggestions.css-C4L82WYT.js";import"./ListBoxItemGroupTemplate-C-1UKkDb.js";import"./ComboBoxItemGroup-C51CY9Wh.js";import"./ListItemBaseTemplate-qOSQ4Fnc.js";import"./Token-CoqMARg0.js";import"./ScrollEnablement-CHUJ-chc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ntD8YpfZ.js";import"./ToggleButton-DQ-1wEim.js";import"./SuggestionItem-BnR17Fyw.js";import"./index-BkexHsEY.js";import"./Option-DybeogHQ.js";import"./index-BHc0UMTZ.js";import"./SegmentedButton-Dezgm7cC.js";import"./index-BB_dZdK5.js";import"./Select-CAZuopb2.js";import"./InvisibleMessage-DVgio3fu.js";import"./slim-arrow-down-B1aQoQzR.js";import"./index-e5pHMgA1.js";import"./index-D_E6BFUk.js";import"./index-C1Exyb_f.js";import"./index-8DOGvRkG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cb9Y6gPy.js";import"./group-2-Cea3ryU3.js";import"./sort-descending-rBOFvsCA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-kdPvsB1k.js";import"./utils-CgBfQCBk.js";import"./index-jc4_TuNU.js";import"./index-BPBucl4y.js";import"./index-BewwXtWC.js";import"./navigation-down-arrow-BIKGPDMD.js";import"./navigation-right-arrow-gSRQ7cEs.js";import"./navigation-right-arrow-DT95PVm7.js";import"./useCurrentTheme-DhCErNXe.js";import"./index-QpjC2w_s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-G_RHHN41.js";import"./paper-plane-DEFfxY-Y.js";import"./index-DTxz0DV7.js";import"./less-B-qcBapJ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
