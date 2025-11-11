import{r as i,j as t,T as l}from"./iframe-BzFFzKD_.js";import{useMDXComponents as p}from"./index-CZpqZls8.js";import{M as u,a as h,m as f}from"./blocks-Dfn8aDA2.js";import"./Tag-Du7Hh6Mn.js";import"./index-BnnU1inb.js";import{F as d}from"./CommandsAndQueries-98tICPmn.js";import"./copy-CYosl6Ho.js";import{T as b}from"./TableOfContent-DvvjzS1z.js";import{C}from"./index-Bygk7g7-.js";import{D}from"./BarChart.stories-DF5LejO9.js";import{D as y}from"./BulletChart.stories-CJSaJzrD.js";import{D as g}from"./ColumnChart.stories-CLziExNb.js";import{D as v}from"./ColumnChartWithTrend.stories-Bt0Fbw2K.js";import{D as x}from"./ComposedChart.stories-H4zO01OZ.js";import{D as j}from"./DonutChart.stories-DijalPpQ.js";import{D as w}from"./LineChart.stories-qcLtb_pD.js";import{D as R}from"./PieChart.stories-L3sXNir4.js";import{D as I}from"./RadarChart.stories-Dj2Ee5BU.js";import{D as S}from"./RadialChart.stories-DFQ89NcI.js";import{D as T}from"./ScatterChart.stories-zyQZRLu6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ItcJqxXi.js";import"./sys-enter-2-Y1mMTef-.js";import"./alert-BnuKtxZV.js";import"./index-s8GS1odQ.js";import"./index-CjTZ8O9p.js";import"./index-BTogfKzr.js";import"./Link-CMUJ7C_U.js";import"./index-DDykH0pl.js";import"./index-DXrTedKP.js";import"./index-DWEvXFon.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUUeXWCw.js";import"./addCustomCSSWithScoping-26WgEUoU.js";import"./index-BkRjFulW.js";import"./Carousel-DTrJWY60.js";import"./ScrollEnablement-CN1jgR1Z.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BxIQejmw.js";import"./slim-arrow-left-CayHXJbR.js";import"./DemoProps-BM0BnqM-.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DrYwzc1b.js";import"./ChartContainer-D3NPKnI8.js";import"./index-T2JpUHkX.js";import"./useCancelAnimationFallback-CAE8sG2V.js";import"./YAxisTicks-CsaygxWt.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-2x9LNC5_.js";import"./ChartDataLabel-B8KyGo-q.js";import"./useOnClickInternal-CeQmib05.js";import"./react-content-loader.es-CorvDEqb.js";import"./useIsRTL-CtHY0-jf.js";import"./useLongestYAxisLabel-DbuMKLf9.js";import"./ComposedChart-v0EJzRJf.js";import"./Line-C7Ql3RW2.js";import"./Scatter-CVDGzIhr.js";import"./index-yCbGkTJ7.js";import"./index-DgYybu7y.js";import"./Placeholder-CcXsxZU8.js";import"./index-CTEyrosf.js";const $=`# @ui5/webcomponents-react-charts

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
