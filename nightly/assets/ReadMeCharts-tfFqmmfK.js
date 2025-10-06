import{r as i,j as t,T as l}from"./iframe-HNnxxD_z.js";import{useMDXComponents as p}from"./index-DMbTStZf.js";import{M as u,a as h,k as f}from"./blocks-CCejLYgP.js";import"./Tag-C_XEAXfN.js";import"./index-sOkH0Wf9.js";import{F as d}from"./CommandsAndQueries-10i8xq6U.js";import"./copy-DRw12hkD.js";import{T as b}from"./TableOfContent-C3vnVgT_.js";import{C}from"./index-BBmsKLBJ.js";import{D}from"./BarChart.stories-DoTai8Jk.js";import{D as y}from"./BulletChart.stories-D65gMoLa.js";import{D as g}from"./ColumnChart.stories-monzaRdt.js";import{D as v}from"./ColumnChartWithTrend.stories-CVHvPYiC.js";import{D as x}from"./ComposedChart.stories-BR1P3fya.js";import{D as j}from"./DonutChart.stories-CdGIOcgK.js";import{D as w}from"./LineChart.stories-BedVlgpC.js";import{D as R}from"./PieChart.stories-oxQcOfA7.js";import{D as I}from"./RadarChart.stories-BcxLF1pp.js";import{D as S}from"./RadialChart.stories-Be6i2eSh.js";import{D as T}from"./ScatterChart.stories-cBvVD8eT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BWoF60GS.js";import"./sys-enter-2-BmofK6wa.js";import"./alert-qoF8AI7R.js";import"./index-BN0PdEk3.js";import"./index-DoZC0kx0.js";import"./index-B_Z8tqtL.js";import"./Link-CqZZKZ0X.js";import"./index-Bmalf1dG.js";import"./index-CbtLCQbD.js";import"./index-BNjcdWK4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7TcfhjQy.js";import"./addCustomCSSWithScoping-BgldszW1.js";import"./index-B3Qe_MYG.js";import"./Carousel-DlCdK4Ve.js";import"./ScrollEnablement-HfpHMe0e.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CkdTFlwn.js";import"./slim-arrow-left-aeNVCV24.js";import"./DemoProps-Cs1-Knuq.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-nKlJVRQr.js";import"./ChartContainer-CmPkraOF.js";import"./index-CiE6BBc9.js";import"./useCancelAnimationFallback-Cs3-pzq3.js";import"./YAxisTicks-DvA21Vs_.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BpdK34P7.js";import"./ChartDataLabel-CG4dY-Yn.js";import"./useOnClickInternal-BdwjL7W2.js";import"./react-content-loader.es-DNyym8he.js";import"./useIsRTL-CNF2o9Zu.js";import"./useLongestYAxisLabel-C2CrDFV6.js";import"./ComposedChart-CBi0gN0x.js";import"./Line-gcQAdFVP.js";import"./Scatter-7W4sUsDr.js";import"./index-BrYkvkas.js";import"./index-CRKG1wyZ.js";import"./Placeholder-GbB9uao_.js";import"./index-DPrGPGQb.js";const $=`# @ui5/webcomponents-react-charts

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
