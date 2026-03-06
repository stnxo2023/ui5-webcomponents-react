import{j as t}from"./iframe-E6MBpCAt.js";import{useMDXComponents as i}from"./index-BRlgPkCG.js";import{I as n}from"./CommandsAndQueries-8ny61uxe.js";import{M as m,C as p}from"./blocks-WvceCUw-.js";import"./Tag-QOlCM1ZS.js";import"./index-BJtwwTA3.js";import"./copy-fO140460.js";import{F as s}from"./Footer-BLsFxTJ-.js";import"./PageNotFound-yO0YjSZG.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-3WGY_Sv8.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BKpa2-tj.js";import"./index-CzOa4uz9.js";import"./index-D8EadMTD.js";import"./index-C4VaG2ve.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AugRixR5.js";import"./addCustomCSSWithScoping-B5scap8C.js";import"./index-D9THgfPW.js";import"./index-Bbo3k75A.js";import"./index-Cae4RJ4g.js";import"./information-CRaf149E.js";import"./sys-enter-2-61rHxTWm.js";import"./alert-CCfxXDIv.js";import"./index-B2yJC31G.js";import"./Illustrations-AQfBdOwC.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDiz7W4Y.js";import"./delete-DyWtQ8v9.js";import"./settings-Cbn3T6Mx.js";import"./NoData-CtZtXwou.js";import"./NoFilterResults-B6R10kLg.js";import"./index-DsV7MKC8.js";import"./IllustratedMessage-Cs-cJ461.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-xfv3WGPy.js";import"./Input-CqRxWs6T.js";import"./ResponsivePopoverCommon.css-DTaErEQ_.js";import"./ValueStateMessage.css-BqIVd8me.js";import"./Suggestions.css-CcvXoNrX.js";import"./ListBoxItemGroupTemplate-ZWEg9Kwh.js";import"./ComboBoxItemGroup-BRsUx9Vu.js";import"./ListItemBaseTemplate-B16pPr0h.js";import"./Token-CtjOVKkz.js";import"./ScrollEnablement-Be3TO5d_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CLkVuZpQ.js";import"./ToggleButton-pP-fjxvO.js";import"./multiselect-all-MRD8MY9n.js";import"./SuggestionItem-D_jhouUB.js";import"./index-eoNwP9LZ.js";import"./Option-YcQmhF0Q.js";import"./index-DtG_JeRQ.js";import"./SegmentedButton-BJA9KoKC.js";import"./index-PyVys7-g.js";import"./Select-Dfg1e6B2.js";import"./InvisibleMessage-DjQ_P1pD.js";import"./index-u_TZ6o1u.js";import"./index-BcHhd9JA.js";import"./index-Hz-7wqYf.js";import"./index-DEWKs-pp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CE3S0Fdh.js";import"./group-2-Z21NISb5.js";import"./sort-descending-DGLIXonJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcrVqvMv.js";import"./utils-B83oV3Es.js";import"./index-gdkWggA6.js";import"./index-DFduNpb6.js";import"./index-CimvstOb.js";import"./navigation-down-arrow-BgwaJox2.js";import"./navigation-right-arrow-CNlAllMr.js";import"./navigation-right-arrow-6LbFyY1t.js";import"./useCurrentTheme-DnYQl_RE.js";import"./index-Cx4xZGwM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DIRCSoA5.js";import"./paper-plane-B1UzQNaq.js";import"./index-CFs-Fzgi.js";import"./less-BXmJ-FBk.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
