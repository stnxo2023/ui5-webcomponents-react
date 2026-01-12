import{j as e}from"./iframe-BWwaFrUe.js";import{useMDXComponents as i}from"./index-YNaFuKct.js";import{I as a,F as m}from"./CommandsAndQueries-BTZsnlDx.js";import{M as s,C as p}from"./blocks-CUOVkMW1.js";import"./Tag-C1jS-OQM.js";import"./index-D57lmYpc.js";import{C as l}from"./ControlsWithNote-BNlVEjwz.js";import"./copy-CotvDhWa.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BMcdVAna.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWyfCle9.js";import"./index-CPNWsz0F.js";import"./index-D2byHvrl.js";import"./Link-BKxr4_LG.js";import"./index-CjEjkqT0.js";import"./index-BHGImwbL.js";import"./index-CZL1WN1v.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9SYXEMy.js";import"./addCustomCSSWithScoping-DT9AYQXn.js";import"./index-B87YjzNM.js";import"./information-DMTe0ysY.js";import"./sys-enter-2-DQvPI1W2.js";import"./alert-BsvI3BFP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZJM36qku.js";import"./delete-DOgupLX8.js";import"./settings-4vio0KZw.js";import"./NoData-CX6GFhcP.js";import"./IllustratedMessage-DQsQaQ5a.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C-6BQoNw.js";import"./index-B9Gz8ycv.js";import"./index-CN1ndyZW.js";import"./slim-arrow-down-CmSn7Sik.js";import"./Input-CY2_jO7N.js";import"./ResponsivePopoverCommon.css-DLB8912B.js";import"./ValueStateMessage.css-BD8m1HnI.js";import"./Suggestions.css-BBBvQtOR.js";import"./ListBoxItemGroupTemplate-yf3HFsAX.js";import"./ComboBoxItemGroup-D2AL_rCQ.js";import"./ListItemBaseTemplate-QNOu6P8O.js";import"./Token-DzMcWdi_.js";import"./ScrollEnablement-JdqAnokE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D-3ZFt0p.js";import"./ToggleButton-Cf5cO5pE.js";import"./SuggestionItem-RvTEtoqI.js";import"./index-V1xW8ahy.js";import"./Option-tKeldczj.js";import"./index-BwnRWUYP.js";import"./SegmentedButton-SW6UDtT6.js";import"./index-DMORvkBO.js";import"./Select-DMl3Tw2N.js";import"./InvisibleMessage-C817vP8u.js";import"./slim-arrow-down-DkhplX3E.js";import"./index-c5nDhqAm.js";import"./index-C8H6ETRj.js";import"./index-MtPA4SgJ.js";import"./index-BD5bs7yp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClKCT9rN.js";import"./group-2-Dpay8E0t.js";import"./sort-descending-DyGsNaKs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vQwIUp-n.js";import"./utils-CdBNuaY-.js";import"./index-BDRKN7at.js";import"./index-BXKFr2l-.js";import"./index-mG3R14Tg.js";import"./navigation-down-arrow-BHHjgb5v.js";import"./navigation-right-arrow-CsvEnEN9.js";import"./navigation-right-arrow-Bmpxqsod.js";import"./useCurrentTheme-DCWBN9yR.js";import"./index-BuCzF1I2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ccg0UGwD.js";import"./paper-plane-o_qW1OCn.js";import"./index-BmyR6abe.js";import"./less-BiUEcVEK.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
