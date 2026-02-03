import{j as e}from"./iframe-CL0E0PWh.js";import{useMDXComponents as i}from"./index-Deybi7Kf.js";import{I as a,F as m}from"./CommandsAndQueries-CS7a2Ny4.js";import{M as s,C as p}from"./blocks-D7bkOkCE.js";import"./Tag-DqkevlzV.js";import"./index-CnAIuZ6O.js";import{C as l}from"./ControlsWithNote-DWbgiA9O.js";import"./copy-ZUxcJ4wZ.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DzqTEMVF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjZThSgP.js";import"./index-ChvCHLyh.js";import"./index-DKGx2Tou.js";import"./Link-opqw9zLH.js";import"./index-BmAVbjyV.js";import"./index-DNHIOaVp.js";import"./index-BjeAAycA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C2NuoADq.js";import"./addCustomCSSWithScoping-nc0b1DpN.js";import"./index-CDhMu5B6.js";import"./information-B3nD7cls.js";import"./sys-enter-2-C4Y2Nq9D.js";import"./alert-Dw8v7tUg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnAxgAVj.js";import"./delete-CEucf5yG.js";import"./settings-DZKOIFbW.js";import"./NoData-El9prw2w.js";import"./IllustratedMessage-D0QYzomd.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DQRO6FcQ.js";import"./index-CghszLxp.js";import"./index-BbltPikc.js";import"./slim-arrow-down-DhSa9dLQ.js";import"./Input-DUkmGF5S.js";import"./ResponsivePopoverCommon.css-CGTYgw9i.js";import"./ValueStateMessage.css-C7zqpLFs.js";import"./Suggestions.css-D1MvItNb.js";import"./ListBoxItemGroupTemplate-DduLgS-n.js";import"./ComboBoxItemGroup-B3VqZwL7.js";import"./ListItemBaseTemplate-DcYxvehU.js";import"./Token-CHhkGCwz.js";import"./ScrollEnablement-DJDUaKRX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BFyRiZ3I.js";import"./ToggleButton-nPzNF8JZ.js";import"./SuggestionItem-dwEDuAnB.js";import"./index-CWugch4w.js";import"./Option-YfFjlyIk.js";import"./index-ChNtVMH3.js";import"./SegmentedButton-BGPljDMM.js";import"./index-DuGAOmpy.js";import"./Select-BcB_Egz7.js";import"./InvisibleMessage-To8J9FEL.js";import"./slim-arrow-down-DsQgB3Sq.js";import"./index-Bw1B3i5S.js";import"./index-BvecTUj_.js";import"./index-CWBSa9lg.js";import"./index-DyNXbAXI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pPFeO57V.js";import"./group-2-DswFkUgQ.js";import"./sort-descending-Cp4PHVoq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BFAZrbzu.js";import"./utils-C6v86EjJ.js";import"./index-xBWwCLsb.js";import"./index-Ds_mffnJ.js";import"./index-CSOTLQaF.js";import"./navigation-down-arrow-BBpx7i5v.js";import"./navigation-right-arrow-BtI6edzV.js";import"./navigation-right-arrow-BjmboBdq.js";import"./useCurrentTheme-BWHA45hS.js";import"./index-E4EGWXgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-g6jee3iH.js";import"./paper-plane-9DGcdM4H.js";import"./index-CwsNlV8s.js";import"./less-DCgV-mbR.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
