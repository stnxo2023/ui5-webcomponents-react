import{j as e}from"./iframe-BFR-dU1l.js";import{useMDXComponents as n}from"./index-BRr5RSu7.js";import{I as r,F as s}from"./CommandsAndQueries-kf2pSDF5.js";import{M as l,C as a}from"./blocks-DTAC1Gxc.js";import"./Tag-Uk5Wz18b.js";import"./index-Dv1E9yaY.js";import"./copy-Cc7XHaG7.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-6WvMeLTE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVrFyQhm.js";import"./index-CoobbAbb.js";import"./index-CvzwYeg1.js";import"./Link-DIc6gIaF.js";import"./index-C3CLOvIH.js";import"./index-CFDOjZnD.js";import"./index-VAuUAMe6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1LKO1Rr.js";import"./addCustomCSSWithScoping-BBCqvj7y.js";import"./index-BAzgfXr-.js";import"./information-BanFECND.js";import"./sys-enter-2-RSAR57lC.js";import"./alert-4GMQX2Dz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bre5WKvO.js";import"./delete-Y4MN8EPb.js";import"./settings-C5PdrSD7.js";import"./NoData-D141lpVQ.js";import"./IllustratedMessage-BfK1-CBz.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C5PgBu43.js";import"./index-CMwxuJux.js";import"./index-COniDLqo.js";import"./slim-arrow-down-CvKg8OAM.js";import"./Input-D0YvA3g2.js";import"./ResponsivePopoverCommon.css-ibscBu1F.js";import"./ValueStateMessage.css-C9lMAnB3.js";import"./Suggestions.css-C4f0pZkx.js";import"./ListBoxItemGroupTemplate-Dh4PKV-0.js";import"./ComboBoxItemGroup-rKpFlsYW.js";import"./ListItemBaseTemplate-D8Z5MxI5.js";import"./Token-BGFsQDvi.js";import"./ScrollEnablement-CfAnlfcJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-M14QpxFJ.js";import"./ToggleButton-DGco4olw.js";import"./SuggestionItem-hWg0drFq.js";import"./index-DDITdqkG.js";import"./Option-Dwt0iGD4.js";import"./index-18hKTgX7.js";import"./SegmentedButton-CU3a8U94.js";import"./index-jGlg1Tpp.js";import"./Select-CJOaE89q.js";import"./InvisibleMessage-DJZlazdl.js";import"./slim-arrow-down-DT6ArkyX.js";import"./index-Bk51xnFB.js";import"./index-Cz9JInQX.js";import"./index-BJJoBJpU.js";import"./index-BQpDXUqr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vbZWVN7G.js";import"./group-2-CpnU8dYn.js";import"./sort-descending-CHWK_uwN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7t2vM4-.js";import"./utils-zLg6B11g.js";import"./index-DuHOFkjk.js";import"./index-JszbODGU.js";import"./index-BlP_k8BJ.js";import"./navigation-down-arrow-CEE7gple.js";import"./navigation-right-arrow-rNNmicl3.js";import"./navigation-right-arrow-BjgC-iOk.js";import"./useCurrentTheme-DOwAIF-p.js";import"./index-B9yIejFl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BjUg15jO.js";import"./paper-plane-pcXL71Bw.js";import"./index-C7IQ_RM9.js";import"./less-Ygdngcc5.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
