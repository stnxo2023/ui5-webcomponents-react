import{j as e}from"./iframe-DBm0KKUf.js";import{useMDXComponents as i}from"./index-Cb8BN12q.js";import{I as a,F as m}from"./CommandsAndQueries-CpqOMU0z.js";import{M as s,C as p}from"./blocks-FcKewvzz.js";import"./Tag-DHtv4MjB.js";import"./index-D7OJqnCE.js";import{C as l}from"./ControlsWithNote-DRn_SwoD.js";import"./copy-CNODe6O-.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BLgNBJMA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_dJ2uG6.js";import"./index-DSRVWdNr.js";import"./index-4ENMwVth.js";import"./Link-Ct9C2jWR.js";import"./index-T96p6BIB.js";import"./index-DM0eg3qI.js";import"./index-Ccfulnyg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPyGpBqG.js";import"./addCustomCSSWithScoping-DI0oMdV8.js";import"./index-BAUdr3me.js";import"./information-BXDVlLxS.js";import"./sys-enter-2-B25DXxek.js";import"./alert-ia9fKkJ9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B_Jzu1HO.js";import"./delete-BY36aH4u.js";import"./settings-CQc9w4bD.js";import"./NoData-CViU0Ozk.js";import"./IllustratedMessage-MjiMC3xO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-eL9Z4FLY.js";import"./index-De7LfL69.js";import"./index-D_cxxf2Z.js";import"./slim-arrow-down-Cowwh0_-.js";import"./Input-Cfy0dJpQ.js";import"./ResponsivePopoverCommon.css-CRVvh9cv.js";import"./ValueStateMessage.css-C2gzUKxC.js";import"./Suggestions.css-DL6rQFj9.js";import"./ListBoxItemGroupTemplate-BZry8l0p.js";import"./ComboBoxItemGroup-CFPpIkre.js";import"./ListItemBaseTemplate-szCNoKvB.js";import"./Token-DTTQs5IV.js";import"./ScrollEnablement-BmlbbPDx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BCbp7Udb.js";import"./ToggleButton-Mf6uWEVu.js";import"./SuggestionItem-C7a_40Ak.js";import"./index-DynyRFQt.js";import"./Option-CiNmJ5BU.js";import"./index-BwSqZNPb.js";import"./SegmentedButton-BZBdQYL3.js";import"./index-DokMIoCV.js";import"./Select-BWNl-hA7.js";import"./InvisibleMessage-yauS0ttk.js";import"./slim-arrow-down-DTR_Gkm6.js";import"./index-BTj_7a8m.js";import"./index-BWmDHky_.js";import"./index-CvZtp7o3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BaMtSB4y.js";import"./group-2-DOmGtWHP.js";import"./sort-descending-hllpiI0c.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BuVBMWqW.js";import"./utils-CYtcnYeu.js";import"./index-D1sExh_N.js";import"./index-SQvWNwud.js";import"./index-CfFC_XPL.js";import"./navigation-down-arrow-CsEzXbPX.js";import"./navigation-right-arrow-Cdvo4nV_.js";import"./navigation-right-arrow-CbShz5Fd.js";import"./useCurrentTheme-BKGNtfIr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D2OeM_OL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DB-7ieif.js";import"./paper-plane-C7mdkPbA.js";import"./index-Cm-cbULR.js";import"./less-CYPnM2pk.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
