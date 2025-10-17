import{j as t}from"./iframe-28qsVqoa.js";import{useMDXComponents as n}from"./index-BFNvmwXu.js";import{I as i,F as m}from"./CommandsAndQueries-BfKaGYgk.js";import{M as p,C as s}from"./blocks-BNVDqSKu.js";import"./Tag-CLPhNAjj.js";import"./index-SsxmriuV.js";import"./copy-D8k23l_a.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Cg1NtmUY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BaQxmIN-.js";import"./index-QZ0q645F.js";import"./index-CWduGffo.js";import"./Link-DXcAF61b.js";import"./index-BSTD78ro.js";import"./index-Ca0DqgDv.js";import"./index-DL1oyV4a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDZLmGFA.js";import"./addCustomCSSWithScoping-BQde53eT.js";import"./index-CLPTUIfm.js";import"./information-DHvzqwV5.js";import"./sys-enter-2-BKUUSCT4.js";import"./alert-D4ecQurj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-COPcPnn5.js";import"./delete-D6n8l8UK.js";import"./settings-KfG2DgI0.js";import"./NoData-BHcK-Aul.js";import"./IllustratedMessage-CGHyK5ha.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BFsCnHXw.js";import"./index-CK3Laxke.js";import"./index-CxlikhWp.js";import"./slim-arrow-down-2lG3bKMG.js";import"./Input-CrBqW3Ot.js";import"./ResponsivePopoverCommon.css-DsOR_HfQ.js";import"./ValueStateMessage.css-Dvyiq9XB.js";import"./Suggestions.css-CdBr9Iyq.js";import"./ListBoxItemGroupTemplate-D6s9h6mp.js";import"./ComboBoxItemGroup-BSE1TSV-.js";import"./ListItemBaseTemplate-DQ-a9maQ.js";import"./Token-Bg0__rMF.js";import"./ScrollEnablement-D20yGFFj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BH9JzmU2.js";import"./ToggleButton-DnstKIPi.js";import"./SuggestionItem-BYGj_peP.js";import"./index-C5RB-L2O.js";import"./Option-CBaHN4ua.js";import"./index-DTixF4LF.js";import"./SegmentedButton-BE8yfTm6.js";import"./index-CQtjld3i.js";import"./Select-CdXPeKkl.js";import"./InvisibleMessage-c9pOv6Ax.js";import"./slim-arrow-down-nj_KPop2.js";import"./index-Ak3FL7pI.js";import"./index-D9_Z31ZG.js";import"./index-Bq1PEsv_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Ch2Rtr4k.js";import"./group-2-Ca0UP8Bj.js";import"./sort-descending-D3OEeGWP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CD3TL1kj.js";import"./utils-DHg3ikqn.js";import"./index-CC-MGg2L.js";import"./index-CjppD4GJ.js";import"./index-BzTqkFjE.js";import"./navigation-down-arrow-DwBdfM0k.js";import"./navigation-right-arrow-CasD3Mbg.js";import"./navigation-right-arrow-FCQDrhAi.js";import"./useCurrentTheme-67g0YI4J.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFx0BUYp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B2mIAyDi.js";import"./paper-plane-CpCfXY5u.js";import"./index-CGLvNCn3.js";import"./less-4GZTBVpK.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
