import{j as t}from"./iframe-u8FS7fYy.js";import{useMDXComponents as n}from"./index-C5mdpSHf.js";import{I as i,F as m}from"./CommandsAndQueries-q_IHoPaq.js";import{M as p,C as s}from"./blocks-CA6IPYk4.js";import"./Tag-DslDE0Bb.js";import"./index-feIb_zWP.js";import"./copy-DnscT9w9.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-G0EhQtQ2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dm5-M5Tp.js";import"./index-BLjc-MlZ.js";import"./index-Dt8N5TZZ.js";import"./Link-B1qI_6K5.js";import"./index-B2lRXwRR.js";import"./index-Ck97t6iE.js";import"./index-Cr0S2U_P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VZfInv7D.js";import"./addCustomCSSWithScoping-Bi-KBOqo.js";import"./index-39vhHnbo.js";import"./information-eayia0M9.js";import"./sys-enter-2-Bq8G42J8.js";import"./alert-C2jJRi0I.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-IUrgbwed.js";import"./delete-Cy6nStvu.js";import"./settings-CsmDkRWR.js";import"./NoData-Dl4cDDvc.js";import"./IllustratedMessage-DJn7OKbx.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-WNq2o82Q.js";import"./index-B8Yw7-ed.js";import"./index-DoELuHg5.js";import"./slim-arrow-down-BzdglbBq.js";import"./Input-BzkAXBhe.js";import"./ResponsivePopoverCommon.css-B6vVrffQ.js";import"./ValueStateMessage.css-Dzp1zAdp.js";import"./Suggestions.css-CAMRCZc2.js";import"./ListBoxItemGroupTemplate-Do83mcvC.js";import"./ComboBoxItemGroup-DHIXSohN.js";import"./ListItemBaseTemplate-Bwno4fVU.js";import"./Token-3SQMJSyT.js";import"./ScrollEnablement-DD98dGgr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BMXLX1H8.js";import"./ToggleButton-C6hKc49t.js";import"./SuggestionItem-DkOZoD1a.js";import"./index-BU3s_1Ip.js";import"./Option-BhGVz_yi.js";import"./index-DdIT0IEq.js";import"./SegmentedButton-FB1pLwEh.js";import"./index-BUE39DSG.js";import"./Select-DGVfvIxr.js";import"./InvisibleMessage-DkTNwmO6.js";import"./slim-arrow-down-BbWvK7SD.js";import"./index-CnuUXHea.js";import"./index-C_nlngWN.js";import"./index-D_yNDnhr.js";import"./index-DXUHUv71.js";import"./IconDesign-DXd8PPVF.js";import"./filter-yxN8PX9Y.js";import"./group-2-DoGrMQPN.js";import"./sort-descending-C5L9Lo2Z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DprFiL_z.js";import"./utils-BPFvLxt3.js";import"./index-DFCmj0mv.js";import"./index-DyfLxNJ7.js";import"./index-C4EDa0au.js";import"./navigation-down-arrow-BuZsOLrp.js";import"./navigation-right-arrow-CGDJY1aB.js";import"./navigation-right-arrow-GAvN6s_t.js";import"./useCurrentTheme-GbCKdsaA.js";import"./index-C5a3zBKu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmVGl_xM.js";import"./paper-plane-C4HjhJCN.js";import"./index-BeDOg-Ts.js";import"./less-m02jLT-2.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
