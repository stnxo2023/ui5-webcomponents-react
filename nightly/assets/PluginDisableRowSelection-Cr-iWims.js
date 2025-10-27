import{j as e}from"./iframe-CRoIzMtp.js";import{useMDXComponents as n}from"./index-uepxEeS1.js";import{I as r,F as s}from"./CommandsAndQueries-tg7iHgNo.js";import{M as l,C as a}from"./blocks-BWnl8hC4.js";import"./Tag-pVHInn9_.js";import"./index-l4qALITX.js";import"./copy-D8-Me-o2.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CFWmLjr3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8wLfWwH.js";import"./index-BWA_OWVW.js";import"./index-83H_WNAi.js";import"./Link-ByRh7pJY.js";import"./index-DCZY0XoF.js";import"./index-BGCNx8iW.js";import"./index-Cq7XEcI3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbjPHeWw.js";import"./addCustomCSSWithScoping-DJ9mEG-L.js";import"./index-BY3Vu1_E.js";import"./information-DT5Qd4to.js";import"./sys-enter-2-DutWnZ3I.js";import"./alert-D-9oczO0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CZqnIIDb.js";import"./delete-b07efbAK.js";import"./settings-BMkFX08h.js";import"./NoData-CDKe2yZc.js";import"./IllustratedMessage-C6IdXkA-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-B1fpeMFI.js";import"./index-CBp7IYzb.js";import"./index-CZSKEI2W.js";import"./slim-arrow-down-unBoSxLD.js";import"./Input-BJBDq8St.js";import"./ResponsivePopoverCommon.css-CCSjtQV1.js";import"./ValueStateMessage.css-OSunxxtw.js";import"./Suggestions.css-Zd5amcux.js";import"./ListBoxItemGroupTemplate-Ds8yjX4l.js";import"./ComboBoxItemGroup-DiOTTndh.js";import"./ListItemBaseTemplate-Dz3w6gJ_.js";import"./Token-DCFzDq3v.js";import"./ScrollEnablement-Dou-HT1U.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DLhORhWI.js";import"./ToggleButton-CRShRO6E.js";import"./SuggestionItem-MyiIEE-9.js";import"./index-CXX4KfFH.js";import"./Option-D_d9kPGY.js";import"./index-C0WpXcs5.js";import"./SegmentedButton-BmVs9vUZ.js";import"./index-Ddvt-ojw.js";import"./Select-E89SNOl_.js";import"./InvisibleMessage-CVj8QPFw.js";import"./slim-arrow-down-CVzH-elm.js";import"./index-BHRAnYFD.js";import"./index-Bsq76fTK.js";import"./index-4w5klR-o.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMv5uK1e.js";import"./group-2-DJZ5z-ec.js";import"./sort-descending-f3hJqn9w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DSiKbX2_.js";import"./utils-DRJGxToW.js";import"./index-ClGjasHC.js";import"./index-Ctk0qYEi.js";import"./index-DdQaW95W.js";import"./navigation-down-arrow-BvO4V2br.js";import"./navigation-right-arrow-BxNbgTzH.js";import"./navigation-right-arrow-C9LVWiyw.js";import"./useCurrentTheme-CARlTKm9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bk8bTaJf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CaAE0oF3.js";import"./paper-plane-CHOxtY5p.js";import"./index-o4QSdXmu.js";import"./less-CgZWCgqn.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
