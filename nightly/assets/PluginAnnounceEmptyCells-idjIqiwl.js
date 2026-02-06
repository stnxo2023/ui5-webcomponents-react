import{j as t}from"./iframe-DrnWJux_.js";import{useMDXComponents as n}from"./index-8FDMxm68.js";import{I as i,F as m}from"./CommandsAndQueries-CNfp17jg.js";import{M as p,C as s}from"./blocks-BFYkdnf5.js";import"./Tag-C0-SLfdZ.js";import"./index-e4jmEiJR.js";import"./copy-BxyqZoQq.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DgUCPkq2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW1Fzcqx.js";import"./index-Cjg1iz22.js";import"./index-IUrjl9ty.js";import"./Link-DZzQtWK9.js";import"./index-DVoKYJte.js";import"./index-BNqm2zkD.js";import"./index-CBWW3th1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDLiZVZl.js";import"./addCustomCSSWithScoping-CbplP-kx.js";import"./index-CvpE5smH.js";import"./information-Djf1EDVN.js";import"./sys-enter-2-BH66Bhis.js";import"./alert-DUpqB4cV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SPiIDSVL.js";import"./delete-5wIjYt_5.js";import"./settings-CAxNiiQH.js";import"./NoData-HSKDxZyT.js";import"./IllustratedMessage-DN8OF25b.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CyleH7Va.js";import"./index-xdLxPP_I.js";import"./index-Cx3nmWT2.js";import"./slim-arrow-down-DtR6poag.js";import"./Input-4ibVB00q.js";import"./ResponsivePopoverCommon.css-e_PJNQiz.js";import"./ValueStateMessage.css-CmtfF9l5.js";import"./Suggestions.css-CmamAcfO.js";import"./ListBoxItemGroupTemplate-8x1YZ5vn.js";import"./ComboBoxItemGroup-CIBhgpWG.js";import"./ListItemBaseTemplate-BtkgFioN.js";import"./Token-Zy1XachM.js";import"./ScrollEnablement-1d_YGRve.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-yRZvETLK.js";import"./ToggleButton-C23ah_yf.js";import"./SuggestionItem-CB5GR-P0.js";import"./index-wMa-vVtE.js";import"./Option-CqIki-Fh.js";import"./index--9-z_1Kd.js";import"./SegmentedButton-r0yGjI_-.js";import"./index-DDrFA_hE.js";import"./Select-BOTkrqM0.js";import"./InvisibleMessage-C0LEPWkX.js";import"./slim-arrow-down-CVB2vj5c.js";import"./index-M4vNGXYB.js";import"./index-D6NM4VIr.js";import"./index-DKmNv-fY.js";import"./index-ON4dRT-g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DFUoYrZj.js";import"./group-2-DE19W3Nx.js";import"./sort-descending-DI4YTnq7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmAbNejI.js";import"./utils-EOKqhIpz.js";import"./index-Bm4VLMrF.js";import"./index-BC5oddu4.js";import"./index-DdJ94PAJ.js";import"./navigation-down-arrow-CVq5S1h3.js";import"./navigation-right-arrow-C068DZ1b.js";import"./navigation-right-arrow-CvUKgEjh.js";import"./useCurrentTheme-Co2qp8hO.js";import"./index-C4phtI-B.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BIBkdk-r.js";import"./paper-plane-Dk1M1e69.js";import"./index-DQW6kDtJ.js";import"./less-4cQ9RhUf.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
