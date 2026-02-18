import{r as i,j as t,O as l}from"./iframe-Dk0n26L0.js";import{useMDXComponents as p}from"./index-GonNK-F8.js";import{M as u,a as h,n as f}from"./blocks-Do665btL.js";import"./Tag-DHDcW-fI.js";import"./index-zII-B7tZ.js";import{F as d}from"./CommandsAndQueries-C5xq4Qip.js";import"./copy-DI2yzFNj.js";import{T as b}from"./TableOfContent-DmHVZj_P.js";import{C}from"./index-kiEGzXu1.js";import{D}from"./BarChart.stories-BUDL4iNJ.js";import{D as y}from"./BulletChart.stories-CiRRkGWS.js";import{D as g}from"./ColumnChart.stories-Bthf7C6b.js";import{D as v}from"./ColumnChartWithTrend.stories-DLb8yzTU.js";import{D as x}from"./ComposedChart.stories-1wnSFoBH.js";import{D as j}from"./DonutChart.stories-D-4bpzKm.js";import{D as w}from"./LineChart.stories-CapEInRx.js";import{D as R}from"./PieChart.stories-qu1m7UwS.js";import{D as I}from"./RadarChart.stories-CXqg34Q-.js";import{D as S}from"./RadialChart.stories-BcH_EQ4P.js";import{D as $}from"./ScatterChart.stories-glKb1-4-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CyaCviRw.js";import"./sys-enter-2-BeHXFnMA.js";import"./alert-CjBv8gy0.js";import"./index-BOuRbWlk.js";import"./index-DZcV0iyk.js";import"./index-Dww5FXQ1.js";import"./Link-CiqsvlwF.js";import"./index-BYI0Uf8A.js";import"./index-A7L-MktQ.js";import"./index-DuchmHxs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-WCv2CDBA.js";import"./addCustomCSSWithScoping-C7tuYiM4.js";import"./index-DVvxIcdz.js";import"./Carousel-B69V59u1.js";import"./ScrollEnablement-BDIo3BIe.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DajUWLJ8.js";import"./slim-arrow-left-Bh-nsn0x.js";import"./DemoProps-Bq0SexJh.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BLvoTHxS.js";import"./ChartContainer-BNIjPV5i.js";import"./index-BGwOxs0U.js";import"./useCancelAnimationFallback-CiC-p1T4.js";import"./YAxisTicks-CLx98kVI.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CeAfVeV1.js";import"./ChartDataLabel-DzMqSyKT.js";import"./useOnClickInternal-CExWGwfO.js";import"./react-content-loader.es-Bcyoag6i.js";import"./useIsRTL-Cr1Ieyfb.js";import"./useLongestYAxisLabel-eITxvlPr.js";import"./ComposedChart-BBUEF2CQ.js";import"./Line-B7PZlgwV.js";import"./Scatter-C_ml6jnA.js";import"./index-DvrkXipJ.js";import"./index-C6mi_Q8D.js";import"./Placeholder-BrTzzTEf.js";import"./index-BAA_7u9l.js";const E=`# @ui5/webcomponents-react-charts

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
