import{r as i,j as t,O as l}from"./iframe-CeMquKfU.js";import{useMDXComponents as p}from"./index-BbFo7jBM.js";import{M as u,a as h,n as f}from"./blocks-Db1iDIvu.js";import"./Tag-DBOPR6ka.js";import"./index-BWGqmYD4.js";import{F as d}from"./CommandsAndQueries-DG6G8TEI.js";import"./copy-DuOXgjDa.js";import{T as b}from"./TableOfContent-DfQZ96tK.js";import{C}from"./index-M3j2O8UP.js";import{D}from"./BarChart.stories-CyPr0_Qy.js";import{D as y}from"./BulletChart.stories-DNeFGnI7.js";import{D as g}from"./ColumnChart.stories-DVoaW3dt.js";import{D as v}from"./ColumnChartWithTrend.stories-Ci-dv69l.js";import{D as x}from"./ComposedChart.stories-CtqQsjG9.js";import{D as j}from"./DonutChart.stories-H1oOVgQK.js";import{D as w}from"./LineChart.stories-DtzCwb1s.js";import{D as R}from"./PieChart.stories-ByOBmMgV.js";import{D as I}from"./RadarChart.stories-CHhXRdgW.js";import{D as S}from"./RadialChart.stories-DU39CixM.js";import{D as $}from"./ScatterChart.stories-g9Xke41j.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BF8hjIJ6.js";import"./sys-enter-2-CBCKgEbS.js";import"./alert-DPPxzZqA.js";import"./index-DYb2g8Yq.js";import"./index-srI8srsL.js";import"./index-WnbBQODb.js";import"./Link-B4KwrrH9.js";import"./index-Brk-KPPC.js";import"./index-jfPm289V.js";import"./index-DMujUK6u.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RK7-B4yx.js";import"./addCustomCSSWithScoping-06k5HVP6.js";import"./index-CQMy8EdC.js";import"./Carousel-BcpvyvbB.js";import"./ScrollEnablement-C-b-W7id.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dn1fRtUG.js";import"./slim-arrow-left-DZIDoKA-.js";import"./DemoProps-D0xUKuv2.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DS4nu9X8.js";import"./ChartContainer-WFPcu3rG.js";import"./index-_bp4qzZ2.js";import"./useCancelAnimationFallback-CYfZ9cOB.js";import"./YAxisTicks-Q57dAGP8.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BMCYvbNj.js";import"./ChartDataLabel-BrftBA4s.js";import"./useOnClickInternal-BTqtqhJr.js";import"./react-content-loader.es-BRm0Dkv3.js";import"./useIsRTL-CjonKQN8.js";import"./useLongestYAxisLabel-UkugcL51.js";import"./ComposedChart-wmvTws2e.js";import"./Line-BzfxCZ37.js";import"./Scatter-DPZ7WJfJ.js";import"./index-56UKBNjh.js";import"./index-B2WhAYjm.js";import"./Placeholder-Cno3I3fY.js";import"./index-DzT7FXAr.js";const E=`# @ui5/webcomponents-react-charts

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
