import{r as i,j as t,O as l}from"./iframe-DT7hQ3AG.js";import{useMDXComponents as p}from"./index-DTdIoXIV.js";import{M as u,a as h,n as f}from"./blocks-JRrvULZW.js";import"./Tag-DiLaQDn-.js";import"./index-B-uTHhu7.js";import{F as d}from"./CommandsAndQueries-yjo1_LDl.js";import"./copy-BZt3PDtc.js";import{T as b}from"./TableOfContent-B-2ElRj_.js";import{C}from"./index-j42pCchm.js";import{D}from"./BarChart.stories-C50C0cU1.js";import{D as y}from"./BulletChart.stories-v5hs-Ako.js";import{D as g}from"./ColumnChart.stories-CoijwV56.js";import{D as v}from"./ColumnChartWithTrend.stories-pLKbO917.js";import{D as x}from"./ComposedChart.stories-B33qSLEz.js";import{D as j}from"./DonutChart.stories-BuwURx5i.js";import{D as w}from"./LineChart.stories-CIFxkDgX.js";import{D as R}from"./PieChart.stories-qVb6JuqN.js";import{D as I}from"./RadarChart.stories-Btc1dtV9.js";import{D as S}from"./RadialChart.stories-DbFtFxJO.js";import{D as $}from"./ScatterChart.stories-DDSt3TlH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BTX-CwCK.js";import"./sys-enter-2-Ckqh2Zib.js";import"./alert-j2_xvgwV.js";import"./index-CddBOV7O.js";import"./index-C77H1xG_.js";import"./index-DnmZF6f8.js";import"./Link-G5lQtbW1.js";import"./index-DOozC4VO.js";import"./index-RcOcV3SW.js";import"./index-BT5-01iU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVNusK2J.js";import"./addCustomCSSWithScoping-BEpn4Gqh.js";import"./index-BRw-bjcq.js";import"./Carousel-CKz3QiJM.js";import"./ScrollEnablement-C3Wt9Cue.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dc_syhIe.js";import"./slim-arrow-left-C5vTuiki.js";import"./DemoProps-BTEn29tO.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-ChdWO5rI.js";import"./ChartContainer-CuDDTs2P.js";import"./index-BJs3_1HF.js";import"./useCancelAnimationFallback-D6QnnOEg.js";import"./YAxisTicks-Cg8c7MY0.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DCn6o7ac.js";import"./ChartDataLabel-xysz6zaG.js";import"./useOnClickInternal-E-IfskbX.js";import"./react-content-loader.es-B5xoVu5R.js";import"./useIsRTL-BIZQiftC.js";import"./useLongestYAxisLabel-BlOofLcZ.js";import"./ComposedChart-BihgFXAR.js";import"./Line-BG8Q5vPj.js";import"./Scatter-BOYGR6Cm.js";import"./index-SuLXxW1t.js";import"./index-B3KMmGrf.js";import"./Placeholder-DuifGLNR.js";import"./index-BryzicLB.js";const E=`# @ui5/webcomponents-react-charts

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
