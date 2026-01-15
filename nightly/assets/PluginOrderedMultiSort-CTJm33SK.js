import{j as e}from"./iframe-DCh7S_7o.js";import{useMDXComponents as i}from"./index-CQ2Rgf0f.js";import{I as a,F as m}from"./CommandsAndQueries-BHuSnwTn.js";import{M as s,C as p}from"./blocks-DmZmqlp_.js";import"./Tag-CZuGcFNN.js";import"./index-C5sgOYh1.js";import{C as l}from"./ControlsWithNote-CnU_Z6uv.js";import"./copy-BrUTFvSK.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dyg4late.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvoAW6NG.js";import"./index-BwuMWpwU.js";import"./index-BzGBt6gL.js";import"./Link-DOaKYpM4.js";import"./index-CqXebPST.js";import"./index-CKcNqeBZ.js";import"./index-Gt-7HKkD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDzt8G5a.js";import"./addCustomCSSWithScoping-DaHSAyiF.js";import"./index-gCdJvzAZ.js";import"./information-FYwlptxJ.js";import"./sys-enter-2-CNa4r-Sw.js";import"./alert-Bj_hkuex.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUMFQ1pn.js";import"./delete-D5M82eeI.js";import"./settings-D-G-hMFI.js";import"./NoData-Cks1g_4P.js";import"./IllustratedMessage-c9qO6qKJ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BhckPa9Q.js";import"./index-5XMRhuzg.js";import"./index-BAgLClg3.js";import"./slim-arrow-down-D91T-40j.js";import"./Input-LTgloMqk.js";import"./ResponsivePopoverCommon.css-YvTmosB3.js";import"./ValueStateMessage.css-_40RyXNK.js";import"./Suggestions.css-CEeo2on1.js";import"./ListBoxItemGroupTemplate-8cMH_8Hg.js";import"./ComboBoxItemGroup-wv4ICvd4.js";import"./ListItemBaseTemplate-B1GyPNZx.js";import"./Token-CxvB1hc0.js";import"./ScrollEnablement-CHt3xTrM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D-7OIxnD.js";import"./ToggleButton-CWn-VFiI.js";import"./SuggestionItem-1WqpyGaM.js";import"./index-DQ_ZwByO.js";import"./Option-Bd427Odz.js";import"./index-CYDuPw7n.js";import"./SegmentedButton-MFLETAjB.js";import"./index-CG2oTHho.js";import"./Select-DgXiFLA1.js";import"./InvisibleMessage-CO-uxLEE.js";import"./slim-arrow-down-N5l622ic.js";import"./index-FRjNpllp.js";import"./index-CkoxQ7YT.js";import"./index-BaU_AFbL.js";import"./index-D-grjYU9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CuMi9SwU.js";import"./group-2-JRco5MZe.js";import"./sort-descending-B05TUdbs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_tQWfdMG.js";import"./utils-BHbbXcFh.js";import"./index-BF5blqws.js";import"./index-CTOIsb5D.js";import"./index-JhMtSdTx.js";import"./navigation-down-arrow-DlTIQ6fX.js";import"./navigation-right-arrow-Cca6wH2s.js";import"./navigation-right-arrow-VnZvrXIO.js";import"./useCurrentTheme-Dna0LUjC.js";import"./index-DnXcPtid.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0YNVX7D.js";import"./paper-plane-DoMiy80N.js";import"./index-NjhBYZF2.js";import"./less-DQi8Ps2m.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
