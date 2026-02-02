import{j as e}from"./iframe-DtD6gRbB.js";import{useMDXComponents as n}from"./index-BiO40HBX.js";import{I as r,F as s}from"./CommandsAndQueries-B26crKtq.js";import{M as l,C as a}from"./blocks-Ck7wLHdk.js";import"./Tag-CPFNFbnr.js";import"./index-BiosTbTI.js";import"./copy-DKyeVOxg.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dmah3EWF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSRohzC4.js";import"./index-CRlMy3bg.js";import"./index-pV_yzmY_.js";import"./Link-cYpkkuqp.js";import"./index-391GJ7ps.js";import"./index-DCELbeIn.js";import"./index-KaeBEDf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGQO4fMp.js";import"./addCustomCSSWithScoping-Bt7xCKzu.js";import"./index-CDW4JUA8.js";import"./information-uX8_TnNn.js";import"./sys-enter-2-CJJhzBhO.js";import"./alert-BmD5O1ac.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BXDuuJxS.js";import"./delete-BH_Ofluc.js";import"./settings-BOwjvOs-.js";import"./NoData-DAU8iV94.js";import"./IllustratedMessage-BdOpFcMu.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-D6IuGdJg.js";import"./index-8sZlfaIF.js";import"./index-C8a6NVMH.js";import"./slim-arrow-down-DjG80YJw.js";import"./Input-D-O_E4Pc.js";import"./ResponsivePopoverCommon.css-B045Nnj_.js";import"./ValueStateMessage.css-DpV5S_wa.js";import"./Suggestions.css-BvMw9k5F.js";import"./ListBoxItemGroupTemplate-o03o3K-I.js";import"./ComboBoxItemGroup-D7un_uFe.js";import"./ListItemBaseTemplate-DQCws7kn.js";import"./Token-D36n2Zus.js";import"./ScrollEnablement-QSFxM8aV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CdwuH3bB.js";import"./ToggleButton-Cd5NUYjN.js";import"./SuggestionItem-AGh_Mf5H.js";import"./index-DbwyhNE4.js";import"./Option-CDh-ocF3.js";import"./index-C7kuhskk.js";import"./SegmentedButton-DEMlsUEh.js";import"./index-D1IFlFlx.js";import"./Select-DTxOAyO4.js";import"./InvisibleMessage-DU_sw7pv.js";import"./slim-arrow-down-DZcd6ZcC.js";import"./index-RfAAwJsf.js";import"./index-Bb0M5Coz.js";import"./index-DCwY0BNz.js";import"./index-C89pqI8n.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DKuclrLO.js";import"./group-2-C1B8sHxp.js";import"./sort-descending-CJ2KeZ-8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index--eFanla0.js";import"./utils-BQ9l0ZXj.js";import"./index-BgO6mcLt.js";import"./index-vZRCG4hQ.js";import"./index-CEJjFBjT.js";import"./navigation-down-arrow-nSfE-hjH.js";import"./navigation-right-arrow-ByC8k-O9.js";import"./navigation-right-arrow-DKjWi810.js";import"./useCurrentTheme-CcZ-F948.js";import"./index-DOX5DR-q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUn0jH8-.js";import"./paper-plane-DSmkYTvk.js";import"./index-BHAQBVRI.js";import"./less-Bjdjo6qR.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
