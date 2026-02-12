import{r as i,j as t,O as l}from"./iframe-Hc0Jcm1H.js";import{useMDXComponents as p}from"./index-DuUU5AC1.js";import{M as u,a as h,n as f}from"./blocks-Blx2ursY.js";import"./Tag-DWcxngX2.js";import"./index-X6pjtL8_.js";import{F as d}from"./CommandsAndQueries-DaPP_-f6.js";import"./copy-BhskYI2N.js";import{T as b}from"./TableOfContent-yaPdzqTW.js";import{C}from"./index-mHK4roMV.js";import{D}from"./BarChart.stories-PzFznEhr.js";import{D as y}from"./BulletChart.stories-CKeIBzZG.js";import{D as g}from"./ColumnChart.stories-BiD96xyw.js";import{D as v}from"./ColumnChartWithTrend.stories-CEnt9hqp.js";import{D as x}from"./ComposedChart.stories-BcZUt6lX.js";import{D as j}from"./DonutChart.stories-DywXJi47.js";import{D as w}from"./LineChart.stories-DHIsAaJN.js";import{D as R}from"./PieChart.stories-Dujpd8TE.js";import{D as I}from"./RadarChart.stories-4rps9xXB.js";import{D as S}from"./RadialChart.stories-j34ybGWU.js";import{D as $}from"./ScatterChart.stories-LxrBhwVV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-MEaUQuQF.js";import"./sys-enter-2-Bor4HzlU.js";import"./alert-B5sjmhde.js";import"./index-CQCUFERN.js";import"./index-BZHpmRs9.js";import"./index-BP8PtjoR.js";import"./Link-B4jgiGqN.js";import"./index-D4_s-XzL.js";import"./index-DixWMcP9.js";import"./index-YGVe_Lue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSgKpTfU.js";import"./addCustomCSSWithScoping-C31rwvDU.js";import"./index-CJBWc845.js";import"./Carousel-UeMA73j7.js";import"./ScrollEnablement-DdNa3g_Z.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DGfnK-Ls.js";import"./slim-arrow-left-CozdZieM.js";import"./DemoProps-n6okEC1y.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BWzVD5SR.js";import"./ChartContainer-Bpju7oYi.js";import"./index-BF_BhXaP.js";import"./useCancelAnimationFallback-GjSny8tZ.js";import"./YAxisTicks-BRgh1TG8.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DDZ6dJVn.js";import"./ChartDataLabel-BhHXv4b9.js";import"./useOnClickInternal-BP76N0ND.js";import"./react-content-loader.es-mk9aX3oy.js";import"./useIsRTL-BnF71Q9x.js";import"./useLongestYAxisLabel-G0kVJPbn.js";import"./ComposedChart-dKB9kG3b.js";import"./Line-CvGlmQrC.js";import"./Scatter-BQY2v16F.js";import"./index-CG8be2EF.js";import"./index-7u6Dklxx.js";import"./Placeholder-BhipdaQZ.js";import"./index-DU1QWc22.js";const E=`# @ui5/webcomponents-react-charts

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
