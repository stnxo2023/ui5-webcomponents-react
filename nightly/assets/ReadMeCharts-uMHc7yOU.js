import{r as i,j as t,T as l}from"./iframe-BAeEsjGg.js";import{useMDXComponents as p}from"./index-Bq0E1dsP.js";import{M as u,a as h,m as f}from"./blocks-BgvPFJNP.js";import"./Tag-C0AbLWiC.js";import"./index-CofNVADY.js";import{F as d}from"./CommandsAndQueries-BmSS4dsr.js";import"./copy-AboRjUVj.js";import{T as b}from"./TableOfContent-CScjtNNq.js";import{C}from"./index-D6h3f2mv.js";import{D}from"./BarChart.stories-BSxu9vdZ.js";import{D as y}from"./BulletChart.stories-Co4QmSh2.js";import{D as g}from"./ColumnChart.stories-Dd44GNWb.js";import{D as v}from"./ColumnChartWithTrend.stories-DW8vZnsU.js";import{D as x}from"./ComposedChart.stories-D5JYkLvD.js";import{D as j}from"./DonutChart.stories-Dscw40tK.js";import{D as w}from"./LineChart.stories-CDbXPAk3.js";import{D as R}from"./PieChart.stories-DO25Xg4Z.js";import{D as I}from"./RadarChart.stories-Bm_EpukE.js";import{D as S}from"./RadialChart.stories-D11GIECP.js";import{D as T}from"./ScatterChart.stories-ImP3l5ND.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DWcYA3Ge.js";import"./sys-enter-2-CQUiiR68.js";import"./alert-DfrSfG2k.js";import"./index-BbgOEhgO.js";import"./index-CdyvC-L0.js";import"./index-D8OEyr8Q.js";import"./Link-C-dbgRnK.js";import"./index-B1MvTI4o.js";import"./index-Bh0rKKOG.js";import"./index-DTbJ3L--.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-j4KshgYu.js";import"./addCustomCSSWithScoping-dmB8rtW3.js";import"./index-BcBOqS22.js";import"./Carousel-D8gxchFj.js";import"./ScrollEnablement-B_VGa692.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C2PeIqTz.js";import"./slim-arrow-left-QD2HSdtk.js";import"./DemoProps-D2daqD-0.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DmaNbbDC.js";import"./ChartContainer-CP2FO6EF.js";import"./index-BEoChkv9.js";import"./useCancelAnimationFallback-Bq5KJBW_.js";import"./YAxisTicks-DeZeZfFe.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D0d3BAWj.js";import"./ChartDataLabel-Cx4SXkhe.js";import"./useOnClickInternal-rmpr_MR5.js";import"./react-content-loader.es-C83pTDfC.js";import"./useIsRTL-CkDYu-F2.js";import"./useLongestYAxisLabel-DewEVQD-.js";import"./ComposedChart-CScNwI3I.js";import"./Line-Cr7nMHKm.js";import"./Scatter-CO3qrkW0.js";import"./index-Dsdd5CuJ.js";import"./index-BTQCRrL1.js";import"./Placeholder-CnMOrUSL.js";import"./index-CxEUdSnu.js";const $=`# @ui5/webcomponents-react-charts

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
