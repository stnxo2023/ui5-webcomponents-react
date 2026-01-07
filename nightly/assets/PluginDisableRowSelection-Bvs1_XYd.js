import{j as e}from"./iframe-DAr0L7Ho.js";import{useMDXComponents as n}from"./index-BXrVHVZ0.js";import{I as r,F as s}from"./CommandsAndQueries-BeoYsWXv.js";import{M as l,C as a}from"./blocks-n6i-MeAx.js";import"./Tag-D2SjXRRM.js";import"./index-BGz6B31k.js";import"./copy-C6zsdfpy.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C9SbKhrV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M443-WMN.js";import"./index-BtwPOFH6.js";import"./index-C9NDTaZE.js";import"./Link-QVFDyIvP.js";import"./index-Dnii_wG6.js";import"./index-DrSpdpj3.js";import"./index-BaCg4RzE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqKvYjZH.js";import"./addCustomCSSWithScoping-C9FZ5V1h.js";import"./index-Cs5MEWFI.js";import"./information-C8Iia5pL.js";import"./sys-enter-2-DFDqDf9l.js";import"./alert-CWzLh45M.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vwvMnJ1M.js";import"./delete-BrugbK3m.js";import"./settings-CLh5qR-P.js";import"./NoData-CtmD2qQW.js";import"./IllustratedMessage-CsWaV4UX.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-Df7CNS72.js";import"./index-D3xQZHsc.js";import"./index-DSQJdXON.js";import"./slim-arrow-down-nCdA9ato.js";import"./Input-FYQ1lVZC.js";import"./ResponsivePopoverCommon.css-B_B3XVCO.js";import"./ValueStateMessage.css-BKph1edC.js";import"./Suggestions.css-B5wtwLdE.js";import"./ListBoxItemGroupTemplate-CToQv3CG.js";import"./ComboBoxItemGroup-K7uaKsRv.js";import"./ListItemBaseTemplate-z4dCCnJ_.js";import"./Token-BwpnemjP.js";import"./ScrollEnablement-BCyvLKHN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B0DQtofr.js";import"./ToggleButton-D5V4_j9v.js";import"./SuggestionItem-BjLJwrjn.js";import"./index-KG7JmM-m.js";import"./Option-kFmvtdj7.js";import"./index-DcDEIoyS.js";import"./SegmentedButton-CtPD7--4.js";import"./index-qAMqYJh8.js";import"./Select-BBSIqCO7.js";import"./InvisibleMessage-B7Fzvrpv.js";import"./slim-arrow-down-CmpYS2rT.js";import"./index-DGrjxxz-.js";import"./index-BVhiHYP4.js";import"./index-B4_IFOpM.js";import"./index-BUYWOW0O.js";import"./IconDesign-DXd8PPVF.js";import"./filter-M721LxgO.js";import"./group-2-CK-kp2Q-.js";import"./sort-descending-DI7NHhBm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CaWLfx7-.js";import"./utils-CBU--jiJ.js";import"./index-C8mXVD-G.js";import"./index-DApcbHtK.js";import"./index-FvIchgpB.js";import"./navigation-down-arrow-bmtoD8GV.js";import"./navigation-right-arrow-DwuLZ8mF.js";import"./navigation-right-arrow-FbjwtCoS.js";import"./useCurrentTheme-BvDyIKbt.js";import"./index-DJzsGgTL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiIhYZmc.js";import"./paper-plane-BqYVZpon.js";import"./index-CDbXcF1o.js";import"./less-CxH7033X.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
