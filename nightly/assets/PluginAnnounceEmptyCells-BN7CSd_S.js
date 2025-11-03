import{j as t}from"./iframe-BAeEsjGg.js";import{useMDXComponents as n}from"./index-Bq0E1dsP.js";import{I as i,F as m}from"./CommandsAndQueries-BmSS4dsr.js";import{M as p,C as s}from"./blocks-BgvPFJNP.js";import"./Tag-C0AbLWiC.js";import"./index-CofNVADY.js";import"./copy-AboRjUVj.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CFI9VGkd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbgOEhgO.js";import"./index-CdyvC-L0.js";import"./index-D8OEyr8Q.js";import"./Link-C-dbgRnK.js";import"./index-B1MvTI4o.js";import"./index-Bh0rKKOG.js";import"./index-DTbJ3L--.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-j4KshgYu.js";import"./addCustomCSSWithScoping-dmB8rtW3.js";import"./index-BcBOqS22.js";import"./information-DWcYA3Ge.js";import"./sys-enter-2-CQUiiR68.js";import"./alert-DfrSfG2k.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C01vq_tG.js";import"./delete-B-vJcZEa.js";import"./settings-C9s2yLAD.js";import"./NoData-C_OT3nkl.js";import"./IllustratedMessage-Bw6CCqa1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CeOc3m_6.js";import"./index-BtfUZD9l.js";import"./index-bKb7cC61.js";import"./slim-arrow-down-plIUNiIv.js";import"./Input-BqTefG9q.js";import"./ResponsivePopoverCommon.css-CaExEbcN.js";import"./ValueStateMessage.css-j0uXhKgp.js";import"./Suggestions.css-LZu9AJzQ.js";import"./ListBoxItemGroupTemplate-CA08nrMV.js";import"./ComboBoxItemGroup-DSvJ8fHP.js";import"./ListItemBaseTemplate-PmrEhlyw.js";import"./Token-Dae4rL70.js";import"./ScrollEnablement-B_VGa692.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkifgMKf.js";import"./ToggleButton-7zmtTUNl.js";import"./SuggestionItem-DyFoeHZd.js";import"./index-CIveRvMm.js";import"./Option-BddoQSs-.js";import"./index-C7Cx90Bv.js";import"./SegmentedButton-DFR9vAuR.js";import"./index-BeVxZxme.js";import"./Select-D8r9sg-T.js";import"./InvisibleMessage-BamEjZig.js";import"./slim-arrow-down-DPB1_EKt.js";import"./index-BK8lvVbF.js";import"./index-COe7AG8n.js";import"./index-BEoChkv9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B3GX0NY1.js";import"./group-2-Ck2TlhgN.js";import"./sort-descending-Bcg2xsEH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DnyBfK-i.js";import"./utils-C1cOCLNW.js";import"./index-Co1haORi.js";import"./index-Bn4aUwEb.js";import"./index-CJ_qaT_q.js";import"./navigation-down-arrow-Ch-dz918.js";import"./navigation-right-arrow-nGujzQ0V.js";import"./navigation-right-arrow-DJO4C4Vi.js";import"./useCurrentTheme-CgyKYq3h.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BS5kb7Yk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CkDYu-F2.js";import"./paper-plane-DNrev12r.js";import"./index-qCY9xvvQ.js";import"./less-CUB-bYbC.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
