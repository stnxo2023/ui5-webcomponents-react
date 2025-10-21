import{j as e}from"./iframe-Bb0HmHnB.js";import{useMDXComponents as i}from"./index-Meo06HOS.js";import{I as a,F as m}from"./CommandsAndQueries-tR4iht-v.js";import{M as s,C as p}from"./blocks-CgyFha0p.js";import"./Tag-CkJgtMYU.js";import"./index-e-oHYPrA.js";import{C as l}from"./ControlsWithNote-C0RGHc9T.js";import"./copy-ClXY_Ebg.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CVCqajEn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUHcje1a.js";import"./index-ujA-0uQD.js";import"./index-DRj5BOAv.js";import"./Link-Ctr6McPA.js";import"./index-DamhzNr0.js";import"./index-kXJ0csex.js";import"./index-DkF-cfFa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmK6tfuz.js";import"./addCustomCSSWithScoping-DZsYEWJZ.js";import"./index-CCkcOLyJ.js";import"./information-CuEP2--w.js";import"./sys-enter-2-BxgOL3Cz.js";import"./alert-CRFvm_h4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B3EdkcTs.js";import"./delete-DNvu7cli.js";import"./settings-X_qufnfv.js";import"./NoData-Be80XLqg.js";import"./IllustratedMessage-DD1_V1fS.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-YoedeCQZ.js";import"./index-CEumqWwt.js";import"./index-Ctco8NFr.js";import"./slim-arrow-down-BK6_kW2_.js";import"./Input-8EIzHHn6.js";import"./ResponsivePopoverCommon.css-CYHZGTr6.js";import"./ValueStateMessage.css-DQVkNKvB.js";import"./Suggestions.css-jL9cJ0bK.js";import"./ListBoxItemGroupTemplate-F9IXXChP.js";import"./ComboBoxItemGroup-rVDs3n5k.js";import"./ListItemBaseTemplate-DGXYw3IB.js";import"./Token-plZfxczM.js";import"./ScrollEnablement-CtICbC2N.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRloOdH2.js";import"./ToggleButton-CIurin5E.js";import"./SuggestionItem-wc2mHVyx.js";import"./index-BaTE6PUT.js";import"./Option-CpLfiC8k.js";import"./index-IAfope6S.js";import"./SegmentedButton-BNh0v1Zf.js";import"./index-D8FXkeK7.js";import"./Select-DIxLDO_Y.js";import"./InvisibleMessage-BuHDtcTe.js";import"./slim-arrow-down-DOc9_ecn.js";import"./index-CN5pxO6-.js";import"./index-DD32uJSt.js";import"./index-wp5LnE7o.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CG2Pz_ak.js";import"./group-2-DRBOUlKY.js";import"./sort-descending-pJBX6NsG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C4pQrK8W.js";import"./utils-DT171g7R.js";import"./index-BHDfFIKl.js";import"./index-COKyuEqS.js";import"./index-DnLo1BZO.js";import"./navigation-down-arrow-DQURBlhq.js";import"./navigation-right-arrow-BBRYGBWr.js";import"./navigation-right-arrow-DbJe2FI5.js";import"./useCurrentTheme-DeBv9RCX.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BllQlQx0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-fxo11iCx.js";import"./paper-plane-BLDEhHRM.js";import"./index-DgN_PFsx.js";import"./less-B_rvZNau.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
