import{j as e}from"./iframe-C8VIz1cN.js";import{useMDXComponents as i}from"./index-DF3oZ9DD.js";import{I as a,F as m}from"./CommandsAndQueries-D_HB_HX-.js";import{M as s,C as p}from"./blocks-D-v6PHKz.js";import"./Tag-Ce9kI3uB.js";import"./index-W-CFrWn1.js";import{C as l}from"./ControlsWithNote-Cx_-zFP3.js";import"./copy-ChBzOjSf.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D67qtk91.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CK3WOJt5.js";import"./index-IuSSn5Ye.js";import"./index-zu9Y-W0w.js";import"./Link-8iQqMH3R.js";import"./index-DVHGI5Hf.js";import"./index-CQjs21SR.js";import"./index-D5h2jV28.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VSpt3ox9.js";import"./addCustomCSSWithScoping-BS3ufxCI.js";import"./index-C3PbHa_S.js";import"./information-Hi7RSuvY.js";import"./sys-enter-2-CeqtRGpA.js";import"./alert-DDLVUdt7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZkSj7f1q.js";import"./delete-BWsK_VKH.js";import"./settings-qFLjUWC6.js";import"./NoData-DAp2SfGX.js";import"./IllustratedMessage-C9PLoYct.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-5yNQCTB4.js";import"./index-KVQaVP4s.js";import"./index-B_1MGVU1.js";import"./slim-arrow-down-B8cEuo7F.js";import"./Input-CLlxaT1e.js";import"./ResponsivePopoverCommon.css-DqUNlHfC.js";import"./ValueStateMessage.css-B6YWQgJF.js";import"./Suggestions.css-D8Fz_6MJ.js";import"./ListBoxItemGroupTemplate-1p3uTFvN.js";import"./ComboBoxItemGroup-QPslV6ya.js";import"./ListItemBaseTemplate-Cvw5qOo6.js";import"./Token-Dn9Ptobu.js";import"./ScrollEnablement-BP5kJ35e.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BNEO49EL.js";import"./ToggleButton-B3yNtFBm.js";import"./SuggestionItem-DmgDiYJY.js";import"./index-DoGJ2Ola.js";import"./Option-SB8hrn2i.js";import"./index-9KOufAY0.js";import"./SegmentedButton-Cf4ggFUf.js";import"./index-C4x3d45G.js";import"./Select-DBK-52OP.js";import"./InvisibleMessage-CFIf5I9Q.js";import"./slim-arrow-down-Dfenv5Nd.js";import"./index-Mp4sU-yf.js";import"./index-D3UqCt3j.js";import"./index-DrJkgPlY.js";import"./index-DmUuUpYf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dj5ZiNQS.js";import"./group-2-DgejC8Se.js";import"./sort-descending-BfqjNPRC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CQqved4K.js";import"./utils-DXFoFOug.js";import"./index-BXRJsEsZ.js";import"./index-BVP8su8Y.js";import"./index-Cnckaa8J.js";import"./navigation-down-arrow-BzgaFSOU.js";import"./navigation-right-arrow-BnQ-O_WA.js";import"./navigation-right-arrow-CKh4AD9z.js";import"./useCurrentTheme-BDG1chbv.js";import"./index-CJGGUyAX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-74j_AZIC.js";import"./paper-plane-DxPVmNKd.js";import"./index-Ds5HV4bS.js";import"./less-Cqps4E0U.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
