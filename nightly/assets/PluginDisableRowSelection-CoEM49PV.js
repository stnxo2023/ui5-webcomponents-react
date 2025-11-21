import{j as e}from"./iframe-DVV5VFB7.js";import{useMDXComponents as n}from"./index-qyzUrO0d.js";import{I as r,F as s}from"./CommandsAndQueries-lBZKGmp7.js";import{M as l,C as a}from"./blocks-D1E9_7c3.js";import"./Tag-CQyymDzh.js";import"./index-Bn7PyzsE.js";import"./copy-Cn3WomF2.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-8wFH9WTq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dqdoz1dV.js";import"./index-BkDm8D7N.js";import"./index-gDTG9hvV.js";import"./Link-DfNmKUcn.js";import"./index-gNtvK5Wx.js";import"./index-ZnLduBLK.js";import"./index-BHIms4DS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_xwBI5c.js";import"./addCustomCSSWithScoping-DOzeCYXW.js";import"./index-DCIIs4BW.js";import"./information-rc4de9km.js";import"./sys-enter-2-DXmpS6_D.js";import"./alert-DByE3GtL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-s9VskAhU.js";import"./delete-CgivBeZ4.js";import"./settings-CK2OfFA6.js";import"./NoData-DxLA3V-q.js";import"./IllustratedMessage-DQuWY2vM.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BLT6QU8O.js";import"./index-j-oJ2Ibk.js";import"./index-9zpcVlZY.js";import"./slim-arrow-down-DEwtX93l.js";import"./Input-Bcwk4klZ.js";import"./ResponsivePopoverCommon.css-D_3NdHu-.js";import"./ValueStateMessage.css-CTyww1Cy.js";import"./Suggestions.css-_wFG5-Dq.js";import"./ListBoxItemGroupTemplate-DmAn1Srm.js";import"./ComboBoxItemGroup-Cqu9NEa3.js";import"./ListItemBaseTemplate-7WJ7iCbr.js";import"./Token-K0CZHa6Z.js";import"./ScrollEnablement-D9nrHUMi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-g5MAuYgn.js";import"./ToggleButton-DW6jAKtP.js";import"./SuggestionItem-CWxMLjlC.js";import"./index-BZgPzTwo.js";import"./Option-DWq_yYfl.js";import"./index-BmV7OUNq.js";import"./SegmentedButton-BJTPiUGO.js";import"./index-C5tIVlnD.js";import"./Select-BMXrr-12.js";import"./InvisibleMessage-D0yEGssO.js";import"./slim-arrow-down-DH4qIoze.js";import"./index-DwbiADyX.js";import"./index-Co5rF_Rr.js";import"./index-BeQBrD2O.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D8sf2cJm.js";import"./group-2-DPk6j2HH.js";import"./sort-descending-5IRe054w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Imht7Owq.js";import"./utils-Dn8MODVh.js";import"./index-D24dphxh.js";import"./index-WcUeGWn8.js";import"./index-5P6_7SIE.js";import"./navigation-down-arrow-C5SV30gd.js";import"./navigation-right-arrow-D7hf5-64.js";import"./navigation-right-arrow-CDfIknCA.js";import"./useCurrentTheme-DO8jocYJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CnFm52uS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BHovj_YO.js";import"./paper-plane-BbjknDKE.js";import"./index-pF5ldAnN.js";import"./less-CtNkBeC3.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
