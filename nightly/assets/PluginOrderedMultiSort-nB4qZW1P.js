import{j as e}from"./iframe-C3aU9yO2.js";import{useMDXComponents as i}from"./index-DcLDqK7w.js";import{I as a,F as m}from"./CommandsAndQueries-D0nTXU9T.js";import{M as s,C as p}from"./blocks-B9oc031V.js";import"./Tag-CNw53_eT.js";import"./index-i1N6ua_w.js";import{C as l}from"./ControlsWithNote-nHtB5Dyt.js";import"./copy-D_R4P06r.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BwxHOvH5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfpqN5Id.js";import"./index-g0B9jrXN.js";import"./index-DKI76k_B.js";import"./Link-BnEnKAv3.js";import"./index-DBwKQ69N.js";import"./index-D8QgyDbC.js";import"./index-CPcH_eI_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPfGSaYG.js";import"./addCustomCSSWithScoping-C73QrPVQ.js";import"./index-BU0JfJz1.js";import"./information-B-Ns6m0d.js";import"./sys-enter-2-D_Kaw-gu.js";import"./alert-7z2pNDRB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DnUmXdKQ.js";import"./delete-DmCWbdAi.js";import"./settings-1nFL_G7A.js";import"./NoData-vppJJq2k.js";import"./IllustratedMessage-BIRyOBBo.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CtRAMKvF.js";import"./index-DEu9ukF7.js";import"./index-BJ4JqDZt.js";import"./slim-arrow-down-B-t7KMm_.js";import"./Input-Cfbtnwg6.js";import"./ResponsivePopoverCommon.css-BiqlokwB.js";import"./ValueStateMessage.css-BCiC-Blk.js";import"./Suggestions.css-DhC4w4Fb.js";import"./ListBoxItemGroupTemplate-C7SkMpNF.js";import"./ComboBoxItemGroup-CIO6k5QH.js";import"./ListItemBaseTemplate-C7NEMs7Q.js";import"./Token-D-8TO1My.js";import"./ScrollEnablement-B-ve8lNO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BPLw0fnj.js";import"./ToggleButton--U2n7cRR.js";import"./SuggestionItem-B5fupWrO.js";import"./index-DrHO_6Yk.js";import"./Option-CeOJa7O5.js";import"./index-haCaBy7F.js";import"./SegmentedButton-DasYM7ls.js";import"./index-BHr0wFPK.js";import"./Select-C8enezS2.js";import"./InvisibleMessage-Ce5yXPOl.js";import"./slim-arrow-down-gN-yvIKk.js";import"./index-DcrniWqF.js";import"./index-ATxduGAU.js";import"./index-HMHM8G5Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BV4nhufn.js";import"./group-2-DXTcSu-3.js";import"./sort-descending-_zxdumlM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DbNwybSm.js";import"./utils-HF4Qfx7C.js";import"./index-D4SYQI3K.js";import"./index-BFaqayaE.js";import"./index-CJWdScx6.js";import"./navigation-down-arrow-D4g4EBUf.js";import"./navigation-right-arrow-C2JbsM5-.js";import"./navigation-right-arrow-DER4Cb5G.js";import"./useCurrentTheme-CNp62qcx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_6DRLOc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CyLBUYXb.js";import"./paper-plane-CRXLbten.js";import"./index-DiOVCr3o.js";import"./less-C2uRyvrb.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
