import{j as e}from"./iframe-CuVq63aR.js";import{useMDXComponents as i}from"./index-0t9brk-b.js";import{I as a,F as m}from"./CommandsAndQueries-Ca8tTwEu.js";import{M as s,C as p}from"./blocks-Cc_3mMVm.js";import"./Tag-Dg3yp9Ne.js";import"./index-CzEXcp-Y.js";import{C as l}from"./ControlsWithNote-Cvy6nlTQ.js";import"./copy-B33m91ys.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CQ8uPA3L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wXdy4JWU.js";import"./index-BxKmXxxw.js";import"./index-KhF7LlaL.js";import"./Link-CIBW5Nwu.js";import"./index-Bncw1rp-.js";import"./index-CTTCfriq.js";import"./index-CNebcKEn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmxSnjHn.js";import"./addCustomCSSWithScoping-C8i5UOAF.js";import"./index-B7_hFjeD.js";import"./information-DZp5RqnQ.js";import"./sys-enter-2-CNKv6pdA.js";import"./alert-7PGhDeFz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUTeCcsm.js";import"./delete-ctqT1k32.js";import"./settings-BlGasMPb.js";import"./NoData-B4qjQOP9.js";import"./IllustratedMessage-Dx5bOO0b.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-RTNt-sqx.js";import"./index-DNtyE7Tf.js";import"./index-CyQxDGbx.js";import"./slim-arrow-down-Df_1rhWQ.js";import"./Input-BPkYam4a.js";import"./ResponsivePopoverCommon.css-CoaP-B_2.js";import"./ValueStateMessage.css-CiGME_0H.js";import"./Suggestions.css-C6D57ItQ.js";import"./ListBoxItemGroupTemplate-Cnml-jV3.js";import"./ComboBoxItemGroup-Ck56pMKA.js";import"./ListItemBaseTemplate-B7HCXwDc.js";import"./Token-BoF8gI7v.js";import"./ScrollEnablement-DzyyEcpH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DVdmxQUQ.js";import"./ToggleButton-vxPiqrWZ.js";import"./SuggestionItem-D09qkYgU.js";import"./index-BtHyX5_Y.js";import"./Option-Dpfgd9IN.js";import"./index-BTZ1Q1Qt.js";import"./SegmentedButton-Dp0F9lUa.js";import"./index-CYXbTMeF.js";import"./Select-wajBJflJ.js";import"./InvisibleMessage-DX2fP_3y.js";import"./slim-arrow-down-4yhTg3ae.js";import"./index-FN0CAgw1.js";import"./index-DqqzPQVu.js";import"./index-QDr3UQtb.js";import"./index-BhS6UWMS.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ThOPmQi4.js";import"./group-2-DZoGw3jS.js";import"./sort-descending-D4HKH5sT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbRTpC6F.js";import"./utils-Dk_P20L2.js";import"./index-CtIA8VPH.js";import"./index-DXqJthz9.js";import"./index-DTgqJJJQ.js";import"./navigation-down-arrow-O_bSI2G2.js";import"./navigation-right-arrow-BX8UrvSq.js";import"./navigation-right-arrow-v_EVNqHP.js";import"./useCurrentTheme-v99UfhTF.js";import"./index-tYGt_G7s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqK0RzMa.js";import"./paper-plane-2lg_ymEl.js";import"./index-CR4SU2MA.js";import"./less-cuFYL3WR.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
