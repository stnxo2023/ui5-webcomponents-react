import{j as e}from"./iframe-DoO3B8k6.js";import{useMDXComponents as i}from"./index-c3qBf9j-.js";import{I as a,F as m}from"./CommandsAndQueries-BgTP9rvd.js";import{M as s,C as p}from"./blocks-SZ1zCtFT.js";import"./Tag-BQH01MnI.js";import"./index-0e8xkLwE.js";import{C as l}from"./ControlsWithNote-8xXb6PAb.js";import"./copy-_xuz2Nel.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CmXCVKCh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSLJX4WE.js";import"./index-CQlaTUTv.js";import"./index-DHXtHkXk.js";import"./Link-BjpII7wh.js";import"./index-DkL8yUNi.js";import"./index-DNsrF3vl.js";import"./index-DeXyQXgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRtsvWdt.js";import"./addCustomCSSWithScoping-BMQmLAx8.js";import"./index-DcEck9MJ.js";import"./information-CQ3_UNon.js";import"./sys-enter-2-04wFErlJ.js";import"./alert-TTaxVgBW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIhT2n-D.js";import"./delete-SjnFcxET.js";import"./settings-C0lq9GEs.js";import"./NoData-DfBjPnbb.js";import"./IllustratedMessage-CXdSvR4a.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-xMjYb9KY.js";import"./index-CpiZNEne.js";import"./index-DQXIYNyl.js";import"./slim-arrow-down-GZWBJmnW.js";import"./Input-C10NYIPu.js";import"./ResponsivePopoverCommon.css-CPXMLCds.js";import"./ValueStateMessage.css-69Ktf8Dg.js";import"./Suggestions.css-DN6X2W_Y.js";import"./ListBoxItemGroupTemplate-B5AqpDrM.js";import"./ComboBoxItemGroup-j1Qew58i.js";import"./ListItemBaseTemplate-BsAW94PE.js";import"./Token-DC4trEDg.js";import"./ScrollEnablement-vDfjB2It.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BmumZdm7.js";import"./ToggleButton-C4VP5bTt.js";import"./SuggestionItem-IO39S43j.js";import"./index-B94XsNA0.js";import"./Option-BaLD8Fma.js";import"./index-NWr0Tsrk.js";import"./SegmentedButton-X1XX7xUF.js";import"./index-C_c4Byeq.js";import"./Select-9rIpwA3F.js";import"./InvisibleMessage-CgykMR3a.js";import"./slim-arrow-down-t7AVMtWo.js";import"./index-DQKXzwtk.js";import"./index-D9vcEjIT.js";import"./index-MnZkDyaG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ynF8pjf8.js";import"./group-2-Detpstok.js";import"./sort-descending-B0qjzB_P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_g-vZKh.js";import"./utils-LOEo2xLm.js";import"./index-GNYcE7dh.js";import"./index-DXQ56gFw.js";import"./index-BZhKH3An.js";import"./navigation-down-arrow-B33glP6f.js";import"./navigation-right-arrow-CD5NCtjH.js";import"./navigation-right-arrow-BNO-nAvK.js";import"./useCurrentTheme-DlkHXRgd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DVfnIZQS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0_rTS9I.js";import"./paper-plane-BCWKCy3u.js";import"./index-DZMzSe-F.js";import"./less-2TELAs2h.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
