import{j as e}from"./iframe-C8JI7dEI.js";import{useMDXComponents as n}from"./index-Dy3dbavl.js";import{I as r,F as s}from"./CommandsAndQueries-CAJp8baB.js";import{M as l,C as a}from"./blocks-dOc4ZvhQ.js";import"./Tag-Bh9-KKtm.js";import"./index-BEdzbacm.js";import"./copy-vzDhs336.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DNrBsuYV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bk0DUMEL.js";import"./index-BeiYD_4I.js";import"./index-B3nw03BL.js";import"./Link-g_43hnwI.js";import"./index-x3EANzLS.js";import"./index-DM_OMODM.js";import"./index-BQN-IPa2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DOnTZlr2.js";import"./addCustomCSSWithScoping-CSnh5KZm.js";import"./index-g7zsKBLX.js";import"./information-DGVxJHTG.js";import"./sys-enter-2-iEzb33ry.js";import"./alert-BG5FVPBd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DfyBeYJW.js";import"./delete-CkvGN4OZ.js";import"./settings-DTnV51pQ.js";import"./NoData-C4moVh3C.js";import"./IllustratedMessage-Dz_KDnet.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BfTOhDS6.js";import"./index-DUcLpr5Z.js";import"./index-NkzgGKyJ.js";import"./slim-arrow-down-BHxd8Vqs.js";import"./Input-CWkKGtsV.js";import"./ResponsivePopoverCommon.css-CM_pgGQI.js";import"./ValueStateMessage.css-CpDWY9cw.js";import"./Suggestions.css-gOeHYbiv.js";import"./ListBoxItemGroupTemplate-CWnRQTn9.js";import"./ComboBoxItemGroup-DbaEJT2y.js";import"./ListItemBaseTemplate-DZdo7lxN.js";import"./Token-BGcNiMJN.js";import"./ScrollEnablement-C16y6Z4B.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-nR7zaAP7.js";import"./ToggleButton-CBJChvXE.js";import"./SuggestionItem-DQgH2h9g.js";import"./index-DVcqEpTx.js";import"./Option-CZqJWi3Y.js";import"./index-BQdPAoWH.js";import"./SegmentedButton-BRjgQDpe.js";import"./index-FYP3kV_G.js";import"./Select-CnZcEXKA.js";import"./InvisibleMessage-CdXIl2K3.js";import"./slim-arrow-down-D-3Ia4oG.js";import"./index-mMTThdtc.js";import"./index-Ca9TsDXb.js";import"./index-Cj7dIYUI.js";import"./index-B0N44tcI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-6QwyGlxR.js";import"./group-2-BS-n-QGS.js";import"./sort-descending-DJuTnB3z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CNbH8ce-.js";import"./utils-DR9e_77z.js";import"./index-Deuc0gVb.js";import"./index-BM_FCtPz.js";import"./index-Cg6f3q8s.js";import"./navigation-down-arrow-B0wv2RPc.js";import"./navigation-right-arrow-UvdD6bou.js";import"./navigation-right-arrow-CwFJJrbP.js";import"./useCurrentTheme-CgmTzasZ.js";import"./index-Ccr8UAcd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DK7LFoXt.js";import"./paper-plane-jP92lQH-.js";import"./index-ISXhP0ey.js";import"./less-zqCYDGGq.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
