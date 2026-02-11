import{r as i,j as t,O as l}from"./iframe-BvHqSIyK.js";import{useMDXComponents as p}from"./index-C9vrwz77.js";import{M as u,a as h,n as f}from"./blocks-BxoU3Yu6.js";import"./Tag-99RoGaFy.js";import"./index-BB14dXBi.js";import{F as d}from"./CommandsAndQueries-B3hUlog3.js";import"./copy-BP-1S5h9.js";import{T as b}from"./TableOfContent-B7BIrx_g.js";import{C}from"./index-DBFtcyZJ.js";import{D}from"./BarChart.stories-F5pczmLe.js";import{D as y}from"./BulletChart.stories-IKDE5a-Y.js";import{D as g}from"./ColumnChart.stories-B9TcczNG.js";import{D as v}from"./ColumnChartWithTrend.stories-B6XvNroj.js";import{D as x}from"./ComposedChart.stories--ppSaDhO.js";import{D as j}from"./DonutChart.stories-BcEgNj3N.js";import{D as w}from"./LineChart.stories-CnFUkkt5.js";import{D as R}from"./PieChart.stories-B-5OuCTf.js";import{D as I}from"./RadarChart.stories-w0iKC-q1.js";import{D as S}from"./RadialChart.stories-ZrRt6NeX.js";import{D as $}from"./ScatterChart.stories-CAUzYe10.js";import"./preload-helper-PPVm8Dsz.js";import"./information-zngl4LUv.js";import"./sys-enter-2-D9Z1FJcM.js";import"./alert-F1tFIdLT.js";import"./index-DAufjIqI.js";import"./index-Cb6d5Ui8.js";import"./index-Dvhux2R5.js";import"./Link-CgDmPG1r.js";import"./index-BX2w3DS0.js";import"./index-lpb4Baiz.js";import"./index--L__lImq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3VWoxNN.js";import"./addCustomCSSWithScoping-Bvbl39sy.js";import"./index-B7BXsln5.js";import"./Carousel-BsnbGsDM.js";import"./ScrollEnablement-HwiTsDO2.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DMqU12DD.js";import"./slim-arrow-left-DFVvPBDG.js";import"./DemoProps-CJ4OXvAG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Y_gfEqbb.js";import"./ChartContainer-BSrkg1sp.js";import"./index-DRekqyHy.js";import"./useCancelAnimationFallback-dhTcaW3c.js";import"./YAxisTicks-CzdwLo8Y.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DgFDFIs_.js";import"./ChartDataLabel-gMobKzNV.js";import"./useOnClickInternal-ZtwRMInL.js";import"./react-content-loader.es-CTIY53OF.js";import"./useIsRTL-DlCv73Ap.js";import"./useLongestYAxisLabel-QR8DOg03.js";import"./ComposedChart-8RaYP9-D.js";import"./Line-o9gmwfWG.js";import"./Scatter-CFw9jcx-.js";import"./index-BFdme8Bw.js";import"./index-CdZJ_3DX.js";import"./Placeholder-CqYaID2g.js";import"./index-HbhnDekA.js";const E=`# @ui5/webcomponents-react-charts

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
