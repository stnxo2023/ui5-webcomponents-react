import{j as t}from"./iframe-vvFzJQsm.js";import{useMDXComponents as n}from"./index-mWjr9AFM.js";import{I as i,F as m}from"./CommandsAndQueries-8pSfE60h.js";import{M as p,C as s}from"./blocks-COsbTFiZ.js";import"./Tag-CSxd9Vy9.js";import"./index-CdSwAr1T.js";import"./copy-qs9aVbQg.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B3ECgz-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FWmQFiva.js";import"./index-DSMhm57i.js";import"./index-keBzjxCB.js";import"./Link-hAW6WURd.js";import"./index-CYjg-3sd.js";import"./index-bfJ02BDw.js";import"./index-BBX1dqjw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BmD8Hqdt.js";import"./addCustomCSSWithScoping-Px-H63QY.js";import"./index-Ck5nT1M9.js";import"./information-CWYm1ZbR.js";import"./sys-enter-2-kpgYGCQC.js";import"./alert-Ba0jfTcX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C9kK_LVq.js";import"./delete-D4XAzPaO.js";import"./settings-C8va5o-b.js";import"./NoData-5jtjQ5y7.js";import"./IllustratedMessage-B8VwOS63.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BPC0yP-u.js";import"./index-DRbu4jj1.js";import"./index-CLL1C2RL.js";import"./slim-arrow-down-D1045Dej.js";import"./Input-Bdz4QBIo.js";import"./ResponsivePopoverCommon.css-Baj0Epwl.js";import"./ValueStateMessage.css-4BAUMJYg.js";import"./Suggestions.css-3p3I60pl.js";import"./ListBoxItemGroupTemplate-BpiHCZsA.js";import"./ComboBoxItemGroup-BfSjrPkV.js";import"./ListItemBaseTemplate-B5P3HOKd.js";import"./Token-nR3AU3yg.js";import"./ScrollEnablement-DGKqDpbT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bq3jzA--.js";import"./ToggleButton-D2c9Ioes.js";import"./SuggestionItem-D6PBycsg.js";import"./index-p75UYelA.js";import"./Option-m73man2m.js";import"./index-CEWT0FVs.js";import"./SegmentedButton-BHh8HeGl.js";import"./index-C5N6WMqm.js";import"./Select-Cvi-Tl5M.js";import"./InvisibleMessage-DfdHEKSG.js";import"./slim-arrow-down-BxUM_kC3.js";import"./index-Dbxl2QgS.js";import"./index-DNtC8pK0.js";import"./index-DkgHrAaT.js";import"./index-HICqIhxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dvyr9bkH.js";import"./group-2-CTXNR9Fa.js";import"./sort-descending-D9vZzYoL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DNIS43S0.js";import"./utils-DnHyYccE.js";import"./index-naNPIt8g.js";import"./index-lJc2O7eM.js";import"./index-CchiWT1q.js";import"./navigation-down-arrow-B3V1489R.js";import"./navigation-right-arrow-Dach_1y0.js";import"./navigation-right-arrow-BeI9ctVu.js";import"./useCurrentTheme-DNXu84CQ.js";import"./index-lCZJ1S5W.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BvMNZh4_.js";import"./paper-plane-wgrrkunQ.js";import"./index-DGYtHBaB.js";import"./less-D8pAxZdo.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
