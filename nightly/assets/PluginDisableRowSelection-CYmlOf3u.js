import{j as e}from"./iframe-Ra0xSmd4.js";import{useMDXComponents as n}from"./index-B1uewCO1.js";import{I as r}from"./CommandsAndQueries-BEtDWerI.js";import{M as s,C as l}from"./blocks-B8uzJZ3S.js";import"./Tag-vCzc8lpN.js";import"./index-DhDYAwwg.js";import"./copy-Cehqzola.js";import{F as a}from"./Footer-BXZI9V38.js";import"./PageNotFound-DAzm2SbT.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-ssQBIa1a.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cw9gqE6M.js";import"./index-UbhsERGe.js";import"./index-DxchSxRT.js";import"./index-BhvLG_bo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cr-PyOpa.js";import"./addCustomCSSWithScoping-CcLMh_2y.js";import"./index-CCqLDoAJ.js";import"./index-CiJZaHkZ.js";import"./index-Dh9i0xFK.js";import"./information-hzJ5lLQH.js";import"./sys-enter-2-weVfOb1a.js";import"./alert-BkoFHfp8.js";import"./index-BHry3UrI.js";import"./Illustrations-DuEXDQCv.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BzAfa2O0.js";import"./delete-BlJSnspk.js";import"./settings-CnhD6x-f.js";import"./NoData-BRWK73b6.js";import"./NoFilterResults-ByK9y8bo.js";import"./index-hlONtznb.js";import"./IllustratedMessage-DH81lWhH.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DADJiQQB.js";import"./Input-hYN12Gd7.js";import"./ResponsivePopoverCommon.css-D79T12cj.js";import"./ValueStateMessage.css-BEyluAo8.js";import"./Suggestions.css-CZemgMCI.js";import"./ListBoxItemGroupTemplate-CkuipRkL.js";import"./ComboBoxItemGroup-BjqeHnC8.js";import"./ListItemBaseTemplate-DDF3F_sC.js";import"./Token-CsZP01nz.js";import"./ScrollEnablement-Dp-oqGSv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFffdE_7.js";import"./ToggleButton-BCMZO5K5.js";import"./multiselect-all-C9UpqjqM.js";import"./SuggestionItem-CRRSDxMr.js";import"./index-CgESqE8U.js";import"./Option-BToNbCEU.js";import"./index-BgXYskEj.js";import"./SegmentedButton-CdZJl0fK.js";import"./index-InyxuXtV.js";import"./Select-xNN_GioC.js";import"./InvisibleMessage-Nn0M2iFm.js";import"./index-CIhvul5w.js";import"./index-pIofiyof.js";import"./index-BBRryWn1.js";import"./index-C7nsWfZ0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-7YCHc_s2.js";import"./group-2-BOcnnuw4.js";import"./sort-descending-Cgjiy5DM.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BodfA0Gi.js";import"./utils-BLx_e7Yk.js";import"./index-qcFZyMu_.js";import"./index-DYjZTUhi.js";import"./index-DjymOdJY.js";import"./navigation-down-arrow-BWhK4CvM.js";import"./navigation-right-arrow-eBw-UtsM.js";import"./navigation-right-arrow-Buva5oL1.js";import"./useCurrentTheme-BUBcvRiI.js";import"./index-mlILjk2I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQnXSe3U.js";import"./paper-plane-CivMq3tA.js";import"./index-BKI5E3Yv.js";import"./less-WQ1GwY14.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
