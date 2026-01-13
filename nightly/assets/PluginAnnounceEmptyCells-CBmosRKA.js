import{j as t}from"./iframe-BkU8WQpb.js";import{useMDXComponents as n}from"./index-BeG8GrN5.js";import{I as i,F as m}from"./CommandsAndQueries-DetvrItO.js";import{M as p,C as s}from"./blocks-CLMMfPPt.js";import"./Tag-Cih70sHI.js";import"./index-DnBqZpyB.js";import"./copy-B4HTDbaZ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BvLI3kX2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dj6CZlQQ.js";import"./index-f6jDEWAh.js";import"./index-eFI2U8Up.js";import"./Link-DLFy93gF.js";import"./index-D4xCyo8q.js";import"./index-DWR5LsZZ.js";import"./index-BysDONg4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Fp7idO2l.js";import"./addCustomCSSWithScoping-CehjyWVu.js";import"./index-DATmYB4_.js";import"./information-CjNccefj.js";import"./sys-enter-2-RLTSxo4s.js";import"./alert-DdBYY2qU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CsenYKF8.js";import"./delete-B_OD3K68.js";import"./settings-CJS1NR3M.js";import"./NoData-AjIR6FXV.js";import"./IllustratedMessage-DUpdSioN.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DmtWxoyx.js";import"./index-B_Lo1ajO.js";import"./index-CRA6hnYw.js";import"./slim-arrow-down-BTmhvktL.js";import"./Input-LLlRvrNn.js";import"./ResponsivePopoverCommon.css-NpFXxOXP.js";import"./ValueStateMessage.css-BdFRF0eK.js";import"./Suggestions.css-Dl4BPrxO.js";import"./ListBoxItemGroupTemplate-DEE5SIID.js";import"./ComboBoxItemGroup-BWN-cMPv.js";import"./ListItemBaseTemplate-B2kevfSs.js";import"./Token-BQND7Ztt.js";import"./ScrollEnablement-BpahqvCY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgczD3q6.js";import"./ToggleButton-CDkfCjtp.js";import"./SuggestionItem-CrbDQNDp.js";import"./index-BCLLjiA_.js";import"./Option-DModAxyu.js";import"./index-CXuec-HL.js";import"./SegmentedButton-DfLnf31k.js";import"./index-D4IOGR9a.js";import"./Select-D4yKPFL9.js";import"./InvisibleMessage-52jPagfA.js";import"./slim-arrow-down-CpyZ1Zfr.js";import"./index-B49HkTlG.js";import"./index-DHOtv1YS.js";import"./index-v2LmQFFt.js";import"./index-D2fRocR2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DhKFVNcX.js";import"./group-2-CYuJGq9D.js";import"./sort-descending-GfYRxa9q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BqWvECKK.js";import"./utils-CekyTbg1.js";import"./index-BJRBwXE4.js";import"./index-Fsnq8hnt.js";import"./index-lT6ku5Z4.js";import"./navigation-down-arrow-CfiNm6dT.js";import"./navigation-right-arrow-UY7xGVP3.js";import"./navigation-right-arrow-DgO3Fp25.js";import"./useCurrentTheme-hKMovh50.js";import"./index-Dm5lGjM9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlWYfZgO.js";import"./paper-plane-DxMEXvmI.js";import"./index-D1dGw7D4.js";import"./less-DRAo-dZd.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
