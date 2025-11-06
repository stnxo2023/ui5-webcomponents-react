import{r as i,j as t,T as l}from"./iframe-Cv2DxGxx.js";import{useMDXComponents as p}from"./index-DJcSDbNR.js";import{M as u,a as h,m as f}from"./blocks-ugoI9X9t.js";import"./Tag-Coz7RYuP.js";import"./index-D_TtcnwQ.js";import{F as d}from"./CommandsAndQueries-bS4Yf-ej.js";import"./copy-CqIWY1yr.js";import{T as b}from"./TableOfContent-DYlCf-mF.js";import{C}from"./index-QVq6k5fi.js";import{D}from"./BarChart.stories-C0DIN0gq.js";import{D as y}from"./BulletChart.stories-CCNcqcRV.js";import{D as g}from"./ColumnChart.stories-43d-ujnL.js";import{D as v}from"./ColumnChartWithTrend.stories-LCl3k3Hh.js";import{D as x}from"./ComposedChart.stories-Bz48yiQy.js";import{D as j}from"./DonutChart.stories-DVnAroxP.js";import{D as w}from"./LineChart.stories-DhjBckc3.js";import{D as R}from"./PieChart.stories-k0rhoRkM.js";import{D as I}from"./RadarChart.stories-BnAd8hlO.js";import{D as S}from"./RadialChart.stories-DNpYQy9Z.js";import{D as T}from"./ScatterChart.stories-D2yQ777v.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DWd1dkKI.js";import"./sys-enter-2-DDyu9UHI.js";import"./alert-3r0WRbjT.js";import"./index-mHVz6rF3.js";import"./index-CInTOaEh.js";import"./index-B09eBGHl.js";import"./Link-BduAs2w5.js";import"./index-DUYUZ9D7.js";import"./index-Gpf6Q-KM.js";import"./index-BniFx0GW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-0lPpvscI.js";import"./addCustomCSSWithScoping-Bw7ry9Qy.js";import"./index-C0_2Dkpw.js";import"./Carousel-BHARk1a6.js";import"./ScrollEnablement-D_FfjNHJ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-etumwzYF.js";import"./slim-arrow-left-C9Jn2uFt.js";import"./DemoProps-C4l5VzCE.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CBNsRe87.js";import"./ChartContainer-tnyQZvlC.js";import"./index-BCQ2rtHe.js";import"./useCancelAnimationFallback-z4HzX_z7.js";import"./YAxisTicks-C9IaJcTe.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BEZlmnf_.js";import"./ChartDataLabel-Dqj8C6lv.js";import"./useOnClickInternal-jHigKiHX.js";import"./react-content-loader.es-pvwI3_LR.js";import"./useIsRTL-Hq2jb4tD.js";import"./useLongestYAxisLabel-BO323Lpd.js";import"./ComposedChart-BA_V_saT.js";import"./Line-CIWCqw5b.js";import"./Scatter-Ci1y70o1.js";import"./index-CA2Ql5_g.js";import"./index-D6I-V3Xx.js";import"./Placeholder-BZAz3ODd.js";import"./index-BU-tHAuM.js";const $=`# @ui5/webcomponents-react-charts

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
