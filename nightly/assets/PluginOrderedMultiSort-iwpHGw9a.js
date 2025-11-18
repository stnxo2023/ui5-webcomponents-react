import{j as e}from"./iframe-DMHzJZ-j.js";import{useMDXComponents as i}from"./index-C6fVjeP1.js";import{I as a,F as m}from"./CommandsAndQueries-DGQGLEXC.js";import{M as s,C as p}from"./blocks-BBNtOPy5.js";import"./Tag-CQITClqv.js";import"./index-C0eFSkjd.js";import{C as l}from"./ControlsWithNote-BUBYP7Bu.js";import"./copy-x3ZdDA2U.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CaT9r6rb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhIsFRFq.js";import"./index-B1RFmErt.js";import"./index-Cr6zAa1Q.js";import"./Link-DH5vJWVF.js";import"./index-DgEALGZi.js";import"./index-CqxeRCB-.js";import"./index-CEzdIVxS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-bWNLwVQr.js";import"./addCustomCSSWithScoping-Br9NkwKR.js";import"./index-BlloQ94B.js";import"./information-41_Ak17O.js";import"./sys-enter-2-YeOg860G.js";import"./alert-Dt7k-zHX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BeCjkhT-.js";import"./delete-B3Zi7ci0.js";import"./settings-DpEAtvN4.js";import"./NoData-CMRDWD8S.js";import"./IllustratedMessage-ypMCec_7.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BAEmwexU.js";import"./index-BLZvKk1A.js";import"./index-DALZzsGY.js";import"./slim-arrow-down-IOQwWOJR.js";import"./Input-D0sQDQIP.js";import"./ResponsivePopoverCommon.css-BZuN8o2Z.js";import"./ValueStateMessage.css-Cu_y8whz.js";import"./Suggestions.css-Du7gKKRX.js";import"./ListBoxItemGroupTemplate-B0EOdTVM.js";import"./ComboBoxItemGroup-CHjUNt3f.js";import"./ListItemBaseTemplate-C5SCfjzM.js";import"./Token-DnzFeT9s.js";import"./ScrollEnablement-CIWRDRru.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWeiqPrI.js";import"./ToggleButton-CBNvjcuG.js";import"./SuggestionItem-DyoT1JDI.js";import"./index-CMQmlJik.js";import"./Option-DWdsEKMy.js";import"./index-DIXxOC37.js";import"./SegmentedButton-BiHeLBaC.js";import"./index-B7KKnXVU.js";import"./Select-HM-omYP_.js";import"./InvisibleMessage-DHXVn91v.js";import"./slim-arrow-down-B6ZtTkOe.js";import"./index-Cu33fkQB.js";import"./index-BfuDz84Z.js";import"./index-uksb_LL1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-e3XRiwh1.js";import"./group-2-BdpK5aV9.js";import"./sort-descending-BtXqYEdP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXKiXJss.js";import"./utils-DoNqiPbK.js";import"./index-BP4PKNEe.js";import"./index-CVjUPdda.js";import"./index-aypBjRie.js";import"./navigation-down-arrow-3r7pwMvO.js";import"./navigation-right-arrow-CqCWNsea.js";import"./navigation-right-arrow-B-wRit2V.js";import"./useCurrentTheme-fSV64WwT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DNFK3A_E.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zZAL_Iqq.js";import"./paper-plane-C9A5taeB.js";import"./index-CGpUpTTM.js";import"./less-DGQbhCVA.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
