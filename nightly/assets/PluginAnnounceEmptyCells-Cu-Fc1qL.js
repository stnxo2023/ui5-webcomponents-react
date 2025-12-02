import{j as t}from"./iframe-CojmUvbr.js";import{useMDXComponents as n}from"./index-yNE59oSe.js";import{I as i,F as m}from"./CommandsAndQueries-aZHAlwyo.js";import{M as p,C as s}from"./blocks-CCIsbg9K.js";import"./Tag-Dsf3IOJa.js";import"./index-Brr98IUO.js";import"./copy-BaosELJI.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CG_nlWId.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWXpW2Nz.js";import"./index-CJ7ufDVc.js";import"./index-YKIZAZmt.js";import"./Link-DrGCnOch.js";import"./index-DSq2zmmv.js";import"./index-n-K8h2zA.js";import"./index-BIRLYBEm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBX4KpMg.js";import"./addCustomCSSWithScoping-IwiFNes4.js";import"./index-CW7nJiyw.js";import"./information-BEykFvbu.js";import"./sys-enter-2-BjWZZR70.js";import"./alert-CeJt7tDB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CscadejP.js";import"./delete-BrCc2tej.js";import"./settings-rTgMGjKN.js";import"./NoData-3cxxI4xB.js";import"./IllustratedMessage-DbYC26wy.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-UIvAx6KX.js";import"./index-Ca07kfjm.js";import"./index-Wu8As2d7.js";import"./slim-arrow-down-CnEombk5.js";import"./Input-CMo9bLuk.js";import"./ResponsivePopoverCommon.css-DnVyVoGn.js";import"./ValueStateMessage.css-awQruozh.js";import"./Suggestions.css-CNoZckwt.js";import"./ListBoxItemGroupTemplate-B7epaTRM.js";import"./ComboBoxItemGroup-CcEHTpa7.js";import"./ListItemBaseTemplate-BhUR_jwE.js";import"./Token-BNQ0MNpG.js";import"./ScrollEnablement-CsFUE6Hy.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x9obTEZ-.js";import"./ToggleButton-B6FN-zj3.js";import"./SuggestionItem-BgJHRloZ.js";import"./index-CshUp08T.js";import"./Option-CcKhKS8d.js";import"./index-DNSi3hz_.js";import"./SegmentedButton-QKVFOy33.js";import"./index-Bw1q_xPl.js";import"./Select-DbE_8KmI.js";import"./InvisibleMessage-C9kaBW3M.js";import"./slim-arrow-down-CmTsJEng.js";import"./index-s2T_O_TR.js";import"./index-BnQtKf9Y.js";import"./index-fxNkC4ZC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BapWlnQS.js";import"./group-2-BCIyFqCc.js";import"./sort-descending-DCnBtPjC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BTW6f1H7.js";import"./utils-BOJTBdKc.js";import"./index-CGQmGuch.js";import"./index-Bf-N28hY.js";import"./index-k6h4lExd.js";import"./navigation-down-arrow-LIHAsR-b.js";import"./navigation-right-arrow-BaaRnnci.js";import"./navigation-right-arrow-Dej95qlj.js";import"./useCurrentTheme-iOMvhnFg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-9IGeFUbL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BjmSWWr0.js";import"./paper-plane-j8ePWbJq.js";import"./index-C9WiPxnz.js";import"./less-OV79TxhL.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
