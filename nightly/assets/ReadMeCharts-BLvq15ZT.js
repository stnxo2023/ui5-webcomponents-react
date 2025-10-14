import{r as i,j as t,T as l}from"./iframe-_aM0UtJ2.js";import{useMDXComponents as p}from"./index-BfzIu2dE.js";import{M as u,a as h,k as f}from"./blocks-l9d8PUx_.js";import"./Tag-BfFHPicD.js";import"./index-DK-65CGT.js";import{F as d}from"./CommandsAndQueries-DzKXmTWy.js";import"./copy-DFcekAfZ.js";import{T as b}from"./TableOfContent-D_zORs3S.js";import{C}from"./index-Bc7kyVTI.js";import{D}from"./BarChart.stories-BdCjd5m2.js";import{D as y}from"./BulletChart.stories-CmpEvSff.js";import{D as g}from"./ColumnChart.stories-DmRLx7aE.js";import{D as v}from"./ColumnChartWithTrend.stories-DTpcOIFT.js";import{D as x}from"./ComposedChart.stories-AHNFshYS.js";import{D as j}from"./DonutChart.stories-CsJxkmu2.js";import{D as w}from"./LineChart.stories-BkT52xsy.js";import{D as R}from"./PieChart.stories-EC0UEfMY.js";import{D as I}from"./RadarChart.stories-C2QRQZRg.js";import{D as S}from"./RadialChart.stories-Br-3yXnv.js";import{D as T}from"./ScatterChart.stories-BV36n-x-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bugjbsmi.js";import"./sys-enter-2-B3MGAVo9.js";import"./alert-CNC7DRI_.js";import"./index-D4-JCcJ5.js";import"./index-D94cPjQU.js";import"./index-HG9KwvVi.js";import"./Link-DVTfY9Y-.js";import"./index-ChnKUkkG.js";import"./index-daYey1G6.js";import"./index-B2FptVvG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5ZlAJzQ.js";import"./addCustomCSSWithScoping-JIDtcj4a.js";import"./index-80py4d9m.js";import"./Carousel-DLPqJ36o.js";import"./ScrollEnablement-Bhq2qTDI.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CSMJicj6.js";import"./slim-arrow-left-DCwWVLKH.js";import"./DemoProps-Dh_Xlm3o.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cg4bW-vk.js";import"./ChartContainer-sBhSE7FY.js";import"./index-4LhBYovK.js";import"./useCancelAnimationFallback-DPklBgr3.js";import"./YAxisTicks-Dmo_WB59.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DfPZ9LrG.js";import"./ChartDataLabel-BE8qiNxJ.js";import"./useOnClickInternal-CT70J9ZC.js";import"./react-content-loader.es-JOl6Umv2.js";import"./useIsRTL-CaZ25Jpx.js";import"./useLongestYAxisLabel-BkszcHW2.js";import"./ComposedChart-BRFJwsUI.js";import"./Line-C_ZxExn1.js";import"./Scatter-CPJ8A3UI.js";import"./index-DwB1ofgF.js";import"./index-CEGlgRMJ.js";import"./Placeholder-Df_1v3zb.js";import"./index-BjxEVyTp.js";const $=`# @ui5/webcomponents-react-charts

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
