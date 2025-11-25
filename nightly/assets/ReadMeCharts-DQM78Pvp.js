import{r as i,j as t,T as l}from"./iframe-DqhX_Hdp.js";import{useMDXComponents as p}from"./index-B-LlaBAd.js";import{M as u,a as h,m as f}from"./blocks-BTKPnx40.js";import"./Tag-t-9sbcO3.js";import"./index-eBm8t70p.js";import{F as d}from"./CommandsAndQueries-Ctn2WqFW.js";import"./copy-BkBAOPVd.js";import{T as b}from"./TableOfContent-C8QLWD0L.js";import{C}from"./index-Dij09_e2.js";import{D}from"./BarChart.stories-BrW2GA1N.js";import{D as y}from"./BulletChart.stories-l1Nvc56f.js";import{D as g}from"./ColumnChart.stories-Sgtrh4z-.js";import{D as v}from"./ColumnChartWithTrend.stories-BgPF_rCj.js";import{D as x}from"./ComposedChart.stories-CtYhJe9c.js";import{D as j}from"./DonutChart.stories-C2yerlBv.js";import{D as w}from"./LineChart.stories-BTgl6tVT.js";import{D as R}from"./PieChart.stories-7PAuDXrL.js";import{D as I}from"./RadarChart.stories-CIVqjlpa.js";import{D as S}from"./RadialChart.stories-CWLrKcBZ.js";import{D as T}from"./ScatterChart.stories-Db9FHnPk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DBUGylnd.js";import"./sys-enter-2-CQyTlO0m.js";import"./alert-OnHFbpl_.js";import"./index-BeJ9wz7o.js";import"./index-DCixdKQP.js";import"./index-BJOWTBa5.js";import"./Link-KAeBCRn4.js";import"./index-CZfYA9Jl.js";import"./index-D2G6pSj4.js";import"./index-CqRqJjYx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Duf1worp.js";import"./addCustomCSSWithScoping-BTNZ7_2D.js";import"./index-CuoIUeLC.js";import"./Carousel-BObIapvq.js";import"./ScrollEnablement-B9Jmoik0.js";import"./animate-JylhYHXj.js";import"./AnimationMode-LdJCto7T.js";import"./slim-arrow-left-D9HkqOQX.js";import"./DemoProps-QbDlg29Q.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CoEHnAXQ.js";import"./ChartContainer-Dvlj8S_T.js";import"./index-DxAT9tTr.js";import"./useCancelAnimationFallback-CK7-9sNf.js";import"./YAxisTicks-D9uVuZnl.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-JCEMLVtD.js";import"./ChartDataLabel-TmND_cAq.js";import"./useOnClickInternal-BoKllN94.js";import"./react-content-loader.es-BEt3L-zy.js";import"./useIsRTL-DHOA1SXn.js";import"./useLongestYAxisLabel-cGzMsjAL.js";import"./ComposedChart-CB1idcq_.js";import"./Line-ChfMTAaL.js";import"./Scatter-DMVgICW2.js";import"./index-HEEv4Q1j.js";import"./index-sD2YSbqc.js";import"./Placeholder-CWLhqcc9.js";import"./index-DRDVi04q.js";const $=`# @ui5/webcomponents-react-charts

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
