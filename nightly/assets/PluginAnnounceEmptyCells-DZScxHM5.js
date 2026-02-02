import{j as t}from"./iframe-CeMquKfU.js";import{useMDXComponents as n}from"./index-BbFo7jBM.js";import{I as i,F as m}from"./CommandsAndQueries-DG6G8TEI.js";import{M as p,C as s}from"./blocks-Db1iDIvu.js";import"./Tag-DBOPR6ka.js";import"./index-BWGqmYD4.js";import"./copy-DuOXgjDa.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B1wSYbCh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYb2g8Yq.js";import"./index-srI8srsL.js";import"./index-WnbBQODb.js";import"./Link-B4KwrrH9.js";import"./index-Brk-KPPC.js";import"./index-jfPm289V.js";import"./index-DMujUK6u.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RK7-B4yx.js";import"./addCustomCSSWithScoping-06k5HVP6.js";import"./index-CQMy8EdC.js";import"./information-BF8hjIJ6.js";import"./sys-enter-2-CBCKgEbS.js";import"./alert-DPPxzZqA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DPG_OKYP.js";import"./delete-Uj8hBt6S.js";import"./settings-CRRgNt-N.js";import"./NoData-YotdDZfS.js";import"./IllustratedMessage-C9SN6Yvr.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-gYz_1-Iq.js";import"./index-DTmGPPPG.js";import"./index-lo7sxx3g.js";import"./slim-arrow-down-rp2vwRxt.js";import"./Input-DQRA-VuS.js";import"./ResponsivePopoverCommon.css-BClm2dDh.js";import"./ValueStateMessage.css-CKCH07QR.js";import"./Suggestions.css-BWIb4a3h.js";import"./ListBoxItemGroupTemplate-DCHeqAW1.js";import"./ComboBoxItemGroup-SnnIm8Sr.js";import"./ListItemBaseTemplate-1_D2ATm3.js";import"./Token-CruD5fzF.js";import"./ScrollEnablement-C-b-W7id.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7spGUwG.js";import"./ToggleButton-_yDrgV6p.js";import"./SuggestionItem-CL3ZaIy3.js";import"./index-UEVtisfD.js";import"./Option-BKd77GhM.js";import"./index-3m2Ir6Wd.js";import"./SegmentedButton-PLCet70E.js";import"./index-DSexaJxi.js";import"./Select-mBwpFl_7.js";import"./InvisibleMessage-DPIiF7tN.js";import"./slim-arrow-down-DP9BktZN.js";import"./index-DBpNwbAj.js";import"./index-CT9C6QTI.js";import"./index-CBp7yPzh.js";import"./index-_bp4qzZ2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BgkPuhmB.js";import"./group-2-Cjy-hE1J.js";import"./sort-descending-Bvfrz-CE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CHxxDtPV.js";import"./utils-BpaGkPqN.js";import"./index-DWISqHTN.js";import"./index-BO-Xqwo9.js";import"./index-2AndXKS7.js";import"./navigation-down-arrow-C-MSOhmQ.js";import"./navigation-right-arrow-PEzIwvoX.js";import"./navigation-right-arrow-Df3YrvYp.js";import"./useCurrentTheme-DkydNdML.js";import"./index-C0E2EBUT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CjonKQN8.js";import"./paper-plane-Cz43U6io.js";import"./index-BtaWLEfD.js";import"./less-BiaIGbp3.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
