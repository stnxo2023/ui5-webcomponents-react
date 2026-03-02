import{j as e}from"./iframe-Brff1rmP.js";import{useMDXComponents as i}from"./index-CqBWQ9Zx.js";import{I as a,F as m}from"./CommandsAndQueries-Z2F9olV7.js";import{M as s,C as p}from"./blocks-Cx2b2NzS.js";import"./Tag-CO6ENRz9.js";import"./index-DlA7--5Z.js";import{C as l}from"./ControlsWithNote-Dryrg7rF.js";import"./copy-Bv1OuOcO.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CjilTa_F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cl8f3le-.js";import"./index-GNhj6rYz.js";import"./index-DYmdKmkq.js";import"./Link-CnNfKrga.js";import"./index-CHjRsrmQ.js";import"./index-BM_H4FxE.js";import"./index-SsKZpktE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hZd9oRLF.js";import"./addCustomCSSWithScoping-DWThNXxY.js";import"./index-C7l_yPP_.js";import"./information-Cs5lMjWh.js";import"./sys-enter-2-D0GbakMF.js";import"./alert-DvXA8o8i.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGKptoJD.js";import"./delete-C9vgo_nn.js";import"./settings-K-nxoclT.js";import"./NoData-D4gr7NQb.js";import"./IllustratedMessage-EHffJ8mB.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-xJ_W-ozk.js";import"./index-v9HL1hDi.js";import"./index-BK9Dppbt.js";import"./slim-arrow-down-DHZaQUOz.js";import"./Input-Dd38fmul.js";import"./ResponsivePopoverCommon.css-CCXZCmBy.js";import"./ValueStateMessage.css-DyEd-7MM.js";import"./Suggestions.css-A8d5VcXf.js";import"./ListBoxItemGroupTemplate-DDtryC-p.js";import"./ComboBoxItemGroup-DiF6Vj82.js";import"./ListItemBaseTemplate-BPRyBwPx.js";import"./Token-CGQBD38e.js";import"./ScrollEnablement-L6YMa_Sh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFw-rkJd.js";import"./ToggleButton-CJv8CO-v.js";import"./SuggestionItem-CFU47XHi.js";import"./index-xNbk8EkH.js";import"./Option-CrDw5azF.js";import"./index-BNRoZ_z-.js";import"./SegmentedButton-C-poCUsN.js";import"./index-_Xx0BHEx.js";import"./Select-Chae-TJe.js";import"./InvisibleMessage-ByZ2WPzN.js";import"./slim-arrow-down-C94xZ_93.js";import"./index-C4Pu6wgx.js";import"./index-B597IRDL.js";import"./index-Sey1U4Nj.js";import"./index-ByUJYxuO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1HOC25c.js";import"./group-2-Bl1lsFHE.js";import"./sort-descending-CLPvvO8q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DuPpFX5n.js";import"./utils-CGg_sa7o.js";import"./index-ChaPxfcm.js";import"./index-X945bjAw.js";import"./index-Cft4P2eI.js";import"./navigation-down-arrow-Cb_GEVcv.js";import"./navigation-right-arrow-Dj8u635l.js";import"./navigation-right-arrow-C3t6w78M.js";import"./useCurrentTheme-DEOFEBbn.js";import"./index-BAklYe1X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-utzGJSQW.js";import"./paper-plane-4WEe8zaP.js";import"./index-NLOcJtOO.js";import"./less-Cjh9x-Bl.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
