import{j as e}from"./iframe-mZIFexBi.js";import{useMDXComponents as i}from"./index-CSeyhL4L.js";import{I as a,F as m}from"./CommandsAndQueries-_DqxABXw.js";import{M as s,C as p}from"./blocks-pMMBqTak.js";import"./Tag-C5S5wO6X.js";import"./index-CY-KcLEe.js";import{C as l}from"./ControlsWithNote-CeKNi1j-.js";import"./copy-CK4YnSbS.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BoAMcLKN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bym-t_ma.js";import"./index-BFs_s1ec.js";import"./index-CPook487.js";import"./Link-Dky_yGkw.js";import"./index-BbeYDVUM.js";import"./index-DCVKeCrB.js";import"./index-B61-jGoN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9FjHI5t.js";import"./addCustomCSSWithScoping-BJ-ZUtqt.js";import"./index-DbDxOjYs.js";import"./information-CuCRdO66.js";import"./sys-enter-2-Da-bg0qX.js";import"./alert-4bZr7bHx.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-8CMZVnD3.js";import"./delete-DgxKkLgT.js";import"./settings-CyhNrSEc.js";import"./NoData-CX0o0XVo.js";import"./IllustratedMessage-Dz80uH_8.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-bMeRj9cL.js";import"./index--VBMnPTW.js";import"./index-BY9PhD7r.js";import"./slim-arrow-down-CoGBvzbB.js";import"./Input-DjI1lAlw.js";import"./ResponsivePopoverCommon.css-caZWKg7m.js";import"./ValueStateMessage.css-ZpzMuhyf.js";import"./Suggestions.css-BNm2UgCq.js";import"./ListBoxItemGroupTemplate-BHiiI4XH.js";import"./ComboBoxItemGroup-DuYnLx9L.js";import"./ListItemBaseTemplate-Bo0wwbfF.js";import"./Token-BepZXm1A.js";import"./ScrollEnablement-C8KKYJfQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BsmNnGjy.js";import"./ToggleButton-PXrRdKUI.js";import"./SuggestionItem-DBDH_Z95.js";import"./index-BeLlboZI.js";import"./Option-DS0ajgcB.js";import"./index-D2shRfFO.js";import"./SegmentedButton-gpHzBIZT.js";import"./index-BilcGZ4z.js";import"./Select-BbAKcpZr.js";import"./InvisibleMessage-D8WcmxR1.js";import"./slim-arrow-down-C4kKcs0A.js";import"./index-ClKkYnAD.js";import"./index-BDLJAHfH.js";import"./index-Bdr-0gsP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DmZ5vjU1.js";import"./group-2-C25AltrU.js";import"./sort-descending-Baid0H05.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C63IWCLZ.js";import"./utils-KJEZQBk-.js";import"./index-C2MqkFzJ.js";import"./index-BjtYM8CZ.js";import"./index-BY87GbXm.js";import"./navigation-down-arrow-BYh6gvU2.js";import"./navigation-right-arrow-Bahnb797.js";import"./navigation-right-arrow-BsXFygcD.js";import"./useCurrentTheme-BuH74dbv.js";import"./IndicationColor-DVw-fSM_.js";import"./index-COLPdMln.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7fZVXrnl.js";import"./paper-plane-uFnaxlDc.js";import"./index-ClRWdTR1.js";import"./less-CfJ4xBPp.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
