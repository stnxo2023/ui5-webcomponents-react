import{j as e}from"./iframe-CtwEriWb.js";import{useMDXComponents as n}from"./index-D-9u9m_4.js";import{I as r,F as s}from"./CommandsAndQueries-CD3VJPSk.js";import{M as l,C as a}from"./blocks-BFYACaFi.js";import"./Tag-Dp8ZKpct.js";import"./index-DaHRprUe.js";import"./copy-DmD13pno.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D0QPuNZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5ngcH8h.js";import"./index-Bt4v4M6X.js";import"./index-DDmWoC0P.js";import"./Link-D_PuN-3O.js";import"./index-zgbQGCMD.js";import"./index-C3uSNLH8.js";import"./index-wzivwl9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Lem94xA1.js";import"./addCustomCSSWithScoping-BBQMnugZ.js";import"./index-CeAyP2ez.js";import"./information-D5ukCsPX.js";import"./sys-enter-2-BPp72tdn.js";import"./alert-CQAVluiD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-6iJPqvCF.js";import"./delete-CHjtmoxe.js";import"./settings-CJBNJogN.js";import"./NoData-DjTzPZvK.js";import"./IllustratedMessage-8ePIRJ01.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D84oURGo.js";import"./index-Dz0HvdK8.js";import"./index-D9Ds84en.js";import"./slim-arrow-down-Dhjx46M4.js";import"./Input-Ey3vMJ2p.js";import"./ResponsivePopoverCommon.css-BlgaMAH_.js";import"./ValueStateMessage.css-BCs7SZVo.js";import"./Suggestions.css-Ca_9frEg.js";import"./ListBoxItemGroupTemplate-BmW_TD1a.js";import"./ComboBoxItemGroup-D9S-hZmS.js";import"./ListItemBaseTemplate-Dr-kfIJ7.js";import"./Token-C9kw3GgY.js";import"./ScrollEnablement-BQjS8DnP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRntQYAQ.js";import"./ToggleButton-Bf-SN9R0.js";import"./SuggestionItem-C8LVLSQl.js";import"./index-BF7FIsg5.js";import"./Option-D4al2hZS.js";import"./index-C_S6aGGA.js";import"./SegmentedButton-2upM-MiM.js";import"./index-DmNK5fut.js";import"./Select-BcqBMzHp.js";import"./InvisibleMessage-BGhqftdJ.js";import"./slim-arrow-down-C-J0cPgu.js";import"./index-DXGpSx7n.js";import"./index-C7Tf8xop.js";import"./index-Dx48TTVd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VUJDD7Ck.js";import"./group-2-CA3SU2Z-.js";import"./sort-descending-rYpXwTDK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DkX--lPA.js";import"./utils-Ctkq60uV.js";import"./index-DOMVXnxq.js";import"./index-BrR9oCjZ.js";import"./index-DayvUZ6b.js";import"./navigation-down-arrow-QusIkm2p.js";import"./navigation-right-arrow-B5vKiLuI.js";import"./navigation-right-arrow-D8wA0KPb.js";import"./useCurrentTheme-BTKV_yhV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HRFMiwNd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BtiMpto1.js";import"./paper-plane-DvM7Xu8p.js";import"./index-DXgoomGI.js";import"./less-Bi02PNvH.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
