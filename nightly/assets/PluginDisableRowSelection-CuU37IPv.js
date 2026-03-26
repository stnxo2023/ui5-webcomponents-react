import{j as e}from"./iframe-CTCL6F1r.js";import{useMDXComponents as n}from"./index-COtiMl_W.js";import{I as r}from"./CommandsAndQueries-BsPL36Z9.js";import{M as s,C as l}from"./blocks-BWrgTR_X.js";import"./Tag-BL5Qfzs7.js";import"./index-DN-3xlKC.js";import"./copy-DEpsQlxb.js";import{F as a}from"./Footer-DeTYP8-R.js";import"./PageNotFound-D_xGTPNz.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CC0OaYO6.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-A2IdBIvD.js";import"./index-CeDd6fzK.js";import"./index-Dj3jefRS.js";import"./index-ByW0PFuk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bj5cLhE3.js";import"./addCustomCSSWithScoping-Bp0u_2pD.js";import"./index-BzwM6I24.js";import"./index-DWmGRAcl.js";import"./index-9E9I64Wt.js";import"./information-CiEkIJMA.js";import"./sys-enter-2-Cm5ZOXv2.js";import"./alert-CwDd6vfH.js";import"./index-D_vdDgjG.js";import"./Illustrations-GQ99oYm_.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-UhOOQ59H.js";import"./delete-BVyans79.js";import"./settings-BGGRR6oU.js";import"./NoData-DjKCJeL5.js";import"./NoFilterResults-KXdQvW0p.js";import"./index-Bbc0mtX6.js";import"./IllustratedMessage-oNHAfvQF.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-qKlu78ML.js";import"./Input-CskqmG-U.js";import"./ResponsivePopoverCommon.css-DqU8u_Xb.js";import"./ValueStateMessage.css-Dz2ZBT4Q.js";import"./Suggestions.css-pJEqYvzu.js";import"./ListBoxItemGroupTemplate-BWUUjUK6.js";import"./ComboBoxItemGroup-Ded9KrxA.js";import"./ListItemBaseTemplate-CAbiTx4K.js";import"./Token-CkMexFhY.js";import"./ScrollEnablement-B00j-Abc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DzDcm21T.js";import"./ToggleButton-CGGo1Tc6.js";import"./multiselect-all-DXXVxUOw.js";import"./SuggestionItem-DluIx3Vy.js";import"./index-CDclxXJI.js";import"./Option-BPLDlZYg.js";import"./index-BJ3aDD5w.js";import"./SegmentedButton-Bzy-4e_3.js";import"./index-DkQ2VIB6.js";import"./Select-B9gMG-Mb.js";import"./InvisibleMessage-0vTx7A5o.js";import"./index-BvUve-In.js";import"./index-Co_AA59G.js";import"./index-CFfYMp7H.js";import"./index-BksCzbKY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CLAP-CGA.js";import"./group-2-DFK22c05.js";import"./sort-descending-CAFmujKH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcZpUEcN.js";import"./utils-CrwAwKdr.js";import"./index-B0bfBcoV.js";import"./index-RisHXePe.js";import"./index-zpAMMNek.js";import"./navigation-down-arrow-wVevGwwX.js";import"./navigation-right-arrow-0lpCtsn6.js";import"./navigation-right-arrow-DF7UFLN2.js";import"./useCurrentTheme-Bmu75wPA.js";import"./index-pVHPziZI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVAaEzsl.js";import"./paper-plane-BLB4ESVt.js";import"./index-BslbOjMF.js";import"./less-CJ6uBOiE.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
