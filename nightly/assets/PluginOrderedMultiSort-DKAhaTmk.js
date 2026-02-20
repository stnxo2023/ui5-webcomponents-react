import{j as e}from"./iframe-D_oMot10.js";import{useMDXComponents as i}from"./index-Cg6HnkxT.js";import{I as a,F as m}from"./CommandsAndQueries-DPkePXTz.js";import{M as s,C as p}from"./blocks-2cuCWctq.js";import"./Tag-R7_VB2zh.js";import"./index-DYuRbnft.js";import{C as l}from"./ControlsWithNote-DXnp8onQ.js";import"./copy-D4R1-NDI.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CpSNPUE6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ds5vSSWx.js";import"./index-3r4NxXtD.js";import"./index-DO_1WCge.js";import"./Link-9JdM6Hjv.js";import"./index-DnX1qu0M.js";import"./index-DRuRCvkV.js";import"./index-1pxNHpjB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-izT7sph5.js";import"./addCustomCSSWithScoping-BPH8FgqV.js";import"./index-s1VP44pI.js";import"./information-D9-yMhmx.js";import"./sys-enter-2-B1tI1-EQ.js";import"./alert-C600_lKj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D3QE7t4X.js";import"./delete-0A1IJzIR.js";import"./settings-DYy_oKsW.js";import"./NoData-BekvHle4.js";import"./IllustratedMessage-jp9C_ng3.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Dd30xa9E.js";import"./index-i-6EpctQ.js";import"./index-u8vmOMKU.js";import"./slim-arrow-down-DgLBVq-1.js";import"./Input-C8nwJpL1.js";import"./ResponsivePopoverCommon.css-AxdwvBmm.js";import"./ValueStateMessage.css-BD-bXrba.js";import"./Suggestions.css-Cabt6nOq.js";import"./ListBoxItemGroupTemplate-DnWzMrIY.js";import"./ComboBoxItemGroup-D7xa7XFs.js";import"./ListItemBaseTemplate-qA9suj1W.js";import"./Token-BVzC5uio.js";import"./ScrollEnablement-DXy9g_lY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdOqn1aP.js";import"./ToggleButton--yAdk_ty.js";import"./SuggestionItem-Cfm6XrS-.js";import"./index-BlGxI91r.js";import"./Option-C_uqpt-r.js";import"./index-BdLqOm4-.js";import"./SegmentedButton-S4YhScxi.js";import"./index-tSiHVF9y.js";import"./Select-DrZaox4H.js";import"./InvisibleMessage-DDLiWcDo.js";import"./slim-arrow-down-Dlw-8h3-.js";import"./index-Cc2cok_1.js";import"./index-nl8CIEtb.js";import"./index-Du_ko5GP.js";import"./index-DyWV_0XY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXVgG9df.js";import"./group-2-8zib2_rz.js";import"./sort-descending-BvWPtphW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-tTOrxfXr.js";import"./utils-CrcpPJy1.js";import"./index-VkA4_y2n.js";import"./index-63bBxxuU.js";import"./index-6bx9Fpoe.js";import"./navigation-down-arrow-BD0SNbXx.js";import"./navigation-right-arrow-C-j4QHZm.js";import"./navigation-right-arrow-DXyKbQJ-.js";import"./useCurrentTheme-B6V2tZjd.js";import"./index-B0xbs9YS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DpJLc3e9.js";import"./paper-plane-xw6W06sT.js";import"./index-CW3qSWE6.js";import"./less-CiwlGLes.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
