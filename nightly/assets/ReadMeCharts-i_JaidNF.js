import{q as i,j as t,Q as l}from"./iframe-D9bwNIEw.js";import{useMDXComponents as p}from"./index-C7Zm3EXU.js";import{M as u,a as h,n as f}from"./blocks-CdTlBqmb.js";import"./Tag-nAJAFGwR.js";import"./index-v7UWUzZA.js";import"./CommandsAndQueries-C_WJZTxK.js";import"./copy-C4qxUcFd.js";import{T as d}from"./TableOfContent-DIRu9y5y.js";import{F as b}from"./Footer-rCYhEoIf.js";import"./PageNotFound-C24XQEWZ.js";import{C}from"./index-CtAShTWo.js";import{D}from"./BarChart.stories-CywOyrFV.js";import{D as y}from"./BulletChart.stories-CiiAq9tF.js";import{D as g}from"./ColumnChart.stories-DQ9fxbff.js";import{D as v}from"./ColumnChartWithTrend.stories-By6VdVuh.js";import{D as x}from"./ComposedChart.stories-Dt1A-cdA.js";import{D as j}from"./DonutChart.stories-BuwZbNfp.js";import{D as w}from"./LineChart.stories-DiIUoG7r.js";import{D as R}from"./PieChart.stories-Bt2RsrKM.js";import{D as I}from"./RadarChart.stories-D7pvfLiJ.js";import{D as S}from"./RadialChart.stories-DKC56z-G.js";import{D as $}from"./ScatterChart.stories-CDam9DBH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BBRTwn-C.js";import"./sys-enter-2-BgYzXgjA.js";import"./alert-Dvz5ATv0.js";import"./Link-DLbf1NX7.js";import"./index-DiWu_OvK.js";import"./index-BWceQhWo.js";import"./index-DX-an7LC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYx-bkvu.js";import"./addCustomCSSWithScoping-CTtTC3T9.js";import"./index-DpP2zBoF.js";import"./index-B5Io8E3V.js";import"./index-DYbVUH4U.js";import"./index-B24aDDF0.js";import"./Illustrations-CAUI_mYY.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DgzPaZ2C.js";import"./ScrollEnablement-C9fhfdHG.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B_klH4P1.js";import"./slim-arrow-left-Bl4tGIQN.js";import"./DemoProps-PMR5vP4Q.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BQOLUeKw.js";import"./ChartContainer-DjDIT15g.js";import"./index-CVcQTqV4.js";import"./useCancelAnimationFallback-x82oBrgv.js";import"./YAxisTicks-CdUzAhXT.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-MXdwI9m6.js";import"./ChartDataLabel-DYzeELHu.js";import"./useOnClickInternal-Dfx3AoCc.js";import"./react-content-loader.es-BEqX8QAd.js";import"./useIsRTL-Df4rTIOc.js";import"./useLongestYAxisLabel-jIsRSQUo.js";import"./ComposedChart-C0fwyRXg.js";import"./Line-Cld4yRsW.js";import"./Scatter-DY05zV2a.js";import"./index-CuCW67j0.js";import"./index-C2bmh809.js";import"./Placeholder-COwM09N3.js";import"./index-C5ExvCsQ.js";const E=`# @ui5/webcomponents-react-charts

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
