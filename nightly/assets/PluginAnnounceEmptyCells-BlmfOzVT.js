import{j as t}from"./iframe-fnu3Vo41.js";import{useMDXComponents as n}from"./index-BSrpAODL.js";import{I as i,F as m}from"./CommandsAndQueries-Bopzu-n8.js";import{M as p,C as s}from"./blocks-BS5BROTL.js";import"./Tag-BiBlBJWE.js";import"./index-BbmVly28.js";import"./copy-Db06aovL.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-cEuR5nNv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SCFjt_Ga.js";import"./index-CJk9IgGL.js";import"./index-rPkavUv0.js";import"./Link-BLTuinuO.js";import"./index-BUdZGDL2.js";import"./index-C8EzOXR3.js";import"./index-DahYWRMR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2MON8lG.js";import"./addCustomCSSWithScoping-DzZplljN.js";import"./index-B7d1u9D1.js";import"./information-C4CUHJ6u.js";import"./sys-enter-2-Bq1R0WAk.js";import"./alert-xdJdEaU1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cg3qW77l.js";import"./delete-DmiOTRnw.js";import"./settings-zDmG-3im.js";import"./NoData-nQLO9EZ8.js";import"./IllustratedMessage-BXzbNCL1.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-DBeKPlkH.js";import"./index-Brwr5FUa.js";import"./index-BDJpTTku.js";import"./slim-arrow-down-XRKMzLPf.js";import"./Input-Detc7Ii6.js";import"./ResponsivePopoverCommon.css-CxPrgmxN.js";import"./ValueStateMessage.css-CQ4OVJ9G.js";import"./Suggestions.css-vM9OM1GI.js";import"./ListBoxItemGroupTemplate-BYeB1Cl_.js";import"./ComboBoxItemGroup-4jucO2i6.js";import"./ListItemBaseTemplate-FeG_oPAJ.js";import"./Token-DAQ1DS0x.js";import"./ScrollEnablement-WgQtsSmN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRTdZnQJ.js";import"./ToggleButton-57cIItv1.js";import"./SuggestionItem-C8mqfWho.js";import"./index-CX4U2Jek.js";import"./Option-DD3Zi9NK.js";import"./index-jyed2UIl.js";import"./SegmentedButton-gKY9F3pt.js";import"./index-BRftw348.js";import"./Select-lOtzZ3fx.js";import"./InvisibleMessage-Bg2OVWgo.js";import"./slim-arrow-down-DRNkvrF7.js";import"./index-D5Hq6_Re.js";import"./index-BhBUN7y5.js";import"./index-oA7Crhpd.js";import"./index-Cw1Aet_f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-h3NHKT.js";import"./group-2-DwY0Xc-S.js";import"./sort-descending-Bc55MwdY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bwnkn5xs.js";import"./utils-DYh0gtXT.js";import"./index-DYKo8bXl.js";import"./index-BPeyg5AZ.js";import"./index-BrR0l5NR.js";import"./navigation-down-arrow-B7W9-sHI.js";import"./navigation-right-arrow-D_oDOzWj.js";import"./navigation-right-arrow-B69jNS7a.js";import"./useCurrentTheme-BetgmMaZ.js";import"./index-q7ej9ehA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEjni14h.js";import"./paper-plane-DOa3jfws.js";import"./index-JCFhG4pE.js";import"./less-BaCzhisI.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
