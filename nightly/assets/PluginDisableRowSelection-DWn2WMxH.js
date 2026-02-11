import{j as e}from"./iframe-BvHqSIyK.js";import{useMDXComponents as n}from"./index-C9vrwz77.js";import{I as r,F as s}from"./CommandsAndQueries-B3hUlog3.js";import{M as l,C as a}from"./blocks-BxoU3Yu6.js";import"./Tag-99RoGaFy.js";import"./index-BB14dXBi.js";import"./copy-BP-1S5h9.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BzEtAFg2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAufjIqI.js";import"./index-Cb6d5Ui8.js";import"./index-Dvhux2R5.js";import"./Link-CgDmPG1r.js";import"./index-BX2w3DS0.js";import"./index-lpb4Baiz.js";import"./index--L__lImq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3VWoxNN.js";import"./addCustomCSSWithScoping-Bvbl39sy.js";import"./index-B7BXsln5.js";import"./information-zngl4LUv.js";import"./sys-enter-2-D9Z1FJcM.js";import"./alert-F1tFIdLT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnXdKyTy.js";import"./delete-CuG3RM5m.js";import"./settings-D_BTzOE6.js";import"./NoData-lpA7htfb.js";import"./IllustratedMessage-Cf-o6GMJ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DVGSOjnh.js";import"./index-Bow0_lnK.js";import"./index-DrmQroFf.js";import"./slim-arrow-down-C2UZE7h0.js";import"./Input-Br-sY9ky.js";import"./ResponsivePopoverCommon.css-sekIyiK-.js";import"./ValueStateMessage.css-BRJx2fcS.js";import"./Suggestions.css-CV4MjGEF.js";import"./ListBoxItemGroupTemplate-B-OeNXtJ.js";import"./ComboBoxItemGroup-B2NxOsQm.js";import"./ListItemBaseTemplate-BWetPhdo.js";import"./Token-6nUBCvO_.js";import"./ScrollEnablement-HwiTsDO2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-WAmqQIXu.js";import"./ToggleButton-bhikrMK7.js";import"./SuggestionItem-_aBHJoN3.js";import"./index-DnkLMjxR.js";import"./Option-fB_CKO8N.js";import"./index-OFuAM7HC.js";import"./SegmentedButton-df2qYRN0.js";import"./index-BjZ8DHVA.js";import"./Select-BaeqruA9.js";import"./InvisibleMessage-BSe3iB9m.js";import"./slim-arrow-down-BORyrk-u.js";import"./index-DqS5V8WW.js";import"./index-KF0fvs5m.js";import"./index-C71q_atH.js";import"./index-DRekqyHy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BXvWevTj.js";import"./group-2-DOLgcJ-T.js";import"./sort-descending-CxAjsNpq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D39_iadB.js";import"./utils-Bm3EbaDm.js";import"./index-DVh5GQMZ.js";import"./index-C_6rr-HH.js";import"./index-BW296Krt.js";import"./navigation-down-arrow-DT5dtpnO.js";import"./navigation-right-arrow-PuFMbFjH.js";import"./navigation-right-arrow-I9zR3Bwc.js";import"./useCurrentTheme-BLBS4rCs.js";import"./index-B5WxCuR5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlCv73Ap.js";import"./paper-plane-CSXFE3V8.js";import"./index-Cxmpze17.js";import"./less-BtNTjp5U.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
