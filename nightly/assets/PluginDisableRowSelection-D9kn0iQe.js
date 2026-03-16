import{j as e}from"./iframe-B7xuoxGk.js";import{useMDXComponents as n}from"./index-D6aSzRGN.js";import{I as r}from"./CommandsAndQueries-DKcdQNlV.js";import{M as s,C as l}from"./blocks-DZ0Vo0vM.js";import"./Tag-CtaADOFc.js";import"./index-BzZxDoNe.js";import"./copy-h55QeB4j.js";import{F as a}from"./Footer--uD18Qhj.js";import"./PageNotFound-DygNwEfd.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-_V-bjxAy.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-YW7Wqeu4.js";import"./index-wxY5XpWW.js";import"./index-D_A15Zs0.js";import"./index-Bimscpqo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZFeJY_e.js";import"./addCustomCSSWithScoping-1uVBaclk.js";import"./index-BXMXe_Dr.js";import"./index-B_T64Hn2.js";import"./index-DmGPBpXp.js";import"./information-BW_uN0gP.js";import"./sys-enter-2-BoXj1fRr.js";import"./alert-Cl-xvHRs.js";import"./index-B7nFcBs2.js";import"./Illustrations-w0lfALHe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BMY85eGk.js";import"./delete-BZYoynTQ.js";import"./settings-BT8RMABZ.js";import"./NoData-DCXoweTu.js";import"./NoFilterResults-CTa6GhkU.js";import"./index-Btar0bdN.js";import"./IllustratedMessage-BMgQN3i0.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CmLLJCw5.js";import"./Input-eFb_xp2M.js";import"./ResponsivePopoverCommon.css-CyKUqKvQ.js";import"./ValueStateMessage.css-Df99lQxg.js";import"./Suggestions.css-CBArPh6-.js";import"./ListBoxItemGroupTemplate-Ck1L8wBF.js";import"./ComboBoxItemGroup-DBiEhs-6.js";import"./ListItemBaseTemplate-CdxCA_p4.js";import"./Token-7wluFBu-.js";import"./ScrollEnablement-GVTwnxGd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqEt74g6.js";import"./ToggleButton-B0icUcy1.js";import"./multiselect-all-D1l0l24Z.js";import"./SuggestionItem-CjJX54Hb.js";import"./index-Br4lwsUM.js";import"./Option-D2JWHiJc.js";import"./index-V-jrGxWl.js";import"./SegmentedButton-DtXKlJOH.js";import"./index-DT47A1KM.js";import"./Select--WbYe-2b.js";import"./InvisibleMessage-eHM0y0K2.js";import"./index-BI9cMLrH.js";import"./index-vwowG4sE.js";import"./index-moYCi4PG.js";import"./index-uphkaPTP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D9JfcWH8.js";import"./group-2-CCjKuAg3.js";import"./sort-descending-CqVtGwCo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpdt6Cf.js";import"./utils-tHXepICV.js";import"./index-DFh3r5xg.js";import"./index-CzWHYSkB.js";import"./index-CiGgrWQa.js";import"./navigation-down-arrow-DcCyevym.js";import"./navigation-right-arrow-tle3a_t5.js";import"./navigation-right-arrow-BmYFt5sl.js";import"./useCurrentTheme-D-RTnzmW.js";import"./index-8jzzOxCB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D8gGRGzd.js";import"./paper-plane-BgRj4P-o.js";import"./index-RI2zEDO5.js";import"./less-Cwfab_yz.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
