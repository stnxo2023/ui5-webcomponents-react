import{r as i,j as t,O as l}from"./iframe-Brff1rmP.js";import{useMDXComponents as p}from"./index-CqBWQ9Zx.js";import{M as u,a as h,n as f}from"./blocks-Cx2b2NzS.js";import"./Tag-CO6ENRz9.js";import"./index-DlA7--5Z.js";import{F as d}from"./CommandsAndQueries-Z2F9olV7.js";import"./copy-Bv1OuOcO.js";import{T as b}from"./TableOfContent-B_7Wp9mr.js";import{C}from"./index-CRSsbspD.js";import{D}from"./BarChart.stories-gLp-ImH0.js";import{D as y}from"./BulletChart.stories-CyarXZno.js";import{D as g}from"./ColumnChart.stories-BqbyxKKz.js";import{D as v}from"./ColumnChartWithTrend.stories-BN4tQExJ.js";import{D as x}from"./ComposedChart.stories-BxtDQwOh.js";import{D as j}from"./DonutChart.stories-Clm_vpVf.js";import{D as w}from"./LineChart.stories-JuhvoG1q.js";import{D as R}from"./PieChart.stories-D_W0l9RZ.js";import{D as I}from"./RadarChart.stories-DQcYeHCy.js";import{D as S}from"./RadialChart.stories-CIZ110d1.js";import{D as $}from"./ScatterChart.stories-CLmb57cE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cs5lMjWh.js";import"./sys-enter-2-D0GbakMF.js";import"./alert-DvXA8o8i.js";import"./index-Cl8f3le-.js";import"./index-GNhj6rYz.js";import"./index-DYmdKmkq.js";import"./Link-CnNfKrga.js";import"./index-CHjRsrmQ.js";import"./index-BM_H4FxE.js";import"./index-SsKZpktE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hZd9oRLF.js";import"./addCustomCSSWithScoping-DWThNXxY.js";import"./index-C7l_yPP_.js";import"./Carousel-CEzdnmxZ.js";import"./ScrollEnablement-L6YMa_Sh.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DNyyDzos.js";import"./slim-arrow-left-Dw-_SmuZ.js";import"./DemoProps-BWK20_4Z.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C1z7mdsj.js";import"./ChartContainer-Ca9AEEEN.js";import"./index-ByUJYxuO.js";import"./useCancelAnimationFallback-pMLQ9zLt.js";import"./YAxisTicks-Cr_zPBlR.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CJW7YG32.js";import"./ChartDataLabel-B-zcfdDt.js";import"./useOnClickInternal-DOatT2Sl.js";import"./react-content-loader.es-B85U0SPQ.js";import"./useIsRTL-utzGJSQW.js";import"./useLongestYAxisLabel-DI1L333w.js";import"./ComposedChart-DhRgm2KE.js";import"./Line-l0jcJ4-7.js";import"./Scatter-BbHkEQgs.js";import"./index-BHJ3bJ5r.js";import"./index-DT_78qxU.js";import"./Placeholder-Cz7n8x1R.js";import"./index-BXdeDt_Y.js";const E=`# @ui5/webcomponents-react-charts

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
