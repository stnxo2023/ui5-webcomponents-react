import{j as e}from"./iframe-C8JI7dEI.js";import{useMDXComponents as i}from"./index-Dy3dbavl.js";import{I as a,F as m}from"./CommandsAndQueries-CAJp8baB.js";import{M as s,C as p}from"./blocks-dOc4ZvhQ.js";import"./Tag-Bh9-KKtm.js";import"./index-BEdzbacm.js";import{C as l}from"./ControlsWithNote-Dj8GdX7q.js";import"./copy-vzDhs336.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DNrBsuYV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bk0DUMEL.js";import"./index-BeiYD_4I.js";import"./index-B3nw03BL.js";import"./Link-g_43hnwI.js";import"./index-x3EANzLS.js";import"./index-DM_OMODM.js";import"./index-BQN-IPa2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DOnTZlr2.js";import"./addCustomCSSWithScoping-CSnh5KZm.js";import"./index-g7zsKBLX.js";import"./information-DGVxJHTG.js";import"./sys-enter-2-iEzb33ry.js";import"./alert-BG5FVPBd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DfyBeYJW.js";import"./delete-CkvGN4OZ.js";import"./settings-DTnV51pQ.js";import"./NoData-C4moVh3C.js";import"./IllustratedMessage-Dz_KDnet.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BfTOhDS6.js";import"./index-DUcLpr5Z.js";import"./index-NkzgGKyJ.js";import"./slim-arrow-down-BHxd8Vqs.js";import"./Input-CWkKGtsV.js";import"./ResponsivePopoverCommon.css-CM_pgGQI.js";import"./ValueStateMessage.css-CpDWY9cw.js";import"./Suggestions.css-gOeHYbiv.js";import"./ListBoxItemGroupTemplate-CWnRQTn9.js";import"./ComboBoxItemGroup-DbaEJT2y.js";import"./ListItemBaseTemplate-DZdo7lxN.js";import"./Token-BGcNiMJN.js";import"./ScrollEnablement-C16y6Z4B.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-nR7zaAP7.js";import"./ToggleButton-CBJChvXE.js";import"./SuggestionItem-DQgH2h9g.js";import"./index-DVcqEpTx.js";import"./Option-CZqJWi3Y.js";import"./index-BQdPAoWH.js";import"./SegmentedButton-BRjgQDpe.js";import"./index-FYP3kV_G.js";import"./Select-CnZcEXKA.js";import"./InvisibleMessage-CdXIl2K3.js";import"./slim-arrow-down-D-3Ia4oG.js";import"./index-mMTThdtc.js";import"./index-Ca9TsDXb.js";import"./index-Cj7dIYUI.js";import"./index-B0N44tcI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-6QwyGlxR.js";import"./group-2-BS-n-QGS.js";import"./sort-descending-DJuTnB3z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CNbH8ce-.js";import"./utils-DR9e_77z.js";import"./index-Deuc0gVb.js";import"./index-BM_FCtPz.js";import"./index-Cg6f3q8s.js";import"./navigation-down-arrow-B0wv2RPc.js";import"./navigation-right-arrow-UvdD6bou.js";import"./navigation-right-arrow-CwFJJrbP.js";import"./useCurrentTheme-CgmTzasZ.js";import"./index-Ccr8UAcd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DK7LFoXt.js";import"./paper-plane-jP92lQH-.js";import"./index-ISXhP0ey.js";import"./less-zqCYDGGq.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
