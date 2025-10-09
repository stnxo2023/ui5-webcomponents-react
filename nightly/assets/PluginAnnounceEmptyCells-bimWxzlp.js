import{j as t}from"./iframe-DeMwMmGx.js";import{useMDXComponents as n}from"./index-CWwj9Mnl.js";import{I as i,F as m}from"./CommandsAndQueries-BBLmRDsb.js";import{M as p,C as s}from"./blocks-8D0p5thu.js";import"./Tag-CJlss1uo.js";import"./index-fzrObdgv.js";import"./copy-BgdiHhBm.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CWwR-y9u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DaGO4DII.js";import"./index-CvQAJVIm.js";import"./index-CqRETC9D.js";import"./Link-DuK3KTb6.js";import"./index-x-nhhmJ1.js";import"./index-QSmrzR-p.js";import"./index-C3DV1EGu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ0_IZyX.js";import"./addCustomCSSWithScoping-DmQSYZoL.js";import"./index-DwA6oYWp.js";import"./information-IgIWD04z.js";import"./sys-enter-2-B6dBkbbN.js";import"./alert-DXbxKJCI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BgVD4qXY.js";import"./delete-mq69ob-m.js";import"./settings-DsHd3P0n.js";import"./NoData--TQXjPxp.js";import"./IllustratedMessage-q7ABRVJa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DN8h-kj9.js";import"./index-Bqo4E53G.js";import"./index-Ce9C4-0M.js";import"./slim-arrow-down-CB1uueTx.js";import"./Input-DRHd5nbL.js";import"./ResponsivePopoverCommon.css-Nq-6b_ms.js";import"./ValueStateMessage.css-Tpbst_AR.js";import"./Suggestions.css-BcZrXAjC.js";import"./ListBoxItemGroupTemplate-DWp2fAWp.js";import"./ComboBoxItemGroup-B99x6mYV.js";import"./ListItemBaseTemplate-BE7nd5FZ.js";import"./Token-fAbSmEQt.js";import"./ScrollEnablement-BDJVsvmw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-eMNK3qV1.js";import"./ToggleButton-DVIEs1wL.js";import"./SuggestionItem-C9Fa1J1D.js";import"./index-HyDyLjGn.js";import"./Option-C1H5Qp9e.js";import"./index-EGOdPRwf.js";import"./SegmentedButton-BLiDf_5M.js";import"./index-Cjfludll.js";import"./Select-BWPut0uV.js";import"./InvisibleMessage-RemLUX1t.js";import"./slim-arrow-down-Cavo_L7e.js";import"./index-BwxK2g44.js";import"./index-B0LvNv03.js";import"./index-5d-X9JJE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4tw820b.js";import"./group-2-DLLjtbHP.js";import"./sort-descending-DFffTKv8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hbWTH7_c.js";import"./utils-mFF1dh2e.js";import"./index-DfGmmuHK.js";import"./index-CEQRcaEk.js";import"./index-BPZ4GFnq.js";import"./navigation-down-arrow-BQ77KqPN.js";import"./navigation-right-arrow-BckoNBw3.js";import"./navigation-right-arrow-F7WHq2_o.js";import"./useCurrentTheme-BnPNa_8f.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BXvWjhnt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dy9MOOru.js";import"./paper-plane-4ZqR7r5W.js";import"./index-BFzoLWvR.js";import"./less-DFrGBfi9.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
