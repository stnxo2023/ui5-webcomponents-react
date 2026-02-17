import{r as i,j as t,O as l}from"./iframe-DQUr2w9e.js";import{useMDXComponents as p}from"./index-uEfBZmVP.js";import{M as u,a as h,n as f}from"./blocks-CTU8TRaT.js";import"./Tag-CGtAgsci.js";import"./index-CHsUWkTe.js";import{F as d}from"./CommandsAndQueries-BHqFNGC1.js";import"./copy-DGFXVa9Z.js";import{T as b}from"./TableOfContent-DJz6oSi_.js";import{C}from"./index-BhQbI42o.js";import{D}from"./BarChart.stories-C3f0AMvX.js";import{D as y}from"./BulletChart.stories-Bp5oO9cY.js";import{D as g}from"./ColumnChart.stories-B3g7A9G1.js";import{D as v}from"./ColumnChartWithTrend.stories-CthdQm4X.js";import{D as x}from"./ComposedChart.stories-Dadj1lAz.js";import{D as j}from"./DonutChart.stories-Bu3Jdr1O.js";import{D as w}from"./LineChart.stories-BZjqTAJt.js";import{D as R}from"./PieChart.stories-DadtsRwS.js";import{D as I}from"./RadarChart.stories-mij8uYkh.js";import{D as S}from"./RadialChart.stories-C9DAjSq6.js";import{D as $}from"./ScatterChart.stories-DOJ_rh0y.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BjEP1Brt.js";import"./sys-enter-2-ByVlGYkM.js";import"./alert-B-w-1j20.js";import"./index-BbVmwePH.js";import"./index-2aCTTGoH.js";import"./index-BtkqIySi.js";import"./Link-BHxA_VPp.js";import"./index-CSO1LyL1.js";import"./index-B4uSF3Nb.js";import"./index-CNdVS1MW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpPxZFHh.js";import"./addCustomCSSWithScoping-CYkIrudw.js";import"./index-4ddJk1R_.js";import"./Carousel-BKEkXoee.js";import"./ScrollEnablement-CQrRan6G.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CSkgAE2y.js";import"./slim-arrow-left-DqRnhqo3.js";import"./DemoProps-CmcWcmg0.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BqE6bKNR.js";import"./ChartContainer-5yABoUmf.js";import"./index-v9z5Zdm8.js";import"./useCancelAnimationFallback-BEfbKCyN.js";import"./YAxisTicks-DgokF-rc.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DJJyb-63.js";import"./ChartDataLabel-vM-Y6tuP.js";import"./useOnClickInternal-DxkejAix.js";import"./react-content-loader.es-C5EmW685.js";import"./useIsRTL-hjHvlJ0f.js";import"./useLongestYAxisLabel-B8RKJwdw.js";import"./ComposedChart-DmYyKX6z.js";import"./Line-64EU42GN.js";import"./Scatter-CIXuMprQ.js";import"./index-BTieGa_1.js";import"./index-B0JEhXR_.js";import"./Placeholder-CyhtojUq.js";import"./index-Dc09lQTO.js";const E=`# @ui5/webcomponents-react-charts

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
