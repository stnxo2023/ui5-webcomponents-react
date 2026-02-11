import{j as e}from"./iframe-BvHqSIyK.js";import{useMDXComponents as i}from"./index-C9vrwz77.js";import{I as a,F as m}from"./CommandsAndQueries-B3hUlog3.js";import{M as s,C as p}from"./blocks-BxoU3Yu6.js";import"./Tag-99RoGaFy.js";import"./index-BB14dXBi.js";import{C as l}from"./ControlsWithNote-CTnWG3NF.js";import"./copy-BP-1S5h9.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BzEtAFg2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAufjIqI.js";import"./index-Cb6d5Ui8.js";import"./index-Dvhux2R5.js";import"./Link-CgDmPG1r.js";import"./index-BX2w3DS0.js";import"./index-lpb4Baiz.js";import"./index--L__lImq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3VWoxNN.js";import"./addCustomCSSWithScoping-Bvbl39sy.js";import"./index-B7BXsln5.js";import"./information-zngl4LUv.js";import"./sys-enter-2-D9Z1FJcM.js";import"./alert-F1tFIdLT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnXdKyTy.js";import"./delete-CuG3RM5m.js";import"./settings-D_BTzOE6.js";import"./NoData-lpA7htfb.js";import"./IllustratedMessage-Cf-o6GMJ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DVGSOjnh.js";import"./index-Bow0_lnK.js";import"./index-DrmQroFf.js";import"./slim-arrow-down-C2UZE7h0.js";import"./Input-Br-sY9ky.js";import"./ResponsivePopoverCommon.css-sekIyiK-.js";import"./ValueStateMessage.css-BRJx2fcS.js";import"./Suggestions.css-CV4MjGEF.js";import"./ListBoxItemGroupTemplate-B-OeNXtJ.js";import"./ComboBoxItemGroup-B2NxOsQm.js";import"./ListItemBaseTemplate-BWetPhdo.js";import"./Token-6nUBCvO_.js";import"./ScrollEnablement-HwiTsDO2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-WAmqQIXu.js";import"./ToggleButton-bhikrMK7.js";import"./SuggestionItem-_aBHJoN3.js";import"./index-DnkLMjxR.js";import"./Option-fB_CKO8N.js";import"./index-OFuAM7HC.js";import"./SegmentedButton-df2qYRN0.js";import"./index-BjZ8DHVA.js";import"./Select-BaeqruA9.js";import"./InvisibleMessage-BSe3iB9m.js";import"./slim-arrow-down-BORyrk-u.js";import"./index-DqS5V8WW.js";import"./index-KF0fvs5m.js";import"./index-C71q_atH.js";import"./index-DRekqyHy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BXvWevTj.js";import"./group-2-DOLgcJ-T.js";import"./sort-descending-CxAjsNpq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D39_iadB.js";import"./utils-Bm3EbaDm.js";import"./index-DVh5GQMZ.js";import"./index-C_6rr-HH.js";import"./index-BW296Krt.js";import"./navigation-down-arrow-DT5dtpnO.js";import"./navigation-right-arrow-PuFMbFjH.js";import"./navigation-right-arrow-I9zR3Bwc.js";import"./useCurrentTheme-BLBS4rCs.js";import"./index-B5WxCuR5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlCv73Ap.js";import"./paper-plane-CSXFE3V8.js";import"./index-Cxmpze17.js";import"./less-BtNTjp5U.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
