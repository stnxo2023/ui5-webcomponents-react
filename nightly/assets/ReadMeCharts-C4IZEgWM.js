import{r as i,j as t,T as l}from"./iframe-Bb0HmHnB.js";import{useMDXComponents as p}from"./index-Meo06HOS.js";import{M as u,a as h,k as f}from"./blocks-CgyFha0p.js";import"./Tag-CkJgtMYU.js";import"./index-e-oHYPrA.js";import{F as d}from"./CommandsAndQueries-tR4iht-v.js";import"./copy-ClXY_Ebg.js";import{T as b}from"./TableOfContent-GqtJPfFU.js";import{C}from"./index-lxdXRDCZ.js";import{D}from"./BarChart.stories-iieBVFXe.js";import{D as y}from"./BulletChart.stories-BjRyaLZ8.js";import{D as g}from"./ColumnChart.stories-MAZQOQAU.js";import{D as v}from"./ColumnChartWithTrend.stories-CDS-Tpil.js";import{D as x}from"./ComposedChart.stories-CD5vu6Uk.js";import{D as j}from"./DonutChart.stories-CQLFUlYf.js";import{D as w}from"./LineChart.stories-fuEJWI2A.js";import{D as R}from"./PieChart.stories-BemY9Adr.js";import{D as I}from"./RadarChart.stories-DkgCByw4.js";import{D as S}from"./RadialChart.stories-Cvun2puF.js";import{D as T}from"./ScatterChart.stories-BChp-n-t.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CuEP2--w.js";import"./sys-enter-2-BxgOL3Cz.js";import"./alert-CRFvm_h4.js";import"./index-BUHcje1a.js";import"./index-ujA-0uQD.js";import"./index-DRj5BOAv.js";import"./Link-Ctr6McPA.js";import"./index-DamhzNr0.js";import"./index-kXJ0csex.js";import"./index-DkF-cfFa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmK6tfuz.js";import"./addCustomCSSWithScoping-DZsYEWJZ.js";import"./index-CCkcOLyJ.js";import"./Carousel-BoDCJ2Xl.js";import"./ScrollEnablement-CtICbC2N.js";import"./animate-JylhYHXj.js";import"./AnimationMode-MyTCsmfs.js";import"./slim-arrow-left-DlQeKYTh.js";import"./DemoProps-b_4NUBCB.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cn9S1mpp.js";import"./ChartContainer-B2cLWZk1.js";import"./index-wp5LnE7o.js";import"./useCancelAnimationFallback-deA7jJBD.js";import"./YAxisTicks-DI4DOOcx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CiZxSOgL.js";import"./ChartDataLabel-BMaTRBrY.js";import"./useOnClickInternal-CyIBtqXp.js";import"./react-content-loader.es-C1O86LMv.js";import"./useIsRTL-fxo11iCx.js";import"./useLongestYAxisLabel-CV6UlfVz.js";import"./ComposedChart-DgSDUGoU.js";import"./Line-CaDUoi7n.js";import"./Scatter-CbfC-nSy.js";import"./index-DxWirO_8.js";import"./index-DlNXHFXp.js";import"./Placeholder-SBZdorlA.js";import"./index-CXTy2dXL.js";const $=`# @ui5/webcomponents-react-charts

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
