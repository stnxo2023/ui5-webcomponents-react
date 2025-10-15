import{r as i,j as t,T as l}from"./iframe-MOZTZvx5.js";import{useMDXComponents as p}from"./index-Dg_uAO8t.js";import{M as u,a as h,k as f}from"./blocks-OWx-zaQy.js";import"./Tag-D4CUHK9_.js";import"./index-BgV1CUPM.js";import{F as d}from"./CommandsAndQueries-D1cXr-nE.js";import"./copy-1ZgkFucr.js";import{T as b}from"./TableOfContent-jJ2isKKi.js";import{C}from"./index-bzBDEfBV.js";import{D}from"./BarChart.stories-CLRnwoVw.js";import{D as y}from"./BulletChart.stories-CHWJOyRk.js";import{D as g}from"./ColumnChart.stories-BRrQH2Ft.js";import{D as v}from"./ColumnChartWithTrend.stories-BWzbdHI-.js";import{D as x}from"./ComposedChart.stories-Cf1SY---.js";import{D as j}from"./DonutChart.stories-neIJVs9A.js";import{D as w}from"./LineChart.stories-CvsoQo-e.js";import{D as R}from"./PieChart.stories-Bmr3djpg.js";import{D as I}from"./RadarChart.stories-BjuflJte.js";import{D as S}from"./RadialChart.stories-tBMpDoU4.js";import{D as T}from"./ScatterChart.stories-CDTiJuP5.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BmrOjFlN.js";import"./sys-enter-2-CJ54mtHu.js";import"./alert-CvnXXdTy.js";import"./index-jWV64fa4.js";import"./index-Wo6cIUDI.js";import"./index-BVuz7GOm.js";import"./Link-D6y2NVEd.js";import"./index-D_H2FzQ8.js";import"./index-BfSH4rx9.js";import"./index-CT3JBxRK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgDY8vOY.js";import"./addCustomCSSWithScoping-C-qiC_lj.js";import"./index-Vm6d87Cs.js";import"./Carousel-DriywKDv.js";import"./ScrollEnablement-BN64g5L9.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CXeSlGKO.js";import"./slim-arrow-left-fKY7h6NS.js";import"./DemoProps-Ben9qCbo.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BcUTC6uj.js";import"./ChartContainer-BZC9KhTb.js";import"./index-ChNWUHOB.js";import"./useCancelAnimationFallback-XwCd-ZKJ.js";import"./YAxisTicks-BXLvwQxO.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-j05PyjHY.js";import"./ChartDataLabel-spj3IgNb.js";import"./useOnClickInternal-WCHETQ4N.js";import"./react-content-loader.es-Dikdjv8_.js";import"./useIsRTL-Csl6zSRf.js";import"./useLongestYAxisLabel-DnDSu6_T.js";import"./ComposedChart-B-4I8DO7.js";import"./Line-LWXTN9ZE.js";import"./Scatter-D6FVKti4.js";import"./index-Bn2zCxFJ.js";import"./index-C62QzQnr.js";import"./Placeholder-BZDbpMH6.js";import"./index-BvFeftkf.js";const $=`# @ui5/webcomponents-react-charts

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
