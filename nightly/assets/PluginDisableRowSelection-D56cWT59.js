import{j as e}from"./iframe-Bb0HmHnB.js";import{useMDXComponents as n}from"./index-Meo06HOS.js";import{I as r,F as s}from"./CommandsAndQueries-tR4iht-v.js";import{M as l,C as a}from"./blocks-CgyFha0p.js";import"./Tag-CkJgtMYU.js";import"./index-e-oHYPrA.js";import"./copy-ClXY_Ebg.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CVCqajEn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUHcje1a.js";import"./index-ujA-0uQD.js";import"./index-DRj5BOAv.js";import"./Link-Ctr6McPA.js";import"./index-DamhzNr0.js";import"./index-kXJ0csex.js";import"./index-DkF-cfFa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmK6tfuz.js";import"./addCustomCSSWithScoping-DZsYEWJZ.js";import"./index-CCkcOLyJ.js";import"./information-CuEP2--w.js";import"./sys-enter-2-BxgOL3Cz.js";import"./alert-CRFvm_h4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B3EdkcTs.js";import"./delete-DNvu7cli.js";import"./settings-X_qufnfv.js";import"./NoData-Be80XLqg.js";import"./IllustratedMessage-DD1_V1fS.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-YoedeCQZ.js";import"./index-CEumqWwt.js";import"./index-Ctco8NFr.js";import"./slim-arrow-down-BK6_kW2_.js";import"./Input-8EIzHHn6.js";import"./ResponsivePopoverCommon.css-CYHZGTr6.js";import"./ValueStateMessage.css-DQVkNKvB.js";import"./Suggestions.css-jL9cJ0bK.js";import"./ListBoxItemGroupTemplate-F9IXXChP.js";import"./ComboBoxItemGroup-rVDs3n5k.js";import"./ListItemBaseTemplate-DGXYw3IB.js";import"./Token-plZfxczM.js";import"./ScrollEnablement-CtICbC2N.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRloOdH2.js";import"./ToggleButton-CIurin5E.js";import"./SuggestionItem-wc2mHVyx.js";import"./index-BaTE6PUT.js";import"./Option-CpLfiC8k.js";import"./index-IAfope6S.js";import"./SegmentedButton-BNh0v1Zf.js";import"./index-D8FXkeK7.js";import"./Select-DIxLDO_Y.js";import"./InvisibleMessage-BuHDtcTe.js";import"./slim-arrow-down-DOc9_ecn.js";import"./index-CN5pxO6-.js";import"./index-DD32uJSt.js";import"./index-wp5LnE7o.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CG2Pz_ak.js";import"./group-2-DRBOUlKY.js";import"./sort-descending-pJBX6NsG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C4pQrK8W.js";import"./utils-DT171g7R.js";import"./index-BHDfFIKl.js";import"./index-COKyuEqS.js";import"./index-DnLo1BZO.js";import"./navigation-down-arrow-DQURBlhq.js";import"./navigation-right-arrow-BBRYGBWr.js";import"./navigation-right-arrow-DbJe2FI5.js";import"./useCurrentTheme-DeBv9RCX.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BllQlQx0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-fxo11iCx.js";import"./paper-plane-BLDEhHRM.js";import"./index-DgN_PFsx.js";import"./less-B_rvZNau.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
