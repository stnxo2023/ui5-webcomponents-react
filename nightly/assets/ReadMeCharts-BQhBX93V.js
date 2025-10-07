import{r as i,j as t,T as l}from"./iframe-CtwEriWb.js";import{useMDXComponents as p}from"./index-D-9u9m_4.js";import{M as u,a as h,k as f}from"./blocks-BFYACaFi.js";import"./Tag-Dp8ZKpct.js";import"./index-DaHRprUe.js";import{F as d}from"./CommandsAndQueries-CD3VJPSk.js";import"./copy-DmD13pno.js";import{T as b}from"./TableOfContent-Bk-RGPLp.js";import{C}from"./index-BkNA9_3S.js";import{D}from"./BarChart.stories-584RU1My.js";import{D as y}from"./BulletChart.stories-B1_iO0T0.js";import{D as g}from"./ColumnChart.stories-DEp4eqJH.js";import{D as v}from"./ColumnChartWithTrend.stories-BsEPlFrS.js";import{D as x}from"./ComposedChart.stories-DluTfJ6C.js";import{D as j}from"./DonutChart.stories-BPce9Wz6.js";import{D as w}from"./LineChart.stories-CxSpQYBb.js";import{D as R}from"./PieChart.stories-aoakV1u0.js";import{D as I}from"./RadarChart.stories-CIp2r-AF.js";import{D as S}from"./RadialChart.stories-9Zd-l2hG.js";import{D as T}from"./ScatterChart.stories-BCVjw243.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D5ukCsPX.js";import"./sys-enter-2-BPp72tdn.js";import"./alert-CQAVluiD.js";import"./index-C5ngcH8h.js";import"./index-Bt4v4M6X.js";import"./index-DDmWoC0P.js";import"./Link-D_PuN-3O.js";import"./index-zgbQGCMD.js";import"./index-C3uSNLH8.js";import"./index-wzivwl9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Lem94xA1.js";import"./addCustomCSSWithScoping-BBQMnugZ.js";import"./index-CeAyP2ez.js";import"./Carousel-Dlap5L6n.js";import"./ScrollEnablement-BQjS8DnP.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DHS2qTNP.js";import"./slim-arrow-left-DoT3xkf5.js";import"./DemoProps-DitWcQC2.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D-Mf_Q-4.js";import"./ChartContainer-Qz-Clg-u.js";import"./index-Dx48TTVd.js";import"./useCancelAnimationFallback-0EB9T39L.js";import"./YAxisTicks-Dz94t8oH.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DVsBt8jg.js";import"./ChartDataLabel-DoUpFQ2h.js";import"./useOnClickInternal-DR_bydc9.js";import"./react-content-loader.es-3T-71ZzW.js";import"./useIsRTL-BtiMpto1.js";import"./useLongestYAxisLabel-DCX6I-v3.js";import"./ComposedChart-DDGhOLIY.js";import"./Line-LoR-EJ2F.js";import"./Scatter-BGUNY-Qt.js";import"./index-Rp9YmcTo.js";import"./index-DwnGZB1K.js";import"./Placeholder-DYGvFipY.js";import"./index-9lHyR5ge.js";const $=`# @ui5/webcomponents-react-charts

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
