import{j as e}from"./iframe-DLLHCOr5.js";import{useMDXComponents as n}from"./index-DJhuuP5S.js";import{I as r,F as s}from"./CommandsAndQueries-CaYUL-bi.js";import{M as l,C as a}from"./blocks-D_qB0yom.js";import"./Tag-CGNpKNva.js";import"./index-Cv7FhAKP.js";import"./copy-Cys4niF0.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C_Xeoikx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWbKcn7h.js";import"./index-Da6fGSa9.js";import"./index-DrM1gAbM.js";import"./Link-8v74zIQt.js";import"./index-A4gWreS6.js";import"./index-CpOm_QTG.js";import"./index-C8Oz3tPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI75F9lq.js";import"./addCustomCSSWithScoping-B4YqD5EP.js";import"./index-CfRl_je5.js";import"./information-CmFfgInF.js";import"./sys-enter-2-DHyR85OV.js";import"./alert-CdfvMLA2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dussxg8w.js";import"./delete-sg9kZ7wW.js";import"./settings-DMO8138H.js";import"./NoData-CNlEMyLx.js";import"./IllustratedMessage-CvqifGlG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DrzNpyj0.js";import"./index-Bwzn6FzT.js";import"./index-BvVGqagu.js";import"./slim-arrow-down-CdVgRYVm.js";import"./Input-Dujkp-iG.js";import"./ResponsivePopoverCommon.css-BSzQP8E5.js";import"./ValueStateMessage.css-RpMFN1vW.js";import"./Suggestions.css-DD57I6JF.js";import"./ListBoxItemGroupTemplate-B8PxB8_d.js";import"./ComboBoxItemGroup-CpB2o6WI.js";import"./ListItemBaseTemplate-CH4UuuJP.js";import"./Token-Bbru9m6C.js";import"./ScrollEnablement-Dc6bPMsH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CNuJB7qv.js";import"./ToggleButton-BvQG1Cyr.js";import"./SuggestionItem-CSPitdTc.js";import"./index-Bi8_wr8a.js";import"./Option-DP4TAxPx.js";import"./index-DgfU8C4H.js";import"./SegmentedButton-Cxyiwfcn.js";import"./index-BLApOYZ_.js";import"./Select-BcMsd1Hx.js";import"./InvisibleMessage-D48crmcJ.js";import"./slim-arrow-down-WuQVzVSs.js";import"./index-WosK8S_T.js";import"./index-D46dhIkG.js";import"./index-C58XlVcT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIBokY0Z.js";import"./group-2-COjXW71M.js";import"./sort-descending-v_uWiTl6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lil2fbr_.js";import"./utils-DVYbWfL1.js";import"./index-BSuhLTnR.js";import"./index-CHwyvDxc.js";import"./index-pyj4fbNH.js";import"./navigation-down-arrow-D-443grP.js";import"./navigation-right-arrow-DaMq1CEM.js";import"./navigation-right-arrow-jZ7_AnUt.js";import"./useCurrentTheme-Bw6oliQZ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BHpA8ui8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DDSow5dA.js";import"./paper-plane-sDJVh0wP.js";import"./index-CiP8FaDh.js";import"./less-DJz-Rwf2.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
