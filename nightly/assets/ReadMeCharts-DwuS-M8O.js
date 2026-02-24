import{r as i,j as t,O as l}from"./iframe-QhtzJj2F.js";import{useMDXComponents as p}from"./index-B3k8-Qk3.js";import{M as u,a as h,n as f}from"./blocks-DDXzLSfl.js";import"./Tag-CoHKtk39.js";import"./index-xaayqokA.js";import{F as d}from"./CommandsAndQueries-CNzXbMAv.js";import"./copy-CTybEZjn.js";import{T as b}from"./TableOfContent-BYE6z29n.js";import{C}from"./index-D3fx5yyx.js";import{D}from"./BarChart.stories-CO2wul_g.js";import{D as y}from"./BulletChart.stories-nn4fzbzB.js";import{D as g}from"./ColumnChart.stories-D1zgcsQp.js";import{D as v}from"./ColumnChartWithTrend.stories-hhE_o_kw.js";import{D as x}from"./ComposedChart.stories-DWFaGFPN.js";import{D as j}from"./DonutChart.stories-BBf1Lnwx.js";import{D as w}from"./LineChart.stories-BMU_MaHo.js";import{D as R}from"./PieChart.stories-B-H2Ic07.js";import{D as I}from"./RadarChart.stories-CRcSsr6_.js";import{D as S}from"./RadialChart.stories-DePEYg7q.js";import{D as $}from"./ScatterChart.stories-B3c1WRi8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-LovaJps-.js";import"./sys-enter-2-BHgG_M7J.js";import"./alert-CuMg9P4f.js";import"./index-BrUnaB-V.js";import"./index-CitIem69.js";import"./index-CiXnBbg7.js";import"./Link-Dwkzs0Lw.js";import"./index-DIdyzBPI.js";import"./index-DFHNTg_F.js";import"./index-D3ZVhFJ7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ltT42hBg.js";import"./addCustomCSSWithScoping-BX9baLRL.js";import"./index-Dg_bnA2j.js";import"./Carousel-BMin59rs.js";import"./ScrollEnablement-DtNx2cEd.js";import"./animate-JylhYHXj.js";import"./AnimationMode-YQg4nbTH.js";import"./slim-arrow-left-C0lMmLPD.js";import"./DemoProps-DnzcVLPz.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DxJ-0So6.js";import"./ChartContainer-XkGsVsZa.js";import"./index-B1HjRcua.js";import"./useCancelAnimationFallback-CK85Pwu7.js";import"./YAxisTicks-o15gvwKl.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DsGi1IkO.js";import"./ChartDataLabel-DqZ7Ui5L.js";import"./useOnClickInternal-B69dTJdm.js";import"./react-content-loader.es-B9XneubF.js";import"./useIsRTL-CSPv66kJ.js";import"./useLongestYAxisLabel-D03_tSm_.js";import"./ComposedChart-ChGWTPfR.js";import"./Line-d7FJPapX.js";import"./Scatter-sgFuBYJJ.js";import"./index-CtjTGQAm.js";import"./index-2bmnWdzQ.js";import"./Placeholder-BKxFu-58.js";import"./index-DrOfX4ar.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
