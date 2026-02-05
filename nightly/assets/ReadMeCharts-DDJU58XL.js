import{r as i,j as t,O as l}from"./iframe-u8FS7fYy.js";import{useMDXComponents as p}from"./index-C5mdpSHf.js";import{M as u,a as h,n as f}from"./blocks-CA6IPYk4.js";import"./Tag-DslDE0Bb.js";import"./index-feIb_zWP.js";import{F as d}from"./CommandsAndQueries-q_IHoPaq.js";import"./copy-DnscT9w9.js";import{T as b}from"./TableOfContent-LdXXrtdu.js";import{C}from"./index-DLZ8oMxy.js";import{D}from"./BarChart.stories-C-uQRLAV.js";import{D as y}from"./BulletChart.stories-Dma30G9Z.js";import{D as g}from"./ColumnChart.stories-DOTJTr1S.js";import{D as v}from"./ColumnChartWithTrend.stories-Cnma7Sfv.js";import{D as x}from"./ComposedChart.stories-BV4dzAWL.js";import{D as j}from"./DonutChart.stories-DzSRgCsw.js";import{D as w}from"./LineChart.stories-CALmOAw5.js";import{D as R}from"./PieChart.stories-DXbSi7IG.js";import{D as I}from"./RadarChart.stories-CoT9XFGJ.js";import{D as S}from"./RadialChart.stories-Blm5Hvut.js";import{D as $}from"./ScatterChart.stories-BvSkVY3G.js";import"./preload-helper-PPVm8Dsz.js";import"./information-eayia0M9.js";import"./sys-enter-2-Bq8G42J8.js";import"./alert-C2jJRi0I.js";import"./index-Dm5-M5Tp.js";import"./index-BLjc-MlZ.js";import"./index-Dt8N5TZZ.js";import"./Link-B1qI_6K5.js";import"./index-B2lRXwRR.js";import"./index-Ck97t6iE.js";import"./index-Cr0S2U_P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VZfInv7D.js";import"./addCustomCSSWithScoping-Bi-KBOqo.js";import"./index-39vhHnbo.js";import"./Carousel-DNJQ3i6f.js";import"./ScrollEnablement-DD98dGgr.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BT6x-YRJ.js";import"./slim-arrow-left-Di7W_bsl.js";import"./DemoProps-CH940_dr.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dh3QeH-0.js";import"./ChartContainer-8-n0E5ZS.js";import"./index-DXUHUv71.js";import"./useCancelAnimationFallback-DJ_nTv-6.js";import"./YAxisTicks-CK9tKphN.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DT0eKeUH.js";import"./ChartDataLabel-DsmsEgco.js";import"./useOnClickInternal-97r2LYZJ.js";import"./react-content-loader.es-D99qNNfc.js";import"./useIsRTL-BmVGl_xM.js";import"./useLongestYAxisLabel-aQ8O3spf.js";import"./ComposedChart-BD7Gd9ab.js";import"./Line-DOskRoQW.js";import"./Scatter-CIrWPzGa.js";import"./index-BG8rjU4z.js";import"./index-D_WqZwu2.js";import"./Placeholder-CR4Broxq.js";import"./index-CZAxhLNS.js";const E=`# @ui5/webcomponents-react-charts

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
