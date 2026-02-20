import{r as i,j as t,O as l}from"./iframe-D_oMot10.js";import{useMDXComponents as p}from"./index-Cg6HnkxT.js";import{M as u,a as h,n as f}from"./blocks-2cuCWctq.js";import"./Tag-R7_VB2zh.js";import"./index-DYuRbnft.js";import{F as d}from"./CommandsAndQueries-DPkePXTz.js";import"./copy-D4R1-NDI.js";import{T as b}from"./TableOfContent-BFzbgAl_.js";import{C}from"./index-CpOJCF-P.js";import{D}from"./BarChart.stories-e_xVUZHr.js";import{D as y}from"./BulletChart.stories-CIEYryms.js";import{D as g}from"./ColumnChart.stories-BR8Zv2r6.js";import{D as v}from"./ColumnChartWithTrend.stories-D13rW4I8.js";import{D as x}from"./ComposedChart.stories-DZ4Fayai.js";import{D as j}from"./DonutChart.stories-CdWXD_7L.js";import{D as w}from"./LineChart.stories-LRwk7YS7.js";import{D as R}from"./PieChart.stories-Ch3D1Z57.js";import{D as I}from"./RadarChart.stories-CckFYRIY.js";import{D as S}from"./RadialChart.stories-BGNB3VLS.js";import{D as $}from"./ScatterChart.stories-Doqc7pxt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D9-yMhmx.js";import"./sys-enter-2-B1tI1-EQ.js";import"./alert-C600_lKj.js";import"./index-Ds5vSSWx.js";import"./index-3r4NxXtD.js";import"./index-DO_1WCge.js";import"./Link-9JdM6Hjv.js";import"./index-DnX1qu0M.js";import"./index-DRuRCvkV.js";import"./index-1pxNHpjB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-izT7sph5.js";import"./addCustomCSSWithScoping-BPH8FgqV.js";import"./index-s1VP44pI.js";import"./Carousel-XvSxvvWj.js";import"./ScrollEnablement-DXy9g_lY.js";import"./animate-JylhYHXj.js";import"./AnimationMode-2HRyAX5h.js";import"./slim-arrow-left-Jyz6L9Mv.js";import"./DemoProps-CTTR2o_O.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cui_HDZX.js";import"./ChartContainer-BebU9COL.js";import"./index-DyWV_0XY.js";import"./useCancelAnimationFallback-89IegQBb.js";import"./YAxisTicks-CCN6Mh6n.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BZxOh6Zx.js";import"./ChartDataLabel-w8hLts-P.js";import"./useOnClickInternal-C_-Cja5E.js";import"./react-content-loader.es-CN02Gnfc.js";import"./useIsRTL-DpJLc3e9.js";import"./useLongestYAxisLabel-CQygPE9V.js";import"./ComposedChart-D7v6TJTn.js";import"./Line-BgvFVX8A.js";import"./Scatter-Bd6r4reN.js";import"./index-DlwwHekg.js";import"./index-tAw36ifr.js";import"./Placeholder-Dx7KTf4h.js";import"./index-CtQhWY1P.js";const E=`# @ui5/webcomponents-react-charts

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
