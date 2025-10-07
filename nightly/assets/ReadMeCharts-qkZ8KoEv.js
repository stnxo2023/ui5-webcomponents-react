import{r as i,j as t,T as l}from"./iframe-BBABn56p.js";import{useMDXComponents as p}from"./index-JaA5rKoZ.js";import{M as u,a as h,k as f}from"./blocks-C48pq8eI.js";import"./Tag-2o8WwGUn.js";import"./index-CDfsiwkh.js";import{F as d}from"./CommandsAndQueries-BQ3fu09v.js";import"./copy-DZ9Ywk1q.js";import{T as b}from"./TableOfContent-f3hxLNqe.js";import{C}from"./index-CWKwuy09.js";import{D}from"./BarChart.stories-D4-WD4XW.js";import{D as y}from"./BulletChart.stories-jnakFaAD.js";import{D as g}from"./ColumnChart.stories-CJSLoQ23.js";import{D as v}from"./ColumnChartWithTrend.stories-CHAcZj3m.js";import{D as x}from"./ComposedChart.stories-CYMbf-iN.js";import{D as j}from"./DonutChart.stories-CQs9BH1K.js";import{D as w}from"./LineChart.stories-CRbZslAB.js";import{D as R}from"./PieChart.stories-CDcmlmEK.js";import{D as I}from"./RadarChart.stories-BT16t-ZO.js";import{D as S}from"./RadialChart.stories-kA06ek4U.js";import{D as T}from"./ScatterChart.stories-BVlLibY4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BZFlG9j_.js";import"./sys-enter-2-DjgAxbYG.js";import"./alert-CS_Fjm7A.js";import"./index-J2oyeWCO.js";import"./index-CKtBuMmX.js";import"./index-DWO5htBk.js";import"./Link-Ber6JvTK.js";import"./index-bK0pQ8Eu.js";import"./index-D_78KBK9.js";import"./index-BkrG37On.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGZzwSbc.js";import"./addCustomCSSWithScoping-BtxahzH2.js";import"./index-Ckf8DLFv.js";import"./Carousel-Da72MQiI.js";import"./ScrollEnablement-BLTuKYfn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DoJTQK2M.js";import"./slim-arrow-left-23ZpcceZ.js";import"./DemoProps-CcBrvWkK.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BgHOBA9c.js";import"./ChartContainer-ydPae7Pa.js";import"./index-BCqZx7KV.js";import"./useCancelAnimationFallback-Bt9AkQZ3.js";import"./YAxisTicks-CzBzQbNv.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CXQBusIF.js";import"./ChartDataLabel-BywGODeN.js";import"./useOnClickInternal-Ds200Tve.js";import"./react-content-loader.es-CY6igFxh.js";import"./useIsRTL-BoTjglKk.js";import"./useLongestYAxisLabel-Bh6OlGqQ.js";import"./ComposedChart-DmSmpJaI.js";import"./Line-HMSQafna.js";import"./Scatter-C5Tp9jgl.js";import"./index-DVJcP5JH.js";import"./index-D5fwyFO-.js";import"./Placeholder-q83HBBJ0.js";import"./index-Bavr7TZ6.js";const $=`# @ui5/webcomponents-react-charts

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
