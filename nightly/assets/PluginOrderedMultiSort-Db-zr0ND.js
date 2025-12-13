import{j as e}from"./iframe-eEgnsybz.js";import{useMDXComponents as i}from"./index-KUh3EncO.js";import{I as a,F as m}from"./CommandsAndQueries-Bkg2fbFD.js";import{M as s,C as p}from"./blocks-C6o1VobD.js";import"./Tag-CyCgeEFX.js";import"./index-DlBhGBWU.js";import{C as l}from"./ControlsWithNote-eCm13KUA.js";import"./copy-7FG8PsWo.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-5zkjYXUy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9oALoTs.js";import"./index-BwSVcTHk.js";import"./index-0PjuM5S8.js";import"./Link-BuGrrtP2.js";import"./index-yhFX9aug.js";import"./index-Dc3QGU-g.js";import"./index-CGhTEkOT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CH2VPx4y.js";import"./addCustomCSSWithScoping-DKRk5X62.js";import"./index-Pa5s-fex.js";import"./information-CKacNM7A.js";import"./sys-enter-2-D0fhmdQp.js";import"./alert-CxkpN3m7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CzaZCJnb.js";import"./delete-irFC0K_n.js";import"./settings-D6sE3rZn.js";import"./NoData-CEs0myHh.js";import"./IllustratedMessage-BX1XofDb.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Ceffab9D.js";import"./index-C7F47GNT.js";import"./index-r3V5CQu0.js";import"./slim-arrow-down-DZYetS2j.js";import"./Input-DKxPEOnV.js";import"./ResponsivePopoverCommon.css-CM05b5HY.js";import"./ValueStateMessage.css-qrxzD_3f.js";import"./Suggestions.css-CU6yhqWV.js";import"./ListBoxItemGroupTemplate-bJFFdWvz.js";import"./ComboBoxItemGroup-BirbcqPA.js";import"./ListItemBaseTemplate-CAjFk73p.js";import"./Token-B7VqEG9Z.js";import"./ScrollEnablement-Dj9e3xCo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bv5pHXMI.js";import"./ToggleButton-D2k4wWl7.js";import"./SuggestionItem-aqON_76G.js";import"./index-DhUt20lO.js";import"./Option-DUm3mIhb.js";import"./index-B2x2MP6X.js";import"./SegmentedButton-CDk8cxu9.js";import"./index-BWQjygaM.js";import"./Select-D9goYstD.js";import"./InvisibleMessage-2xnh5Mfi.js";import"./slim-arrow-down-DUTlQ5v8.js";import"./index-Du8qhg8T.js";import"./index-CdnhyucW.js";import"./index-B0W8XC3p.js";import"./index-DYImmnpQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJuRHVvc.js";import"./group-2-DNitl-KP.js";import"./sort-descending-BJx8GPj8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpWpj11z.js";import"./utils-CyuipnON.js";import"./index-DeVsfJce.js";import"./index-DXfAtOJv.js";import"./index-BIEBBMh8.js";import"./navigation-down-arrow-BDetjDEa.js";import"./navigation-right-arrow-SIiFeyVd.js";import"./navigation-right-arrow-U36zYERp.js";import"./useCurrentTheme-mfP2heJH.js";import"./index-BEbiu7Cw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dm7lVWDa.js";import"./paper-plane-iHPbU_pU.js";import"./index-BzLGb63M.js";import"./less-B0zSuI_N.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
