import{j as t}from"./iframe-CGE6jX6t.js";import{useMDXComponents as i}from"./index-CnlF4PpM.js";import{I as n}from"./CommandsAndQueries-D_JGI6Ia.js";import{M as m,C as p}from"./blocks-C1wugZAv.js";import"./Tag-BT7c2k9t.js";import"./index-O5K3XRBn.js";import"./copy-ByAfyVz0.js";import{F as s}from"./Footer-BebX2FrJ.js";import"./PageNotFound-gkdNug7A.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DN55SoRt.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B734PLKt.js";import"./index-D1hVPzQS.js";import"./index-WD-xjM3p.js";import"./index-DuWDlj0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jWRCnrak.js";import"./addCustomCSSWithScoping-Bg1A5NWS.js";import"./index-CMs90z2F.js";import"./index-D4AJb6hG.js";import"./index-Bx2-sARl.js";import"./information-DjCg2NR8.js";import"./sys-enter-2-WI9s45tq.js";import"./alert-DkCV9tpB.js";import"./index-bjWm1Qbv.js";import"./Illustrations-DcoINpXf.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BdAOa6pX.js";import"./delete-DVSEwasX.js";import"./settings-DyAuU0nR.js";import"./NoData-BsxYtnRh.js";import"./NoFilterResults-C4DrdCVU.js";import"./index-CoW4a81M.js";import"./IllustratedMessage-Dlxr7mI5.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-lo9U6rw5.js";import"./Input-WMBW16LC.js";import"./ResponsivePopoverCommon.css-BdAey9nW.js";import"./ValueStateMessage.css-CXantPrh.js";import"./Suggestions.css-C3jx0r5H.js";import"./ListBoxItemGroupTemplate-CmwMoQVG.js";import"./ComboBoxItemGroup-Bc-DIORN.js";import"./ListItemBaseTemplate-Dx7gl5aW.js";import"./Token-CIFgetRy.js";import"./ScrollEnablement-CMpF8f9q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dve_L83D.js";import"./ToggleButton-BmsIAL6q.js";import"./multiselect-all-C0EP75IP.js";import"./SuggestionItem-DkZnmDv0.js";import"./index-CUSQ5hC_.js";import"./Option-dcd03uYH.js";import"./index-CTUBFWCz.js";import"./SegmentedButton-d7mrBJIZ.js";import"./index-DG4Bts7Y.js";import"./Select-BMfjDvRC.js";import"./InvisibleMessage-DG05ioDr.js";import"./index-DGZZNJ5p.js";import"./index-D0Lm4r4_.js";import"./index-DFgUGNnk.js";import"./index-BF-516Y4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-KLz0gUBW.js";import"./group-2-5QqJEoZA.js";import"./sort-descending-ghxeytqc.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CiV4PMwH.js";import"./utils-BLUFONTL.js";import"./index-gxg4Sry9.js";import"./index-BwLmagC2.js";import"./index-DouXrx1j.js";import"./navigation-down-arrow-EEiViiJ7.js";import"./navigation-right-arrow-DUtm-zLP.js";import"./navigation-right-arrow-DkDBuRJY.js";import"./useCurrentTheme-Ci3WGaWO.js";import"./index-CSbZISIN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sj-cJ_3l.js";import"./paper-plane-BxyaPnuX.js";import"./index-B-5DXRiN.js";import"./less-oZYALZR_.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,t.jsx(o.p,{children:t.jsx(o.strong,{children:"First data entry with empty values or undefined fields:"})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-js",children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
