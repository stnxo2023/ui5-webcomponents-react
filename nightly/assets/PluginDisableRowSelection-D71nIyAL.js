import{j as e}from"./iframe-D-ZP0dY4.js";import{u as n,M as r,C as s}from"./blocks-DdKopPSC.js";import{I as l}from"./CommandsAndQueries-BDnj74c9.js";import"./Tag-CNlwwDmZ.js";import"./index-C04kZKw9.js";import"./copy-HW_Kxlr2.js";import{F as a}from"./Footer-BLTkp7nE.js";import"./PageNotFound-DiPPX7Ze.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CBJpaNlu.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-06g1SNw0.js";import"./index-CF2Hkn6J.js";import"./index-BAothMF0.js";import"./index-eZWdMAeg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxeCNWRQ.js";import"./addCustomCSSWithScoping-DSa3TmU8.js";import"./index-BAH7VHrp.js";import"./index-U3Dsw_H6.js";import"./index-Dx3fp6V7.js";import"./information-BKIP_Ra_.js";import"./sys-enter-2-vX0Cm-qe.js";import"./alert-Bu79oBCI.js";import"./index-Tnz3nQrD.js";import"./Illustrations-DQsCRA8v.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYYGY4rz.js";import"./delete-DE6k9FGx.js";import"./settings-DXtL0O5a.js";import"./NoData-osmgknU-.js";import"./NoFilterResults-UTGDt4U0.js";import"./index-8Ug6H22Q.js";import"./IllustratedMessage-oHRK-VY8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dg-UkN-_.js";import"./Input-BOgGLefA.js";import"./ResponsivePopoverCommon.css-Dq17JFm7.js";import"./ValueStateMessage.css-CBH2VacG.js";import"./Suggestions.css-BN8N-6EC.js";import"./ListBoxItemGroupTemplate-C8lKTN_F.js";import"./ComboBoxItemGroup-q2JQ_mwf.js";import"./ListItemBaseTemplate-BFmgJ1Et.js";import"./Token-1FPkMzEf.js";import"./ScrollEnablement-DYOTGKWX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ByPNXDkr.js";import"./ToggleButton-D3qWXGLv.js";import"./multiselect-all-BPnmvnbF.js";import"./SuggestionItem-FyzOwRj6.js";import"./index-DsejTE-e.js";import"./Option-CY78tL2o.js";import"./index-vIzRardY.js";import"./SegmentedButton-ClYWnXbK.js";import"./index-DR3J50VQ.js";import"./Select-BtxIe5EO.js";import"./InvisibleMessage-D_du7Nj7.js";import"./index-CT1QofI3.js";import"./index-Q4CSHOMB.js";import"./index-DKz3p5bK.js";import"./index-Boazbh6I.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D4gZdwex.js";import"./group-2-J8HA7VvZ.js";import"./sort-descending-BkEITgyL.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B4X1hHJn.js";import"./utils-CIzQ8GjY.js";import"./index-C63PUtVf.js";import"./index-qGydiAeZ.js";import"./index-D2n2OSAj.js";import"./navigation-down-arrow-CrAOUUYj.js";import"./navigation-right-arrow-D0CmuphO.js";import"./navigation-right-arrow-B4vNvT0x.js";import"./useCurrentTheme-CSv-SoqH.js";import"./index-D-CbqEME.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuCIUNGJ.js";import"./paper-plane-C24W3EaW.js";import"./index-BRgqeqc7.js";import"./less-BGbU6Atk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(l,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,e.jsx(s,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function ze(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{ze as default};
