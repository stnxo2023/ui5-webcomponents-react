import{j as t}from"./iframe-CJIrZBlB.js";import{useMDXComponents as n}from"./index-xKVU5ZCd.js";import{I as i,F as m}from"./CommandsAndQueries-C3g74-RT.js";import{M as p,C as s}from"./blocks-C-1O0LRm.js";import"./Tag-BNlwFAFY.js";import"./index-DmJ7zXRW.js";import"./copy-DR5Kv1Iv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Coh8XRhB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGOwz-CM.js";import"./index-YnpVhHMg.js";import"./index-CEkWgGTS.js";import"./Link-BElCP5h1.js";import"./index-BhZheF80.js";import"./index-DmwyQtvi.js";import"./index-BCwOIMZp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bf32rwnZ.js";import"./addCustomCSSWithScoping-CPo-hqqQ.js";import"./index-EdNUKN4_.js";import"./information-BaxJEMV7.js";import"./sys-enter-2-COh9WNy8.js";import"./alert-BkaLAKBd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BA0xOeEx.js";import"./delete-C9vBXGAH.js";import"./settings-BAZbIl4B.js";import"./NoData-D1WCCIr-.js";import"./IllustratedMessage-BSOmXBM5.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DvcJ3TrS.js";import"./index-2aQZOvza.js";import"./index-B5XNfqqK.js";import"./slim-arrow-down-CdpV3nE0.js";import"./Input-Btf27YOr.js";import"./ResponsivePopoverCommon.css-xGlWqU9B.js";import"./ValueStateMessage.css-MyCATZT_.js";import"./Suggestions.css-Cy-COfO3.js";import"./ListBoxItemGroupTemplate-DXkWU2-0.js";import"./ComboBoxItemGroup-CYzVMS6G.js";import"./ListItemBaseTemplate-C5F3HCqR.js";import"./Token-BNv4B9pp.js";import"./ScrollEnablement-CKbJdcjA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHoTFWQP.js";import"./ToggleButton-CFOd-MDd.js";import"./SuggestionItem-BI-IC1_F.js";import"./index-BOVwts_X.js";import"./Option-DuZb6gan.js";import"./index-DJqLFHqT.js";import"./SegmentedButton-D8Yf4_Qw.js";import"./index-BLHzNls7.js";import"./Select-D5EHVEMo.js";import"./InvisibleMessage-PB9O_FfW.js";import"./slim-arrow-down-BTXWHLy9.js";import"./index-CKVmIBse.js";import"./index-N6T3kPeD.js";import"./index-BPZe2Mw9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-mMtT2jHR.js";import"./group-2-De9ft9J6.js";import"./sort-descending-BIwXsoMH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DYDQ7rpc.js";import"./utils-CvOOfhDf.js";import"./index-DV5RwOKW.js";import"./index-Cfv_e0qb.js";import"./index-BKekFUxh.js";import"./navigation-down-arrow-B14ig-WM.js";import"./navigation-right-arrow-BtI2EckR.js";import"./navigation-right-arrow-CrzwDQrl.js";import"./useCurrentTheme-CJMp3CMu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dq6Z1nja.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bb4BnNpy.js";import"./paper-plane-BzrDh65i.js";import"./index-D9LH8SsC.js";import"./less-Cb2Bvewk.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
