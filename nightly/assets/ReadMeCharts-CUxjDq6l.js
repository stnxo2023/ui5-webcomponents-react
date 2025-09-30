import{r as i,j as t,T as l}from"./iframe-sceg0YFv.js";import{useMDXComponents as p}from"./index-Dd71zBof.js";import{M as u,a as h,k as f}from"./blocks-DYuUqipq.js";import"./Tag-CeuATfsT.js";import"./index-D3F4cwyn.js";import{F as d}from"./CommandsAndQueries-DKneq4GY.js";import"./copy-BMdV5CCm.js";import{T as b}from"./TableOfContent-CwcK6kQm.js";import{C}from"./index-CHA_XsYr.js";import{D}from"./BarChart.stories-DwlFdwMU.js";import{D as y}from"./BulletChart.stories-B8VZjQrU.js";import{D as g}from"./ColumnChart.stories-CI5v3sVm.js";import{D as v}from"./ColumnChartWithTrend.stories-Iet1TYXn.js";import{D as x}from"./ComposedChart.stories-02WEqxh1.js";import{D as j}from"./DonutChart.stories-BpcR1pWk.js";import{D as w}from"./LineChart.stories-lhICqnng.js";import{D as R}from"./PieChart.stories-Of567F1B.js";import{D as I}from"./RadarChart.stories-BPM1k-Eh.js";import{D as S}from"./RadialChart.stories-BIRdb48j.js";import{D as T}from"./ScatterChart.stories-BdjfVbQM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BKrgGcb8.js";import"./sys-enter-2-t67Ok8iZ.js";import"./alert-DGYqNpWm.js";import"./index-8sMjurJr.js";import"./index-DSENQiVR.js";import"./index-F95KXh_C.js";import"./Link-DWrZ8VdK.js";import"./index-Bk8MfuNW.js";import"./index-CEhCU38B.js";import"./index-DAUv-Nz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrlG2Z_i.js";import"./addCustomCSSWithScoping-CcKa_wrj.js";import"./index-B8FjapMT.js";import"./Carousel-DRSyLIVf.js";import"./ScrollEnablement-D3zh3Kdj.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C3746pJo.js";import"./slim-arrow-left-Bq5xwGmF.js";import"./DemoProps-DLtA1ZXs.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dc7OaDd7.js";import"./ChartContainer-BzC_x-AS.js";import"./index-CZeNbB2P.js";import"./useCancelAnimationFallback-qyWQk62q.js";import"./YAxisTicks-B5cOhbNX.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BqDj4wRl.js";import"./ChartDataLabel-CH-b5g_N.js";import"./useOnClickInternal-DdM0HjgJ.js";import"./react-content-loader.es-Dzz956Ii.js";import"./useIsRTL-2UKl6MPc.js";import"./useLongestYAxisLabel-DBeD4xcF.js";import"./ComposedChart-BWRHPPYr.js";import"./Line-DzTD_rTK.js";import"./Scatter-C86RiM2l.js";import"./index-B5mJuy7Q.js";import"./index-iOrSq7_Y.js";import"./Placeholder-B-bvfZHJ.js";import"./index-R0YMRuZg.js";const $=`# @ui5/webcomponents-react-charts

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
