import{j as e}from"./iframe-DVV5VFB7.js";import{useMDXComponents as i}from"./index-qyzUrO0d.js";import{I as a,F as m}from"./CommandsAndQueries-lBZKGmp7.js";import{M as s,C as p}from"./blocks-D1E9_7c3.js";import"./Tag-CQyymDzh.js";import"./index-Bn7PyzsE.js";import{C as l}from"./ControlsWithNote-Cyp5Omba.js";import"./copy-Cn3WomF2.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-8wFH9WTq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dqdoz1dV.js";import"./index-BkDm8D7N.js";import"./index-gDTG9hvV.js";import"./Link-DfNmKUcn.js";import"./index-gNtvK5Wx.js";import"./index-ZnLduBLK.js";import"./index-BHIms4DS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_xwBI5c.js";import"./addCustomCSSWithScoping-DOzeCYXW.js";import"./index-DCIIs4BW.js";import"./information-rc4de9km.js";import"./sys-enter-2-DXmpS6_D.js";import"./alert-DByE3GtL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-s9VskAhU.js";import"./delete-CgivBeZ4.js";import"./settings-CK2OfFA6.js";import"./NoData-DxLA3V-q.js";import"./IllustratedMessage-DQuWY2vM.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BLT6QU8O.js";import"./index-j-oJ2Ibk.js";import"./index-9zpcVlZY.js";import"./slim-arrow-down-DEwtX93l.js";import"./Input-Bcwk4klZ.js";import"./ResponsivePopoverCommon.css-D_3NdHu-.js";import"./ValueStateMessage.css-CTyww1Cy.js";import"./Suggestions.css-_wFG5-Dq.js";import"./ListBoxItemGroupTemplate-DmAn1Srm.js";import"./ComboBoxItemGroup-Cqu9NEa3.js";import"./ListItemBaseTemplate-7WJ7iCbr.js";import"./Token-K0CZHa6Z.js";import"./ScrollEnablement-D9nrHUMi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-g5MAuYgn.js";import"./ToggleButton-DW6jAKtP.js";import"./SuggestionItem-CWxMLjlC.js";import"./index-BZgPzTwo.js";import"./Option-DWq_yYfl.js";import"./index-BmV7OUNq.js";import"./SegmentedButton-BJTPiUGO.js";import"./index-C5tIVlnD.js";import"./Select-BMXrr-12.js";import"./InvisibleMessage-D0yEGssO.js";import"./slim-arrow-down-DH4qIoze.js";import"./index-DwbiADyX.js";import"./index-Co5rF_Rr.js";import"./index-BeQBrD2O.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D8sf2cJm.js";import"./group-2-DPk6j2HH.js";import"./sort-descending-5IRe054w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Imht7Owq.js";import"./utils-Dn8MODVh.js";import"./index-D24dphxh.js";import"./index-WcUeGWn8.js";import"./index-5P6_7SIE.js";import"./navigation-down-arrow-C5SV30gd.js";import"./navigation-right-arrow-D7hf5-64.js";import"./navigation-right-arrow-CDfIknCA.js";import"./useCurrentTheme-DO8jocYJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CnFm52uS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BHovj_YO.js";import"./paper-plane-BbjknDKE.js";import"./index-pF5ldAnN.js";import"./less-CtNkBeC3.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
