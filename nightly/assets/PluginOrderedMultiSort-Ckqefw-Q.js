import{j as e}from"./iframe-CZzIPN_f.js";import{useMDXComponents as i}from"./index-BN7772Ln.js";import{I as a,F as m}from"./CommandsAndQueries-C_V-vyfI.js";import{M as s,C as p}from"./blocks-CpAefQ0F.js";import"./Tag-B8_XKizL.js";import"./index-CYLMYqU3.js";import{C as l}from"./ControlsWithNote-D0D6e7_T.js";import"./copy-CFuW58eh.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-WHlqTwq6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RbSpX7Av.js";import"./index-RQjAfURV.js";import"./index-CiiSHxVf.js";import"./Link-Fkmlwa07.js";import"./index-CCj5LB1a.js";import"./index-DMvyX2go.js";import"./index-c-1N-cez.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmB6T7HK.js";import"./addCustomCSSWithScoping-DaZxNPdr.js";import"./index-TDczsIb0.js";import"./information-6G8KrWG0.js";import"./sys-enter-2-Blj9-cAn.js";import"./alert-BtpU_SH9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vUdfR6U_.js";import"./delete-BMEp91Mc.js";import"./settings-C8GSnPCs.js";import"./NoData-Bf4Yeihh.js";import"./IllustratedMessage-DrWwRU0b.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BXzF_T72.js";import"./index-Bbxw8KqN.js";import"./index-zbybGof4.js";import"./slim-arrow-down-C428O546.js";import"./Input-BsrOTKjj.js";import"./ResponsivePopoverCommon.css-2Qlub-_h.js";import"./ValueStateMessage.css-hjeNdUqW.js";import"./Suggestions.css-DT4shfhc.js";import"./ListBoxItemGroupTemplate-CSR5ghpQ.js";import"./ComboBoxItemGroup-Cz3um4BI.js";import"./ListItemBaseTemplate-P74cAnZc.js";import"./Token-C3z9AeKo.js";import"./ScrollEnablement-C4qF1cK6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DAcFQW4k.js";import"./ToggleButton-CJ4dsJ-L.js";import"./SuggestionItem-Dno1ukWF.js";import"./index-CfuHgIJB.js";import"./Option-DZueQCXy.js";import"./index-HlkmFS4c.js";import"./SegmentedButton-87GWkDY0.js";import"./index-CnpeIdgj.js";import"./Select-bjAZ7WAd.js";import"./InvisibleMessage-DLMXXFNU.js";import"./slim-arrow-down-Bbr4LCWT.js";import"./index-DfVluAdc.js";import"./index-56rq3Xsn.js";import"./index-Htv8Knj7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C4d-P2A4.js";import"./group-2-63bcV-_q.js";import"./sort-descending--Bt-86OL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4WOx3kzp.js";import"./utils-B4X6J-Z9.js";import"./index-BigJjRDp.js";import"./index-C1J3MpNo.js";import"./index-D0gJWrcG.js";import"./navigation-down-arrow-DkBsnEWF.js";import"./navigation-right-arrow-DsJ6uoOM.js";import"./navigation-right-arrow-D15IFhwy.js";import"./useCurrentTheme-Dn8ivhT9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWbe83HO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DjCnev_a.js";import"./paper-plane-BRbCLIHy.js";import"./index-3ZvOWv6T.js";import"./less-NC1u16Z9.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
