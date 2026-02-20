import{j as e}from"./iframe-UvPIdInY.js";import{useMDXComponents as i}from"./index-C_wnFVs3.js";import{I as a,F as m}from"./CommandsAndQueries-aWAd2RXn.js";import{M as s,C as p}from"./blocks-D0ZGQgrL.js";import"./Tag-IR_ETKFS.js";import"./index-D9ZFZ6F-.js";import{C as l}from"./ControlsWithNote-C05KfOzz.js";import"./copy-BE3LAxqE.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-NClPDdr6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-O5JzLw5N.js";import"./index-Ba89z5vW.js";import"./index-mim0XNOQ.js";import"./Link-BLS11L9W.js";import"./index-B0iNMIwQ.js";import"./index-CXKBVYRd.js";import"./index-Bvo9-fQy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNxf-Cq6.js";import"./addCustomCSSWithScoping-7EyTrlnL.js";import"./index-D_al-J9d.js";import"./information-BPTpUfW-.js";import"./sys-enter-2-CWNypIDi.js";import"./alert-CSWOQ1yD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNZebN0l.js";import"./delete-Bym_CuQ_.js";import"./settings-jDUCJDFQ.js";import"./NoData-CBn9s1P8.js";import"./IllustratedMessage-B1dE8UDr.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DZ3pxCsC.js";import"./index-DO7Ar4RD.js";import"./index-BkfsPSLU.js";import"./slim-arrow-down-CRxJDNVT.js";import"./Input-Pl2nYyWp.js";import"./ResponsivePopoverCommon.css-BoaZ2bBu.js";import"./ValueStateMessage.css-byYAWo4s.js";import"./Suggestions.css-PTQQr1HI.js";import"./ListBoxItemGroupTemplate-DxT2oqBg.js";import"./ComboBoxItemGroup-CLKsYy_r.js";import"./ListItemBaseTemplate-Dx_Z0YEo.js";import"./Token-COE2mfsf.js";import"./ScrollEnablement-CroMdMI1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-n4LvxKbk.js";import"./ToggleButton-BR5G7Qz8.js";import"./SuggestionItem-DktTsUPu.js";import"./index-CGnLWb7c.js";import"./Option-CjyU-APj.js";import"./index-Bd9J232t.js";import"./SegmentedButton-BAUcRfoB.js";import"./index-lHbjqnZy.js";import"./Select-CuymjFC1.js";import"./InvisibleMessage-BEHZLLTD.js";import"./slim-arrow-down-CVwAqm1x.js";import"./index-CGJMk3cv.js";import"./index-C5TAYWLJ.js";import"./index-DJo0pI-N.js";import"./index-C819hH3W.js";import"./IconDesign-DXd8PPVF.js";import"./filter-LoYXXqh9.js";import"./group-2-BDjs1tne.js";import"./sort-descending-C01UE9Ps.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXPBHWGL.js";import"./utils-CkuEKQeg.js";import"./index-DeIw8vVn.js";import"./index-CkiSiMgq.js";import"./index-QMPfoD9h.js";import"./navigation-down-arrow-1mpPyuVY.js";import"./navigation-right-arrow-DS2ZZyTy.js";import"./navigation-right-arrow-CMjLnqRz.js";import"./useCurrentTheme-1LGZD4iD.js";import"./index-xGgYhz7_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-58ApOM2Q.js";import"./paper-plane-HxkV1_E_.js";import"./index-Cu85sTvP.js";import"./less-BL-B7Va5.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
