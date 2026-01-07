import{r as i,j as t,T as l}from"./iframe-DAr0L7Ho.js";import{useMDXComponents as p}from"./index-BXrVHVZ0.js";import{M as u,a as h,n as f}from"./blocks-n6i-MeAx.js";import"./Tag-D2SjXRRM.js";import"./index-BGz6B31k.js";import{F as d}from"./CommandsAndQueries-BeoYsWXv.js";import"./copy-C6zsdfpy.js";import{T as b}from"./TableOfContent-Cwtw00oq.js";import{C}from"./index-DTllUo3_.js";import{D}from"./BarChart.stories-0W5oZQy2.js";import{D as y}from"./BulletChart.stories-D9mzgVqG.js";import{D as g}from"./ColumnChart.stories-AKRqMVS9.js";import{D as v}from"./ColumnChartWithTrend.stories-BueINWv1.js";import{D as x}from"./ComposedChart.stories-D2iEl3ZE.js";import{D as j}from"./DonutChart.stories-Cn0JTTPA.js";import{D as w}from"./LineChart.stories-Tt3u694N.js";import{D as R}from"./PieChart.stories-RIGwnlIZ.js";import{D as I}from"./RadarChart.stories-CN_YvqRk.js";import{D as S}from"./RadialChart.stories-D0orMBnM.js";import{D as T}from"./ScatterChart.stories-Pc90fIyH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C8Iia5pL.js";import"./sys-enter-2-DFDqDf9l.js";import"./alert-CWzLh45M.js";import"./index-M443-WMN.js";import"./index-BtwPOFH6.js";import"./index-C9NDTaZE.js";import"./Link-QVFDyIvP.js";import"./index-Dnii_wG6.js";import"./index-DrSpdpj3.js";import"./index-BaCg4RzE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqKvYjZH.js";import"./addCustomCSSWithScoping-C9FZ5V1h.js";import"./index-Cs5MEWFI.js";import"./Carousel-DG7i1Tio.js";import"./ScrollEnablement-BCyvLKHN.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BQAjuLGl.js";import"./slim-arrow-left-hYiFaVp3.js";import"./DemoProps-BlURE5Hq.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DiCUzaE-.js";import"./ChartContainer-DkrLe99c.js";import"./index-BUYWOW0O.js";import"./useCancelAnimationFallback-BKhvnpfr.js";import"./YAxisTicks-cv3jPx8Y.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-95JqS8zO.js";import"./ChartDataLabel-D2Nj7Hvl.js";import"./useOnClickInternal-3tA8tnYP.js";import"./react-content-loader.es-C480LRtb.js";import"./useIsRTL-BiIhYZmc.js";import"./useLongestYAxisLabel-Dv0xFE85.js";import"./ComposedChart-DH1DrJ_Z.js";import"./Line-3M7xDxng.js";import"./Scatter-xmpUiOfx.js";import"./index-BIbKl_k-.js";import"./index-Ds_Tm7TH.js";import"./Placeholder-fspIVh6J.js";import"./index-DSVpDJop.js";const $=`# @ui5/webcomponents-react-charts

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
