import{j as e}from"./iframe-5rXfnPaz.js";import{useMDXComponents as i}from"./index-BqyI3aT9.js";import{I as a,F as m}from"./CommandsAndQueries-Xz4gCbJR.js";import{M as s,C as p}from"./blocks-_HtGHxpQ.js";import"./Tag-BLU9xLwR.js";import"./index-TJORVIjM.js";import{C as l}from"./ControlsWithNote-CyGeYvva.js";import"./copy-3qQuBQub.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CcOUaagY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3cU9WTA.js";import"./index-BB6TdVmi.js";import"./index-BgPkgqrz.js";import"./Link-IINvsuro.js";import"./index-X9fuUMPC.js";import"./index-DVjD8wbo.js";import"./index-Bna4bEkh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BikUYAZO.js";import"./addCustomCSSWithScoping-Cv8BQzm9.js";import"./index-DN9fi-2P.js";import"./information-C9cuRXqE.js";import"./sys-enter-2-y9J_ETy2.js";import"./alert-CnXddf7Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnsKBKKm.js";import"./delete-CqVU8QSy.js";import"./settings-C6C2rMP5.js";import"./NoData-C6zrEqdJ.js";import"./IllustratedMessage-DVsNM8KB.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BY5FKPNb.js";import"./index-B2arcq-S.js";import"./index-Bxgt3Ou_.js";import"./slim-arrow-down-CG38GsAh.js";import"./Input-4O3kRwLq.js";import"./ResponsivePopoverCommon.css-C1xBOZoa.js";import"./ValueStateMessage.css-BdW6AGS6.js";import"./Suggestions.css-BLWo3F15.js";import"./ListBoxItemGroupTemplate-BZVK3C21.js";import"./ComboBoxItemGroup-BWv8Jfn6.js";import"./ListItemBaseTemplate-CP6xKZ4g.js";import"./Token-BUGkfYZH.js";import"./ScrollEnablement-C55G51IY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cua6cuRg.js";import"./ToggleButton-BeKGXq8p.js";import"./SuggestionItem-Cz6KMxHh.js";import"./index-Bij98Q-R.js";import"./Option-B7oChQ-z.js";import"./index-BQE7n4xd.js";import"./SegmentedButton-BsxmG9wr.js";import"./index-BmXkEItO.js";import"./Select-Cw6Szu5N.js";import"./InvisibleMessage-lYBgp4_P.js";import"./slim-arrow-down-BJXvyOyf.js";import"./index-0cRpwkC4.js";import"./index-VzaEEiDt.js";import"./index-B15VKN5k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BzinyoGp.js";import"./group-2-BQu0Iyd9.js";import"./sort-descending-rgN241_I.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ZZRaGFiZ.js";import"./utils-CkPWUOLN.js";import"./index-D0YwngEh.js";import"./index-DGROWVtJ.js";import"./index-Ct1kN3_s.js";import"./navigation-down-arrow-CN6lpdwx.js";import"./navigation-right-arrow-_aRbtzGU.js";import"./navigation-right-arrow-DxIZ5HVF.js";import"./useCurrentTheme-PC0lES2v.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0PC4qEQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cij_psQ1.js";import"./paper-plane-CpxuoSNW.js";import"./index-D89dDm_o.js";import"./less-arHg6uEN.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
