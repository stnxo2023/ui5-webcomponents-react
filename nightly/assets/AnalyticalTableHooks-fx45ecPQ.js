import{j as e}from"./iframe-D-ZP0dY4.js";import{u as n,M as t}from"./blocks-DdKopPSC.js";import"./Tag-CNlwwDmZ.js";import"./index-C04kZKw9.js";import{I as i}from"./CommandsAndQueries-BDnj74c9.js";import"./copy-HW_Kxlr2.js";import{F as s}from"./Footer-BLTkp7nE.js";import"./PageNotFound-DiPPX7Ze.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BKIP_Ra_.js";import"./sys-enter-2-vX0Cm-qe.js";import"./alert-Bu79oBCI.js";import"./Link-06g1SNw0.js";import"./index-CF2Hkn6J.js";import"./index-BAothMF0.js";import"./index-eZWdMAeg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxeCNWRQ.js";import"./addCustomCSSWithScoping-DSa3TmU8.js";import"./index-BAH7VHrp.js";import"./index-U3Dsw_H6.js";import"./index-Dx3fp6V7.js";import"./index-Tnz3nQrD.js";import"./Illustrations-DQsCRA8v.js";import"./i18n-defaults-CFWtSmu6.js";function l(a){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Data Display / AnalyticalTable / Plugin Hooks"}),`
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
`,e.jsx(s,{})]})}function F(a={}){const{wrapper:o}={...n(),...a.components};return o?e.jsx(o,{...a,children:e.jsx(l,{...a})}):l(a)}export{F as default};
