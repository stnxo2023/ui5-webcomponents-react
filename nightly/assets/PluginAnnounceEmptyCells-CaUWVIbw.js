import{j as t}from"./iframe-D9-3X0JI.js";import{useMDXComponents as n}from"./index-dMdAMZT7.js";import{I as i,F as m}from"./CommandsAndQueries-Cnpdrmv-.js";import{M as p,C as s}from"./blocks-BYKnuPZj.js";import"./Tag-rAEScKNS.js";import"./index-DwPMNEU4.js";import"./copy-B87NDbR1.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BFQ_A00u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B0kTLMxV.js";import"./index-Bo2p0dAu.js";import"./index-BC71hX7l.js";import"./Link-B5zjhOqH.js";import"./index-DhzIoMaL.js";import"./index-j1saZdO-.js";import"./index-CxPR9JIx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DORD8sYf.js";import"./addCustomCSSWithScoping-CDB2w5BM.js";import"./index-BjUikPJy.js";import"./information-e-gqJ6X6.js";import"./sys-enter-2-BhYBtaW9.js";import"./alert-XeF5lKFk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DHZG-a9h.js";import"./delete-Cqn9h0fS.js";import"./settings-D0TIiCOY.js";import"./NoData-h_3BPE3I.js";import"./IllustratedMessage-DrYfSsmV.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BQhnxhD2.js";import"./index-BnP9b9Ky.js";import"./index-lEFQSdUo.js";import"./slim-arrow-down-B8HgmHUP.js";import"./Input-DADAhjMq.js";import"./ResponsivePopoverCommon.css-CWBdwhTg.js";import"./ValueStateMessage.css-BQV-lfyq.js";import"./Suggestions.css-RW7Qb5Rw.js";import"./ListBoxItemGroupTemplate-95aXC4Zd.js";import"./ComboBoxItemGroup-BmvBFBsQ.js";import"./ListItemBaseTemplate-CeEtHuiX.js";import"./Token-D4ouf1p4.js";import"./ScrollEnablement-C4sfEIZB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhetoAjI.js";import"./ToggleButton-Cf16CjNh.js";import"./SuggestionItem-BznSOywU.js";import"./index-a8oDzDPg.js";import"./Option-DuBZhqYX.js";import"./index-CS7_81Z1.js";import"./SegmentedButton-CrnUIMou.js";import"./index-BaqGrvUy.js";import"./Select-jAoE6kcO.js";import"./InvisibleMessage-B78hZJHf.js";import"./slim-arrow-down-DRw17b4-.js";import"./index-PO4-y7XB.js";import"./index-BwtfdfmC.js";import"./index-C3d2BxPO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DzvCSHnC.js";import"./group-2-DG9Xxc_K.js";import"./sort-descending-DQD9wlqN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DakTmcy-.js";import"./utils-CCWGeWj_.js";import"./index-lNoXPje7.js";import"./index-B5sC3CbN.js";import"./index-CoAbgxwH.js";import"./navigation-down-arrow-BCk2Xe8o.js";import"./navigation-right-arrow-BcVav5TW.js";import"./navigation-right-arrow-DiWFJr_y.js";import"./useCurrentTheme-r_mdZh15.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DMLJfOS0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bu1wdE8w.js";import"./paper-plane-CSjFaLDV.js";import"./index-C6Aqw5an.js";import"./less-BQc0aqcX.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(i,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
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
`,t.jsx(m,{})]})}function Rt(r={}){const{wrapper:o}={...n(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Rt as default};
