import{q as i,j as t,Q as l}from"./iframe-bPNgMO5h.js";import{useMDXComponents as p}from"./index-C4j4ILCK.js";import{M as u,a as h,n as f}from"./blocks-DApk4By0.js";import"./Tag-eZA227UP.js";import"./index-CuRLQ5dh.js";import"./CommandsAndQueries-CzGU51jX.js";import"./copy-DSB5O1lX.js";import{T as d}from"./TableOfContent-BkvufBd3.js";import{F as b}from"./Footer-Bh2hTs_t.js";import"./PageNotFound-Dw8P7BXA.js";import{C}from"./index-CZftkBDK.js";import{D}from"./BarChart.stories-4EpG7I6a.js";import{D as y}from"./BulletChart.stories-D-m2XZmH.js";import{D as g}from"./ColumnChart.stories-BZqprEes.js";import{D as v}from"./ColumnChartWithTrend.stories-dHHlfqwI.js";import{D as x}from"./ComposedChart.stories-BOj2ZZf3.js";import{D as j}from"./DonutChart.stories-BvmKF9oh.js";import{D as w}from"./LineChart.stories-Byul9jux.js";import{D as R}from"./PieChart.stories-LVs-IiTl.js";import{D as I}from"./RadarChart.stories-CVDwS_H3.js";import{D as S}from"./RadialChart.stories-WZeAm9aY.js";import{D as $}from"./ScatterChart.stories-DEUF8q1g.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2d19MHy.js";import"./sys-enter-2-D4Z01vRG.js";import"./alert-Ct4GAPph.js";import"./Link-ZXYeKMWB.js";import"./index-4UioHVXW.js";import"./index-CcoeKc2Y.js";import"./index-CjQWdaPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbYGGim3.js";import"./addCustomCSSWithScoping-BM8ISZdO.js";import"./index-QMND5HNb.js";import"./index-5px67lZR.js";import"./index-mw4j7xrs.js";import"./index-D8vCUd0L.js";import"./Illustrations--EfuNW2c.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-Dz5WSF_V.js";import"./ScrollEnablement-0saldGDB.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cslb1Utq.js";import"./slim-arrow-left-_VcSF3Tf.js";import"./DemoProps-CmqDSgDF.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-C7CHp4cI.js";import"./ChartContainer-BzdrTALH.js";import"./index-CCfS2xdR.js";import"./useCancelAnimationFallback-CEI1XP7y.js";import"./YAxisTicks-BpwhH3qt.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DOzKX3kL.js";import"./ChartDataLabel-__M2_AY1.js";import"./useOnClickInternal-BfEjWKed.js";import"./react-content-loader.es-DD1JV4FJ.js";import"./useIsRTL-DkBNoMcS.js";import"./useLongestYAxisLabel-BV3bdLl5.js";import"./ComposedChart-CfagkX9b.js";import"./Line-DVMPxD69.js";import"./Scatter-mqehWaXp.js";import"./index-DQ1em8-4.js";import"./index-DY9NXK7C.js";import"./Placeholder-V45Mwp6l.js";import"./index-BkTJ0VoI.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),m=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const s=e.current;return s&&o.length&&(r.current=setInterval(()=>{a.current++,s.navigateTo(a.current%o.length)},5e3)),()=>{m()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{m()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function _t(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{_t as default};
