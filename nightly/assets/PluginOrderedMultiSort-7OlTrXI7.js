import{j as e}from"./iframe-CRoIzMtp.js";import{useMDXComponents as i}from"./index-uepxEeS1.js";import{I as a,F as m}from"./CommandsAndQueries-tg7iHgNo.js";import{M as s,C as p}from"./blocks-BWnl8hC4.js";import"./Tag-pVHInn9_.js";import"./index-l4qALITX.js";import{C as l}from"./ControlsWithNote-B074C6wz.js";import"./copy-D8-Me-o2.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CFWmLjr3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8wLfWwH.js";import"./index-BWA_OWVW.js";import"./index-83H_WNAi.js";import"./Link-ByRh7pJY.js";import"./index-DCZY0XoF.js";import"./index-BGCNx8iW.js";import"./index-Cq7XEcI3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbjPHeWw.js";import"./addCustomCSSWithScoping-DJ9mEG-L.js";import"./index-BY3Vu1_E.js";import"./information-DT5Qd4to.js";import"./sys-enter-2-DutWnZ3I.js";import"./alert-D-9oczO0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CZqnIIDb.js";import"./delete-b07efbAK.js";import"./settings-BMkFX08h.js";import"./NoData-CDKe2yZc.js";import"./IllustratedMessage-C6IdXkA-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-B1fpeMFI.js";import"./index-CBp7IYzb.js";import"./index-CZSKEI2W.js";import"./slim-arrow-down-unBoSxLD.js";import"./Input-BJBDq8St.js";import"./ResponsivePopoverCommon.css-CCSjtQV1.js";import"./ValueStateMessage.css-OSunxxtw.js";import"./Suggestions.css-Zd5amcux.js";import"./ListBoxItemGroupTemplate-Ds8yjX4l.js";import"./ComboBoxItemGroup-DiOTTndh.js";import"./ListItemBaseTemplate-Dz3w6gJ_.js";import"./Token-DCFzDq3v.js";import"./ScrollEnablement-Dou-HT1U.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DLhORhWI.js";import"./ToggleButton-CRShRO6E.js";import"./SuggestionItem-MyiIEE-9.js";import"./index-CXX4KfFH.js";import"./Option-D_d9kPGY.js";import"./index-C0WpXcs5.js";import"./SegmentedButton-BmVs9vUZ.js";import"./index-Ddvt-ojw.js";import"./Select-E89SNOl_.js";import"./InvisibleMessage-CVj8QPFw.js";import"./slim-arrow-down-CVzH-elm.js";import"./index-BHRAnYFD.js";import"./index-Bsq76fTK.js";import"./index-4w5klR-o.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMv5uK1e.js";import"./group-2-DJZ5z-ec.js";import"./sort-descending-f3hJqn9w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DSiKbX2_.js";import"./utils-DRJGxToW.js";import"./index-ClGjasHC.js";import"./index-Ctk0qYEi.js";import"./index-DdQaW95W.js";import"./navigation-down-arrow-BvO4V2br.js";import"./navigation-right-arrow-BxNbgTzH.js";import"./navigation-right-arrow-C9LVWiyw.js";import"./useCurrentTheme-CARlTKm9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bk8bTaJf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CaAE0oF3.js";import"./paper-plane-CHOxtY5p.js";import"./index-o4QSdXmu.js";import"./less-CgZWCgqn.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
