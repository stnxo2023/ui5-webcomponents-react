import{r as i,j as t,O as l}from"./iframe-BQw543fO.js";import{useMDXComponents as p}from"./index-BxhW0hRZ.js";import{M as u,a as h,n as f}from"./blocks-DVt0JaPi.js";import"./Tag-sELDi5ig.js";import"./index-DRKxBO9I.js";import{F as d}from"./CommandsAndQueries-C4NyJWbb.js";import"./copy-9tJvlpXS.js";import{T as b}from"./TableOfContent-BV0A-3x_.js";import{C}from"./index-9moYoQoC.js";import{D}from"./BarChart.stories-iyB7rYFu.js";import{D as y}from"./BulletChart.stories-DGgXXqZI.js";import{D as g}from"./ColumnChart.stories-D4l7eGKS.js";import{D as v}from"./ColumnChartWithTrend.stories-CRq1msqL.js";import{D as x}from"./ComposedChart.stories-DQ7OjrFB.js";import{D as j}from"./DonutChart.stories-DaWdNiul.js";import{D as w}from"./LineChart.stories-DKGAYHlM.js";import{D as R}from"./PieChart.stories-CGd1hF0C.js";import{D as I}from"./RadarChart.stories-BzSZVA0S.js";import{D as S}from"./RadialChart.stories-TNr5wiBI.js";import{D as $}from"./ScatterChart.stories-Dmffm7Vt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-giMaU9kv.js";import"./sys-enter-2-8R25DHYh.js";import"./alert-DoRuAU1t.js";import"./index-B2T-_GlF.js";import"./index-DlwOY2o8.js";import"./index-8hxRUREt.js";import"./Link-CGxFiH0u.js";import"./index-DqHN2E4G.js";import"./index-B74G-VBW.js";import"./index-B0V2Rdv7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUFLcfGV.js";import"./addCustomCSSWithScoping-JZmabDZV.js";import"./index-CButcFfg.js";import"./Carousel-CKeA8CLl.js";import"./ScrollEnablement-C3bXHz1R.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BJjU4eKJ.js";import"./slim-arrow-left-C7BSGGN-.js";import"./DemoProps-sEoROQdn.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D_2VmxMQ.js";import"./ChartContainer-ysgu6Kq0.js";import"./index-BbqsQoi1.js";import"./useCancelAnimationFallback-B9khfR8j.js";import"./YAxisTicks-4LnHAFBd.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-abWCGLgS.js";import"./ChartDataLabel-U8ZjdfQU.js";import"./useOnClickInternal-CulL6PRW.js";import"./react-content-loader.es-DZA0PzmS.js";import"./useIsRTL-B1lcnCzB.js";import"./useLongestYAxisLabel-BYjBpM-F.js";import"./ComposedChart-1DxPlpN1.js";import"./Line-JbnX1uAT.js";import"./Scatter-vd1hXCAE.js";import"./index-1xXkN9S3.js";import"./index-BS14onys.js";import"./Placeholder-C1NO8QsW.js";import"./index-BfOTlvHL.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
