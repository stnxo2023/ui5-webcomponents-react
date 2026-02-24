import{j as e}from"./iframe-QhtzJj2F.js";import{useMDXComponents as i}from"./index-B3k8-Qk3.js";import{I as a,F as m}from"./CommandsAndQueries-CNzXbMAv.js";import{M as s,C as p}from"./blocks-DDXzLSfl.js";import"./Tag-CoHKtk39.js";import"./index-xaayqokA.js";import{C as l}from"./ControlsWithNote-BkXZ6Add.js";import"./copy-CTybEZjn.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D1l57mWN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrUnaB-V.js";import"./index-CitIem69.js";import"./index-CiXnBbg7.js";import"./Link-Dwkzs0Lw.js";import"./index-DIdyzBPI.js";import"./index-DFHNTg_F.js";import"./index-D3ZVhFJ7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ltT42hBg.js";import"./addCustomCSSWithScoping-BX9baLRL.js";import"./index-Dg_bnA2j.js";import"./information-LovaJps-.js";import"./sys-enter-2-BHgG_M7J.js";import"./alert-CuMg9P4f.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNpHgrLb.js";import"./delete-BaT0QUP6.js";import"./settings-uhyiirG0.js";import"./NoData-CkfOfgCO.js";import"./IllustratedMessage-CV4N09cG.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-GNa2en7q.js";import"./index-CN13WjEC.js";import"./index-KbEvRCiP.js";import"./slim-arrow-down-xCHM9F0i.js";import"./Input-DTQqZq-A.js";import"./ResponsivePopoverCommon.css-piC5h4jL.js";import"./ValueStateMessage.css-DBagYbRC.js";import"./Suggestions.css-CejvJKBZ.js";import"./ListBoxItemGroupTemplate-DepFnNxx.js";import"./ComboBoxItemGroup-D38Wr8qS.js";import"./ListItemBaseTemplate-Cos5K4ap.js";import"./Token-Bgmtsg6b.js";import"./ScrollEnablement-DtNx2cEd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CQNcnXqt.js";import"./ToggleButton-DyuD2XUy.js";import"./SuggestionItem-BtJ4t_fT.js";import"./index-BhyD8HLz.js";import"./Option-DlUUMMtd.js";import"./index-M2h8-I4o.js";import"./SegmentedButton-ZCdQ95nb.js";import"./index-CxE_8jTO.js";import"./Select-pjdp6Rwf.js";import"./InvisibleMessage-BRwaHpiH.js";import"./slim-arrow-down-gvx2dpNQ.js";import"./index-DcsO_iRE.js";import"./index-BpM7KJ_2.js";import"./index-BID1hoZg.js";import"./index-B1HjRcua.js";import"./IconDesign-DXd8PPVF.js";import"./filter-IsgdBqo4.js";import"./group-2-D9cCDLqP.js";import"./sort-descending-DuSbLhoV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ss9rnYj6.js";import"./utils-erb1VNk7.js";import"./index-Cl6iRk1J.js";import"./index--_SNBdoM.js";import"./index-CBrrpGGF.js";import"./navigation-down-arrow-D-Z8F_4d.js";import"./navigation-right-arrow-yCklUeEk.js";import"./navigation-right-arrow-dDT8HKVJ.js";import"./useCurrentTheme-DmGtj7Uk.js";import"./index-BwddXk7L.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CSPv66kJ.js";import"./paper-plane-q_I3mXRA.js";import"./index-B_hiW_oO.js";import"./less-KsTjEaWT.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
