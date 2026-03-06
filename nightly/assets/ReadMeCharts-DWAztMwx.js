import{q as i,j as t,Q as l}from"./iframe-E6MBpCAt.js";import{useMDXComponents as p}from"./index-BRlgPkCG.js";import{M as u,a as h,n as f}from"./blocks-WvceCUw-.js";import"./Tag-QOlCM1ZS.js";import"./index-BJtwwTA3.js";import"./CommandsAndQueries-8ny61uxe.js";import"./copy-fO140460.js";import{T as d}from"./TableOfContent-ClshfEpL.js";import{F as b}from"./Footer-BLsFxTJ-.js";import"./PageNotFound-yO0YjSZG.js";import{C}from"./index-BmyYC2Oi.js";import{D}from"./BarChart.stories-C_GJzmfx.js";import{D as y}from"./BulletChart.stories-CPUAMclN.js";import{D as g}from"./ColumnChart.stories-CaFwUrcG.js";import{D as v}from"./ColumnChartWithTrend.stories-OW5pY4IE.js";import{D as x}from"./ComposedChart.stories-BEHceO0f.js";import{D as j}from"./DonutChart.stories-Cbc2xhoq.js";import{D as w}from"./LineChart.stories-DaYWOrmX.js";import{D as R}from"./PieChart.stories-Cs07Berf.js";import{D as I}from"./RadarChart.stories-C1EvbaiQ.js";import{D as S}from"./RadialChart.stories-B5ZpE7cT.js";import{D as $}from"./ScatterChart.stories-2Nxz6Qt-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CRaf149E.js";import"./sys-enter-2-61rHxTWm.js";import"./alert-CCfxXDIv.js";import"./Link-BKpa2-tj.js";import"./index-CzOa4uz9.js";import"./index-D8EadMTD.js";import"./index-C4VaG2ve.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AugRixR5.js";import"./addCustomCSSWithScoping-B5scap8C.js";import"./index-D9THgfPW.js";import"./index-Bbo3k75A.js";import"./index-Cae4RJ4g.js";import"./index-B2yJC31G.js";import"./Illustrations-AQfBdOwC.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DJNEfTHT.js";import"./ScrollEnablement-Be3TO5d_.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B7SiPQF0.js";import"./slim-arrow-left-TA9KlQsO.js";import"./DemoProps-Bu6xjp6Q.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-wZKdZdkc.js";import"./ChartContainer-hwJaAd9x.js";import"./index-DEWKs-pp.js";import"./useCancelAnimationFallback-AquhoOoJ.js";import"./YAxisTicks-B5cLHsKs.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CWC45dWT.js";import"./ChartDataLabel-DBZXvFkq.js";import"./useOnClickInternal-SLIJh3bH.js";import"./react-content-loader.es-BjjQKueH.js";import"./useIsRTL-DIRCSoA5.js";import"./useLongestYAxisLabel-Dg6398Sp.js";import"./ComposedChart-XGG5dG6z.js";import"./Line-DcMEO_TY.js";import"./Scatter-BAF51fLh.js";import"./index-CUzTmFre.js";import"./index-1ykE7HOG.js";import"./Placeholder-CS6gapgE.js";import"./index-CdBiXLtj.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),m=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const s=e.current;return s&&o.length&&(r.current=setInterval(()=>{a.current++,s.navigateTo(a.current%o.length)},5e3)),()=>{m()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{m()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function _t(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{_t as default};
