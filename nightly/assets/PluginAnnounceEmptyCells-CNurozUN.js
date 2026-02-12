import{j as t}from"./iframe-DQ6p6C4w.js";import{useMDXComponents as n}from"./index-PJ7eIANP.js";import{I as i,F as m}from"./CommandsAndQueries-D4Earqxe.js";import{M as p,C as s}from"./blocks-DzLxfDF_.js";import"./Tag-maX3wI_O.js";import"./index-DMdtpgB4.js";import"./copy-DK9nMyWi.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-7SKfaEhF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyLo2c5y.js";import"./index-BX38vZ_H.js";import"./index-Crvp2P38.js";import"./Link-C5vNyymE.js";import"./index-BTeE4XW8.js";import"./index-GGF-6yBD.js";import"./index-BiYiYWPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEFxvwKp.js";import"./addCustomCSSWithScoping-D-NBvgXV.js";import"./index-BBaHTUom.js";import"./information-DP-BBVKe.js";import"./sys-enter-2-CHLEBxpk.js";import"./alert-DwSet8Gr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BM0AAgbR.js";import"./delete-DMRotf9j.js";import"./settings-Qlfl2--E.js";import"./NoData-CG8Gfnlk.js";import"./IllustratedMessage-Bk7WaAKk.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C6kdXBz1.js";import"./index-Be9p3z4u.js";import"./index-SfO0yU3c.js";import"./slim-arrow-down-I4aiGrie.js";import"./Input-9nOAsBMy.js";import"./ResponsivePopoverCommon.css-MVZLdMIH.js";import"./ValueStateMessage.css-CkUI3rSD.js";import"./Suggestions.css-Aftn0Ezj.js";import"./ListBoxItemGroupTemplate-CGyPTJpI.js";import"./ComboBoxItemGroup-DzFWuHFZ.js";import"./ListItemBaseTemplate-BQzetuJF.js";import"./Token-BvnOnelq.js";import"./ScrollEnablement-B8wTVu_K.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CNdPnkVA.js";import"./ToggleButton-FZnOi6HL.js";import"./SuggestionItem-B0rlLjtX.js";import"./index-DeVILtND.js";import"./Option-CqqhCzJo.js";import"./index-CWil2bGL.js";import"./SegmentedButton-BexC6deI.js";import"./index-BDyF9JTe.js";import"./Select-BaxOqbyI.js";import"./InvisibleMessage-24SaMl40.js";import"./slim-arrow-down-BD-D-jTM.js";import"./index-CqeSCPN8.js";import"./index-CSCE2WuM.js";import"./index-CafJ-VFs.js";import"./index-BFcP-RXU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-EKKbfFKu.js";import"./group-2-BNxeZZD0.js";import"./sort-descending-h8gj2BbX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlP9LYsR.js";import"./utils-CjCmjhy5.js";import"./index-DDn9deUd.js";import"./index-B8YKbRO9.js";import"./index-YsTawKKr.js";import"./navigation-down-arrow-CrnE_ZSF.js";import"./navigation-right-arrow-BufBbj_8.js";import"./navigation-right-arrow-fYJGhKbp.js";import"./useCurrentTheme-B7yEjOjC.js";import"./index-COiOOqBC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DUgzYJYd.js";import"./paper-plane-BuT7OBrZ.js";import"./index-iSaIGODj.js";import"./less-CywBv2zo.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
