import{r as i,j as t,T as l}from"./iframe-B-pj6tCi.js";import{useMDXComponents as p}from"./index-CV4vE3wQ.js";import{M as u,a as h,k as f}from"./blocks-HpriUj6L.js";import"./Tag-BGSRXwU9.js";import"./index-BjTnndjj.js";import{F as d}from"./CommandsAndQueries-D5MjQxKD.js";import"./copy-DztVyiyp.js";import{T as b}from"./TableOfContent-D6cpdcyl.js";import{C}from"./index-BkTQUbWY.js";import{D}from"./BarChart.stories-Z4E3xML1.js";import{D as y}from"./BulletChart.stories-DioJHjq4.js";import{D as g}from"./ColumnChart.stories-Wud8HxtJ.js";import{D as v}from"./ColumnChartWithTrend.stories-DqeJNjCr.js";import{D as x}from"./ComposedChart.stories-DTbYOul-.js";import{D as j}from"./DonutChart.stories-BQNrXOHG.js";import{D as w}from"./LineChart.stories-C7UZiXuH.js";import{D as R}from"./PieChart.stories-BpixyQ06.js";import{D as I}from"./RadarChart.stories-DTdX4cz-.js";import{D as S}from"./RadialChart.stories-DlSUidOV.js";import{D as T}from"./ScatterChart.stories-D6vMK_ao.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D4Uxy2_-.js";import"./sys-enter-2-dO_KPcSs.js";import"./alert-DoolSfaJ.js";import"./index-C-xz_U36.js";import"./index-CBj2QVaO.js";import"./index-BuYTxKvQ.js";import"./Link-C2AEvOhf.js";import"./index-BJS1VYKy.js";import"./index-C-cxTaDk.js";import"./index-etFlaHh7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-zIVJXLqJ.js";import"./addCustomCSSWithScoping-NTHEVFVs.js";import"./index-BOWgSpCi.js";import"./Carousel-CpuLlrMD.js";import"./ScrollEnablement-D-n-HsWC.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CrqSBDe5.js";import"./slim-arrow-left-BH8tR6Lp.js";import"./DemoProps-D0E9CXAI.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DvEzOtlP.js";import"./ChartContainer-Bq2wlh5o.js";import"./index-BQ49BgDg.js";import"./useCancelAnimationFallback-BHsBw_1P.js";import"./YAxisTicks-Bydh6i2y.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BdhI8-5d.js";import"./ChartDataLabel-QsLPOFDa.js";import"./useOnClickInternal-z5wiENLh.js";import"./react-content-loader.es-DHwnRZ0Y.js";import"./useIsRTL-wViExLAn.js";import"./useLongestYAxisLabel-CalST8n9.js";import"./ComposedChart-B44eIFTw.js";import"./Line-XAUBzOp1.js";import"./Scatter-DaYIEQBs.js";import"./index-BaTN1ORp.js";import"./index-C_tY3Mgy.js";import"./Placeholder-BmbX82jQ.js";import"./index-RKDWmPwF.js";const $=`# @ui5/webcomponents-react-charts

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
