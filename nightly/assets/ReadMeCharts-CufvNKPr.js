import{r as i,j as t,T as l}from"./iframe-BkU8WQpb.js";import{useMDXComponents as p}from"./index-BeG8GrN5.js";import{M as u,a as h,n as f}from"./blocks-CLMMfPPt.js";import"./Tag-Cih70sHI.js";import"./index-DnBqZpyB.js";import{F as d}from"./CommandsAndQueries-DetvrItO.js";import"./copy-B4HTDbaZ.js";import{T as b}from"./TableOfContent-PrM3zgzS.js";import{C}from"./index-C51oykhO.js";import{D}from"./BarChart.stories-CHH1bnRw.js";import{D as y}from"./BulletChart.stories-zoSldXWH.js";import{D as g}from"./ColumnChart.stories-Dvt2NG_l.js";import{D as v}from"./ColumnChartWithTrend.stories-DPw_MU07.js";import{D as x}from"./ComposedChart.stories-BNkfVuoA.js";import{D as j}from"./DonutChart.stories-B6SOKdeO.js";import{D as w}from"./LineChart.stories-BYmxjZf8.js";import{D as R}from"./PieChart.stories-EAcyEL3M.js";import{D as I}from"./RadarChart.stories-CR9VzWL5.js";import{D as S}from"./RadialChart.stories-DqpWXRGv.js";import{D as T}from"./ScatterChart.stories-CRVqMWXc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjNccefj.js";import"./sys-enter-2-RLTSxo4s.js";import"./alert-DdBYY2qU.js";import"./index-Dj6CZlQQ.js";import"./index-f6jDEWAh.js";import"./index-eFI2U8Up.js";import"./Link-DLFy93gF.js";import"./index-D4xCyo8q.js";import"./index-DWR5LsZZ.js";import"./index-BysDONg4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Fp7idO2l.js";import"./addCustomCSSWithScoping-CehjyWVu.js";import"./index-DATmYB4_.js";import"./Carousel-DjIr5psX.js";import"./ScrollEnablement-BpahqvCY.js";import"./animate-JylhYHXj.js";import"./AnimationMode-I9jsbgbH.js";import"./slim-arrow-left-DoJ1SQ-g.js";import"./DemoProps-BBQ9aGC5.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Bb5JEPg8.js";import"./ChartContainer-CQ-bfmet.js";import"./index-D2fRocR2.js";import"./useCancelAnimationFallback-CE513dQs.js";import"./YAxisTicks-gSvbP7hy.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-QlMHgWL0.js";import"./ChartDataLabel-DwbaZvJQ.js";import"./useOnClickInternal-D_akePVH.js";import"./react-content-loader.es-BT9h4pJ2.js";import"./useIsRTL-DlWYfZgO.js";import"./useLongestYAxisLabel-ekJ7mDDK.js";import"./ComposedChart-Bhd6RFzq.js";import"./Line-CcloaScr.js";import"./Scatter-C10l6l1N.js";import"./index-KQjS-vGY.js";import"./index-DdneJsp-.js";import"./Placeholder-DfN9KPa8.js";import"./index-D2gubM9D.js";const $=`# @ui5/webcomponents-react-charts

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
