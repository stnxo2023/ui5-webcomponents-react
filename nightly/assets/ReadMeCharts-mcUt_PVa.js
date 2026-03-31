import{n as i,j as t,N as l}from"./iframe-D-ZP0dY4.js";import{u as p,M as u,a as h,k as f}from"./blocks-DdKopPSC.js";import"./Tag-CNlwwDmZ.js";import"./index-C04kZKw9.js";import"./CommandsAndQueries-BDnj74c9.js";import"./copy-HW_Kxlr2.js";import{T as d}from"./TableOfContent--BhlVRbW.js";import{F as b}from"./Footer-BLTkp7nE.js";import"./PageNotFound-DiPPX7Ze.js";import{C}from"./index-CKATAPBZ.js";import{D}from"./BarChart.stories-CpVUiJbq.js";import{D as y}from"./BulletChart.stories-eWeV8qH3.js";import{D as g}from"./ColumnChart.stories-7fcoAUSv.js";import{D as v}from"./ColumnChartWithTrend.stories-C776P4Zs.js";import{D as x}from"./ComposedChart.stories-1wo55eO4.js";import{D as j}from"./DonutChart.stories-Ba1pNEm8.js";import{D as w}from"./LineChart.stories-C6_crSsv.js";import{D as R}from"./PieChart.stories-D5ZCMfY-.js";import{D as I}from"./RadarChart.stories-CyIN0Dr2.js";import{D as S}from"./RadialChart.stories-BiMlAHb_.js";import{D as $}from"./ScatterChart.stories-0N-Gvnns.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BKIP_Ra_.js";import"./sys-enter-2-vX0Cm-qe.js";import"./alert-Bu79oBCI.js";import"./Link-06g1SNw0.js";import"./index-CF2Hkn6J.js";import"./index-BAothMF0.js";import"./index-eZWdMAeg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxeCNWRQ.js";import"./addCustomCSSWithScoping-DSa3TmU8.js";import"./index-BAH7VHrp.js";import"./index-U3Dsw_H6.js";import"./index-Dx3fp6V7.js";import"./index-Tnz3nQrD.js";import"./Illustrations-DQsCRA8v.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-pAR1GwhU.js";import"./ScrollEnablement-DYOTGKWX.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DmX6H7iJ.js";import"./slim-arrow-left-C0zk9S9q.js";import"./DemoProps-Ht4t-GXp.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-MTKoLG04.js";import"./ChartContainer-CE7FnsLO.js";import"./index-Boazbh6I.js";import"./useCancelAnimationFallback-Cn7M9lXX.js";import"./YAxisTicks-CtUD9YU_.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BU8jyaDR.js";import"./ChartDataLabel-CIp6wtwL.js";import"./useOnClickInternal-fQui96Qn.js";import"./react-content-loader.es-CCinqto-.js";import"./useIsRTL-BuCIUNGJ.js";import"./useLongestYAxisLabel-lPMbelya.js";import"./ComposedChart-0haxiQFR.js";import"./Line-CtPnGBrK.js";import"./Scatter-ClBFA5Hk.js";import"./index-Dnno1Ee0.js";import"./index-DTrLG3Z1.js";import"./Placeholder-CGqLJfjd.js";import"./index-c_o_FlDL.js";const E=`# @ui5/webcomponents-react-charts

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
