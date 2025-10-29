import{j as e}from"./iframe-D1jKIypo.js";import{useMDXComponents as n}from"./index-M1_DZHmj.js";import{I as r,F as s}from"./CommandsAndQueries-BkaxH0BE.js";import{M as l,C as a}from"./blocks-BvvvBGFc.js";import"./Tag-BqsbpO_s.js";import"./index-ClSanEKt.js";import"./copy-DgqWK_AB.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BxN-8nyj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBeTD3z6.js";import"./index-T4x6aH8D.js";import"./index-DHEWI2kL.js";import"./Link-BTNp59uu.js";import"./index-C7kBl8gS.js";import"./index-BKZiIOM7.js";import"./index-D6PVc_6_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRCEREPf.js";import"./addCustomCSSWithScoping-BmLQ2iz1.js";import"./index-C56hzs5D.js";import"./information-B8vikb0m.js";import"./sys-enter-2-DByg53Ih.js";import"./alert-D9Mn7721.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bisacz7e.js";import"./delete-DBpx9Uar.js";import"./settings-DT6vtujH.js";import"./NoData-Dbt8BAMA.js";import"./IllustratedMessage-Cc1RezPx.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BxR36E9a.js";import"./index-DMuI27Hv.js";import"./index-Cg8oYFax.js";import"./slim-arrow-down-GqbbmAYy.js";import"./Input-D4NDzfB_.js";import"./ResponsivePopoverCommon.css-DN-Rc-d6.js";import"./ValueStateMessage.css-CbVwogXq.js";import"./Suggestions.css-BT6tIfnI.js";import"./ListBoxItemGroupTemplate-DH951dKz.js";import"./ComboBoxItemGroup-BkDWNxnF.js";import"./ListItemBaseTemplate-Cb9CjRMA.js";import"./Token-Bx0zxJB1.js";import"./ScrollEnablement-Duxr6xMC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DQRvO6kb.js";import"./ToggleButton-BC4YqGk8.js";import"./SuggestionItem-DisQaTGu.js";import"./index-Bbr0CVuQ.js";import"./Option-C3-dRc9X.js";import"./index-v4ksQ3mX.js";import"./SegmentedButton-Bi6AlYab.js";import"./index-Dhc01gl4.js";import"./Select-DLU6kJay.js";import"./InvisibleMessage-DNz0AAuG.js";import"./slim-arrow-down-CPVmWMXv.js";import"./index-DtOdn5nS.js";import"./index-B0YcVQvO.js";import"./index-lQPSd5CQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BDm3RZ5s.js";import"./group-2-sEBl_tJy.js";import"./sort-descending-CHOZqwWH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmFHmOLh.js";import"./utils-BMxMzzUu.js";import"./index-9CYjSZBT.js";import"./index-C-bA5g6R.js";import"./index-eeZV0lom.js";import"./navigation-down-arrow-WO_dZjFi.js";import"./navigation-right-arrow-BFrOVRzy.js";import"./navigation-right-arrow-Ct4noKTB.js";import"./useCurrentTheme-BD5qUSES.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C01Owi4P.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ds7nh71L.js";import"./paper-plane-DnsrmLa8.js";import"./index-XD1hamhe.js";import"./less-uxHdLqH7.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
