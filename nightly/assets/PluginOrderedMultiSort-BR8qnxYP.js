import{j as e}from"./iframe-sceg0YFv.js";import{useMDXComponents as i}from"./index-Dd71zBof.js";import{I as m,F as a}from"./CommandsAndQueries-DKneq4GY.js";import{M as s,C as p}from"./blocks-DYuUqipq.js";import"./Tag-CeuATfsT.js";import"./index-D3F4cwyn.js";import{C as l}from"./ControlsWithNote-LTnpivX1.js";import"./copy-BMdV5CCm.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D9V3hbO9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8sMjurJr.js";import"./index-DSENQiVR.js";import"./index-F95KXh_C.js";import"./Link-DWrZ8VdK.js";import"./index-Bk8MfuNW.js";import"./index-CEhCU38B.js";import"./index-DAUv-Nz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrlG2Z_i.js";import"./addCustomCSSWithScoping-CcKa_wrj.js";import"./index-B8FjapMT.js";import"./information-BKrgGcb8.js";import"./sys-enter-2-t67Ok8iZ.js";import"./alert-DGYqNpWm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-pBbQnN3Z.js";import"./delete-BcYS3_de.js";import"./settings-DrHuTXnI.js";import"./NoData-BwUWak2R.js";import"./IllustratedMessage-CcQlEZMH.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Va26yAXy.js";import"./index-C4VdLOMW.js";import"./slim-arrow-down-B5pvNBWL.js";import"./Input-BzfDni2m.js";import"./ResponsivePopoverCommon.css-nC5XMOBp.js";import"./ValueStateMessage.css-DoUgf-5j.js";import"./Suggestions.css-BM83gU06.js";import"./ListBoxItemGroupTemplate-BqRj3VE-.js";import"./ComboBoxItemGroup-Cs6EfPox.js";import"./ListItemBaseTemplate-DRhEz-gw.js";import"./Token-CMcoBKOf.js";import"./ScrollEnablement-D3zh3Kdj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B6k3txAq.js";import"./ToggleButton-DvFeI1Lt.js";import"./SuggestionItem-pUR3Pu7g.js";import"./index-DhvsTyd-.js";import"./Option-g5dMk_Dv.js";import"./index-M3RgBHzH.js";import"./SegmentedButton-u8O6wtdn.js";import"./index-CfnPZ09d.js";import"./Select-ByBsloVO.js";import"./InvisibleMessage-BWbsBg6p.js";import"./slim-arrow-down-BMGSx_7g.js";import"./index-NnSPlH_p.js";import"./index-CZeNbB2P.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zkm8V6wo.js";import"./group-2-C-nKwgK2.js";import"./sort-descending-DgIX2NPP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8uJhRMm.js";import"./utils-DWNV0P4_.js";import"./index-BbsMwmmG.js";import"./index-CPOk0n0E.js";import"./index-LxsB8pJ3.js";import"./navigation-down-arrow-DeNM6o9T.js";import"./navigation-right-arrow-B8ciO61d.js";import"./navigation-right-arrow-Cpbh-nxP.js";import"./useCurrentTheme-BACbWtxM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-PhsavknA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2UKl6MPc.js";import"./paper-plane-B69Ziwxr.js";import"./index-Dnv3XQPA.js";import"./less-Byh4l9lP.js";import"./index-DPuz9km0.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(m,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,e.jsx(a,{})]})}function Le(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Le as default};
