import{j as e}from"./iframe-_aM0UtJ2.js";import{useMDXComponents as i}from"./index-BfzIu2dE.js";import{I as a,F as m}from"./CommandsAndQueries-DzKXmTWy.js";import{M as s,C as p}from"./blocks-l9d8PUx_.js";import"./Tag-BfFHPicD.js";import"./index-DK-65CGT.js";import{C as l}from"./ControlsWithNote-Tdvj7GRk.js";import"./copy-DFcekAfZ.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CgldXt7D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4-JCcJ5.js";import"./index-D94cPjQU.js";import"./index-HG9KwvVi.js";import"./Link-DVTfY9Y-.js";import"./index-ChnKUkkG.js";import"./index-daYey1G6.js";import"./index-B2FptVvG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5ZlAJzQ.js";import"./addCustomCSSWithScoping-JIDtcj4a.js";import"./index-80py4d9m.js";import"./information-Bugjbsmi.js";import"./sys-enter-2-B3MGAVo9.js";import"./alert-CNC7DRI_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDin49Qt.js";import"./delete-qfJnygw7.js";import"./settings-4mK1hrn-.js";import"./NoData-8b23hioQ.js";import"./IllustratedMessage-BGHWa-aT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-d2xsz83Y.js";import"./index-BrzyWVSa.js";import"./index-B7RpqTLg.js";import"./slim-arrow-down-BRjLnbot.js";import"./Input-MazSOwes.js";import"./ResponsivePopoverCommon.css-C9u2x3-0.js";import"./ValueStateMessage.css-DszbwuLg.js";import"./Suggestions.css-qx180UMs.js";import"./ListBoxItemGroupTemplate-DuHSjG0t.js";import"./ComboBoxItemGroup-D0cmVbGL.js";import"./ListItemBaseTemplate-DFJr1Bva.js";import"./Token-C2yl10l2.js";import"./ScrollEnablement-Bhq2qTDI.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BU1IwfYt.js";import"./ToggleButton-DYX2agjM.js";import"./SuggestionItem-C_mbbanp.js";import"./index-DKAKDwua.js";import"./Option-NFGo4imz.js";import"./index-ozNHZ0R1.js";import"./SegmentedButton-BCvDohGJ.js";import"./index-Cf7GYcbF.js";import"./Select-C0UwiMyq.js";import"./InvisibleMessage-C6DL-Jud.js";import"./slim-arrow-down-cxFeYscI.js";import"./index-C_W6PJrr.js";import"./index-Cr_o_sGI.js";import"./index-4LhBYovK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNRItJq8.js";import"./group-2-BSuDu3BP.js";import"./sort-descending-CjYTHc_q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D0_4QMUt.js";import"./utils-RjvQRYKv.js";import"./index-BxkisXba.js";import"./index-Di6FiDqU.js";import"./index-D-tGJU1i.js";import"./navigation-down-arrow-CXVkGqrk.js";import"./navigation-right-arrow-OXPBdahQ.js";import"./navigation-right-arrow-CCBpu_jK.js";import"./useCurrentTheme-C1Tgc9SL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CtV42zsn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CaZ25Jpx.js";import"./paper-plane-II9HzJH8.js";import"./index-Drkmvmr5.js";import"./less-BOPdbN0q.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
