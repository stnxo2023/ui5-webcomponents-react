import{j as e}from"./iframe-Bqqr6LRd.js";import{useMDXComponents as i}from"./index-Br4hcxKx.js";import{I as a,F as m}from"./CommandsAndQueries-18MjfAFY.js";import{M as s,C as p}from"./blocks-Cu3AJo0i.js";import"./Tag-CwbUvZ-m.js";import"./index-B04Rzf_f.js";import{C as l}from"./ControlsWithNote-DYY2Ctl5.js";import"./copy-Bhrou6qI.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-vtE8StoO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Eu6KN1OU.js";import"./index-DkY4sX_i.js";import"./index-B4-rpm-y.js";import"./Link-1XxvN6x_.js";import"./index-uP3qKYkO.js";import"./index-CFiaIaQb.js";import"./index-BFr0IkwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_soG_jSZ.js";import"./addCustomCSSWithScoping-DM5M0hyQ.js";import"./index-JLAmYdlt.js";import"./information-BWf6xVI-.js";import"./sys-enter-2-NBiqC5e1.js";import"./alert-eITYjrPF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B7kkSgms.js";import"./delete-FfRmnN9Y.js";import"./settings-DlvvQWHj.js";import"./NoData-Cnw4Kevx.js";import"./IllustratedMessage-lIXFssI-.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CLTUfrTe.js";import"./index-BNj-eJpZ.js";import"./index-3uq2_G_9.js";import"./slim-arrow-down-BZm47vFp.js";import"./Input-vcWbAoGp.js";import"./ResponsivePopoverCommon.css-DVi9wNNs.js";import"./ValueStateMessage.css-DbIMxrdT.js";import"./Suggestions.css-Co8vDkCG.js";import"./ListBoxItemGroupTemplate-uy6aJTW5.js";import"./ComboBoxItemGroup-BTvCb2Kc.js";import"./ListItemBaseTemplate-blGXO2lB.js";import"./Token-Bae9FhVJ.js";import"./ScrollEnablement-Cxy5Bzo0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Hnm9afMy.js";import"./ToggleButton-BgVCtHZJ.js";import"./SuggestionItem-D9DXt2U6.js";import"./index-ByYfrQl-.js";import"./Option-DOx9ZJ94.js";import"./index-DVPlV14N.js";import"./SegmentedButton-Bh--EjsV.js";import"./index-DtQZgkhi.js";import"./Select-BdSnKAc1.js";import"./InvisibleMessage-Bp5Ok78e.js";import"./slim-arrow-down-DZ6p3Bwi.js";import"./index-C4tZRj-d.js";import"./index-CwgCLf6W.js";import"./index-CJC3e2m0.js";import"./index-RQz2GPrc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwEOts-V.js";import"./group-2-CDRA2oju.js";import"./sort-descending-CUlou7JN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bVqMVufC.js";import"./utils-BMPv-A8F.js";import"./index-BgEIZIwU.js";import"./index-CKnDUyrg.js";import"./index-DCQPDRVf.js";import"./navigation-down-arrow-CxlZv9_c.js";import"./navigation-right-arrow-Wb7vj7-O.js";import"./navigation-right-arrow-83NG2uzj.js";import"./useCurrentTheme-dPM8OGfa.js";import"./index-DMlsPBCZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-5BH4o7Dk.js";import"./paper-plane-Abb2eC1B.js";import"./index-BeQjUBuP.js";import"./less-DEcTl8Yh.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(a,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(l,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const data = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];
const orderedIds = ['name', 'name2', 'age', 'age2'];
const tableHooks = [useOrderedMultiSort(orderedIds)]; // should be memoized
const TableComponent = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      sortable
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(m,{})]})}function Ke(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ke as default};
