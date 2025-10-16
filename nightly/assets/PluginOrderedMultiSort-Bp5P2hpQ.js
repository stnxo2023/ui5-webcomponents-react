import{j as e}from"./iframe-DLLHCOr5.js";import{useMDXComponents as i}from"./index-DJhuuP5S.js";import{I as a,F as m}from"./CommandsAndQueries-CaYUL-bi.js";import{M as s,C as p}from"./blocks-D_qB0yom.js";import"./Tag-CGNpKNva.js";import"./index-Cv7FhAKP.js";import{C as l}from"./ControlsWithNote-Cwm6Fjvl.js";import"./copy-Cys4niF0.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-C_Xeoikx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWbKcn7h.js";import"./index-Da6fGSa9.js";import"./index-DrM1gAbM.js";import"./Link-8v74zIQt.js";import"./index-A4gWreS6.js";import"./index-CpOm_QTG.js";import"./index-C8Oz3tPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI75F9lq.js";import"./addCustomCSSWithScoping-B4YqD5EP.js";import"./index-CfRl_je5.js";import"./information-CmFfgInF.js";import"./sys-enter-2-DHyR85OV.js";import"./alert-CdfvMLA2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dussxg8w.js";import"./delete-sg9kZ7wW.js";import"./settings-DMO8138H.js";import"./NoData-CNlEMyLx.js";import"./IllustratedMessage-CvqifGlG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DrzNpyj0.js";import"./index-Bwzn6FzT.js";import"./index-BvVGqagu.js";import"./slim-arrow-down-CdVgRYVm.js";import"./Input-Dujkp-iG.js";import"./ResponsivePopoverCommon.css-BSzQP8E5.js";import"./ValueStateMessage.css-RpMFN1vW.js";import"./Suggestions.css-DD57I6JF.js";import"./ListBoxItemGroupTemplate-B8PxB8_d.js";import"./ComboBoxItemGroup-CpB2o6WI.js";import"./ListItemBaseTemplate-CH4UuuJP.js";import"./Token-Bbru9m6C.js";import"./ScrollEnablement-Dc6bPMsH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CNuJB7qv.js";import"./ToggleButton-BvQG1Cyr.js";import"./SuggestionItem-CSPitdTc.js";import"./index-Bi8_wr8a.js";import"./Option-DP4TAxPx.js";import"./index-DgfU8C4H.js";import"./SegmentedButton-Cxyiwfcn.js";import"./index-BLApOYZ_.js";import"./Select-BcMsd1Hx.js";import"./InvisibleMessage-D48crmcJ.js";import"./slim-arrow-down-WuQVzVSs.js";import"./index-WosK8S_T.js";import"./index-D46dhIkG.js";import"./index-C58XlVcT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIBokY0Z.js";import"./group-2-COjXW71M.js";import"./sort-descending-v_uWiTl6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lil2fbr_.js";import"./utils-DVYbWfL1.js";import"./index-BSuhLTnR.js";import"./index-CHwyvDxc.js";import"./index-pyj4fbNH.js";import"./navigation-down-arrow-D-443grP.js";import"./navigation-right-arrow-DaMq1CEM.js";import"./navigation-right-arrow-jZ7_AnUt.js";import"./useCurrentTheme-Bw6oliQZ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BHpA8ui8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DDSow5dA.js";import"./paper-plane-sDJVh0wP.js";import"./index-CiP8FaDh.js";import"./less-DJz-Rwf2.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
