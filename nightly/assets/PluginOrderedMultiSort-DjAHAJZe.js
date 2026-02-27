import{j as e}from"./iframe-DwL_U_4M.js";import{useMDXComponents as i}from"./index-DF1KaKr-.js";import{I as a,F as m}from"./CommandsAndQueries-Dz5IdIhG.js";import{M as s,C as p}from"./blocks-BkbxlrC9.js";import"./Tag-DWzoI0ag.js";import"./index-DgsDGr1U.js";import{C as l}from"./ControlsWithNote-DIfi3Kqe.js";import"./copy-Ds9kRn1x.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CDXE8hi2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOSg5TA3.js";import"./index-Dqsw9_lb.js";import"./index-Db6l5aQj.js";import"./Link-BdX-3dcl.js";import"./index-Vi2IbP0J.js";import"./index-DOHiCVZ-.js";import"./index-DKq2OUSi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dkqe7TGi.js";import"./addCustomCSSWithScoping-CE7eblPA.js";import"./index-ak-yAlnV.js";import"./information-BVmVMqd7.js";import"./sys-enter-2-B94IC9Xo.js";import"./alert-q5IjkK7H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BzDfrn-5.js";import"./delete-B6I0mZbY.js";import"./settings-D0VDSh3d.js";import"./NoData-C5CH-fWN.js";import"./IllustratedMessage-D15Dg6tX.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Demdetfk.js";import"./index-avC49Qb6.js";import"./index-DDkyeSI8.js";import"./slim-arrow-down-ByCeMr4H.js";import"./Input-usKDjDSg.js";import"./ResponsivePopoverCommon.css-CYR3rAjO.js";import"./ValueStateMessage.css-B8AI8KQ2.js";import"./Suggestions.css-CUQOIKID.js";import"./ListBoxItemGroupTemplate-DY25tZlO.js";import"./ComboBoxItemGroup-C3uToiVo.js";import"./ListItemBaseTemplate-BG93_W6E.js";import"./Token-CPniK2MA.js";import"./ScrollEnablement-CXLtDDEy.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-XOt9jxnj.js";import"./ToggleButton-CqFkZEKu.js";import"./SuggestionItem-B6ABjz01.js";import"./index-CPQ3riJn.js";import"./Option-CcfnhX8_.js";import"./index-BSRLtlm8.js";import"./SegmentedButton-m10F3ec1.js";import"./index-CGjb2kw-.js";import"./Select-BAca3Q1U.js";import"./InvisibleMessage-CeA3DNW4.js";import"./slim-arrow-down-BrKYHwbw.js";import"./index-BuK1gME8.js";import"./index-DMl1Ef82.js";import"./index-Dfj6plRX.js";import"./index-DHJJGQ-p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-7bwVwAS4.js";import"./group-2-DskrB8ej.js";import"./sort-descending-BXTEYcEJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxZSpw0g.js";import"./utils-SlffE8vX.js";import"./index-dMrvblLs.js";import"./index-Q2HLxENY.js";import"./index-B699imMP.js";import"./navigation-down-arrow-DQDDNWpd.js";import"./navigation-right-arrow-vbFYChxY.js";import"./navigation-right-arrow-BD_93O6z.js";import"./useCurrentTheme-Cixk1FnX.js";import"./index-CsMOgL6c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ABDzzkNE.js";import"./paper-plane-DcKv8aMK.js";import"./index-C3qjnFkq.js";import"./less-BreB1OVM.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
