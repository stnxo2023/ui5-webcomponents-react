import{j as t}from"./iframe-D4Wcvdi9.js";import{useMDXComponents as n}from"./index-CyoSS2tn.js";import{I as i,F as m}from"./CommandsAndQueries-CHCF8nk5.js";import{M as p,C as s}from"./blocks-BZVDlLxv.js";import"./Tag-C8CPshPM.js";import"./index-C0Cp4coA.js";import"./copy-ByuSrISy.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DvH8YaNx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfU-6WHW.js";import"./index-DRGYhnMd.js";import"./index-BoPvUO7L.js";import"./Link-DRjrHvv7.js";import"./index-C0aU4sgS.js";import"./index-DyEesLqq.js";import"./index-B5YCmd_L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_EKP5sQ.js";import"./addCustomCSSWithScoping-B3blWPk3.js";import"./index-iYqBFHCz.js";import"./information-BV6B4i17.js";import"./sys-enter-2-Be3rvkTR.js";import"./alert-Bj2TJcB4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bg9NkTF8.js";import"./delete-Dan4xo-W.js";import"./settings-Dc0Ay2Ol.js";import"./NoData-CPHXEiea.js";import"./IllustratedMessage-CqSfiYLz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Cc_7hoVU.js";import"./index-hA8G-1F0.js";import"./index-umARLA2o.js";import"./slim-arrow-down-BQ4prS5H.js";import"./Input-Dw523AWA.js";import"./ResponsivePopoverCommon.css-DXXW23Pq.js";import"./ValueStateMessage.css-CGX3TujJ.js";import"./Suggestions.css-yWvjMCYt.js";import"./ListBoxItemGroupTemplate-BXg8ZZhL.js";import"./ComboBoxItemGroup-BWf21BRm.js";import"./ListItemBaseTemplate-BtxWLyBh.js";import"./Token-CJew2pIR.js";import"./ScrollEnablement-B_7Hn9ne.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7i9H2_f.js";import"./ToggleButton-tkY9KnFv.js";import"./SuggestionItem-C-IyQ9GM.js";import"./index-CalwvC2l.js";import"./Option-o--nSFBp.js";import"./index-B4qdjTS3.js";import"./SegmentedButton-Dlsij53P.js";import"./index-Bs-Aw581.js";import"./Select-G5EwzUhf.js";import"./InvisibleMessage-z6pIlI85.js";import"./slim-arrow-down-BwasBD_7.js";import"./index-CbPN-lRT.js";import"./index-DZDIO8XF.js";import"./index-BNR4hbu3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-AltxkYtY.js";import"./group-2-DCKEVdUW.js";import"./sort-descending-D6BynqyS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C_DH5grj.js";import"./utils-BSZp2_tG.js";import"./index-Ddv6G0qJ.js";import"./index-MsmJ52zV.js";import"./index-BLw-L2xS.js";import"./navigation-down-arrow-CiJ3nX35.js";import"./navigation-right-arrow-CZ9bddNc.js";import"./navigation-right-arrow-B9tYbly4.js";import"./useCurrentTheme-DZ5Dd1Oz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_IB42fC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-pRkoq2nx.js";import"./paper-plane-C5O9xOBt.js";import"./index-D9uEVirk.js";import"./less-Bgb69ICn.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
