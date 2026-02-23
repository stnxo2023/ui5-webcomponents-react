import{j as e}from"./iframe-4UX9zVtN.js";import{useMDXComponents as i}from"./index-BBCkKRvO.js";import{I as a,F as m}from"./CommandsAndQueries-DudJ8lrA.js";import{M as s,C as p}from"./blocks-BFxvjNAv.js";import"./Tag-B3FvlNgH.js";import"./index-BXHIuf-D.js";import{C as l}from"./ControlsWithNote-HRuakJ4J.js";import"./copy-Cyt5Uff4.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BeOdInDA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-S5ZW1bjA.js";import"./index-CXoNptYK.js";import"./index-DctXwSyI.js";import"./Link-fA-SeXAj.js";import"./index-C3GdV3vE.js";import"./index-De4g9Au_.js";import"./index-DnrxmRVZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-rUq1jEzN.js";import"./addCustomCSSWithScoping-DCDZu8w8.js";import"./index-oGM8b9YF.js";import"./information-WWzzOZjz.js";import"./sys-enter-2-CaiZT1Nw.js";import"./alert-G68zeMJP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BFQW1jvL.js";import"./delete-CPKq1-iv.js";import"./settings-BeAaSNnX.js";import"./NoData-CU3h5MDZ.js";import"./IllustratedMessage-gFd3OmYv.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-ZSvcbIjO.js";import"./index-QNs_CVCy.js";import"./index-BhSpDM5B.js";import"./slim-arrow-down-BheOSzby.js";import"./Input-CtYIRUY4.js";import"./ResponsivePopoverCommon.css-D8f7fYw-.js";import"./ValueStateMessage.css-BaAl7IoW.js";import"./Suggestions.css-BO3NfIZR.js";import"./ListBoxItemGroupTemplate-DmypcSPh.js";import"./ComboBoxItemGroup-tnGGzqCQ.js";import"./ListItemBaseTemplate-qK1e_MJK.js";import"./Token-BUnyf5To.js";import"./ScrollEnablement-0B710n07.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CK8Tux93.js";import"./ToggleButton-CN__x2LS.js";import"./SuggestionItem-ChOawdH9.js";import"./index-Bsid_d0h.js";import"./Option-BzI4AWst.js";import"./index-BcgU9rpx.js";import"./SegmentedButton-BNYfI6jW.js";import"./index-BBRP-eLa.js";import"./Select-BflInANe.js";import"./InvisibleMessage-D3fa-sIT.js";import"./slim-arrow-down-6GOcwo6b.js";import"./index-Bjl35UV4.js";import"./index-CodV0zr0.js";import"./index-Dc1dnONs.js";import"./index-CPXil7Dy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BV09TBnF.js";import"./group-2-tHCPmnSd.js";import"./sort-descending-6ECAK0fQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7pVLkOw.js";import"./utils-BL-JB8rb.js";import"./index-18NioiXD.js";import"./index-CTTeQqwG.js";import"./index-B9dyUeRS.js";import"./navigation-down-arrow-BFC6z2qR.js";import"./navigation-right-arrow-D7uahuKZ.js";import"./navigation-right-arrow-s6C2P9I8.js";import"./useCurrentTheme-9YePhqUt.js";import"./index-BFekAKgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bs2Ad4ZO.js";import"./paper-plane-DkaqpPYC.js";import"./index-DiVVQKHa.js";import"./less-jLdy7f8K.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
