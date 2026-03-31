import{j as e}from"./iframe-D-ZP0dY4.js";import{u as i,M as a,C as m}from"./blocks-DdKopPSC.js";import{I as s}from"./CommandsAndQueries-BDnj74c9.js";import"./Tag-CNlwwDmZ.js";import"./index-C04kZKw9.js";import{C as p}from"./ControlsWithNote-BIyz1_Xt.js";import"./copy-HW_Kxlr2.js";import{F as l}from"./Footer-BLTkp7nE.js";import"./PageNotFound-DiPPX7Ze.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CBJpaNlu.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-06g1SNw0.js";import"./index-CF2Hkn6J.js";import"./index-BAothMF0.js";import"./index-eZWdMAeg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxeCNWRQ.js";import"./addCustomCSSWithScoping-DSa3TmU8.js";import"./index-BAH7VHrp.js";import"./index-U3Dsw_H6.js";import"./index-Dx3fp6V7.js";import"./information-BKIP_Ra_.js";import"./sys-enter-2-vX0Cm-qe.js";import"./alert-Bu79oBCI.js";import"./index-Tnz3nQrD.js";import"./Illustrations-DQsCRA8v.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYYGY4rz.js";import"./delete-DE6k9FGx.js";import"./settings-DXtL0O5a.js";import"./NoData-osmgknU-.js";import"./NoFilterResults-UTGDt4U0.js";import"./index-8Ug6H22Q.js";import"./IllustratedMessage-oHRK-VY8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dg-UkN-_.js";import"./Input-BOgGLefA.js";import"./ResponsivePopoverCommon.css-Dq17JFm7.js";import"./ValueStateMessage.css-CBH2VacG.js";import"./Suggestions.css-BN8N-6EC.js";import"./ListBoxItemGroupTemplate-C8lKTN_F.js";import"./ComboBoxItemGroup-q2JQ_mwf.js";import"./ListItemBaseTemplate-BFmgJ1Et.js";import"./Token-1FPkMzEf.js";import"./ScrollEnablement-DYOTGKWX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ByPNXDkr.js";import"./ToggleButton-D3qWXGLv.js";import"./multiselect-all-BPnmvnbF.js";import"./SuggestionItem-FyzOwRj6.js";import"./index-DsejTE-e.js";import"./Option-CY78tL2o.js";import"./index-vIzRardY.js";import"./SegmentedButton-ClYWnXbK.js";import"./index-DR3J50VQ.js";import"./Select-BtxIe5EO.js";import"./InvisibleMessage-D_du7Nj7.js";import"./index-CT1QofI3.js";import"./index-Q4CSHOMB.js";import"./index-DKz3p5bK.js";import"./index-Boazbh6I.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D4gZdwex.js";import"./group-2-J8HA7VvZ.js";import"./sort-descending-BkEITgyL.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B4X1hHJn.js";import"./utils-CIzQ8GjY.js";import"./index-C63PUtVf.js";import"./index-qGydiAeZ.js";import"./index-D2n2OSAj.js";import"./navigation-down-arrow-CrAOUUYj.js";import"./navigation-right-arrow-D0CmuphO.js";import"./navigation-right-arrow-B4vNvT0x.js";import"./useCurrentTheme-CSv-SoqH.js";import"./index-D-CbqEME.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuCIUNGJ.js";import"./paper-plane-C24W3EaW.js";import"./index-BRgqeqc7.js";import"./less-BGbU6Atk.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(s,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(p,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
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
`,e.jsx(l,{})]})}function Xe(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Xe as default};
