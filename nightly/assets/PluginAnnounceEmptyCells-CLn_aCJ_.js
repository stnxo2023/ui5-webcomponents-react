import{j as t}from"./iframe-HNnxxD_z.js";import{useMDXComponents as e}from"./index-DMbTStZf.js";import{I as n,F as m}from"./CommandsAndQueries-10i8xq6U.js";import{M as p,C as s}from"./blocks-CCejLYgP.js";import"./Tag-C_XEAXfN.js";import"./index-sOkH0Wf9.js";import"./copy-DRw12hkD.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CpTx4Bpa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BN0PdEk3.js";import"./index-DoZC0kx0.js";import"./index-B_Z8tqtL.js";import"./Link-CqZZKZ0X.js";import"./index-Bmalf1dG.js";import"./index-CbtLCQbD.js";import"./index-BNjcdWK4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7TcfhjQy.js";import"./addCustomCSSWithScoping-BgldszW1.js";import"./index-B3Qe_MYG.js";import"./information-BWoF60GS.js";import"./sys-enter-2-BmofK6wa.js";import"./alert-qoF8AI7R.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DG4syGbT.js";import"./delete-BPWmFB0A.js";import"./settings-5OpdjY_e.js";import"./NoData-BG8FU6B9.js";import"./IllustratedMessage-Buk6a2Wh.js";import"./i18n-defaults-iunXW1RU.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./NoFilterResults-CWMznFAT.js";import"./sapIllus-Dialog-NoFilterResults-BO45-LjK.js";import"./sapIllus-Scene-NoFilterResults-CuaKNEnS.js";import"./sapIllus-Spot-NoFilterResults-Bp3R-TVD.js";import"./sapIllus-Dot-NoFilterResults-DxDedFzw.js";import"./index-DE5GHUxQ.js";import"./index-CubNug0w.js";import"./slim-arrow-down-07s9YRQj.js";import"./Input-CcjBHqVO.js";import"./ResponsivePopoverCommon.css-NA3QCBzV.js";import"./ValueStateMessage.css-CvcEC4Dw.js";import"./Suggestions.css-wUtJMfNH.js";import"./ListBoxItemGroupTemplate-Bk5DJdTL.js";import"./ComboBoxItemGroup-xxUN5ZVS.js";import"./ListItemBaseTemplate-tdZrPwi8.js";import"./Token-BDt9FIHE.js";import"./ScrollEnablement-HfpHMe0e.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-oPCc0Uwz.js";import"./ToggleButton-jCoBkBYu.js";import"./SuggestionItem-rXnc-dLm.js";import"./index-B-fo21n3.js";import"./Option-BIZDWBBb.js";import"./index-U-5mF94y.js";import"./SegmentedButton-By7wzTHR.js";import"./index-BtrqzYy6.js";import"./Select-YbUlEasc.js";import"./InvisibleMessage-AaTAMOh4.js";import"./slim-arrow-down-Bs9LULDq.js";import"./index-DfrQCW3n.js";import"./index-CcUUZ0p1.js";import"./index-CiE6BBc9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CfJnBW4O.js";import"./group-2-VDO6zSGN.js";import"./sort-descending-C1DE_nl-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7SvSBgJ9.js";import"./utils-BmeCqfm7.js";import"./index-CjfdEX9X.js";import"./index-gA-WanCe.js";import"./index-FhSs3lIN.js";import"./navigation-down-arrow-rKWSg6ke.js";import"./navigation-right-arrow-CA3cIlRb.js";import"./navigation-right-arrow-DfJT8U7i.js";import"./useCurrentTheme-DEDGfjP3.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BVWTeGXA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CNF2o9Zu.js";import"./paper-plane-BYrTW1Cg.js";import"./index-B9X03XgD.js";import"./less-DZo91l5W.js";function i(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...e(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,t.jsx(m,{})]})}function Kt(r={}){const{wrapper:o}={...e(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(i,{...r})}):i(r)}export{Kt as default};
