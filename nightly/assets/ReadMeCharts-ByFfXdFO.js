import{r as i,j as t,T as l}from"./iframe-BsSawXP0.js";import{useMDXComponents as p}from"./index-DRH2teYu.js";import{M as u,a as h,n as f}from"./blocks-CXfuXrzt.js";import"./Tag-CNlUSOaG.js";import"./index-Dmc2-Gsy.js";import{F as d}from"./CommandsAndQueries-iaa-8XF0.js";import"./copy-DbiVl2cO.js";import{T as b}from"./TableOfContent-Hx7KrrNg.js";import{C}from"./index-CUoEBDxF.js";import{D}from"./BarChart.stories-zGatb4Nl.js";import{D as y}from"./BulletChart.stories-D6yz4Etz.js";import{D as g}from"./ColumnChart.stories-C5M9iAzq.js";import{D as v}from"./ColumnChartWithTrend.stories-DP4fBSJM.js";import{D as x}from"./ComposedChart.stories-BL0kznr3.js";import{D as j}from"./DonutChart.stories-el0DxX1x.js";import{D as w}from"./LineChart.stories-_8Ds1oJ3.js";import{D as R}from"./PieChart.stories-Dof7iG_Z.js";import{D as I}from"./RadarChart.stories-BkCGVmDR.js";import{D as S}from"./RadialChart.stories-DQkUhbec.js";import{D as T}from"./ScatterChart.stories-1yNSxJpi.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BFVQ2hiO.js";import"./sys-enter-2-BXLoixfD.js";import"./alert-KY-hq2Su.js";import"./index-DXS7E1yl.js";import"./index-BhcqlC9n.js";import"./index-Crhu2fjF.js";import"./Link-DnipqSX8.js";import"./index-ZJs7Cg1o.js";import"./index-ButdZwwN.js";import"./index-CaYKw0vF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Czipwrtn.js";import"./addCustomCSSWithScoping-BEgtXhqx.js";import"./index-BP2Csnbb.js";import"./Carousel-CTOusswv.js";import"./ScrollEnablement-D01WJw12.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BreLECAe.js";import"./slim-arrow-left-1CHmaBMj.js";import"./DemoProps-BlLq2lO3.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-5kDUr6Bc.js";import"./ChartContainer-CyCA0-oZ.js";import"./index-Weu8oCaJ.js";import"./useCancelAnimationFallback-DqwSwEoS.js";import"./YAxisTicks-Cjk9TUfn.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-UE42mUuB.js";import"./ChartDataLabel-B4NIwlev.js";import"./useOnClickInternal-DT2dO3IZ.js";import"./react-content-loader.es-5L9iftVe.js";import"./useIsRTL-D81DTT8f.js";import"./useLongestYAxisLabel-BhrRz2rw.js";import"./ComposedChart-aAf9nfxA.js";import"./Line-BmEfajPg.js";import"./Scatter-Bl4EaJg-.js";import"./index-BvWS3Z3F.js";import"./index-Yv5QhhAg.js";import"./Placeholder-dBP3FZ-y.js";import"./index-CzcU0lIb.js";const $=`# @ui5/webcomponents-react-charts

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
