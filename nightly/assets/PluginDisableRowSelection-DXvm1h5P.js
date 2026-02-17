import{j as e}from"./iframe-DQUr2w9e.js";import{useMDXComponents as n}from"./index-uEfBZmVP.js";import{I as r,F as s}from"./CommandsAndQueries-BHqFNGC1.js";import{M as l,C as a}from"./blocks-CTU8TRaT.js";import"./Tag-CGtAgsci.js";import"./index-CHsUWkTe.js";import"./copy-DGFXVa9Z.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-SPeB0i7X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbVmwePH.js";import"./index-2aCTTGoH.js";import"./index-BtkqIySi.js";import"./Link-BHxA_VPp.js";import"./index-CSO1LyL1.js";import"./index-B4uSF3Nb.js";import"./index-CNdVS1MW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpPxZFHh.js";import"./addCustomCSSWithScoping-CYkIrudw.js";import"./index-4ddJk1R_.js";import"./information-BjEP1Brt.js";import"./sys-enter-2-ByVlGYkM.js";import"./alert-B-w-1j20.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B0oXpXse.js";import"./delete-CKJlw0ul.js";import"./settings-BqZXbBzz.js";import"./NoData-CTfdrvzI.js";import"./IllustratedMessage-dFsirP1_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-NmYqQAmV.js";import"./index-BfpPLO0z.js";import"./index-aZ35b9A0.js";import"./slim-arrow-down-BLkEvkYI.js";import"./Input-BJ886YXD.js";import"./ResponsivePopoverCommon.css-DUGj3C9j.js";import"./ValueStateMessage.css-DPUhzbsV.js";import"./Suggestions.css-CbdO06AC.js";import"./ListBoxItemGroupTemplate-C3D3SS1D.js";import"./ComboBoxItemGroup-Cal7Qapr.js";import"./ListItemBaseTemplate-LMCDkFyc.js";import"./Token-BqJOakxt.js";import"./ScrollEnablement-CQrRan6G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-55PzQGAK.js";import"./ToggleButton-XKDt_BMd.js";import"./SuggestionItem-Bq6dqzFI.js";import"./index-BNBBhcR5.js";import"./Option-DSK6MS5F.js";import"./index-CoKAYfuw.js";import"./SegmentedButton-DyE0zOmq.js";import"./index-d-fBwfZp.js";import"./Select-DkZSi5CF.js";import"./InvisibleMessage-DVNnV7lb.js";import"./slim-arrow-down-DsQdRoV3.js";import"./index-DXtBm23l.js";import"./index-EOPyMVa_.js";import"./index-Cf9XpyMJ.js";import"./index-v9z5Zdm8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlQVZrE2.js";import"./group-2-BlX12n4R.js";import"./sort-descending-Dh1rcEGz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxR_3u2a.js";import"./utils-ru1t-ijs.js";import"./index-C3E04by4.js";import"./index-C9Yvpw-p.js";import"./index-D38IEv3D.js";import"./navigation-down-arrow-MdREaxMc.js";import"./navigation-right-arrow-VpBpYwUO.js";import"./navigation-right-arrow-D80pj5jS.js";import"./useCurrentTheme-DnzGvo4K.js";import"./index-NRqn2cP6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hjHvlJ0f.js";import"./paper-plane-dLhNd5G8.js";import"./index-D3fHXWzm.js";import"./less-CgyKfQmL.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
