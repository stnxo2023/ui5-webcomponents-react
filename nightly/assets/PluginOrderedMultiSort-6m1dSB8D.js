import{j as e}from"./iframe-DJ3L9Q7k.js";import{useMDXComponents as i}from"./index-CgKASuks.js";import{I as a,F as m}from"./CommandsAndQueries-J0DynbNC.js";import{M as s,C as p}from"./blocks-CtbNLxKJ.js";import"./Tag-dHoy1aOg.js";import"./index-Drb2TrHE.js";import{C as l}from"./ControlsWithNote-jLX323Le.js";import"./copy-dl-GArcT.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-XmI_OBRf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiXweYzS.js";import"./index-4H2gG8m_.js";import"./index-DQGcZUo3.js";import"./Link-CI3a-uZg.js";import"./index-DDFmE4EA.js";import"./index-BTen11gj.js";import"./index-C_wfJoh6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BifEEb3N.js";import"./addCustomCSSWithScoping-BamJJJtZ.js";import"./index-DJdHB7_b.js";import"./information-1qu8opp4.js";import"./sys-enter-2-Cu2hBGrK.js";import"./alert-Bssjvu3J.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZogVh3-n.js";import"./delete-DJWhYD8C.js";import"./settings-NgS7zej6.js";import"./NoData-CmcwKAsS.js";import"./IllustratedMessage-BquGAG1y.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-6m67jwsT.js";import"./index-BMmEn-9e.js";import"./index-DHWps5pX.js";import"./slim-arrow-down-CD5MJjlC.js";import"./Input-BTxUiPoF.js";import"./ResponsivePopoverCommon.css-DAHQOPQC.js";import"./ValueStateMessage.css-C1vUk4m-.js";import"./Suggestions.css-AC0gY3Q2.js";import"./ListBoxItemGroupTemplate-BKr03FZt.js";import"./ComboBoxItemGroup-DmnfwRXO.js";import"./ListItemBaseTemplate-C7qYhT1t.js";import"./Token-Bh6SaF3b.js";import"./ScrollEnablement-BgeY4u8Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMcqHDTj.js";import"./ToggleButton-Bq8xm8nS.js";import"./SuggestionItem-CmXkyaku.js";import"./index-DuEKvhcf.js";import"./Option-asFhuENp.js";import"./index-BVPkbHHt.js";import"./SegmentedButton-DmsFvxo8.js";import"./index-B_gzg89D.js";import"./Select-Cpy_GAyA.js";import"./InvisibleMessage-DIaqYHhI.js";import"./slim-arrow-down-BphH8SC0.js";import"./index-DvC78ri4.js";import"./index-QxoMqp8P.js";import"./index-BElugJkH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BBj9Wq0r.js";import"./group-2-Bclkbxf6.js";import"./sort-descending-Qi2aeWer.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dx8gVwDW.js";import"./utils-AbgTTf_S.js";import"./index-BftjTv9E.js";import"./index-kkvWmntR.js";import"./index-f5CXzuCL.js";import"./navigation-down-arrow-Cn34Yi42.js";import"./navigation-right-arrow-BdYlSoky.js";import"./navigation-right-arrow-ZjAJAoPG.js";import"./useCurrentTheme-Dv8It12u.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gUd0jpcr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-g4vzgofK.js";import"./paper-plane-DR2uxcqx.js";import"./index-BTrtIEWf.js";import"./less-DMzNG9tV.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
