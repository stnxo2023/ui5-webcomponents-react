import{j as e}from"./iframe-Qn10Vv46.js";import{useMDXComponents as i}from"./index-Dn_QNZXe.js";import{I as a,F as m}from"./CommandsAndQueries-BS5w0Fww.js";import{M as s,C as p}from"./blocks-CqvMe-zP.js";import"./Tag-D88IrP9Y.js";import"./index-CPne16Vl.js";import{C as l}from"./ControlsWithNote-D0dP6j7A.js";import"./copy-CASyM-HB.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-H3_QwZfA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1Dq2e1Fv.js";import"./index-D9ZF8-N2.js";import"./index-u07ulNkL.js";import"./Link-B9oRKMRP.js";import"./index-Btsu4EzQ.js";import"./index-D7W_CU3P.js";import"./index-Qf4zPxvx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyNR1Lsa.js";import"./addCustomCSSWithScoping-BMEnUHPm.js";import"./index-BCXe2PbY.js";import"./information-BED9_Z-O.js";import"./sys-enter-2-DmPWvQNd.js";import"./alert-CtILWS1T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDGW3LlO.js";import"./delete-CwMLkwBl.js";import"./settings-D3w6QaCp.js";import"./NoData-DlAD3CDh.js";import"./IllustratedMessage-B5PXEdvM.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-D1-NKvrK.js";import"./index-DAtiHyZC.js";import"./index-BTxgNax-.js";import"./slim-arrow-down-DStIyIYv.js";import"./Input-JG6KYeb2.js";import"./ResponsivePopoverCommon.css-D30PmpG6.js";import"./ValueStateMessage.css-B1tOkt9X.js";import"./Suggestions.css-AZtlnByU.js";import"./ListBoxItemGroupTemplate-Ck_Tg_1E.js";import"./ComboBoxItemGroup-X4WYLtK7.js";import"./ListItemBaseTemplate-aIA1KjTO.js";import"./Token-B8pCzhwp.js";import"./ScrollEnablement-BI5-jdZK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bar0KGH4.js";import"./ToggleButton-CRT5W38j.js";import"./SuggestionItem-D11zz-CY.js";import"./index-CP1thd2f.js";import"./Option-C4JrqG_U.js";import"./index-C8dYCS08.js";import"./SegmentedButton-DrQ4e9ne.js";import"./index-BUBbEq2D.js";import"./Select-DLuDF3wk.js";import"./InvisibleMessage-BlyETXSd.js";import"./slim-arrow-down-BRQZce7U.js";import"./index-XwrFFEKH.js";import"./index-BXul6roJ.js";import"./index-BakmgRez.js";import"./index-BmRC0J2V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMRvgaWs.js";import"./group-2-C_NGD824.js";import"./sort-descending-BFLjgKM6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHB3H4fo.js";import"./utils-B-v7HQ2f.js";import"./index-B6IRXIFn.js";import"./index-BWjiDXwP.js";import"./index-7awi3J8u.js";import"./navigation-down-arrow-Coc2XK-B.js";import"./navigation-right-arrow-C5N9ABfy.js";import"./navigation-right-arrow-DMix7vwu.js";import"./useCurrentTheme-D9dDzE9L.js";import"./index-Bo0yjZ_x.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0Grxk9f4.js";import"./paper-plane-Cf20vZx7.js";import"./index-BADkrGDt.js";import"./less-DtkLr4vn.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
