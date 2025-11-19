import{r as i,j as t,T as l}from"./iframe-DjfYWB_-.js";import{useMDXComponents as p}from"./index-CNEMb-s-.js";import{M as u,a as h,m as f}from"./blocks-nmBdCmu5.js";import"./Tag-BYbOAHsQ.js";import"./index-Cv9LJBlx.js";import{F as d}from"./CommandsAndQueries-BsOJw-5f.js";import"./copy-DOQqskn1.js";import{T as b}from"./TableOfContent-bxTPAjpM.js";import{C}from"./index-C3QC35Ld.js";import{D}from"./BarChart.stories-EE-C4sis.js";import{D as y}from"./BulletChart.stories-CzGpkSeG.js";import{D as g}from"./ColumnChart.stories-DYByBzba.js";import{D as v}from"./ColumnChartWithTrend.stories-BJZXPlAL.js";import{D as x}from"./ComposedChart.stories-Cnu2NvTX.js";import{D as j}from"./DonutChart.stories-CxXmHSV0.js";import{D as w}from"./LineChart.stories-VqXXzFcX.js";import{D as R}from"./PieChart.stories-BijIRrNj.js";import{D as I}from"./RadarChart.stories-C993-0Jb.js";import{D as S}from"./RadialChart.stories-DjnIX89p.js";import{D as T}from"./ScatterChart.stories-CVCnGEhM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-6Bx96viV.js";import"./sys-enter-2-Dkjyf6Zz.js";import"./alert-Cr4CwR6P.js";import"./index-Cwo-vKel.js";import"./index-B3I7HtBx.js";import"./index-CkJ-GMHH.js";import"./Link-CGcb-hqt.js";import"./index-3-iEB97a.js";import"./index-Blql2ABB.js";import"./index-B4phfj74.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6waVzUY.js";import"./addCustomCSSWithScoping-Bm9f8w42.js";import"./index-CPQFexs4.js";import"./Carousel-088XoTqq.js";import"./ScrollEnablement-B4FaEPu4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B_dZrDFO.js";import"./slim-arrow-left-BVO9AU84.js";import"./DemoProps-CrP5R3ie.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B7-YmSTK.js";import"./ChartContainer-KxDu1Agm.js";import"./index-B_HRORUp.js";import"./useCancelAnimationFallback-CU_l0GgN.js";import"./YAxisTicks-B3VyIClk.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DKHbuYBV.js";import"./ChartDataLabel-C9mfBf_z.js";import"./useOnClickInternal-6YbqdkXP.js";import"./react-content-loader.es-C-V7eRN5.js";import"./useIsRTL-DoJ7z7ik.js";import"./useLongestYAxisLabel-CKcwJWCI.js";import"./ComposedChart-DsY6Xruj.js";import"./Line-61UGLrir.js";import"./Scatter-CFJUWfuk.js";import"./index-JBKcHSbD.js";import"./index-D2pEyfLH.js";import"./Placeholder-BjB0l45t.js";import"./index-XQcv_AjD.js";const $=`# @ui5/webcomponents-react-charts

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
