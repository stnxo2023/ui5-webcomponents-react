import{j as e}from"./iframe-mZIFexBi.js";import{useMDXComponents as n}from"./index-CSeyhL4L.js";import{I as r,F as s}from"./CommandsAndQueries-_DqxABXw.js";import{M as l,C as a}from"./blocks-pMMBqTak.js";import"./Tag-C5S5wO6X.js";import"./index-CY-KcLEe.js";import"./copy-CK4YnSbS.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BoAMcLKN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bym-t_ma.js";import"./index-BFs_s1ec.js";import"./index-CPook487.js";import"./Link-Dky_yGkw.js";import"./index-BbeYDVUM.js";import"./index-DCVKeCrB.js";import"./index-B61-jGoN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9FjHI5t.js";import"./addCustomCSSWithScoping-BJ-ZUtqt.js";import"./index-DbDxOjYs.js";import"./information-CuCRdO66.js";import"./sys-enter-2-Da-bg0qX.js";import"./alert-4bZr7bHx.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-8CMZVnD3.js";import"./delete-DgxKkLgT.js";import"./settings-CyhNrSEc.js";import"./NoData-CX0o0XVo.js";import"./IllustratedMessage-Dz80uH_8.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-bMeRj9cL.js";import"./index--VBMnPTW.js";import"./index-BY9PhD7r.js";import"./slim-arrow-down-CoGBvzbB.js";import"./Input-DjI1lAlw.js";import"./ResponsivePopoverCommon.css-caZWKg7m.js";import"./ValueStateMessage.css-ZpzMuhyf.js";import"./Suggestions.css-BNm2UgCq.js";import"./ListBoxItemGroupTemplate-BHiiI4XH.js";import"./ComboBoxItemGroup-DuYnLx9L.js";import"./ListItemBaseTemplate-Bo0wwbfF.js";import"./Token-BepZXm1A.js";import"./ScrollEnablement-C8KKYJfQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BsmNnGjy.js";import"./ToggleButton-PXrRdKUI.js";import"./SuggestionItem-DBDH_Z95.js";import"./index-BeLlboZI.js";import"./Option-DS0ajgcB.js";import"./index-D2shRfFO.js";import"./SegmentedButton-gpHzBIZT.js";import"./index-BilcGZ4z.js";import"./Select-BbAKcpZr.js";import"./InvisibleMessage-D8WcmxR1.js";import"./slim-arrow-down-C4kKcs0A.js";import"./index-ClKkYnAD.js";import"./index-BDLJAHfH.js";import"./index-Bdr-0gsP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DmZ5vjU1.js";import"./group-2-C25AltrU.js";import"./sort-descending-Baid0H05.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C63IWCLZ.js";import"./utils-KJEZQBk-.js";import"./index-C2MqkFzJ.js";import"./index-BjtYM8CZ.js";import"./index-BY87GbXm.js";import"./navigation-down-arrow-BYh6gvU2.js";import"./navigation-right-arrow-Bahnb797.js";import"./navigation-right-arrow-BsXFygcD.js";import"./useCurrentTheme-BuH74dbv.js";import"./IndicationColor-DVw-fSM_.js";import"./index-COLPdMln.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7fZVXrnl.js";import"./paper-plane-uFnaxlDc.js";import"./index-ClRWdTR1.js";import"./less-CfJ4xBPp.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
