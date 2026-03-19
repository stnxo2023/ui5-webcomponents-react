import{q as i,j as t,Q as l}from"./iframe-DZQsFHyF.js";import{useMDXComponents as p}from"./index-FeafUf3S.js";import{M as u,a as h,n as f}from"./blocks-CCR5dlte.js";import"./Tag-njT3oUWj.js";import"./index-FZQI4JeT.js";import"./CommandsAndQueries-Q7QL049M.js";import"./copy-B0ak1fDk.js";import{T as d}from"./TableOfContent-B8ysGL0D.js";import{F as b}from"./Footer-1JL6Y-Rs.js";import"./PageNotFound-CAJJq4gT.js";import{C}from"./index-CZiDRnAm.js";import{D}from"./BarChart.stories-DSVYahNs.js";import{D as y}from"./BulletChart.stories-Cq6Ziflf.js";import{D as g}from"./ColumnChart.stories-Ogoc5GEk.js";import{D as v}from"./ColumnChartWithTrend.stories-CLVbqGh3.js";import{D as x}from"./ComposedChart.stories-jRKoDFwA.js";import{D as j}from"./DonutChart.stories-C7zK1tJn.js";import{D as w}from"./LineChart.stories-CDDsTwPt.js";import{D as R}from"./PieChart.stories-BNn-SmB_.js";import{D as I}from"./RadarChart.stories-EmQYg4KX.js";import{D as S}from"./RadialChart.stories-pukKPUpk.js";import{D as $}from"./ScatterChart.stories-BXH3ctfX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Byx_k42O.js";import"./sys-enter-2-CNKaU8fp.js";import"./alert-HiA3dax7.js";import"./Link-Dy7YK0fU.js";import"./index-CmNuhxCj.js";import"./index-C2RcbU_s.js";import"./index-QENyXe96.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsnnpcUC.js";import"./addCustomCSSWithScoping-BZT-QmME.js";import"./index-DGD79lBE.js";import"./index-CeHR91It.js";import"./index-JUdhH85j.js";import"./index-CHkzxhcQ.js";import"./Illustrations-BlaFZAWE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DOpYXlEY.js";import"./ScrollEnablement-Dl_lVbGP.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Bh78dXWz.js";import"./slim-arrow-left-C5GlNcuU.js";import"./DemoProps-SNc8xujs.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-C-iTVrM-.js";import"./ChartContainer-B0Hu_5pI.js";import"./index-YUMYtLpT.js";import"./useCancelAnimationFallback-DaQmWxe5.js";import"./YAxisTicks-DKKf50sZ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DIoX1dqD.js";import"./ChartDataLabel-BYCOeHds.js";import"./useOnClickInternal-B2_uQ54v.js";import"./react-content-loader.es-rXKOYFt1.js";import"./useIsRTL-BHLafzmS.js";import"./useLongestYAxisLabel-7STPW9g-.js";import"./ComposedChart-Dhxqpc01.js";import"./Line-BRafxWtW.js";import"./Scatter-ClPejJXH.js";import"./index-CGKbeO4I.js";import"./index-BmZRIEQ0.js";import"./Placeholder-5MHr9BdT.js";import"./index-CPErxcS-.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),m=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const s=e.current;return s&&o.length&&(r.current=setInterval(()=>{a.current++,s.navigateTo(a.current%o.length)},5e3)),()=>{m()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{m()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function _t(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{_t as default};
