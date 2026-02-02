import{j as e}from"./iframe-DtD6gRbB.js";import{useMDXComponents as i}from"./index-BiO40HBX.js";import{I as a,F as m}from"./CommandsAndQueries-B26crKtq.js";import{M as s,C as p}from"./blocks-Ck7wLHdk.js";import"./Tag-CPFNFbnr.js";import"./index-BiosTbTI.js";import{C as l}from"./ControlsWithNote-BOStzrH-.js";import"./copy-DKyeVOxg.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dmah3EWF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSRohzC4.js";import"./index-CRlMy3bg.js";import"./index-pV_yzmY_.js";import"./Link-cYpkkuqp.js";import"./index-391GJ7ps.js";import"./index-DCELbeIn.js";import"./index-KaeBEDf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGQO4fMp.js";import"./addCustomCSSWithScoping-Bt7xCKzu.js";import"./index-CDW4JUA8.js";import"./information-uX8_TnNn.js";import"./sys-enter-2-CJJhzBhO.js";import"./alert-BmD5O1ac.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BXDuuJxS.js";import"./delete-BH_Ofluc.js";import"./settings-BOwjvOs-.js";import"./NoData-DAU8iV94.js";import"./IllustratedMessage-BdOpFcMu.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-D6IuGdJg.js";import"./index-8sZlfaIF.js";import"./index-C8a6NVMH.js";import"./slim-arrow-down-DjG80YJw.js";import"./Input-D-O_E4Pc.js";import"./ResponsivePopoverCommon.css-B045Nnj_.js";import"./ValueStateMessage.css-DpV5S_wa.js";import"./Suggestions.css-BvMw9k5F.js";import"./ListBoxItemGroupTemplate-o03o3K-I.js";import"./ComboBoxItemGroup-D7un_uFe.js";import"./ListItemBaseTemplate-DQCws7kn.js";import"./Token-D36n2Zus.js";import"./ScrollEnablement-QSFxM8aV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CdwuH3bB.js";import"./ToggleButton-Cd5NUYjN.js";import"./SuggestionItem-AGh_Mf5H.js";import"./index-DbwyhNE4.js";import"./Option-CDh-ocF3.js";import"./index-C7kuhskk.js";import"./SegmentedButton-DEMlsUEh.js";import"./index-D1IFlFlx.js";import"./Select-DTxOAyO4.js";import"./InvisibleMessage-DU_sw7pv.js";import"./slim-arrow-down-DZcd6ZcC.js";import"./index-RfAAwJsf.js";import"./index-Bb0M5Coz.js";import"./index-DCwY0BNz.js";import"./index-C89pqI8n.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DKuclrLO.js";import"./group-2-C1B8sHxp.js";import"./sort-descending-CJ2KeZ-8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index--eFanla0.js";import"./utils-BQ9l0ZXj.js";import"./index-BgO6mcLt.js";import"./index-vZRCG4hQ.js";import"./index-CEJjFBjT.js";import"./navigation-down-arrow-nSfE-hjH.js";import"./navigation-right-arrow-ByC8k-O9.js";import"./navigation-right-arrow-DKjWi810.js";import"./useCurrentTheme-CcZ-F948.js";import"./index-DOX5DR-q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUn0jH8-.js";import"./paper-plane-DSmkYTvk.js";import"./index-BHAQBVRI.js";import"./less-Bjdjo6qR.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
