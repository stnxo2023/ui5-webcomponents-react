import{j as t}from"./iframe-CRwp3Tpg.js";import{useMDXComponents as n}from"./index-COIro8D8.js";import{I as i,F as m}from"./CommandsAndQueries-BOt8E6ok.js";import{M as p,C as s}from"./blocks-C4HsTNIO.js";import"./Tag-tfloHdXZ.js";import"./index-B8mUtBGn.js";import"./copy-DIWKtK23.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BkiRgwtD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtgT2jRs.js";import"./index-B3NhI5Qb.js";import"./index-Cv51gsI_.js";import"./Link-Dtv1Hpbf.js";import"./index-DIEFvDQl.js";import"./index-DzYDiZvU.js";import"./index-DYA05DWY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0x12wWs.js";import"./addCustomCSSWithScoping-Dv4ZSX5E.js";import"./index-C0aL9woL.js";import"./information-MlnnkJju.js";import"./sys-enter-2-DNoGuffO.js";import"./alert-aDgjp5mZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BIKVWOiQ.js";import"./delete-BsiUWMyb.js";import"./settings-sxQzjKnN.js";import"./NoData-BdJ39RdV.js";import"./IllustratedMessage-D4izY5uv.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BQNjO2jS.js";import"./index-COdypGT7.js";import"./index-DbsdpZ0s.js";import"./slim-arrow-down-C-sQkdwh.js";import"./Input-CKqAaoJh.js";import"./ResponsivePopoverCommon.css-TNg_0n0_.js";import"./ValueStateMessage.css-CYdcHCck.js";import"./Suggestions.css-BAVf_4rH.js";import"./ListBoxItemGroupTemplate-CqtX5gL_.js";import"./ComboBoxItemGroup-XlcjepWp.js";import"./ListItemBaseTemplate-DNSZp8wv.js";import"./Token-CSx3lX-3.js";import"./ScrollEnablement-CzlDnCBe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CG69oYew.js";import"./ToggleButton-8cblrt3F.js";import"./SuggestionItem-XM4Pz9fl.js";import"./index-CRs2PjFa.js";import"./Option-y4L7YpM6.js";import"./index-DRJHyZv9.js";import"./SegmentedButton-CDx2wd85.js";import"./index-BfNpixh1.js";import"./Select-BYSDq3x_.js";import"./InvisibleMessage-BMQ2txcL.js";import"./slim-arrow-down-DDdekocZ.js";import"./index-DEay9TCB.js";import"./index-BMcRBVTx.js";import"./index-WpAbWfDk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DBC-rl-6.js";import"./group-2-D2J0_DJH.js";import"./sort-descending-DZsOcrOl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-xFdAYmE4.js";import"./utils-rzD3DZ3e.js";import"./index-Bmk_6Mqn.js";import"./index-BHqYfiWu.js";import"./index-C9fmCLaq.js";import"./navigation-down-arrow-DTNzqgNt.js";import"./navigation-right-arrow-DL5KfXIw.js";import"./navigation-right-arrow-CDwfvJNR.js";import"./useCurrentTheme-BsJOJC7B.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CbdzFybD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DAMtZyo0.js";import"./paper-plane-E8fm-GBo.js";import"./index-Dzeoy_HR.js";import"./less-xMOC9uh_.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
