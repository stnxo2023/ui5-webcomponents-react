import{r as i,j as t,O as l}from"./iframe-Cu2r5DBt.js";import{useMDXComponents as p}from"./index-DsEnC-S2.js";import{M as u,a as h,n as f}from"./blocks-DrEEcrJV.js";import"./Tag-BfeG-i6G.js";import"./index-DcYlZ6P4.js";import{F as d}from"./CommandsAndQueries-DfbTmmri.js";import"./copy-D0JAZV9l.js";import{T as b}from"./TableOfContent-RWlZdsI9.js";import{C}from"./index-CpeMBz4a.js";import{D}from"./BarChart.stories-dtSvCjvY.js";import{D as y}from"./BulletChart.stories-uzBNNjpG.js";import{D as g}from"./ColumnChart.stories-B8beQLmo.js";import{D as v}from"./ColumnChartWithTrend.stories-DpuBcFxp.js";import{D as x}from"./ComposedChart.stories-CxC40J4L.js";import{D as j}from"./DonutChart.stories-J_OHa2Fu.js";import{D as w}from"./LineChart.stories-C2JX3-P_.js";import{D as R}from"./PieChart.stories-BcAigeIK.js";import{D as I}from"./RadarChart.stories-nwHB3nEN.js";import{D as S}from"./RadialChart.stories-CWxqx85O.js";import{D as $}from"./ScatterChart.stories-BRel7ZX6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bxm8KRwL.js";import"./sys-enter-2-f8dz7x8Q.js";import"./alert-848W8p-Q.js";import"./index-BCrFY3fH.js";import"./index-BlqIDgbk.js";import"./index-Os4Zeg9n.js";import"./Link-DyRt210A.js";import"./index-DiFMEeWS.js";import"./index-CMEHSo2E.js";import"./index-COwVlcqf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CO5icxsl.js";import"./addCustomCSSWithScoping-81SqKEKs.js";import"./index-DacMIu3h.js";import"./Carousel-Cmksq7qL.js";import"./ScrollEnablement-bEoR-zYl.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CQdZJCVV.js";import"./slim-arrow-left-BIGrNGe5.js";import"./DemoProps-BDs7ZEK1.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-qSuUzCbk.js";import"./ChartContainer-dyttSF-q.js";import"./index-DWSSjAYi.js";import"./useCancelAnimationFallback-BQscxnqa.js";import"./YAxisTicks-CkEIZ1bx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C4qh6405.js";import"./ChartDataLabel-IXB5iTjW.js";import"./useOnClickInternal-mW8zzLTn.js";import"./react-content-loader.es-Wps13rXe.js";import"./useIsRTL-l2Qw6S3S.js";import"./useLongestYAxisLabel-BuK_iYfm.js";import"./ComposedChart-B7pIrmlL.js";import"./Line-wfi82Wii.js";import"./Scatter-DwbfTB1r.js";import"./index-B5tSCye7.js";import"./index-DuTmP3IX.js";import"./Placeholder-Br7tz2LI.js";import"./index-C4P-NsWB.js";const E=`# @ui5/webcomponents-react-charts

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
