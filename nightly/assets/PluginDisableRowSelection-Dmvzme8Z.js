import{j as e}from"./iframe-DrnWJux_.js";import{useMDXComponents as n}from"./index-8FDMxm68.js";import{I as r,F as s}from"./CommandsAndQueries-CNfp17jg.js";import{M as l,C as a}from"./blocks-BFYkdnf5.js";import"./Tag-C0-SLfdZ.js";import"./index-e4jmEiJR.js";import"./copy-BxyqZoQq.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DgUCPkq2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW1Fzcqx.js";import"./index-Cjg1iz22.js";import"./index-IUrjl9ty.js";import"./Link-DZzQtWK9.js";import"./index-DVoKYJte.js";import"./index-BNqm2zkD.js";import"./index-CBWW3th1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDLiZVZl.js";import"./addCustomCSSWithScoping-CbplP-kx.js";import"./index-CvpE5smH.js";import"./information-Djf1EDVN.js";import"./sys-enter-2-BH66Bhis.js";import"./alert-DUpqB4cV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SPiIDSVL.js";import"./delete-5wIjYt_5.js";import"./settings-CAxNiiQH.js";import"./NoData-HSKDxZyT.js";import"./IllustratedMessage-DN8OF25b.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CyleH7Va.js";import"./index-xdLxPP_I.js";import"./index-Cx3nmWT2.js";import"./slim-arrow-down-DtR6poag.js";import"./Input-4ibVB00q.js";import"./ResponsivePopoverCommon.css-e_PJNQiz.js";import"./ValueStateMessage.css-CmtfF9l5.js";import"./Suggestions.css-CmamAcfO.js";import"./ListBoxItemGroupTemplate-8x1YZ5vn.js";import"./ComboBoxItemGroup-CIBhgpWG.js";import"./ListItemBaseTemplate-BtkgFioN.js";import"./Token-Zy1XachM.js";import"./ScrollEnablement-1d_YGRve.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-yRZvETLK.js";import"./ToggleButton-C23ah_yf.js";import"./SuggestionItem-CB5GR-P0.js";import"./index-wMa-vVtE.js";import"./Option-CqIki-Fh.js";import"./index--9-z_1Kd.js";import"./SegmentedButton-r0yGjI_-.js";import"./index-DDrFA_hE.js";import"./Select-BOTkrqM0.js";import"./InvisibleMessage-C0LEPWkX.js";import"./slim-arrow-down-CVB2vj5c.js";import"./index-M4vNGXYB.js";import"./index-D6NM4VIr.js";import"./index-DKmNv-fY.js";import"./index-ON4dRT-g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DFUoYrZj.js";import"./group-2-DE19W3Nx.js";import"./sort-descending-DI4YTnq7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmAbNejI.js";import"./utils-EOKqhIpz.js";import"./index-Bm4VLMrF.js";import"./index-BC5oddu4.js";import"./index-DdJ94PAJ.js";import"./navigation-down-arrow-CVq5S1h3.js";import"./navigation-right-arrow-C068DZ1b.js";import"./navigation-right-arrow-CvUKgEjh.js";import"./useCurrentTheme-Co2qp8hO.js";import"./index-C4phtI-B.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BIBkdk-r.js";import"./paper-plane-Dk1M1e69.js";import"./index-DQW6kDtJ.js";import"./less-4cQ9RhUf.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
