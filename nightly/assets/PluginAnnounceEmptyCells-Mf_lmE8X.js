import{j as t}from"./iframe-BWTquNFU.js";import{useMDXComponents as i}from"./index-CkXQL6rW.js";import{I as n}from"./CommandsAndQueries-Cu22SJgH.js";import{M as m,C as p}from"./blocks-24keuhPe.js";import"./Tag-DhoajqAo.js";import"./index-B59i8xiW.js";import"./copy-iNwkfzwy.js";import{F as s}from"./Footer-BPNOTf-P.js";import"./PageNotFound-CJcyxQek.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CceKJBUk.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BecYEhoc.js";import"./index-BTohTOow.js";import"./index-scscec-x.js";import"./index-CKCv8CV3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Byoi_UeP.js";import"./addCustomCSSWithScoping-DP3CaadD.js";import"./index-ChJmkZbc.js";import"./index-NVW8xIV5.js";import"./index-kSfV8vRJ.js";import"./information-DMtPZuOJ.js";import"./sys-enter-2-C7vs2MPC.js";import"./alert-CcklZ67u.js";import"./index-DVrCMdXJ.js";import"./Illustrations-CJfJJGnG.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B6ivdHEj.js";import"./delete-BNE5XMIg.js";import"./settings-CGivgX1w.js";import"./NoData-CwgA4KNO.js";import"./NoFilterResults-CjGZNsJH.js";import"./index-7QDuP57_.js";import"./IllustratedMessage-KAkdjXyB.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BTVzNzNo.js";import"./Input-EE71Gmfs.js";import"./ResponsivePopoverCommon.css-BbZHRZZG.js";import"./ValueStateMessage.css-CUwbWuU7.js";import"./Suggestions.css-FQe1Xc9l.js";import"./ListBoxItemGroupTemplate-DAbpQNBX.js";import"./ComboBoxItemGroup-uxvAKKGS.js";import"./ListItemBaseTemplate-BRrEqjCC.js";import"./Token-DxQtXUKH.js";import"./ScrollEnablement-BoYZgYHz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DbGrkhZV.js";import"./ToggleButton-DBro7jvb.js";import"./multiselect-all-UT7N0_Ik.js";import"./SuggestionItem-CUIZagcj.js";import"./index-cRHDVvDp.js";import"./Option-IvW7tMmY.js";import"./index-C0JhBXt8.js";import"./SegmentedButton-BRJfaiG-.js";import"./index-BEM4UPY5.js";import"./Select-CL4tjDW6.js";import"./InvisibleMessage-D7OVBpmG.js";import"./index-Byo4t2sh.js";import"./index-C8s3OvV9.js";import"./index-C99f75Vc.js";import"./index-B1xXM3b0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlTD91fV.js";import"./group-2-C6DMt6zv.js";import"./sort-descending-D1j_C10r.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcsrfPcf.js";import"./utils-HKL5q2BK.js";import"./index-Bw8aKIth.js";import"./index-BOJiPgTr.js";import"./index-CiXNavjP.js";import"./navigation-down-arrow-BnFi5ZgR.js";import"./navigation-right-arrow-KPC1gtG0.js";import"./navigation-right-arrow-C9M9ERbI.js";import"./useCurrentTheme-DeEojqvR.js";import"./index-C_SzIttf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D1j5P2oj.js";import"./paper-plane-Dnn16QvC.js";import"./index-C8RmX3Qo.js";import"./less-rIvjl3NN.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
