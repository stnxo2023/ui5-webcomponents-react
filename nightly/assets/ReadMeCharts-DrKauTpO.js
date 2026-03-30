import{n as i,j as t,N as l}from"./iframe-BXb_n64_.js";import{u as p,M as u,a as h,k as f}from"./blocks-9VP231tA.js";import"./Tag-CRNARXt6.js";import"./index-BL83g4Fz.js";import"./CommandsAndQueries-BI-RA2OZ.js";import"./copy-BBKTKpbi.js";import{T as d}from"./TableOfContent-CJDX4QJ8.js";import{F as b}from"./Footer-DPPwB2I6.js";import"./PageNotFound-CZrojxwO.js";import{C}from"./index-BEqCz4tJ.js";import{D}from"./BarChart.stories-CnIhi-GM.js";import{D as y}from"./BulletChart.stories-CmMFqmGY.js";import{D as g}from"./ColumnChart.stories-C6AnsZNf.js";import{D as v}from"./ColumnChartWithTrend.stories-9ud1QZaS.js";import{D as x}from"./ComposedChart.stories-DVnR4FJZ.js";import{D as j}from"./DonutChart.stories-CjUL-cQh.js";import{D as w}from"./LineChart.stories-C9RDb3-i.js";import{D as R}from"./PieChart.stories-4cIqZce_.js";import{D as I}from"./RadarChart.stories-7ZJqBCnS.js";import{D as S}from"./RadialChart.stories-DjFAhLPt.js";import{D as $}from"./ScatterChart.stories-D0jYWE7O.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./Link-BUcKjx9R.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./index-BD_xT1Nj.js";import"./index-DqAHmx0d.js";import"./index-BNBy1IQK.js";import"./index-BSoVaSRp.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-q_8t3gwK.js";import"./ScrollEnablement-CdFwVVtK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CH3bJHHm.js";import"./slim-arrow-left-Cjs_Lf9F.js";import"./DemoProps-DK3y8C8H.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-BGUFBGCe.js";import"./ChartContainer-KR2Fry9p.js";import"./index-DrzieGlz.js";import"./useCancelAnimationFallback-CSNbrXfk.js";import"./YAxisTicks-uw2L-CGI.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BXN0KySP.js";import"./ChartDataLabel-C9h-R1Cu.js";import"./useOnClickInternal-uToZcufC.js";import"./react-content-loader.es-C4l4M2EW.js";import"./useIsRTL-BJ6r15BN.js";import"./useLongestYAxisLabel-Dw8eP1FM.js";import"./ComposedChart-D728Q_pU.js";import"./Line-LQUuYQKt.js";import"./Scatter-BJg9CckZ.js";import"./index-Bce2RNnP.js";import"./index-Dv6lraqq.js";import"./Placeholder-CokN0wQ_.js";import"./index-CbUlbvVO.js";const E=`# @ui5/webcomponents-react-charts

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
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function Gt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Gt as default};
