import{j as e}from"./iframe-DQUr2w9e.js";import{useMDXComponents as i}from"./index-uEfBZmVP.js";import{I as a,F as m}from"./CommandsAndQueries-BHqFNGC1.js";import{M as s,C as p}from"./blocks-CTU8TRaT.js";import"./Tag-CGtAgsci.js";import"./index-CHsUWkTe.js";import{C as l}from"./ControlsWithNote-DLcvzWYI.js";import"./copy-DGFXVa9Z.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-SPeB0i7X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbVmwePH.js";import"./index-2aCTTGoH.js";import"./index-BtkqIySi.js";import"./Link-BHxA_VPp.js";import"./index-CSO1LyL1.js";import"./index-B4uSF3Nb.js";import"./index-CNdVS1MW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpPxZFHh.js";import"./addCustomCSSWithScoping-CYkIrudw.js";import"./index-4ddJk1R_.js";import"./information-BjEP1Brt.js";import"./sys-enter-2-ByVlGYkM.js";import"./alert-B-w-1j20.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B0oXpXse.js";import"./delete-CKJlw0ul.js";import"./settings-BqZXbBzz.js";import"./NoData-CTfdrvzI.js";import"./IllustratedMessage-dFsirP1_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-NmYqQAmV.js";import"./index-BfpPLO0z.js";import"./index-aZ35b9A0.js";import"./slim-arrow-down-BLkEvkYI.js";import"./Input-BJ886YXD.js";import"./ResponsivePopoverCommon.css-DUGj3C9j.js";import"./ValueStateMessage.css-DPUhzbsV.js";import"./Suggestions.css-CbdO06AC.js";import"./ListBoxItemGroupTemplate-C3D3SS1D.js";import"./ComboBoxItemGroup-Cal7Qapr.js";import"./ListItemBaseTemplate-LMCDkFyc.js";import"./Token-BqJOakxt.js";import"./ScrollEnablement-CQrRan6G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-55PzQGAK.js";import"./ToggleButton-XKDt_BMd.js";import"./SuggestionItem-Bq6dqzFI.js";import"./index-BNBBhcR5.js";import"./Option-DSK6MS5F.js";import"./index-CoKAYfuw.js";import"./SegmentedButton-DyE0zOmq.js";import"./index-d-fBwfZp.js";import"./Select-DkZSi5CF.js";import"./InvisibleMessage-DVNnV7lb.js";import"./slim-arrow-down-DsQdRoV3.js";import"./index-DXtBm23l.js";import"./index-EOPyMVa_.js";import"./index-Cf9XpyMJ.js";import"./index-v9z5Zdm8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlQVZrE2.js";import"./group-2-BlX12n4R.js";import"./sort-descending-Dh1rcEGz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxR_3u2a.js";import"./utils-ru1t-ijs.js";import"./index-C3E04by4.js";import"./index-C9Yvpw-p.js";import"./index-D38IEv3D.js";import"./navigation-down-arrow-MdREaxMc.js";import"./navigation-right-arrow-VpBpYwUO.js";import"./navigation-right-arrow-D80pj5jS.js";import"./useCurrentTheme-DnzGvo4K.js";import"./index-NRqn2cP6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hjHvlJ0f.js";import"./paper-plane-dLhNd5G8.js";import"./index-D3fHXWzm.js";import"./less-CgyKfQmL.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
