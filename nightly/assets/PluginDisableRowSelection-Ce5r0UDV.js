import{j as e}from"./iframe-DeqKlIRG.js";import{useMDXComponents as n}from"./index-BkEa29Df.js";import{I as r,F as s}from"./CommandsAndQueries-BK0G3Pqq.js";import{M as l,C as a}from"./blocks-C1D2jvVQ.js";import"./Tag-EQmX-47F.js";import"./index-CW-zKJIF.js";import"./copy-DS8sFIJH.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Z7tjv5z3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnqCxbWG.js";import"./index-D3fIG7Vo.js";import"./index-vsoaIVfP.js";import"./Link-DmriJHN9.js";import"./index-DZSRf0vt.js";import"./index-CUp9ZC_J.js";import"./index-BjGpgXu_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CD5youlR.js";import"./addCustomCSSWithScoping-W7fjoweE.js";import"./index-CNR4ri7j.js";import"./information-BKTQWge_.js";import"./sys-enter-2-qREtxQiM.js";import"./alert-J7MXwQPX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcfttK52.js";import"./delete-CzjS8jKj.js";import"./settings-BFTpzi3p.js";import"./NoData-DdbvMWeu.js";import"./IllustratedMessage-CwaNkNxb.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BrUTDG_M.js";import"./index-BJzWWHia.js";import"./index-DQNorMfg.js";import"./slim-arrow-down--R6acl1m.js";import"./Input-CTbiGavu.js";import"./ResponsivePopoverCommon.css-Dch4WVjM.js";import"./ValueStateMessage.css-DQDynnzI.js";import"./Suggestions.css-CqAFo46i.js";import"./ListBoxItemGroupTemplate-UGwk5YiJ.js";import"./ComboBoxItemGroup-DEdZ8U8Z.js";import"./ListItemBaseTemplate-D5-84s4y.js";import"./Token-ZAjnmiMh.js";import"./ScrollEnablement-C5rzfotJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8djI9Ll.js";import"./ToggleButton-BzmaRDgs.js";import"./SuggestionItem-DHUQVhWq.js";import"./index-Bm1-k_-z.js";import"./Option-CmUx6ft0.js";import"./index-CNAnBr4X.js";import"./SegmentedButton-DpjYxYdV.js";import"./index-DQlxzy1B.js";import"./Select-DC3vLiGW.js";import"./InvisibleMessage-BnUatQiz.js";import"./slim-arrow-down-BD3ZShnB.js";import"./index-BWbOjgM2.js";import"./index-DkHfyO0R.js";import"./index-CSAT2Cv9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DqGeWKN9.js";import"./group-2-CtuKuo3j.js";import"./sort-descending-e-Z9IEx-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpduKTu4.js";import"./utils-DFYX2ngj.js";import"./index-x8ATXu-z.js";import"./index-0XnoPyy6.js";import"./index-BvUS6apf.js";import"./navigation-down-arrow-C1Mzx0eB.js";import"./navigation-right-arrow-Dfh_jGI5.js";import"./navigation-right-arrow-Cc3Z_knn.js";import"./useCurrentTheme-DWe2YqPm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-UBCMfYla.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B59bvvXz.js";import"./paper-plane-DJj7TsmY.js";import"./index-BGawmT5r.js";import"./less-DyqqT9US.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
