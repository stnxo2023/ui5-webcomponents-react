import{j as e}from"./iframe-B-pj6tCi.js";import{useMDXComponents as n}from"./index-CV4vE3wQ.js";import{I as r,F as s}from"./CommandsAndQueries-D5MjQxKD.js";import{M as l,C as a}from"./blocks-HpriUj6L.js";import"./Tag-BGSRXwU9.js";import"./index-BjTnndjj.js";import"./copy-DztVyiyp.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BK8uysVc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-xz_U36.js";import"./index-CBj2QVaO.js";import"./index-BuYTxKvQ.js";import"./Link-C2AEvOhf.js";import"./index-BJS1VYKy.js";import"./index-C-cxTaDk.js";import"./index-etFlaHh7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-zIVJXLqJ.js";import"./addCustomCSSWithScoping-NTHEVFVs.js";import"./index-BOWgSpCi.js";import"./information-D4Uxy2_-.js";import"./sys-enter-2-dO_KPcSs.js";import"./alert-DoolSfaJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXj0uEXT.js";import"./delete-BnYHOY2E.js";import"./settings-uSbSIQHU.js";import"./NoData-DMPDFl_l.js";import"./IllustratedMessage-C4cgVVAn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1DtyXPj6.js";import"./index-DkYSANwf.js";import"./slim-arrow-down-26t7D4j9.js";import"./Input-DmrlR0kq.js";import"./ResponsivePopoverCommon.css-CE7mr_pS.js";import"./ValueStateMessage.css-tXcATjqT.js";import"./Suggestions.css-CniPwVQQ.js";import"./ListBoxItemGroupTemplate-BFTUBHkW.js";import"./ComboBoxItemGroup-CkQyHkRa.js";import"./ListItemBaseTemplate-Cci8iryR.js";import"./Token-CxMiOAAC.js";import"./ScrollEnablement-D-n-HsWC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DZ46rijL.js";import"./ToggleButton-4_Ru-zex.js";import"./SuggestionItem-BQ13UCwK.js";import"./index-ByOJ1YLH.js";import"./Option-CaNpJRmR.js";import"./index-DtsHJXJf.js";import"./SegmentedButton-B14_njt4.js";import"./index-CoWsLfrh.js";import"./Select-DbUQ6bw8.js";import"./InvisibleMessage-QwxdDQeA.js";import"./slim-arrow-down-BOPKijzV.js";import"./index-DJqVwyD9.js";import"./index-BQ49BgDg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bi23S08g.js";import"./group-2-Cm9rVH12.js";import"./sort-descending-Dj82RQGa.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C_rwdTta.js";import"./utils-dtTM_TEW.js";import"./index-B_v9zx4p.js";import"./index-CJOQ4d67.js";import"./index-CC2eGnfy.js";import"./navigation-down-arrow-CpReOOXl.js";import"./navigation-right-arrow-DLC8Xg5V.js";import"./navigation-right-arrow-RgTlgqvQ.js";import"./useCurrentTheme-BwLBQ8nO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BaaVPMC7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wViExLAn.js";import"./paper-plane-Bt6zz62V.js";import"./index-Dcyd7m_C.js";import"./less-BTlYxKnD.js";import"./index-C3ng40gn.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
