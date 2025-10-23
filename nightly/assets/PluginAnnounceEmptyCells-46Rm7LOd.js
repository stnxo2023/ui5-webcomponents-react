import{j as t}from"./iframe-DJ3L9Q7k.js";import{useMDXComponents as n}from"./index-CgKASuks.js";import{I as i,F as m}from"./CommandsAndQueries-J0DynbNC.js";import{M as p,C as s}from"./blocks-CtbNLxKJ.js";import"./Tag-dHoy1aOg.js";import"./index-Drb2TrHE.js";import"./copy-dl-GArcT.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-XmI_OBRf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiXweYzS.js";import"./index-4H2gG8m_.js";import"./index-DQGcZUo3.js";import"./Link-CI3a-uZg.js";import"./index-DDFmE4EA.js";import"./index-BTen11gj.js";import"./index-C_wfJoh6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BifEEb3N.js";import"./addCustomCSSWithScoping-BamJJJtZ.js";import"./index-DJdHB7_b.js";import"./information-1qu8opp4.js";import"./sys-enter-2-Cu2hBGrK.js";import"./alert-Bssjvu3J.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZogVh3-n.js";import"./delete-DJWhYD8C.js";import"./settings-NgS7zej6.js";import"./NoData-CmcwKAsS.js";import"./IllustratedMessage-BquGAG1y.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-6m67jwsT.js";import"./index-BMmEn-9e.js";import"./index-DHWps5pX.js";import"./slim-arrow-down-CD5MJjlC.js";import"./Input-BTxUiPoF.js";import"./ResponsivePopoverCommon.css-DAHQOPQC.js";import"./ValueStateMessage.css-C1vUk4m-.js";import"./Suggestions.css-AC0gY3Q2.js";import"./ListBoxItemGroupTemplate-BKr03FZt.js";import"./ComboBoxItemGroup-DmnfwRXO.js";import"./ListItemBaseTemplate-C7qYhT1t.js";import"./Token-Bh6SaF3b.js";import"./ScrollEnablement-BgeY4u8Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMcqHDTj.js";import"./ToggleButton-Bq8xm8nS.js";import"./SuggestionItem-CmXkyaku.js";import"./index-DuEKvhcf.js";import"./Option-asFhuENp.js";import"./index-BVPkbHHt.js";import"./SegmentedButton-DmsFvxo8.js";import"./index-B_gzg89D.js";import"./Select-Cpy_GAyA.js";import"./InvisibleMessage-DIaqYHhI.js";import"./slim-arrow-down-BphH8SC0.js";import"./index-DvC78ri4.js";import"./index-QxoMqp8P.js";import"./index-BElugJkH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BBj9Wq0r.js";import"./group-2-Bclkbxf6.js";import"./sort-descending-Qi2aeWer.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dx8gVwDW.js";import"./utils-AbgTTf_S.js";import"./index-BftjTv9E.js";import"./index-kkvWmntR.js";import"./index-f5CXzuCL.js";import"./navigation-down-arrow-Cn34Yi42.js";import"./navigation-right-arrow-BdYlSoky.js";import"./navigation-right-arrow-ZjAJAoPG.js";import"./useCurrentTheme-Dv8It12u.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gUd0jpcr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-g4vzgofK.js";import"./paper-plane-DR2uxcqx.js";import"./index-BTrtIEWf.js";import"./less-DMzNG9tV.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
