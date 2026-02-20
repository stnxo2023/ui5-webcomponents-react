import{r as i,j as t,O as l}from"./iframe-UvPIdInY.js";import{useMDXComponents as p}from"./index-C_wnFVs3.js";import{M as u,a as h,n as f}from"./blocks-D0ZGQgrL.js";import"./Tag-IR_ETKFS.js";import"./index-D9ZFZ6F-.js";import{F as d}from"./CommandsAndQueries-aWAd2RXn.js";import"./copy-BE3LAxqE.js";import{T as b}from"./TableOfContent-C3sVY331.js";import{C}from"./index-ckVXgpPk.js";import{D}from"./BarChart.stories-XzcXXHIA.js";import{D as y}from"./BulletChart.stories-32-SbRNG.js";import{D as g}from"./ColumnChart.stories-BfpunWZl.js";import{D as v}from"./ColumnChartWithTrend.stories-p1a7MiGZ.js";import{D as x}from"./ComposedChart.stories-tr9P1oGl.js";import{D as j}from"./DonutChart.stories-DHJJ2o0a.js";import{D as w}from"./LineChart.stories-CrgLsSFx.js";import{D as R}from"./PieChart.stories-ytDOuyqU.js";import{D as I}from"./RadarChart.stories-Rod_wF_8.js";import{D as S}from"./RadialChart.stories-D4Q1GOjm.js";import{D as $}from"./ScatterChart.stories-dPY8do3k.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BPTpUfW-.js";import"./sys-enter-2-CWNypIDi.js";import"./alert-CSWOQ1yD.js";import"./index-O5JzLw5N.js";import"./index-Ba89z5vW.js";import"./index-mim0XNOQ.js";import"./Link-BLS11L9W.js";import"./index-B0iNMIwQ.js";import"./index-CXKBVYRd.js";import"./index-Bvo9-fQy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNxf-Cq6.js";import"./addCustomCSSWithScoping-7EyTrlnL.js";import"./index-D_al-J9d.js";import"./Carousel-DU4kLfMh.js";import"./ScrollEnablement-CroMdMI1.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BiWF7uTI.js";import"./slim-arrow-left-CcKh7oI8.js";import"./DemoProps-qMrAQ99b.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B7uchfIB.js";import"./ChartContainer-BbbYfn60.js";import"./index-C819hH3W.js";import"./useCancelAnimationFallback-CTFg--yR.js";import"./YAxisTicks-Cka44Yu4.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DQsegjuB.js";import"./ChartDataLabel-JWgpuVJR.js";import"./useOnClickInternal-jlXM7nag.js";import"./react-content-loader.es-Gxp7w_hZ.js";import"./useIsRTL-58ApOM2Q.js";import"./useLongestYAxisLabel-CWqyfNIQ.js";import"./ComposedChart-Bh9chdPV.js";import"./Line-Chag8Cmw.js";import"./Scatter-B9-wFkkq.js";import"./index-DNzi-fmd.js";import"./index-CbYusJdN.js";import"./Placeholder-Dskm_Pj3.js";import"./index-DiqfKmGK.js";const E=`# @ui5/webcomponents-react-charts

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
