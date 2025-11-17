import{j as e}from"./iframe-DeqKlIRG.js";import{useMDXComponents as i}from"./index-BkEa29Df.js";import{I as a,F as m}from"./CommandsAndQueries-BK0G3Pqq.js";import{M as s,C as p}from"./blocks-C1D2jvVQ.js";import"./Tag-EQmX-47F.js";import"./index-CW-zKJIF.js";import{C as l}from"./ControlsWithNote-DNWSkOtb.js";import"./copy-DS8sFIJH.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Z7tjv5z3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnqCxbWG.js";import"./index-D3fIG7Vo.js";import"./index-vsoaIVfP.js";import"./Link-DmriJHN9.js";import"./index-DZSRf0vt.js";import"./index-CUp9ZC_J.js";import"./index-BjGpgXu_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CD5youlR.js";import"./addCustomCSSWithScoping-W7fjoweE.js";import"./index-CNR4ri7j.js";import"./information-BKTQWge_.js";import"./sys-enter-2-qREtxQiM.js";import"./alert-J7MXwQPX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcfttK52.js";import"./delete-CzjS8jKj.js";import"./settings-BFTpzi3p.js";import"./NoData-DdbvMWeu.js";import"./IllustratedMessage-CwaNkNxb.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BrUTDG_M.js";import"./index-BJzWWHia.js";import"./index-DQNorMfg.js";import"./slim-arrow-down--R6acl1m.js";import"./Input-CTbiGavu.js";import"./ResponsivePopoverCommon.css-Dch4WVjM.js";import"./ValueStateMessage.css-DQDynnzI.js";import"./Suggestions.css-CqAFo46i.js";import"./ListBoxItemGroupTemplate-UGwk5YiJ.js";import"./ComboBoxItemGroup-DEdZ8U8Z.js";import"./ListItemBaseTemplate-D5-84s4y.js";import"./Token-ZAjnmiMh.js";import"./ScrollEnablement-C5rzfotJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8djI9Ll.js";import"./ToggleButton-BzmaRDgs.js";import"./SuggestionItem-DHUQVhWq.js";import"./index-Bm1-k_-z.js";import"./Option-CmUx6ft0.js";import"./index-CNAnBr4X.js";import"./SegmentedButton-DpjYxYdV.js";import"./index-DQlxzy1B.js";import"./Select-DC3vLiGW.js";import"./InvisibleMessage-BnUatQiz.js";import"./slim-arrow-down-BD3ZShnB.js";import"./index-BWbOjgM2.js";import"./index-DkHfyO0R.js";import"./index-CSAT2Cv9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DqGeWKN9.js";import"./group-2-CtuKuo3j.js";import"./sort-descending-e-Z9IEx-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpduKTu4.js";import"./utils-DFYX2ngj.js";import"./index-x8ATXu-z.js";import"./index-0XnoPyy6.js";import"./index-BvUS6apf.js";import"./navigation-down-arrow-C1Mzx0eB.js";import"./navigation-right-arrow-Dfh_jGI5.js";import"./navigation-right-arrow-Cc3Z_knn.js";import"./useCurrentTheme-DWe2YqPm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-UBCMfYla.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B59bvvXz.js";import"./paper-plane-DJj7TsmY.js";import"./index-BGawmT5r.js";import"./less-DyqqT9US.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
