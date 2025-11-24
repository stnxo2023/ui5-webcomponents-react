import{r as i,j as t,T as l}from"./iframe-8VKaAWwE.js";import{useMDXComponents as p}from"./index-BiQxBi02.js";import{M as u,a as h,m as f}from"./blocks-D4P1btFV.js";import"./Tag-CAEVBdQF.js";import"./index-BMIVJ8fC.js";import{F as d}from"./CommandsAndQueries-Br8gYKlc.js";import"./copy-GTYDTz4M.js";import{T as b}from"./TableOfContent-0W3j5ceT.js";import{C}from"./index-vSrmeCzp.js";import{D}from"./BarChart.stories-CF3JIiFf.js";import{D as y}from"./BulletChart.stories-0Y38Lva2.js";import{D as g}from"./ColumnChart.stories-bgEUUEre.js";import{D as v}from"./ColumnChartWithTrend.stories-Cqzkr37W.js";import{D as x}from"./ComposedChart.stories-afgrGhgQ.js";import{D as j}from"./DonutChart.stories-CNR6aGpU.js";import{D as w}from"./LineChart.stories-BOQIWWeC.js";import{D as R}from"./PieChart.stories-D0mU4-Jx.js";import{D as I}from"./RadarChart.stories-B0BIfMph.js";import{D as S}from"./RadialChart.stories-BM7hpuX_.js";import{D as T}from"./ScatterChart.stories-B5zMtUly.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dxy_OYjg.js";import"./sys-enter-2-B9S9TtfQ.js";import"./alert-CW57s-T2.js";import"./index-DeQFsrbp.js";import"./index-CG1tJmDp.js";import"./index-DjKsiZpu.js";import"./Link-Br8LM296.js";import"./index-Wr_VU4vx.js";import"./index--0IHLSpo.js";import"./index-G7mYvFlh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS15uRtL.js";import"./addCustomCSSWithScoping-gm53ZH9E.js";import"./index-Bd8LmHtw.js";import"./Carousel-BvHNsUjG.js";import"./ScrollEnablement-CjnCh3Bs.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cn-0bLzJ.js";import"./slim-arrow-left-D2m2xE6m.js";import"./DemoProps-MpDeGvIm.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BrPrHngN.js";import"./ChartContainer-Bs99qNty.js";import"./index-C-Q_6JkP.js";import"./useCancelAnimationFallback-v8gV8FM9.js";import"./YAxisTicks-DlpYO5M7.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Drkht1Iq.js";import"./ChartDataLabel-D61W008Q.js";import"./useOnClickInternal-CgD34_nb.js";import"./react-content-loader.es-DxE-AbBZ.js";import"./useIsRTL-8d_BW4ml.js";import"./useLongestYAxisLabel-CXlRSHrp.js";import"./ComposedChart-B11svnvm.js";import"./Line-BxH1IyQ0.js";import"./Scatter-BqZhFiBs.js";import"./index-CNg30Zht.js";import"./index-CfO5wGwd.js";import"./Placeholder-BByAJywG.js";import"./index-Cad8VJlP.js";const $=`# @ui5/webcomponents-react-charts

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
