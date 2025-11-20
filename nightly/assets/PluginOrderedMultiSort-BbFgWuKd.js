import{j as e}from"./iframe-CJIrZBlB.js";import{useMDXComponents as i}from"./index-xKVU5ZCd.js";import{I as a,F as m}from"./CommandsAndQueries-C3g74-RT.js";import{M as s,C as p}from"./blocks-C-1O0LRm.js";import"./Tag-BNlwFAFY.js";import"./index-DmJ7zXRW.js";import{C as l}from"./ControlsWithNote-DgEi_PLk.js";import"./copy-DR5Kv1Iv.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Coh8XRhB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGOwz-CM.js";import"./index-YnpVhHMg.js";import"./index-CEkWgGTS.js";import"./Link-BElCP5h1.js";import"./index-BhZheF80.js";import"./index-DmwyQtvi.js";import"./index-BCwOIMZp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bf32rwnZ.js";import"./addCustomCSSWithScoping-CPo-hqqQ.js";import"./index-EdNUKN4_.js";import"./information-BaxJEMV7.js";import"./sys-enter-2-COh9WNy8.js";import"./alert-BkaLAKBd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BA0xOeEx.js";import"./delete-C9vBXGAH.js";import"./settings-BAZbIl4B.js";import"./NoData-D1WCCIr-.js";import"./IllustratedMessage-BSOmXBM5.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DvcJ3TrS.js";import"./index-2aQZOvza.js";import"./index-B5XNfqqK.js";import"./slim-arrow-down-CdpV3nE0.js";import"./Input-Btf27YOr.js";import"./ResponsivePopoverCommon.css-xGlWqU9B.js";import"./ValueStateMessage.css-MyCATZT_.js";import"./Suggestions.css-Cy-COfO3.js";import"./ListBoxItemGroupTemplate-DXkWU2-0.js";import"./ComboBoxItemGroup-CYzVMS6G.js";import"./ListItemBaseTemplate-C5F3HCqR.js";import"./Token-BNv4B9pp.js";import"./ScrollEnablement-CKbJdcjA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHoTFWQP.js";import"./ToggleButton-CFOd-MDd.js";import"./SuggestionItem-BI-IC1_F.js";import"./index-BOVwts_X.js";import"./Option-DuZb6gan.js";import"./index-DJqLFHqT.js";import"./SegmentedButton-D8Yf4_Qw.js";import"./index-BLHzNls7.js";import"./Select-D5EHVEMo.js";import"./InvisibleMessage-PB9O_FfW.js";import"./slim-arrow-down-BTXWHLy9.js";import"./index-CKVmIBse.js";import"./index-N6T3kPeD.js";import"./index-BPZe2Mw9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-mMtT2jHR.js";import"./group-2-De9ft9J6.js";import"./sort-descending-BIwXsoMH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DYDQ7rpc.js";import"./utils-CvOOfhDf.js";import"./index-DV5RwOKW.js";import"./index-Cfv_e0qb.js";import"./index-BKekFUxh.js";import"./navigation-down-arrow-B14ig-WM.js";import"./navigation-right-arrow-BtI2EckR.js";import"./navigation-right-arrow-CrzwDQrl.js";import"./useCurrentTheme-CJMp3CMu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dq6Z1nja.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bb4BnNpy.js";import"./paper-plane-BzrDh65i.js";import"./index-D9LH8SsC.js";import"./less-Cb2Bvewk.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
