import{q as i,j as t,Q as l}from"./iframe-BdGmxA0i.js";import{useMDXComponents as p}from"./index-C_zfuZcr.js";import{M as u,a as h,n as f}from"./blocks-CvQb1zUF.js";import"./Tag-BZN3xK1V.js";import"./index-BNIHl_tg.js";import"./CommandsAndQueries-DPqSrKc7.js";import"./copy-uDMRF36v.js";import{T as d}from"./TableOfContent-DlZGdJoU.js";import{F as b}from"./Footer-Do6hcOrL.js";import"./PageNotFound-CY9FLBWR.js";import{C}from"./index-DCRZnYoG.js";import{D}from"./BarChart.stories-CAPiH1sY.js";import{D as y}from"./BulletChart.stories-6rUU2SPw.js";import{D as g}from"./ColumnChart.stories-DzTKVfMO.js";import{D as v}from"./ColumnChartWithTrend.stories-DDEEgs-n.js";import{D as x}from"./ComposedChart.stories-JnT06aUw.js";import{D as j}from"./DonutChart.stories-5xxnbfIc.js";import{D as w}from"./LineChart.stories-BBMyZ_75.js";import{D as R}from"./PieChart.stories-BBxVhpxo.js";import{D as I}from"./RadarChart.stories-BpMjziSG.js";import{D as S}from"./RadialChart.stories-CtKyGhhQ.js";import{D as $}from"./ScatterChart.stories-BwvTHhxu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CGm_Wlhu.js";import"./sys-enter-2-ckHTVyHn.js";import"./alert-iCvnQY_C.js";import"./Link-CQvrABtJ.js";import"./index-DweznLO9.js";import"./index-C9pyPHSx.js";import"./index-DNgHnsc0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-XhNISppA.js";import"./addCustomCSSWithScoping-CVesT24B.js";import"./index-DZ9SK43g.js";import"./index-B2qLcI40.js";import"./index-rE0jwRpd.js";import"./index-BdC4vT1G.js";import"./Illustrations-D5W8On_q.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-bJCjzEyc.js";import"./ScrollEnablement-Bx9yVDLi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D8IdC8zJ.js";import"./slim-arrow-left-B_onCyfB.js";import"./DemoProps-Cfx32SAt.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DLZaczLK.js";import"./ChartContainer-D8LchB5a.js";import"./index-D5VX-3sq.js";import"./useCancelAnimationFallback-PgudvjlB.js";import"./YAxisTicks-Bz1TR52I.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CIzB3UfM.js";import"./ChartDataLabel-C26o4vK-.js";import"./useOnClickInternal-BhHknn_i.js";import"./react-content-loader.es-COekCtlx.js";import"./useIsRTL-C8ybJVgJ.js";import"./useLongestYAxisLabel-DqThnTGB.js";import"./ComposedChart-DUpHLMKH.js";import"./Line-CyoboSiR.js";import"./Scatter-g3K-Fr0S.js";import"./index-CgbUv8y0.js";import"./index-CPGtYGDp.js";import"./Placeholder-5zpVwFq6.js";import"./index-BUnMNbNG.js";const E=`# @ui5/webcomponents-react-charts

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
