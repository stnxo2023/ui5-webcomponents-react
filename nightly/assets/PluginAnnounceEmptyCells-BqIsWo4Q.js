import{j as t}from"./iframe-BXb_n64_.js";import{u as i,M as n,C as m}from"./blocks-9VP231tA.js";import{I as p}from"./CommandsAndQueries-BI-RA2OZ.js";import"./Tag-CRNARXt6.js";import"./index-BL83g4Fz.js";import"./copy-BBKTKpbi.js";import{F as s}from"./Footer-DPPwB2I6.js";import"./PageNotFound-CZrojxwO.js";import{PluginAnnounceEmptyCells as a}from"./AnalyticalTableHooks.stories-BKWnHpAq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BUcKjx9R.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./index-BD_xT1Nj.js";import"./index-DqAHmx0d.js";import"./index-BNBy1IQK.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./index-BSoVaSRp.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-wgYgfTj9.js";import"./delete-Csnjywyc.js";import"./settings-NI8fkDUM.js";import"./NoData-En3Nogfa.js";import"./NoFilterResults-Dhcwn1zt.js";import"./index-BOdF7LF9.js";import"./IllustratedMessage-Doboq85l.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DO2GHw1V.js";import"./Input-B1pV19yo.js";import"./ResponsivePopoverCommon.css-DMiEES2t.js";import"./ValueStateMessage.css-YCjELpnO.js";import"./Suggestions.css-BZAnlsRN.js";import"./ListBoxItemGroupTemplate-5-RLXPsG.js";import"./ComboBoxItemGroup-DfJF5BDs.js";import"./ListItemBaseTemplate-CL-9zx8x.js";import"./Token-C7CCdRfL.js";import"./ScrollEnablement-CdFwVVtK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dvvLOc5F.js";import"./ToggleButton-REMyBJsR.js";import"./multiselect-all-Ch1Qp7qR.js";import"./SuggestionItem-CuJ_PC3L.js";import"./index-COeWnEcb.js";import"./Option-DDwjJ3Kz.js";import"./index-CAhGtq2M.js";import"./SegmentedButton-Cg1f73_M.js";import"./index-Bnp975NP.js";import"./Select-DjVfX_jp.js";import"./InvisibleMessage-tI82KiTk.js";import"./index-BXr-yJYg.js";import"./index-YKbtChLI.js";import"./index-D9WU53Lw.js";import"./index-DrzieGlz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRQYQGhf.js";import"./group-2-DS1ObAk7.js";import"./sort-descending-Cj6QG_j1.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGaKo2kM.js";import"./utils-B78a72Xy.js";import"./index-CEFR42mv.js";import"./index-BBdTafaa.js";import"./index-70052kQG.js";import"./navigation-down-arrow-C-XIYlAc.js";import"./navigation-right-arrow-DvOid56m.js";import"./navigation-right-arrow-b4NzmHT7.js";import"./useCurrentTheme-DoV6h_Xa.js";import"./index-BW8nkbFg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BJ6r15BN.js";import"./paper-plane-YWK2QeBd.js";import"./index-DL4fpI_G.js";import"./less-0zzPWnhW.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(p,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(m,{sourceState:"none",of:a}),`
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
`,t.jsx(s,{})]})}function _t(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{_t as default};
