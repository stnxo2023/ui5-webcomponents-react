import{q as i,j as t,Q as l}from"./iframe-ClKZoppV.js";import{useMDXComponents as p}from"./index-BBP-HRkM.js";import{M as u,a as h,n as f}from"./blocks-C6PUfAN7.js";import"./Tag-CnAKe81V.js";import"./index-Brz6Jamn.js";import"./CommandsAndQueries-BSg7r23V.js";import"./copy-rX2zRtcl.js";import{T as d}from"./TableOfContent-sHwgKy8t.js";import{F as b}from"./Footer-BJ8-oElo.js";import"./PageNotFound-DkMfdMip.js";import{C}from"./index-CskdO-68.js";import{D}from"./BarChart.stories-DSuP0B1I.js";import{D as y}from"./BulletChart.stories-CN98dOfe.js";import{D as g}from"./ColumnChart.stories-BlfmtWin.js";import{D as v}from"./ColumnChartWithTrend.stories-a9vBdGE2.js";import{D as x}from"./ComposedChart.stories-BBSyGYYf.js";import{D as j}from"./DonutChart.stories-4WbUKObT.js";import{D as w}from"./LineChart.stories-NA-HQNMq.js";import{D as R}from"./PieChart.stories-DKMCHWtu.js";import{D as I}from"./RadarChart.stories-DS7BChMn.js";import{D as S}from"./RadialChart.stories-Dsr8Bc2f.js";import{D as $}from"./ScatterChart.stories-D6Wuhby3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2rgVrmf.js";import"./sys-enter-2-zNCrvlrA.js";import"./alert-DLSg1FPP.js";import"./Link-DLU4uHoZ.js";import"./index-BFw8ePED.js";import"./index-W9ERffOR.js";import"./index-DG_kdwr6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJ7j91qP.js";import"./addCustomCSSWithScoping-5Po78CSL.js";import"./index-Tx9EfJkS.js";import"./index-Dnwis2Yb.js";import"./index-CEU-nQxX.js";import"./index-kUQXQip-.js";import"./Illustrations-CjXAC4Lw.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DbOi1rNV.js";import"./ScrollEnablement-DisvRpMe.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D2W6svb6.js";import"./slim-arrow-left-D2eIC3jM.js";import"./DemoProps-D_OZQVBB.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-Dghu5b8T.js";import"./ChartContainer-yDi94kq-.js";import"./index-BLYzCrAG.js";import"./useCancelAnimationFallback-Cjajn-jc.js";import"./YAxisTicks-CDtvXo4h.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BtxKqhXR.js";import"./ChartDataLabel-DaAIqohk.js";import"./useOnClickInternal-DxVJE7CC.js";import"./react-content-loader.es-CAHuWFKo.js";import"./useIsRTL-CHRGMaLR.js";import"./useLongestYAxisLabel-BPnFtpGF.js";import"./ComposedChart-mX-WaDKO.js";import"./Line-B534XvPT.js";import"./Scatter-UMqpRSkO.js";import"./index-DpYcOanA.js";import"./index-BB8L6zI5.js";import"./Placeholder-BtBZu0tN.js";import"./index-peWKA09Q.js";const E=`# @ui5/webcomponents-react-charts

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
