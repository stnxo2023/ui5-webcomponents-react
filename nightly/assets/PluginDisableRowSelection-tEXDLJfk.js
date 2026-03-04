import{j as e}from"./iframe-BCeV4J61.js";import{useMDXComponents as n}from"./index-DQSXUrY-.js";import{I as r,F as s}from"./CommandsAndQueries-BMt6Du51.js";import{M as l,C as a}from"./blocks-BaqdfAa9.js";import"./Tag-Bzl_4yyv.js";import"./index-DSCCKcvn.js";import"./copy-BLLS_Koh.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-p2TBitSL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6AOhQcP.js";import"./index-BqI0DRaf.js";import"./index-CTun36xm.js";import"./Link-C83i_H7y.js";import"./index-BaMmnI_0.js";import"./index-Dd7n1xMP.js";import"./index-C_9CrSf5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xuzVGY3l.js";import"./addCustomCSSWithScoping-Bz6BhAjV.js";import"./index-MH0uXub1.js";import"./information-DsxmrLjJ.js";import"./sys-enter-2-DTJ11PLs.js";import"./alert-BPfUUxXP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DepvYq9l.js";import"./delete-DVWCX9kC.js";import"./settings-CsQavQXZ.js";import"./NoData-B5oeo5kD.js";import"./IllustratedMessage-KukoJbKs.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BPCWQtRS.js";import"./index-CoJmn4Yy.js";import"./index-DWP4Fzr6.js";import"./slim-arrow-down-BbmvWyWt.js";import"./Input-BdR3eabn.js";import"./ResponsivePopoverCommon.css-C2w1fqZM.js";import"./ValueStateMessage.css-CWUCP2jh.js";import"./Suggestions.css-Jm5XbPUR.js";import"./ListBoxItemGroupTemplate-DoQGXH2K.js";import"./ComboBoxItemGroup-SSqFciiI.js";import"./ListItemBaseTemplate-B-HxI0mr.js";import"./Token-CVeMAn7C.js";import"./ScrollEnablement-D6HdbXM3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CtPLPajr.js";import"./ToggleButton-cGf9jpQr.js";import"./SuggestionItem-lE3aTa1o.js";import"./index-Cuu5RXhJ.js";import"./Option-O-FsfY6r.js";import"./index-e3RQM6ba.js";import"./SegmentedButton-YPERwD_1.js";import"./index-BVgvpLqI.js";import"./Select-BDp6Bw0F.js";import"./InvisibleMessage-D4FAyCwP.js";import"./slim-arrow-down-ClrsC2ro.js";import"./index-BxOecRVs.js";import"./index-Ch8eD88C.js";import"./index-DaqBjD0S.js";import"./index-J52IetZK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-H3EEYKpA.js";import"./group-2-DnxmYItq.js";import"./sort-descending-B08sQLL8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-pwQzdFN3.js";import"./utils-CsNciHqm.js";import"./index-jccjEr8p.js";import"./index-DYxx-EtR.js";import"./index-BkYe_VJy.js";import"./navigation-down-arrow-BlqpuI4E.js";import"./navigation-right-arrow-ClXC1YSw.js";import"./navigation-right-arrow-B8F7f_GM.js";import"./useCurrentTheme-8k0wl0rJ.js";import"./index-aypRBSpr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BbNqKuvZ.js";import"./paper-plane-BDKzrgnv.js";import"./index-CvRy4k66.js";import"./less-0SXq5Fj1.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
