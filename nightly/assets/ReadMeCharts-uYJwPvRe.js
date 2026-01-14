import{r as i,j as t,T as l}from"./iframe-C8VIz1cN.js";import{useMDXComponents as p}from"./index-DF3oZ9DD.js";import{M as u,a as h,n as f}from"./blocks-D-v6PHKz.js";import"./Tag-Ce9kI3uB.js";import"./index-W-CFrWn1.js";import{F as d}from"./CommandsAndQueries-D_HB_HX-.js";import"./copy-ChBzOjSf.js";import{T as b}from"./TableOfContent-rBzrQ-hO.js";import{C}from"./index-CuqN9qVJ.js";import{D}from"./BarChart.stories-rCcfGZJB.js";import{D as y}from"./BulletChart.stories-DISX0NvM.js";import{D as g}from"./ColumnChart.stories-3vHK3vsM.js";import{D as v}from"./ColumnChartWithTrend.stories-B8HMS6wI.js";import{D as x}from"./ComposedChart.stories-DntCWZRJ.js";import{D as j}from"./DonutChart.stories-0UdKAHzu.js";import{D as w}from"./LineChart.stories-BZudNq9a.js";import{D as R}from"./PieChart.stories-uPXG8Sfc.js";import{D as I}from"./RadarChart.stories-CH0jvH0V.js";import{D as S}from"./RadialChart.stories-DmS6Vnuq.js";import{D as T}from"./ScatterChart.stories-pfSw-ShE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Hi7RSuvY.js";import"./sys-enter-2-CeqtRGpA.js";import"./alert-DDLVUdt7.js";import"./index-CK3WOJt5.js";import"./index-IuSSn5Ye.js";import"./index-zu9Y-W0w.js";import"./Link-8iQqMH3R.js";import"./index-DVHGI5Hf.js";import"./index-CQjs21SR.js";import"./index-D5h2jV28.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VSpt3ox9.js";import"./addCustomCSSWithScoping-BS3ufxCI.js";import"./index-C3PbHa_S.js";import"./Carousel-f8YSnOtA.js";import"./ScrollEnablement-BP5kJ35e.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CfGLkUmW.js";import"./slim-arrow-left-ClDF_jsp.js";import"./DemoProps-d2yL-lD-.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Byn_Fh99.js";import"./ChartContainer-CxayBh_N.js";import"./index-DmUuUpYf.js";import"./useCancelAnimationFallback-BPlQKMEf.js";import"./YAxisTicks-DEO1H0OL.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BOQdBBGX.js";import"./ChartDataLabel-BeHmcRbx.js";import"./useOnClickInternal-C7gN6Zgm.js";import"./react-content-loader.es-BpwoOquT.js";import"./useIsRTL-74j_AZIC.js";import"./useLongestYAxisLabel-CubNSvwt.js";import"./ComposedChart-C8vtQVax.js";import"./Line-B_TKp9-l.js";import"./Scatter-Bb1tcUwe.js";import"./index-DKHJv1G3.js";import"./index-CvA57D2P.js";import"./Placeholder-CvE3qsfZ.js";import"./index-e8VUp728.js";const $=`# @ui5/webcomponents-react-charts

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
