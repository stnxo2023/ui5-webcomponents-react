import{q as i,j as t,Q as l}from"./iframe-B7xuoxGk.js";import{useMDXComponents as p}from"./index-D6aSzRGN.js";import{M as u,a as h,n as f}from"./blocks-DZ0Vo0vM.js";import"./Tag-CtaADOFc.js";import"./index-BzZxDoNe.js";import"./CommandsAndQueries-DKcdQNlV.js";import"./copy-h55QeB4j.js";import{T as d}from"./TableOfContent-DJgrMBhW.js";import{F as b}from"./Footer--uD18Qhj.js";import"./PageNotFound-DygNwEfd.js";import{C}from"./index-DWGwmMg3.js";import{D}from"./BarChart.stories-BY5nqI3m.js";import{D as y}from"./BulletChart.stories-xPtZWMlX.js";import{D as g}from"./ColumnChart.stories-BD6kVAUl.js";import{D as v}from"./ColumnChartWithTrend.stories-BFOk7bLO.js";import{D as x}from"./ComposedChart.stories-Cy2MjEIj.js";import{D as j}from"./DonutChart.stories-C5VzRzDH.js";import{D as w}from"./LineChart.stories-DNcIH6x5.js";import{D as R}from"./PieChart.stories-B3uJsfy8.js";import{D as I}from"./RadarChart.stories-D1irtOpv.js";import{D as S}from"./RadialChart.stories-1sr9SA8R.js";import{D as $}from"./ScatterChart.stories-DoSny3cu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BW_uN0gP.js";import"./sys-enter-2-BoXj1fRr.js";import"./alert-Cl-xvHRs.js";import"./Link-YW7Wqeu4.js";import"./index-wxY5XpWW.js";import"./index-D_A15Zs0.js";import"./index-Bimscpqo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZFeJY_e.js";import"./addCustomCSSWithScoping-1uVBaclk.js";import"./index-BXMXe_Dr.js";import"./index-B_T64Hn2.js";import"./index-DmGPBpXp.js";import"./index-B7nFcBs2.js";import"./Illustrations-w0lfALHe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-C--wQrU-.js";import"./ScrollEnablement-GVTwnxGd.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CwV-xgwV.js";import"./slim-arrow-left-CfaCIxVO.js";import"./DemoProps-BjL4TQdb.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-vAjp8CBt.js";import"./ChartContainer-B3YjY5yG.js";import"./index-uphkaPTP.js";import"./useCancelAnimationFallback-BCNvYCO8.js";import"./YAxisTicks-7oDblVwo.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BWxwzY_2.js";import"./ChartDataLabel-De3thxW_.js";import"./useOnClickInternal-B_bUEpi3.js";import"./react-content-loader.es-D6rxz9wi.js";import"./useIsRTL-D8gGRGzd.js";import"./useLongestYAxisLabel-C_IUoP72.js";import"./ComposedChart-CSKyfj7t.js";import"./Line-Bc9qUQJb.js";import"./Scatter-I43MZUki.js";import"./index-Cz1cz1nH.js";import"./index-BAeeEX-v.js";import"./Placeholder-DVYX9CkC.js";import"./index-EnS9gWzm.js";const E=`# @ui5/webcomponents-react-charts

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
