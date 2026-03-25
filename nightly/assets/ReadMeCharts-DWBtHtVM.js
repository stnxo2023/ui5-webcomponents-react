import{n as i,j as t,N as l}from"./iframe-DNJyEiMc.js";import{useMDXComponents as p}from"./index-Buf0tSMZ.js";import{M as u,a as h,n as f}from"./blocks-Cd1leuxf.js";import"./Tag-D8I94QaD.js";import"./index-BGa7wgQo.js";import"./CommandsAndQueries-Buhz4vLI.js";import"./copy-DriogBoE.js";import{T as d}from"./TableOfContent-Cp2ISJUt.js";import{F as b}from"./Footer-DsUhWQr2.js";import"./PageNotFound-CGNJPiuA.js";import{C}from"./index-NYYT39eI.js";import{D}from"./BarChart.stories-D6MQ8Fnz.js";import{D as y}from"./BulletChart.stories-DVhRfW1v.js";import{D as g}from"./ColumnChart.stories-CaZv4K52.js";import{D as v}from"./ColumnChartWithTrend.stories-DaRXbAUS.js";import{D as x}from"./ComposedChart.stories-Bae8n7Ym.js";import{D as j}from"./DonutChart.stories-DoC-SPKm.js";import{D as w}from"./LineChart.stories-Bgrm2xIJ.js";import{D as R}from"./PieChart.stories-BIfB_goa.js";import{D as I}from"./RadarChart.stories-DvShCuDo.js";import{D as S}from"./RadialChart.stories-C14zT1vv.js";import{D as $}from"./ScatterChart.stories-BV1a_lzM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CKmAqDt9.js";import"./sys-enter-2-D1jYlQdI.js";import"./alert-BbM4Afj3.js";import"./Link-CHa9FW0P.js";import"./index-bWFHrqMY.js";import"./index-DcpLgbSq.js";import"./index-BNiXpovA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cm_sH4gX.js";import"./addCustomCSSWithScoping-QHxNEQro.js";import"./index-CRk1MYZt.js";import"./index-DfQ2RFhn.js";import"./index-C8jwJsjc.js";import"./index-DbBWaCWe.js";import"./Illustrations-8c1koKlL.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DEt2FHR1.js";import"./ScrollEnablement-gz1VS6rK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BcXgDgwf.js";import"./slim-arrow-left-Btrj1-0i.js";import"./DemoProps-uHmChRbJ.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-CT0d6AMP.js";import"./ChartContainer-CvhBGHb8.js";import"./index-C4LD5Tmv.js";import"./useCancelAnimationFallback-7FlncvCy.js";import"./YAxisTicks-OeYgDlV1.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CNLIilLv.js";import"./ChartDataLabel-BFuhKYdJ.js";import"./useOnClickInternal-CyTdLxyv.js";import"./react-content-loader.es-BGf64MyS.js";import"./useIsRTL-Di8TIgI9.js";import"./useLongestYAxisLabel-B3tJ3dii.js";import"./ComposedChart-ClbgiAar.js";import"./Line-v3rkJFWz.js";import"./Scatter-BPjLPv8Z.js";import"./index-BmpjuOKx.js";import"./index-C2XcslCz.js";import"./Placeholder-CsDvrUu7.js";import"./index-DMS8xLZ3.js";const E=`# @ui5/webcomponents-react-charts

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
