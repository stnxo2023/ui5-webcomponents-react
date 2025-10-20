import{j as e}from"./iframe-7SE3nFh2.js";import{useMDXComponents as n}from"./index-C0FWbpZL.js";import{I as r,F as s}from"./CommandsAndQueries-BztwtTDr.js";import{M as l,C as a}from"./blocks-BJKQ4CAZ.js";import"./Tag-CAr8yJM3.js";import"./index-DcFj-mpl.js";import"./copy-CDZIXxHa.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-5KmaRjUl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BdnA4cG1.js";import"./index-DZIYhziJ.js";import"./index-BH5SLEfd.js";import"./Link-DJshYrFL.js";import"./index-CJza0w__.js";import"./index-CHnd9ZVx.js";import"./index-cZBRAzkp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bx3Mb7HN.js";import"./addCustomCSSWithScoping-CrtLyOIc.js";import"./index-CZm6iJJ6.js";import"./information-CEHY-zK8.js";import"./sys-enter-2-Db6aMDI3.js";import"./alert-iGUotenY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DX_cHiRh.js";import"./delete-DvpuJF5J.js";import"./settings-D2UzRPAT.js";import"./NoData-BCcG8w18.js";import"./IllustratedMessage-Dil2N_hm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CbSgwdhQ.js";import"./index-Bu5BEf5E.js";import"./index-CvKc0QoP.js";import"./slim-arrow-down-BERkBWfL.js";import"./Input-kEzXj9c6.js";import"./ResponsivePopoverCommon.css-DqKEq-kc.js";import"./ValueStateMessage.css-wZQPf3zp.js";import"./Suggestions.css-DT0Rp6yR.js";import"./ListBoxItemGroupTemplate-mAb34mFu.js";import"./ComboBoxItemGroup-D6FTKSzF.js";import"./ListItemBaseTemplate-bpaX827C.js";import"./Token-D_Njw8ms.js";import"./ScrollEnablement-u1O_vcM6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-5gZgEeYH.js";import"./ToggleButton-Cdz6JUWa.js";import"./SuggestionItem-Cqdhpmzk.js";import"./index-B9dV6-hD.js";import"./Option-CLrwwL2p.js";import"./index-eRJ2H-45.js";import"./SegmentedButton-Bj_PgquH.js";import"./index-CehLK0E0.js";import"./Select-dx2eK6Cc.js";import"./InvisibleMessage-BpijQ7HL.js";import"./slim-arrow-down-BKj1QpKR.js";import"./index-C_8wufNy.js";import"./index-DRT-RGQF.js";import"./index-Dx0AFnS0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlvRaiGC.js";import"./group-2-Bh0Ip3fO.js";import"./sort-descending-C2lI-VAa.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BzfZ0HZ7.js";import"./utils-7WkdhtMP.js";import"./index-Bk-K0ke_.js";import"./index-C14sIMtK.js";import"./index-r--j9iEI.js";import"./navigation-down-arrow-Bok7EDK6.js";import"./navigation-right-arrow-CSEs046N.js";import"./navigation-right-arrow-Cssv535x.js";import"./useCurrentTheme-CSmhjyR7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DKaDhcRF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DTz5BFmM.js";import"./paper-plane-CNwDjI7Y.js";import"./index-dbJ2BFy5.js";import"./less-D_HisN9f.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
