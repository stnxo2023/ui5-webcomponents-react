import{j as e}from"./iframe-UvPIdInY.js";import{useMDXComponents as n}from"./index-C_wnFVs3.js";import{I as r,F as s}from"./CommandsAndQueries-aWAd2RXn.js";import{M as l,C as a}from"./blocks-D0ZGQgrL.js";import"./Tag-IR_ETKFS.js";import"./index-D9ZFZ6F-.js";import"./copy-BE3LAxqE.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-NClPDdr6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-O5JzLw5N.js";import"./index-Ba89z5vW.js";import"./index-mim0XNOQ.js";import"./Link-BLS11L9W.js";import"./index-B0iNMIwQ.js";import"./index-CXKBVYRd.js";import"./index-Bvo9-fQy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNxf-Cq6.js";import"./addCustomCSSWithScoping-7EyTrlnL.js";import"./index-D_al-J9d.js";import"./information-BPTpUfW-.js";import"./sys-enter-2-CWNypIDi.js";import"./alert-CSWOQ1yD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNZebN0l.js";import"./delete-Bym_CuQ_.js";import"./settings-jDUCJDFQ.js";import"./NoData-CBn9s1P8.js";import"./IllustratedMessage-B1dE8UDr.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DZ3pxCsC.js";import"./index-DO7Ar4RD.js";import"./index-BkfsPSLU.js";import"./slim-arrow-down-CRxJDNVT.js";import"./Input-Pl2nYyWp.js";import"./ResponsivePopoverCommon.css-BoaZ2bBu.js";import"./ValueStateMessage.css-byYAWo4s.js";import"./Suggestions.css-PTQQr1HI.js";import"./ListBoxItemGroupTemplate-DxT2oqBg.js";import"./ComboBoxItemGroup-CLKsYy_r.js";import"./ListItemBaseTemplate-Dx_Z0YEo.js";import"./Token-COE2mfsf.js";import"./ScrollEnablement-CroMdMI1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-n4LvxKbk.js";import"./ToggleButton-BR5G7Qz8.js";import"./SuggestionItem-DktTsUPu.js";import"./index-CGnLWb7c.js";import"./Option-CjyU-APj.js";import"./index-Bd9J232t.js";import"./SegmentedButton-BAUcRfoB.js";import"./index-lHbjqnZy.js";import"./Select-CuymjFC1.js";import"./InvisibleMessage-BEHZLLTD.js";import"./slim-arrow-down-CVwAqm1x.js";import"./index-CGJMk3cv.js";import"./index-C5TAYWLJ.js";import"./index-DJo0pI-N.js";import"./index-C819hH3W.js";import"./IconDesign-DXd8PPVF.js";import"./filter-LoYXXqh9.js";import"./group-2-BDjs1tne.js";import"./sort-descending-C01UE9Ps.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXPBHWGL.js";import"./utils-CkuEKQeg.js";import"./index-DeIw8vVn.js";import"./index-CkiSiMgq.js";import"./index-QMPfoD9h.js";import"./navigation-down-arrow-1mpPyuVY.js";import"./navigation-right-arrow-DS2ZZyTy.js";import"./navigation-right-arrow-CMjLnqRz.js";import"./useCurrentTheme-1LGZD4iD.js";import"./index-xGgYhz7_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-58ApOM2Q.js";import"./paper-plane-HxkV1_E_.js";import"./index-Cu85sTvP.js";import"./less-BL-B7Va5.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
