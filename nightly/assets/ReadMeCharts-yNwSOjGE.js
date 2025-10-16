import{r as i,j as t,T as l}from"./iframe-DLLHCOr5.js";import{useMDXComponents as p}from"./index-DJhuuP5S.js";import{M as u,a as h,k as f}from"./blocks-D_qB0yom.js";import"./Tag-CGNpKNva.js";import"./index-Cv7FhAKP.js";import{F as d}from"./CommandsAndQueries-CaYUL-bi.js";import"./copy-Cys4niF0.js";import{T as b}from"./TableOfContent-CRD6TcR1.js";import{C}from"./index-DQUNw5Vj.js";import{D}from"./BarChart.stories-DsfrXpa2.js";import{D as y}from"./BulletChart.stories-CaFkchRV.js";import{D as g}from"./ColumnChart.stories-eKoLtM4K.js";import{D as v}from"./ColumnChartWithTrend.stories-CCKfxIsz.js";import{D as x}from"./ComposedChart.stories-C6ixTB0i.js";import{D as j}from"./DonutChart.stories-1RG3Jn8T.js";import{D as w}from"./LineChart.stories-BT7s1XiE.js";import{D as R}from"./PieChart.stories-B4vJZ3pJ.js";import{D as I}from"./RadarChart.stories-BYWJFi4V.js";import{D as S}from"./RadialChart.stories-CnhH721j.js";import{D as T}from"./ScatterChart.stories-EHxUe7SD.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CmFfgInF.js";import"./sys-enter-2-DHyR85OV.js";import"./alert-CdfvMLA2.js";import"./index-DWbKcn7h.js";import"./index-Da6fGSa9.js";import"./index-DrM1gAbM.js";import"./Link-8v74zIQt.js";import"./index-A4gWreS6.js";import"./index-CpOm_QTG.js";import"./index-C8Oz3tPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI75F9lq.js";import"./addCustomCSSWithScoping-B4YqD5EP.js";import"./index-CfRl_je5.js";import"./Carousel-DTn66Ejv.js";import"./ScrollEnablement-Dc6bPMsH.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BvQtOHg6.js";import"./slim-arrow-left-Cs0xJ3xX.js";import"./DemoProps-xM6SX0-A.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dxz4i3iy.js";import"./ChartContainer-BljZogN2.js";import"./index-C58XlVcT.js";import"./useCancelAnimationFallback-DKFp3_gz.js";import"./YAxisTicks-CcY2yy3o.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DR7TyTac.js";import"./ChartDataLabel-B01u6i7A.js";import"./useOnClickInternal-CXMTenC0.js";import"./react-content-loader.es-Bijb_r5q.js";import"./useIsRTL-DDSow5dA.js";import"./useLongestYAxisLabel-5-REwxsI.js";import"./ComposedChart-DesOLX9P.js";import"./Line-uJ-njeTz.js";import"./Scatter-BCxps75B.js";import"./index-C6nI4P6H.js";import"./index-DK47Vfqj.js";import"./Placeholder-BQvNHUUt.js";import"./index-CGoYxUxZ.js";const $=`# @ui5/webcomponents-react-charts

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
