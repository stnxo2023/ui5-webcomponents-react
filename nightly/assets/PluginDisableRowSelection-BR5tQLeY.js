import{j as e}from"./iframe-CGE6jX6t.js";import{useMDXComponents as n}from"./index-CnlF4PpM.js";import{I as r}from"./CommandsAndQueries-D_JGI6Ia.js";import{M as s,C as l}from"./blocks-C1wugZAv.js";import"./Tag-BT7c2k9t.js";import"./index-O5K3XRBn.js";import"./copy-ByAfyVz0.js";import{F as a}from"./Footer-BebX2FrJ.js";import"./PageNotFound-gkdNug7A.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DN55SoRt.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B734PLKt.js";import"./index-D1hVPzQS.js";import"./index-WD-xjM3p.js";import"./index-DuWDlj0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jWRCnrak.js";import"./addCustomCSSWithScoping-Bg1A5NWS.js";import"./index-CMs90z2F.js";import"./index-D4AJb6hG.js";import"./index-Bx2-sARl.js";import"./information-DjCg2NR8.js";import"./sys-enter-2-WI9s45tq.js";import"./alert-DkCV9tpB.js";import"./index-bjWm1Qbv.js";import"./Illustrations-DcoINpXf.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BdAOa6pX.js";import"./delete-DVSEwasX.js";import"./settings-DyAuU0nR.js";import"./NoData-BsxYtnRh.js";import"./NoFilterResults-C4DrdCVU.js";import"./index-CoW4a81M.js";import"./IllustratedMessage-Dlxr7mI5.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-lo9U6rw5.js";import"./Input-WMBW16LC.js";import"./ResponsivePopoverCommon.css-BdAey9nW.js";import"./ValueStateMessage.css-CXantPrh.js";import"./Suggestions.css-C3jx0r5H.js";import"./ListBoxItemGroupTemplate-CmwMoQVG.js";import"./ComboBoxItemGroup-Bc-DIORN.js";import"./ListItemBaseTemplate-Dx7gl5aW.js";import"./Token-CIFgetRy.js";import"./ScrollEnablement-CMpF8f9q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dve_L83D.js";import"./ToggleButton-BmsIAL6q.js";import"./multiselect-all-C0EP75IP.js";import"./SuggestionItem-DkZnmDv0.js";import"./index-CUSQ5hC_.js";import"./Option-dcd03uYH.js";import"./index-CTUBFWCz.js";import"./SegmentedButton-d7mrBJIZ.js";import"./index-DG4Bts7Y.js";import"./Select-BMfjDvRC.js";import"./InvisibleMessage-DG05ioDr.js";import"./index-DGZZNJ5p.js";import"./index-D0Lm4r4_.js";import"./index-DFgUGNnk.js";import"./index-BF-516Y4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-KLz0gUBW.js";import"./group-2-5QqJEoZA.js";import"./sort-descending-ghxeytqc.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CiV4PMwH.js";import"./utils-BLUFONTL.js";import"./index-gxg4Sry9.js";import"./index-BwLmagC2.js";import"./index-DouXrx1j.js";import"./navigation-down-arrow-EEiViiJ7.js";import"./navigation-right-arrow-DUtm-zLP.js";import"./navigation-right-arrow-DkDBuRJY.js";import"./useCurrentTheme-Ci3WGaWO.js";import"./index-CSbZISIN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sj-cJ_3l.js";import"./paper-plane-BxyaPnuX.js";import"./index-B-5DXRiN.js";import"./less-oZYALZR_.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
