import{r as i,j as t,T as l}from"./iframe-rBa3eszb.js";import{useMDXComponents as p}from"./index-ywplRXEz.js";import{M as u,a as h,m as f}from"./blocks-g4en69Tv.js";import"./Tag-Ub-ab5wh.js";import"./index-CpHbQUX7.js";import{F as d}from"./CommandsAndQueries-CwUQeNe6.js";import"./copy-DpAiYmLC.js";import{T as b}from"./TableOfContent-BZvuIbfz.js";import{C}from"./index-BF1RI64b.js";import{D}from"./BarChart.stories-DydgkVlE.js";import{D as y}from"./BulletChart.stories-CwdYAEpk.js";import{D as g}from"./ColumnChart.stories-DV1-QSxC.js";import{D as v}from"./ColumnChartWithTrend.stories-C-zW2C1e.js";import{D as x}from"./ComposedChart.stories-BqTTHLYy.js";import{D as j}from"./DonutChart.stories-CWv5EMHG.js";import{D as w}from"./LineChart.stories-AEEied_G.js";import{D as R}from"./PieChart.stories-BgBNQ2nE.js";import{D as I}from"./RadarChart.stories-DeIMXuNR.js";import{D as S}from"./RadialChart.stories-6QLNIB4h.js";import{D as T}from"./ScatterChart.stories-Bjtcnb5Z.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Do12jBFt.js";import"./sys-enter-2-Gg5Ob7c_.js";import"./alert-Cl85dmlC.js";import"./index-_uK4ftNi.js";import"./index-dvt-GDfC.js";import"./index--W9c_yZX.js";import"./Link-Dq-0iXqs.js";import"./index-SiJKqGQM.js";import"./index-Bt8TlIkO.js";import"./index-CCm0OAPD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-cGFZau.js";import"./addCustomCSSWithScoping-BFTmBMm0.js";import"./index-Dlmk5mT2.js";import"./Carousel-Bn9RjynA.js";import"./ScrollEnablement-BvgkaIDV.js";import"./animate-JylhYHXj.js";import"./AnimationMode-PJ6mO9xb.js";import"./slim-arrow-left-Dw792dfj.js";import"./DemoProps-DMSmNqJC.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BVCa3zLZ.js";import"./ChartContainer-B8y_24nk.js";import"./index-BsdBRU2K.js";import"./useCancelAnimationFallback-BaponFD5.js";import"./YAxisTicks-BMC4VrKK.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-zDv2LEKO.js";import"./ChartDataLabel-D0nkS6ls.js";import"./useOnClickInternal-DY9h-3jC.js";import"./react-content-loader.es-A8kfQt5V.js";import"./useIsRTL-BifrIkAV.js";import"./useLongestYAxisLabel-BqiCuBuX.js";import"./ComposedChart-ZI-0JlAM.js";import"./Line-6tNUHuRZ.js";import"./Scatter-PkbSaWWW.js";import"./index-D67DeYYH.js";import"./index-i9FVF9rJ.js";import"./Placeholder-Cu9HCbVk.js";import"./index-DH6ooSPV.js";const $=`# @ui5/webcomponents-react-charts

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
