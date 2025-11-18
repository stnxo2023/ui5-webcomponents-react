import{r as i,j as t,T as l}from"./iframe-GIjPgZz_.js";import{useMDXComponents as p}from"./index-Q5qZCDzK.js";import{M as u,a as h,m as f}from"./blocks-Brju_yKM.js";import"./Tag-CRHSyhrL.js";import"./index-BF6G6ZOp.js";import{F as d}from"./CommandsAndQueries-DAsamt73.js";import"./copy-DMIRXvtR.js";import{T as b}from"./TableOfContent-BQGjLsdI.js";import{C}from"./index-CInDY5TE.js";import{D}from"./BarChart.stories-CMMZ0mWV.js";import{D as y}from"./BulletChart.stories-c2LFrW9Y.js";import{D as g}from"./ColumnChart.stories-Bv0Sp5Bk.js";import{D as v}from"./ColumnChartWithTrend.stories-Ds64rzbi.js";import{D as x}from"./ComposedChart.stories-BfAgySIn.js";import{D as j}from"./DonutChart.stories-BmXg7Ouh.js";import{D as w}from"./LineChart.stories-DEGaQone.js";import{D as R}from"./PieChart.stories-CAtFEyhL.js";import{D as I}from"./RadarChart.stories-dd84Oq96.js";import{D as S}from"./RadialChart.stories-U-4pM3K4.js";import{D as T}from"./ScatterChart.stories-CLcypgEM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C_h8A4lQ.js";import"./sys-enter-2-CoTdl5fW.js";import"./alert-DH_fdUZB.js";import"./index-BnsMKJYG.js";import"./index-ByWeYssR.js";import"./index-ChNOA-bd.js";import"./Link-CUZ6JL-B.js";import"./index-V5lDTiuM.js";import"./index-BiD4GApv.js";import"./index-Xvv35NLG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dpx1zyp1.js";import"./addCustomCSSWithScoping-zdxF42yG.js";import"./index-DYv3qsbi.js";import"./Carousel-BYaU5GfU.js";import"./ScrollEnablement-BoZvgjLJ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B2lXc4fg.js";import"./slim-arrow-left-DNFvHaQc.js";import"./DemoProps-Ct3BImNf.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-HEGVTrfn.js";import"./ChartContainer-B7x01AOZ.js";import"./index-DVRaig0H.js";import"./useCancelAnimationFallback-rkmR5YM5.js";import"./YAxisTicks-mobp8fm9.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BpZEQcZT.js";import"./ChartDataLabel-wNAh1i8q.js";import"./useOnClickInternal-C7fRNIkT.js";import"./react-content-loader.es-CG9lasrg.js";import"./useIsRTL-DE6ac6kW.js";import"./useLongestYAxisLabel-D6KVePrB.js";import"./ComposedChart-CRWF8i2P.js";import"./Line-Ch2V_vaU.js";import"./Scatter-B0WqN-v6.js";import"./index-DbXRsxX2.js";import"./index-DR3O3a_3.js";import"./Placeholder-XzFb3LbA.js";import"./index-DxU5U4XF.js";const $=`# @ui5/webcomponents-react-charts

Chart library built on top of [recharts](https://recharts.org/) for ui5-webcomponents-react.

## Installation

\`\`\`bash
npm install @ui5/webcomponents-react-charts
\`\`\`

## Accessibility

Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application.

## React 19 support

To use this library with React 19 you have to override your \`react-is\` version to match your React version!

- **npm:**

  \`\`\`json
    "overrides": {
      "react-is": "19.1.0"
    },
  \`\`\`

- **yarn**

  \`\`\`json
    "resolutions": {
      "react-is": "19.1.0"
    },
  \`\`\`

## Static CSS

If you’ve enabled \`staticCSSInjected\` on the \`ThemeProvider\` component ([learn more here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-server-side-rendering--docs#add-to-existing-project)), make sure to also import the \`charts\` stylesheet. Otherwise, charts won’t be rendered correctly.

\`\`\`ts
import '@ui5/webcomponents-react-charts/styles.css';
\`\`\`

## Documentation

You can find an interactive documentation in our [Storybook](https://ui5.github.io/webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/UI5/webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/UI5/webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force -->
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Ft(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Ft as default};
