import{j as e}from"./iframe-D2NU56Rf.js";import{useMDXComponents as n}from"./index-PnjEbenM.js";import{I as r,F as s}from"./CommandsAndQueries-29xiV4Jg.js";import{M as l,C as a}from"./blocks-DZ0UXwr1.js";import"./Tag-gDuKwEK0.js";import"./index-BUSq7sbq.js";import"./copy-2VqtSmY4.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-ZbakYZtm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7GdD8iT.js";import"./index-B9i47eba.js";import"./index-Un1NcZ-Y.js";import"./Link-O92RF9SA.js";import"./index-Dje3V7QZ.js";import"./index-4WW0oGrP.js";import"./index-CgZch3zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHOcvBV5.js";import"./addCustomCSSWithScoping-CUv8r2Rw.js";import"./index-jUVFgVlz.js";import"./information-D0vbTy2i.js";import"./sys-enter-2-VpvNFzz0.js";import"./alert-BQIN7sJt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C-w4OQT-.js";import"./delete-C7Xgu3fR.js";import"./settings-C9R5wtHO.js";import"./NoData-Cq6XCPbf.js";import"./IllustratedMessage-SMl1msrS.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Qm3Bc51e.js";import"./index-CXQ9TlNQ.js";import"./index-nEIt-vae.js";import"./slim-arrow-down-CM6lEZEE.js";import"./Input-DaL4-DtU.js";import"./ResponsivePopoverCommon.css-BiNMVLeP.js";import"./ValueStateMessage.css-CuKAeQ_D.js";import"./Suggestions.css-RnxMuMvw.js";import"./ListBoxItemGroupTemplate-Dz3TXsUQ.js";import"./ComboBoxItemGroup-BXCWC692.js";import"./ListItemBaseTemplate-BbOMO38P.js";import"./Token-CTqQ2vo2.js";import"./ScrollEnablement-B2R8AjnU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BIEX9q1d.js";import"./ToggleButton-zJBrjEVR.js";import"./SuggestionItem-2sr87sHw.js";import"./index-Iu7bkkY4.js";import"./Option-BiKS04Lw.js";import"./index-WvKxdzdh.js";import"./SegmentedButton-BQz7Epju.js";import"./index-Bu0JLayq.js";import"./Select-ree90dyr.js";import"./InvisibleMessage-DXtpTzED.js";import"./slim-arrow-down-BnBg9S_U.js";import"./index-CxXm1z84.js";import"./index-D9jywx_4.js";import"./index-BdNQFRAd.js";import"./index-CoXQm9zc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dm126kNX.js";import"./group-2-BkGRWPAG.js";import"./sort-descending-BxfyQJVH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DCiN1loq.js";import"./utils-o-V_reuI.js";import"./index-CleMm7uf.js";import"./index-Bo5Haci7.js";import"./index-D4iqPqxf.js";import"./navigation-down-arrow-BYO53pAx.js";import"./navigation-right-arrow-C6Zb3cwl.js";import"./navigation-right-arrow-IKuy3H_N.js";import"./useCurrentTheme-ttlaH6tG.js";import"./index-V5WOMRHm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmdyIu_o.js";import"./paper-plane-6KY-vdDs.js";import"./index-B40iZj12.js";import"./less-CwcF3uHB.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
