import{j as e}from"./iframe-IArRSqE_.js";import{useMDXComponents as i}from"./index-j7nsZpBW.js";import{I as a,F as m}from"./CommandsAndQueries-Y7cLRyXq.js";import{M as s,C as p}from"./blocks-uZpIO_b1.js";import"./Tag-y4SxBR_K.js";import"./index-BxBWQyES.js";import{C as l}from"./ControlsWithNote-DjRiLU9r.js";import"./copy-7xAa2gpG.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BkqA6iXe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-AiAyIf9Q.js";import"./index-C0j3-f_Y.js";import"./index-gakMtpus.js";import"./Link-Ba0uGRWm.js";import"./index-NrHuYdPm.js";import"./index-Cs2OWExd.js";import"./index-DL3EiYIa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Gn0YqzQq.js";import"./addCustomCSSWithScoping-DtA6p3SW.js";import"./index-Dxbh4gdX.js";import"./information-CXNknbN_.js";import"./sys-enter-2-ByYwkCyE.js";import"./alert-ryPoEChu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-1N0Eq8bh.js";import"./delete-BpYGCW93.js";import"./settings-QUtefwRO.js";import"./NoData-BfNcqfUs.js";import"./IllustratedMessage-DbI5RVEz.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DdOfsEgr.js";import"./index-DAEebFt6.js";import"./index-CvKfJEnX.js";import"./slim-arrow-down-CSyKASAS.js";import"./Input-cW7JJ7b6.js";import"./ResponsivePopoverCommon.css-DVDWeT9K.js";import"./ValueStateMessage.css-W9SPqd3S.js";import"./Suggestions.css-DAgR6HvO.js";import"./ListBoxItemGroupTemplate-DiENw7p6.js";import"./ComboBoxItemGroup-QFrY2sVI.js";import"./ListItemBaseTemplate-C6zWgODK.js";import"./Token-Cd_Fzg2A.js";import"./ScrollEnablement-n9c5FDfp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2IILuHn.js";import"./ToggleButton-B-umBxz3.js";import"./SuggestionItem-BGp5wTE2.js";import"./index-PCqe8LzU.js";import"./Option-DNXns7Qu.js";import"./index-CPuaLVo-.js";import"./SegmentedButton-g_x-Qdey.js";import"./index-DzjJZIQt.js";import"./Select-Fl9If8OF.js";import"./InvisibleMessage-CvbQRyy5.js";import"./slim-arrow-down-CDqB4_RO.js";import"./index-BHZkDumw.js";import"./index-CplVzSTZ.js";import"./index-BIoXLnZD.js";import"./index-CXKXn_sm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2Icy2qTG.js";import"./group-2-CbKDFJtT.js";import"./sort-descending-CC3WileJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ebj139yB.js";import"./utils-wGJGGLR4.js";import"./index-DfFr6hKm.js";import"./index-DE-yEL4-.js";import"./index-Bl053VFJ.js";import"./navigation-down-arrow-BfaasJa4.js";import"./navigation-right-arrow-D98pnN-Z.js";import"./navigation-right-arrow-O-4HQyyY.js";import"./useCurrentTheme-BaKmNskh.js";import"./index-DpTPjJsC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BRehkAZJ.js";import"./paper-plane-logWDsxf.js";import"./index-PtMah9EX.js";import"./less-Crcn7S2y.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
