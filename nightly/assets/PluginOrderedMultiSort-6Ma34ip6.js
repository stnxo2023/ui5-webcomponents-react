import{j as e}from"./iframe-C4t4IgBC.js";import{useMDXComponents as i}from"./index-Mw7OJb9H.js";import{I as a,F as m}from"./CommandsAndQueries-D8F1OdPA.js";import{M as s,C as p}from"./blocks-BBLZG0oz.js";import"./Tag-CDNtFOv1.js";import"./index-Dn3tX0-p.js";import{C as l}from"./ControlsWithNote-saMruwKV.js";import"./copy-Cuc5dF6S.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-V6ifSjCg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_e2hqHh.js";import"./index-DHWon9Pg.js";import"./index-CWVWkCUh.js";import"./Link-DmVNlXZz.js";import"./index-BTZMG5sJ.js";import"./index-DoEQkKHr.js";import"./index-B9hc6QqK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVHmgfEk.js";import"./addCustomCSSWithScoping-BpxylvhK.js";import"./index-nQT45DkO.js";import"./information-ChMVL_f6.js";import"./sys-enter-2-qiLZ6lMH.js";import"./alert-CRjt_mFI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-oxvyxDGg.js";import"./delete-D2fGGkgG.js";import"./settings-BzwMkjoZ.js";import"./NoData-svbafsAZ.js";import"./IllustratedMessage-CgB73CZ_.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-B1hxL8l_.js";import"./index-CE4-T5o8.js";import"./index-BVxOFa0i.js";import"./slim-arrow-down-C7wr2wWx.js";import"./Input-Cwg3cKtN.js";import"./ResponsivePopoverCommon.css-BxW6PWv_.js";import"./ValueStateMessage.css-BgyK2iA6.js";import"./Suggestions.css-Dcdd-5zD.js";import"./ListBoxItemGroupTemplate-CxNkfiJO.js";import"./ComboBoxItemGroup-_wxpn53X.js";import"./ListItemBaseTemplate-BbBKRL88.js";import"./Token-qGW5fzs1.js";import"./ScrollEnablement-36SXz3Hc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ct25_r8s.js";import"./ToggleButton-CfDXNWyK.js";import"./SuggestionItem-CJwimrS_.js";import"./index-CPA6F2o0.js";import"./Option-BqPc7Xaz.js";import"./index-Daus8hUA.js";import"./SegmentedButton-E0ssPtu-.js";import"./index-CKAEMoq5.js";import"./Select-C-ie4pXP.js";import"./InvisibleMessage-Cy5GYkqO.js";import"./slim-arrow-down-CSCnEpSC.js";import"./index-BssGtCQL.js";import"./index-ChIKHgsp.js";import"./index-aUdUg_A0.js";import"./index-CHTmrhF4.js";import"./IconDesign-DXd8PPVF.js";import"./filter--qgSY2tr.js";import"./group-2-AzeUAacZ.js";import"./sort-descending-C8HEqCX3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bUr-dgTA.js";import"./utils-C40Oa032.js";import"./index-C6p9FXGA.js";import"./index-CJmM4Vgv.js";import"./index-BwGmy4E4.js";import"./navigation-down-arrow-D-VRAhaE.js";import"./navigation-right-arrow-BeV5rlT5.js";import"./navigation-right-arrow-CkaVVkuI.js";import"./useCurrentTheme-w37MUDwR.js";import"./index-BmlceBp1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-w_ivh6EU.js";import"./paper-plane-Dc-sk_g4.js";import"./index-BBX-5EM_.js";import"./less-D5VcceqT.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
