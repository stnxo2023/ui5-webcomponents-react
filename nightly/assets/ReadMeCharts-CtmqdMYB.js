import{r as i,j as t,T as l}from"./iframe-CuVq63aR.js";import{useMDXComponents as p}from"./index-0t9brk-b.js";import{M as u,a as h,n as f}from"./blocks-Cc_3mMVm.js";import"./Tag-Dg3yp9Ne.js";import"./index-CzEXcp-Y.js";import{F as d}from"./CommandsAndQueries-Ca8tTwEu.js";import"./copy-B33m91ys.js";import{T as b}from"./TableOfContent-B2bS9DpB.js";import{C}from"./index-BOYtflKX.js";import{D}from"./BarChart.stories-BFpDUA25.js";import{D as y}from"./BulletChart.stories-DicLNhFB.js";import{D as g}from"./ColumnChart.stories-DeRXqMw_.js";import{D as v}from"./ColumnChartWithTrend.stories-D7e50ADM.js";import{D as x}from"./ComposedChart.stories-BO3tRyU1.js";import{D as j}from"./DonutChart.stories-DaK_bPNc.js";import{D as w}from"./LineChart.stories-CuAj878l.js";import{D as R}from"./PieChart.stories-BJ-kwmCi.js";import{D as I}from"./RadarChart.stories-C7kt0f0g.js";import{D as S}from"./RadialChart.stories-Cq263FUE.js";import{D as T}from"./ScatterChart.stories-CzYpP2pj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DZp5RqnQ.js";import"./sys-enter-2-CNKv6pdA.js";import"./alert-7PGhDeFz.js";import"./index-wXdy4JWU.js";import"./index-BxKmXxxw.js";import"./index-KhF7LlaL.js";import"./Link-CIBW5Nwu.js";import"./index-Bncw1rp-.js";import"./index-CTTCfriq.js";import"./index-CNebcKEn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmxSnjHn.js";import"./addCustomCSSWithScoping-C8i5UOAF.js";import"./index-B7_hFjeD.js";import"./Carousel-BxnF4vbp.js";import"./ScrollEnablement-DzyyEcpH.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DQcEx1jr.js";import"./slim-arrow-left-DjIO-_7j.js";import"./DemoProps-ClzxkUYK.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-68FvLGtx.js";import"./ChartContainer-CFpuagQN.js";import"./index-BhS6UWMS.js";import"./useCancelAnimationFallback-DvP6hMbx.js";import"./YAxisTicks-DQj2osg7.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D7GfwjTA.js";import"./ChartDataLabel-D59Ii7Ub.js";import"./useOnClickInternal-CbB2YhTO.js";import"./react-content-loader.es-CIZcUiTh.js";import"./useIsRTL-DqK0RzMa.js";import"./useLongestYAxisLabel-DmbXyU_S.js";import"./ComposedChart-BUHuzf1U.js";import"./Line-BCr6W1Q6.js";import"./Scatter-B0ik_7Sc.js";import"./index-p2QCe1XB.js";import"./index-BEKLF5IG.js";import"./Placeholder-BT5vZLnq.js";import"./index-B2lVY-Od.js";const $=`# @ui5/webcomponents-react-charts

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
