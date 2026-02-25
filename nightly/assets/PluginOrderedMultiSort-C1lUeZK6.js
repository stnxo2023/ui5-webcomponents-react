import{j as e}from"./iframe-BHlEgbZD.js";import{useMDXComponents as i}from"./index-DuWPJPdo.js";import{I as a,F as m}from"./CommandsAndQueries-CRy7DgFq.js";import{M as s,C as p}from"./blocks-BZ1_Gb0n.js";import"./Tag-CUIBDfjO.js";import"./index-DMcN3ohr.js";import{C as l}from"./ControlsWithNote-xCObjZ9G.js";import"./copy-Ds19teD5.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-ByzE4p5Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-57xnhTbk.js";import"./index-D8Q0xw5Q.js";import"./index-CPQEcn_1.js";import"./Link-DdeM_yx0.js";import"./index-DXZq7O0l.js";import"./index-COEmfUFW.js";import"./index-x01lEzby.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbwzLluT.js";import"./addCustomCSSWithScoping-BezKsk6D.js";import"./index-2QbIapUz.js";import"./information-Cbg1Tz52.js";import"./sys-enter-2-Z2Vy22vQ.js";import"./alert-BcFaqecl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CC6hyO-N.js";import"./delete-4ZvrUKjO.js";import"./settings-DG_uwOtb.js";import"./NoData-DYxHoJfA.js";import"./IllustratedMessage-udF9mWrD.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CbnIbvhX.js";import"./index-DN6hq5_h.js";import"./index-BT3cRVz2.js";import"./slim-arrow-down-36KS2JIw.js";import"./Input-BOFtXl-H.js";import"./ResponsivePopoverCommon.css-DVGkEwPu.js";import"./ValueStateMessage.css-BcukUnSJ.js";import"./Suggestions.css-oxI77au-.js";import"./ListBoxItemGroupTemplate-CEjJ4Crf.js";import"./ComboBoxItemGroup-C_SgaNix.js";import"./ListItemBaseTemplate-D1qgX7Z0.js";import"./Token-BULKmOKE.js";import"./ScrollEnablement-Cu7uqZ0X.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CeF-gQpE.js";import"./ToggleButton-DYZAZrxx.js";import"./SuggestionItem-BZywVYEn.js";import"./index-BEzWpt9n.js";import"./Option-DaLzGShP.js";import"./index-BTRoGroB.js";import"./SegmentedButton-DcSgMcr8.js";import"./index-BP72XLPJ.js";import"./Select-zEDuWLFW.js";import"./InvisibleMessage-OeUWQ5Ye.js";import"./slim-arrow-down-DLrArs5r.js";import"./index-DCYT0nIY.js";import"./index-CvJhvJHe.js";import"./index-D4qBUSpf.js";import"./index-C57Z4SS3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CC3D5stC.js";import"./group-2-CAC2yRw6.js";import"./sort-descending-Ct46rwrC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3QDW9YY.js";import"./utils-Bkxa81Gm.js";import"./index-h4KD2Npg.js";import"./index-ChBdg0CU.js";import"./index-Dxaffyfy.js";import"./navigation-down-arrow-CUMLWhBn.js";import"./navigation-right-arrow-D2ty4le0.js";import"./navigation-right-arrow-DEzFZZdH.js";import"./useCurrentTheme-CTTdfk_h.js";import"./index-Db_zW0W2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dp2bM3ZO.js";import"./paper-plane-wrAGSNsE.js";import"./index-0vEfSv_1.js";import"./less-D9a_VPsv.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
