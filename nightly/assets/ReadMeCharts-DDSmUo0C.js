import{r as i,j as t,O as l}from"./iframe-Bqqr6LRd.js";import{useMDXComponents as p}from"./index-Br4hcxKx.js";import{M as u,a as h,n as f}from"./blocks-Cu3AJo0i.js";import"./Tag-CwbUvZ-m.js";import"./index-B04Rzf_f.js";import{F as d}from"./CommandsAndQueries-18MjfAFY.js";import"./copy-Bhrou6qI.js";import{T as b}from"./TableOfContent-MXbQblkO.js";import{C}from"./index-D8MYfvrY.js";import{D}from"./BarChart.stories-BPyhteGn.js";import{D as y}from"./BulletChart.stories-kux7cXSo.js";import{D as g}from"./ColumnChart.stories-C0tfqxit.js";import{D as v}from"./ColumnChartWithTrend.stories-DLjTthxc.js";import{D as x}from"./ComposedChart.stories-B5zpsaKI.js";import{D as j}from"./DonutChart.stories-ChYoc4NC.js";import{D as w}from"./LineChart.stories-BH2lfS2Y.js";import{D as R}from"./PieChart.stories-ikjwvnGr.js";import{D as I}from"./RadarChart.stories-tmrh6DjG.js";import{D as S}from"./RadialChart.stories-DvzjLFcm.js";import{D as $}from"./ScatterChart.stories-CteHPa_e.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BWf6xVI-.js";import"./sys-enter-2-NBiqC5e1.js";import"./alert-eITYjrPF.js";import"./index-Eu6KN1OU.js";import"./index-DkY4sX_i.js";import"./index-B4-rpm-y.js";import"./Link-1XxvN6x_.js";import"./index-uP3qKYkO.js";import"./index-CFiaIaQb.js";import"./index-BFr0IkwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_soG_jSZ.js";import"./addCustomCSSWithScoping-DM5M0hyQ.js";import"./index-JLAmYdlt.js";import"./Carousel-Dn1E1hcy.js";import"./ScrollEnablement-Cxy5Bzo0.js";import"./animate-JylhYHXj.js";import"./AnimationMode-c7eTQ-hr.js";import"./slim-arrow-left-Cs6NMV4F.js";import"./DemoProps-NfpCUfjL.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CQtPRUlB.js";import"./ChartContainer-DuIOCit1.js";import"./index-RQz2GPrc.js";import"./useCancelAnimationFallback-CL-IkRH4.js";import"./YAxisTicks-BZ-_L34h.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DORF2W3_.js";import"./ChartDataLabel-DK0yZlp1.js";import"./useOnClickInternal-BO-yDChr.js";import"./react-content-loader.es-4bkN0UgN.js";import"./useIsRTL-5BH4o7Dk.js";import"./useLongestYAxisLabel-BXx7cAnj.js";import"./ComposedChart-C6bJ1cWk.js";import"./Line-D4jpHt1U.js";import"./Scatter-CexKphNS.js";import"./index-0Bx5fzGF.js";import"./index-DnbKNROi.js";import"./Placeholder-CyHD0NM6.js";import"./index-CIhEpzDs.js";const E=`# @ui5/webcomponents-react-charts

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
