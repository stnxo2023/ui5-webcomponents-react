import{j as e}from"./iframe-BCeV4J61.js";import{useMDXComponents as i}from"./index-DQSXUrY-.js";import{I as a,F as m}from"./CommandsAndQueries-BMt6Du51.js";import{M as s,C as p}from"./blocks-BaqdfAa9.js";import"./Tag-Bzl_4yyv.js";import"./index-DSCCKcvn.js";import{C as l}from"./ControlsWithNote-Bbo9Mum3.js";import"./copy-BLLS_Koh.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-p2TBitSL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6AOhQcP.js";import"./index-BqI0DRaf.js";import"./index-CTun36xm.js";import"./Link-C83i_H7y.js";import"./index-BaMmnI_0.js";import"./index-Dd7n1xMP.js";import"./index-C_9CrSf5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xuzVGY3l.js";import"./addCustomCSSWithScoping-Bz6BhAjV.js";import"./index-MH0uXub1.js";import"./information-DsxmrLjJ.js";import"./sys-enter-2-DTJ11PLs.js";import"./alert-BPfUUxXP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DepvYq9l.js";import"./delete-DVWCX9kC.js";import"./settings-CsQavQXZ.js";import"./NoData-B5oeo5kD.js";import"./IllustratedMessage-KukoJbKs.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BPCWQtRS.js";import"./index-CoJmn4Yy.js";import"./index-DWP4Fzr6.js";import"./slim-arrow-down-BbmvWyWt.js";import"./Input-BdR3eabn.js";import"./ResponsivePopoverCommon.css-C2w1fqZM.js";import"./ValueStateMessage.css-CWUCP2jh.js";import"./Suggestions.css-Jm5XbPUR.js";import"./ListBoxItemGroupTemplate-DoQGXH2K.js";import"./ComboBoxItemGroup-SSqFciiI.js";import"./ListItemBaseTemplate-B-HxI0mr.js";import"./Token-CVeMAn7C.js";import"./ScrollEnablement-D6HdbXM3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CtPLPajr.js";import"./ToggleButton-cGf9jpQr.js";import"./SuggestionItem-lE3aTa1o.js";import"./index-Cuu5RXhJ.js";import"./Option-O-FsfY6r.js";import"./index-e3RQM6ba.js";import"./SegmentedButton-YPERwD_1.js";import"./index-BVgvpLqI.js";import"./Select-BDp6Bw0F.js";import"./InvisibleMessage-D4FAyCwP.js";import"./slim-arrow-down-ClrsC2ro.js";import"./index-BxOecRVs.js";import"./index-Ch8eD88C.js";import"./index-DaqBjD0S.js";import"./index-J52IetZK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-H3EEYKpA.js";import"./group-2-DnxmYItq.js";import"./sort-descending-B08sQLL8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-pwQzdFN3.js";import"./utils-CsNciHqm.js";import"./index-jccjEr8p.js";import"./index-DYxx-EtR.js";import"./index-BkYe_VJy.js";import"./navigation-down-arrow-BlqpuI4E.js";import"./navigation-right-arrow-ClXC1YSw.js";import"./navigation-right-arrow-B8F7f_GM.js";import"./useCurrentTheme-8k0wl0rJ.js";import"./index-aypRBSpr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BbNqKuvZ.js";import"./paper-plane-BDKzrgnv.js";import"./index-CvRy4k66.js";import"./less-0SXq5Fj1.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
