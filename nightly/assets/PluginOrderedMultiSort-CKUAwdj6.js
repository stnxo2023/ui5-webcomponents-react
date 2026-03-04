import{j as e}from"./iframe-BliOtBpf.js";import{useMDXComponents as i}from"./index-Cfm9mwpf.js";import{I as a,F as m}from"./CommandsAndQueries-BFQnO0Kc.js";import{M as s,C as p}from"./blocks-DFxqqk7r.js";import"./Tag-slUCA2Mk.js";import"./index-B1gTXVZK.js";import{C as l}from"./ControlsWithNote-DaUK7OUO.js";import"./copy-Co-SMUUy.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-UaxsE2L5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CljUsgff.js";import"./index-DtASDt-o.js";import"./index-BpaxVzpl.js";import"./Link-AWzdE9bP.js";import"./index-B5gV3DVy.js";import"./index-D6Ss-oF4.js";import"./index-riDZyvDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BuCRse4K.js";import"./addCustomCSSWithScoping-CtbnqYJf.js";import"./index-Dq7D7J3c.js";import"./information-0hx7iK2K.js";import"./sys-enter-2-CKBXubjR.js";import"./alert-DPJIvRdz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CzSx9BSc.js";import"./delete-BAKYftsy.js";import"./settings--3ZxUOpw.js";import"./NoData-B5uAOIws.js";import"./IllustratedMessage-Dgh84RpM.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Bk2zxQjJ.js";import"./index-2GHHQCcG.js";import"./index-SPs9Bq6c.js";import"./slim-arrow-down-BaX0Om3C.js";import"./Input-BJthTOz5.js";import"./ResponsivePopoverCommon.css-m2t9TZaE.js";import"./ValueStateMessage.css-CdBoC1bH.js";import"./Suggestions.css-CtAAVjVZ.js";import"./ListBoxItemGroupTemplate-BwSthZB6.js";import"./ComboBoxItemGroup-BAlpXruZ.js";import"./ListItemBaseTemplate-DfgzIweD.js";import"./Token-WshlA1RE.js";import"./ScrollEnablement-VwJkenso.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bfo68tSl.js";import"./ToggleButton-B0wgBzO_.js";import"./SuggestionItem-Cx4QFGUe.js";import"./index-CCUcUAYq.js";import"./Option-DWUsGFP0.js";import"./index-D3hBYyPJ.js";import"./SegmentedButton-Dadeaudg.js";import"./index-BsDhDrjf.js";import"./Select-Dsi_WDA5.js";import"./InvisibleMessage-B2hidsMu.js";import"./slim-arrow-down-DODTVyKq.js";import"./index-CsWitsoB.js";import"./index-Bj3TIez2.js";import"./index-BHkeFt_0.js";import"./index-CRM_hxbu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlRoUKXb.js";import"./group-2-Wzqe8kOu.js";import"./sort-descending-BtwzdLhc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-304L1YOg.js";import"./utils-C4J9K8Pj.js";import"./index-ex6RM4xz.js";import"./index-BwzMcLPF.js";import"./index-ZYmLwwKJ.js";import"./navigation-down-arrow-B4INFMdI.js";import"./navigation-right-arrow-BpdCpvV-.js";import"./navigation-right-arrow-CVR_Dlxl.js";import"./useCurrentTheme-C0qBvptG.js";import"./index-CSnn3rsq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-nTnNpDkc.js";import"./paper-plane-CH-qxYcc.js";import"./index-DEa7pMZH.js";import"./less-CUNTC7tA.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
