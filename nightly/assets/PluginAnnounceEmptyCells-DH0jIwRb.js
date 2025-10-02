import{j as t}from"./iframe-B-pj6tCi.js";import{useMDXComponents as i}from"./index-CV4vE3wQ.js";import{I as n,F as m}from"./CommandsAndQueries-D5MjQxKD.js";import{M as p,C as s}from"./blocks-HpriUj6L.js";import"./Tag-BGSRXwU9.js";import"./index-BjTnndjj.js";import"./copy-DztVyiyp.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BK8uysVc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-xz_U36.js";import"./index-CBj2QVaO.js";import"./index-BuYTxKvQ.js";import"./Link-C2AEvOhf.js";import"./index-BJS1VYKy.js";import"./index-C-cxTaDk.js";import"./index-etFlaHh7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-zIVJXLqJ.js";import"./addCustomCSSWithScoping-NTHEVFVs.js";import"./index-BOWgSpCi.js";import"./information-D4Uxy2_-.js";import"./sys-enter-2-dO_KPcSs.js";import"./alert-DoolSfaJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXj0uEXT.js";import"./delete-BnYHOY2E.js";import"./settings-uSbSIQHU.js";import"./NoData-DMPDFl_l.js";import"./IllustratedMessage-C4cgVVAn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1DtyXPj6.js";import"./index-DkYSANwf.js";import"./slim-arrow-down-26t7D4j9.js";import"./Input-DmrlR0kq.js";import"./ResponsivePopoverCommon.css-CE7mr_pS.js";import"./ValueStateMessage.css-tXcATjqT.js";import"./Suggestions.css-CniPwVQQ.js";import"./ListBoxItemGroupTemplate-BFTUBHkW.js";import"./ComboBoxItemGroup-CkQyHkRa.js";import"./ListItemBaseTemplate-Cci8iryR.js";import"./Token-CxMiOAAC.js";import"./ScrollEnablement-D-n-HsWC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DZ46rijL.js";import"./ToggleButton-4_Ru-zex.js";import"./SuggestionItem-BQ13UCwK.js";import"./index-ByOJ1YLH.js";import"./Option-CaNpJRmR.js";import"./index-DtsHJXJf.js";import"./SegmentedButton-B14_njt4.js";import"./index-CoWsLfrh.js";import"./Select-DbUQ6bw8.js";import"./InvisibleMessage-QwxdDQeA.js";import"./slim-arrow-down-BOPKijzV.js";import"./index-DJqVwyD9.js";import"./index-BQ49BgDg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bi23S08g.js";import"./group-2-Cm9rVH12.js";import"./sort-descending-Dj82RQGa.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C_rwdTta.js";import"./utils-dtTM_TEW.js";import"./index-B_v9zx4p.js";import"./index-CJOQ4d67.js";import"./index-CC2eGnfy.js";import"./navigation-down-arrow-CpReOOXl.js";import"./navigation-right-arrow-DLC8Xg5V.js";import"./navigation-right-arrow-RgTlgqvQ.js";import"./useCurrentTheme-BwLBQ8nO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BaaVPMC7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wViExLAn.js";import"./paper-plane-Bt6zz62V.js";import"./index-Dcyd7m_C.js";import"./less-BTlYxKnD.js";import"./index-C3ng40gn.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(m,{})]})}function Lt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Lt as default};
