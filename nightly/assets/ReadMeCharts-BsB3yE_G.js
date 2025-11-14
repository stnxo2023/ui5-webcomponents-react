import{r as i,j as t,T as l}from"./iframe-D4Wcvdi9.js";import{useMDXComponents as p}from"./index-CyoSS2tn.js";import{M as u,a as h,m as f}from"./blocks-BZVDlLxv.js";import"./Tag-C8CPshPM.js";import"./index-C0Cp4coA.js";import{F as d}from"./CommandsAndQueries-CHCF8nk5.js";import"./copy-ByuSrISy.js";import{T as b}from"./TableOfContent-BGa8nv5M.js";import{C}from"./index-Bqf28lsZ.js";import{D}from"./BarChart.stories-JLmmzvCV.js";import{D as y}from"./BulletChart.stories-BAwXdt5k.js";import{D as g}from"./ColumnChart.stories-DzzEy3LW.js";import{D as v}from"./ColumnChartWithTrend.stories-WObmWape.js";import{D as x}from"./ComposedChart.stories-NdtTak_w.js";import{D as j}from"./DonutChart.stories-C0fsbTCG.js";import{D as w}from"./LineChart.stories-BaT7KMk_.js";import{D as R}from"./PieChart.stories-D3UducUc.js";import{D as I}from"./RadarChart.stories-DvSqKmam.js";import{D as S}from"./RadialChart.stories-ukG_yFeI.js";import{D as T}from"./ScatterChart.stories-DT8D7Kec.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BV6B4i17.js";import"./sys-enter-2-Be3rvkTR.js";import"./alert-Bj2TJcB4.js";import"./index-BfU-6WHW.js";import"./index-DRGYhnMd.js";import"./index-BoPvUO7L.js";import"./Link-DRjrHvv7.js";import"./index-C0aU4sgS.js";import"./index-DyEesLqq.js";import"./index-B5YCmd_L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_EKP5sQ.js";import"./addCustomCSSWithScoping-B3blWPk3.js";import"./index-iYqBFHCz.js";import"./Carousel-n5vITJS-.js";import"./ScrollEnablement-B_7Hn9ne.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BmVntNQL.js";import"./slim-arrow-left-Dr6are6w.js";import"./DemoProps-Dki7VcnS.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BejCKCtc.js";import"./ChartContainer-CWgXpUKY.js";import"./index-BNR4hbu3.js";import"./useCancelAnimationFallback-ByZ4h2pp.js";import"./YAxisTicks-Dul04a5f.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Pe9QnuR1.js";import"./ChartDataLabel-DHnZ7oji.js";import"./useOnClickInternal-DnbnRlkz.js";import"./react-content-loader.es-B862jszJ.js";import"./useIsRTL-pRkoq2nx.js";import"./useLongestYAxisLabel-Cv-wkbft.js";import"./ComposedChart-CVJTCcqD.js";import"./Line-j_ucu91Q.js";import"./Scatter-HtWtZgK2.js";import"./index-5jdWi81U.js";import"./index-C-07DZsZ.js";import"./Placeholder-CPfUPr-s.js";import"./index-Co0aF8WW.js";const $=`# @ui5/webcomponents-react-charts

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
