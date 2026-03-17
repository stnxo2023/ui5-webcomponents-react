import{q as i,j as t,Q as l}from"./iframe-30LZfzOw.js";import{useMDXComponents as p}from"./index-9hK3vCGp.js";import{M as u,a as h,n as f}from"./blocks-C0vZ6D8t.js";import"./Tag-Dtxkyswp.js";import"./index-CjMm9yFV.js";import"./CommandsAndQueries-B3tX98p8.js";import"./copy-BDfV85Pd.js";import{T as d}from"./TableOfContent-BvUVIFBa.js";import{F as b}from"./Footer-BNR5gUPY.js";import"./PageNotFound-yG6M5MId.js";import{C}from"./index-BeK2AfOw.js";import{D}from"./BarChart.stories-DaznzuU0.js";import{D as y}from"./BulletChart.stories-BOx4_-5x.js";import{D as g}from"./ColumnChart.stories-DRX94LLJ.js";import{D as v}from"./ColumnChartWithTrend.stories-CBbDQD-9.js";import{D as x}from"./ComposedChart.stories-DgK69JBj.js";import{D as j}from"./DonutChart.stories-CjPmeYVA.js";import{D as w}from"./LineChart.stories-DMfAgu5n.js";import{D as R}from"./PieChart.stories-Cgvely-x.js";import{D as I}from"./RadarChart.stories-BYBWA0Ur.js";import{D as S}from"./RadialChart.stories-BmP5myFx.js";import{D as $}from"./ScatterChart.stories-zbGpYAu8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BQPccwsM.js";import"./sys-enter-2-CbSQlHDF.js";import"./alert-BwFRRuyW.js";import"./Link-CPAvZ0M5.js";import"./index-BqAk99uF.js";import"./index-orHhnsuM.js";import"./index-DNQEiveD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl3uWGQL.js";import"./addCustomCSSWithScoping-DtBGS5Q4.js";import"./index-CqMGZXJd.js";import"./index-DBMP_Ccw.js";import"./index-CZwEe_4d.js";import"./index-CFfbQ4H0.js";import"./Illustrations-BGO-1oHt.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-GrvRYTrA.js";import"./ScrollEnablement-BtBhqt6G.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CCc6QYtB.js";import"./slim-arrow-left-DqbkZxnQ.js";import"./DemoProps-B7tooKsG.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-BcjhFzu-.js";import"./ChartContainer-B1xFiSU5.js";import"./index-Dn9Dy3ZO.js";import"./useCancelAnimationFallback-CkqxDxHz.js";import"./YAxisTicks-CSTp4F7b.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D_9W8uWd.js";import"./ChartDataLabel-L03hItFI.js";import"./useOnClickInternal-Cl9hVZpW.js";import"./react-content-loader.es-DIVflmDY.js";import"./useIsRTL-CVz-G4WN.js";import"./useLongestYAxisLabel-DYgYPIdp.js";import"./ComposedChart-BMJep0e8.js";import"./Line-B0SvVur_.js";import"./Scatter-5SlmC4Tm.js";import"./index-C-X0e6nm.js";import"./index-DwVUQtVL.js";import"./Placeholder-BvkACmPa.js";import"./index-CJPLrV9g.js";const E=`# @ui5/webcomponents-react-charts

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
