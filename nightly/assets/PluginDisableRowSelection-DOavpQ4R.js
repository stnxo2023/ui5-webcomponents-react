import{j as e}from"./iframe-JkIS1XbA.js";import{useMDXComponents as n}from"./index-s0dX5IQa.js";import{I as r,F as s}from"./CommandsAndQueries-t8PqdBYw.js";import{M as l,C as a}from"./blocks-DIFA4jfF.js";import"./Tag-CGYuzpRX.js";import"./index-Cki6PEzP.js";import"./copy-BpEy4GT_.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-zqPKIr8k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcRV2upd.js";import"./index-If9QK12V.js";import"./index-Cc6IDcWO.js";import"./Link-C8ljX_Jl.js";import"./index-BJe_Ldbq.js";import"./index-CIULjnJw.js";import"./index-D4k933VY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6BvO_Mx.js";import"./addCustomCSSWithScoping-OrJPV9ed.js";import"./index-wV8mgQwM.js";import"./information-8O35dRa_.js";import"./sys-enter-2-BwjA-U8a.js";import"./alert-0nYrX8QQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXT2Cgk-.js";import"./delete-CIhDQEzl.js";import"./settings-D4GDgni6.js";import"./NoData-CGi4XDkU.js";import"./IllustratedMessage-Wq2Ul-i9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CeWFzWKq.js";import"./index-Ce7dmWA4.js";import"./index-DTso7Ssf.js";import"./slim-arrow-down-CxdQbgux.js";import"./Input-DAygltfI.js";import"./ResponsivePopoverCommon.css-DalBzcK6.js";import"./ValueStateMessage.css-DB31QG7j.js";import"./Suggestions.css-DDSHaogF.js";import"./ListBoxItemGroupTemplate-CU0DT1IQ.js";import"./ComboBoxItemGroup-spyevgsi.js";import"./ListItemBaseTemplate-DG-Nk2uN.js";import"./Token-BuJPwVWP.js";import"./ScrollEnablement-DgEc-4I0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBW51XFx.js";import"./ToggleButton-BQDsMvuW.js";import"./SuggestionItem-DcE8EEE7.js";import"./index-DRdjcI3a.js";import"./Option-BPjQvE5p.js";import"./index-D3fBZPmN.js";import"./SegmentedButton-ChWUymxG.js";import"./index-DdxRipET.js";import"./Select-DtPi2w1p.js";import"./InvisibleMessage-B2BhAQgi.js";import"./slim-arrow-down-DRq74hAW.js";import"./index-C-SFTGz_.js";import"./index-BgRffrdt.js";import"./index-bz7pM8qx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-upsf-FbF.js";import"./group-2-B13YNGeD.js";import"./sort-descending-jvCE5ooF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk01B-cJ.js";import"./utils-OzEeB7Yk.js";import"./index-TTqlvXZi.js";import"./index-Y6bQjObX.js";import"./index-D0XJ_zxW.js";import"./navigation-down-arrow-BloNf-Qp.js";import"./navigation-right-arrow-D5wlsInA.js";import"./navigation-right-arrow-C2s_1KE8.js";import"./useCurrentTheme-DyiO6FGA.js";import"./IndicationColor-DVw-fSM_.js";import"./index-yDwJ49Kg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-3MqpM2h7.js";import"./paper-plane-FRWsPWej.js";import"./index-by9B6z8d.js";import"./less-B2UjUmjt.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
