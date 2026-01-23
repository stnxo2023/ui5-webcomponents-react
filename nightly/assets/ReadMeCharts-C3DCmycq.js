import{r as i,j as t,T as l}from"./iframe-jtGuD92m.js";import{useMDXComponents as p}from"./index-DyF6GLYl.js";import{M as u,a as h,n as f}from"./blocks-BL9sBKUV.js";import"./Tag-Dpj_ZR-y.js";import"./index-l_17qA1t.js";import{F as d}from"./CommandsAndQueries-BgMZZCcl.js";import"./copy-Cn3-Cbk_.js";import{T as b}from"./TableOfContent-8auMu_R0.js";import{C}from"./index-Bjf-Q-hA.js";import{D}from"./BarChart.stories-v_QZDBDR.js";import{D as y}from"./BulletChart.stories-BjyikOqr.js";import{D as g}from"./ColumnChart.stories-CQWwQzvs.js";import{D as v}from"./ColumnChartWithTrend.stories-j84tykmw.js";import{D as x}from"./ComposedChart.stories-CqKQr3db.js";import{D as j}from"./DonutChart.stories-dHUTyw1Z.js";import{D as w}from"./LineChart.stories-D-v2ZQfn.js";import{D as R}from"./PieChart.stories-BYdD_5Qi.js";import{D as I}from"./RadarChart.stories-BfGhOxzl.js";import{D as S}from"./RadialChart.stories-CY74IjLp.js";import{D as T}from"./ScatterChart.stories-BkiPfI9t.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DbZkMEoB.js";import"./sys-enter-2-K-A7BdiC.js";import"./alert-Csq7QRRu.js";import"./index-6t-0TKBV.js";import"./index-D83RH-Pe.js";import"./index-BEvnvfMN.js";import"./Link-DNXoJofm.js";import"./index-C31MI_yM.js";import"./index-B03g8ajZ.js";import"./index-DtTTXQKH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUd6X6mW.js";import"./addCustomCSSWithScoping-Bli4C3Yg.js";import"./index-DWeXgmyB.js";import"./Carousel-BgUyYOQ3.js";import"./ScrollEnablement-NU8w7nTv.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B1-DzYc2.js";import"./slim-arrow-left-CLzOLQM3.js";import"./DemoProps-j-X36rZj.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CbPxFykJ.js";import"./ChartContainer-BzfHFFc9.js";import"./index-C0ZVEY98.js";import"./useCancelAnimationFallback-CSq9wpij.js";import"./YAxisTicks-82Zs0OHB.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-De2UKE7-.js";import"./ChartDataLabel-C6zbhW-k.js";import"./useOnClickInternal-DvU8GOPA.js";import"./react-content-loader.es-CRo1MjNk.js";import"./useIsRTL-_IURFj1j.js";import"./useLongestYAxisLabel-DH8tY1rw.js";import"./ComposedChart-Dlbe-Vbp.js";import"./Line-DVzYix7V.js";import"./Scatter-DXLq2B6u.js";import"./index-CMWxR8ai.js";import"./index-CA4Hio67.js";import"./Placeholder-BM1txG1_.js";import"./index-zYSa0NyP.js";const $=`# @ui5/webcomponents-react-charts

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
