import{j as t}from"./iframe-D9bwNIEw.js";import{useMDXComponents as i}from"./index-C7Zm3EXU.js";import{I as n}from"./CommandsAndQueries-C_WJZTxK.js";import{M as m,C as p}from"./blocks-CdTlBqmb.js";import"./Tag-nAJAFGwR.js";import"./index-v7UWUzZA.js";import"./copy-C4qxUcFd.js";import{F as s}from"./Footer-rCYhEoIf.js";import"./PageNotFound-C24XQEWZ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CLnRqfAO.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DLbf1NX7.js";import"./index-DiWu_OvK.js";import"./index-BWceQhWo.js";import"./index-DX-an7LC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYx-bkvu.js";import"./addCustomCSSWithScoping-CTtTC3T9.js";import"./index-DpP2zBoF.js";import"./index-B5Io8E3V.js";import"./index-DYbVUH4U.js";import"./information-BBRTwn-C.js";import"./sys-enter-2-BgYzXgjA.js";import"./alert-Dvz5ATv0.js";import"./index-B24aDDF0.js";import"./Illustrations-CAUI_mYY.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Czt5as8-.js";import"./delete-BNMsGxXn.js";import"./settings-D-Mp7imo.js";import"./NoData-DTpV-vmY.js";import"./NoFilterResults-CAt1ldiT.js";import"./index-Bz7cIJno.js";import"./IllustratedMessage-BZ0vFLV2.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CGD-1joK.js";import"./Input-CYuZcn_p.js";import"./ResponsivePopoverCommon.css-CkiXBi7B.js";import"./ValueStateMessage.css-oZNuDkL6.js";import"./Suggestions.css-CMZyvU-Z.js";import"./ListBoxItemGroupTemplate-D6WAuS51.js";import"./ComboBoxItemGroup-SbXrXIXH.js";import"./ListItemBaseTemplate-CuVwXQqy.js";import"./Token-DONenf2t.js";import"./ScrollEnablement-C9fhfdHG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CLmJtC2x.js";import"./ToggleButton-Hap8L6WH.js";import"./multiselect-all-DA9VqXJi.js";import"./SuggestionItem-BeJwmeJ_.js";import"./index-B7JFUA5M.js";import"./Option-BoCXKUm2.js";import"./index-78TbmELJ.js";import"./SegmentedButton-CfF5Zavs.js";import"./index-CnThYA-n.js";import"./Select-BgIvcjPK.js";import"./InvisibleMessage-BbRDjx9q.js";import"./index-Cmx6PnM9.js";import"./index-pF_dZyqg.js";import"./index-CqsSgeDP.js";import"./index-CVcQTqV4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BQ8RHn1K.js";import"./group-2-B5dpY6uH.js";import"./sort-descending-DDi3yN4n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8EuiRxkG.js";import"./utils-uqv3geid.js";import"./index-CxdTHADh.js";import"./index-D8i2I1pU.js";import"./index-CjyQYo-y.js";import"./navigation-down-arrow-Ds7Luypq.js";import"./navigation-right-arrow-B6z7lltw.js";import"./navigation-right-arrow-BSWKpFds.js";import"./useCurrentTheme-BeLIUtpu.js";import"./index-BzcMPirF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Df4rTIOc.js";import"./paper-plane-DcuCs8QG.js";import"./index-D9PFjJIf.js";import"./less-DhdsysxP.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
