import{j as e}from"./iframe-CJJIsx6F.js";import{u as i,M as a,C as m}from"./blocks-ChaXMZP5.js";import{I as s}from"./CommandsAndQueries-B6BpCs-M.js";import"./Tag-n7rERTqv.js";import"./index-C3WbBMZ1.js";import{C as p}from"./ControlsWithNote-C517f0VS.js";import"./copy-CS6obn2m.js";import{F as l}from"./Footer-Ce6by-oH.js";import"./PageNotFound-BtSzGq-G.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CwHhua2M.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-GrYjVq0T.js";import"./index-BAPIP2EX.js";import"./index-CiQC7Mcr.js";import"./index-DWaBFkkI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CLM_ccAB.js";import"./addCustomCSSWithScoping-DH49qo7-.js";import"./index-8nS7lmoC.js";import"./index-qLq9B_00.js";import"./index-Comgbi1p.js";import"./information-DHzv4rEq.js";import"./sys-enter-2-DxE2QBT2.js";import"./alert-BgdGP7JP.js";import"./index-DqWhINqr.js";import"./Illustrations-BhBoWAi4.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjANczir.js";import"./delete-iBMBoW9R.js";import"./settings-DrDadmIh.js";import"./NoData-CLaEuyBQ.js";import"./NoFilterResults-DJwtRche.js";import"./index-CIOABHCP.js";import"./IllustratedMessage-D4RUR_cG.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-C7pW_ymX.js";import"./Input-DsafznTO.js";import"./ResponsivePopoverCommon.css-ChLB8_9T.js";import"./ValueStateMessage.css-BLjLq8yr.js";import"./Suggestions.css-CqX3de1P.js";import"./ListBoxItemGroupTemplate-BSinwIEf.js";import"./ComboBoxItemGroup-Bc4DlTLD.js";import"./ListItemBaseTemplate-DaxiMu7F.js";import"./Token-DL4JI-jm.js";import"./ScrollEnablement-BtkDzK2q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BESL8Ob4.js";import"./ToggleButton-Cnr9P6yJ.js";import"./multiselect-all-Bskqp-LX.js";import"./SuggestionItem-Cs3GRJFE.js";import"./index-C6tjcKY2.js";import"./Option-BxB-PkjK.js";import"./index-DGKNIxXV.js";import"./SegmentedButton-Bzt45PRO.js";import"./index-CdhWGsJy.js";import"./Select-DE4i9rKp.js";import"./InvisibleMessage-Cyxze3uu.js";import"./index-DGPTSllW.js";import"./index-DXlSvPUQ.js";import"./index-CXnZMaCF.js";import"./index-JFvXmi3y.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bo9w-30o.js";import"./group-2-BSryHq49.js";import"./sort-descending-s0zyZhYG.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGeA_s_w.js";import"./utils-D0vF-SRs.js";import"./index-CGyGuqHJ.js";import"./index-ChV5JXtw.js";import"./index-B5SvgXn6.js";import"./navigation-down-arrow-C4Sf-qtS.js";import"./navigation-right-arrow-DQC4L2-T.js";import"./navigation-right-arrow-BuD6ryaO.js";import"./useCurrentTheme-iJZHQfRw.js";import"./index-BHQcIWf-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-1-FsbUZP.js";import"./paper-plane-BSxU-RyY.js";import"./index-BR1QDb9u.js";import"./less-BBBCDqSd.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
