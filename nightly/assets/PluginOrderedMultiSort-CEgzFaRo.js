import{j as e}from"./iframe-D2RmpAtO.js";import{useMDXComponents as i}from"./index-DiCnj7u5.js";import{I as a,F as m}from"./CommandsAndQueries-DvQ8BP-Z.js";import{M as s,C as p}from"./blocks-B4Ev-YXh.js";import"./Tag-BWvTCWNx.js";import"./index-chYDxilS.js";import{C as l}from"./ControlsWithNote-CSf0wYTV.js";import"./copy-BW6gA-qB.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-in5GCq84.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BmyeAcwI.js";import"./index-D_sGGZyZ.js";import"./index-i343fVly.js";import"./Link-BzydKqDb.js";import"./index-Cm3TMOjS.js";import"./index-BeHBKa6s.js";import"./index-B2C__dDn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-fsmSjvJs.js";import"./addCustomCSSWithScoping-BvD5X_dz.js";import"./index-BieATUAG.js";import"./information-DyTRt78C.js";import"./sys-enter-2-BwNIaTDW.js";import"./alert-DiSc05uc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Db38Z4Pj.js";import"./delete-DXJZ50Ci.js";import"./settings-BpqXPtye.js";import"./NoData-ChGvGCJu.js";import"./IllustratedMessage-SNT48L7A.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DBajHU1V.js";import"./index-Bz7BBt1U.js";import"./index-CaYBagE_.js";import"./slim-arrow-down-BwUXjubF.js";import"./Input-0ALk-Ulf.js";import"./ResponsivePopoverCommon.css-Bu5Qc2tF.js";import"./ValueStateMessage.css-CBAbMCri.js";import"./Suggestions.css-C02nfz6y.js";import"./ListBoxItemGroupTemplate-CQ-G_Pqg.js";import"./ComboBoxItemGroup-DdwIQLIR.js";import"./ListItemBaseTemplate-DRnGHt_8.js";import"./Token-DYfjH-EW.js";import"./ScrollEnablement-Cm66ONH8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXwMpDTl.js";import"./ToggleButton-I7SxqJxx.js";import"./SuggestionItem-DhOTrIOf.js";import"./index-2Qoy0_XG.js";import"./Option-CMZEceos.js";import"./index-CJS4plQE.js";import"./SegmentedButton-DCg5Kbga.js";import"./index-D7uSjRf5.js";import"./Select-0CvvSnwM.js";import"./InvisibleMessage-CtMSUBcM.js";import"./slim-arrow-down-DBeujC-e.js";import"./index-b3oa9-sK.js";import"./index-B6DGWZKt.js";import"./index-BfnbleU3.js";import"./index-C_50PDoe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMBb2cz_.js";import"./group-2-BliQX8hG.js";import"./sort-descending-a4FwLL9N.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-owAeJ2tr.js";import"./utils-DpDD1Kik.js";import"./index-CLQQIqtQ.js";import"./index-B7nTnMBS.js";import"./index-DutVsOSq.js";import"./navigation-down-arrow-4ifYH4EI.js";import"./navigation-right-arrow-BZw6OC7t.js";import"./navigation-right-arrow-DPuDFCzF.js";import"./useCurrentTheme-DFOB5aNG.js";import"./index-B1sF1lOb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-y3GnqRIn.js";import"./paper-plane-DyqWmJB4.js";import"./index-DuNaoNls.js";import"./less-BWoqsgqa.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
