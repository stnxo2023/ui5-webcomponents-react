import{r as i,j as t,O as l}from"./iframe-vvFzJQsm.js";import{useMDXComponents as p}from"./index-mWjr9AFM.js";import{M as u,a as h,n as f}from"./blocks-COsbTFiZ.js";import"./Tag-CSxd9Vy9.js";import"./index-CdSwAr1T.js";import{F as d}from"./CommandsAndQueries-8pSfE60h.js";import"./copy-qs9aVbQg.js";import{T as b}from"./TableOfContent-B5MILnxa.js";import{C}from"./index-ByC8cMNy.js";import{D}from"./BarChart.stories-CbUYOJri.js";import{D as y}from"./BulletChart.stories-BJa65CjM.js";import{D as g}from"./ColumnChart.stories-B_CMqqUA.js";import{D as v}from"./ColumnChartWithTrend.stories-GcqW7Mhn.js";import{D as x}from"./ComposedChart.stories-Czm0JpoW.js";import{D as j}from"./DonutChart.stories-QsR0NIFn.js";import{D as w}from"./LineChart.stories-DnJOvmfJ.js";import{D as R}from"./PieChart.stories-Dg7C2LuJ.js";import{D as I}from"./RadarChart.stories-C8GRn45o.js";import{D as S}from"./RadialChart.stories-DKy-5el4.js";import{D as $}from"./ScatterChart.stories-BTJ9kFYI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CWYm1ZbR.js";import"./sys-enter-2-kpgYGCQC.js";import"./alert-Ba0jfTcX.js";import"./index-FWmQFiva.js";import"./index-DSMhm57i.js";import"./index-keBzjxCB.js";import"./Link-hAW6WURd.js";import"./index-CYjg-3sd.js";import"./index-bfJ02BDw.js";import"./index-BBX1dqjw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BmD8Hqdt.js";import"./addCustomCSSWithScoping-Px-H63QY.js";import"./index-Ck5nT1M9.js";import"./Carousel-Bw6svI0k.js";import"./ScrollEnablement-DGKqDpbT.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dd0l5JQI.js";import"./slim-arrow-left-Brz843Hl.js";import"./DemoProps-Vtwy1Sia.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BBBAqqVn.js";import"./ChartContainer-BJhIjoEu.js";import"./index-HICqIhxY.js";import"./useCancelAnimationFallback-BGsJiD9f.js";import"./YAxisTicks-0eJZsnVW.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-fbk6tzTB.js";import"./ChartDataLabel-CNbkkmdX.js";import"./useOnClickInternal-DCUKIJVN.js";import"./react-content-loader.es-Vsci8DvQ.js";import"./useIsRTL-BvMNZh4_.js";import"./useLongestYAxisLabel-C4AbXbqA.js";import"./ComposedChart-C1jQCt47.js";import"./Line-C608K6pP.js";import"./Scatter-BbsWJ0Fo.js";import"./index-DNZS7BuC.js";import"./index-DH6eLsFZ.js";import"./Placeholder-C4c043xj.js";import"./index-DKVTn3jN.js";const E=`# @ui5/webcomponents-react-charts

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
