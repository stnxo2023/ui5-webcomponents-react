import{j as t}from"./iframe-Cv2DxGxx.js";import{useMDXComponents as n}from"./index-DJcSDbNR.js";import{I as i,F as m}from"./CommandsAndQueries-bS4Yf-ej.js";import{M as p,C as s}from"./blocks-ugoI9X9t.js";import"./Tag-Coz7RYuP.js";import"./index-D_TtcnwQ.js";import"./copy-CqIWY1yr.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Bzu6OElq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-mHVz6rF3.js";import"./index-CInTOaEh.js";import"./index-B09eBGHl.js";import"./Link-BduAs2w5.js";import"./index-DUYUZ9D7.js";import"./index-Gpf6Q-KM.js";import"./index-BniFx0GW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-0lPpvscI.js";import"./addCustomCSSWithScoping-Bw7ry9Qy.js";import"./index-C0_2Dkpw.js";import"./information-DWd1dkKI.js";import"./sys-enter-2-DDyu9UHI.js";import"./alert-3r0WRbjT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CaCjLhwG.js";import"./delete-DA30Vb_3.js";import"./settings-DPcZjvrc.js";import"./NoData-CkwFywRp.js";import"./IllustratedMessage-CAb2xgRr.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CpZwDGYv.js";import"./index-Ba-Eubsl.js";import"./index-CdW_heB4.js";import"./slim-arrow-down-BTvRdwWq.js";import"./Input-C1lqpYg3.js";import"./ResponsivePopoverCommon.css-D3KSXKvs.js";import"./ValueStateMessage.css-CZDTXdiA.js";import"./Suggestions.css-Cw7wY2ht.js";import"./ListBoxItemGroupTemplate-Waem1Q61.js";import"./ComboBoxItemGroup-DSnMrpI-.js";import"./ListItemBaseTemplate-CXI8xke2.js";import"./Token-CoSFdHdR.js";import"./ScrollEnablement-D_FfjNHJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1pGRTma.js";import"./ToggleButton-mckNH_TC.js";import"./SuggestionItem-BQNyHhBv.js";import"./index-Bo2NWm1F.js";import"./Option-BuJ-tVWb.js";import"./index-DIyggbSr.js";import"./SegmentedButton-75RA8p3W.js";import"./index-FkfgVmhN.js";import"./Select-944-A8Kx.js";import"./InvisibleMessage-DWFrz2m3.js";import"./slim-arrow-down-sehS3JFD.js";import"./index-V4LMPnG-.js";import"./index-BFYwVfb0.js";import"./index-BCQ2rtHe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-4kPRahty.js";import"./group-2-Bg2BOQ3d.js";import"./sort-descending-B6JANGfX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D4tiooQx.js";import"./utils-DdfwhCCt.js";import"./index-WPe-KT9J.js";import"./index-Br9lY8SV.js";import"./index-m0ZtgUtd.js";import"./navigation-down-arrow-0n0msI0k.js";import"./navigation-right-arrow-DrgYv11d.js";import"./navigation-right-arrow-D__Tv4vy.js";import"./useCurrentTheme-BaNC1vQQ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D7LRyA5h.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Hq2jb4tD.js";import"./paper-plane-DSa5GeV2.js";import"./index-CU0aCIvN.js";import"./less-C0w2VPH4.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
