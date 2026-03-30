import{n as i,j as t,N as l}from"./iframe-CJJIsx6F.js";import{u as p,M as u,a as h,k as f}from"./blocks-ChaXMZP5.js";import"./Tag-n7rERTqv.js";import"./index-C3WbBMZ1.js";import"./CommandsAndQueries-B6BpCs-M.js";import"./copy-CS6obn2m.js";import{T as d}from"./TableOfContent-CASxHgew.js";import{F as b}from"./Footer-Ce6by-oH.js";import"./PageNotFound-BtSzGq-G.js";import{C}from"./index-7847yZMJ.js";import{D}from"./BarChart.stories-D7jvaNCf.js";import{D as y}from"./BulletChart.stories-B1uHs0ng.js";import{D as g}from"./ColumnChart.stories-B5j_MWGG.js";import{D as v}from"./ColumnChartWithTrend.stories-DPnuaH32.js";import{D as x}from"./ComposedChart.stories-pN3KApAb.js";import{D as j}from"./DonutChart.stories-BBbMM6uu.js";import{D as w}from"./LineChart.stories-Cj8ybJin.js";import{D as R}from"./PieChart.stories-DRC5vk1o.js";import{D as I}from"./RadarChart.stories-BpRbkGtM.js";import{D as S}from"./RadialChart.stories-0ZkjEzYJ.js";import{D as $}from"./ScatterChart.stories-C90yw10j.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHzv4rEq.js";import"./sys-enter-2-DxE2QBT2.js";import"./alert-BgdGP7JP.js";import"./Link-GrYjVq0T.js";import"./index-BAPIP2EX.js";import"./index-CiQC7Mcr.js";import"./index-DWaBFkkI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CLM_ccAB.js";import"./addCustomCSSWithScoping-DH49qo7-.js";import"./index-8nS7lmoC.js";import"./index-qLq9B_00.js";import"./index-Comgbi1p.js";import"./index-DqWhINqr.js";import"./Illustrations-BhBoWAi4.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BrHtf5YC.js";import"./ScrollEnablement-BtkDzK2q.js";import"./animate-JylhYHXj.js";import"./AnimationMode-H-ZHUz3B.js";import"./slim-arrow-left-ocODH7Re.js";import"./DemoProps-Dv4IRBFK.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-CPHxt55J.js";import"./ChartContainer-C_shLF08.js";import"./index-JFvXmi3y.js";import"./useCancelAnimationFallback-C7acyrnD.js";import"./YAxisTicks-CpB4a9Yx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BvFKM3IX.js";import"./ChartDataLabel-BQHhovEp.js";import"./useOnClickInternal-xW1EaKtg.js";import"./react-content-loader.es-BOirk5WO.js";import"./useIsRTL-1-FsbUZP.js";import"./useLongestYAxisLabel-CRWs-Zsn.js";import"./ComposedChart-D_lryISR.js";import"./Line-BxCGigc4.js";import"./Scatter-fkczz0HK.js";import"./index-C6IeaZS8.js";import"./index-J-Iu4flP.js";import"./Placeholder-BNRlG275.js";import"./index-C1JlM3Nt.js";const E=`# @ui5/webcomponents-react-charts

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
