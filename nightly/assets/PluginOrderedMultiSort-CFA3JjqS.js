import{j as e}from"./iframe-DT7hQ3AG.js";import{useMDXComponents as i}from"./index-DTdIoXIV.js";import{I as a,F as m}from"./CommandsAndQueries-yjo1_LDl.js";import{M as s,C as p}from"./blocks-JRrvULZW.js";import"./Tag-DiLaQDn-.js";import"./index-B-uTHhu7.js";import{C as l}from"./ControlsWithNote-BFgEsEfk.js";import"./copy-BZt3PDtc.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DJf1Cndu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CddBOV7O.js";import"./index-C77H1xG_.js";import"./index-DnmZF6f8.js";import"./Link-G5lQtbW1.js";import"./index-DOozC4VO.js";import"./index-RcOcV3SW.js";import"./index-BT5-01iU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVNusK2J.js";import"./addCustomCSSWithScoping-BEpn4Gqh.js";import"./index-BRw-bjcq.js";import"./information-BTX-CwCK.js";import"./sys-enter-2-Ckqh2Zib.js";import"./alert-j2_xvgwV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQysclUq.js";import"./delete-CeyxsMhm.js";import"./settings-DNzL1VLp.js";import"./NoData-D55CCIT8.js";import"./IllustratedMessage-DdOGU8iu.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DEWd1NOO.js";import"./index-Cvz-A2Iy.js";import"./index-CMxGkooZ.js";import"./slim-arrow-down-D50am5_P.js";import"./Input-CiFaXTlp.js";import"./ResponsivePopoverCommon.css-K8_QNK7m.js";import"./ValueStateMessage.css-C74mOLeC.js";import"./Suggestions.css-Cd_sUhjR.js";import"./ListBoxItemGroupTemplate-MrpowO6L.js";import"./ComboBoxItemGroup-JHT7eKkU.js";import"./ListItemBaseTemplate-cYuiWrew.js";import"./Token-74hpwmue.js";import"./ScrollEnablement-C3Wt9Cue.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUKcPDwc.js";import"./ToggleButton-YrPJ68bM.js";import"./SuggestionItem-CihSCUQE.js";import"./index-Bq6tT57Z.js";import"./Option-Bhgcb91O.js";import"./index-CQXfWENp.js";import"./SegmentedButton-wIlHxxU5.js";import"./index-Bah3sHAa.js";import"./Select-BAJF9MUA.js";import"./InvisibleMessage-D4QZC_oh.js";import"./slim-arrow-down-Ddzx8t1A.js";import"./index-B9SneDxK.js";import"./index-CjyRf1Rx.js";import"./index-DZrXzplx.js";import"./index-BJs3_1HF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B45Yx_uW.js";import"./group-2-xTMpIWf0.js";import"./sort-descending-o9PDLWx6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUBCEi1k.js";import"./utils-MrKqThPe.js";import"./index-BO3xCydK.js";import"./index-BLjdJn29.js";import"./index-BGk70aYe.js";import"./navigation-down-arrow-DJEikV3a.js";import"./navigation-right-arrow-BNlj3PDZ.js";import"./navigation-right-arrow-C-qFNytF.js";import"./useCurrentTheme-DR--wRSh.js";import"./index-D1b27DJe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BIZQiftC.js";import"./paper-plane-GTcq8Dwh.js";import"./index-8AKQM2r8.js";import"./less-BZfAkQR5.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
