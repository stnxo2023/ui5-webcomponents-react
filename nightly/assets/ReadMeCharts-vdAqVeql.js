import{r as i,j as t,T as l}from"./iframe-tj1IXK49.js";import{useMDXComponents as p}from"./index-BnfY_9Nm.js";import{M as u,a as h,m as f}from"./blocks-B5RuKJh5.js";import"./Tag-DQ_YqxY9.js";import"./index-BScgQgkK.js";import{F as d}from"./CommandsAndQueries-BjstQSnK.js";import"./copy-7hwn-SEF.js";import{T as b}from"./TableOfContent-Vz4CpZyN.js";import{C}from"./index-BADN0rKI.js";import{D}from"./BarChart.stories-DAOew7QB.js";import{D as y}from"./BulletChart.stories-BMksobDV.js";import{D as g}from"./ColumnChart.stories-BCttNHy4.js";import{D as v}from"./ColumnChartWithTrend.stories-jJD7n9rH.js";import{D as x}from"./ComposedChart.stories-BuYdp1dK.js";import{D as j}from"./DonutChart.stories-CMuEm3NY.js";import{D as w}from"./LineChart.stories-KdPD4ux9.js";import{D as R}from"./PieChart.stories-Cy2_-aqw.js";import{D as I}from"./RadarChart.stories-CXVfsf_F.js";import{D as S}from"./RadialChart.stories-DG4dTUwF.js";import{D as T}from"./ScatterChart.stories-BpnWGFaT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-7IX06_U3.js";import"./sys-enter-2-lbz-PkIt.js";import"./alert-BrK48pCK.js";import"./index-BZJK_qmM.js";import"./index-CG8SFQa2.js";import"./index-BINOQQsd.js";import"./Link-OqvTbJ_m.js";import"./index--qIKxsMf.js";import"./index-yAmFIL7x.js";import"./index-DPa2AXHs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtbFBLyL.js";import"./addCustomCSSWithScoping-DTX7qnOW.js";import"./index-BSv7hb7A.js";import"./Carousel-fVV7p1Zr.js";import"./ScrollEnablement-C1DMpgda.js";import"./animate-JylhYHXj.js";import"./AnimationMode-f7TDOwmH.js";import"./slim-arrow-left-DiNphOJQ.js";import"./DemoProps-CSQDY9Xq.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CV3V8Llx.js";import"./ChartContainer-CGZG8QsE.js";import"./index-DqQsnaMw.js";import"./useCancelAnimationFallback-CIGm63AT.js";import"./YAxisTicks-DaASlWEb.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BsmLMFwx.js";import"./ChartDataLabel-Da5Nl63Q.js";import"./useOnClickInternal-CAP8igzF.js";import"./react-content-loader.es-DMCn0vh4.js";import"./useIsRTL-BXFoHGh1.js";import"./useLongestYAxisLabel-DFHUIUDW.js";import"./ComposedChart-DMkZoSqT.js";import"./Line-CvgeW4lk.js";import"./Scatter-CeQHaPic.js";import"./index-DjZz5qG4.js";import"./index-C6a40ZI7.js";import"./Placeholder-9GMudLT9.js";import"./index-ACO6D-Ac.js";const $=`# @ui5/webcomponents-react-charts

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
