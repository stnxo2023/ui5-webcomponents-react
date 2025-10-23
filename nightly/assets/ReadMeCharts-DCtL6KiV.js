import{r as i,j as t,T as l}from"./iframe-dhwXAt1u.js";import{useMDXComponents as p}from"./index-DImPBCtJ.js";import{M as u,a as h,k as f}from"./blocks-CTyxDY6f.js";import"./Tag-BG2XjNSs.js";import"./index-B1ZC6OTg.js";import{F as d}from"./CommandsAndQueries-BiJh2_dH.js";import"./copy-WVaPICqB.js";import{T as b}from"./TableOfContent-BPTWbr_t.js";import{C}from"./index-BQPEmpjs.js";import{D}from"./BarChart.stories-COvg2nqh.js";import{D as y}from"./BulletChart.stories-BRRODqBm.js";import{D as g}from"./ColumnChart.stories-COFxNbaT.js";import{D as v}from"./ColumnChartWithTrend.stories-CMPzEZQk.js";import{D as x}from"./ComposedChart.stories-Ca6SLHRS.js";import{D as j}from"./DonutChart.stories-DEHdqvVu.js";import{D as w}from"./LineChart.stories-CZnawLcS.js";import{D as R}from"./PieChart.stories-4JnMht3B.js";import{D as I}from"./RadarChart.stories-CQfPXRYE.js";import{D as S}from"./RadialChart.stories-BIJRJ9Hn.js";import{D as T}from"./ScatterChart.stories-BEOAu7h2.js";import"./preload-helper-PPVm8Dsz.js";import"./information-hzaD6T-d.js";import"./sys-enter-2-B2YAXpf0.js";import"./alert-DeSP_HIc.js";import"./index-DEgKjCYL.js";import"./index-C7W-OT1T.js";import"./index-3eryvK5U.js";import"./Link-Cd_dPy_Q.js";import"./index-CAgLAQbh.js";import"./index-T43jgYfn.js";import"./index-CdiB3Os4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BR_2w1_J.js";import"./addCustomCSSWithScoping-cc9WpAMd.js";import"./index-BPFGYJtx.js";import"./Carousel-u0rW4j1a.js";import"./ScrollEnablement-Bjuu67w6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dyv2yjrI.js";import"./slim-arrow-left-EUrT8Ln7.js";import"./DemoProps-H3ZOMI6i.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Ke4-UfBY.js";import"./ChartContainer-BULO-wk1.js";import"./index-C-LnOqtr.js";import"./useCancelAnimationFallback-BPMykIea.js";import"./YAxisTicks-jtny0cyP.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DqfoAbaZ.js";import"./ChartDataLabel-BdZat28K.js";import"./useOnClickInternal-iy-gGxv6.js";import"./react-content-loader.es-3ee5glTT.js";import"./useIsRTL-xQaBj4C2.js";import"./useLongestYAxisLabel-CiRAFNLz.js";import"./ComposedChart-CLRog-nb.js";import"./Line-BEe5gFVd.js";import"./Scatter-Bt1VMY2V.js";import"./index-DhKCF_Tf.js";import"./index-BRZ54mUz.js";import"./Placeholder-D7OiTBFF.js";import"./index-MLF7Jp7c.js";const $=`# @ui5/webcomponents-react-charts

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
