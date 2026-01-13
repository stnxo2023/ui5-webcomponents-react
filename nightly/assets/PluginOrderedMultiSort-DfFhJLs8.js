import{j as e}from"./iframe-BtOtRMtR.js";import{useMDXComponents as i}from"./index-CgtvsECt.js";import{I as a,F as m}from"./CommandsAndQueries-CKs7dFOK.js";import{M as s,C as p}from"./blocks-D9wmcLvH.js";import"./Tag-C9nMOu5c.js";import"./index-Cb_okFKb.js";import{C as l}from"./ControlsWithNote-ylJnyVwL.js";import"./copy-CGNUo2FO.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DC1S45-c.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyCpVDUu.js";import"./index-BG_zbJpP.js";import"./index-CSfaSQyt.js";import"./Link-BYt0ZGVT.js";import"./index-BRaE6xYn.js";import"./index-Ch2focQy.js";import"./index-Ddk7eeGJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4u4TRFh7.js";import"./addCustomCSSWithScoping-Ji9yZ6HK.js";import"./index-B8f2IgEG.js";import"./information-D5w9Hrcs.js";import"./sys-enter-2-Bq4TRZEz.js";import"./alert-CYL_IdM5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B5N0rpWl.js";import"./delete-Dzj5xyP-.js";import"./settings-C1l-VMhl.js";import"./NoData-CTl2bbKy.js";import"./IllustratedMessage-CyKYIGdr.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BlF0uNyR.js";import"./index-fgWDWmbq.js";import"./index-CguI4hxx.js";import"./slim-arrow-down-DmlnfCIk.js";import"./Input-DW6Mcq6Q.js";import"./ResponsivePopoverCommon.css-B0MfPGYJ.js";import"./ValueStateMessage.css-Cntln-gq.js";import"./Suggestions.css-C1P2f68k.js";import"./ListBoxItemGroupTemplate-Bu8Sz1bH.js";import"./ComboBoxItemGroup-B9ta1tYL.js";import"./ListItemBaseTemplate-PfJZ8SeL.js";import"./Token-jR5FcYSU.js";import"./ScrollEnablement-CNs89SnW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DSZwl3pY.js";import"./ToggleButton-BD7M-6Sc.js";import"./SuggestionItem-0mZFDaLy.js";import"./index-DXTzsKvp.js";import"./Option-BymN5BMD.js";import"./index-Ch4bYq3S.js";import"./SegmentedButton-KViA7rXu.js";import"./index-Cba0AExI.js";import"./Select-aAJtN928.js";import"./InvisibleMessage-CJx3E7ve.js";import"./slim-arrow-down-jTdyHR1Z.js";import"./index-CwtPYikJ.js";import"./index-CQANsFRb.js";import"./index-DO0bWOhc.js";import"./index-Db2BTFt5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DamfrtCC.js";import"./group-2-DpZVik8-.js";import"./sort-descending-B-A3hXvE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B1qY8nay.js";import"./utils-CqrUR1Jn.js";import"./index-jphnT_hb.js";import"./index-C84K25j6.js";import"./index-DgTNmU-2.js";import"./navigation-down-arrow-BChKVsM3.js";import"./navigation-right-arrow-Fi9U-iyQ.js";import"./navigation-right-arrow-Du-S1bwS.js";import"./useCurrentTheme-BRCDCnqM.js";import"./index-c-S2g_Xv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6S1xN6P.js";import"./paper-plane-CzloYF4y.js";import"./index-C5HC-scy.js";import"./less-9cA8yvZw.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
