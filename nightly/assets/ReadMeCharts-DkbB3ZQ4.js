import{r as i,j as t,T as l}from"./iframe-CZzIPN_f.js";import{useMDXComponents as p}from"./index-BN7772Ln.js";import{M as u,a as h,m as f}from"./blocks-CpAefQ0F.js";import"./Tag-B8_XKizL.js";import"./index-CYLMYqU3.js";import{F as d}from"./CommandsAndQueries-C_V-vyfI.js";import"./copy-CFuW58eh.js";import{T as b}from"./TableOfContent-BiAzmVZ5.js";import{C}from"./index-CU6XEv9F.js";import{D}from"./BarChart.stories-ButJ9lJs.js";import{D as y}from"./BulletChart.stories-gBmxmSen.js";import{D as g}from"./ColumnChart.stories-BcUXiKhq.js";import{D as v}from"./ColumnChartWithTrend.stories-Dt5jdr59.js";import{D as x}from"./ComposedChart.stories-CvCRn7Ez.js";import{D as j}from"./DonutChart.stories-DlOinOvf.js";import{D as w}from"./LineChart.stories-C-PsfLmz.js";import{D as R}from"./PieChart.stories-MUVyagir.js";import{D as I}from"./RadarChart.stories-BYlnseMc.js";import{D as S}from"./RadialChart.stories-C016nRYI.js";import{D as T}from"./ScatterChart.stories-BzCdUy_B.js";import"./preload-helper-PPVm8Dsz.js";import"./information-6G8KrWG0.js";import"./sys-enter-2-Blj9-cAn.js";import"./alert-BtpU_SH9.js";import"./index-RbSpX7Av.js";import"./index-RQjAfURV.js";import"./index-CiiSHxVf.js";import"./Link-Fkmlwa07.js";import"./index-CCj5LB1a.js";import"./index-DMvyX2go.js";import"./index-c-1N-cez.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmB6T7HK.js";import"./addCustomCSSWithScoping-DaZxNPdr.js";import"./index-TDczsIb0.js";import"./Carousel-VQfPk2dx.js";import"./ScrollEnablement-C4qF1cK6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BtD_QUmC.js";import"./slim-arrow-left-BqjQLab7.js";import"./DemoProps-DEv_vGb7.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-3PaxAoGY.js";import"./ChartContainer-Cs_XPTuv.js";import"./index-Htv8Knj7.js";import"./useCancelAnimationFallback-BX-YNwX9.js";import"./YAxisTicks-BgHyDawP.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BGYu4a9Q.js";import"./ChartDataLabel-m2E0bubP.js";import"./useOnClickInternal-4J0zddVJ.js";import"./react-content-loader.es-C2O465oP.js";import"./useIsRTL-DjCnev_a.js";import"./useLongestYAxisLabel-BX_u0IbX.js";import"./ComposedChart-77zRGQu6.js";import"./Line-CtzdD9L5.js";import"./Scatter-BHsP34bp.js";import"./index-NGwkVToH.js";import"./index-tIITUdLx.js";import"./Placeholder-BTqs7F3G.js";import"./index-zpxEt8ko.js";const $=`# @ui5/webcomponents-react-charts

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
