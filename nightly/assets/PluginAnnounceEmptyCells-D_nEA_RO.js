import{j as t}from"./iframe-Dk0n26L0.js";import{useMDXComponents as n}from"./index-GonNK-F8.js";import{I as i,F as m}from"./CommandsAndQueries-C5xq4Qip.js";import{M as p,C as s}from"./blocks-Do665btL.js";import"./Tag-DHDcW-fI.js";import"./index-zII-B7tZ.js";import"./copy-DI2yzFNj.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CDVHvZJu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOuRbWlk.js";import"./index-DZcV0iyk.js";import"./index-Dww5FXQ1.js";import"./Link-CiqsvlwF.js";import"./index-BYI0Uf8A.js";import"./index-A7L-MktQ.js";import"./index-DuchmHxs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-WCv2CDBA.js";import"./addCustomCSSWithScoping-C7tuYiM4.js";import"./index-DVvxIcdz.js";import"./information-CyaCviRw.js";import"./sys-enter-2-BeHXFnMA.js";import"./alert-CjBv8gy0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BGSne0t9.js";import"./delete-Wr4GKhKk.js";import"./settings-CTkQY05A.js";import"./NoData-DN-HgX0w.js";import"./IllustratedMessage-WiIf7tiQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CsDkGDUR.js";import"./index-BEOp2Qs8.js";import"./index-DkDwXcnb.js";import"./slim-arrow-down-oRzOUke0.js";import"./Input-BrteEEfL.js";import"./ResponsivePopoverCommon.css-B_3MTk0W.js";import"./ValueStateMessage.css-DW6dpdMx.js";import"./Suggestions.css-BKD2VSge.js";import"./ListBoxItemGroupTemplate-DphDFimI.js";import"./ComboBoxItemGroup-CfpmoNkX.js";import"./ListItemBaseTemplate-BW6zm8tA.js";import"./Token-fVkVNRGm.js";import"./ScrollEnablement-BDIo3BIe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8LD2v8AG.js";import"./ToggleButton-lLT-pIBz.js";import"./SuggestionItem-BgHqUSrH.js";import"./index-BakJLASc.js";import"./Option-Bs3lQB5f.js";import"./index-BfchdiDe.js";import"./SegmentedButton-kL0-alOP.js";import"./index-WaTuFDqY.js";import"./Select-CgcyfRGV.js";import"./InvisibleMessage-DxH_2GsR.js";import"./slim-arrow-down-Buf41Nuz.js";import"./index-DHKtmYan.js";import"./index-CO1j-MpK.js";import"./index-BbjMprDv.js";import"./index-BGwOxs0U.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CWCwhs_t.js";import"./group-2-DBqLD-HP.js";import"./sort-descending-NSp7tyQ0.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Blitw6nk.js";import"./utils-BVujrbxV.js";import"./index-D4w2TJZn.js";import"./index-g0v-MWQC.js";import"./index-Dvotll0l.js";import"./navigation-down-arrow-C3npHCkQ.js";import"./navigation-right-arrow-DIlKpP0p.js";import"./navigation-right-arrow-CfXHjg3k.js";import"./useCurrentTheme-K0AsAVmL.js";import"./index-BZVSQdFq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cr1Ieyfb.js";import"./paper-plane-DShcb0AZ.js";import"./index-ufKMWArj.js";import"./less-znGJqNXZ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
