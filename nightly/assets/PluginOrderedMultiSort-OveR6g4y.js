import{j as e}from"./iframe-BFR-dU1l.js";import{useMDXComponents as i}from"./index-BRr5RSu7.js";import{I as a,F as m}from"./CommandsAndQueries-kf2pSDF5.js";import{M as s,C as p}from"./blocks-DTAC1Gxc.js";import"./Tag-Uk5Wz18b.js";import"./index-Dv1E9yaY.js";import{C as l}from"./ControlsWithNote-BAOTy4FM.js";import"./copy-Cc7XHaG7.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-6WvMeLTE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVrFyQhm.js";import"./index-CoobbAbb.js";import"./index-CvzwYeg1.js";import"./Link-DIc6gIaF.js";import"./index-C3CLOvIH.js";import"./index-CFDOjZnD.js";import"./index-VAuUAMe6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1LKO1Rr.js";import"./addCustomCSSWithScoping-BBCqvj7y.js";import"./index-BAzgfXr-.js";import"./information-BanFECND.js";import"./sys-enter-2-RSAR57lC.js";import"./alert-4GMQX2Dz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bre5WKvO.js";import"./delete-Y4MN8EPb.js";import"./settings-C5PdrSD7.js";import"./NoData-D141lpVQ.js";import"./IllustratedMessage-BfK1-CBz.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C5PgBu43.js";import"./index-CMwxuJux.js";import"./index-COniDLqo.js";import"./slim-arrow-down-CvKg8OAM.js";import"./Input-D0YvA3g2.js";import"./ResponsivePopoverCommon.css-ibscBu1F.js";import"./ValueStateMessage.css-C9lMAnB3.js";import"./Suggestions.css-C4f0pZkx.js";import"./ListBoxItemGroupTemplate-Dh4PKV-0.js";import"./ComboBoxItemGroup-rKpFlsYW.js";import"./ListItemBaseTemplate-D8Z5MxI5.js";import"./Token-BGFsQDvi.js";import"./ScrollEnablement-CfAnlfcJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-M14QpxFJ.js";import"./ToggleButton-DGco4olw.js";import"./SuggestionItem-hWg0drFq.js";import"./index-DDITdqkG.js";import"./Option-Dwt0iGD4.js";import"./index-18hKTgX7.js";import"./SegmentedButton-CU3a8U94.js";import"./index-jGlg1Tpp.js";import"./Select-CJOaE89q.js";import"./InvisibleMessage-DJZlazdl.js";import"./slim-arrow-down-DT6ArkyX.js";import"./index-Bk51xnFB.js";import"./index-Cz9JInQX.js";import"./index-BJJoBJpU.js";import"./index-BQpDXUqr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vbZWVN7G.js";import"./group-2-CpnU8dYn.js";import"./sort-descending-CHWK_uwN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7t2vM4-.js";import"./utils-zLg6B11g.js";import"./index-DuHOFkjk.js";import"./index-JszbODGU.js";import"./index-BlP_k8BJ.js";import"./navigation-down-arrow-CEE7gple.js";import"./navigation-right-arrow-rNNmicl3.js";import"./navigation-right-arrow-BjgC-iOk.js";import"./useCurrentTheme-DOwAIF-p.js";import"./index-B9yIejFl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BjUg15jO.js";import"./paper-plane-pcXL71Bw.js";import"./index-C7IQ_RM9.js";import"./less-Ygdngcc5.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
