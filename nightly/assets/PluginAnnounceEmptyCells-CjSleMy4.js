import{j as t}from"./iframe-D7AtRUpE.js";import{useMDXComponents as n}from"./index-DRFX2LG8.js";import{I as i,F as m}from"./CommandsAndQueries-BtIPK2kL.js";import{M as p,C as s}from"./blocks-DtVmZnZe.js";import"./Tag-DZXgvHmp.js";import"./index-ehmuZHI1.js";import"./copy-BpQCF5oY.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C8-IDFGy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CCJ9pFYK.js";import"./index-BGkf-dJq.js";import"./index-Dd6OnJpC.js";import"./Link-DWIR53PW.js";import"./index-CjaPk49X.js";import"./index-CH_KzusP.js";import"./index-54VAs-Li.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RhrsIb0U.js";import"./addCustomCSSWithScoping-C2Eje0Og.js";import"./index-BWvZCzda.js";import"./information-D-fAW1gu.js";import"./sys-enter-2-DRPF_4qy.js";import"./alert-fnVpcWPE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BecdAPGm.js";import"./delete-BIPIzrZS.js";import"./settings-DmIbC4ht.js";import"./NoData-EkhAAOIw.js";import"./IllustratedMessage-BdbwIayy.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BlO2CkwR.js";import"./index-BxDxP0Wt.js";import"./index-zp7M-Hgb.js";import"./slim-arrow-down-DhUBKwq5.js";import"./Input-BNhpkyEe.js";import"./ResponsivePopoverCommon.css-C_ECllnd.js";import"./ValueStateMessage.css-AtrprVNc.js";import"./Suggestions.css-CrAZUaHe.js";import"./ListBoxItemGroupTemplate-DVPT-6e2.js";import"./ComboBoxItemGroup-JbQ_GC3z.js";import"./ListItemBaseTemplate-B8mCobtS.js";import"./Token-Bn9BgD8D.js";import"./ScrollEnablement-DFMfFOOU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dkffh3P6.js";import"./ToggleButton-CzxwP7cy.js";import"./SuggestionItem-BRpUqzth.js";import"./index-MmfJ-udd.js";import"./Option-GuUiDPkM.js";import"./index-CTMtFbt2.js";import"./SegmentedButton-CA3GNGc8.js";import"./index-Dfah0KCS.js";import"./Select-Uv1fBISx.js";import"./InvisibleMessage-BJQIWg2w.js";import"./slim-arrow-down-gQRYAOdn.js";import"./index-C8-WBKC9.js";import"./index-vY1U5G9O.js";import"./index-BViGaWYT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-gJxBGSRQ.js";import"./group-2-B6wj3ZWV.js";import"./sort-descending-JTCNKPca.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XI1WfX02.js";import"./utils-By-8NwbJ.js";import"./index-C0mqrK_u.js";import"./index-VhkSZqEG.js";import"./index-DyzGdEk8.js";import"./navigation-down-arrow-Cfi1KmUR.js";import"./navigation-right-arrow-CYpfcLCR.js";import"./navigation-right-arrow-Bhbe0IU9.js";import"./useCurrentTheme-a_GAr54p.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CGVcTX0I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ck-SQTsB.js";import"./paper-plane-QmuJkXHS.js";import"./index-DUFp6-MR.js";import"./less-CskDW-lD.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
