import{j as t}from"./iframe-D7LtZGbE.js";import{useMDXComponents as n}from"./index-DPe-hK9n.js";import{I as i,F as m}from"./CommandsAndQueries-16gk4cWC.js";import{M as p,C as s}from"./blocks-pr2PodND.js";import"./Tag-CAGvJLHq.js";import"./index-8IYrQOsB.js";import"./copy-irE93QLw.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B9VjvtYg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTJj7zal.js";import"./index-CQrPSC4r.js";import"./index-DCDoujQt.js";import"./Link-DR-Yc_uT.js";import"./index-D9f7QWgZ.js";import"./index-7y0cv8s8.js";import"./index-B5kVVFk8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0rw92sk.js";import"./addCustomCSSWithScoping-Q6oWMzUs.js";import"./index-nlmJusRV.js";import"./information-DGR9jLKW.js";import"./sys-enter-2-pukk9ibo.js";import"./alert-ltuZ9R-x.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C2wuCET-.js";import"./delete-BsnXpo15.js";import"./settings-18EA03mw.js";import"./NoData-DD1I2RW2.js";import"./IllustratedMessage-GNJtNDK1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DbgaenG_.js";import"./index-Cvm9n84J.js";import"./index-CONzwepJ.js";import"./slim-arrow-down-CSg5EB5A.js";import"./Input-smzufGTw.js";import"./ResponsivePopoverCommon.css-BuYzr302.js";import"./ValueStateMessage.css-B17FpIm5.js";import"./Suggestions.css-D7t7e06T.js";import"./ListBoxItemGroupTemplate-D6TYIJcU.js";import"./ComboBoxItemGroup-DVpFxRma.js";import"./ListItemBaseTemplate-DPI4cuqZ.js";import"./Token-DsqCbMj8.js";import"./ScrollEnablement-BHoJsn2l.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJhw0qF_.js";import"./ToggleButton-c8Z5hSFG.js";import"./SuggestionItem-Ccdg184n.js";import"./index-CyQ4JYW2.js";import"./Option-DijjA4Vk.js";import"./index-DtP90_Pc.js";import"./SegmentedButton-6lreoM-F.js";import"./index-DvCsGyO6.js";import"./Select-BbkKcK4f.js";import"./InvisibleMessage-Cv3DnnE8.js";import"./slim-arrow-down-CRqqmTAd.js";import"./index-DWNwOieW.js";import"./index-Ce0fYx_h.js";import"./index-DOsdkp8m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcZJAP96.js";import"./group-2-MIHTxi8_.js";import"./sort-descending-BXMcQwtn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1VTd4aoY.js";import"./utils-aOFiSUxD.js";import"./index-Q9bXyf1m.js";import"./index-BpcjvSLQ.js";import"./index-B66V5vGh.js";import"./navigation-down-arrow-CJtYN5Co.js";import"./navigation-right-arrow-IFUe67pQ.js";import"./navigation-right-arrow-LlpQSEVq.js";import"./useCurrentTheme-D1sCc5b1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DZFiI2KH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BMbyDpGC.js";import"./paper-plane-C_ZVdgGb.js";import"./index-CdvQl7dB.js";import"./less-DCpc4-xW.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
