import{j as t}from"./iframe-HT1spLTi.js";import{useMDXComponents as n}from"./index-DBCrLany.js";import{I as i,F as m}from"./CommandsAndQueries-BbzR7uR6.js";import{M as p,C as s}from"./blocks-BHdc3k3Z.js";import"./Tag-D0fQ6cD9.js";import"./index-QNmDooaX.js";import"./copy-CRfxWZGx.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-iUJ8V_z6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZj-Nofr.js";import"./index-gqzRfHPw.js";import"./index-CWHtqZOi.js";import"./Link-dxeMesAc.js";import"./index-ILnTo0yK.js";import"./index-CNJfOrlA.js";import"./index-CV40RAYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tr8O9Dg_.js";import"./addCustomCSSWithScoping-DOmP-F21.js";import"./index-BXPXbeEl.js";import"./information-BYNrnqUc.js";import"./sys-enter-2-D7etVCyM.js";import"./alert-D38Y2b3l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DwM3SLbd.js";import"./delete-B4h0y0b6.js";import"./settings-OrML4UsD.js";import"./NoData-BOiGAXx7.js";import"./IllustratedMessage-CIWXNurR.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DJEc1V4G.js";import"./index-CDNfdMib.js";import"./index-BooXjxoU.js";import"./slim-arrow-down-D7gKmzcO.js";import"./Input-CG3jepqS.js";import"./ResponsivePopoverCommon.css-DumVabDv.js";import"./ValueStateMessage.css-Dec25e9Z.js";import"./Suggestions.css-B7Xe6SyY.js";import"./ListBoxItemGroupTemplate-DLkL2x3G.js";import"./ComboBoxItemGroup-BKuEkjmd.js";import"./ListItemBaseTemplate-BJduEMQT.js";import"./Token-CJWVjFqm.js";import"./ScrollEnablement-COl_OArp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B0rWPz1n.js";import"./ToggleButton-bT-nmWTF.js";import"./SuggestionItem-DlRh-CU9.js";import"./index-CAapkdBY.js";import"./Option-BJPjR69C.js";import"./index-DW6SW4K6.js";import"./SegmentedButton-BvcAggKa.js";import"./index-Bthc5YEN.js";import"./Select-yvOIU7AH.js";import"./InvisibleMessage-K2bP2Bc6.js";import"./slim-arrow-down-hfwx64af.js";import"./index-D8DCAi2g.js";import"./index-Bjt-sPUz.js";import"./index-DfU0YBTN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-r_rnPDRk.js";import"./group-2-DtVNA77I.js";import"./sort-descending-DgqXD-Zl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpK1GvE-.js";import"./utils-BnqKx2k1.js";import"./index-D0O_r2Gf.js";import"./index-Cb097oS5.js";import"./index-BXOm-GNk.js";import"./navigation-down-arrow-DIWWzNLp.js";import"./navigation-right-arrow-FOKc4XUb.js";import"./navigation-right-arrow-BpHafmpc.js";import"./useCurrentTheme-CmCSQj3_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-0CLxpaxv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-lcSwUg68.js";import"./paper-plane-B1Mwkky7.js";import"./index-JqGFdXCE.js";import"./less-Di54MHdD.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
