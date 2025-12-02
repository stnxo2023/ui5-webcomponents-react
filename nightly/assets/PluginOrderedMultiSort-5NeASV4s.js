import{j as e}from"./iframe-CojmUvbr.js";import{useMDXComponents as i}from"./index-yNE59oSe.js";import{I as a,F as m}from"./CommandsAndQueries-aZHAlwyo.js";import{M as s,C as p}from"./blocks-CCIsbg9K.js";import"./Tag-Dsf3IOJa.js";import"./index-Brr98IUO.js";import{C as l}from"./ControlsWithNote-DQ8Crg8_.js";import"./copy-BaosELJI.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CG_nlWId.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWXpW2Nz.js";import"./index-CJ7ufDVc.js";import"./index-YKIZAZmt.js";import"./Link-DrGCnOch.js";import"./index-DSq2zmmv.js";import"./index-n-K8h2zA.js";import"./index-BIRLYBEm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBX4KpMg.js";import"./addCustomCSSWithScoping-IwiFNes4.js";import"./index-CW7nJiyw.js";import"./information-BEykFvbu.js";import"./sys-enter-2-BjWZZR70.js";import"./alert-CeJt7tDB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CscadejP.js";import"./delete-BrCc2tej.js";import"./settings-rTgMGjKN.js";import"./NoData-3cxxI4xB.js";import"./IllustratedMessage-DbYC26wy.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-UIvAx6KX.js";import"./index-Ca07kfjm.js";import"./index-Wu8As2d7.js";import"./slim-arrow-down-CnEombk5.js";import"./Input-CMo9bLuk.js";import"./ResponsivePopoverCommon.css-DnVyVoGn.js";import"./ValueStateMessage.css-awQruozh.js";import"./Suggestions.css-CNoZckwt.js";import"./ListBoxItemGroupTemplate-B7epaTRM.js";import"./ComboBoxItemGroup-CcEHTpa7.js";import"./ListItemBaseTemplate-BhUR_jwE.js";import"./Token-BNQ0MNpG.js";import"./ScrollEnablement-CsFUE6Hy.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x9obTEZ-.js";import"./ToggleButton-B6FN-zj3.js";import"./SuggestionItem-BgJHRloZ.js";import"./index-CshUp08T.js";import"./Option-CcKhKS8d.js";import"./index-DNSi3hz_.js";import"./SegmentedButton-QKVFOy33.js";import"./index-Bw1q_xPl.js";import"./Select-DbE_8KmI.js";import"./InvisibleMessage-C9kaBW3M.js";import"./slim-arrow-down-CmTsJEng.js";import"./index-s2T_O_TR.js";import"./index-BnQtKf9Y.js";import"./index-fxNkC4ZC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BapWlnQS.js";import"./group-2-BCIyFqCc.js";import"./sort-descending-DCnBtPjC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BTW6f1H7.js";import"./utils-BOJTBdKc.js";import"./index-CGQmGuch.js";import"./index-Bf-N28hY.js";import"./index-k6h4lExd.js";import"./navigation-down-arrow-LIHAsR-b.js";import"./navigation-right-arrow-BaaRnnci.js";import"./navigation-right-arrow-Dej95qlj.js";import"./useCurrentTheme-iOMvhnFg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-9IGeFUbL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BjmSWWr0.js";import"./paper-plane-j8ePWbJq.js";import"./index-C9WiPxnz.js";import"./less-OV79TxhL.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
