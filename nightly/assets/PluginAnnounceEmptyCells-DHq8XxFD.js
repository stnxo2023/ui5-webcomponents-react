import{j as t}from"./iframe-Di0CnA8S.js";import{useMDXComponents as n}from"./index-D1yNQJed.js";import{I as i,F as m}from"./CommandsAndQueries-zSui8mFJ.js";import{M as p,C as s}from"./blocks-CQfV0luP.js";import"./Tag-YM6QkIty.js";import"./index-Cv974V6E.js";import"./copy-BnyBSvmF.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CaMp0239.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bkm6KJyR.js";import"./index-FrAwh-uI.js";import"./index-CX_Pkcfg.js";import"./Link-WIuadCnC.js";import"./index-Bms_gXSs.js";import"./index-DEJJ6ZVN.js";import"./index-DChMCwxZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BL09SrHJ.js";import"./addCustomCSSWithScoping-D9ak18Ev.js";import"./index-C4vcrMlE.js";import"./information-DzISr5a2.js";import"./sys-enter-2-Vd3zyEtx.js";import"./alert-DaK0qpmR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkjZN1m5.js";import"./delete-CkgveXZV.js";import"./settings-O_SqiOO8.js";import"./NoData-Cm3Sgky-.js";import"./IllustratedMessage-BkwPs3fv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BXEHKTVt.js";import"./index-D5FQCJ2w.js";import"./index-DWNbjlf6.js";import"./slim-arrow-down-bK9T7o5_.js";import"./Input-BMxXpEmu.js";import"./ResponsivePopoverCommon.css--b7te08F.js";import"./ValueStateMessage.css-wgmiBQCU.js";import"./Suggestions.css-Bkytjk5E.js";import"./ListBoxItemGroupTemplate-DvN0aU6B.js";import"./ComboBoxItemGroup-N1tLGR-W.js";import"./ListItemBaseTemplate-0lg9M0fM.js";import"./Token-CZDcEwHC.js";import"./ScrollEnablement-DhAJ5JnK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D4_pyZ43.js";import"./ToggleButton-qVqa-FdV.js";import"./SuggestionItem-CDxntgT5.js";import"./index-XMMJdMJi.js";import"./Option-DNM61xVD.js";import"./index-nh3D4sX1.js";import"./SegmentedButton-DLLN3073.js";import"./index-D4LgD8pt.js";import"./Select-CSvcStkQ.js";import"./InvisibleMessage-CA5l1OrC.js";import"./slim-arrow-down-BZ32OfT-.js";import"./index-jyrIbm7X.js";import"./index-jLe1V_0t.js";import"./index-BCKZ26pG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CSxtsdcS.js";import"./group-2-D_KQdcyc.js";import"./sort-descending-CVK6o8y6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cn-IKnzn.js";import"./utils-CA_s0xCU.js";import"./index-Dj5ZK7Jm.js";import"./index-SGAGbvBy.js";import"./index-BY5Nj2YC.js";import"./navigation-down-arrow-Cn2Pb-ac.js";import"./navigation-right-arrow-BM8i-tol.js";import"./navigation-right-arrow-qgiVcRku.js";import"./useCurrentTheme-DDCiNxpb.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CdwOc6CH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DMJx-Dqa.js";import"./paper-plane-BU5KNFmh.js";import"./index-Dtz3OPe1.js";import"./less-DIBO8ral.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
