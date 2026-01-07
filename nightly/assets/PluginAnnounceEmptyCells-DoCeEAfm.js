import{j as t}from"./iframe-Bx5nPEOl.js";import{useMDXComponents as n}from"./index-xw1HgrxR.js";import{I as i,F as m}from"./CommandsAndQueries-DQbk5l2-.js";import{M as p,C as s}from"./blocks-BnfvreJd.js";import"./Tag-Czmfabca.js";import"./index-DySSVXhZ.js";import"./copy-CNcXjyuB.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CrixVdQ8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJ7q1nh3.js";import"./index-CHjTsZ6I.js";import"./index-DkrrTKjv.js";import"./Link-kOQVQryb.js";import"./index-DAgUYXjE.js";import"./index-EX-yWEKJ.js";import"./index-Bwj8Rahv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hIxCZ-4.js";import"./addCustomCSSWithScoping-BnQjkpis.js";import"./index-D030oFb6.js";import"./information-C_BRWXUj.js";import"./sys-enter-2-lnnKHtcu.js";import"./alert-CZSvHkOp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BwNoBN7k.js";import"./delete-DojygiWC.js";import"./settings-CdO75LQa.js";import"./NoData-BxLSGnmz.js";import"./IllustratedMessage-CznMqB69.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BIAQtnD-.js";import"./index-DV1-UqSW.js";import"./index-CpsQPo3e.js";import"./slim-arrow-down-eJKhvhkE.js";import"./Input-CxXLCf6q.js";import"./ResponsivePopoverCommon.css-CalmLiVM.js";import"./ValueStateMessage.css-BZ1EUbwN.js";import"./Suggestions.css-DQV6aIGz.js";import"./ListBoxItemGroupTemplate-VNyv00pZ.js";import"./ComboBoxItemGroup-jUyYtSAM.js";import"./ListItemBaseTemplate-Dykvp_EK.js";import"./Token-DhwxhKpj.js";import"./ScrollEnablement-DNpNAWna.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zfIyxVpK.js";import"./ToggleButton-CQ5gk1wa.js";import"./SuggestionItem-CcFTbcr2.js";import"./index-MISqvFi7.js";import"./Option-DPppUzFK.js";import"./index-BfR1hjK_.js";import"./SegmentedButton-3fKGQQxX.js";import"./index-C4WckVVh.js";import"./Select-C1QLPr_H.js";import"./InvisibleMessage-CQ0u2q5u.js";import"./slim-arrow-down-CAhFqhr1.js";import"./index-FDm07H3e.js";import"./index-djmxjVZM.js";import"./index-8AWyZMWh.js";import"./index-AroNelzF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cozu-6eK.js";import"./group-2-o5ZUKu4E.js";import"./sort-descending-BldoBMrB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6ekE9Pr.js";import"./utils-D64FTNul.js";import"./index-DBe8VqoY.js";import"./index-BK8Wq19O.js";import"./index-Cp2_alMF.js";import"./navigation-down-arrow-CRFET8c4.js";import"./navigation-right-arrow-BmtWA2-q.js";import"./navigation-right-arrow-JKoD_tiK.js";import"./useCurrentTheme-BTp0qmA6.js";import"./index-CiSPkYgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wht3LnSl.js";import"./paper-plane-C5y4Nddn.js";import"./index-DH3g5PUN.js";import"./less-BXKa_8RC.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
