import{j as t}from"./iframe-DT7hQ3AG.js";import{useMDXComponents as n}from"./index-DTdIoXIV.js";import{I as i,F as m}from"./CommandsAndQueries-yjo1_LDl.js";import{M as p,C as s}from"./blocks-JRrvULZW.js";import"./Tag-DiLaQDn-.js";import"./index-B-uTHhu7.js";import"./copy-BZt3PDtc.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DJf1Cndu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CddBOV7O.js";import"./index-C77H1xG_.js";import"./index-DnmZF6f8.js";import"./Link-G5lQtbW1.js";import"./index-DOozC4VO.js";import"./index-RcOcV3SW.js";import"./index-BT5-01iU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVNusK2J.js";import"./addCustomCSSWithScoping-BEpn4Gqh.js";import"./index-BRw-bjcq.js";import"./information-BTX-CwCK.js";import"./sys-enter-2-Ckqh2Zib.js";import"./alert-j2_xvgwV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQysclUq.js";import"./delete-CeyxsMhm.js";import"./settings-DNzL1VLp.js";import"./NoData-D55CCIT8.js";import"./IllustratedMessage-DdOGU8iu.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DEWd1NOO.js";import"./index-Cvz-A2Iy.js";import"./index-CMxGkooZ.js";import"./slim-arrow-down-D50am5_P.js";import"./Input-CiFaXTlp.js";import"./ResponsivePopoverCommon.css-K8_QNK7m.js";import"./ValueStateMessage.css-C74mOLeC.js";import"./Suggestions.css-Cd_sUhjR.js";import"./ListBoxItemGroupTemplate-MrpowO6L.js";import"./ComboBoxItemGroup-JHT7eKkU.js";import"./ListItemBaseTemplate-cYuiWrew.js";import"./Token-74hpwmue.js";import"./ScrollEnablement-C3Wt9Cue.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUKcPDwc.js";import"./ToggleButton-YrPJ68bM.js";import"./SuggestionItem-CihSCUQE.js";import"./index-Bq6tT57Z.js";import"./Option-Bhgcb91O.js";import"./index-CQXfWENp.js";import"./SegmentedButton-wIlHxxU5.js";import"./index-Bah3sHAa.js";import"./Select-BAJF9MUA.js";import"./InvisibleMessage-D4QZC_oh.js";import"./slim-arrow-down-Ddzx8t1A.js";import"./index-B9SneDxK.js";import"./index-CjyRf1Rx.js";import"./index-DZrXzplx.js";import"./index-BJs3_1HF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B45Yx_uW.js";import"./group-2-xTMpIWf0.js";import"./sort-descending-o9PDLWx6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUBCEi1k.js";import"./utils-MrKqThPe.js";import"./index-BO3xCydK.js";import"./index-BLjdJn29.js";import"./index-BGk70aYe.js";import"./navigation-down-arrow-DJEikV3a.js";import"./navigation-right-arrow-BNlj3PDZ.js";import"./navigation-right-arrow-C-qFNytF.js";import"./useCurrentTheme-DR--wRSh.js";import"./index-D1b27DJe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BIZQiftC.js";import"./paper-plane-GTcq8Dwh.js";import"./index-8AKQM2r8.js";import"./less-BZfAkQR5.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
