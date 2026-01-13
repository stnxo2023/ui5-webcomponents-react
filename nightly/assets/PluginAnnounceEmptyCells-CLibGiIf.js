import{j as t}from"./iframe-BtOtRMtR.js";import{useMDXComponents as n}from"./index-CgtvsECt.js";import{I as i,F as m}from"./CommandsAndQueries-CKs7dFOK.js";import{M as p,C as s}from"./blocks-D9wmcLvH.js";import"./Tag-C9nMOu5c.js";import"./index-Cb_okFKb.js";import"./copy-CGNUo2FO.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DC1S45-c.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyCpVDUu.js";import"./index-BG_zbJpP.js";import"./index-CSfaSQyt.js";import"./Link-BYt0ZGVT.js";import"./index-BRaE6xYn.js";import"./index-Ch2focQy.js";import"./index-Ddk7eeGJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4u4TRFh7.js";import"./addCustomCSSWithScoping-Ji9yZ6HK.js";import"./index-B8f2IgEG.js";import"./information-D5w9Hrcs.js";import"./sys-enter-2-Bq4TRZEz.js";import"./alert-CYL_IdM5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B5N0rpWl.js";import"./delete-Dzj5xyP-.js";import"./settings-C1l-VMhl.js";import"./NoData-CTl2bbKy.js";import"./IllustratedMessage-CyKYIGdr.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BlF0uNyR.js";import"./index-fgWDWmbq.js";import"./index-CguI4hxx.js";import"./slim-arrow-down-DmlnfCIk.js";import"./Input-DW6Mcq6Q.js";import"./ResponsivePopoverCommon.css-B0MfPGYJ.js";import"./ValueStateMessage.css-Cntln-gq.js";import"./Suggestions.css-C1P2f68k.js";import"./ListBoxItemGroupTemplate-Bu8Sz1bH.js";import"./ComboBoxItemGroup-B9ta1tYL.js";import"./ListItemBaseTemplate-PfJZ8SeL.js";import"./Token-jR5FcYSU.js";import"./ScrollEnablement-CNs89SnW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DSZwl3pY.js";import"./ToggleButton-BD7M-6Sc.js";import"./SuggestionItem-0mZFDaLy.js";import"./index-DXTzsKvp.js";import"./Option-BymN5BMD.js";import"./index-Ch4bYq3S.js";import"./SegmentedButton-KViA7rXu.js";import"./index-Cba0AExI.js";import"./Select-aAJtN928.js";import"./InvisibleMessage-CJx3E7ve.js";import"./slim-arrow-down-jTdyHR1Z.js";import"./index-CwtPYikJ.js";import"./index-CQANsFRb.js";import"./index-DO0bWOhc.js";import"./index-Db2BTFt5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DamfrtCC.js";import"./group-2-DpZVik8-.js";import"./sort-descending-B-A3hXvE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B1qY8nay.js";import"./utils-CqrUR1Jn.js";import"./index-jphnT_hb.js";import"./index-C84K25j6.js";import"./index-DgTNmU-2.js";import"./navigation-down-arrow-BChKVsM3.js";import"./navigation-right-arrow-Fi9U-iyQ.js";import"./navigation-right-arrow-Du-S1bwS.js";import"./useCurrentTheme-BRCDCnqM.js";import"./index-c-S2g_Xv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6S1xN6P.js";import"./paper-plane-CzloYF4y.js";import"./index-C5HC-scy.js";import"./less-9cA8yvZw.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
