import{j as t}from"./iframe-DE39xjY3.js";import{useMDXComponents as n}from"./index-B1qSHwoi.js";import{I as i,F as m}from"./CommandsAndQueries-wC1q0WhV.js";import{M as p,C as s}from"./blocks-Cj7tOVqz.js";import"./Tag-BcxJDVC2.js";import"./index-C8AzPoWi.js";import"./copy-SEjk-khs.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dm3vFAGq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dsw7NAug.js";import"./index-BNYAB6MW.js";import"./index-BytuhZWp.js";import"./Link-hO4SGyLs.js";import"./index-HOUf-EPf.js";import"./index-Di0pge-x.js";import"./index-Crm_KYfs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-k5eDoZ.js";import"./addCustomCSSWithScoping-DCdxMV4u.js";import"./index-BUS86rTR.js";import"./information-D52A35LG.js";import"./sys-enter-2-7R5MTao8.js";import"./alert-jxZm3lXE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdKgUR62.js";import"./delete-T1M_hPVY.js";import"./settings-XWWzFZWZ.js";import"./NoData-BNLEFYaI.js";import"./IllustratedMessage-0CDzNeqq.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-4G5p8MTf.js";import"./index-CqckHJYn.js";import"./index-BmDqxMXN.js";import"./slim-arrow-down-vZvcV55c.js";import"./Input-CDMm82xo.js";import"./ResponsivePopoverCommon.css-DaP0rv_w.js";import"./ValueStateMessage.css-Bvo1cNpH.js";import"./Suggestions.css-1EDkOxF1.js";import"./ListBoxItemGroupTemplate-CUQfeUJ-.js";import"./ComboBoxItemGroup-BIc4wSHj.js";import"./ListItemBaseTemplate-0o_W1vV3.js";import"./Token-quGRFBgA.js";import"./ScrollEnablement-hjYz1q63.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CEgmb2VH.js";import"./ToggleButton-B6AmBWfy.js";import"./SuggestionItem-CSHXkULE.js";import"./index-DuKoEI6Y.js";import"./Option-BmVldsJm.js";import"./index-GTGNu_hG.js";import"./SegmentedButton-aldcdMHp.js";import"./index-BBixzXs5.js";import"./Select-BgNYkp7a.js";import"./InvisibleMessage-Bo13I8mP.js";import"./slim-arrow-down-P7fnq_jn.js";import"./index-iZDIdJI7.js";import"./index-RO4633KM.js";import"./index-BcBVfEn1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B-mQ8wvX.js";import"./group-2-siU1eXmx.js";import"./sort-descending-3jJw3NoM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBKL-rtx.js";import"./utils-C2TjvMrQ.js";import"./index-BT2WMOZw.js";import"./index-uMqGW6va.js";import"./index-DtdnKfDC.js";import"./navigation-down-arrow-BajRWoAT.js";import"./navigation-right-arrow-DZoWocnv.js";import"./navigation-right-arrow-X0_-tw_X.js";import"./useCurrentTheme-CpMEMe1l.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D2kS9nAL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-rImD7_or.js";import"./paper-plane-DPstJvtB.js";import"./index-CPZM_tz3.js";import"./less-JTA9sx1u.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
