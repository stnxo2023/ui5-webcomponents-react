import{r as i,j as t,O as l}from"./iframe-Qn10Vv46.js";import{useMDXComponents as p}from"./index-Dn_QNZXe.js";import{M as u,a as h,n as f}from"./blocks-CqvMe-zP.js";import"./Tag-D88IrP9Y.js";import"./index-CPne16Vl.js";import{F as d}from"./CommandsAndQueries-BS5w0Fww.js";import"./copy-CASyM-HB.js";import{T as b}from"./TableOfContent-BRG6Q4qe.js";import{C}from"./index-whbskC6R.js";import{D}from"./BarChart.stories-BoACsMbL.js";import{D as y}from"./BulletChart.stories-Ui2_EYeO.js";import{D as g}from"./ColumnChart.stories-CQ-jNeCy.js";import{D as v}from"./ColumnChartWithTrend.stories-FjTIjdlj.js";import{D as x}from"./ComposedChart.stories-BsfQhdPR.js";import{D as j}from"./DonutChart.stories-BsXLmjDz.js";import{D as w}from"./LineChart.stories-CdXPIRUW.js";import{D as R}from"./PieChart.stories-CcAQKVbt.js";import{D as I}from"./RadarChart.stories-Bo6EzF4f.js";import{D as S}from"./RadialChart.stories-B2vyRy2J.js";import{D as $}from"./ScatterChart.stories-DHRC5q2Z.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BED9_Z-O.js";import"./sys-enter-2-DmPWvQNd.js";import"./alert-CtILWS1T.js";import"./index-1Dq2e1Fv.js";import"./index-D9ZF8-N2.js";import"./index-u07ulNkL.js";import"./Link-B9oRKMRP.js";import"./index-Btsu4EzQ.js";import"./index-D7W_CU3P.js";import"./index-Qf4zPxvx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyNR1Lsa.js";import"./addCustomCSSWithScoping-BMEnUHPm.js";import"./index-BCXe2PbY.js";import"./Carousel-B8mm3fe1.js";import"./ScrollEnablement-BI5-jdZK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-7_RoJF2w.js";import"./slim-arrow-left-MRsoYYJJ.js";import"./DemoProps-BbvaCjIw.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-lQ_JIszm.js";import"./ChartContainer-iUkIgy6a.js";import"./index-BmRC0J2V.js";import"./useCancelAnimationFallback-DDsjMj99.js";import"./YAxisTicks-B0VUDlR9.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CpByX-4F.js";import"./ChartDataLabel-BbP2sEaC.js";import"./useOnClickInternal-DOeYlJza.js";import"./react-content-loader.es-DEMzcCcB.js";import"./useIsRTL-0Grxk9f4.js";import"./useLongestYAxisLabel-CDnQYRc9.js";import"./ComposedChart-C6iHG3RW.js";import"./Line-PSEpvuMo.js";import"./Scatter-BTnwmp_S.js";import"./index-BHX2mp3z.js";import"./index-bgJb_9ml.js";import"./Placeholder-BqyuoHMh.js";import"./index-Cn7AKvas.js";const E=`# @ui5/webcomponents-react-charts

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
