import{j as e}from"./iframe-Bf1hlxgS.js";import{useMDXComponents as i}from"./index-B002OMKA.js";import{I as a,F as m}from"./CommandsAndQueries-BEe5YBSl.js";import{M as s,C as p}from"./blocks-CF_xVWI_.js";import"./Tag-BHAjLoAY.js";import"./index-p22CRHMo.js";import{C as l}from"./ControlsWithNote-BfzKgmUz.js";import"./copy-D5BVEzvy.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BSgEoKJz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-S325RU.js";import"./index-BciJGkl8.js";import"./index-hDeN6gmj.js";import"./Link-Bn0GO4LF.js";import"./index-BqDvsFmr.js";import"./index-BjKEmns7.js";import"./index-DhV0sN_I.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D7KxqJSV.js";import"./addCustomCSSWithScoping-BIqc26fM.js";import"./index-2lJhwVzj.js";import"./information-BXU6Hxbd.js";import"./sys-enter-2-BvfgNwob.js";import"./alert-B3TgQjln.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cb0z8X09.js";import"./delete-D8DWeF7d.js";import"./settings-Dh74knWL.js";import"./NoData-PZMeGE26.js";import"./IllustratedMessage-h1DOAdex.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C3l4wxGh.js";import"./index-C5eIYaqM.js";import"./index-Bk0S-jnY.js";import"./slim-arrow-down-C4-n4KwM.js";import"./Input-Dqxhrjvq.js";import"./ResponsivePopoverCommon.css-Df1YsyQx.js";import"./ValueStateMessage.css-DXAAF2dF.js";import"./Suggestions.css-DM_nm0RD.js";import"./ListBoxItemGroupTemplate-C5qHO486.js";import"./ComboBoxItemGroup-DPlsTSsl.js";import"./ListItemBaseTemplate-BqEI7cM7.js";import"./Token-CPH3EVcO.js";import"./ScrollEnablement-Dfx6-CYw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9ipNNEN.js";import"./ToggleButton-D_L21r0E.js";import"./SuggestionItem-AhhjJ8Mh.js";import"./index-TUCbMDvM.js";import"./Option-CqSMarpV.js";import"./index-zS-bN0DU.js";import"./SegmentedButton-BicHJo62.js";import"./index-BK2139LG.js";import"./Select-FKh8tKiT.js";import"./InvisibleMessage-BnSLCX5X.js";import"./slim-arrow-down-amOGocIG.js";import"./index-BmHDaJX3.js";import"./index-C-eVdq9L.js";import"./index-BC1Ed97q.js";import"./index-ChBbQCuo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjkvSi-l.js";import"./group-2-BBxRQHAf.js";import"./sort-descending-BoIXgBQJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DtECT_FH.js";import"./utils-BC9PCMpX.js";import"./index-CszV8wTC.js";import"./index-CxOmA48X.js";import"./index-DNt1wk0D.js";import"./navigation-down-arrow-DmEpUMgP.js";import"./navigation-right-arrow-Bu3lyT6l.js";import"./navigation-right-arrow-BBudxr1z.js";import"./useCurrentTheme-gu6EY9KG.js";import"./index-VBVjOL-U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-Rd56YE.js";import"./paper-plane-CEqXSyIK.js";import"./index-CSGuzL_r.js";import"./less-C1jg6kBH.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
