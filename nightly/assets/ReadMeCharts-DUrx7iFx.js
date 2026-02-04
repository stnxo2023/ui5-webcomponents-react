import{r as i,j as t,O as l}from"./iframe-C8JI7dEI.js";import{useMDXComponents as p}from"./index-Dy3dbavl.js";import{M as u,a as h,n as f}from"./blocks-dOc4ZvhQ.js";import"./Tag-Bh9-KKtm.js";import"./index-BEdzbacm.js";import{F as d}from"./CommandsAndQueries-CAJp8baB.js";import"./copy-vzDhs336.js";import{T as b}from"./TableOfContent-CM5UCwdk.js";import{C}from"./index-C7Uww5eK.js";import{D}from"./BarChart.stories-D5jsP4R2.js";import{D as y}from"./BulletChart.stories-DkXFb1e-.js";import{D as g}from"./ColumnChart.stories-DJTGykl6.js";import{D as v}from"./ColumnChartWithTrend.stories-D6SPMKnW.js";import{D as x}from"./ComposedChart.stories-tXyIwMXR.js";import{D as j}from"./DonutChart.stories-CZNHmD0G.js";import{D as w}from"./LineChart.stories-Bl-fcq16.js";import{D as R}from"./PieChart.stories-BcGNJKtV.js";import{D as I}from"./RadarChart.stories-HyRQRNwy.js";import{D as S}from"./RadialChart.stories-Cc7fscvv.js";import{D as $}from"./ScatterChart.stories-CZ6Ww1fH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DGVxJHTG.js";import"./sys-enter-2-iEzb33ry.js";import"./alert-BG5FVPBd.js";import"./index-Bk0DUMEL.js";import"./index-BeiYD_4I.js";import"./index-B3nw03BL.js";import"./Link-g_43hnwI.js";import"./index-x3EANzLS.js";import"./index-DM_OMODM.js";import"./index-BQN-IPa2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DOnTZlr2.js";import"./addCustomCSSWithScoping-CSnh5KZm.js";import"./index-g7zsKBLX.js";import"./Carousel-sFrh3sU3.js";import"./ScrollEnablement-C16y6Z4B.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DCvIXW5q.js";import"./slim-arrow-left-DQUH2Z4f.js";import"./DemoProps-cN7YTyhv.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C5WCygqH.js";import"./ChartContainer-Duty0xgj.js";import"./index-B0N44tcI.js";import"./useCancelAnimationFallback-CLTZyWmQ.js";import"./YAxisTicks-DftRBklQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B4hPxQh0.js";import"./ChartDataLabel-BTACStUY.js";import"./useOnClickInternal-BHV2n6-D.js";import"./react-content-loader.es-DXKlQKP6.js";import"./useIsRTL-DK7LFoXt.js";import"./useLongestYAxisLabel-Ch2t1Zv6.js";import"./ComposedChart-CRhRORVA.js";import"./Line-Dnqis6cu.js";import"./Scatter-eWQhvYmt.js";import"./index-BU_90CQt.js";import"./index-BZlCg8nb.js";import"./Placeholder-DT7tGumd.js";import"./index-KaJZZBVN.js";const E=`# @ui5/webcomponents-react-charts

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
