import{q as i,j as t,Q as l}from"./iframe-CGE6jX6t.js";import{useMDXComponents as p}from"./index-CnlF4PpM.js";import{M as u,a as h,n as f}from"./blocks-C1wugZAv.js";import"./Tag-BT7c2k9t.js";import"./index-O5K3XRBn.js";import"./CommandsAndQueries-D_JGI6Ia.js";import"./copy-ByAfyVz0.js";import{T as d}from"./TableOfContent-D00F15mF.js";import{F as b}from"./Footer-BebX2FrJ.js";import"./PageNotFound-gkdNug7A.js";import{C}from"./index-COHRoOxy.js";import{D}from"./BarChart.stories-sdPVaX_d.js";import{D as y}from"./BulletChart.stories-esq_tuZd.js";import{D as g}from"./ColumnChart.stories-DGyze2o2.js";import{D as v}from"./ColumnChartWithTrend.stories-CeWB50F2.js";import{D as x}from"./ComposedChart.stories-DuKqOHJB.js";import{D as j}from"./DonutChart.stories-faAPaaMT.js";import{D as w}from"./LineChart.stories-Dk6dHF_v.js";import{D as R}from"./PieChart.stories-v_dKfCsR.js";import{D as I}from"./RadarChart.stories-Cy5NhCrG.js";import{D as S}from"./RadialChart.stories-DmuJj6xn.js";import{D as $}from"./ScatterChart.stories-CRedQLqk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DjCg2NR8.js";import"./sys-enter-2-WI9s45tq.js";import"./alert-DkCV9tpB.js";import"./Link-B734PLKt.js";import"./index-D1hVPzQS.js";import"./index-WD-xjM3p.js";import"./index-DuWDlj0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jWRCnrak.js";import"./addCustomCSSWithScoping-Bg1A5NWS.js";import"./index-CMs90z2F.js";import"./index-D4AJb6hG.js";import"./index-Bx2-sARl.js";import"./index-bjWm1Qbv.js";import"./Illustrations-DcoINpXf.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DnZ8lO4X.js";import"./ScrollEnablement-CMpF8f9q.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DOySyOIa.js";import"./slim-arrow-left-BQY-dV3r.js";import"./DemoProps-WbRf6Og7.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-1qgqtkXW.js";import"./ChartContainer-DeMU5YKE.js";import"./index-BF-516Y4.js";import"./useCancelAnimationFallback-B4FNDloX.js";import"./YAxisTicks-DtNquxaP.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-3dlk4uT-.js";import"./ChartDataLabel-CUFMJiMw.js";import"./useOnClickInternal-IGdqcQf-.js";import"./react-content-loader.es-DjSOJ1Lg.js";import"./useIsRTL-sj-cJ_3l.js";import"./useLongestYAxisLabel-B6IdPRnu.js";import"./ComposedChart-D3ME9zsM.js";import"./Line-Db_Q1Fxv.js";import"./Scatter-C6fwzQTA.js";import"./index-8A3uIbI8.js";import"./index-BOVIAdTg.js";import"./Placeholder-BLUUw_Hv.js";import"./index-bCOG7sxs.js";const E=`# @ui5/webcomponents-react-charts

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
