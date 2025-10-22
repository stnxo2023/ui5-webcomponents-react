import{r as i,j as t,T as l}from"./iframe-BfEtcTHs.js";import{useMDXComponents as p}from"./index-CPCxp1pX.js";import{M as u,a as h,k as f}from"./blocks-BEk0eltt.js";import"./Tag-5zjMhKbj.js";import"./index-Cdy39dSN.js";import{F as d}from"./CommandsAndQueries-XBwAul-0.js";import"./copy-CuNW8uGj.js";import{T as b}from"./TableOfContent-BB2woaWO.js";import{C}from"./index-DN3gj-4S.js";import{D}from"./BarChart.stories-CSfHrHJL.js";import{D as y}from"./BulletChart.stories-DtuDSTNJ.js";import{D as g}from"./ColumnChart.stories-BSRB7FtQ.js";import{D as v}from"./ColumnChartWithTrend.stories-BmsLHbwt.js";import{D as x}from"./ComposedChart.stories-Cz8qDqum.js";import{D as j}from"./DonutChart.stories-BltgWute.js";import{D as w}from"./LineChart.stories-sXpkmNLE.js";import{D as R}from"./PieChart.stories-BWTXPZ_M.js";import{D as I}from"./RadarChart.stories-D6ZOjpQn.js";import{D as S}from"./RadialChart.stories-B7qdopeS.js";import{D as T}from"./ScatterChart.stories-CjYIQOWg.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXNiXlp4.js";import"./sys-enter-2-Da7fZjtE.js";import"./alert-sulwnQm9.js";import"./index-CpslN8bF.js";import"./index-C2AzqXEp.js";import"./index-BoD67Q0d.js";import"./Link-Dx6E4Ul6.js";import"./index-zG-h4Dtj.js";import"./index-DZog4k2R.js";import"./index-SIE8WAww.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DzVstS1R.js";import"./addCustomCSSWithScoping-BOC9QupD.js";import"./index-BwoaU2AB.js";import"./Carousel-DOismP-i.js";import"./ScrollEnablement-CI0R8iiH.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DBVTQlEi.js";import"./slim-arrow-left-Dz-b9sws.js";import"./DemoProps-CRzzGXXz.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BkwlzyXU.js";import"./ChartContainer-BdbYWvUM.js";import"./index-BywWnLvF.js";import"./useCancelAnimationFallback-F0-5Lu_h.js";import"./YAxisTicks-J92jve4z.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-1AIhGqIe.js";import"./ChartDataLabel-C8Ca2jBb.js";import"./useOnClickInternal-BRZwu0mc.js";import"./react-content-loader.es-DaCIAhzg.js";import"./useIsRTL-DwLDEYmZ.js";import"./useLongestYAxisLabel-a1xK9ItQ.js";import"./ComposedChart-DjSsqB5g.js";import"./Line-By7QZpvH.js";import"./Scatter-SBuia5tz.js";import"./index-Bn4LcdFr.js";import"./index-BPDRJZZc.js";import"./Placeholder-D_0PcCoZ.js";import"./index-C8rNAhW-.js";const $=`# @ui5/webcomponents-react-charts

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
