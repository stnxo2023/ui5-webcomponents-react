import{r as i,j as t,T as l}from"./iframe-DJ3L9Q7k.js";import{useMDXComponents as p}from"./index-CgKASuks.js";import{M as u,a as h,k as f}from"./blocks-CtbNLxKJ.js";import"./Tag-dHoy1aOg.js";import"./index-Drb2TrHE.js";import{F as d}from"./CommandsAndQueries-J0DynbNC.js";import"./copy-dl-GArcT.js";import{T as b}from"./TableOfContent-B0H268Zi.js";import{C}from"./index-Df9EFZil.js";import{D}from"./BarChart.stories-Bn02wEpm.js";import{D as y}from"./BulletChart.stories-B2PMhYJo.js";import{D as g}from"./ColumnChart.stories-B3HxiBvS.js";import{D as v}from"./ColumnChartWithTrend.stories-Dn4DPWMK.js";import{D as x}from"./ComposedChart.stories-CNjgdi4S.js";import{D as j}from"./DonutChart.stories-PKX_Xa6T.js";import{D as w}from"./LineChart.stories-B01Cl0U4.js";import{D as R}from"./PieChart.stories-Bl5-DWR7.js";import{D as I}from"./RadarChart.stories-Cl66bX7b.js";import{D as S}from"./RadialChart.stories-Dns5bkUA.js";import{D as T}from"./ScatterChart.stories-BpC1kT3r.js";import"./preload-helper-PPVm8Dsz.js";import"./information-1qu8opp4.js";import"./sys-enter-2-Cu2hBGrK.js";import"./alert-Bssjvu3J.js";import"./index-BiXweYzS.js";import"./index-4H2gG8m_.js";import"./index-DQGcZUo3.js";import"./Link-CI3a-uZg.js";import"./index-DDFmE4EA.js";import"./index-BTen11gj.js";import"./index-C_wfJoh6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BifEEb3N.js";import"./addCustomCSSWithScoping-BamJJJtZ.js";import"./index-DJdHB7_b.js";import"./Carousel-uCKmcUWp.js";import"./ScrollEnablement-BgeY4u8Z.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D6f6Bir2.js";import"./slim-arrow-left-BrKsQvnV.js";import"./DemoProps-But7OUv2.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D7B6SN5s.js";import"./ChartContainer-BiOxcnkf.js";import"./index-BElugJkH.js";import"./useCancelAnimationFallback-Dium3zIf.js";import"./YAxisTicks-DrBBNJmd.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BQhss8RK.js";import"./ChartDataLabel-CaF2Ec7W.js";import"./useOnClickInternal-1mD4alRP.js";import"./react-content-loader.es-Bk0Vkthq.js";import"./useIsRTL-g4vzgofK.js";import"./useLongestYAxisLabel-ChsFjkC4.js";import"./ComposedChart-URYoywbu.js";import"./Line-D4Px_8mx.js";import"./Scatter-C_xDG2lc.js";import"./index-BFUUsygY.js";import"./index-Bf8F-_e1.js";import"./Placeholder-CrHVhW5o.js";import"./index-F-SvGxQf.js";const $=`# @ui5/webcomponents-react-charts

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
