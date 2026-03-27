import{j as e}from"./iframe-J46VriOb.js";import{useMDXComponents as n}from"./index-CBla0wLi.js";import{I as r}from"./CommandsAndQueries-BzSXHbZJ.js";import{M as s,C as l}from"./blocks-beoBu_qL.js";import"./Tag-DrBKyONn.js";import"./index-_u-v5yqi.js";import"./copy-_0TxAB6h.js";import{F as a}from"./Footer-CEGsJe_E.js";import"./PageNotFound-D29obeve.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-XTlMfWCW.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B4FJ2xg8.js";import"./index-Dw3YBt24.js";import"./index-D6itq-2d.js";import"./index-aps2uNQB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxsI6DA6.js";import"./addCustomCSSWithScoping-Dl6_6-AL.js";import"./index-BrGkrW3e.js";import"./index-Dt6WNWTR.js";import"./index-CT7sD2iL.js";import"./information-CATkPoRV.js";import"./sys-enter-2-Cc8Mj3l6.js";import"./alert-BWP7y2xA.js";import"./index-BkIHYavW.js";import"./Illustrations-D_iUtabn.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-btyj-n1J.js";import"./delete-w_D0ZxLs.js";import"./settings-CHNKlAkf.js";import"./NoData-B7hCCw2Z.js";import"./NoFilterResults-TM2aQCOr.js";import"./index-CvMK6PYJ.js";import"./IllustratedMessage-wrAyyr2h.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BFOs-Db_.js";import"./Input-Ba21Wr_4.js";import"./ResponsivePopoverCommon.css-jKJxzQ6F.js";import"./ValueStateMessage.css-DSOKYmKE.js";import"./Suggestions.css-Dd_ULqQN.js";import"./ListBoxItemGroupTemplate-CJFWume4.js";import"./ComboBoxItemGroup-DHNlD9r0.js";import"./ListItemBaseTemplate-Y3fZL33H.js";import"./Token-By8nCId5.js";import"./ScrollEnablement-DNtDiy2E.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkLkb57T.js";import"./ToggleButton-BxPz-GTU.js";import"./multiselect-all-DC8IMVm_.js";import"./SuggestionItem-0qJhTGlF.js";import"./index-EIhpcBKD.js";import"./Option-85_JDqIM.js";import"./index-DndhKC0q.js";import"./SegmentedButton-Bu_1Yz2B.js";import"./index-CdHvy4_O.js";import"./Select-lRdI9G8v.js";import"./InvisibleMessage-BkeQHp1j.js";import"./index-DVv2dwtw.js";import"./index-C0C2EsKY.js";import"./index-l12WwH3D.js";import"./index-Pf84_VDN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BL1LVhNe.js";import"./group-2-CtFUB3dY.js";import"./sort-descending-DzIXikcM.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-nxr8rbf1.js";import"./utils-q85ajM_8.js";import"./index-D3xzwzot.js";import"./index-Czrl39Ja.js";import"./index-DgMAqzON.js";import"./navigation-down-arrow-DM7-1YlX.js";import"./navigation-right-arrow-C2J9fEdo.js";import"./navigation-right-arrow-D_foC3d9.js";import"./useCurrentTheme-jWg-wmyT.js";import"./index-Bb5UG2kc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWARZAlF.js";import"./paper-plane-BymcWAKh.js";import"./index-BTeoJAdU.js";import"./less-61CakwDD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
