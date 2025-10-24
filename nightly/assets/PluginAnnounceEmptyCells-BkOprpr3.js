import{j as t}from"./iframe-DoO3B8k6.js";import{useMDXComponents as n}from"./index-c3qBf9j-.js";import{I as i,F as m}from"./CommandsAndQueries-BgTP9rvd.js";import{M as p,C as s}from"./blocks-SZ1zCtFT.js";import"./Tag-BQH01MnI.js";import"./index-0e8xkLwE.js";import"./copy-_xuz2Nel.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CmXCVKCh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSLJX4WE.js";import"./index-CQlaTUTv.js";import"./index-DHXtHkXk.js";import"./Link-BjpII7wh.js";import"./index-DkL8yUNi.js";import"./index-DNsrF3vl.js";import"./index-DeXyQXgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRtsvWdt.js";import"./addCustomCSSWithScoping-BMQmLAx8.js";import"./index-DcEck9MJ.js";import"./information-CQ3_UNon.js";import"./sys-enter-2-04wFErlJ.js";import"./alert-TTaxVgBW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIhT2n-D.js";import"./delete-SjnFcxET.js";import"./settings-C0lq9GEs.js";import"./NoData-DfBjPnbb.js";import"./IllustratedMessage-CXdSvR4a.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-xMjYb9KY.js";import"./index-CpiZNEne.js";import"./index-DQXIYNyl.js";import"./slim-arrow-down-GZWBJmnW.js";import"./Input-C10NYIPu.js";import"./ResponsivePopoverCommon.css-CPXMLCds.js";import"./ValueStateMessage.css-69Ktf8Dg.js";import"./Suggestions.css-DN6X2W_Y.js";import"./ListBoxItemGroupTemplate-B5AqpDrM.js";import"./ComboBoxItemGroup-j1Qew58i.js";import"./ListItemBaseTemplate-BsAW94PE.js";import"./Token-DC4trEDg.js";import"./ScrollEnablement-vDfjB2It.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BmumZdm7.js";import"./ToggleButton-C4VP5bTt.js";import"./SuggestionItem-IO39S43j.js";import"./index-B94XsNA0.js";import"./Option-BaLD8Fma.js";import"./index-NWr0Tsrk.js";import"./SegmentedButton-X1XX7xUF.js";import"./index-C_c4Byeq.js";import"./Select-9rIpwA3F.js";import"./InvisibleMessage-CgykMR3a.js";import"./slim-arrow-down-t7AVMtWo.js";import"./index-DQKXzwtk.js";import"./index-D9vcEjIT.js";import"./index-MnZkDyaG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ynF8pjf8.js";import"./group-2-Detpstok.js";import"./sort-descending-B0qjzB_P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_g-vZKh.js";import"./utils-LOEo2xLm.js";import"./index-GNYcE7dh.js";import"./index-DXQ56gFw.js";import"./index-BZhKH3An.js";import"./navigation-down-arrow-B33glP6f.js";import"./navigation-right-arrow-CD5NCtjH.js";import"./navigation-right-arrow-BNO-nAvK.js";import"./useCurrentTheme-DlkHXRgd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DVfnIZQS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0_rTS9I.js";import"./paper-plane-BCWKCy3u.js";import"./index-DZMzSe-F.js";import"./less-2TELAs2h.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
