import{j as e}from"./iframe-eEgnsybz.js";import{useMDXComponents as n}from"./index-KUh3EncO.js";import{I as r,F as s}from"./CommandsAndQueries-Bkg2fbFD.js";import{M as l,C as a}from"./blocks-C6o1VobD.js";import"./Tag-CyCgeEFX.js";import"./index-DlBhGBWU.js";import"./copy-7FG8PsWo.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-5zkjYXUy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9oALoTs.js";import"./index-BwSVcTHk.js";import"./index-0PjuM5S8.js";import"./Link-BuGrrtP2.js";import"./index-yhFX9aug.js";import"./index-Dc3QGU-g.js";import"./index-CGhTEkOT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CH2VPx4y.js";import"./addCustomCSSWithScoping-DKRk5X62.js";import"./index-Pa5s-fex.js";import"./information-CKacNM7A.js";import"./sys-enter-2-D0fhmdQp.js";import"./alert-CxkpN3m7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CzaZCJnb.js";import"./delete-irFC0K_n.js";import"./settings-D6sE3rZn.js";import"./NoData-CEs0myHh.js";import"./IllustratedMessage-BX1XofDb.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Ceffab9D.js";import"./index-C7F47GNT.js";import"./index-r3V5CQu0.js";import"./slim-arrow-down-DZYetS2j.js";import"./Input-DKxPEOnV.js";import"./ResponsivePopoverCommon.css-CM05b5HY.js";import"./ValueStateMessage.css-qrxzD_3f.js";import"./Suggestions.css-CU6yhqWV.js";import"./ListBoxItemGroupTemplate-bJFFdWvz.js";import"./ComboBoxItemGroup-BirbcqPA.js";import"./ListItemBaseTemplate-CAjFk73p.js";import"./Token-B7VqEG9Z.js";import"./ScrollEnablement-Dj9e3xCo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bv5pHXMI.js";import"./ToggleButton-D2k4wWl7.js";import"./SuggestionItem-aqON_76G.js";import"./index-DhUt20lO.js";import"./Option-DUm3mIhb.js";import"./index-B2x2MP6X.js";import"./SegmentedButton-CDk8cxu9.js";import"./index-BWQjygaM.js";import"./Select-D9goYstD.js";import"./InvisibleMessage-2xnh5Mfi.js";import"./slim-arrow-down-DUTlQ5v8.js";import"./index-Du8qhg8T.js";import"./index-CdnhyucW.js";import"./index-B0W8XC3p.js";import"./index-DYImmnpQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJuRHVvc.js";import"./group-2-DNitl-KP.js";import"./sort-descending-BJx8GPj8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpWpj11z.js";import"./utils-CyuipnON.js";import"./index-DeVsfJce.js";import"./index-DXfAtOJv.js";import"./index-BIEBBMh8.js";import"./navigation-down-arrow-BDetjDEa.js";import"./navigation-right-arrow-SIiFeyVd.js";import"./navigation-right-arrow-U36zYERp.js";import"./useCurrentTheme-mfP2heJH.js";import"./index-BEbiu7Cw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dm7lVWDa.js";import"./paper-plane-iHPbU_pU.js";import"./index-BzLGb63M.js";import"./less-B0zSuI_N.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
