import{n as i,j as t,N as l}from"./iframe-CTCL6F1r.js";import{useMDXComponents as p}from"./index-COtiMl_W.js";import{M as u,a as h,n as f}from"./blocks-BWrgTR_X.js";import"./Tag-BL5Qfzs7.js";import"./index-DN-3xlKC.js";import"./CommandsAndQueries-BsPL36Z9.js";import"./copy-DEpsQlxb.js";import{T as d}from"./TableOfContent-C2y7XBBL.js";import{F as b}from"./Footer-DeTYP8-R.js";import"./PageNotFound-D_xGTPNz.js";import{C}from"./index-CGJQGXFQ.js";import{D}from"./BarChart.stories-DwD7aWv1.js";import{D as y}from"./BulletChart.stories-CFzbqNWf.js";import{D as g}from"./ColumnChart.stories-q2Ptrcil.js";import{D as v}from"./ColumnChartWithTrend.stories-lJQAZhJF.js";import{D as x}from"./ComposedChart.stories-BCJsJ0nM.js";import{D as j}from"./DonutChart.stories-D1C4fUvn.js";import{D as w}from"./LineChart.stories-DAtpEHcD.js";import{D as R}from"./PieChart.stories-C7iNU6gz.js";import{D as I}from"./RadarChart.stories-2Vkb0rk_.js";import{D as S}from"./RadialChart.stories-IYO-bAm0.js";import{D as $}from"./ScatterChart.stories-BFyUXI1-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CiEkIJMA.js";import"./sys-enter-2-Cm5ZOXv2.js";import"./alert-CwDd6vfH.js";import"./Link-A2IdBIvD.js";import"./index-CeDd6fzK.js";import"./index-Dj3jefRS.js";import"./index-ByW0PFuk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bj5cLhE3.js";import"./addCustomCSSWithScoping-Bp0u_2pD.js";import"./index-BzwM6I24.js";import"./index-DWmGRAcl.js";import"./index-9E9I64Wt.js";import"./index-D_vdDgjG.js";import"./Illustrations-GQ99oYm_.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-CZ7d3p_J.js";import"./ScrollEnablement-B00j-Abc.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BaAEji6-.js";import"./slim-arrow-left-Dh2qbDzq.js";import"./DemoProps-CQ27kSWo.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-B3tazSca.js";import"./ChartContainer-7SWe_4B6.js";import"./index-BksCzbKY.js";import"./useCancelAnimationFallback--kMQMCS5.js";import"./YAxisTicks-CD6A_rov.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BoOOZ8Xl.js";import"./ChartDataLabel-DhY1p5m-.js";import"./useOnClickInternal-DPYXZ83V.js";import"./react-content-loader.es-DXzHjDeq.js";import"./useIsRTL-CVAaEzsl.js";import"./useLongestYAxisLabel-sI5NSpiE.js";import"./ComposedChart-B-X4HgLy.js";import"./Line-C-715122.js";import"./Scatter-Cd2oErHG.js";import"./index-mp1kToyx.js";import"./index-CgHncs3S.js";import"./Placeholder-D5aaWQW6.js";import"./index-Cf0_Ww0M.js";const E=`# @ui5/webcomponents-react-charts

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
