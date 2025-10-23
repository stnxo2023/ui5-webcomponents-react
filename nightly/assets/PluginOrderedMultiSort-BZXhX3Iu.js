import{j as e}from"./iframe-dhwXAt1u.js";import{useMDXComponents as i}from"./index-DImPBCtJ.js";import{I as a,F as m}from"./CommandsAndQueries-BiJh2_dH.js";import{M as s,C as p}from"./blocks-CTyxDY6f.js";import"./Tag-BG2XjNSs.js";import"./index-B1ZC6OTg.js";import{C as l}from"./ControlsWithNote-BR4gWz9J.js";import"./copy-WVaPICqB.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-NobErNiv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEgKjCYL.js";import"./index-C7W-OT1T.js";import"./index-3eryvK5U.js";import"./Link-Cd_dPy_Q.js";import"./index-CAgLAQbh.js";import"./index-T43jgYfn.js";import"./index-CdiB3Os4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BR_2w1_J.js";import"./addCustomCSSWithScoping-cc9WpAMd.js";import"./index-BPFGYJtx.js";import"./information-hzaD6T-d.js";import"./sys-enter-2-B2YAXpf0.js";import"./alert-DeSP_HIc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQJ9_hXc.js";import"./delete-ColCegI9.js";import"./settings-BKxUXi_G.js";import"./NoData-DE4p_qfr.js";import"./IllustratedMessage-IVjS-cFc.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BYHaslJ3.js";import"./index-BdKfj6BP.js";import"./index-Bo0SF_w8.js";import"./slim-arrow-down-RFEatmWJ.js";import"./Input-Dhh001VP.js";import"./ResponsivePopoverCommon.css-byQMK4lk.js";import"./ValueStateMessage.css-7UGm8ZKL.js";import"./Suggestions.css-ChcbQr92.js";import"./ListBoxItemGroupTemplate-6OIAemZH.js";import"./ComboBoxItemGroup-BfFjklB8.js";import"./ListItemBaseTemplate-D31ELJez.js";import"./Token-9QLbAU5H.js";import"./ScrollEnablement-Bjuu67w6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BwVKYcla.js";import"./ToggleButton-D60jws_T.js";import"./SuggestionItem-BY0B1lvJ.js";import"./index-DFsd0zaO.js";import"./Option-Blnne7RQ.js";import"./index-DdMJqEp5.js";import"./SegmentedButton-DUCC8xz-.js";import"./index-hsE4BZb-.js";import"./Select-VK7jMl2Q.js";import"./InvisibleMessage-aNho_UJn.js";import"./slim-arrow-down-CHcSrWyO.js";import"./index-_A95DrSO.js";import"./index-xhEmKt2i.js";import"./index-C-LnOqtr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D5RqGlQv.js";import"./group-2-CYR4pn1M.js";import"./sort-descending-Dqk7kt1w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpmbe8i.js";import"./utils-bFJ73DdM.js";import"./index-B4TolNq1.js";import"./index-kxgSnLRw.js";import"./index-Dae02is2.js";import"./navigation-down-arrow-zUd6dVMN.js";import"./navigation-right-arrow-DHvkUpoR.js";import"./navigation-right-arrow-5cHWwAFo.js";import"./useCurrentTheme-Ecq0NIxs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DuHZ_byj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xQaBj4C2.js";import"./paper-plane-BQm487K_.js";import"./index-CEgJEyfN.js";import"./less-DyOzkEyI.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
