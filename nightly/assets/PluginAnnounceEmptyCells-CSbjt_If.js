import{j as t}from"./iframe-BsSawXP0.js";import{useMDXComponents as n}from"./index-DRH2teYu.js";import{I as i,F as m}from"./CommandsAndQueries-iaa-8XF0.js";import{M as p,C as s}from"./blocks-CXfuXrzt.js";import"./Tag-CNlUSOaG.js";import"./index-Dmc2-Gsy.js";import"./copy-DbiVl2cO.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DLYXARwu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DXS7E1yl.js";import"./index-BhcqlC9n.js";import"./index-Crhu2fjF.js";import"./Link-DnipqSX8.js";import"./index-ZJs7Cg1o.js";import"./index-ButdZwwN.js";import"./index-CaYKw0vF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Czipwrtn.js";import"./addCustomCSSWithScoping-BEgtXhqx.js";import"./index-BP2Csnbb.js";import"./information-BFVQ2hiO.js";import"./sys-enter-2-BXLoixfD.js";import"./alert-KY-hq2Su.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CEZH4ER0.js";import"./delete-ButlRKIL.js";import"./settings-DgaBkmev.js";import"./NoData-DyY0YPHN.js";import"./IllustratedMessage-DkFb21Jf.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-COTCkDuw.js";import"./index-Clu4yb0B.js";import"./index-CM8zKut5.js";import"./slim-arrow-down-BWzEg3vj.js";import"./Input-CHK-azg7.js";import"./ResponsivePopoverCommon.css-BuCRiGSq.js";import"./ValueStateMessage.css-CxbYYYMV.js";import"./Suggestions.css-DdsM6PD2.js";import"./ListBoxItemGroupTemplate-B-3mDJyE.js";import"./ComboBoxItemGroup-Dw_d3sOW.js";import"./ListItemBaseTemplate-CDcS09wQ.js";import"./Token-HmaRVBR5.js";import"./ScrollEnablement-D01WJw12.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DOvPo6gu.js";import"./ToggleButton-CxUiYm3U.js";import"./SuggestionItem-CbONpgrM.js";import"./index-BPcqLkVl.js";import"./Option-4QxAwSib.js";import"./index-DjGN7Yic.js";import"./SegmentedButton-gHDmBFsf.js";import"./index-BDNR9QnW.js";import"./Select-oYRWGBUT.js";import"./InvisibleMessage-B4KGUE1s.js";import"./slim-arrow-down-CJL4Ie8a.js";import"./index-BfglwwIM.js";import"./index-DtFzJEN2.js";import"./index-BsGDlDgM.js";import"./index-Weu8oCaJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BanJ6C6c.js";import"./group-2-B-E_bDzf.js";import"./sort-descending-Cvr30z_m.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BSbJCBkK.js";import"./utils-D1-fGTJi.js";import"./index-DPM6PqHk.js";import"./index-BZY_Xaz9.js";import"./index-DG65F-rj.js";import"./navigation-down-arrow-CQzMrHK9.js";import"./navigation-right-arrow-Ezz6Fe0V.js";import"./navigation-right-arrow-PF4vsXVe.js";import"./useCurrentTheme-DCDo5qP3.js";import"./index-Cl3MWrIl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D81DTT8f.js";import"./paper-plane-nbV5jTsh.js";import"./index-Cbnxib-d.js";import"./less-D0n2-PF4.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
