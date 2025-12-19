import{j as e}from"./iframe-fnu3Vo41.js";import{useMDXComponents as i}from"./index-BSrpAODL.js";import{I as a,F as m}from"./CommandsAndQueries-Bopzu-n8.js";import{M as s,C as p}from"./blocks-BS5BROTL.js";import"./Tag-BiBlBJWE.js";import"./index-BbmVly28.js";import{C as l}from"./ControlsWithNote-BWgvPZ7_.js";import"./copy-Db06aovL.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-cEuR5nNv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SCFjt_Ga.js";import"./index-CJk9IgGL.js";import"./index-rPkavUv0.js";import"./Link-BLTuinuO.js";import"./index-BUdZGDL2.js";import"./index-C8EzOXR3.js";import"./index-DahYWRMR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2MON8lG.js";import"./addCustomCSSWithScoping-DzZplljN.js";import"./index-B7d1u9D1.js";import"./information-C4CUHJ6u.js";import"./sys-enter-2-Bq1R0WAk.js";import"./alert-xdJdEaU1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cg3qW77l.js";import"./delete-DmiOTRnw.js";import"./settings-zDmG-3im.js";import"./NoData-nQLO9EZ8.js";import"./IllustratedMessage-BXzbNCL1.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-DBeKPlkH.js";import"./index-Brwr5FUa.js";import"./index-BDJpTTku.js";import"./slim-arrow-down-XRKMzLPf.js";import"./Input-Detc7Ii6.js";import"./ResponsivePopoverCommon.css-CxPrgmxN.js";import"./ValueStateMessage.css-CQ4OVJ9G.js";import"./Suggestions.css-vM9OM1GI.js";import"./ListBoxItemGroupTemplate-BYeB1Cl_.js";import"./ComboBoxItemGroup-4jucO2i6.js";import"./ListItemBaseTemplate-FeG_oPAJ.js";import"./Token-DAQ1DS0x.js";import"./ScrollEnablement-WgQtsSmN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRTdZnQJ.js";import"./ToggleButton-57cIItv1.js";import"./SuggestionItem-C8mqfWho.js";import"./index-CX4U2Jek.js";import"./Option-DD3Zi9NK.js";import"./index-jyed2UIl.js";import"./SegmentedButton-gKY9F3pt.js";import"./index-BRftw348.js";import"./Select-lOtzZ3fx.js";import"./InvisibleMessage-Bg2OVWgo.js";import"./slim-arrow-down-DRNkvrF7.js";import"./index-D5Hq6_Re.js";import"./index-BhBUN7y5.js";import"./index-oA7Crhpd.js";import"./index-Cw1Aet_f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-h3NHKT.js";import"./group-2-DwY0Xc-S.js";import"./sort-descending-Bc55MwdY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bwnkn5xs.js";import"./utils-DYh0gtXT.js";import"./index-DYKo8bXl.js";import"./index-BPeyg5AZ.js";import"./index-BrR0l5NR.js";import"./navigation-down-arrow-B7W9-sHI.js";import"./navigation-right-arrow-D_oDOzWj.js";import"./navigation-right-arrow-B69jNS7a.js";import"./useCurrentTheme-BetgmMaZ.js";import"./index-q7ej9ehA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEjni14h.js";import"./paper-plane-DOa3jfws.js";import"./index-JCFhG4pE.js";import"./less-BaCzhisI.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
