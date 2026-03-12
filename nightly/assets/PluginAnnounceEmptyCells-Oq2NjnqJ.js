import{j as t}from"./iframe-bao9qRDH.js";import{useMDXComponents as i}from"./index-D58rFl3P.js";import{I as n}from"./CommandsAndQueries-Bg8yb33a.js";import{M as m,C as p}from"./blocks-uUz_WETG.js";import"./Tag-DnPLRNDs.js";import"./index-B3NnTsyp.js";import"./copy-jfQcw6pd.js";import{F as s}from"./Footer-WVPZdxr3.js";import"./PageNotFound-sLpD2w2i.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D8DfZE8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-ZWtIcHaY.js";import"./index-BNO-qx4N.js";import"./index-Dl2g3tcZ.js";import"./index-DOBS9bga.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L1xKvRVU.js";import"./addCustomCSSWithScoping-D0v__xyi.js";import"./index-DPEMBgxp.js";import"./index-5JMcfQSp.js";import"./index-CwfO5OAT.js";import"./information-DbPZ0LCP.js";import"./sys-enter-2-Ch2YqKTp.js";import"./alert-CeM8CijD.js";import"./index-D32QYjx2.js";import"./Illustrations-BL_lLuOy.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DKlJM-ya.js";import"./delete-B4gN8aLw.js";import"./settings-DtxXcVBU.js";import"./NoData-xbyYJYqd.js";import"./NoFilterResults-rv2yTnQi.js";import"./index-Cq3Mz4O1.js";import"./IllustratedMessage-DduXifRX.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BASehbAX.js";import"./Input-B4vfEymz.js";import"./ResponsivePopoverCommon.css-boUjI9kL.js";import"./ValueStateMessage.css-Betpi1RU.js";import"./Suggestions.css-Czb7XS0g.js";import"./ListBoxItemGroupTemplate-Dxoq36lY.js";import"./ComboBoxItemGroup-BUGeYATz.js";import"./ListItemBaseTemplate-RRyIrX0q.js";import"./Token-CmOxgLRY.js";import"./ScrollEnablement-DTj4JYqk.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_fmCfmaL.js";import"./ToggleButton-y0YtkiXF.js";import"./multiselect-all-BxizFlon.js";import"./SuggestionItem-rNzbWoyR.js";import"./index-vSP-bfQy.js";import"./Option-DAUEl0Pa.js";import"./index-BZpv7IWE.js";import"./SegmentedButton-JBMqYtuM.js";import"./index-WWi3sBsb.js";import"./Select-BY45_jlB.js";import"./InvisibleMessage-lmhcQGzA.js";import"./index-BGpmUKYQ.js";import"./index-CnrqoCE-.js";import"./index-CLyNAv9_.js";import"./index-C8x-DaOR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vG2O0XVd.js";import"./group-2-Cn2rIsnU.js";import"./sort-descending-Dbm-NR0R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BBPmP6UZ.js";import"./utils-CPXWtj8G.js";import"./index--h_XAmYP.js";import"./index-BLVSX5Bx.js";import"./index-1cD6iEHz.js";import"./navigation-down-arrow-DkqjrQmu.js";import"./navigation-right-arrow-DBBJoASN.js";import"./navigation-right-arrow-l91271wa.js";import"./useCurrentTheme-Cu36YjS3.js";import"./index-ReeUPo0U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuL1NiTR.js";import"./paper-plane-C0i82_xb.js";import"./index-CQKF89is.js";import"./less-ps9JngL0.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
