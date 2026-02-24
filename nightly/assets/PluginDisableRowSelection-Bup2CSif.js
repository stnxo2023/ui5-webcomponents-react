import{j as e}from"./iframe-QhtzJj2F.js";import{useMDXComponents as n}from"./index-B3k8-Qk3.js";import{I as r,F as s}from"./CommandsAndQueries-CNzXbMAv.js";import{M as l,C as a}from"./blocks-DDXzLSfl.js";import"./Tag-CoHKtk39.js";import"./index-xaayqokA.js";import"./copy-CTybEZjn.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D1l57mWN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrUnaB-V.js";import"./index-CitIem69.js";import"./index-CiXnBbg7.js";import"./Link-Dwkzs0Lw.js";import"./index-DIdyzBPI.js";import"./index-DFHNTg_F.js";import"./index-D3ZVhFJ7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ltT42hBg.js";import"./addCustomCSSWithScoping-BX9baLRL.js";import"./index-Dg_bnA2j.js";import"./information-LovaJps-.js";import"./sys-enter-2-BHgG_M7J.js";import"./alert-CuMg9P4f.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNpHgrLb.js";import"./delete-BaT0QUP6.js";import"./settings-uhyiirG0.js";import"./NoData-CkfOfgCO.js";import"./IllustratedMessage-CV4N09cG.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-GNa2en7q.js";import"./index-CN13WjEC.js";import"./index-KbEvRCiP.js";import"./slim-arrow-down-xCHM9F0i.js";import"./Input-DTQqZq-A.js";import"./ResponsivePopoverCommon.css-piC5h4jL.js";import"./ValueStateMessage.css-DBagYbRC.js";import"./Suggestions.css-CejvJKBZ.js";import"./ListBoxItemGroupTemplate-DepFnNxx.js";import"./ComboBoxItemGroup-D38Wr8qS.js";import"./ListItemBaseTemplate-Cos5K4ap.js";import"./Token-Bgmtsg6b.js";import"./ScrollEnablement-DtNx2cEd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CQNcnXqt.js";import"./ToggleButton-DyuD2XUy.js";import"./SuggestionItem-BtJ4t_fT.js";import"./index-BhyD8HLz.js";import"./Option-DlUUMMtd.js";import"./index-M2h8-I4o.js";import"./SegmentedButton-ZCdQ95nb.js";import"./index-CxE_8jTO.js";import"./Select-pjdp6Rwf.js";import"./InvisibleMessage-BRwaHpiH.js";import"./slim-arrow-down-gvx2dpNQ.js";import"./index-DcsO_iRE.js";import"./index-BpM7KJ_2.js";import"./index-BID1hoZg.js";import"./index-B1HjRcua.js";import"./IconDesign-DXd8PPVF.js";import"./filter-IsgdBqo4.js";import"./group-2-D9cCDLqP.js";import"./sort-descending-DuSbLhoV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ss9rnYj6.js";import"./utils-erb1VNk7.js";import"./index-Cl6iRk1J.js";import"./index--_SNBdoM.js";import"./index-CBrrpGGF.js";import"./navigation-down-arrow-D-Z8F_4d.js";import"./navigation-right-arrow-yCklUeEk.js";import"./navigation-right-arrow-dDT8HKVJ.js";import"./useCurrentTheme-DmGtj7Uk.js";import"./index-BwddXk7L.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CSPv66kJ.js";import"./paper-plane-q_I3mXRA.js";import"./index-B_hiW_oO.js";import"./less-KsTjEaWT.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
