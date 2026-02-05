import{j as t}from"./iframe-D2RmpAtO.js";import{useMDXComponents as n}from"./index-DiCnj7u5.js";import{I as i,F as m}from"./CommandsAndQueries-DvQ8BP-Z.js";import{M as p,C as s}from"./blocks-B4Ev-YXh.js";import"./Tag-BWvTCWNx.js";import"./index-chYDxilS.js";import"./copy-BW6gA-qB.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-in5GCq84.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BmyeAcwI.js";import"./index-D_sGGZyZ.js";import"./index-i343fVly.js";import"./Link-BzydKqDb.js";import"./index-Cm3TMOjS.js";import"./index-BeHBKa6s.js";import"./index-B2C__dDn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-fsmSjvJs.js";import"./addCustomCSSWithScoping-BvD5X_dz.js";import"./index-BieATUAG.js";import"./information-DyTRt78C.js";import"./sys-enter-2-BwNIaTDW.js";import"./alert-DiSc05uc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Db38Z4Pj.js";import"./delete-DXJZ50Ci.js";import"./settings-BpqXPtye.js";import"./NoData-ChGvGCJu.js";import"./IllustratedMessage-SNT48L7A.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DBajHU1V.js";import"./index-Bz7BBt1U.js";import"./index-CaYBagE_.js";import"./slim-arrow-down-BwUXjubF.js";import"./Input-0ALk-Ulf.js";import"./ResponsivePopoverCommon.css-Bu5Qc2tF.js";import"./ValueStateMessage.css-CBAbMCri.js";import"./Suggestions.css-C02nfz6y.js";import"./ListBoxItemGroupTemplate-CQ-G_Pqg.js";import"./ComboBoxItemGroup-DdwIQLIR.js";import"./ListItemBaseTemplate-DRnGHt_8.js";import"./Token-DYfjH-EW.js";import"./ScrollEnablement-Cm66ONH8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXwMpDTl.js";import"./ToggleButton-I7SxqJxx.js";import"./SuggestionItem-DhOTrIOf.js";import"./index-2Qoy0_XG.js";import"./Option-CMZEceos.js";import"./index-CJS4plQE.js";import"./SegmentedButton-DCg5Kbga.js";import"./index-D7uSjRf5.js";import"./Select-0CvvSnwM.js";import"./InvisibleMessage-CtMSUBcM.js";import"./slim-arrow-down-DBeujC-e.js";import"./index-b3oa9-sK.js";import"./index-B6DGWZKt.js";import"./index-BfnbleU3.js";import"./index-C_50PDoe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMBb2cz_.js";import"./group-2-BliQX8hG.js";import"./sort-descending-a4FwLL9N.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-owAeJ2tr.js";import"./utils-DpDD1Kik.js";import"./index-CLQQIqtQ.js";import"./index-B7nTnMBS.js";import"./index-DutVsOSq.js";import"./navigation-down-arrow-4ifYH4EI.js";import"./navigation-right-arrow-BZw6OC7t.js";import"./navigation-right-arrow-DPuDFCzF.js";import"./useCurrentTheme-DFOB5aNG.js";import"./index-B1sF1lOb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-y3GnqRIn.js";import"./paper-plane-DyqWmJB4.js";import"./index-DuNaoNls.js";import"./less-BWoqsgqa.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
