import{j as t}from"./iframe-BdGmxA0i.js";import{useMDXComponents as i}from"./index-C_zfuZcr.js";import{I as n}from"./CommandsAndQueries-DPqSrKc7.js";import{M as m,C as p}from"./blocks-CvQb1zUF.js";import"./Tag-BZN3xK1V.js";import"./index-BNIHl_tg.js";import"./copy-uDMRF36v.js";import{F as s}from"./Footer-Do6hcOrL.js";import"./PageNotFound-CY9FLBWR.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B8ML7JX1.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CQvrABtJ.js";import"./index-DweznLO9.js";import"./index-C9pyPHSx.js";import"./index-DNgHnsc0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-XhNISppA.js";import"./addCustomCSSWithScoping-CVesT24B.js";import"./index-DZ9SK43g.js";import"./index-B2qLcI40.js";import"./index-rE0jwRpd.js";import"./information-CGm_Wlhu.js";import"./sys-enter-2-ckHTVyHn.js";import"./alert-iCvnQY_C.js";import"./index-BdC4vT1G.js";import"./Illustrations-D5W8On_q.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChIqXbcW.js";import"./delete-CTJk0IsQ.js";import"./settings-1l_UOAce.js";import"./NoData-Djl2JIk3.js";import"./NoFilterResults-DFkoAIau.js";import"./index-CfsWq6ap.js";import"./IllustratedMessage-BtAlBlE6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dwbmm60M.js";import"./Input-C_M3LRG8.js";import"./ResponsivePopoverCommon.css-EBeNizWh.js";import"./ValueStateMessage.css-B4ysw5cr.js";import"./Suggestions.css-Dvu4kY1O.js";import"./ListBoxItemGroupTemplate-BOvb3JSv.js";import"./ComboBoxItemGroup-CGG0HGrS.js";import"./ListItemBaseTemplate-DmKob6Ye.js";import"./Token-YSryXaLU.js";import"./ScrollEnablement-Bx9yVDLi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDBEqEtu.js";import"./ToggleButton-J8mmndXN.js";import"./multiselect-all-Ly4Q_TyH.js";import"./SuggestionItem-Dym0n5j2.js";import"./index-CevOS8v4.js";import"./Option-DvimpLtc.js";import"./index-CGPpfces.js";import"./SegmentedButton-FdRkB1du.js";import"./index-Da-1EDwC.js";import"./Select-D5Nsgp52.js";import"./InvisibleMessage-moo-UDrP.js";import"./index-BE8W69-D.js";import"./index-DsUL3khw.js";import"./index-d6_tfAg9.js";import"./index-D5VX-3sq.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4cujpVB.js";import"./group-2-Dkh6CIdZ.js";import"./sort-descending-BBVHoidp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DrhR_CYD.js";import"./utils-DG7feN6u.js";import"./index-CGXbN4gw.js";import"./index-Bh3ez5ii.js";import"./index-CUQ38Ums.js";import"./navigation-down-arrow-BSMjHANS.js";import"./navigation-right-arrow-8rES_Lpx.js";import"./navigation-right-arrow-DLSm8pNj.js";import"./useCurrentTheme-DDtUANJS.js";import"./index-MAbIbvmC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C8ybJVgJ.js";import"./paper-plane-Bst4p13C.js";import"./index-Cf38JKFu.js";import"./less-Bq49TC9A.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
