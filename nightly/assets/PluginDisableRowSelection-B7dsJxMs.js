import{j as e}from"./iframe-DBm0KKUf.js";import{useMDXComponents as n}from"./index-Cb8BN12q.js";import{I as r,F as s}from"./CommandsAndQueries-CpqOMU0z.js";import{M as l,C as a}from"./blocks-FcKewvzz.js";import"./Tag-DHtv4MjB.js";import"./index-D7OJqnCE.js";import"./copy-CNODe6O-.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BLgNBJMA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_dJ2uG6.js";import"./index-DSRVWdNr.js";import"./index-4ENMwVth.js";import"./Link-Ct9C2jWR.js";import"./index-T96p6BIB.js";import"./index-DM0eg3qI.js";import"./index-Ccfulnyg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPyGpBqG.js";import"./addCustomCSSWithScoping-DI0oMdV8.js";import"./index-BAUdr3me.js";import"./information-BXDVlLxS.js";import"./sys-enter-2-B25DXxek.js";import"./alert-ia9fKkJ9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B_Jzu1HO.js";import"./delete-BY36aH4u.js";import"./settings-CQc9w4bD.js";import"./NoData-CViU0Ozk.js";import"./IllustratedMessage-MjiMC3xO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-eL9Z4FLY.js";import"./index-De7LfL69.js";import"./index-D_cxxf2Z.js";import"./slim-arrow-down-Cowwh0_-.js";import"./Input-Cfy0dJpQ.js";import"./ResponsivePopoverCommon.css-CRVvh9cv.js";import"./ValueStateMessage.css-C2gzUKxC.js";import"./Suggestions.css-DL6rQFj9.js";import"./ListBoxItemGroupTemplate-BZry8l0p.js";import"./ComboBoxItemGroup-CFPpIkre.js";import"./ListItemBaseTemplate-szCNoKvB.js";import"./Token-DTTQs5IV.js";import"./ScrollEnablement-BmlbbPDx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BCbp7Udb.js";import"./ToggleButton-Mf6uWEVu.js";import"./SuggestionItem-C7a_40Ak.js";import"./index-DynyRFQt.js";import"./Option-CiNmJ5BU.js";import"./index-BwSqZNPb.js";import"./SegmentedButton-BZBdQYL3.js";import"./index-DokMIoCV.js";import"./Select-BWNl-hA7.js";import"./InvisibleMessage-yauS0ttk.js";import"./slim-arrow-down-DTR_Gkm6.js";import"./index-BTj_7a8m.js";import"./index-BWmDHky_.js";import"./index-CvZtp7o3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BaMtSB4y.js";import"./group-2-DOmGtWHP.js";import"./sort-descending-hllpiI0c.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BuVBMWqW.js";import"./utils-CYtcnYeu.js";import"./index-D1sExh_N.js";import"./index-SQvWNwud.js";import"./index-CfFC_XPL.js";import"./navigation-down-arrow-CsEzXbPX.js";import"./navigation-right-arrow-Cdvo4nV_.js";import"./navigation-right-arrow-CbShz5Fd.js";import"./useCurrentTheme-BKGNtfIr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D2OeM_OL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DB-7ieif.js";import"./paper-plane-C7mdkPbA.js";import"./index-Cm-cbULR.js";import"./less-CYPnM2pk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
