import{q as i,j as t,Q as l}from"./iframe-D-7Wdns9.js";import{useMDXComponents as p}from"./index-DvD8yUkt.js";import{M as u,a as h,n as f}from"./blocks-DbRPcZc3.js";import"./Tag-CnF9nKkB.js";import"./index-Be6zsFxp.js";import"./CommandsAndQueries-DtEJSw4R.js";import"./copy-eIAIBU-7.js";import{T as d}from"./TableOfContent-CHSYHSBj.js";import{F as b}from"./Footer-M_QXWpzq.js";import"./PageNotFound-C1UEztRs.js";import{C}from"./index-DKhh4cOU.js";import{D}from"./BarChart.stories-s07EnZpS.js";import{D as y}from"./BulletChart.stories-Du8hbffm.js";import{D as g}from"./ColumnChart.stories-CgBSQaiK.js";import{D as v}from"./ColumnChartWithTrend.stories-CZxYB7gV.js";import{D as x}from"./ComposedChart.stories-CGobdqFD.js";import{D as j}from"./DonutChart.stories-DQBDz7Bt.js";import{D as w}from"./LineChart.stories-DLa6lNvv.js";import{D as R}from"./PieChart.stories-Bry7qU3F.js";import{D as I}from"./RadarChart.stories-DPEpH3zM.js";import{D as S}from"./RadialChart.stories-DpVDYoFz.js";import{D as $}from"./ScatterChart.stories-CA5NPxxU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJAFTTyQ.js";import"./sys-enter-2-CY8szrdt.js";import"./alert-B0l8ygN-.js";import"./Link-B-zN_JAi.js";import"./index-DvVefbTP.js";import"./index-Bj1jARrT.js";import"./index-Xz-lwjQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyP71rSn.js";import"./addCustomCSSWithScoping-DvzvYvm_.js";import"./index-IYXWglY5.js";import"./index-D18p9Zu8.js";import"./index-jYQjsDyG.js";import"./index-BwYsEJM0.js";import"./Illustrations-BvGUWHq-.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BJfHO5yj.js";import"./ScrollEnablement-U6Xzy_Kr.js";import"./animate-JylhYHXj.js";import"./AnimationMode-SDzEsSuQ.js";import"./slim-arrow-left-fYF8p7W6.js";import"./DemoProps-Bze2FtRY.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-8UbqqYZf.js";import"./ChartContainer-wGiSOCKg.js";import"./index-CAqW3SuX.js";import"./useCancelAnimationFallback-BGj-dWqR.js";import"./YAxisTicks-DksfGegF.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DuVMUXYt.js";import"./ChartDataLabel-C7v9FzTl.js";import"./useOnClickInternal-EF8eKyEj.js";import"./react-content-loader.es-DL0F5gO_.js";import"./useIsRTL-Ba3nL1b4.js";import"./useLongestYAxisLabel-BcY2j5bu.js";import"./ComposedChart-gzf637SA.js";import"./Line-U-V99FSB.js";import"./Scatter-CrkdVYkF.js";import"./index-V-x9Lcje.js";import"./index-DZd-Cyq5.js";import"./Placeholder-BHrafImF.js";import"./index-Nj5uz3J_.js";const E=`# @ui5/webcomponents-react-charts

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
