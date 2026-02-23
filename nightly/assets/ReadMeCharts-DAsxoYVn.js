import{r as i,j as t,O as l}from"./iframe-4UX9zVtN.js";import{useMDXComponents as p}from"./index-BBCkKRvO.js";import{M as u,a as h,n as f}from"./blocks-BFxvjNAv.js";import"./Tag-B3FvlNgH.js";import"./index-BXHIuf-D.js";import{F as d}from"./CommandsAndQueries-DudJ8lrA.js";import"./copy-Cyt5Uff4.js";import{T as b}from"./TableOfContent-Ceb6N6LS.js";import{C}from"./index-CxD8PIay.js";import{D}from"./BarChart.stories-INM-P7qL.js";import{D as y}from"./BulletChart.stories-BBjXWuJ4.js";import{D as g}from"./ColumnChart.stories-oaSc2Qal.js";import{D as v}from"./ColumnChartWithTrend.stories-DvtIBeJp.js";import{D as x}from"./ComposedChart.stories-DTZQ9CW4.js";import{D as j}from"./DonutChart.stories-Bh_c-mUb.js";import{D as w}from"./LineChart.stories-Di0Ekkx7.js";import{D as R}from"./PieChart.stories-CU9SKvSi.js";import{D as I}from"./RadarChart.stories-DRyWQKN8.js";import{D as S}from"./RadialChart.stories-PfiJlFTU.js";import{D as $}from"./ScatterChart.stories-DhzmaLbP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-WWzzOZjz.js";import"./sys-enter-2-CaiZT1Nw.js";import"./alert-G68zeMJP.js";import"./index-S5ZW1bjA.js";import"./index-CXoNptYK.js";import"./index-DctXwSyI.js";import"./Link-fA-SeXAj.js";import"./index-C3GdV3vE.js";import"./index-De4g9Au_.js";import"./index-DnrxmRVZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-rUq1jEzN.js";import"./addCustomCSSWithScoping-DCDZu8w8.js";import"./index-oGM8b9YF.js";import"./Carousel-DJD6ilbN.js";import"./ScrollEnablement-0B710n07.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B8JFxxEI.js";import"./slim-arrow-left-DjEu2849.js";import"./DemoProps-Cg4SnmeR.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C9rWX3J9.js";import"./ChartContainer-DqnQhOhT.js";import"./index-CPXil7Dy.js";import"./useCancelAnimationFallback-SCI1T5ra.js";import"./YAxisTicks-BXkAK-jq.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-_8D3-FsD.js";import"./ChartDataLabel-DmoQoRRH.js";import"./useOnClickInternal-DUA2CHpl.js";import"./react-content-loader.es-Crwl_wyW.js";import"./useIsRTL-Bs2Ad4ZO.js";import"./useLongestYAxisLabel-CdFbVbm8.js";import"./ComposedChart-CMrRQ428.js";import"./Line-CWH5jZ3s.js";import"./Scatter-T7S0NvD7.js";import"./index-CFlbunim.js";import"./index-V-nd0TAq.js";import"./Placeholder-Db_eizgO.js";import"./index-CoT-2U5K.js";const E=`# @ui5/webcomponents-react-charts

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
