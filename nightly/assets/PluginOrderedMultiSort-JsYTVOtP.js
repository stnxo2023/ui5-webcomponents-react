import{j as e}from"./iframe-7SE3nFh2.js";import{useMDXComponents as i}from"./index-C0FWbpZL.js";import{I as a,F as m}from"./CommandsAndQueries-BztwtTDr.js";import{M as s,C as p}from"./blocks-BJKQ4CAZ.js";import"./Tag-CAr8yJM3.js";import"./index-DcFj-mpl.js";import{C as l}from"./ControlsWithNote-CfLd-2FY.js";import"./copy-CDZIXxHa.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-5KmaRjUl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BdnA4cG1.js";import"./index-DZIYhziJ.js";import"./index-BH5SLEfd.js";import"./Link-DJshYrFL.js";import"./index-CJza0w__.js";import"./index-CHnd9ZVx.js";import"./index-cZBRAzkp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bx3Mb7HN.js";import"./addCustomCSSWithScoping-CrtLyOIc.js";import"./index-CZm6iJJ6.js";import"./information-CEHY-zK8.js";import"./sys-enter-2-Db6aMDI3.js";import"./alert-iGUotenY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DX_cHiRh.js";import"./delete-DvpuJF5J.js";import"./settings-D2UzRPAT.js";import"./NoData-BCcG8w18.js";import"./IllustratedMessage-Dil2N_hm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CbSgwdhQ.js";import"./index-Bu5BEf5E.js";import"./index-CvKc0QoP.js";import"./slim-arrow-down-BERkBWfL.js";import"./Input-kEzXj9c6.js";import"./ResponsivePopoverCommon.css-DqKEq-kc.js";import"./ValueStateMessage.css-wZQPf3zp.js";import"./Suggestions.css-DT0Rp6yR.js";import"./ListBoxItemGroupTemplate-mAb34mFu.js";import"./ComboBoxItemGroup-D6FTKSzF.js";import"./ListItemBaseTemplate-bpaX827C.js";import"./Token-D_Njw8ms.js";import"./ScrollEnablement-u1O_vcM6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-5gZgEeYH.js";import"./ToggleButton-Cdz6JUWa.js";import"./SuggestionItem-Cqdhpmzk.js";import"./index-B9dV6-hD.js";import"./Option-CLrwwL2p.js";import"./index-eRJ2H-45.js";import"./SegmentedButton-Bj_PgquH.js";import"./index-CehLK0E0.js";import"./Select-dx2eK6Cc.js";import"./InvisibleMessage-BpijQ7HL.js";import"./slim-arrow-down-BKj1QpKR.js";import"./index-C_8wufNy.js";import"./index-DRT-RGQF.js";import"./index-Dx0AFnS0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlvRaiGC.js";import"./group-2-Bh0Ip3fO.js";import"./sort-descending-C2lI-VAa.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BzfZ0HZ7.js";import"./utils-7WkdhtMP.js";import"./index-Bk-K0ke_.js";import"./index-C14sIMtK.js";import"./index-r--j9iEI.js";import"./navigation-down-arrow-Bok7EDK6.js";import"./navigation-right-arrow-CSEs046N.js";import"./navigation-right-arrow-Cssv535x.js";import"./useCurrentTheme-CSmhjyR7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DKaDhcRF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DTz5BFmM.js";import"./paper-plane-CNwDjI7Y.js";import"./index-dbJ2BFy5.js";import"./less-D_HisN9f.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
