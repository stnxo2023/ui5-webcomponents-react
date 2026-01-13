import{r as i,j as t,T as l}from"./iframe-BtOtRMtR.js";import{useMDXComponents as p}from"./index-CgtvsECt.js";import{M as u,a as h,n as f}from"./blocks-D9wmcLvH.js";import"./Tag-C9nMOu5c.js";import"./index-Cb_okFKb.js";import{F as d}from"./CommandsAndQueries-CKs7dFOK.js";import"./copy-CGNUo2FO.js";import{T as b}from"./TableOfContent-BCPzy_yC.js";import{C}from"./index-Ba_VGUJg.js";import{D}from"./BarChart.stories-2cGDw6Wp.js";import{D as y}from"./BulletChart.stories-DF2xG-D2.js";import{D as g}from"./ColumnChart.stories-R4eEEhcT.js";import{D as v}from"./ColumnChartWithTrend.stories-SQ-N3xED.js";import{D as x}from"./ComposedChart.stories-Ci8l5NX8.js";import{D as j}from"./DonutChart.stories-BvsxQ99-.js";import{D as w}from"./LineChart.stories-8U8C38om.js";import{D as R}from"./PieChart.stories-56AyFOZv.js";import{D as I}from"./RadarChart.stories-Cy90o_sf.js";import{D as S}from"./RadialChart.stories-C-7cBIs0.js";import{D as T}from"./ScatterChart.stories-BwHYYZDX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D5w9Hrcs.js";import"./sys-enter-2-Bq4TRZEz.js";import"./alert-CYL_IdM5.js";import"./index-DyCpVDUu.js";import"./index-BG_zbJpP.js";import"./index-CSfaSQyt.js";import"./Link-BYt0ZGVT.js";import"./index-BRaE6xYn.js";import"./index-Ch2focQy.js";import"./index-Ddk7eeGJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4u4TRFh7.js";import"./addCustomCSSWithScoping-Ji9yZ6HK.js";import"./index-B8f2IgEG.js";import"./Carousel-D_zliGRR.js";import"./ScrollEnablement-CNs89SnW.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BNNeLRfv.js";import"./slim-arrow-left-CwPM7Ta9.js";import"./DemoProps-DCLcVpNP.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dup7dC9w.js";import"./ChartContainer-Dt-M1qih.js";import"./index-Db2BTFt5.js";import"./useCancelAnimationFallback-D6NHa4qu.js";import"./YAxisTicks-CsPzf8Qv.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CoeppaAT.js";import"./ChartDataLabel-BYuAk7Vf.js";import"./useOnClickInternal-DqjNE4_G.js";import"./react-content-loader.es-CiXOooak.js";import"./useIsRTL-D6S1xN6P.js";import"./useLongestYAxisLabel-D9xRahTH.js";import"./ComposedChart-hzHHOz3m.js";import"./Line-UAMO2Y9C.js";import"./Scatter-DHrwZl2D.js";import"./index-1PjIJnpJ.js";import"./index--U-zaYVx.js";import"./Placeholder-Bp1yuMvK.js";import"./index-Chjly0jJ.js";const $=`# @ui5/webcomponents-react-charts

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
