import{j as t}from"./iframe-UvPIdInY.js";import{useMDXComponents as n}from"./index-C_wnFVs3.js";import{I as i,F as m}from"./CommandsAndQueries-aWAd2RXn.js";import{M as p,C as s}from"./blocks-D0ZGQgrL.js";import"./Tag-IR_ETKFS.js";import"./index-D9ZFZ6F-.js";import"./copy-BE3LAxqE.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-NClPDdr6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-O5JzLw5N.js";import"./index-Ba89z5vW.js";import"./index-mim0XNOQ.js";import"./Link-BLS11L9W.js";import"./index-B0iNMIwQ.js";import"./index-CXKBVYRd.js";import"./index-Bvo9-fQy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNxf-Cq6.js";import"./addCustomCSSWithScoping-7EyTrlnL.js";import"./index-D_al-J9d.js";import"./information-BPTpUfW-.js";import"./sys-enter-2-CWNypIDi.js";import"./alert-CSWOQ1yD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNZebN0l.js";import"./delete-Bym_CuQ_.js";import"./settings-jDUCJDFQ.js";import"./NoData-CBn9s1P8.js";import"./IllustratedMessage-B1dE8UDr.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DZ3pxCsC.js";import"./index-DO7Ar4RD.js";import"./index-BkfsPSLU.js";import"./slim-arrow-down-CRxJDNVT.js";import"./Input-Pl2nYyWp.js";import"./ResponsivePopoverCommon.css-BoaZ2bBu.js";import"./ValueStateMessage.css-byYAWo4s.js";import"./Suggestions.css-PTQQr1HI.js";import"./ListBoxItemGroupTemplate-DxT2oqBg.js";import"./ComboBoxItemGroup-CLKsYy_r.js";import"./ListItemBaseTemplate-Dx_Z0YEo.js";import"./Token-COE2mfsf.js";import"./ScrollEnablement-CroMdMI1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-n4LvxKbk.js";import"./ToggleButton-BR5G7Qz8.js";import"./SuggestionItem-DktTsUPu.js";import"./index-CGnLWb7c.js";import"./Option-CjyU-APj.js";import"./index-Bd9J232t.js";import"./SegmentedButton-BAUcRfoB.js";import"./index-lHbjqnZy.js";import"./Select-CuymjFC1.js";import"./InvisibleMessage-BEHZLLTD.js";import"./slim-arrow-down-CVwAqm1x.js";import"./index-CGJMk3cv.js";import"./index-C5TAYWLJ.js";import"./index-DJo0pI-N.js";import"./index-C819hH3W.js";import"./IconDesign-DXd8PPVF.js";import"./filter-LoYXXqh9.js";import"./group-2-BDjs1tne.js";import"./sort-descending-C01UE9Ps.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXPBHWGL.js";import"./utils-CkuEKQeg.js";import"./index-DeIw8vVn.js";import"./index-CkiSiMgq.js";import"./index-QMPfoD9h.js";import"./navigation-down-arrow-1mpPyuVY.js";import"./navigation-right-arrow-DS2ZZyTy.js";import"./navigation-right-arrow-CMjLnqRz.js";import"./useCurrentTheme-1LGZD4iD.js";import"./index-xGgYhz7_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-58ApOM2Q.js";import"./paper-plane-HxkV1_E_.js";import"./index-Cu85sTvP.js";import"./less-BL-B7Va5.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
