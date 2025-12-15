import{j as t}from"./iframe-CMRYeg3m.js";import{useMDXComponents as n}from"./index-d3aogLFm.js";import{I as i,F as m}from"./CommandsAndQueries-DpsRc0ye.js";import{M as p,C as s}from"./blocks-B--XNN4Z.js";import"./Tag-DLJpwqrU.js";import"./index-X7c2uI6J.js";import"./copy-O4x8gwVx.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-NcPcxP0m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt6RwhRx.js";import"./index-BVsKPF1I.js";import"./index-csz7EJl3.js";import"./Link-Bxvjqypp.js";import"./index-PIXQ40x8.js";import"./index-Ca5PVHn4.js";import"./index-DVEpH7N4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-f1AMIobt.js";import"./addCustomCSSWithScoping-D9ZK4KgK.js";import"./index-TGfnZuTz.js";import"./information-2R4wAWn8.js";import"./sys-enter-2-h25AZJAc.js";import"./alert-EuMgWuer.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CbVSGA1k.js";import"./delete-1RwfcjcT.js";import"./settings-C5H9S65V.js";import"./NoData-CW7TgSmL.js";import"./IllustratedMessage-CGTR8uP0.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DAZPTCPU.js";import"./index-Dq8e-1UW.js";import"./index-GkNgVDAt.js";import"./slim-arrow-down-CmvdQO7m.js";import"./Input-2Nygg4-q.js";import"./ResponsivePopoverCommon.css-CqBO6fZ3.js";import"./ValueStateMessage.css-D51R__Qj.js";import"./Suggestions.css-C4L82WYT.js";import"./ListBoxItemGroupTemplate-C-1UKkDb.js";import"./ComboBoxItemGroup-C51CY9Wh.js";import"./ListItemBaseTemplate-qOSQ4Fnc.js";import"./Token-CoqMARg0.js";import"./ScrollEnablement-CHUJ-chc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ntD8YpfZ.js";import"./ToggleButton-DQ-1wEim.js";import"./SuggestionItem-BnR17Fyw.js";import"./index-BkexHsEY.js";import"./Option-DybeogHQ.js";import"./index-BHc0UMTZ.js";import"./SegmentedButton-Dezgm7cC.js";import"./index-BB_dZdK5.js";import"./Select-CAZuopb2.js";import"./InvisibleMessage-DVgio3fu.js";import"./slim-arrow-down-B1aQoQzR.js";import"./index-e5pHMgA1.js";import"./index-D_E6BFUk.js";import"./index-C1Exyb_f.js";import"./index-8DOGvRkG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cb9Y6gPy.js";import"./group-2-Cea3ryU3.js";import"./sort-descending-rBOFvsCA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-kdPvsB1k.js";import"./utils-CgBfQCBk.js";import"./index-jc4_TuNU.js";import"./index-BPBucl4y.js";import"./index-BewwXtWC.js";import"./navigation-down-arrow-BIKGPDMD.js";import"./navigation-right-arrow-gSRQ7cEs.js";import"./navigation-right-arrow-DT95PVm7.js";import"./useCurrentTheme-DhCErNXe.js";import"./index-QpjC2w_s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-G_RHHN41.js";import"./paper-plane-DEFfxY-Y.js";import"./index-DTxz0DV7.js";import"./less-B-qcBapJ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
