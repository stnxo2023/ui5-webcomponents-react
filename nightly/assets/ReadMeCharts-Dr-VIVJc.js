import{r as i,j as t,O as l}from"./iframe-DQ6p6C4w.js";import{useMDXComponents as p}from"./index-PJ7eIANP.js";import{M as u,a as h,n as f}from"./blocks-DzLxfDF_.js";import"./Tag-maX3wI_O.js";import"./index-DMdtpgB4.js";import{F as d}from"./CommandsAndQueries-D4Earqxe.js";import"./copy-DK9nMyWi.js";import{T as b}from"./TableOfContent-DmXt6Qjn.js";import{C}from"./index-RYfieIQ9.js";import{D}from"./BarChart.stories-4X8jaUzX.js";import{D as y}from"./BulletChart.stories-Bbd02DFs.js";import{D as g}from"./ColumnChart.stories-LXe4J7S4.js";import{D as v}from"./ColumnChartWithTrend.stories-CO-FHEQV.js";import{D as x}from"./ComposedChart.stories-C9IIHxPe.js";import{D as j}from"./DonutChart.stories-Dc_Npm3Z.js";import{D as w}from"./LineChart.stories-K9Gr7s7s.js";import{D as R}from"./PieChart.stories-CTY__mhd.js";import{D as I}from"./RadarChart.stories-DzCsJIxY.js";import{D as S}from"./RadialChart.stories-By4zCvLn.js";import{D as $}from"./ScatterChart.stories-DtRUPYu0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DP-BBVKe.js";import"./sys-enter-2-CHLEBxpk.js";import"./alert-DwSet8Gr.js";import"./index-DyLo2c5y.js";import"./index-BX38vZ_H.js";import"./index-Crvp2P38.js";import"./Link-C5vNyymE.js";import"./index-BTeE4XW8.js";import"./index-GGF-6yBD.js";import"./index-BiYiYWPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEFxvwKp.js";import"./addCustomCSSWithScoping-D-NBvgXV.js";import"./index-BBaHTUom.js";import"./Carousel-CF8kzBcq.js";import"./ScrollEnablement-B8wTVu_K.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cuy_rLAY.js";import"./slim-arrow-left-CZiabfJ9.js";import"./DemoProps-4doyWrtt.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CtxqSbV4.js";import"./ChartContainer-V6jsZ_3l.js";import"./index-BFcP-RXU.js";import"./useCancelAnimationFallback-Cka5x362.js";import"./YAxisTicks-CaO69xSX.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BUnHnu-5.js";import"./ChartDataLabel-J64kh_89.js";import"./useOnClickInternal-DwilQi5j.js";import"./react-content-loader.es-DCsL7EHz.js";import"./useIsRTL-DUgzYJYd.js";import"./useLongestYAxisLabel-B1G9Pn_0.js";import"./ComposedChart-D1__hl3O.js";import"./Line-kMdbmh8b.js";import"./Scatter-DH1NFHm3.js";import"./index-DQNSTVX-.js";import"./index-By4aqsM3.js";import"./Placeholder-B7T2SdwF.js";import"./index-CITfSdqZ.js";const E=`# @ui5/webcomponents-react-charts

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
