import{j as t}from"./iframe-CtwEriWb.js";import{useMDXComponents as n}from"./index-D-9u9m_4.js";import{I as i,F as m}from"./CommandsAndQueries-CD3VJPSk.js";import{M as p,C as s}from"./blocks-BFYACaFi.js";import"./Tag-Dp8ZKpct.js";import"./index-DaHRprUe.js";import"./copy-DmD13pno.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D0QPuNZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5ngcH8h.js";import"./index-Bt4v4M6X.js";import"./index-DDmWoC0P.js";import"./Link-D_PuN-3O.js";import"./index-zgbQGCMD.js";import"./index-C3uSNLH8.js";import"./index-wzivwl9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Lem94xA1.js";import"./addCustomCSSWithScoping-BBQMnugZ.js";import"./index-CeAyP2ez.js";import"./information-D5ukCsPX.js";import"./sys-enter-2-BPp72tdn.js";import"./alert-CQAVluiD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-6iJPqvCF.js";import"./delete-CHjtmoxe.js";import"./settings-CJBNJogN.js";import"./NoData-DjTzPZvK.js";import"./IllustratedMessage-8ePIRJ01.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D84oURGo.js";import"./index-Dz0HvdK8.js";import"./index-D9Ds84en.js";import"./slim-arrow-down-Dhjx46M4.js";import"./Input-Ey3vMJ2p.js";import"./ResponsivePopoverCommon.css-BlgaMAH_.js";import"./ValueStateMessage.css-BCs7SZVo.js";import"./Suggestions.css-Ca_9frEg.js";import"./ListBoxItemGroupTemplate-BmW_TD1a.js";import"./ComboBoxItemGroup-D9S-hZmS.js";import"./ListItemBaseTemplate-Dr-kfIJ7.js";import"./Token-C9kw3GgY.js";import"./ScrollEnablement-BQjS8DnP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRntQYAQ.js";import"./ToggleButton-Bf-SN9R0.js";import"./SuggestionItem-C8LVLSQl.js";import"./index-BF7FIsg5.js";import"./Option-D4al2hZS.js";import"./index-C_S6aGGA.js";import"./SegmentedButton-2upM-MiM.js";import"./index-DmNK5fut.js";import"./Select-BcqBMzHp.js";import"./InvisibleMessage-BGhqftdJ.js";import"./slim-arrow-down-C-J0cPgu.js";import"./index-DXGpSx7n.js";import"./index-C7Tf8xop.js";import"./index-Dx48TTVd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VUJDD7Ck.js";import"./group-2-CA3SU2Z-.js";import"./sort-descending-rYpXwTDK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DkX--lPA.js";import"./utils-Ctkq60uV.js";import"./index-DOMVXnxq.js";import"./index-BrR9oCjZ.js";import"./index-DayvUZ6b.js";import"./navigation-down-arrow-QusIkm2p.js";import"./navigation-right-arrow-B5vKiLuI.js";import"./navigation-right-arrow-D8wA0KPb.js";import"./useCurrentTheme-BTKV_yhV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HRFMiwNd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BtiMpto1.js";import"./paper-plane-DvM7Xu8p.js";import"./index-DXgoomGI.js";import"./less-Bi02PNvH.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
