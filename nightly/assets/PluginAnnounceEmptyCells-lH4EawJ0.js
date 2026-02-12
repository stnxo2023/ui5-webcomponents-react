import{j as t}from"./iframe-Hc0Jcm1H.js";import{useMDXComponents as n}from"./index-DuUU5AC1.js";import{I as i,F as m}from"./CommandsAndQueries-DaPP_-f6.js";import{M as p,C as s}from"./blocks-Blx2ursY.js";import"./Tag-DWcxngX2.js";import"./index-X6pjtL8_.js";import"./copy-BhskYI2N.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CSkHzbUH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQCUFERN.js";import"./index-BZHpmRs9.js";import"./index-BP8PtjoR.js";import"./Link-B4jgiGqN.js";import"./index-D4_s-XzL.js";import"./index-DixWMcP9.js";import"./index-YGVe_Lue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSgKpTfU.js";import"./addCustomCSSWithScoping-C31rwvDU.js";import"./index-CJBWc845.js";import"./information-MEaUQuQF.js";import"./sys-enter-2-Bor4HzlU.js";import"./alert-B5sjmhde.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUSpAEyp.js";import"./delete-B_UVOxI5.js";import"./settings-DoJo7PIR.js";import"./NoData-BtiqKpF_.js";import"./IllustratedMessage-7Q0rSxAX.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DY07_HAn.js";import"./index-C4-ueurv.js";import"./index-CVAhSMmh.js";import"./slim-arrow-down-CnQoJTna.js";import"./Input-jvbkedmk.js";import"./ResponsivePopoverCommon.css-BUymfbWg.js";import"./ValueStateMessage.css-DYbIayMA.js";import"./Suggestions.css-DAulSdYD.js";import"./ListBoxItemGroupTemplate-C3BPGY4S.js";import"./ComboBoxItemGroup-S4DHHq5B.js";import"./ListItemBaseTemplate-D1J42Smc.js";import"./Token-C_NNBIIw.js";import"./ScrollEnablement-DdNa3g_Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DI8nzW2J.js";import"./ToggleButton-Dqx5ood8.js";import"./SuggestionItem-BQwZmd1n.js";import"./index-B2zqQYOB.js";import"./Option-DYDjvvQF.js";import"./index-B-jLNkJI.js";import"./SegmentedButton-B6hVMkZG.js";import"./index-Cl268kCu.js";import"./Select-DcomDJKy.js";import"./InvisibleMessage-1eRkmfyK.js";import"./slim-arrow-down-DpK-rqPH.js";import"./index-BDvJxbiT.js";import"./index-D_cylvMd.js";import"./index-CtZBQQM2.js";import"./index-BF_BhXaP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D_PK0427.js";import"./group-2-CVFEbsNN.js";import"./sort-descending-DZXbPc0n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hjnENwQI.js";import"./utils-CMQMf6l5.js";import"./index-CP62UNNy.js";import"./index-C89QNOBV.js";import"./index-Dc4nb1AV.js";import"./navigation-down-arrow-Dgmp7r6E.js";import"./navigation-right-arrow-B3FKHK8J.js";import"./navigation-right-arrow-DBBKbyJD.js";import"./useCurrentTheme-D1RNYWH0.js";import"./index-3YVdwNdJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BnF71Q9x.js";import"./paper-plane-BEnc2lHw.js";import"./index-DJj6qKVN.js";import"./less-Bx2mAaAT.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
