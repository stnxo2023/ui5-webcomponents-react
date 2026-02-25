import{j as t}from"./iframe-BHlEgbZD.js";import{useMDXComponents as n}from"./index-DuWPJPdo.js";import{I as i,F as m}from"./CommandsAndQueries-CRy7DgFq.js";import{M as p,C as s}from"./blocks-BZ1_Gb0n.js";import"./Tag-CUIBDfjO.js";import"./index-DMcN3ohr.js";import"./copy-Ds19teD5.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-ByzE4p5Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-57xnhTbk.js";import"./index-D8Q0xw5Q.js";import"./index-CPQEcn_1.js";import"./Link-DdeM_yx0.js";import"./index-DXZq7O0l.js";import"./index-COEmfUFW.js";import"./index-x01lEzby.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbwzLluT.js";import"./addCustomCSSWithScoping-BezKsk6D.js";import"./index-2QbIapUz.js";import"./information-Cbg1Tz52.js";import"./sys-enter-2-Z2Vy22vQ.js";import"./alert-BcFaqecl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CC6hyO-N.js";import"./delete-4ZvrUKjO.js";import"./settings-DG_uwOtb.js";import"./NoData-DYxHoJfA.js";import"./IllustratedMessage-udF9mWrD.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CbnIbvhX.js";import"./index-DN6hq5_h.js";import"./index-BT3cRVz2.js";import"./slim-arrow-down-36KS2JIw.js";import"./Input-BOFtXl-H.js";import"./ResponsivePopoverCommon.css-DVGkEwPu.js";import"./ValueStateMessage.css-BcukUnSJ.js";import"./Suggestions.css-oxI77au-.js";import"./ListBoxItemGroupTemplate-CEjJ4Crf.js";import"./ComboBoxItemGroup-C_SgaNix.js";import"./ListItemBaseTemplate-D1qgX7Z0.js";import"./Token-BULKmOKE.js";import"./ScrollEnablement-Cu7uqZ0X.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CeF-gQpE.js";import"./ToggleButton-DYZAZrxx.js";import"./SuggestionItem-BZywVYEn.js";import"./index-BEzWpt9n.js";import"./Option-DaLzGShP.js";import"./index-BTRoGroB.js";import"./SegmentedButton-DcSgMcr8.js";import"./index-BP72XLPJ.js";import"./Select-zEDuWLFW.js";import"./InvisibleMessage-OeUWQ5Ye.js";import"./slim-arrow-down-DLrArs5r.js";import"./index-DCYT0nIY.js";import"./index-CvJhvJHe.js";import"./index-D4qBUSpf.js";import"./index-C57Z4SS3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CC3D5stC.js";import"./group-2-CAC2yRw6.js";import"./sort-descending-Ct46rwrC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3QDW9YY.js";import"./utils-Bkxa81Gm.js";import"./index-h4KD2Npg.js";import"./index-ChBdg0CU.js";import"./index-Dxaffyfy.js";import"./navigation-down-arrow-CUMLWhBn.js";import"./navigation-right-arrow-D2ty4le0.js";import"./navigation-right-arrow-DEzFZZdH.js";import"./useCurrentTheme-CTTdfk_h.js";import"./index-Db_zW0W2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dp2bM3ZO.js";import"./paper-plane-wrAGSNsE.js";import"./index-0vEfSv_1.js";import"./less-D9a_VPsv.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
