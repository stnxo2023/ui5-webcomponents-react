import{r as i,j as t,O as l}from"./iframe-DwL_U_4M.js";import{useMDXComponents as p}from"./index-DF1KaKr-.js";import{M as u,a as h,n as f}from"./blocks-BkbxlrC9.js";import"./Tag-DWzoI0ag.js";import"./index-DgsDGr1U.js";import{F as d}from"./CommandsAndQueries-Dz5IdIhG.js";import"./copy-Ds9kRn1x.js";import{T as b}from"./TableOfContent-BzUyEnfe.js";import{C}from"./index-Be0Ji85c.js";import{D}from"./BarChart.stories-Cfdrxf1t.js";import{D as y}from"./BulletChart.stories-CzfUnJjJ.js";import{D as g}from"./ColumnChart.stories-9k6oNVqY.js";import{D as v}from"./ColumnChartWithTrend.stories-C9rgDLjI.js";import{D as x}from"./ComposedChart.stories-CXC0H-QR.js";import{D as j}from"./DonutChart.stories-BZH06RXb.js";import{D as w}from"./LineChart.stories-D5u7lx0I.js";import{D as R}from"./PieChart.stories-CilFcofc.js";import{D as I}from"./RadarChart.stories-oPzCKOuZ.js";import{D as S}from"./RadialChart.stories-CvNLq4-Y.js";import{D as $}from"./ScatterChart.stories-0yIR-dP3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BVmVMqd7.js";import"./sys-enter-2-B94IC9Xo.js";import"./alert-q5IjkK7H.js";import"./index-BOSg5TA3.js";import"./index-Dqsw9_lb.js";import"./index-Db6l5aQj.js";import"./Link-BdX-3dcl.js";import"./index-Vi2IbP0J.js";import"./index-DOHiCVZ-.js";import"./index-DKq2OUSi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dkqe7TGi.js";import"./addCustomCSSWithScoping-CE7eblPA.js";import"./index-ak-yAlnV.js";import"./Carousel-CvDN8Axu.js";import"./ScrollEnablement-CXLtDDEy.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DJ1SYWnB.js";import"./slim-arrow-left-BF84NwNz.js";import"./DemoProps-D25QXf4w.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-5BgN1Xb2.js";import"./ChartContainer-DanZDt2y.js";import"./index-DHJJGQ-p.js";import"./useCancelAnimationFallback-CtcWhY-K.js";import"./YAxisTicks-BVrELr7J.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CIRO44sZ.js";import"./ChartDataLabel-DQfu9h2J.js";import"./useOnClickInternal-CfQXnEiN.js";import"./react-content-loader.es-BuLpBvZE.js";import"./useIsRTL-ABDzzkNE.js";import"./useLongestYAxisLabel-CjS6-tW0.js";import"./ComposedChart-DjOUvtTY.js";import"./Line-lCeKl1E1.js";import"./Scatter-BRxIrb2X.js";import"./index-5pdm3bHT.js";import"./index-DImAvwqa.js";import"./Placeholder-7JhOZjGa.js";import"./index-CxRxDOQS.js";const E=`# @ui5/webcomponents-react-charts

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
