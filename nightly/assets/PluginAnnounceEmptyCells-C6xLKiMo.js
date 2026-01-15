import{j as t}from"./iframe-DCh7S_7o.js";import{useMDXComponents as n}from"./index-CQ2Rgf0f.js";import{I as i,F as m}from"./CommandsAndQueries-BHuSnwTn.js";import{M as p,C as s}from"./blocks-DmZmqlp_.js";import"./Tag-CZuGcFNN.js";import"./index-C5sgOYh1.js";import"./copy-BrUTFvSK.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dyg4late.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvoAW6NG.js";import"./index-BwuMWpwU.js";import"./index-BzGBt6gL.js";import"./Link-DOaKYpM4.js";import"./index-CqXebPST.js";import"./index-CKcNqeBZ.js";import"./index-Gt-7HKkD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDzt8G5a.js";import"./addCustomCSSWithScoping-DaHSAyiF.js";import"./index-gCdJvzAZ.js";import"./information-FYwlptxJ.js";import"./sys-enter-2-CNa4r-Sw.js";import"./alert-Bj_hkuex.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUMFQ1pn.js";import"./delete-D5M82eeI.js";import"./settings-D-G-hMFI.js";import"./NoData-Cks1g_4P.js";import"./IllustratedMessage-c9qO6qKJ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BhckPa9Q.js";import"./index-5XMRhuzg.js";import"./index-BAgLClg3.js";import"./slim-arrow-down-D91T-40j.js";import"./Input-LTgloMqk.js";import"./ResponsivePopoverCommon.css-YvTmosB3.js";import"./ValueStateMessage.css-_40RyXNK.js";import"./Suggestions.css-CEeo2on1.js";import"./ListBoxItemGroupTemplate-8cMH_8Hg.js";import"./ComboBoxItemGroup-wv4ICvd4.js";import"./ListItemBaseTemplate-B1GyPNZx.js";import"./Token-CxvB1hc0.js";import"./ScrollEnablement-CHt3xTrM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D-7OIxnD.js";import"./ToggleButton-CWn-VFiI.js";import"./SuggestionItem-1WqpyGaM.js";import"./index-DQ_ZwByO.js";import"./Option-Bd427Odz.js";import"./index-CYDuPw7n.js";import"./SegmentedButton-MFLETAjB.js";import"./index-CG2oTHho.js";import"./Select-DgXiFLA1.js";import"./InvisibleMessage-CO-uxLEE.js";import"./slim-arrow-down-N5l622ic.js";import"./index-FRjNpllp.js";import"./index-CkoxQ7YT.js";import"./index-BaU_AFbL.js";import"./index-D-grjYU9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CuMi9SwU.js";import"./group-2-JRco5MZe.js";import"./sort-descending-B05TUdbs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_tQWfdMG.js";import"./utils-BHbbXcFh.js";import"./index-BF5blqws.js";import"./index-CTOIsb5D.js";import"./index-JhMtSdTx.js";import"./navigation-down-arrow-DlTIQ6fX.js";import"./navigation-right-arrow-Cca6wH2s.js";import"./navigation-right-arrow-VnZvrXIO.js";import"./useCurrentTheme-Dna0LUjC.js";import"./index-DnXcPtid.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0YNVX7D.js";import"./paper-plane-DoMiy80N.js";import"./index-NjhBYZF2.js";import"./less-DQi8Ps2m.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
