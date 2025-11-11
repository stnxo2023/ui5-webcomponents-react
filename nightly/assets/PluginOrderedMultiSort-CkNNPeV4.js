import{j as e}from"./iframe-Di0CnA8S.js";import{useMDXComponents as i}from"./index-D1yNQJed.js";import{I as a,F as m}from"./CommandsAndQueries-zSui8mFJ.js";import{M as s,C as p}from"./blocks-CQfV0luP.js";import"./Tag-YM6QkIty.js";import"./index-Cv974V6E.js";import{C as l}from"./ControlsWithNote-Byoi2WIS.js";import"./copy-BnyBSvmF.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CaMp0239.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bkm6KJyR.js";import"./index-FrAwh-uI.js";import"./index-CX_Pkcfg.js";import"./Link-WIuadCnC.js";import"./index-Bms_gXSs.js";import"./index-DEJJ6ZVN.js";import"./index-DChMCwxZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BL09SrHJ.js";import"./addCustomCSSWithScoping-D9ak18Ev.js";import"./index-C4vcrMlE.js";import"./information-DzISr5a2.js";import"./sys-enter-2-Vd3zyEtx.js";import"./alert-DaK0qpmR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkjZN1m5.js";import"./delete-CkgveXZV.js";import"./settings-O_SqiOO8.js";import"./NoData-Cm3Sgky-.js";import"./IllustratedMessage-BkwPs3fv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BXEHKTVt.js";import"./index-D5FQCJ2w.js";import"./index-DWNbjlf6.js";import"./slim-arrow-down-bK9T7o5_.js";import"./Input-BMxXpEmu.js";import"./ResponsivePopoverCommon.css--b7te08F.js";import"./ValueStateMessage.css-wgmiBQCU.js";import"./Suggestions.css-Bkytjk5E.js";import"./ListBoxItemGroupTemplate-DvN0aU6B.js";import"./ComboBoxItemGroup-N1tLGR-W.js";import"./ListItemBaseTemplate-0lg9M0fM.js";import"./Token-CZDcEwHC.js";import"./ScrollEnablement-DhAJ5JnK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D4_pyZ43.js";import"./ToggleButton-qVqa-FdV.js";import"./SuggestionItem-CDxntgT5.js";import"./index-XMMJdMJi.js";import"./Option-DNM61xVD.js";import"./index-nh3D4sX1.js";import"./SegmentedButton-DLLN3073.js";import"./index-D4LgD8pt.js";import"./Select-CSvcStkQ.js";import"./InvisibleMessage-CA5l1OrC.js";import"./slim-arrow-down-BZ32OfT-.js";import"./index-jyrIbm7X.js";import"./index-jLe1V_0t.js";import"./index-BCKZ26pG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CSxtsdcS.js";import"./group-2-D_KQdcyc.js";import"./sort-descending-CVK6o8y6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cn-IKnzn.js";import"./utils-CA_s0xCU.js";import"./index-Dj5ZK7Jm.js";import"./index-SGAGbvBy.js";import"./index-BY5Nj2YC.js";import"./navigation-down-arrow-Cn2Pb-ac.js";import"./navigation-right-arrow-BM8i-tol.js";import"./navigation-right-arrow-qgiVcRku.js";import"./useCurrentTheme-DDCiNxpb.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CdwOc6CH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DMJx-Dqa.js";import"./paper-plane-BU5KNFmh.js";import"./index-Dtz3OPe1.js";import"./less-DIBO8ral.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
