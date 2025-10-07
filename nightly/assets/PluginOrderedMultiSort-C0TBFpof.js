import{j as e}from"./iframe-CtwEriWb.js";import{useMDXComponents as i}from"./index-D-9u9m_4.js";import{I as a,F as m}from"./CommandsAndQueries-CD3VJPSk.js";import{M as s,C as p}from"./blocks-BFYACaFi.js";import"./Tag-Dp8ZKpct.js";import"./index-DaHRprUe.js";import{C as l}from"./ControlsWithNote-v4H3iXhU.js";import"./copy-DmD13pno.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D0QPuNZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5ngcH8h.js";import"./index-Bt4v4M6X.js";import"./index-DDmWoC0P.js";import"./Link-D_PuN-3O.js";import"./index-zgbQGCMD.js";import"./index-C3uSNLH8.js";import"./index-wzivwl9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Lem94xA1.js";import"./addCustomCSSWithScoping-BBQMnugZ.js";import"./index-CeAyP2ez.js";import"./information-D5ukCsPX.js";import"./sys-enter-2-BPp72tdn.js";import"./alert-CQAVluiD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-6iJPqvCF.js";import"./delete-CHjtmoxe.js";import"./settings-CJBNJogN.js";import"./NoData-DjTzPZvK.js";import"./IllustratedMessage-8ePIRJ01.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D84oURGo.js";import"./index-Dz0HvdK8.js";import"./index-D9Ds84en.js";import"./slim-arrow-down-Dhjx46M4.js";import"./Input-Ey3vMJ2p.js";import"./ResponsivePopoverCommon.css-BlgaMAH_.js";import"./ValueStateMessage.css-BCs7SZVo.js";import"./Suggestions.css-Ca_9frEg.js";import"./ListBoxItemGroupTemplate-BmW_TD1a.js";import"./ComboBoxItemGroup-D9S-hZmS.js";import"./ListItemBaseTemplate-Dr-kfIJ7.js";import"./Token-C9kw3GgY.js";import"./ScrollEnablement-BQjS8DnP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRntQYAQ.js";import"./ToggleButton-Bf-SN9R0.js";import"./SuggestionItem-C8LVLSQl.js";import"./index-BF7FIsg5.js";import"./Option-D4al2hZS.js";import"./index-C_S6aGGA.js";import"./SegmentedButton-2upM-MiM.js";import"./index-DmNK5fut.js";import"./Select-BcqBMzHp.js";import"./InvisibleMessage-BGhqftdJ.js";import"./slim-arrow-down-C-J0cPgu.js";import"./index-DXGpSx7n.js";import"./index-C7Tf8xop.js";import"./index-Dx48TTVd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VUJDD7Ck.js";import"./group-2-CA3SU2Z-.js";import"./sort-descending-rYpXwTDK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DkX--lPA.js";import"./utils-Ctkq60uV.js";import"./index-DOMVXnxq.js";import"./index-BrR9oCjZ.js";import"./index-DayvUZ6b.js";import"./navigation-down-arrow-QusIkm2p.js";import"./navigation-right-arrow-B5vKiLuI.js";import"./navigation-right-arrow-D8wA0KPb.js";import"./useCurrentTheme-BTKV_yhV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HRFMiwNd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BtiMpto1.js";import"./paper-plane-DvM7Xu8p.js";import"./index-DXgoomGI.js";import"./less-Bi02PNvH.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
