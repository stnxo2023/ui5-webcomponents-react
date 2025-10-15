import{j as e}from"./iframe-MOZTZvx5.js";import{useMDXComponents as i}from"./index-Dg_uAO8t.js";import{I as a,F as m}from"./CommandsAndQueries-D1cXr-nE.js";import{M as s,C as p}from"./blocks-OWx-zaQy.js";import"./Tag-D4CUHK9_.js";import"./index-BgV1CUPM.js";import{C as l}from"./ControlsWithNote-CYCsEmFS.js";import"./copy-1ZgkFucr.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Cw0HPS5N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jWV64fa4.js";import"./index-Wo6cIUDI.js";import"./index-BVuz7GOm.js";import"./Link-D6y2NVEd.js";import"./index-D_H2FzQ8.js";import"./index-BfSH4rx9.js";import"./index-CT3JBxRK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgDY8vOY.js";import"./addCustomCSSWithScoping-C-qiC_lj.js";import"./index-Vm6d87Cs.js";import"./information-BmrOjFlN.js";import"./sys-enter-2-CJ54mtHu.js";import"./alert-CvnXXdTy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DhneGV7w.js";import"./delete-Bn5gdNgE.js";import"./settings-Cbx-epPE.js";import"./NoData-BJR7iwul.js";import"./IllustratedMessage-YE7gLYpT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Jm7E3NGo.js";import"./index-C8xadZxD.js";import"./index-BLa13CRy.js";import"./slim-arrow-down-Cc4bNxF2.js";import"./Input-VwoOlGdU.js";import"./ResponsivePopoverCommon.css-NhonNuZc.js";import"./ValueStateMessage.css-B4GAmP9X.js";import"./Suggestions.css-DA1a_gYi.js";import"./ListBoxItemGroupTemplate-Dx4qYl7E.js";import"./ComboBoxItemGroup-Bw3Iaycs.js";import"./ListItemBaseTemplate-BZSLWu4w.js";import"./Token-DbnH4QPK.js";import"./ScrollEnablement-BN64g5L9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-3bCIQ3yY.js";import"./ToggleButton-OlwgaROV.js";import"./SuggestionItem-CQ-oefH8.js";import"./index-oXUFSANu.js";import"./Option-U0m19n5L.js";import"./index-CY3YewAo.js";import"./SegmentedButton-rkgekSAQ.js";import"./index-C9UJ92uP.js";import"./Select-HunAogfG.js";import"./InvisibleMessage-B6eggr2u.js";import"./slim-arrow-down-CSnytLmB.js";import"./index-DKau9-Kv.js";import"./index-CnG-Mf1G.js";import"./index-ChNWUHOB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNuVE1dN.js";import"./group-2-DYeh0LPK.js";import"./sort-descending-CVlDQhaZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BcUA259N.js";import"./utils-BOAuSk9m.js";import"./index-BUkrgD3V.js";import"./index-BbzY9xji.js";import"./index-NwVlg13M.js";import"./navigation-down-arrow-Dw2CvikE.js";import"./navigation-right-arrow-DRazBLZW.js";import"./navigation-right-arrow-BxyRDEC9.js";import"./useCurrentTheme-wbA7IpXG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bdi_NLBI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Csl6zSRf.js";import"./paper-plane-DH1_vU7X.js";import"./index-Bs-jL4oy.js";import"./less-DPf2C5zX.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
