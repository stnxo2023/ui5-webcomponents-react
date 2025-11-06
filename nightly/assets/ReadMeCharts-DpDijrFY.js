import{r as i,j as t,T as l}from"./iframe-DBm0KKUf.js";import{useMDXComponents as p}from"./index-Cb8BN12q.js";import{M as u,a as h,m as f}from"./blocks-FcKewvzz.js";import"./Tag-DHtv4MjB.js";import"./index-D7OJqnCE.js";import{F as d}from"./CommandsAndQueries-CpqOMU0z.js";import"./copy-CNODe6O-.js";import{T as b}from"./TableOfContent-DnOFyy0u.js";import{C}from"./index-DiaHlUrx.js";import{D}from"./BarChart.stories-DMIOhnFw.js";import{D as y}from"./BulletChart.stories-CasEbCZ3.js";import{D as g}from"./ColumnChart.stories-BiOeQuop.js";import{D as v}from"./ColumnChartWithTrend.stories-Brh5RKem.js";import{D as x}from"./ComposedChart.stories-DGBx412Y.js";import{D as j}from"./DonutChart.stories--YsWzuAn.js";import{D as w}from"./LineChart.stories-DepuEqrZ.js";import{D as R}from"./PieChart.stories-D-Nz4Vif.js";import{D as I}from"./RadarChart.stories-DnZqGau6.js";import{D as S}from"./RadialChart.stories-36xT9TzZ.js";import{D as T}from"./ScatterChart.stories-B_8-YfR3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BXDVlLxS.js";import"./sys-enter-2-B25DXxek.js";import"./alert-ia9fKkJ9.js";import"./index-C_dJ2uG6.js";import"./index-DSRVWdNr.js";import"./index-4ENMwVth.js";import"./Link-Ct9C2jWR.js";import"./index-T96p6BIB.js";import"./index-DM0eg3qI.js";import"./index-Ccfulnyg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPyGpBqG.js";import"./addCustomCSSWithScoping-DI0oMdV8.js";import"./index-BAUdr3me.js";import"./Carousel-BWkcbEdf.js";import"./ScrollEnablement-BmlbbPDx.js";import"./animate-JylhYHXj.js";import"./AnimationMode-58VlZEV2.js";import"./slim-arrow-left-BnkWd_K6.js";import"./DemoProps-DLglSsYU.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BAb5fR1a.js";import"./ChartContainer-tFdtg5y1.js";import"./index-CvZtp7o3.js";import"./useCancelAnimationFallback-DFGiKoyS.js";import"./YAxisTicks-By1PlqYD.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-f2rnSKpZ.js";import"./ChartDataLabel-CawpZXN7.js";import"./useOnClickInternal-C6REeLSY.js";import"./react-content-loader.es-CHfJaJVQ.js";import"./useIsRTL-DB-7ieif.js";import"./useLongestYAxisLabel-D5dhq_Zy.js";import"./ComposedChart-Cv3ORyZk.js";import"./Line-7GxzJ5k-.js";import"./Scatter-Dfbpgg_6.js";import"./index-BsaKslNK.js";import"./index-oQrDox3E.js";import"./Placeholder-CcuKNhJg.js";import"./index-DuJjUoKs.js";const $=`# @ui5/webcomponents-react-charts

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
