import{r as i,j as t,T as l}from"./iframe-fnu3Vo41.js";import{useMDXComponents as p}from"./index-BSrpAODL.js";import{M as u,a as h,n as f}from"./blocks-BS5BROTL.js";import"./Tag-BiBlBJWE.js";import"./index-BbmVly28.js";import{F as d}from"./CommandsAndQueries-Bopzu-n8.js";import"./copy-Db06aovL.js";import{T as b}from"./TableOfContent-Df-n_UOr.js";import{C}from"./index-BAMzrxix.js";import{D}from"./BarChart.stories-DNukKXoX.js";import{D as y}from"./BulletChart.stories-D9YVviSB.js";import{D as g}from"./ColumnChart.stories-C4Qul7EE.js";import{D as v}from"./ColumnChartWithTrend.stories-B-c0yug-.js";import{D as x}from"./ComposedChart.stories-dc2PKmWy.js";import{D as j}from"./DonutChart.stories-DbCr_KgY.js";import{D as w}from"./LineChart.stories-CEgSoASA.js";import{D as R}from"./PieChart.stories-D4bfiJVy.js";import{D as I}from"./RadarChart.stories-CfGzNp_X.js";import{D as S}from"./RadialChart.stories-CuIAtCEy.js";import{D as T}from"./ScatterChart.stories-C2nC44Fd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C4CUHJ6u.js";import"./sys-enter-2-Bq1R0WAk.js";import"./alert-xdJdEaU1.js";import"./index-SCFjt_Ga.js";import"./index-CJk9IgGL.js";import"./index-rPkavUv0.js";import"./Link-BLTuinuO.js";import"./index-BUdZGDL2.js";import"./index-C8EzOXR3.js";import"./index-DahYWRMR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2MON8lG.js";import"./addCustomCSSWithScoping-DzZplljN.js";import"./index-B7d1u9D1.js";import"./Carousel-DhJC1J4O.js";import"./ScrollEnablement-WgQtsSmN.js";import"./animate-JylhYHXj.js";import"./AnimationMode-0yv4W3Gi.js";import"./slim-arrow-left-CzSPm9Bp.js";import"./DemoProps-D2lcXwDz.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B2DCLo1F.js";import"./ChartContainer-CG9dEIxV.js";import"./index-Cw1Aet_f.js";import"./useCancelAnimationFallback-DJiFSMdY.js";import"./YAxisTicks-DVdZ3Ed5.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BZ1gPdNa.js";import"./ChartDataLabel-VuCKyRvE.js";import"./useOnClickInternal-Dypv3wnJ.js";import"./react-content-loader.es-C5Q2APsc.js";import"./useIsRTL-CEjni14h.js";import"./useLongestYAxisLabel-7DcfScU7.js";import"./ComposedChart-Bc16m9z9.js";import"./Line-DZIfG1xN.js";import"./Scatter-CFChl8Vp.js";import"./index-BkWo9Un0.js";import"./index-JwBaiTkW.js";import"./Placeholder-Dpm-tp8z.js";import"./index-BM_IqIBf.js";const $=`# @ui5/webcomponents-react-charts

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
