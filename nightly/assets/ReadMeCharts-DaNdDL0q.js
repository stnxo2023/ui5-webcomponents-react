import{r as i,j as t,T as l}from"./iframe-0odebeya.js";import{useMDXComponents as p}from"./index-CqFbrvRl.js";import{M as u,a as h,n as f}from"./blocks-CZanU-Ia.js";import"./Tag-BUYfpKMM.js";import"./index-D9xNyPsZ.js";import{F as d}from"./CommandsAndQueries-EL4jX5E-.js";import"./copy-CT5RXkub.js";import{T as b}from"./TableOfContent-DKap7IC3.js";import{C}from"./index-CB9zOsb4.js";import{D}from"./BarChart.stories-DSHV47e-.js";import{D as y}from"./BulletChart.stories-Dd6pyyWB.js";import{D as g}from"./ColumnChart.stories-D901Fajz.js";import{D as v}from"./ColumnChartWithTrend.stories-BROK794n.js";import{D as x}from"./ComposedChart.stories-DjiZX7gU.js";import{D as j}from"./DonutChart.stories-D04VHP7h.js";import{D as w}from"./LineChart.stories-BLFX0Zzb.js";import{D as R}from"./PieChart.stories-DuYOQcpC.js";import{D as I}from"./RadarChart.stories-CeyapcXe.js";import{D as S}from"./RadialChart.stories-CFiNLgAl.js";import{D as T}from"./ScatterChart.stories-BGpdp6og.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjkTzkFz.js";import"./sys-enter-2-DdZ_D29i.js";import"./alert-D-ynjdbk.js";import"./index-8HMofQBq.js";import"./index-Bj8LHsHM.js";import"./index-CaXXMvN7.js";import"./Link-BrHi8e0V.js";import"./index-frz6UFer.js";import"./index-tz56fx9f.js";import"./index-CWrbfQpH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHrZH3Z4.js";import"./addCustomCSSWithScoping-Dp2j1Uki.js";import"./index-BINGVIRj.js";import"./Carousel-BG-HPwfB.js";import"./ScrollEnablement-CqQuXn0O.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BdnrozGs.js";import"./slim-arrow-left-uh7KVXWM.js";import"./DemoProps-Del0UB-K.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D00UfRK7.js";import"./ChartContainer-C4EBc8yQ.js";import"./index-zsFPEOYy.js";import"./useCancelAnimationFallback-DVe2WS6_.js";import"./YAxisTicks-9JwlcEde.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ULU8seYB.js";import"./ChartDataLabel-C3GcLP9V.js";import"./useOnClickInternal-qTWVQw-V.js";import"./react-content-loader.es-C9uzV7wQ.js";import"./useIsRTL-3MSrpeOV.js";import"./useLongestYAxisLabel-a1omfJ7e.js";import"./ComposedChart-AQUSz6wb.js";import"./Line-H4vVgLXY.js";import"./Scatter-DgjwLtIY.js";import"./index-DCq2ooLA.js";import"./index-DzrMftIN.js";import"./Placeholder-ClwjmRzH.js";import"./index-Br9oHqC9.js";const $=`# @ui5/webcomponents-react-charts

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
