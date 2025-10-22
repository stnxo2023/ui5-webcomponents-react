import{r as i,j as t,T as l}from"./iframe-aKs2ZWAj.js";import{useMDXComponents as p}from"./index-c4zJYkcR.js";import{M as u,a as h,k as f}from"./blocks-fvCr5kp9.js";import"./Tag-DSoVP5MU.js";import"./index-CMRRcr14.js";import{F as d}from"./CommandsAndQueries-IBiFSZr-.js";import"./copy-D9idsxI8.js";import{T as b}from"./TableOfContent-BssXKtqS.js";import{C}from"./index-Cbcj9N6o.js";import{D}from"./BarChart.stories-DlmO3bnd.js";import{D as y}from"./BulletChart.stories-DC1XHI2X.js";import{D as g}from"./ColumnChart.stories-BCC28HBi.js";import{D as v}from"./ColumnChartWithTrend.stories-2pR3b4Fh.js";import{D as x}from"./ComposedChart.stories-Ci1205kq.js";import{D as j}from"./DonutChart.stories-O12advj-.js";import{D as w}from"./LineChart.stories-Bky1CBTG.js";import{D as R}from"./PieChart.stories-BGrB3maN.js";import{D as I}from"./RadarChart.stories-B_unQe0b.js";import{D as S}from"./RadialChart.stories-BjDVaUen.js";import{D as T}from"./ScatterChart.stories-Dcc7YAzg.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CcxaAVSU.js";import"./sys-enter-2-DseuEdAf.js";import"./alert-DbU8Ao5u.js";import"./index-DNGZMnOS.js";import"./index-9dBzyYap.js";import"./index-Bj8ei7PO.js";import"./Link--ytwK8Iw.js";import"./index-ChXUbPo1.js";import"./index-B_N5JODd.js";import"./index-MuWvZ7Ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1lURHaG.js";import"./addCustomCSSWithScoping--I2WhUfl.js";import"./index-Dqo0aPAB.js";import"./Carousel-CvYA6Eb7.js";import"./ScrollEnablement-loPYCCzg.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BwQ4VPg3.js";import"./slim-arrow-left-BkklVxoi.js";import"./DemoProps-dDmZwlTu.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BnwaOKfA.js";import"./ChartContainer-B_EIkIP4.js";import"./index-Czu_4IUB.js";import"./useCancelAnimationFallback-B461QlrI.js";import"./YAxisTicks-pec9lnKH.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BRSb56LC.js";import"./ChartDataLabel-B4rL0xBP.js";import"./useOnClickInternal-NW6ALcRk.js";import"./react-content-loader.es-14F-y46Z.js";import"./useIsRTL-C1moqd-D.js";import"./useLongestYAxisLabel-B6mdHs0j.js";import"./ComposedChart-uS005zMW.js";import"./Line-Rj78T8rL.js";import"./Scatter-BtU1Nwhs.js";import"./index-BYNhW5bJ.js";import"./index-CxOefr4I.js";import"./Placeholder-Cbf6QRb8.js";import"./index-3g6w82dA.js";const $=`# @ui5/webcomponents-react-charts

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
