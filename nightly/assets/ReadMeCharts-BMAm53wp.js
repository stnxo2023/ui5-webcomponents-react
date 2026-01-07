import{r as i,j as t,T as l}from"./iframe-Bx5nPEOl.js";import{useMDXComponents as p}from"./index-xw1HgrxR.js";import{M as u,a as h,n as f}from"./blocks-BnfvreJd.js";import"./Tag-Czmfabca.js";import"./index-DySSVXhZ.js";import{F as d}from"./CommandsAndQueries-DQbk5l2-.js";import"./copy-CNcXjyuB.js";import{T as b}from"./TableOfContent-DsWzsd02.js";import{C}from"./index-D7LzK1O_.js";import{D}from"./BarChart.stories-CaxGh2Tb.js";import{D as y}from"./BulletChart.stories-D9UEYqZi.js";import{D as g}from"./ColumnChart.stories-6LDJ1AZh.js";import{D as v}from"./ColumnChartWithTrend.stories-DwhZsHEi.js";import{D as x}from"./ComposedChart.stories-BsJ5i_f1.js";import{D as j}from"./DonutChart.stories-ByG1oD7C.js";import{D as w}from"./LineChart.stories-DrVM-_1d.js";import{D as R}from"./PieChart.stories-D88Si25S.js";import{D as I}from"./RadarChart.stories-DHySbDTI.js";import{D as S}from"./RadialChart.stories-BFVOR89a.js";import{D as T}from"./ScatterChart.stories-DalilRmw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C_BRWXUj.js";import"./sys-enter-2-lnnKHtcu.js";import"./alert-CZSvHkOp.js";import"./index-BJ7q1nh3.js";import"./index-CHjTsZ6I.js";import"./index-DkrrTKjv.js";import"./Link-kOQVQryb.js";import"./index-DAgUYXjE.js";import"./index-EX-yWEKJ.js";import"./index-Bwj8Rahv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hIxCZ-4.js";import"./addCustomCSSWithScoping-BnQjkpis.js";import"./index-D030oFb6.js";import"./Carousel-BCoZKxPH.js";import"./ScrollEnablement-DNpNAWna.js";import"./animate-JylhYHXj.js";import"./AnimationMode-mOEhQ4nb.js";import"./slim-arrow-left-B148NR-s.js";import"./DemoProps-DsETIIp8.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DbIFk_1R.js";import"./ChartContainer-BYoxM1vU.js";import"./index-AroNelzF.js";import"./useCancelAnimationFallback-C6Z5rpGz.js";import"./YAxisTicks-B12t6bIP.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-0cDbZJWh.js";import"./ChartDataLabel-NCe5MLsj.js";import"./useOnClickInternal-B5ZpDCtQ.js";import"./react-content-loader.es-7PT0ULi8.js";import"./useIsRTL-wht3LnSl.js";import"./useLongestYAxisLabel-jKfxmP_-.js";import"./ComposedChart-C3SmgzYJ.js";import"./Line-YyVk098A.js";import"./Scatter-DrBgBStM.js";import"./index-7WGGG80C.js";import"./index-BpPXcFAT.js";import"./Placeholder-4ZepHei4.js";import"./index-BIbMuIBR.js";const $=`# @ui5/webcomponents-react-charts

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
