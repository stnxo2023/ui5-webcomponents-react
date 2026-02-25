import{r as i,j as t,O as l}from"./iframe-BHlEgbZD.js";import{useMDXComponents as p}from"./index-DuWPJPdo.js";import{M as u,a as h,n as f}from"./blocks-BZ1_Gb0n.js";import"./Tag-CUIBDfjO.js";import"./index-DMcN3ohr.js";import{F as d}from"./CommandsAndQueries-CRy7DgFq.js";import"./copy-Ds19teD5.js";import{T as b}from"./TableOfContent-BKrNqtFR.js";import{C}from"./index-BDO1CtM5.js";import{D}from"./BarChart.stories-8eWPejgi.js";import{D as y}from"./BulletChart.stories-sNh8zMtB.js";import{D as g}from"./ColumnChart.stories-MHmXPu9E.js";import{D as v}from"./ColumnChartWithTrend.stories-C4h94bkE.js";import{D as x}from"./ComposedChart.stories-C_melJ0e.js";import{D as j}from"./DonutChart.stories-BqT2BsQ9.js";import{D as w}from"./LineChart.stories-C-ztOlRq.js";import{D as R}from"./PieChart.stories--JgqkGhm.js";import{D as I}from"./RadarChart.stories-DwG7fwgh.js";import{D as S}from"./RadialChart.stories-BmYhyb4q.js";import{D as $}from"./ScatterChart.stories-CV7hBH1b.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cbg1Tz52.js";import"./sys-enter-2-Z2Vy22vQ.js";import"./alert-BcFaqecl.js";import"./index-57xnhTbk.js";import"./index-D8Q0xw5Q.js";import"./index-CPQEcn_1.js";import"./Link-DdeM_yx0.js";import"./index-DXZq7O0l.js";import"./index-COEmfUFW.js";import"./index-x01lEzby.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbwzLluT.js";import"./addCustomCSSWithScoping-BezKsk6D.js";import"./index-2QbIapUz.js";import"./Carousel-DkvMeTyu.js";import"./ScrollEnablement-Cu7uqZ0X.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D7Eh-plH.js";import"./slim-arrow-left-CdqcfUPj.js";import"./DemoProps-Ily3KFRB.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BIBjNzL7.js";import"./ChartContainer-Crh0MkhL.js";import"./index-C57Z4SS3.js";import"./useCancelAnimationFallback-DF1cjrYM.js";import"./YAxisTicks-C-pncl2K.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BLe-xaSB.js";import"./ChartDataLabel-BoHxoBao.js";import"./useOnClickInternal-C2e0lTah.js";import"./react-content-loader.es-BOKzXsFq.js";import"./useIsRTL-Dp2bM3ZO.js";import"./useLongestYAxisLabel-wOBuwhqb.js";import"./ComposedChart-DO54amq8.js";import"./Line-IzmBt8ku.js";import"./Scatter-CLFXYVAz.js";import"./index-wRW0okO4.js";import"./index-DmY8UNzR.js";import"./Placeholder-DqLwagML.js";import"./index-DpMoLSga.js";const E=`# @ui5/webcomponents-react-charts

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
