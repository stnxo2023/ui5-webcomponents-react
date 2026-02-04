import{j as t}from"./iframe-C8JI7dEI.js";import{useMDXComponents as n}from"./index-Dy3dbavl.js";import{I as i,F as m}from"./CommandsAndQueries-CAJp8baB.js";import{M as p,C as s}from"./blocks-dOc4ZvhQ.js";import"./Tag-Bh9-KKtm.js";import"./index-BEdzbacm.js";import"./copy-vzDhs336.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DNrBsuYV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bk0DUMEL.js";import"./index-BeiYD_4I.js";import"./index-B3nw03BL.js";import"./Link-g_43hnwI.js";import"./index-x3EANzLS.js";import"./index-DM_OMODM.js";import"./index-BQN-IPa2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DOnTZlr2.js";import"./addCustomCSSWithScoping-CSnh5KZm.js";import"./index-g7zsKBLX.js";import"./information-DGVxJHTG.js";import"./sys-enter-2-iEzb33ry.js";import"./alert-BG5FVPBd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DfyBeYJW.js";import"./delete-CkvGN4OZ.js";import"./settings-DTnV51pQ.js";import"./NoData-C4moVh3C.js";import"./IllustratedMessage-Dz_KDnet.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BfTOhDS6.js";import"./index-DUcLpr5Z.js";import"./index-NkzgGKyJ.js";import"./slim-arrow-down-BHxd8Vqs.js";import"./Input-CWkKGtsV.js";import"./ResponsivePopoverCommon.css-CM_pgGQI.js";import"./ValueStateMessage.css-CpDWY9cw.js";import"./Suggestions.css-gOeHYbiv.js";import"./ListBoxItemGroupTemplate-CWnRQTn9.js";import"./ComboBoxItemGroup-DbaEJT2y.js";import"./ListItemBaseTemplate-DZdo7lxN.js";import"./Token-BGcNiMJN.js";import"./ScrollEnablement-C16y6Z4B.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-nR7zaAP7.js";import"./ToggleButton-CBJChvXE.js";import"./SuggestionItem-DQgH2h9g.js";import"./index-DVcqEpTx.js";import"./Option-CZqJWi3Y.js";import"./index-BQdPAoWH.js";import"./SegmentedButton-BRjgQDpe.js";import"./index-FYP3kV_G.js";import"./Select-CnZcEXKA.js";import"./InvisibleMessage-CdXIl2K3.js";import"./slim-arrow-down-D-3Ia4oG.js";import"./index-mMTThdtc.js";import"./index-Ca9TsDXb.js";import"./index-Cj7dIYUI.js";import"./index-B0N44tcI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-6QwyGlxR.js";import"./group-2-BS-n-QGS.js";import"./sort-descending-DJuTnB3z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CNbH8ce-.js";import"./utils-DR9e_77z.js";import"./index-Deuc0gVb.js";import"./index-BM_FCtPz.js";import"./index-Cg6f3q8s.js";import"./navigation-down-arrow-B0wv2RPc.js";import"./navigation-right-arrow-UvdD6bou.js";import"./navigation-right-arrow-CwFJJrbP.js";import"./useCurrentTheme-CgmTzasZ.js";import"./index-Ccr8UAcd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DK7LFoXt.js";import"./paper-plane-jP92lQH-.js";import"./index-ISXhP0ey.js";import"./less-zqCYDGGq.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
