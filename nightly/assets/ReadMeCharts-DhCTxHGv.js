import{r as i,j as t,O as l}from"./iframe-CL0E0PWh.js";import{useMDXComponents as p}from"./index-Deybi7Kf.js";import{M as u,a as h,n as f}from"./blocks-D7bkOkCE.js";import"./Tag-DqkevlzV.js";import"./index-CnAIuZ6O.js";import{F as d}from"./CommandsAndQueries-CS7a2Ny4.js";import"./copy-ZUxcJ4wZ.js";import{T as b}from"./TableOfContent-CAPb9YnM.js";import{C}from"./index-xjboeanS.js";import{D}from"./BarChart.stories-Bdy_uz9c.js";import{D as y}from"./BulletChart.stories-w-JdvRMX.js";import{D as g}from"./ColumnChart.stories-B-qR9i75.js";import{D as v}from"./ColumnChartWithTrend.stories-BuZQde70.js";import{D as x}from"./ComposedChart.stories-BiBKzMex.js";import{D as j}from"./DonutChart.stories--6Nnj8hq.js";import{D as w}from"./LineChart.stories-CZTWzZL6.js";import{D as R}from"./PieChart.stories-DqBf4V37.js";import{D as I}from"./RadarChart.stories-pt0BiAA_.js";import{D as S}from"./RadialChart.stories-B4uig4-G.js";import{D as $}from"./ScatterChart.stories-Dg-XUPby.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B3nD7cls.js";import"./sys-enter-2-C4Y2Nq9D.js";import"./alert-Dw8v7tUg.js";import"./index-CjZThSgP.js";import"./index-ChvCHLyh.js";import"./index-DKGx2Tou.js";import"./Link-opqw9zLH.js";import"./index-BmAVbjyV.js";import"./index-DNHIOaVp.js";import"./index-BjeAAycA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C2NuoADq.js";import"./addCustomCSSWithScoping-nc0b1DpN.js";import"./index-CDhMu5B6.js";import"./Carousel-Cchamcet.js";import"./ScrollEnablement-DJDUaKRX.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C_B0jbUu.js";import"./slim-arrow-left-CzgUqoUz.js";import"./DemoProps-CQBinliE.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D8TnxVmQ.js";import"./ChartContainer-DLTOsNGM.js";import"./index-DyNXbAXI.js";import"./useCancelAnimationFallback-BM2ohsLk.js";import"./YAxisTicks-BFdYisuK.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-pc43a6J4.js";import"./ChartDataLabel-1WRP1QK3.js";import"./useOnClickInternal-BQXztKeB.js";import"./react-content-loader.es-DEgCsvUq.js";import"./useIsRTL-g6jee3iH.js";import"./useLongestYAxisLabel-CnCCD3YC.js";import"./ComposedChart-DjpMK8Qh.js";import"./Line-B7AFRsf5.js";import"./Scatter-Ch3YIj1w.js";import"./index-CKbCoiHh.js";import"./index-BG0JYg6v.js";import"./Placeholder-CWQy8POF.js";import"./index-C7Finpqg.js";const E=`# @ui5/webcomponents-react-charts

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
