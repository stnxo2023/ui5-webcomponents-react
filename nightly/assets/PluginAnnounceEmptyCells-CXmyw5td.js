import{j as t}from"./iframe-D74d3IUT.js";import{useMDXComponents as n}from"./index-BzFpXofy.js";import{I as i,F as m}from"./CommandsAndQueries-CXtjs1YA.js";import{M as p,C as s}from"./blocks-CXGWO-SS.js";import"./Tag-CGDi5rN6.js";import"./index-D9Jimze5.js";import"./copy-B52gZhj1.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CRUZhyOz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dp6BwZZH.js";import"./index-BAV2Dqb-.js";import"./index-nz5M1FvK.js";import"./Link-BnKuAsKS.js";import"./index-CGofV6Bd.js";import"./index-CBnDxC_O.js";import"./index-CUp4_VMY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI0ZtE-_.js";import"./addCustomCSSWithScoping-DX0DY0tV.js";import"./index-B6nGMvY0.js";import"./information-CzZVG8MP.js";import"./sys-enter-2-Bo9ZeWqv.js";import"./alert-BpouBdE8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BP3F7SzG.js";import"./delete-YUY4KlW5.js";import"./settings-DpOnwkHb.js";import"./NoData-B2ZeHRsw.js";import"./IllustratedMessage-CD7-3bUQ.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-D8YrAv4w.js";import"./index-B4EupoFR.js";import"./index-GzctAGg6.js";import"./slim-arrow-down-CJ7jhAk1.js";import"./Input-D3Xm66Jc.js";import"./ResponsivePopoverCommon.css-Bm5g59rh.js";import"./ValueStateMessage.css-CNhskv9k.js";import"./Suggestions.css-BammTqMf.js";import"./ListBoxItemGroupTemplate-Bnq694A2.js";import"./ComboBoxItemGroup-CTUZloft.js";import"./ListItemBaseTemplate-BtNRlpdq.js";import"./Token-9UX-S350.js";import"./ScrollEnablement-Bvs_TGN7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-S82lpBYr.js";import"./ToggleButton-BCthjRIl.js";import"./SuggestionItem-BD6hvrsk.js";import"./index-BTq-cNvk.js";import"./Option-c6rQ8KOO.js";import"./index-BeFwl-qO.js";import"./SegmentedButton-DsOBeHfP.js";import"./index-C2WGUbBO.js";import"./Select-Bl9KvdRX.js";import"./InvisibleMessage-BT-HA0qk.js";import"./slim-arrow-down-DDEX6AaA.js";import"./index-BGhEWWIW.js";import"./index-Bj1y_nF2.js";import"./index-BAajSuv0.js";import"./index-BJZ4mF5F.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CZdxiPUv.js";import"./group-2-x2wNxahT.js";import"./sort-descending-DblnClo_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CoiaLP2s.js";import"./utils-BPA4Vsqc.js";import"./index-DrVyi1bm.js";import"./index-Db-Q1TXS.js";import"./index-C1aOp4aZ.js";import"./navigation-down-arrow-ACQ1IIiZ.js";import"./navigation-right-arrow-C6rkELWM.js";import"./navigation-right-arrow-DRqzrNVR.js";import"./useCurrentTheme-DcwwM3Ir.js";import"./index-DelixGbO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2mdH9Ar.js";import"./paper-plane-BAJmhSNp.js";import"./index-DmuQ-N4b.js";import"./less-DFyAY_Yv.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
