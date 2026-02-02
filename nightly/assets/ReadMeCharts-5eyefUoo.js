import{r as i,j as t,O as l}from"./iframe-DtD6gRbB.js";import{useMDXComponents as p}from"./index-BiO40HBX.js";import{M as u,a as h,n as f}from"./blocks-Ck7wLHdk.js";import"./Tag-CPFNFbnr.js";import"./index-BiosTbTI.js";import{F as d}from"./CommandsAndQueries-B26crKtq.js";import"./copy-DKyeVOxg.js";import{T as b}from"./TableOfContent-fgADZnKc.js";import{C}from"./index-lcO6_aGH.js";import{D}from"./BarChart.stories-BtLLVzTi.js";import{D as y}from"./BulletChart.stories-CBr8oYNq.js";import{D as g}from"./ColumnChart.stories-DfVpfiUo.js";import{D as v}from"./ColumnChartWithTrend.stories-DOKyKZDE.js";import{D as x}from"./ComposedChart.stories-6pestGZY.js";import{D as j}from"./DonutChart.stories-lbWAE0Ae.js";import{D as w}from"./LineChart.stories-BXfaiKGs.js";import{D as R}from"./PieChart.stories-CkUTnEnW.js";import{D as I}from"./RadarChart.stories-Cf9aQ9xc.js";import{D as S}from"./RadialChart.stories-C3F8F7T6.js";import{D as $}from"./ScatterChart.stories-D6A9vNHL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-uX8_TnNn.js";import"./sys-enter-2-CJJhzBhO.js";import"./alert-BmD5O1ac.js";import"./index-BSRohzC4.js";import"./index-CRlMy3bg.js";import"./index-pV_yzmY_.js";import"./Link-cYpkkuqp.js";import"./index-391GJ7ps.js";import"./index-DCELbeIn.js";import"./index-KaeBEDf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGQO4fMp.js";import"./addCustomCSSWithScoping-Bt7xCKzu.js";import"./index-CDW4JUA8.js";import"./Carousel-BWrq6MlA.js";import"./ScrollEnablement-QSFxM8aV.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BvjpJUTS.js";import"./slim-arrow-left-CTr7jsw4.js";import"./DemoProps-D18wnoXJ.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Bw79p6S9.js";import"./ChartContainer-B5pfKvQP.js";import"./index-C89pqI8n.js";import"./useCancelAnimationFallback-eyA2njbX.js";import"./YAxisTicks-CyvUG9kQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BBlwXwrx.js";import"./ChartDataLabel-6LihIQlV.js";import"./useOnClickInternal-FdYohv9e.js";import"./react-content-loader.es-CrCd8VgZ.js";import"./useIsRTL-CUn0jH8-.js";import"./useLongestYAxisLabel-BIcYqayx.js";import"./ComposedChart-C2R4BlD_.js";import"./Line-UfBd9Rxp.js";import"./Scatter-JLIIVLPL.js";import"./index-DL4kjIkD.js";import"./index-C52Tr2_L.js";import"./Placeholder-C3bcSC1M.js";import"./index-4ObHjGtx.js";const E=`# @ui5/webcomponents-react-charts

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
