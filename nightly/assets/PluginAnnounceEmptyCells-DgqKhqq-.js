import{j as t}from"./iframe-D_CdPJGB.js";import{useMDXComponents as n}from"./index-CU-ptlAE.js";import{I as i,F as m}from"./CommandsAndQueries-mK8OCXMD.js";import{M as p,C as s}from"./blocks-CCtPO9cz.js";import"./Tag-Bp64ITEl.js";import"./index-DvHG4NxR.js";import"./copy-BADAjupU.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DYjJZZgv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CZ_x4nC8.js";import"./index-px1zqH5W.js";import"./index-BjO8dbVD.js";import"./Link-D2G2Fur_.js";import"./index-rQn5W4JD.js";import"./index-BtAl8RaU.js";import"./index-Bp0lp_Bf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CAznTGJj.js";import"./addCustomCSSWithScoping-CCFJUFLD.js";import"./index-C4kKrQ_A.js";import"./information-D72qH7xY.js";import"./sys-enter-2-hXCOpqjq.js";import"./alert-DtWkY9xa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D_IhUX-d.js";import"./delete-7Ml3hpJC.js";import"./settings-zWMvdB3T.js";import"./NoData-B6osxBGy.js";import"./IllustratedMessage-BSFIsl3K.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-mv1-qqSd.js";import"./index-DdLYl7JB.js";import"./index-DU-QIP1X.js";import"./slim-arrow-down-DjB7mIxL.js";import"./Input-DDlyZUe3.js";import"./ResponsivePopoverCommon.css-BLJDaaVS.js";import"./ValueStateMessage.css-BCduw_aJ.js";import"./Suggestions.css-BidsuWHC.js";import"./ListBoxItemGroupTemplate-xzts4k2L.js";import"./ComboBoxItemGroup-CHXVN60o.js";import"./ListItemBaseTemplate-DxdVRh6Y.js";import"./Token-C48gjgFU.js";import"./ScrollEnablement-DdqyZen4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKWpRsaf.js";import"./ToggleButton-D2rDUs9L.js";import"./SuggestionItem-DDpzUX_W.js";import"./index-B4aMp4lg.js";import"./Option-DUZ1b-TT.js";import"./index-B2ct1whH.js";import"./SegmentedButton-Do-ayQ2t.js";import"./index-D1WIrmAT.js";import"./Select-6cSgUjJb.js";import"./InvisibleMessage-C5We_rGd.js";import"./slim-arrow-down-CHdhic0E.js";import"./index-B4pCbKOH.js";import"./index-CVUQsMX1.js";import"./index-DPMPQ5O6.js";import"./index-DcE2qBtK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlD1QirN.js";import"./group-2-Dor_fq4O.js";import"./sort-descending-DgbKssf5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-L2EXVoeb.js";import"./utils-BUKq5qYC.js";import"./index-DKu9DJJF.js";import"./index-BV1E9Rhs.js";import"./index-BylnBWRJ.js";import"./navigation-down-arrow-DunPFpLG.js";import"./navigation-right-arrow-BwWM6KQQ.js";import"./navigation-right-arrow-D3e7CxpK.js";import"./useCurrentTheme-C6BNKx_P.js";import"./index-DeJpfMkF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D_nqdA78.js";import"./paper-plane-DQ1C_A2n.js";import"./index-BQbEiE4i.js";import"./less-bDMIhIOC.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
