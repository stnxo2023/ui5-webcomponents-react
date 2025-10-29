import{r as i,j as t,T as l}from"./iframe-D1jKIypo.js";import{useMDXComponents as p}from"./index-M1_DZHmj.js";import{M as u,a as h,m as f}from"./blocks-BvvvBGFc.js";import"./Tag-BqsbpO_s.js";import"./index-ClSanEKt.js";import{F as d}from"./CommandsAndQueries-BkaxH0BE.js";import"./copy-DgqWK_AB.js";import{T as b}from"./TableOfContent-DgOocbRO.js";import{C}from"./index-qH7JrG5_.js";import{D}from"./BarChart.stories-mXek-nzy.js";import{D as y}from"./BulletChart.stories-zHgl_Z-i.js";import{D as g}from"./ColumnChart.stories-C5Wsl_bf.js";import{D as v}from"./ColumnChartWithTrend.stories-D_4ckzAs.js";import{D as x}from"./ComposedChart.stories-BGGq1pvM.js";import{D as j}from"./DonutChart.stories-Bk__cj8a.js";import{D as w}from"./LineChart.stories-B0EP96oP.js";import{D as R}from"./PieChart.stories-Bxp4-nBe.js";import{D as I}from"./RadarChart.stories-D9aR7HSG.js";import{D as S}from"./RadialChart.stories-DaaiYiE7.js";import{D as T}from"./ScatterChart.stories-BkjvoY9e.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B8vikb0m.js";import"./sys-enter-2-DByg53Ih.js";import"./alert-D9Mn7721.js";import"./index-BBeTD3z6.js";import"./index-T4x6aH8D.js";import"./index-DHEWI2kL.js";import"./Link-BTNp59uu.js";import"./index-C7kBl8gS.js";import"./index-BKZiIOM7.js";import"./index-D6PVc_6_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRCEREPf.js";import"./addCustomCSSWithScoping-BmLQ2iz1.js";import"./index-C56hzs5D.js";import"./Carousel-B9WArScK.js";import"./ScrollEnablement-Duxr6xMC.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DPTsDJme.js";import"./slim-arrow-left-DvItpcf6.js";import"./DemoProps-CP46lOtG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CbWhlaMt.js";import"./ChartContainer-DvHGoN7L.js";import"./index-lQPSd5CQ.js";import"./useCancelAnimationFallback-doXJkmW9.js";import"./YAxisTicks-f9lP_fS0.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B-5f_4jg.js";import"./ChartDataLabel-rT4Z7lbL.js";import"./useOnClickInternal-COdRLa5T.js";import"./react-content-loader.es-BKXtfCIV.js";import"./useIsRTL-Ds7nh71L.js";import"./useLongestYAxisLabel-FVPkmONi.js";import"./ComposedChart-CLIwh-4l.js";import"./Line-BH1U7HbS.js";import"./Scatter-BTmbFSrB.js";import"./index-DLAxFuYr.js";import"./index-_sMWlS16.js";import"./Placeholder-fG8qPrhH.js";import"./index-C3Rm3Y9B.js";const $=`# @ui5/webcomponents-react-charts

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
