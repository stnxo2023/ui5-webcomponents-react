import{j as t}from"./iframe-8VKaAWwE.js";import{useMDXComponents as n}from"./index-BiQxBi02.js";import{I as i,F as m}from"./CommandsAndQueries-Br8gYKlc.js";import{M as p,C as s}from"./blocks-D4P1btFV.js";import"./Tag-CAEVBdQF.js";import"./index-BMIVJ8fC.js";import"./copy-GTYDTz4M.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BERQNFQP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DeQFsrbp.js";import"./index-CG1tJmDp.js";import"./index-DjKsiZpu.js";import"./Link-Br8LM296.js";import"./index-Wr_VU4vx.js";import"./index--0IHLSpo.js";import"./index-G7mYvFlh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS15uRtL.js";import"./addCustomCSSWithScoping-gm53ZH9E.js";import"./index-Bd8LmHtw.js";import"./information-Dxy_OYjg.js";import"./sys-enter-2-B9S9TtfQ.js";import"./alert-CW57s-T2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSRTNUO-.js";import"./delete-DnWD3Mq-.js";import"./settings-VKt-L-yH.js";import"./NoData-DDfv6RCL.js";import"./IllustratedMessage-Dr8guHqM.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CpUJ40_F.js";import"./index-BVZi_tVP.js";import"./index-_vy-bJhX.js";import"./slim-arrow-down-CulswK7d.js";import"./Input-B5Wpiidi.js";import"./ResponsivePopoverCommon.css-B4U_I0dH.js";import"./ValueStateMessage.css-cYz9FUF7.js";import"./Suggestions.css-Z6CWuri5.js";import"./ListBoxItemGroupTemplate-C1lRcpbG.js";import"./ComboBoxItemGroup-C-hUUmdm.js";import"./ListItemBaseTemplate-BmD2uZ0g.js";import"./Token-BQ7R6PHh.js";import"./ScrollEnablement-CjnCh3Bs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CACymtkK.js";import"./ToggleButton-u0UnHeJY.js";import"./SuggestionItem-C7KEv8FG.js";import"./index-CMbxs2W4.js";import"./Option-DOmelVgu.js";import"./index-B9H6XpWs.js";import"./SegmentedButton-3N38bHb8.js";import"./index-B8y-Fmz6.js";import"./Select-DtzGLi_j.js";import"./InvisibleMessage-CPZrrpNT.js";import"./slim-arrow-down-sBLB8zju.js";import"./index-DVQVneSw.js";import"./index-v7aOm5Jv.js";import"./index-C-Q_6JkP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjgLpVIw.js";import"./group-2-lPSSe0zs.js";import"./sort-descending-CS7wmhm4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-aC7Trz.js";import"./utils-96nz7lxB.js";import"./index-CAXoANqy.js";import"./index-JF3sM6PG.js";import"./index-Dw_SJKgF.js";import"./navigation-down-arrow-POZr2Ly1.js";import"./navigation-right-arrow-BStxgVlV.js";import"./navigation-right-arrow-BQknt-RQ.js";import"./useCurrentTheme-Dvt6ch19.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BRpZcEjH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-8d_BW4ml.js";import"./paper-plane-BwV277z1.js";import"./index-CUAVuKcw.js";import"./less-BLTcp359.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
