import{r as i,j as t,T as l}from"./iframe-DoO3B8k6.js";import{useMDXComponents as p}from"./index-c3qBf9j-.js";import{M as u,a as h,k as f}from"./blocks-SZ1zCtFT.js";import"./Tag-BQH01MnI.js";import"./index-0e8xkLwE.js";import{F as d}from"./CommandsAndQueries-BgTP9rvd.js";import"./copy-_xuz2Nel.js";import{T as b}from"./TableOfContent-B2fiLQKN.js";import{C}from"./index-DNweckPJ.js";import{D}from"./BarChart.stories-CKHnPRuU.js";import{D as y}from"./BulletChart.stories-Bq74bARm.js";import{D as g}from"./ColumnChart.stories-S34ZWk-1.js";import{D as v}from"./ColumnChartWithTrend.stories-DQ3JVbM-.js";import{D as x}from"./ComposedChart.stories-6hIkJHer.js";import{D as j}from"./DonutChart.stories-Dr-xiX6e.js";import{D as w}from"./LineChart.stories-BNKcrSUF.js";import{D as R}from"./PieChart.stories-BcGd0Y65.js";import{D as I}from"./RadarChart.stories--ii_reVg.js";import{D as S}from"./RadialChart.stories-Bp3WRk_C.js";import{D as T}from"./ScatterChart.stories-Dk0WEMv8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CQ3_UNon.js";import"./sys-enter-2-04wFErlJ.js";import"./alert-TTaxVgBW.js";import"./index-BSLJX4WE.js";import"./index-CQlaTUTv.js";import"./index-DHXtHkXk.js";import"./Link-BjpII7wh.js";import"./index-DkL8yUNi.js";import"./index-DNsrF3vl.js";import"./index-DeXyQXgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRtsvWdt.js";import"./addCustomCSSWithScoping-BMQmLAx8.js";import"./index-DcEck9MJ.js";import"./Carousel-BcaPDobc.js";import"./ScrollEnablement-vDfjB2It.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BTBJB-eS.js";import"./slim-arrow-left-DGdlBAho.js";import"./DemoProps-B41Ecewd.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CeqBnWOj.js";import"./ChartContainer-B0tE5lvY.js";import"./index-MnZkDyaG.js";import"./useCancelAnimationFallback-B8xpGyQ9.js";import"./YAxisTicks-B68UakeC.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BmYKgm_K.js";import"./ChartDataLabel-BRVJtsnA.js";import"./useOnClickInternal-DTa66_ZZ.js";import"./react-content-loader.es-DOEZARDQ.js";import"./useIsRTL-D0_rTS9I.js";import"./useLongestYAxisLabel-j_bYk1AW.js";import"./ComposedChart-Drp6gIb1.js";import"./Line-DBmDN0vj.js";import"./Scatter-BOA7a0VH.js";import"./index-CD1kzRQr.js";import"./index-DkfXybhv.js";import"./Placeholder-DtKEJ5My.js";import"./index-uYGaGkJT.js";const $=`# @ui5/webcomponents-react-charts

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
