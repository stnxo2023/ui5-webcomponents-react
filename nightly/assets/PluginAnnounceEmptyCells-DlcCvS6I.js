import{j as t}from"./iframe-DqhX_Hdp.js";import{useMDXComponents as n}from"./index-B-LlaBAd.js";import{I as i,F as m}from"./CommandsAndQueries-Ctn2WqFW.js";import{M as p,C as s}from"./blocks-BTKPnx40.js";import"./Tag-t-9sbcO3.js";import"./index-eBm8t70p.js";import"./copy-BkBAOPVd.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DrWG1jWH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BeJ9wz7o.js";import"./index-DCixdKQP.js";import"./index-BJOWTBa5.js";import"./Link-KAeBCRn4.js";import"./index-CZfYA9Jl.js";import"./index-D2G6pSj4.js";import"./index-CqRqJjYx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Duf1worp.js";import"./addCustomCSSWithScoping-BTNZ7_2D.js";import"./index-CuoIUeLC.js";import"./information-DBUGylnd.js";import"./sys-enter-2-CQyTlO0m.js";import"./alert-OnHFbpl_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BpMc5M9M.js";import"./delete-C7JHot2N.js";import"./settings-SKzIyHSS.js";import"./NoData-CX7evjUT.js";import"./IllustratedMessage-CqLVEv_t.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DAqM8TO4.js";import"./index-BzlXpFoZ.js";import"./index-BtdQUBMJ.js";import"./slim-arrow-down-B4S7UH3-.js";import"./Input-Bip1JtLT.js";import"./ResponsivePopoverCommon.css-B62B-Zvc.js";import"./ValueStateMessage.css-D02law6b.js";import"./Suggestions.css-CSoreWx6.js";import"./ListBoxItemGroupTemplate-DHoLoT8x.js";import"./ComboBoxItemGroup-C5WDhKir.js";import"./ListItemBaseTemplate-OClf921P.js";import"./Token-BLU09JyB.js";import"./ScrollEnablement-B9Jmoik0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7vVDnmd.js";import"./ToggleButton-D53MHrW_.js";import"./SuggestionItem-BeURI2s8.js";import"./index-C9P_P9K4.js";import"./Option-CHApBvDG.js";import"./index-DAJXbvOW.js";import"./SegmentedButton-DeqHvB3C.js";import"./index-BCK2EVsS.js";import"./Select-Be7QzEWT.js";import"./InvisibleMessage-Bdbv9Ef9.js";import"./slim-arrow-down-CarTb4uE.js";import"./index-BIu9-7Rg.js";import"./index-BCh3t8Up.js";import"./index-DxAT9tTr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CtE2b9bq.js";import"./group-2-eAJtoAsZ.js";import"./sort-descending-Cx0p3NMy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DDEoRTFB.js";import"./utils-BSyH8VJa.js";import"./index-BkR8Kcfn.js";import"./index-CfGNWRnm.js";import"./index-DNTS6-c1.js";import"./navigation-down-arrow-ahG-gz6o.js";import"./navigation-right-arrow-A7nXgQLK.js";import"./navigation-right-arrow-C6E29xwI.js";import"./useCurrentTheme-gRxjNOgY.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D-Tz76DO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DHOA1SXn.js";import"./paper-plane-Bzfws6My.js";import"./index-DrsUiW4k.js";import"./less-CCPik5WH.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
