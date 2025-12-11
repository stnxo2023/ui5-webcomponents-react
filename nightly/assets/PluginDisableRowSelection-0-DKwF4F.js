import{j as e}from"./iframe-D74d3IUT.js";import{useMDXComponents as n}from"./index-BzFpXofy.js";import{I as r,F as s}from"./CommandsAndQueries-CXtjs1YA.js";import{M as l,C as a}from"./blocks-CXGWO-SS.js";import"./Tag-CGDi5rN6.js";import"./index-D9Jimze5.js";import"./copy-B52gZhj1.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CRUZhyOz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dp6BwZZH.js";import"./index-BAV2Dqb-.js";import"./index-nz5M1FvK.js";import"./Link-BnKuAsKS.js";import"./index-CGofV6Bd.js";import"./index-CBnDxC_O.js";import"./index-CUp4_VMY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI0ZtE-_.js";import"./addCustomCSSWithScoping-DX0DY0tV.js";import"./index-B6nGMvY0.js";import"./information-CzZVG8MP.js";import"./sys-enter-2-Bo9ZeWqv.js";import"./alert-BpouBdE8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BP3F7SzG.js";import"./delete-YUY4KlW5.js";import"./settings-DpOnwkHb.js";import"./NoData-B2ZeHRsw.js";import"./IllustratedMessage-CD7-3bUQ.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-D8YrAv4w.js";import"./index-B4EupoFR.js";import"./index-GzctAGg6.js";import"./slim-arrow-down-CJ7jhAk1.js";import"./Input-D3Xm66Jc.js";import"./ResponsivePopoverCommon.css-Bm5g59rh.js";import"./ValueStateMessage.css-CNhskv9k.js";import"./Suggestions.css-BammTqMf.js";import"./ListBoxItemGroupTemplate-Bnq694A2.js";import"./ComboBoxItemGroup-CTUZloft.js";import"./ListItemBaseTemplate-BtNRlpdq.js";import"./Token-9UX-S350.js";import"./ScrollEnablement-Bvs_TGN7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-S82lpBYr.js";import"./ToggleButton-BCthjRIl.js";import"./SuggestionItem-BD6hvrsk.js";import"./index-BTq-cNvk.js";import"./Option-c6rQ8KOO.js";import"./index-BeFwl-qO.js";import"./SegmentedButton-DsOBeHfP.js";import"./index-C2WGUbBO.js";import"./Select-Bl9KvdRX.js";import"./InvisibleMessage-BT-HA0qk.js";import"./slim-arrow-down-DDEX6AaA.js";import"./index-BGhEWWIW.js";import"./index-Bj1y_nF2.js";import"./index-BAajSuv0.js";import"./index-BJZ4mF5F.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CZdxiPUv.js";import"./group-2-x2wNxahT.js";import"./sort-descending-DblnClo_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CoiaLP2s.js";import"./utils-BPA4Vsqc.js";import"./index-DrVyi1bm.js";import"./index-Db-Q1TXS.js";import"./index-C1aOp4aZ.js";import"./navigation-down-arrow-ACQ1IIiZ.js";import"./navigation-right-arrow-C6rkELWM.js";import"./navigation-right-arrow-DRqzrNVR.js";import"./useCurrentTheme-DcwwM3Ir.js";import"./index-DelixGbO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2mdH9Ar.js";import"./paper-plane-BAJmhSNp.js";import"./index-DmuQ-N4b.js";import"./less-DFyAY_Yv.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
