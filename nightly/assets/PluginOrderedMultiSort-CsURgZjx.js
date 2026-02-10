import{j as e}from"./iframe-OU-rKGVl.js";import{useMDXComponents as i}from"./index-BdFoQaN_.js";import{I as a,F as m}from"./CommandsAndQueries-1YsKNX6u.js";import{M as s,C as p}from"./blocks-90C6s9DB.js";import"./Tag-BGeGdyvC.js";import"./index-CvYMziHu.js";import{C as l}from"./ControlsWithNote-DsttCYtU.js";import"./copy-ukTvQIks.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CCULtsWI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlWEaWz4.js";import"./index-B5S-I-wQ.js";import"./index-BCzS-sMX.js";import"./Link-DUV5jdr_.js";import"./index-Cy3EQ66_.js";import"./index-M6X6hbjk.js";import"./index-CvP3_iIG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DeGn29mr.js";import"./addCustomCSSWithScoping-BqWgeVkc.js";import"./index-CvIaP9X3.js";import"./information-DJNA9m3t.js";import"./sys-enter-2-Cr3cjNlh.js";import"./alert-Czqp44ew.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BGo6vKhl.js";import"./delete-_xztDnX7.js";import"./settings-CwmWqfy-.js";import"./NoData-BNu6Ou9F.js";import"./IllustratedMessage-Du7cTspw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-B8-nnn9a.js";import"./index-BY5HHzcI.js";import"./index-Cq-fj5gm.js";import"./slim-arrow-down-vaMbUVTQ.js";import"./Input-B4YLSXwH.js";import"./ResponsivePopoverCommon.css-Bzv7nheL.js";import"./ValueStateMessage.css-UI9OOvTY.js";import"./Suggestions.css-BymAQ3Y4.js";import"./ListBoxItemGroupTemplate-DvCKbQ3V.js";import"./ComboBoxItemGroup-CKFYNVAp.js";import"./ListItemBaseTemplate-eGcqzXUs.js";import"./Token-DMjAKD8x.js";import"./ScrollEnablement-C7rUKtrC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CxAFUNDr.js";import"./ToggleButton-EwMGFEkd.js";import"./SuggestionItem-CvAGY5Sq.js";import"./index-DTRkoFlC.js";import"./Option-DtkTSrk6.js";import"./index-Cf-s1qG0.js";import"./SegmentedButton-C67q4Csu.js";import"./index-C8V2aso4.js";import"./Select-DGZ5ZJGF.js";import"./InvisibleMessage-Dv2nzf5u.js";import"./slim-arrow-down-DxmGsJVh.js";import"./index-Dy0XpXnL.js";import"./index-DY2olzvX.js";import"./index-BOHa5n-X.js";import"./index-Bv6B9-dk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BtBGaZRL.js";import"./group-2-CfykcAeN.js";import"./sort-descending-BtOSPJ2K.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DzoQYUdz.js";import"./utils-C0mg2yQM.js";import"./index-CXggoDTH.js";import"./index-B8n4hNMo.js";import"./index-BWr4kG0m.js";import"./navigation-down-arrow-V4PkR50p.js";import"./navigation-right-arrow-CDyYktkW.js";import"./navigation-right-arrow-CH-kCDBe.js";import"./useCurrentTheme-BcmpDbsZ.js";import"./index-Dh82-zLH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiiM2WaD.js";import"./paper-plane-C06ESYz6.js";import"./index-Bjb9tiJS.js";import"./less-aYFPVRCg.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
