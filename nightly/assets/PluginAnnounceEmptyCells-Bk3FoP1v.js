import{j as t}from"./iframe-bPNgMO5h.js";import{useMDXComponents as i}from"./index-C4j4ILCK.js";import{I as n}from"./CommandsAndQueries-CzGU51jX.js";import{M as m,C as p}from"./blocks-DApk4By0.js";import"./Tag-eZA227UP.js";import"./index-CuRLQ5dh.js";import"./copy-DSB5O1lX.js";import{F as s}from"./Footer-Bh2hTs_t.js";import"./PageNotFound-Dw8P7BXA.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DjvL60Qy.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-ZXYeKMWB.js";import"./index-4UioHVXW.js";import"./index-CcoeKc2Y.js";import"./index-CjQWdaPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbYGGim3.js";import"./addCustomCSSWithScoping-BM8ISZdO.js";import"./index-QMND5HNb.js";import"./index-5px67lZR.js";import"./index-mw4j7xrs.js";import"./information-C2d19MHy.js";import"./sys-enter-2-D4Z01vRG.js";import"./alert-Ct4GAPph.js";import"./index-D8vCUd0L.js";import"./Illustrations--EfuNW2c.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bp92srSy.js";import"./delete-CZaWvsw2.js";import"./settings-yWmyjAh_.js";import"./NoData-tuasnKt_.js";import"./NoFilterResults-DJYt6ITG.js";import"./index-DfjjeQhE.js";import"./IllustratedMessage-D45xyK5E.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Bug9Y4_C.js";import"./Input--k2fVCdQ.js";import"./ResponsivePopoverCommon.css-C9m2n_WO.js";import"./ValueStateMessage.css-5RYJguS7.js";import"./Suggestions.css-kgVEttjd.js";import"./ListBoxItemGroupTemplate-D17nKtUN.js";import"./ComboBoxItemGroup-DtEK8K2r.js";import"./ListItemBaseTemplate-DOCzUHDT.js";import"./Token-DK_BK7Xd.js";import"./ScrollEnablement-0saldGDB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DqDMg7f9.js";import"./ToggleButton-oLAt7dS0.js";import"./multiselect-all-DOxz8ncZ.js";import"./SuggestionItem-DATbDIak.js";import"./index-DwTOmRJC.js";import"./Option-DjwKEC0h.js";import"./index-C9e7sFCK.js";import"./SegmentedButton-Dw3GdGu8.js";import"./index-C8DOH3y9.js";import"./Select-DqepO6nd.js";import"./InvisibleMessage-CiSDUG8R.js";import"./index-C43v6hU6.js";import"./index-ve0FQzF0.js";import"./index-SeTeuHTC.js";import"./index-CCfS2xdR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BpeMjZpa.js";import"./group-2-DKJR9cs7.js";import"./sort-descending-DvmMzoJz.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D2nJf9Zv.js";import"./utils-BldSJTDV.js";import"./index-CIZr7faC.js";import"./index-D_m5mtxi.js";import"./index-yfJAvgK-.js";import"./navigation-down-arrow-B9_zRrcu.js";import"./navigation-right-arrow-Dj2eD2zH.js";import"./navigation-right-arrow-sjpm_efd.js";import"./useCurrentTheme-jpUiEjmR.js";import"./index-C_ntH17V.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DkBNoMcS.js";import"./paper-plane-CvTWiV4j.js";import"./index-CPV1ISqE.js";import"./less-Dh8-HrfA.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
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
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
