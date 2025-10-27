import{r as i,j as t,T as l}from"./iframe-CRoIzMtp.js";import{useMDXComponents as p}from"./index-uepxEeS1.js";import{M as u,a as h,m as f}from"./blocks-BWnl8hC4.js";import"./Tag-pVHInn9_.js";import"./index-l4qALITX.js";import{F as d}from"./CommandsAndQueries-tg7iHgNo.js";import"./copy-D8-Me-o2.js";import{T as b}from"./TableOfContent-CzcYt69w.js";import{C}from"./index-B7V5qgdX.js";import{D}from"./BarChart.stories-DvuxvhNT.js";import{D as y}from"./BulletChart.stories-DmNTP6hk.js";import{D as g}from"./ColumnChart.stories-D6o3_Xzj.js";import{D as v}from"./ColumnChartWithTrend.stories-DocpMsGz.js";import{D as x}from"./ComposedChart.stories-dqHcdtwk.js";import{D as j}from"./DonutChart.stories-C2NdCNoy.js";import{D as w}from"./LineChart.stories-BiOiLy4v.js";import{D as R}from"./PieChart.stories-BxbWJYo7.js";import{D as I}from"./RadarChart.stories--ImLYF8W.js";import{D as S}from"./RadialChart.stories-BC2r5bZI.js";import{D as T}from"./ScatterChart.stories-BM29Wo6j.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DT5Qd4to.js";import"./sys-enter-2-DutWnZ3I.js";import"./alert-D-9oczO0.js";import"./index-C8wLfWwH.js";import"./index-BWA_OWVW.js";import"./index-83H_WNAi.js";import"./Link-ByRh7pJY.js";import"./index-DCZY0XoF.js";import"./index-BGCNx8iW.js";import"./index-Cq7XEcI3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbjPHeWw.js";import"./addCustomCSSWithScoping-DJ9mEG-L.js";import"./index-BY3Vu1_E.js";import"./Carousel-B6ijftmS.js";import"./ScrollEnablement-Dou-HT1U.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cojs7cN5.js";import"./slim-arrow-left-CiFGMUNN.js";import"./DemoProps-C3MfRcpY.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BfrFJs2X.js";import"./ChartContainer-BGLXRSGq.js";import"./index-4w5klR-o.js";import"./useCancelAnimationFallback-reDsvp0G.js";import"./YAxisTicks-I-68nH0r.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-LZYsYhmx.js";import"./ChartDataLabel-C6ICYDtc.js";import"./useOnClickInternal-Cn_tZtqt.js";import"./react-content-loader.es-C_fAEvGf.js";import"./useIsRTL-CaAE0oF3.js";import"./useLongestYAxisLabel-Cy9u1Llp.js";import"./ComposedChart-CbdAAbx8.js";import"./Line-rS29_zW0.js";import"./Scatter-CiaJzsOQ.js";import"./index-DQzHF45w.js";import"./index-BtXZUebL.js";import"./Placeholder-CuuKiVLc.js";import"./index-BCKWP5wf.js";const $=`# @ui5/webcomponents-react-charts

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
