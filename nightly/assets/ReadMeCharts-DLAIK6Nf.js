import{r as i,j as t,T as l}from"./iframe-D7AtRUpE.js";import{useMDXComponents as p}from"./index-DRFX2LG8.js";import{M as u,a as h,m as f}from"./blocks-DtVmZnZe.js";import"./Tag-DZXgvHmp.js";import"./index-ehmuZHI1.js";import{F as d}from"./CommandsAndQueries-BtIPK2kL.js";import"./copy-BpQCF5oY.js";import{T as b}from"./TableOfContent-DJLXVcV1.js";import{C}from"./index-ByCZacZc.js";import{D}from"./BarChart.stories-CNwdNWT9.js";import{D as y}from"./BulletChart.stories-DZoJhbKB.js";import{D as g}from"./ColumnChart.stories-DyIekevQ.js";import{D as v}from"./ColumnChartWithTrend.stories-DJy5VCOg.js";import{D as x}from"./ComposedChart.stories-BXlgXx2y.js";import{D as j}from"./DonutChart.stories-BoYJDSXE.js";import{D as w}from"./LineChart.stories-WHSrd-2N.js";import{D as R}from"./PieChart.stories-DwhH7Nft.js";import{D as I}from"./RadarChart.stories-Cskc4Axz.js";import{D as S}from"./RadialChart.stories-3qH1To-g.js";import{D as T}from"./ScatterChart.stories-D5bdJi4g.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D-fAW1gu.js";import"./sys-enter-2-DRPF_4qy.js";import"./alert-fnVpcWPE.js";import"./index-CCJ9pFYK.js";import"./index-BGkf-dJq.js";import"./index-Dd6OnJpC.js";import"./Link-DWIR53PW.js";import"./index-CjaPk49X.js";import"./index-CH_KzusP.js";import"./index-54VAs-Li.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RhrsIb0U.js";import"./addCustomCSSWithScoping-C2Eje0Og.js";import"./index-BWvZCzda.js";import"./Carousel-CXf-GQ0u.js";import"./ScrollEnablement-DFMfFOOU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DBXbUbcf.js";import"./slim-arrow-left-DcjwTKEh.js";import"./DemoProps-Ce6ldPDc.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dl4tI8QB.js";import"./ChartContainer-Bl5eNFem.js";import"./index-BViGaWYT.js";import"./useCancelAnimationFallback-SbGjgZV1.js";import"./YAxisTicks-B5m_H21A.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-4QnHgPiT.js";import"./ChartDataLabel-L_EZuD7s.js";import"./useOnClickInternal-DzBJQmwl.js";import"./react-content-loader.es-tM_qJuT1.js";import"./useIsRTL-Ck-SQTsB.js";import"./useLongestYAxisLabel-OLiup63a.js";import"./ComposedChart-BHj2l2jD.js";import"./Line-C5rbDNA1.js";import"./Scatter-CZe2BrqI.js";import"./index-Bqvm8vDZ.js";import"./index-D2amQlFL.js";import"./Placeholder-B6SuVKpG.js";import"./index-Dv_8gkuE.js";const $=`# @ui5/webcomponents-react-charts

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
