import{j as t}from"./iframe-DpyqAETS.js";import{useMDXComponents as i}from"./index-DokE1aPE.js";import{I as n}from"./CommandsAndQueries-DgdmOsaT.js";import{M as m,C as p}from"./blocks-PLzKwXGQ.js";import"./Tag-DKNf6AcV.js";import"./index-TIDQzFF1.js";import"./copy-Bdya3dKB.js";import{F as s}from"./Footer-B_kIXa7O.js";import"./PageNotFound-BN4cbSeC.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BDoJsWpF.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cygi3wLY.js";import"./index-B67fvT3R.js";import"./index-CnomjaBB.js";import"./index-I3HyyzwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP11CHq4.js";import"./addCustomCSSWithScoping-Co67Uzxh.js";import"./index-B0Hg115V.js";import"./index-CiKduFiJ.js";import"./index-I3Bq7JP2.js";import"./information-99NDnz_N.js";import"./sys-enter-2-CaEWuWxX.js";import"./alert-L-6hDox8.js";import"./index-B8-2K5Ni.js";import"./Illustrations-Beru7cxi.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CaaaVZQA.js";import"./delete-BXUGnDKm.js";import"./settings-DrzuGCHX.js";import"./NoData-gBBZ_Wbs.js";import"./NoFilterResults-BxXVfs7J.js";import"./index-BNg5WP_7.js";import"./IllustratedMessage-QqLt7tsj.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D_Bv5Pk4.js";import"./Input-WF7CT_uR.js";import"./ResponsivePopoverCommon.css-CMqfjYXO.js";import"./ValueStateMessage.css-Wupv_jGJ.js";import"./Suggestions.css-BVFzvbLq.js";import"./ListBoxItemGroupTemplate-dNP8oHGP.js";import"./ComboBoxItemGroup-C1_dhnPF.js";import"./ListItemBaseTemplate-Be9h2s8y.js";import"./Token-BEFEGWrk.js";import"./ScrollEnablement-cQ2m6PIi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D5IRqJ4A.js";import"./ToggleButton-Dya_F0pD.js";import"./multiselect-all-0_IwdKza.js";import"./SuggestionItem-DeMwyYWk.js";import"./index-BnNEaiFq.js";import"./Option-BYL0UpNA.js";import"./index-k7lg1KnU.js";import"./SegmentedButton-BpDQdB-L.js";import"./index-DX7R1uAP.js";import"./Select-MzTCuHdz.js";import"./InvisibleMessage-dvUkP_Hh.js";import"./index-CCEqKFXe.js";import"./index-CKTtQJTk.js";import"./index-CZG3dmap.js";import"./index-Be45WFmK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CS1Hwtsk.js";import"./group-2-CAz_Zq6U.js";import"./sort-descending-DIRUxiNv.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ByG9JROg.js";import"./utils-GKCuX9hZ.js";import"./index-DcZIfOhg.js";import"./index-pZ-yDWgG.js";import"./index-CrY6jiry.js";import"./navigation-down-arrow-UHkP0V-Q.js";import"./navigation-right-arrow-WWFFQj9u.js";import"./navigation-right-arrow-CDfDe0dR.js";import"./useCurrentTheme-CPbkxv-P.js";import"./index-Uncwm3va.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-kZVBuGuq.js";import"./paper-plane-chkECRdy.js";import"./index-CXUGpKft.js";import"./less-QAdmSHz4.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
