import{j as e}from"./iframe-BXb_n64_.js";import{u as i,M as a,C as m}from"./blocks-9VP231tA.js";import{I as s}from"./CommandsAndQueries-BI-RA2OZ.js";import"./Tag-CRNARXt6.js";import"./index-BL83g4Fz.js";import{C as p}from"./ControlsWithNote-D6w6Kb-X.js";import"./copy-BBKTKpbi.js";import{F as l}from"./Footer-DPPwB2I6.js";import"./PageNotFound-CZrojxwO.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BKWnHpAq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BUcKjx9R.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./index-BD_xT1Nj.js";import"./index-DqAHmx0d.js";import"./index-BNBy1IQK.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./index-BSoVaSRp.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-wgYgfTj9.js";import"./delete-Csnjywyc.js";import"./settings-NI8fkDUM.js";import"./NoData-En3Nogfa.js";import"./NoFilterResults-Dhcwn1zt.js";import"./index-BOdF7LF9.js";import"./IllustratedMessage-Doboq85l.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DO2GHw1V.js";import"./Input-B1pV19yo.js";import"./ResponsivePopoverCommon.css-DMiEES2t.js";import"./ValueStateMessage.css-YCjELpnO.js";import"./Suggestions.css-BZAnlsRN.js";import"./ListBoxItemGroupTemplate-5-RLXPsG.js";import"./ComboBoxItemGroup-DfJF5BDs.js";import"./ListItemBaseTemplate-CL-9zx8x.js";import"./Token-C7CCdRfL.js";import"./ScrollEnablement-CdFwVVtK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dvvLOc5F.js";import"./ToggleButton-REMyBJsR.js";import"./multiselect-all-Ch1Qp7qR.js";import"./SuggestionItem-CuJ_PC3L.js";import"./index-COeWnEcb.js";import"./Option-DDwjJ3Kz.js";import"./index-CAhGtq2M.js";import"./SegmentedButton-Cg1f73_M.js";import"./index-Bnp975NP.js";import"./Select-DjVfX_jp.js";import"./InvisibleMessage-tI82KiTk.js";import"./index-BXr-yJYg.js";import"./index-YKbtChLI.js";import"./index-D9WU53Lw.js";import"./index-DrzieGlz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRQYQGhf.js";import"./group-2-DS1ObAk7.js";import"./sort-descending-Cj6QG_j1.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGaKo2kM.js";import"./utils-B78a72Xy.js";import"./index-CEFR42mv.js";import"./index-BBdTafaa.js";import"./index-70052kQG.js";import"./navigation-down-arrow-C-XIYlAc.js";import"./navigation-right-arrow-DvOid56m.js";import"./navigation-right-arrow-b4NzmHT7.js";import"./useCurrentTheme-DoV6h_Xa.js";import"./index-BW8nkbFg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BJ6r15BN.js";import"./paper-plane-YWK2QeBd.js";import"./index-DL4fpI_G.js";import"./less-0zzPWnhW.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(s,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(p,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
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
`,e.jsx(l,{})]})}function Xe(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Xe as default};
