import{r as i,j as t,T as l}from"./iframe-JkIS1XbA.js";import{useMDXComponents as p}from"./index-s0dX5IQa.js";import{M as u,a as h,m as f}from"./blocks-DIFA4jfF.js";import"./Tag-CGYuzpRX.js";import"./index-Cki6PEzP.js";import{F as d}from"./CommandsAndQueries-t8PqdBYw.js";import"./copy-BpEy4GT_.js";import{T as b}from"./TableOfContent-COxJdC22.js";import{C}from"./index-zu5kgJQ3.js";import{D}from"./BarChart.stories-FPqpkZQ-.js";import{D as y}from"./BulletChart.stories-DdSmaLtD.js";import{D as g}from"./ColumnChart.stories-CRiU3s32.js";import{D as v}from"./ColumnChartWithTrend.stories-BIxrNjaH.js";import{D as x}from"./ComposedChart.stories-BBypSj-x.js";import{D as j}from"./DonutChart.stories-7gmhYut7.js";import{D as w}from"./LineChart.stories-D2PWCHtq.js";import{D as R}from"./PieChart.stories-BLFNYv2E.js";import{D as I}from"./RadarChart.stories-EZMb0a67.js";import{D as S}from"./RadialChart.stories-zeKcxaUe.js";import{D as T}from"./ScatterChart.stories-Dl_qLCGD.js";import"./preload-helper-PPVm8Dsz.js";import"./information-8O35dRa_.js";import"./sys-enter-2-BwjA-U8a.js";import"./alert-0nYrX8QQ.js";import"./index-CcRV2upd.js";import"./index-If9QK12V.js";import"./index-Cc6IDcWO.js";import"./Link-C8ljX_Jl.js";import"./index-BJe_Ldbq.js";import"./index-CIULjnJw.js";import"./index-D4k933VY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6BvO_Mx.js";import"./addCustomCSSWithScoping-OrJPV9ed.js";import"./index-wV8mgQwM.js";import"./Carousel-DWVlOsEj.js";import"./ScrollEnablement-DgEc-4I0.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DAIiny5y.js";import"./slim-arrow-left-BjdBPfzb.js";import"./DemoProps-DFYk_LKs.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-mLA0xtsq.js";import"./ChartContainer-D70WCDMo.js";import"./index-bz7pM8qx.js";import"./useCancelAnimationFallback-BjPwcAE7.js";import"./YAxisTicks-Dtrae04Z.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BxOyHmR3.js";import"./ChartDataLabel-Bjnbpc5H.js";import"./useOnClickInternal-CQ31qXPe.js";import"./react-content-loader.es-BMZrUq2V.js";import"./useIsRTL-3MqpM2h7.js";import"./useLongestYAxisLabel-BBmbbYki.js";import"./ComposedChart-DhZk32kn.js";import"./Line-CSvXFQN6.js";import"./Scatter-D9b4ryKv.js";import"./index-D_WCUuqb.js";import"./index-lT2dCKrw.js";import"./Placeholder-CnkCMONi.js";import"./index-B6Cb-_As.js";const $=`# @ui5/webcomponents-react-charts

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
