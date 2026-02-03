import{j as t}from"./iframe-CL0E0PWh.js";import{useMDXComponents as n}from"./index-Deybi7Kf.js";import{I as i,F as m}from"./CommandsAndQueries-CS7a2Ny4.js";import{M as p,C as s}from"./blocks-D7bkOkCE.js";import"./Tag-DqkevlzV.js";import"./index-CnAIuZ6O.js";import"./copy-ZUxcJ4wZ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DzqTEMVF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjZThSgP.js";import"./index-ChvCHLyh.js";import"./index-DKGx2Tou.js";import"./Link-opqw9zLH.js";import"./index-BmAVbjyV.js";import"./index-DNHIOaVp.js";import"./index-BjeAAycA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C2NuoADq.js";import"./addCustomCSSWithScoping-nc0b1DpN.js";import"./index-CDhMu5B6.js";import"./information-B3nD7cls.js";import"./sys-enter-2-C4Y2Nq9D.js";import"./alert-Dw8v7tUg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnAxgAVj.js";import"./delete-CEucf5yG.js";import"./settings-DZKOIFbW.js";import"./NoData-El9prw2w.js";import"./IllustratedMessage-D0QYzomd.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DQRO6FcQ.js";import"./index-CghszLxp.js";import"./index-BbltPikc.js";import"./slim-arrow-down-DhSa9dLQ.js";import"./Input-DUkmGF5S.js";import"./ResponsivePopoverCommon.css-CGTYgw9i.js";import"./ValueStateMessage.css-C7zqpLFs.js";import"./Suggestions.css-D1MvItNb.js";import"./ListBoxItemGroupTemplate-DduLgS-n.js";import"./ComboBoxItemGroup-B3VqZwL7.js";import"./ListItemBaseTemplate-DcYxvehU.js";import"./Token-CHhkGCwz.js";import"./ScrollEnablement-DJDUaKRX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BFyRiZ3I.js";import"./ToggleButton-nPzNF8JZ.js";import"./SuggestionItem-dwEDuAnB.js";import"./index-CWugch4w.js";import"./Option-YfFjlyIk.js";import"./index-ChNtVMH3.js";import"./SegmentedButton-BGPljDMM.js";import"./index-DuGAOmpy.js";import"./Select-BcB_Egz7.js";import"./InvisibleMessage-To8J9FEL.js";import"./slim-arrow-down-DsQgB3Sq.js";import"./index-Bw1B3i5S.js";import"./index-BvecTUj_.js";import"./index-CWBSa9lg.js";import"./index-DyNXbAXI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pPFeO57V.js";import"./group-2-DswFkUgQ.js";import"./sort-descending-Cp4PHVoq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BFAZrbzu.js";import"./utils-C6v86EjJ.js";import"./index-xBWwCLsb.js";import"./index-Ds_mffnJ.js";import"./index-CSOTLQaF.js";import"./navigation-down-arrow-BBpx7i5v.js";import"./navigation-right-arrow-BtI6edzV.js";import"./navigation-right-arrow-BjmboBdq.js";import"./useCurrentTheme-BWHA45hS.js";import"./index-E4EGWXgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-g6jee3iH.js";import"./paper-plane-9DGcdM4H.js";import"./index-CwsNlV8s.js";import"./less-DCgV-mbR.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
