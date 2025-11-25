import{j as t}from"./iframe-rBa3eszb.js";import{useMDXComponents as n}from"./index-ywplRXEz.js";import{I as i,F as m}from"./CommandsAndQueries-CwUQeNe6.js";import{M as p,C as s}from"./blocks-g4en69Tv.js";import"./Tag-Ub-ab5wh.js";import"./index-CpHbQUX7.js";import"./copy-DpAiYmLC.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DwoO2n4l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_uK4ftNi.js";import"./index-dvt-GDfC.js";import"./index--W9c_yZX.js";import"./Link-Dq-0iXqs.js";import"./index-SiJKqGQM.js";import"./index-Bt8TlIkO.js";import"./index-CCm0OAPD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-cGFZau.js";import"./addCustomCSSWithScoping-BFTmBMm0.js";import"./index-Dlmk5mT2.js";import"./information-Do12jBFt.js";import"./sys-enter-2-Gg5Ob7c_.js";import"./alert-Cl85dmlC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BdvCWOzD.js";import"./delete-DSX6IBAt.js";import"./settings-B5OYEsJJ.js";import"./NoData-DnjMluBO.js";import"./IllustratedMessage-ft7Ssdsp.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DL4_GS9s.js";import"./index-CeS1OQQr.js";import"./index-rLirECJZ.js";import"./slim-arrow-down-C9VdBaRF.js";import"./Input-m5bCswpX.js";import"./ResponsivePopoverCommon.css-CCI8LaeI.js";import"./ValueStateMessage.css-G3jxxdhr.js";import"./Suggestions.css-Bza81oFQ.js";import"./ListBoxItemGroupTemplate-BDdWlJ71.js";import"./ComboBoxItemGroup-C5w7p3nn.js";import"./ListItemBaseTemplate-DjnvcIEh.js";import"./Token-C1Lxypw2.js";import"./ScrollEnablement-BvgkaIDV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DN6z6JAI.js";import"./ToggleButton-Do4GdOaF.js";import"./SuggestionItem-D8MLXmu2.js";import"./index-DE7-37Zx.js";import"./Option-3oJBHvkA.js";import"./index-CUcb9Gd6.js";import"./SegmentedButton-DfvUN2eU.js";import"./index-Bsqqc8MZ.js";import"./Select-B8folAVa.js";import"./InvisibleMessage-DbLy2p28.js";import"./slim-arrow-down-BI4obKhl.js";import"./index-_g-j8myn.js";import"./index-DlIBvfIs.js";import"./index-BsdBRU2K.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cv9GM9v6.js";import"./group-2-Bec-D2WX.js";import"./sort-descending-_A-rRud-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BaG1O05d.js";import"./utils-B0At23gp.js";import"./index-BofIltQ1.js";import"./index-BI_6m6xU.js";import"./index-BDnRm_Qs.js";import"./navigation-down-arrow-DDHH9XQh.js";import"./navigation-right-arrow-sPX4M8sP.js";import"./navigation-right-arrow-CKY57fNf.js";import"./useCurrentTheme-NuodFJJx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B62mh56S.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BifrIkAV.js";import"./paper-plane-CAhseGkA.js";import"./index-fMMDrhfL.js";import"./less-BLxfjnTZ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
