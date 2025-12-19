import{j as e}from"./iframe-fnu3Vo41.js";import{useMDXComponents as n}from"./index-BSrpAODL.js";import{I as r,F as s}from"./CommandsAndQueries-Bopzu-n8.js";import{M as l,C as a}from"./blocks-BS5BROTL.js";import"./Tag-BiBlBJWE.js";import"./index-BbmVly28.js";import"./copy-Db06aovL.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-cEuR5nNv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SCFjt_Ga.js";import"./index-CJk9IgGL.js";import"./index-rPkavUv0.js";import"./Link-BLTuinuO.js";import"./index-BUdZGDL2.js";import"./index-C8EzOXR3.js";import"./index-DahYWRMR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2MON8lG.js";import"./addCustomCSSWithScoping-DzZplljN.js";import"./index-B7d1u9D1.js";import"./information-C4CUHJ6u.js";import"./sys-enter-2-Bq1R0WAk.js";import"./alert-xdJdEaU1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cg3qW77l.js";import"./delete-DmiOTRnw.js";import"./settings-zDmG-3im.js";import"./NoData-nQLO9EZ8.js";import"./IllustratedMessage-BXzbNCL1.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-DBeKPlkH.js";import"./index-Brwr5FUa.js";import"./index-BDJpTTku.js";import"./slim-arrow-down-XRKMzLPf.js";import"./Input-Detc7Ii6.js";import"./ResponsivePopoverCommon.css-CxPrgmxN.js";import"./ValueStateMessage.css-CQ4OVJ9G.js";import"./Suggestions.css-vM9OM1GI.js";import"./ListBoxItemGroupTemplate-BYeB1Cl_.js";import"./ComboBoxItemGroup-4jucO2i6.js";import"./ListItemBaseTemplate-FeG_oPAJ.js";import"./Token-DAQ1DS0x.js";import"./ScrollEnablement-WgQtsSmN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRTdZnQJ.js";import"./ToggleButton-57cIItv1.js";import"./SuggestionItem-C8mqfWho.js";import"./index-CX4U2Jek.js";import"./Option-DD3Zi9NK.js";import"./index-jyed2UIl.js";import"./SegmentedButton-gKY9F3pt.js";import"./index-BRftw348.js";import"./Select-lOtzZ3fx.js";import"./InvisibleMessage-Bg2OVWgo.js";import"./slim-arrow-down-DRNkvrF7.js";import"./index-D5Hq6_Re.js";import"./index-BhBUN7y5.js";import"./index-oA7Crhpd.js";import"./index-Cw1Aet_f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-h3NHKT.js";import"./group-2-DwY0Xc-S.js";import"./sort-descending-Bc55MwdY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bwnkn5xs.js";import"./utils-DYh0gtXT.js";import"./index-DYKo8bXl.js";import"./index-BPeyg5AZ.js";import"./index-BrR0l5NR.js";import"./navigation-down-arrow-B7W9-sHI.js";import"./navigation-right-arrow-D_oDOzWj.js";import"./navigation-right-arrow-B69jNS7a.js";import"./useCurrentTheme-BetgmMaZ.js";import"./index-q7ej9ehA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEjni14h.js";import"./paper-plane-DOa3jfws.js";import"./index-JCFhG4pE.js";import"./less-BaCzhisI.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
