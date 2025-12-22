import{j as e}from"./iframe-BsSawXP0.js";import{useMDXComponents as i}from"./index-DRH2teYu.js";import{I as a,F as m}from"./CommandsAndQueries-iaa-8XF0.js";import{M as s,C as p}from"./blocks-CXfuXrzt.js";import"./Tag-CNlUSOaG.js";import"./index-Dmc2-Gsy.js";import{C as l}from"./ControlsWithNote-DQTiYyBM.js";import"./copy-DbiVl2cO.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DLYXARwu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DXS7E1yl.js";import"./index-BhcqlC9n.js";import"./index-Crhu2fjF.js";import"./Link-DnipqSX8.js";import"./index-ZJs7Cg1o.js";import"./index-ButdZwwN.js";import"./index-CaYKw0vF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Czipwrtn.js";import"./addCustomCSSWithScoping-BEgtXhqx.js";import"./index-BP2Csnbb.js";import"./information-BFVQ2hiO.js";import"./sys-enter-2-BXLoixfD.js";import"./alert-KY-hq2Su.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CEZH4ER0.js";import"./delete-ButlRKIL.js";import"./settings-DgaBkmev.js";import"./NoData-DyY0YPHN.js";import"./IllustratedMessage-DkFb21Jf.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-COTCkDuw.js";import"./index-Clu4yb0B.js";import"./index-CM8zKut5.js";import"./slim-arrow-down-BWzEg3vj.js";import"./Input-CHK-azg7.js";import"./ResponsivePopoverCommon.css-BuCRiGSq.js";import"./ValueStateMessage.css-CxbYYYMV.js";import"./Suggestions.css-DdsM6PD2.js";import"./ListBoxItemGroupTemplate-B-3mDJyE.js";import"./ComboBoxItemGroup-Dw_d3sOW.js";import"./ListItemBaseTemplate-CDcS09wQ.js";import"./Token-HmaRVBR5.js";import"./ScrollEnablement-D01WJw12.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DOvPo6gu.js";import"./ToggleButton-CxUiYm3U.js";import"./SuggestionItem-CbONpgrM.js";import"./index-BPcqLkVl.js";import"./Option-4QxAwSib.js";import"./index-DjGN7Yic.js";import"./SegmentedButton-gHDmBFsf.js";import"./index-BDNR9QnW.js";import"./Select-oYRWGBUT.js";import"./InvisibleMessage-B4KGUE1s.js";import"./slim-arrow-down-CJL4Ie8a.js";import"./index-BfglwwIM.js";import"./index-DtFzJEN2.js";import"./index-BsGDlDgM.js";import"./index-Weu8oCaJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BanJ6C6c.js";import"./group-2-B-E_bDzf.js";import"./sort-descending-Cvr30z_m.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BSbJCBkK.js";import"./utils-D1-fGTJi.js";import"./index-DPM6PqHk.js";import"./index-BZY_Xaz9.js";import"./index-DG65F-rj.js";import"./navigation-down-arrow-CQzMrHK9.js";import"./navigation-right-arrow-Ezz6Fe0V.js";import"./navigation-right-arrow-PF4vsXVe.js";import"./useCurrentTheme-DCDo5qP3.js";import"./index-Cl3MWrIl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D81DTT8f.js";import"./paper-plane-nbV5jTsh.js";import"./index-Cbnxib-d.js";import"./less-D0n2-PF4.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
