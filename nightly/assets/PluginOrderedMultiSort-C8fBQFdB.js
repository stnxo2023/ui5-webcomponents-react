import{j as e}from"./iframe-D1jKIypo.js";import{useMDXComponents as i}from"./index-M1_DZHmj.js";import{I as a,F as m}from"./CommandsAndQueries-BkaxH0BE.js";import{M as s,C as p}from"./blocks-BvvvBGFc.js";import"./Tag-BqsbpO_s.js";import"./index-ClSanEKt.js";import{C as l}from"./ControlsWithNote-Dvk3pXiG.js";import"./copy-DgqWK_AB.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BxN-8nyj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBeTD3z6.js";import"./index-T4x6aH8D.js";import"./index-DHEWI2kL.js";import"./Link-BTNp59uu.js";import"./index-C7kBl8gS.js";import"./index-BKZiIOM7.js";import"./index-D6PVc_6_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRCEREPf.js";import"./addCustomCSSWithScoping-BmLQ2iz1.js";import"./index-C56hzs5D.js";import"./information-B8vikb0m.js";import"./sys-enter-2-DByg53Ih.js";import"./alert-D9Mn7721.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bisacz7e.js";import"./delete-DBpx9Uar.js";import"./settings-DT6vtujH.js";import"./NoData-Dbt8BAMA.js";import"./IllustratedMessage-Cc1RezPx.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BxR36E9a.js";import"./index-DMuI27Hv.js";import"./index-Cg8oYFax.js";import"./slim-arrow-down-GqbbmAYy.js";import"./Input-D4NDzfB_.js";import"./ResponsivePopoverCommon.css-DN-Rc-d6.js";import"./ValueStateMessage.css-CbVwogXq.js";import"./Suggestions.css-BT6tIfnI.js";import"./ListBoxItemGroupTemplate-DH951dKz.js";import"./ComboBoxItemGroup-BkDWNxnF.js";import"./ListItemBaseTemplate-Cb9CjRMA.js";import"./Token-Bx0zxJB1.js";import"./ScrollEnablement-Duxr6xMC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DQRvO6kb.js";import"./ToggleButton-BC4YqGk8.js";import"./SuggestionItem-DisQaTGu.js";import"./index-Bbr0CVuQ.js";import"./Option-C3-dRc9X.js";import"./index-v4ksQ3mX.js";import"./SegmentedButton-Bi6AlYab.js";import"./index-Dhc01gl4.js";import"./Select-DLU6kJay.js";import"./InvisibleMessage-DNz0AAuG.js";import"./slim-arrow-down-CPVmWMXv.js";import"./index-DtOdn5nS.js";import"./index-B0YcVQvO.js";import"./index-lQPSd5CQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BDm3RZ5s.js";import"./group-2-sEBl_tJy.js";import"./sort-descending-CHOZqwWH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmFHmOLh.js";import"./utils-BMxMzzUu.js";import"./index-9CYjSZBT.js";import"./index-C-bA5g6R.js";import"./index-eeZV0lom.js";import"./navigation-down-arrow-WO_dZjFi.js";import"./navigation-right-arrow-BFrOVRzy.js";import"./navigation-right-arrow-Ct4noKTB.js";import"./useCurrentTheme-BD5qUSES.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C01Owi4P.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ds7nh71L.js";import"./paper-plane-DnsrmLa8.js";import"./index-XD1hamhe.js";import"./less-uxHdLqH7.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
