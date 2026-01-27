import{r as i,j as t,O as l}from"./iframe-CB_qmYI8.js";import{useMDXComponents as p}from"./index-CUbKt2T4.js";import{M as u,a as h,n as f}from"./blocks-DzH1842d.js";import"./Tag-BYvfvCLi.js";import"./index-BfAPJluR.js";import{F as d}from"./CommandsAndQueries-HFp-4-55.js";import"./copy-DF2Z1I-X.js";import{T as b}from"./TableOfContent-ANMeDUHZ.js";import{C}from"./index-CkwxK2IM.js";import{D}from"./BarChart.stories-Ti6CwC5E.js";import{D as y}from"./BulletChart.stories-8o_1Fk-0.js";import{D as g}from"./ColumnChart.stories-C01j3D-h.js";import{D as v}from"./ColumnChartWithTrend.stories-aRYNEQfo.js";import{D as x}from"./ComposedChart.stories-BPYZd6_J.js";import{D as j}from"./DonutChart.stories-C-zoutAE.js";import{D as w}from"./LineChart.stories-B5ipgj8L.js";import{D as R}from"./PieChart.stories-C8BLV20g.js";import{D as I}from"./RadarChart.stories-B_QrpXsr.js";import{D as S}from"./RadialChart.stories-B1jVqy_5.js";import{D as $}from"./ScatterChart.stories-D4v_E-7w.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CRpELSoZ.js";import"./sys-enter-2-DeQtcYtY.js";import"./alert-Bc8RvQjV.js";import"./index-R89IEGRw.js";import"./index-SxWu56C4.js";import"./index-DE9gqn8Y.js";import"./Link-BRHRm_Z2.js";import"./index-C0flI_9Q.js";import"./index-At4nCxiD.js";import"./index-6WmsPmX0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClKIXNm7.js";import"./addCustomCSSWithScoping-9v1tewFq.js";import"./index-03LyQe5H.js";import"./Carousel-BVPOvY9T.js";import"./ScrollEnablement-zi7znCts.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CWQyyIg_.js";import"./slim-arrow-left-C-SKHvFz.js";import"./DemoProps-m6v4m7hV.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-6RoA2Zm_.js";import"./ChartContainer-DuSwDkOS.js";import"./index-D2nb9FR-.js";import"./useCancelAnimationFallback-B3MvyhTK.js";import"./YAxisTicks-9xc0CdZb.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DuHbFYEx.js";import"./ChartDataLabel-C-zikNq1.js";import"./useOnClickInternal-BI_Xpvxy.js";import"./react-content-loader.es-DYLluOrP.js";import"./useIsRTL-NAZbOjtu.js";import"./useLongestYAxisLabel-Flm6pVtS.js";import"./ComposedChart-DcxEQM40.js";import"./Line-S7tBFiSY.js";import"./Scatter-DdQE6prh.js";import"./index-0Q6S7Vr5.js";import"./index-Ch5xzmVP.js";import"./Placeholder-CZKgotCt.js";import"./index-DjpDNU-b.js";const E=`# @ui5/webcomponents-react-charts

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
