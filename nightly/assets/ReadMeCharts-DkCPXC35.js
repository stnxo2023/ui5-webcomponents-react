import{r as i,j as t,T as l}from"./iframe-DCh7S_7o.js";import{useMDXComponents as p}from"./index-CQ2Rgf0f.js";import{M as u,a as h,n as f}from"./blocks-DmZmqlp_.js";import"./Tag-CZuGcFNN.js";import"./index-C5sgOYh1.js";import{F as d}from"./CommandsAndQueries-BHuSnwTn.js";import"./copy-BrUTFvSK.js";import{T as b}from"./TableOfContent-BF-a6WsZ.js";import{C}from"./index-BDL9KJ8C.js";import{D}from"./BarChart.stories-qYPch5ld.js";import{D as y}from"./BulletChart.stories-CiYLwLdY.js";import{D as g}from"./ColumnChart.stories-CoMKk1Vu.js";import{D as v}from"./ColumnChartWithTrend.stories-DXwthL72.js";import{D as x}from"./ComposedChart.stories-AsswZYrO.js";import{D as j}from"./DonutChart.stories-CK4pOf-x.js";import{D as w}from"./LineChart.stories-oGR03rSm.js";import{D as R}from"./PieChart.stories-Bf749LoQ.js";import{D as I}from"./RadarChart.stories-Dgjv4aBr.js";import{D as S}from"./RadialChart.stories-BZO17uiw.js";import{D as T}from"./ScatterChart.stories-B6Gw7mF1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-FYwlptxJ.js";import"./sys-enter-2-CNa4r-Sw.js";import"./alert-Bj_hkuex.js";import"./index-DvoAW6NG.js";import"./index-BwuMWpwU.js";import"./index-BzGBt6gL.js";import"./Link-DOaKYpM4.js";import"./index-CqXebPST.js";import"./index-CKcNqeBZ.js";import"./index-Gt-7HKkD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDzt8G5a.js";import"./addCustomCSSWithScoping-DaHSAyiF.js";import"./index-gCdJvzAZ.js";import"./Carousel-CESy1_ZK.js";import"./ScrollEnablement-CHt3xTrM.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D4fquVI2.js";import"./slim-arrow-left-Ch75Ryrk.js";import"./DemoProps-BI23Y8uw.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B4TQZEnO.js";import"./ChartContainer-B-jnv6Ph.js";import"./index-D-grjYU9.js";import"./useCancelAnimationFallback-CwgzlXXH.js";import"./YAxisTicks-Bl3PCISp.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-KLmoKfyB.js";import"./ChartDataLabel-BJCobdmO.js";import"./useOnClickInternal-DpjROJ_r.js";import"./react-content-loader.es-ZpIL7L-H.js";import"./useIsRTL-D0YNVX7D.js";import"./useLongestYAxisLabel-CAdrfuGk.js";import"./ComposedChart-CQv2yaAY.js";import"./Line-CWTqiSLK.js";import"./Scatter-DwdG4Z0G.js";import"./index-DzcIY0-m.js";import"./index-BzkC-n_c.js";import"./Placeholder-CogzlDbo.js";import"./index-HepMPDh_.js";const $=`# @ui5/webcomponents-react-charts

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
