import{j as e}from"./iframe-BWTquNFU.js";import{useMDXComponents as n}from"./index-CkXQL6rW.js";import{I as r}from"./CommandsAndQueries-Cu22SJgH.js";import{M as s,C as l}from"./blocks-24keuhPe.js";import"./Tag-DhoajqAo.js";import"./index-B59i8xiW.js";import"./copy-iNwkfzwy.js";import{F as a}from"./Footer-BPNOTf-P.js";import"./PageNotFound-CJcyxQek.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CceKJBUk.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BecYEhoc.js";import"./index-BTohTOow.js";import"./index-scscec-x.js";import"./index-CKCv8CV3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Byoi_UeP.js";import"./addCustomCSSWithScoping-DP3CaadD.js";import"./index-ChJmkZbc.js";import"./index-NVW8xIV5.js";import"./index-kSfV8vRJ.js";import"./information-DMtPZuOJ.js";import"./sys-enter-2-C7vs2MPC.js";import"./alert-CcklZ67u.js";import"./index-DVrCMdXJ.js";import"./Illustrations-CJfJJGnG.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B6ivdHEj.js";import"./delete-BNE5XMIg.js";import"./settings-CGivgX1w.js";import"./NoData-CwgA4KNO.js";import"./NoFilterResults-CjGZNsJH.js";import"./index-7QDuP57_.js";import"./IllustratedMessage-KAkdjXyB.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BTVzNzNo.js";import"./Input-EE71Gmfs.js";import"./ResponsivePopoverCommon.css-BbZHRZZG.js";import"./ValueStateMessage.css-CUwbWuU7.js";import"./Suggestions.css-FQe1Xc9l.js";import"./ListBoxItemGroupTemplate-DAbpQNBX.js";import"./ComboBoxItemGroup-uxvAKKGS.js";import"./ListItemBaseTemplate-BRrEqjCC.js";import"./Token-DxQtXUKH.js";import"./ScrollEnablement-BoYZgYHz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DbGrkhZV.js";import"./ToggleButton-DBro7jvb.js";import"./multiselect-all-UT7N0_Ik.js";import"./SuggestionItem-CUIZagcj.js";import"./index-cRHDVvDp.js";import"./Option-IvW7tMmY.js";import"./index-C0JhBXt8.js";import"./SegmentedButton-BRJfaiG-.js";import"./index-BEM4UPY5.js";import"./Select-CL4tjDW6.js";import"./InvisibleMessage-D7OVBpmG.js";import"./index-Byo4t2sh.js";import"./index-C8s3OvV9.js";import"./index-C99f75Vc.js";import"./index-B1xXM3b0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlTD91fV.js";import"./group-2-C6DMt6zv.js";import"./sort-descending-D1j_C10r.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcsrfPcf.js";import"./utils-HKL5q2BK.js";import"./index-Bw8aKIth.js";import"./index-BOJiPgTr.js";import"./index-CiXNavjP.js";import"./navigation-down-arrow-BnFi5ZgR.js";import"./navigation-right-arrow-KPC1gtG0.js";import"./navigation-right-arrow-C9M9ERbI.js";import"./useCurrentTheme-DeEojqvR.js";import"./index-C_SzIttf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D1j5P2oj.js";import"./paper-plane-Dnn16QvC.js";import"./index-C8RmX3Qo.js";import"./less-rIvjl3NN.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
