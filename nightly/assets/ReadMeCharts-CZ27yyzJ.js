import{r as i,j as t,T as l}from"./iframe-IArRSqE_.js";import{useMDXComponents as p}from"./index-j7nsZpBW.js";import{M as u,a as h,n as f}from"./blocks-uZpIO_b1.js";import"./Tag-y4SxBR_K.js";import"./index-BxBWQyES.js";import{F as d}from"./CommandsAndQueries-Y7cLRyXq.js";import"./copy-7xAa2gpG.js";import{T as b}from"./TableOfContent-DwRO066Y.js";import{C}from"./index-C4lRPBuH.js";import{D}from"./BarChart.stories-2NP6Pq_K.js";import{D as y}from"./BulletChart.stories-aevFiSWc.js";import{D as g}from"./ColumnChart.stories-BlJUU8Ds.js";import{D as v}from"./ColumnChartWithTrend.stories-BdaFVIpJ.js";import{D as x}from"./ComposedChart.stories-94CJ8iZx.js";import{D as j}from"./DonutChart.stories-s_diO1Zt.js";import{D as w}from"./LineChart.stories-dSGf1qtU.js";import{D as R}from"./PieChart.stories-DjghvO9D.js";import{D as I}from"./RadarChart.stories-D3rIGt1G.js";import{D as S}from"./RadialChart.stories-DpERgw06.js";import{D as T}from"./ScatterChart.stories-DJAeCzsQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CXNknbN_.js";import"./sys-enter-2-ByYwkCyE.js";import"./alert-ryPoEChu.js";import"./index-AiAyIf9Q.js";import"./index-C0j3-f_Y.js";import"./index-gakMtpus.js";import"./Link-Ba0uGRWm.js";import"./index-NrHuYdPm.js";import"./index-Cs2OWExd.js";import"./index-DL3EiYIa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Gn0YqzQq.js";import"./addCustomCSSWithScoping-DtA6p3SW.js";import"./index-Dxbh4gdX.js";import"./Carousel-Ds63GA-A.js";import"./ScrollEnablement-n9c5FDfp.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BzThwlc-.js";import"./slim-arrow-left-DxGFlIA2.js";import"./DemoProps-B-w4JRr_.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BWyqCnCm.js";import"./ChartContainer-Dm4NFUW2.js";import"./index-CXKXn_sm.js";import"./useCancelAnimationFallback-CytfW-0h.js";import"./YAxisTicks-B9neGFLZ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BZDaAe5z.js";import"./ChartDataLabel-DOR0zLvf.js";import"./useOnClickInternal-Q3jMTxd8.js";import"./react-content-loader.es-docXWe50.js";import"./useIsRTL-BRehkAZJ.js";import"./useLongestYAxisLabel-BsDJwTo1.js";import"./ComposedChart-Dr0j5vBD.js";import"./Line-Bu2ksalc.js";import"./Scatter-vGdi_A1Q.js";import"./index-CvhuSuO6.js";import"./index-CAu9NSbE.js";import"./Placeholder-BZTOl7ya.js";import"./index-DzDlfemh.js";const $=`# @ui5/webcomponents-react-charts

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
