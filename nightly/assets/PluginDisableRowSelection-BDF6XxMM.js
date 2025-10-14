import{j as e}from"./iframe-_aM0UtJ2.js";import{useMDXComponents as n}from"./index-BfzIu2dE.js";import{I as r,F as s}from"./CommandsAndQueries-DzKXmTWy.js";import{M as l,C as a}from"./blocks-l9d8PUx_.js";import"./Tag-BfFHPicD.js";import"./index-DK-65CGT.js";import"./copy-DFcekAfZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CgldXt7D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4-JCcJ5.js";import"./index-D94cPjQU.js";import"./index-HG9KwvVi.js";import"./Link-DVTfY9Y-.js";import"./index-ChnKUkkG.js";import"./index-daYey1G6.js";import"./index-B2FptVvG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5ZlAJzQ.js";import"./addCustomCSSWithScoping-JIDtcj4a.js";import"./index-80py4d9m.js";import"./information-Bugjbsmi.js";import"./sys-enter-2-B3MGAVo9.js";import"./alert-CNC7DRI_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDin49Qt.js";import"./delete-qfJnygw7.js";import"./settings-4mK1hrn-.js";import"./NoData-8b23hioQ.js";import"./IllustratedMessage-BGHWa-aT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-d2xsz83Y.js";import"./index-BrzyWVSa.js";import"./index-B7RpqTLg.js";import"./slim-arrow-down-BRjLnbot.js";import"./Input-MazSOwes.js";import"./ResponsivePopoverCommon.css-C9u2x3-0.js";import"./ValueStateMessage.css-DszbwuLg.js";import"./Suggestions.css-qx180UMs.js";import"./ListBoxItemGroupTemplate-DuHSjG0t.js";import"./ComboBoxItemGroup-D0cmVbGL.js";import"./ListItemBaseTemplate-DFJr1Bva.js";import"./Token-C2yl10l2.js";import"./ScrollEnablement-Bhq2qTDI.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BU1IwfYt.js";import"./ToggleButton-DYX2agjM.js";import"./SuggestionItem-C_mbbanp.js";import"./index-DKAKDwua.js";import"./Option-NFGo4imz.js";import"./index-ozNHZ0R1.js";import"./SegmentedButton-BCvDohGJ.js";import"./index-Cf7GYcbF.js";import"./Select-C0UwiMyq.js";import"./InvisibleMessage-C6DL-Jud.js";import"./slim-arrow-down-cxFeYscI.js";import"./index-C_W6PJrr.js";import"./index-Cr_o_sGI.js";import"./index-4LhBYovK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNRItJq8.js";import"./group-2-BSuDu3BP.js";import"./sort-descending-CjYTHc_q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D0_4QMUt.js";import"./utils-RjvQRYKv.js";import"./index-BxkisXba.js";import"./index-Di6FiDqU.js";import"./index-D-tGJU1i.js";import"./navigation-down-arrow-CXVkGqrk.js";import"./navigation-right-arrow-OXPBdahQ.js";import"./navigation-right-arrow-CCBpu_jK.js";import"./useCurrentTheme-C1Tgc9SL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CtV42zsn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CaZ25Jpx.js";import"./paper-plane-II9HzJH8.js";import"./index-Drkmvmr5.js";import"./less-BOPdbN0q.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
