import{j as e}from"./iframe-CZzIPN_f.js";import{useMDXComponents as n}from"./index-BN7772Ln.js";import{I as r,F as s}from"./CommandsAndQueries-C_V-vyfI.js";import{M as l,C as a}from"./blocks-CpAefQ0F.js";import"./Tag-B8_XKizL.js";import"./index-CYLMYqU3.js";import"./copy-CFuW58eh.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-WHlqTwq6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RbSpX7Av.js";import"./index-RQjAfURV.js";import"./index-CiiSHxVf.js";import"./Link-Fkmlwa07.js";import"./index-CCj5LB1a.js";import"./index-DMvyX2go.js";import"./index-c-1N-cez.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmB6T7HK.js";import"./addCustomCSSWithScoping-DaZxNPdr.js";import"./index-TDczsIb0.js";import"./information-6G8KrWG0.js";import"./sys-enter-2-Blj9-cAn.js";import"./alert-BtpU_SH9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vUdfR6U_.js";import"./delete-BMEp91Mc.js";import"./settings-C8GSnPCs.js";import"./NoData-Bf4Yeihh.js";import"./IllustratedMessage-DrWwRU0b.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BXzF_T72.js";import"./index-Bbxw8KqN.js";import"./index-zbybGof4.js";import"./slim-arrow-down-C428O546.js";import"./Input-BsrOTKjj.js";import"./ResponsivePopoverCommon.css-2Qlub-_h.js";import"./ValueStateMessage.css-hjeNdUqW.js";import"./Suggestions.css-DT4shfhc.js";import"./ListBoxItemGroupTemplate-CSR5ghpQ.js";import"./ComboBoxItemGroup-Cz3um4BI.js";import"./ListItemBaseTemplate-P74cAnZc.js";import"./Token-C3z9AeKo.js";import"./ScrollEnablement-C4qF1cK6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DAcFQW4k.js";import"./ToggleButton-CJ4dsJ-L.js";import"./SuggestionItem-Dno1ukWF.js";import"./index-CfuHgIJB.js";import"./Option-DZueQCXy.js";import"./index-HlkmFS4c.js";import"./SegmentedButton-87GWkDY0.js";import"./index-CnpeIdgj.js";import"./Select-bjAZ7WAd.js";import"./InvisibleMessage-DLMXXFNU.js";import"./slim-arrow-down-Bbr4LCWT.js";import"./index-DfVluAdc.js";import"./index-56rq3Xsn.js";import"./index-Htv8Knj7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C4d-P2A4.js";import"./group-2-63bcV-_q.js";import"./sort-descending--Bt-86OL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4WOx3kzp.js";import"./utils-B4X6J-Z9.js";import"./index-BigJjRDp.js";import"./index-C1J3MpNo.js";import"./index-D0gJWrcG.js";import"./navigation-down-arrow-DkBsnEWF.js";import"./navigation-right-arrow-DsJ6uoOM.js";import"./navigation-right-arrow-D15IFhwy.js";import"./useCurrentTheme-Dn8ivhT9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWbe83HO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DjCnev_a.js";import"./paper-plane-BRbCLIHy.js";import"./index-3ZvOWv6T.js";import"./less-NC1u16Z9.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
