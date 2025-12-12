import{r as i,j as t,T as l}from"./iframe-5Ai_0qn6.js";import{useMDXComponents as p}from"./index-B7f66Dmz.js";import{M as u,a as h,n as f}from"./blocks-B56i3DPI.js";import"./Tag-COMV1q97.js";import"./index-DmI0q2i9.js";import{F as d}from"./CommandsAndQueries-JQTwJq8J.js";import"./copy-DNLRE2WL.js";import{T as b}from"./TableOfContent-BjCvBF3F.js";import{C}from"./index-BFXr7AYm.js";import{D}from"./BarChart.stories-C1uHZrkE.js";import{D as y}from"./BulletChart.stories-DpmNg4xA.js";import{D as g}from"./ColumnChart.stories-jnFwgqRo.js";import{D as v}from"./ColumnChartWithTrend.stories-BkspXFeH.js";import{D as x}from"./ComposedChart.stories-BdPZLA4M.js";import{D as j}from"./DonutChart.stories-D7GIcMSG.js";import{D as w}from"./LineChart.stories-E_aVzcc-.js";import{D as R}from"./PieChart.stories-CE27c1SE.js";import{D as I}from"./RadarChart.stories-BKlaFim8.js";import{D as S}from"./RadialChart.stories-D46YXDgW.js";import{D as T}from"./ScatterChart.stories-ChvAKh2e.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D04M7OHu.js";import"./sys-enter-2-1BgXqzpT.js";import"./alert-BhFUrxxf.js";import"./index-Ce1oa-YM.js";import"./index-q1btkUh6.js";import"./index-BRDhzPf9.js";import"./Link-D--4KGaX.js";import"./index-B-uO6_4g.js";import"./index-D661wfa7.js";import"./index-Bq31yNzK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COAGvdy_.js";import"./addCustomCSSWithScoping-DYNqCkls.js";import"./index-BkdUYSuU.js";import"./Carousel-7xpio5LX.js";import"./ScrollEnablement-BpTg3nyv.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DZq8s2M6.js";import"./slim-arrow-left-Z6VBr4vZ.js";import"./DemoProps-DXtDnQIM.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C89Ux6pJ.js";import"./ChartContainer-CbotXUx8.js";import"./index-Cyt6o_O8.js";import"./useCancelAnimationFallback-kLBZ5Cm_.js";import"./YAxisTicks-D9k8midC.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BMvsiWqC.js";import"./ChartDataLabel-Cg_HIJta.js";import"./useOnClickInternal-Bs700hEW.js";import"./react-content-loader.es-Dczhyk6r.js";import"./useIsRTL-B0oo9ftu.js";import"./useLongestYAxisLabel-BmEa4hTz.js";import"./ComposedChart-BBvTVy7R.js";import"./Line-DhMBtXbL.js";import"./Scatter-B4r4f6TM.js";import"./index-BnY0cH6j.js";import"./index-D5bqgZXX.js";import"./Placeholder-DqXsyPWU.js";import"./index-DoiC27Zx.js";const $=`# @ui5/webcomponents-react-charts

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
