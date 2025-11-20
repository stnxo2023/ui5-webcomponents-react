import{j as e}from"./iframe-CJIrZBlB.js";import{useMDXComponents as n}from"./index-xKVU5ZCd.js";import{I as r,F as s}from"./CommandsAndQueries-C3g74-RT.js";import{M as l,C as a}from"./blocks-C-1O0LRm.js";import"./Tag-BNlwFAFY.js";import"./index-DmJ7zXRW.js";import"./copy-DR5Kv1Iv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Coh8XRhB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGOwz-CM.js";import"./index-YnpVhHMg.js";import"./index-CEkWgGTS.js";import"./Link-BElCP5h1.js";import"./index-BhZheF80.js";import"./index-DmwyQtvi.js";import"./index-BCwOIMZp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bf32rwnZ.js";import"./addCustomCSSWithScoping-CPo-hqqQ.js";import"./index-EdNUKN4_.js";import"./information-BaxJEMV7.js";import"./sys-enter-2-COh9WNy8.js";import"./alert-BkaLAKBd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BA0xOeEx.js";import"./delete-C9vBXGAH.js";import"./settings-BAZbIl4B.js";import"./NoData-D1WCCIr-.js";import"./IllustratedMessage-BSOmXBM5.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DvcJ3TrS.js";import"./index-2aQZOvza.js";import"./index-B5XNfqqK.js";import"./slim-arrow-down-CdpV3nE0.js";import"./Input-Btf27YOr.js";import"./ResponsivePopoverCommon.css-xGlWqU9B.js";import"./ValueStateMessage.css-MyCATZT_.js";import"./Suggestions.css-Cy-COfO3.js";import"./ListBoxItemGroupTemplate-DXkWU2-0.js";import"./ComboBoxItemGroup-CYzVMS6G.js";import"./ListItemBaseTemplate-C5F3HCqR.js";import"./Token-BNv4B9pp.js";import"./ScrollEnablement-CKbJdcjA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHoTFWQP.js";import"./ToggleButton-CFOd-MDd.js";import"./SuggestionItem-BI-IC1_F.js";import"./index-BOVwts_X.js";import"./Option-DuZb6gan.js";import"./index-DJqLFHqT.js";import"./SegmentedButton-D8Yf4_Qw.js";import"./index-BLHzNls7.js";import"./Select-D5EHVEMo.js";import"./InvisibleMessage-PB9O_FfW.js";import"./slim-arrow-down-BTXWHLy9.js";import"./index-CKVmIBse.js";import"./index-N6T3kPeD.js";import"./index-BPZe2Mw9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-mMtT2jHR.js";import"./group-2-De9ft9J6.js";import"./sort-descending-BIwXsoMH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DYDQ7rpc.js";import"./utils-CvOOfhDf.js";import"./index-DV5RwOKW.js";import"./index-Cfv_e0qb.js";import"./index-BKekFUxh.js";import"./navigation-down-arrow-B14ig-WM.js";import"./navigation-right-arrow-BtI2EckR.js";import"./navigation-right-arrow-CrzwDQrl.js";import"./useCurrentTheme-CJMp3CMu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dq6Z1nja.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bb4BnNpy.js";import"./paper-plane-BzrDh65i.js";import"./index-D9LH8SsC.js";import"./less-Cb2Bvewk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
