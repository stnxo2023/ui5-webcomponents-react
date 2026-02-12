import{j as e}from"./iframe-DQ6p6C4w.js";import{useMDXComponents as i}from"./index-PJ7eIANP.js";import{I as a,F as m}from"./CommandsAndQueries-D4Earqxe.js";import{M as s,C as p}from"./blocks-DzLxfDF_.js";import"./Tag-maX3wI_O.js";import"./index-DMdtpgB4.js";import{C as l}from"./ControlsWithNote-Ur_jkq9G.js";import"./copy-DK9nMyWi.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-7SKfaEhF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyLo2c5y.js";import"./index-BX38vZ_H.js";import"./index-Crvp2P38.js";import"./Link-C5vNyymE.js";import"./index-BTeE4XW8.js";import"./index-GGF-6yBD.js";import"./index-BiYiYWPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEFxvwKp.js";import"./addCustomCSSWithScoping-D-NBvgXV.js";import"./index-BBaHTUom.js";import"./information-DP-BBVKe.js";import"./sys-enter-2-CHLEBxpk.js";import"./alert-DwSet8Gr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BM0AAgbR.js";import"./delete-DMRotf9j.js";import"./settings-Qlfl2--E.js";import"./NoData-CG8Gfnlk.js";import"./IllustratedMessage-Bk7WaAKk.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C6kdXBz1.js";import"./index-Be9p3z4u.js";import"./index-SfO0yU3c.js";import"./slim-arrow-down-I4aiGrie.js";import"./Input-9nOAsBMy.js";import"./ResponsivePopoverCommon.css-MVZLdMIH.js";import"./ValueStateMessage.css-CkUI3rSD.js";import"./Suggestions.css-Aftn0Ezj.js";import"./ListBoxItemGroupTemplate-CGyPTJpI.js";import"./ComboBoxItemGroup-DzFWuHFZ.js";import"./ListItemBaseTemplate-BQzetuJF.js";import"./Token-BvnOnelq.js";import"./ScrollEnablement-B8wTVu_K.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CNdPnkVA.js";import"./ToggleButton-FZnOi6HL.js";import"./SuggestionItem-B0rlLjtX.js";import"./index-DeVILtND.js";import"./Option-CqqhCzJo.js";import"./index-CWil2bGL.js";import"./SegmentedButton-BexC6deI.js";import"./index-BDyF9JTe.js";import"./Select-BaxOqbyI.js";import"./InvisibleMessage-24SaMl40.js";import"./slim-arrow-down-BD-D-jTM.js";import"./index-CqeSCPN8.js";import"./index-CSCE2WuM.js";import"./index-CafJ-VFs.js";import"./index-BFcP-RXU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-EKKbfFKu.js";import"./group-2-BNxeZZD0.js";import"./sort-descending-h8gj2BbX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlP9LYsR.js";import"./utils-CjCmjhy5.js";import"./index-DDn9deUd.js";import"./index-B8YKbRO9.js";import"./index-YsTawKKr.js";import"./navigation-down-arrow-CrnE_ZSF.js";import"./navigation-right-arrow-BufBbj_8.js";import"./navigation-right-arrow-fYJGhKbp.js";import"./useCurrentTheme-B7yEjOjC.js";import"./index-COiOOqBC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DUgzYJYd.js";import"./paper-plane-BuT7OBrZ.js";import"./index-iSaIGODj.js";import"./less-CywBv2zo.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
