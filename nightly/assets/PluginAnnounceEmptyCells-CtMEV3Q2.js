import{j as t}from"./iframe-_aM0UtJ2.js";import{useMDXComponents as n}from"./index-BfzIu2dE.js";import{I as i,F as m}from"./CommandsAndQueries-DzKXmTWy.js";import{M as p,C as s}from"./blocks-l9d8PUx_.js";import"./Tag-BfFHPicD.js";import"./index-DK-65CGT.js";import"./copy-DFcekAfZ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CgldXt7D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4-JCcJ5.js";import"./index-D94cPjQU.js";import"./index-HG9KwvVi.js";import"./Link-DVTfY9Y-.js";import"./index-ChnKUkkG.js";import"./index-daYey1G6.js";import"./index-B2FptVvG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5ZlAJzQ.js";import"./addCustomCSSWithScoping-JIDtcj4a.js";import"./index-80py4d9m.js";import"./information-Bugjbsmi.js";import"./sys-enter-2-B3MGAVo9.js";import"./alert-CNC7DRI_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDin49Qt.js";import"./delete-qfJnygw7.js";import"./settings-4mK1hrn-.js";import"./NoData-8b23hioQ.js";import"./IllustratedMessage-BGHWa-aT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-d2xsz83Y.js";import"./index-BrzyWVSa.js";import"./index-B7RpqTLg.js";import"./slim-arrow-down-BRjLnbot.js";import"./Input-MazSOwes.js";import"./ResponsivePopoverCommon.css-C9u2x3-0.js";import"./ValueStateMessage.css-DszbwuLg.js";import"./Suggestions.css-qx180UMs.js";import"./ListBoxItemGroupTemplate-DuHSjG0t.js";import"./ComboBoxItemGroup-D0cmVbGL.js";import"./ListItemBaseTemplate-DFJr1Bva.js";import"./Token-C2yl10l2.js";import"./ScrollEnablement-Bhq2qTDI.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BU1IwfYt.js";import"./ToggleButton-DYX2agjM.js";import"./SuggestionItem-C_mbbanp.js";import"./index-DKAKDwua.js";import"./Option-NFGo4imz.js";import"./index-ozNHZ0R1.js";import"./SegmentedButton-BCvDohGJ.js";import"./index-Cf7GYcbF.js";import"./Select-C0UwiMyq.js";import"./InvisibleMessage-C6DL-Jud.js";import"./slim-arrow-down-cxFeYscI.js";import"./index-C_W6PJrr.js";import"./index-Cr_o_sGI.js";import"./index-4LhBYovK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNRItJq8.js";import"./group-2-BSuDu3BP.js";import"./sort-descending-CjYTHc_q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D0_4QMUt.js";import"./utils-RjvQRYKv.js";import"./index-BxkisXba.js";import"./index-Di6FiDqU.js";import"./index-D-tGJU1i.js";import"./navigation-down-arrow-CXVkGqrk.js";import"./navigation-right-arrow-OXPBdahQ.js";import"./navigation-right-arrow-CCBpu_jK.js";import"./useCurrentTheme-C1Tgc9SL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CtV42zsn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CaZ25Jpx.js";import"./paper-plane-II9HzJH8.js";import"./index-Drkmvmr5.js";import"./less-BOPdbN0q.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
