import{j as e}from"./iframe-OU-rKGVl.js";import{useMDXComponents as n}from"./index-BdFoQaN_.js";import{I as r,F as s}from"./CommandsAndQueries-1YsKNX6u.js";import{M as l,C as a}from"./blocks-90C6s9DB.js";import"./Tag-BGeGdyvC.js";import"./index-CvYMziHu.js";import"./copy-ukTvQIks.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CCULtsWI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlWEaWz4.js";import"./index-B5S-I-wQ.js";import"./index-BCzS-sMX.js";import"./Link-DUV5jdr_.js";import"./index-Cy3EQ66_.js";import"./index-M6X6hbjk.js";import"./index-CvP3_iIG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DeGn29mr.js";import"./addCustomCSSWithScoping-BqWgeVkc.js";import"./index-CvIaP9X3.js";import"./information-DJNA9m3t.js";import"./sys-enter-2-Cr3cjNlh.js";import"./alert-Czqp44ew.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BGo6vKhl.js";import"./delete-_xztDnX7.js";import"./settings-CwmWqfy-.js";import"./NoData-BNu6Ou9F.js";import"./IllustratedMessage-Du7cTspw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-B8-nnn9a.js";import"./index-BY5HHzcI.js";import"./index-Cq-fj5gm.js";import"./slim-arrow-down-vaMbUVTQ.js";import"./Input-B4YLSXwH.js";import"./ResponsivePopoverCommon.css-Bzv7nheL.js";import"./ValueStateMessage.css-UI9OOvTY.js";import"./Suggestions.css-BymAQ3Y4.js";import"./ListBoxItemGroupTemplate-DvCKbQ3V.js";import"./ComboBoxItemGroup-CKFYNVAp.js";import"./ListItemBaseTemplate-eGcqzXUs.js";import"./Token-DMjAKD8x.js";import"./ScrollEnablement-C7rUKtrC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CxAFUNDr.js";import"./ToggleButton-EwMGFEkd.js";import"./SuggestionItem-CvAGY5Sq.js";import"./index-DTRkoFlC.js";import"./Option-DtkTSrk6.js";import"./index-Cf-s1qG0.js";import"./SegmentedButton-C67q4Csu.js";import"./index-C8V2aso4.js";import"./Select-DGZ5ZJGF.js";import"./InvisibleMessage-Dv2nzf5u.js";import"./slim-arrow-down-DxmGsJVh.js";import"./index-Dy0XpXnL.js";import"./index-DY2olzvX.js";import"./index-BOHa5n-X.js";import"./index-Bv6B9-dk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BtBGaZRL.js";import"./group-2-CfykcAeN.js";import"./sort-descending-BtOSPJ2K.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DzoQYUdz.js";import"./utils-C0mg2yQM.js";import"./index-CXggoDTH.js";import"./index-B8n4hNMo.js";import"./index-BWr4kG0m.js";import"./navigation-down-arrow-V4PkR50p.js";import"./navigation-right-arrow-CDyYktkW.js";import"./navigation-right-arrow-CH-kCDBe.js";import"./useCurrentTheme-BcmpDbsZ.js";import"./index-Dh82-zLH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiiM2WaD.js";import"./paper-plane-C06ESYz6.js";import"./index-Bjb9tiJS.js";import"./less-aYFPVRCg.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
