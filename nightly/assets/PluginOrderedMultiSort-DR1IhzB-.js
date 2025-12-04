import{j as e}from"./iframe-DE39xjY3.js";import{useMDXComponents as i}from"./index-B1qSHwoi.js";import{I as a,F as m}from"./CommandsAndQueries-wC1q0WhV.js";import{M as s,C as p}from"./blocks-Cj7tOVqz.js";import"./Tag-BcxJDVC2.js";import"./index-C8AzPoWi.js";import{C as l}from"./ControlsWithNote-B9Ky9-J_.js";import"./copy-SEjk-khs.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dm3vFAGq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dsw7NAug.js";import"./index-BNYAB6MW.js";import"./index-BytuhZWp.js";import"./Link-hO4SGyLs.js";import"./index-HOUf-EPf.js";import"./index-Di0pge-x.js";import"./index-Crm_KYfs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-k5eDoZ.js";import"./addCustomCSSWithScoping-DCdxMV4u.js";import"./index-BUS86rTR.js";import"./information-D52A35LG.js";import"./sys-enter-2-7R5MTao8.js";import"./alert-jxZm3lXE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdKgUR62.js";import"./delete-T1M_hPVY.js";import"./settings-XWWzFZWZ.js";import"./NoData-BNLEFYaI.js";import"./IllustratedMessage-0CDzNeqq.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-4G5p8MTf.js";import"./index-CqckHJYn.js";import"./index-BmDqxMXN.js";import"./slim-arrow-down-vZvcV55c.js";import"./Input-CDMm82xo.js";import"./ResponsivePopoverCommon.css-DaP0rv_w.js";import"./ValueStateMessage.css-Bvo1cNpH.js";import"./Suggestions.css-1EDkOxF1.js";import"./ListBoxItemGroupTemplate-CUQfeUJ-.js";import"./ComboBoxItemGroup-BIc4wSHj.js";import"./ListItemBaseTemplate-0o_W1vV3.js";import"./Token-quGRFBgA.js";import"./ScrollEnablement-hjYz1q63.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CEgmb2VH.js";import"./ToggleButton-B6AmBWfy.js";import"./SuggestionItem-CSHXkULE.js";import"./index-DuKoEI6Y.js";import"./Option-BmVldsJm.js";import"./index-GTGNu_hG.js";import"./SegmentedButton-aldcdMHp.js";import"./index-BBixzXs5.js";import"./Select-BgNYkp7a.js";import"./InvisibleMessage-Bo13I8mP.js";import"./slim-arrow-down-P7fnq_jn.js";import"./index-iZDIdJI7.js";import"./index-RO4633KM.js";import"./index-BcBVfEn1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B-mQ8wvX.js";import"./group-2-siU1eXmx.js";import"./sort-descending-3jJw3NoM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBKL-rtx.js";import"./utils-C2TjvMrQ.js";import"./index-BT2WMOZw.js";import"./index-uMqGW6va.js";import"./index-DtdnKfDC.js";import"./navigation-down-arrow-BajRWoAT.js";import"./navigation-right-arrow-DZoWocnv.js";import"./navigation-right-arrow-X0_-tw_X.js";import"./useCurrentTheme-CpMEMe1l.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D2kS9nAL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-rImD7_or.js";import"./paper-plane-DPstJvtB.js";import"./index-CPZM_tz3.js";import"./less-JTA9sx1u.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
