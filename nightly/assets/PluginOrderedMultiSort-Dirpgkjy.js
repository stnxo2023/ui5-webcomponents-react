import{j as e}from"./iframe-JkIS1XbA.js";import{useMDXComponents as i}from"./index-s0dX5IQa.js";import{I as a,F as m}from"./CommandsAndQueries-t8PqdBYw.js";import{M as s,C as p}from"./blocks-DIFA4jfF.js";import"./Tag-CGYuzpRX.js";import"./index-Cki6PEzP.js";import{C as l}from"./ControlsWithNote-BVMBwcga.js";import"./copy-BpEy4GT_.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-zqPKIr8k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcRV2upd.js";import"./index-If9QK12V.js";import"./index-Cc6IDcWO.js";import"./Link-C8ljX_Jl.js";import"./index-BJe_Ldbq.js";import"./index-CIULjnJw.js";import"./index-D4k933VY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6BvO_Mx.js";import"./addCustomCSSWithScoping-OrJPV9ed.js";import"./index-wV8mgQwM.js";import"./information-8O35dRa_.js";import"./sys-enter-2-BwjA-U8a.js";import"./alert-0nYrX8QQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXT2Cgk-.js";import"./delete-CIhDQEzl.js";import"./settings-D4GDgni6.js";import"./NoData-CGi4XDkU.js";import"./IllustratedMessage-Wq2Ul-i9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CeWFzWKq.js";import"./index-Ce7dmWA4.js";import"./index-DTso7Ssf.js";import"./slim-arrow-down-CxdQbgux.js";import"./Input-DAygltfI.js";import"./ResponsivePopoverCommon.css-DalBzcK6.js";import"./ValueStateMessage.css-DB31QG7j.js";import"./Suggestions.css-DDSHaogF.js";import"./ListBoxItemGroupTemplate-CU0DT1IQ.js";import"./ComboBoxItemGroup-spyevgsi.js";import"./ListItemBaseTemplate-DG-Nk2uN.js";import"./Token-BuJPwVWP.js";import"./ScrollEnablement-DgEc-4I0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBW51XFx.js";import"./ToggleButton-BQDsMvuW.js";import"./SuggestionItem-DcE8EEE7.js";import"./index-DRdjcI3a.js";import"./Option-BPjQvE5p.js";import"./index-D3fBZPmN.js";import"./SegmentedButton-ChWUymxG.js";import"./index-DdxRipET.js";import"./Select-DtPi2w1p.js";import"./InvisibleMessage-B2BhAQgi.js";import"./slim-arrow-down-DRq74hAW.js";import"./index-C-SFTGz_.js";import"./index-BgRffrdt.js";import"./index-bz7pM8qx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-upsf-FbF.js";import"./group-2-B13YNGeD.js";import"./sort-descending-jvCE5ooF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk01B-cJ.js";import"./utils-OzEeB7Yk.js";import"./index-TTqlvXZi.js";import"./index-Y6bQjObX.js";import"./index-D0XJ_zxW.js";import"./navigation-down-arrow-BloNf-Qp.js";import"./navigation-right-arrow-D5wlsInA.js";import"./navigation-right-arrow-C2s_1KE8.js";import"./useCurrentTheme-DyiO6FGA.js";import"./IndicationColor-DVw-fSM_.js";import"./index-yDwJ49Kg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-3MqpM2h7.js";import"./paper-plane-FRWsPWej.js";import"./index-by9B6z8d.js";import"./less-B2UjUmjt.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
