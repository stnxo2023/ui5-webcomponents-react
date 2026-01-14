import{j as e}from"./iframe-C8VIz1cN.js";import{useMDXComponents as n}from"./index-DF3oZ9DD.js";import{I as r,F as s}from"./CommandsAndQueries-D_HB_HX-.js";import{M as l,C as a}from"./blocks-D-v6PHKz.js";import"./Tag-Ce9kI3uB.js";import"./index-W-CFrWn1.js";import"./copy-ChBzOjSf.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D67qtk91.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CK3WOJt5.js";import"./index-IuSSn5Ye.js";import"./index-zu9Y-W0w.js";import"./Link-8iQqMH3R.js";import"./index-DVHGI5Hf.js";import"./index-CQjs21SR.js";import"./index-D5h2jV28.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VSpt3ox9.js";import"./addCustomCSSWithScoping-BS3ufxCI.js";import"./index-C3PbHa_S.js";import"./information-Hi7RSuvY.js";import"./sys-enter-2-CeqtRGpA.js";import"./alert-DDLVUdt7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZkSj7f1q.js";import"./delete-BWsK_VKH.js";import"./settings-qFLjUWC6.js";import"./NoData-DAp2SfGX.js";import"./IllustratedMessage-C9PLoYct.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-5yNQCTB4.js";import"./index-KVQaVP4s.js";import"./index-B_1MGVU1.js";import"./slim-arrow-down-B8cEuo7F.js";import"./Input-CLlxaT1e.js";import"./ResponsivePopoverCommon.css-DqUNlHfC.js";import"./ValueStateMessage.css-B6YWQgJF.js";import"./Suggestions.css-D8Fz_6MJ.js";import"./ListBoxItemGroupTemplate-1p3uTFvN.js";import"./ComboBoxItemGroup-QPslV6ya.js";import"./ListItemBaseTemplate-Cvw5qOo6.js";import"./Token-Dn9Ptobu.js";import"./ScrollEnablement-BP5kJ35e.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BNEO49EL.js";import"./ToggleButton-B3yNtFBm.js";import"./SuggestionItem-DmgDiYJY.js";import"./index-DoGJ2Ola.js";import"./Option-SB8hrn2i.js";import"./index-9KOufAY0.js";import"./SegmentedButton-Cf4ggFUf.js";import"./index-C4x3d45G.js";import"./Select-DBK-52OP.js";import"./InvisibleMessage-CFIf5I9Q.js";import"./slim-arrow-down-Dfenv5Nd.js";import"./index-Mp4sU-yf.js";import"./index-D3UqCt3j.js";import"./index-DrJkgPlY.js";import"./index-DmUuUpYf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dj5ZiNQS.js";import"./group-2-DgejC8Se.js";import"./sort-descending-BfqjNPRC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CQqved4K.js";import"./utils-DXFoFOug.js";import"./index-BXRJsEsZ.js";import"./index-BVP8su8Y.js";import"./index-Cnckaa8J.js";import"./navigation-down-arrow-BzgaFSOU.js";import"./navigation-right-arrow-BnQ-O_WA.js";import"./navigation-right-arrow-CKh4AD9z.js";import"./useCurrentTheme-BDG1chbv.js";import"./index-CJGGUyAX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-74j_AZIC.js";import"./paper-plane-DxPVmNKd.js";import"./index-Ds5HV4bS.js";import"./less-Cqps4E0U.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
