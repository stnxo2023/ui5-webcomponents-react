import{j as t}from"./iframe-DAr0L7Ho.js";import{useMDXComponents as n}from"./index-BXrVHVZ0.js";import{I as i,F as m}from"./CommandsAndQueries-BeoYsWXv.js";import{M as p,C as s}from"./blocks-n6i-MeAx.js";import"./Tag-D2SjXRRM.js";import"./index-BGz6B31k.js";import"./copy-C6zsdfpy.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C9SbKhrV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M443-WMN.js";import"./index-BtwPOFH6.js";import"./index-C9NDTaZE.js";import"./Link-QVFDyIvP.js";import"./index-Dnii_wG6.js";import"./index-DrSpdpj3.js";import"./index-BaCg4RzE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqKvYjZH.js";import"./addCustomCSSWithScoping-C9FZ5V1h.js";import"./index-Cs5MEWFI.js";import"./information-C8Iia5pL.js";import"./sys-enter-2-DFDqDf9l.js";import"./alert-CWzLh45M.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vwvMnJ1M.js";import"./delete-BrugbK3m.js";import"./settings-CLh5qR-P.js";import"./NoData-CtmD2qQW.js";import"./IllustratedMessage-CsWaV4UX.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-Df7CNS72.js";import"./index-D3xQZHsc.js";import"./index-DSQJdXON.js";import"./slim-arrow-down-nCdA9ato.js";import"./Input-FYQ1lVZC.js";import"./ResponsivePopoverCommon.css-B_B3XVCO.js";import"./ValueStateMessage.css-BKph1edC.js";import"./Suggestions.css-B5wtwLdE.js";import"./ListBoxItemGroupTemplate-CToQv3CG.js";import"./ComboBoxItemGroup-K7uaKsRv.js";import"./ListItemBaseTemplate-z4dCCnJ_.js";import"./Token-BwpnemjP.js";import"./ScrollEnablement-BCyvLKHN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B0DQtofr.js";import"./ToggleButton-D5V4_j9v.js";import"./SuggestionItem-BjLJwrjn.js";import"./index-KG7JmM-m.js";import"./Option-kFmvtdj7.js";import"./index-DcDEIoyS.js";import"./SegmentedButton-CtPD7--4.js";import"./index-qAMqYJh8.js";import"./Select-BBSIqCO7.js";import"./InvisibleMessage-B7Fzvrpv.js";import"./slim-arrow-down-CmpYS2rT.js";import"./index-DGrjxxz-.js";import"./index-BVhiHYP4.js";import"./index-B4_IFOpM.js";import"./index-BUYWOW0O.js";import"./IconDesign-DXd8PPVF.js";import"./filter-M721LxgO.js";import"./group-2-CK-kp2Q-.js";import"./sort-descending-DI7NHhBm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CaWLfx7-.js";import"./utils-CBU--jiJ.js";import"./index-C8mXVD-G.js";import"./index-DApcbHtK.js";import"./index-FvIchgpB.js";import"./navigation-down-arrow-bmtoD8GV.js";import"./navigation-right-arrow-DwuLZ8mF.js";import"./navigation-right-arrow-FbjwtCoS.js";import"./useCurrentTheme-BvDyIKbt.js";import"./index-DJzsGgTL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiIhYZmc.js";import"./paper-plane-BqYVZpon.js";import"./index-CDbXcF1o.js";import"./less-CxH7033X.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
