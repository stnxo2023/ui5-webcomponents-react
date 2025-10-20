import{r as i,j as t,T as l}from"./iframe-D7LtZGbE.js";import{useMDXComponents as p}from"./index-DPe-hK9n.js";import{M as u,a as h,k as f}from"./blocks-pr2PodND.js";import"./Tag-CAGvJLHq.js";import"./index-8IYrQOsB.js";import{F as d}from"./CommandsAndQueries-16gk4cWC.js";import"./copy-irE93QLw.js";import{T as b}from"./TableOfContent-BQqicCGe.js";import{C}from"./index-HBdRnGGh.js";import{D}from"./BarChart.stories-Dw2o5JGU.js";import{D as y}from"./BulletChart.stories-Z8n7pjq_.js";import{D as g}from"./ColumnChart.stories-DZffNS38.js";import{D as v}from"./ColumnChartWithTrend.stories-CLQ18WKK.js";import{D as x}from"./ComposedChart.stories-C5pR0jiA.js";import{D as j}from"./DonutChart.stories-9Idev4r6.js";import{D as w}from"./LineChart.stories-CJTQdZYS.js";import{D as R}from"./PieChart.stories-Cuv6UNLM.js";import{D as I}from"./RadarChart.stories-DMggpseR.js";import{D as S}from"./RadialChart.stories-BmUzXrca.js";import{D as T}from"./ScatterChart.stories-D4Y6Cg3p.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DGR9jLKW.js";import"./sys-enter-2-pukk9ibo.js";import"./alert-ltuZ9R-x.js";import"./index-CTJj7zal.js";import"./index-CQrPSC4r.js";import"./index-DCDoujQt.js";import"./Link-DR-Yc_uT.js";import"./index-D9f7QWgZ.js";import"./index-7y0cv8s8.js";import"./index-B5kVVFk8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0rw92sk.js";import"./addCustomCSSWithScoping-Q6oWMzUs.js";import"./index-nlmJusRV.js";import"./Carousel-CUZ7Ukch.js";import"./ScrollEnablement-BHoJsn2l.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C8je3Mq7.js";import"./slim-arrow-left-CwS7AAt7.js";import"./DemoProps-CoB7GvGX.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-pjOjtCX4.js";import"./ChartContainer-B_sz1X_O.js";import"./index-DOsdkp8m.js";import"./useCancelAnimationFallback-BO-7hzFm.js";import"./YAxisTicks-B86vMn0o.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B5Zn0aQ1.js";import"./ChartDataLabel-Bpazkl51.js";import"./useOnClickInternal-j7soDXHV.js";import"./react-content-loader.es-BZBfhK88.js";import"./useIsRTL-BMbyDpGC.js";import"./useLongestYAxisLabel-DGiSpPcR.js";import"./ComposedChart-Dn4eWO6X.js";import"./Line-mTpDDSKg.js";import"./Scatter-yHUaESGC.js";import"./index-lHK_QFMJ.js";import"./index-DCWE0B5h.js";import"./Placeholder-DVap5n3y.js";import"./index-BpfXK3pV.js";const $=`# @ui5/webcomponents-react-charts

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
