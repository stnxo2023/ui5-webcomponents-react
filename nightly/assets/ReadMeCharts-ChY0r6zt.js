import{r as i,j as t,T as l}from"./iframe-D9-3X0JI.js";import{useMDXComponents as p}from"./index-dMdAMZT7.js";import{M as u,a as h,m as f}from"./blocks-BYKnuPZj.js";import"./Tag-rAEScKNS.js";import"./index-DwPMNEU4.js";import{F as d}from"./CommandsAndQueries-Cnpdrmv-.js";import"./copy-B87NDbR1.js";import{T as b}from"./TableOfContent-VPZi1fXq.js";import{C}from"./index-CGmrsYFp.js";import{D}from"./BarChart.stories-Dplh69Y7.js";import{D as y}from"./BulletChart.stories-5ghO6lc6.js";import{D as g}from"./ColumnChart.stories-CQBdNej6.js";import{D as v}from"./ColumnChartWithTrend.stories-BIuX8sT-.js";import{D as x}from"./ComposedChart.stories-B3MmQytx.js";import{D as j}from"./DonutChart.stories-DNdw2EIe.js";import{D as w}from"./LineChart.stories-Y0kb_6cD.js";import{D as R}from"./PieChart.stories-Cb4bHERv.js";import{D as I}from"./RadarChart.stories-DZtK-S6E.js";import{D as S}from"./RadialChart.stories-DEpSnB_J.js";import{D as T}from"./ScatterChart.stories-BxoYgHkR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-e-gqJ6X6.js";import"./sys-enter-2-BhYBtaW9.js";import"./alert-XeF5lKFk.js";import"./index-B0kTLMxV.js";import"./index-Bo2p0dAu.js";import"./index-BC71hX7l.js";import"./Link-B5zjhOqH.js";import"./index-DhzIoMaL.js";import"./index-j1saZdO-.js";import"./index-CxPR9JIx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DORD8sYf.js";import"./addCustomCSSWithScoping-CDB2w5BM.js";import"./index-BjUikPJy.js";import"./Carousel-Bvc0wAje.js";import"./ScrollEnablement-C4sfEIZB.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BJBsCVy3.js";import"./slim-arrow-left-DxyWTzGg.js";import"./DemoProps-biguKO5t.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-gsKUzb7d.js";import"./ChartContainer-2gbaHm2U.js";import"./index-C3d2BxPO.js";import"./useCancelAnimationFallback-CxcuYVfc.js";import"./YAxisTicks-C2o0lwrd.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bi5ojIgM.js";import"./ChartDataLabel-wZFcl9Ha.js";import"./useOnClickInternal-BZzP92lm.js";import"./react-content-loader.es-DsO-aR9O.js";import"./useIsRTL-Bu1wdE8w.js";import"./useLongestYAxisLabel-6D7gwb2Q.js";import"./ComposedChart-C2HpqAZ_.js";import"./Line-DmcGHgmq.js";import"./Scatter-DK8YOJI-.js";import"./index-DQvwvo-9.js";import"./index-DwUzrZwo.js";import"./Placeholder-DR-lBwht.js";import"./index-Cj00UAVn.js";const $=`# @ui5/webcomponents-react-charts

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
