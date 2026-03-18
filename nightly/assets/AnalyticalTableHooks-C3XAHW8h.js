import{j as e}from"./iframe-ClKZoppV.js";import{useMDXComponents as t}from"./index-BBP-HRkM.js";import{M as a}from"./blocks-C6PUfAN7.js";import"./Tag-CnAKe81V.js";import"./index-Brz6Jamn.js";import{I as i}from"./CommandsAndQueries-BSg7r23V.js";import"./copy-rX2zRtcl.js";import{F as s}from"./Footer-BJ8-oElo.js";import"./PageNotFound-DkMfdMip.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2rgVrmf.js";import"./sys-enter-2-zNCrvlrA.js";import"./alert-DLSg1FPP.js";import"./Link-DLU4uHoZ.js";import"./index-BFw8ePED.js";import"./index-W9ERffOR.js";import"./index-DG_kdwr6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJ7j91qP.js";import"./addCustomCSSWithScoping-5Po78CSL.js";import"./index-Tx9EfJkS.js";import"./index-Dnwis2Yb.js";import"./index-CEU-nQxX.js";import"./index-kUQXQip-.js";import"./Illustrations-CjXAC4Lw.js";import"./i18n-defaults-CFWtSmu6.js";function n(l){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks"}),`
`,e.jsx(o.h1,{id:"plugin-hooks",children:"Plugin Hooks"}),`
`,e.jsx(i,{moduleName:"* as AnalyticalTableHooks",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks",defaultImport:!0}),`
`,e.jsxs(o.p,{children:["We're offering plugin hooks to extend the functionality of the ",e.jsx(o.code,{children:"AnalyticalTable"})," component. The following hooks are available:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-useannounceemptycells--docs",children:"useAnnounceEmptyCells"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-usef2celledit--docs",children:"useF2CellEdit"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-useindeterminaterowselection--docs",children:"useIndeterminateRowSelection"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-usemanualrowselect--docs",children:"useManualRowSelect"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-useoncolumnresize--docs",children:"useOnColumnResize"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-useorderedmultisort--docs",children:"useOrderedMultiSort"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/data-display-analyticaltable-plugin-hooks-userowdisableselection--docs",children:"useRowDisableSelection"})}),`
`]}),`
`,e.jsx(o.h2,{id:"add-a-plugin-hook-to-the-analyticaltable",children:"Add a Plugin Hook to the AnalyticalTable"}),`
`,e.jsxs(o.p,{children:["Import the hooks from the ",e.jsx(o.code,{children:"@ui5/webcomponents-react/AnalyticalTableHooks"})," package and incorporate them into your ",e.jsx(o.code,{children:"AnalyticalTable"})," component by adding them to the ",e.jsx(o.code,{children:"tableHooks"})," array."]}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Example:"})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import {useAnnounceEmptyCells} from '@ui5/webcomponents-react/AnalyticalTableHooks';

const tableHooks = [useAnnounceEmptyCells]; // this array should be memoized

//...

<AnalyticalTable {...otherProps} tableHooks={tableHooks} />
`})}),`
`,e.jsx(s,{})]})}function P(l={}){const{wrapper:o}={...t(),...l.components};return o?e.jsx(o,{...l,children:e.jsx(n,{...l})}):n(l)}export{P as default};
