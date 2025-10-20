import{j as t}from"./iframe-7SE3nFh2.js";import{useMDXComponents as n}from"./index-C0FWbpZL.js";import{I as i,F as m}from"./CommandsAndQueries-BztwtTDr.js";import{M as p,C as s}from"./blocks-BJKQ4CAZ.js";import"./Tag-CAr8yJM3.js";import"./index-DcFj-mpl.js";import"./copy-CDZIXxHa.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-5KmaRjUl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BdnA4cG1.js";import"./index-DZIYhziJ.js";import"./index-BH5SLEfd.js";import"./Link-DJshYrFL.js";import"./index-CJza0w__.js";import"./index-CHnd9ZVx.js";import"./index-cZBRAzkp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bx3Mb7HN.js";import"./addCustomCSSWithScoping-CrtLyOIc.js";import"./index-CZm6iJJ6.js";import"./information-CEHY-zK8.js";import"./sys-enter-2-Db6aMDI3.js";import"./alert-iGUotenY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DX_cHiRh.js";import"./delete-DvpuJF5J.js";import"./settings-D2UzRPAT.js";import"./NoData-BCcG8w18.js";import"./IllustratedMessage-Dil2N_hm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CbSgwdhQ.js";import"./index-Bu5BEf5E.js";import"./index-CvKc0QoP.js";import"./slim-arrow-down-BERkBWfL.js";import"./Input-kEzXj9c6.js";import"./ResponsivePopoverCommon.css-DqKEq-kc.js";import"./ValueStateMessage.css-wZQPf3zp.js";import"./Suggestions.css-DT0Rp6yR.js";import"./ListBoxItemGroupTemplate-mAb34mFu.js";import"./ComboBoxItemGroup-D6FTKSzF.js";import"./ListItemBaseTemplate-bpaX827C.js";import"./Token-D_Njw8ms.js";import"./ScrollEnablement-u1O_vcM6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-5gZgEeYH.js";import"./ToggleButton-Cdz6JUWa.js";import"./SuggestionItem-Cqdhpmzk.js";import"./index-B9dV6-hD.js";import"./Option-CLrwwL2p.js";import"./index-eRJ2H-45.js";import"./SegmentedButton-Bj_PgquH.js";import"./index-CehLK0E0.js";import"./Select-dx2eK6Cc.js";import"./InvisibleMessage-BpijQ7HL.js";import"./slim-arrow-down-BKj1QpKR.js";import"./index-C_8wufNy.js";import"./index-DRT-RGQF.js";import"./index-Dx0AFnS0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlvRaiGC.js";import"./group-2-Bh0Ip3fO.js";import"./sort-descending-C2lI-VAa.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BzfZ0HZ7.js";import"./utils-7WkdhtMP.js";import"./index-Bk-K0ke_.js";import"./index-C14sIMtK.js";import"./index-r--j9iEI.js";import"./navigation-down-arrow-Bok7EDK6.js";import"./navigation-right-arrow-CSEs046N.js";import"./navigation-right-arrow-Cssv535x.js";import"./useCurrentTheme-CSmhjyR7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DKaDhcRF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DTz5BFmM.js";import"./paper-plane-CNwDjI7Y.js";import"./index-dbJ2BFy5.js";import"./less-D_HisN9f.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
