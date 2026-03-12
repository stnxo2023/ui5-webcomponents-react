import{q as i,j as t,Q as l}from"./iframe-bao9qRDH.js";import{useMDXComponents as p}from"./index-D58rFl3P.js";import{M as u,a as h,n as f}from"./blocks-uUz_WETG.js";import"./Tag-DnPLRNDs.js";import"./index-B3NnTsyp.js";import"./CommandsAndQueries-Bg8yb33a.js";import"./copy-jfQcw6pd.js";import{T as d}from"./TableOfContent-CharJQun.js";import{F as b}from"./Footer-WVPZdxr3.js";import"./PageNotFound-sLpD2w2i.js";import{C}from"./index-D1hlrypp.js";import{D}from"./BarChart.stories-DuQ_tzZX.js";import{D as y}from"./BulletChart.stories-ClNTkmTu.js";import{D as g}from"./ColumnChart.stories-NoRFmegb.js";import{D as v}from"./ColumnChartWithTrend.stories-Du4D2mqo.js";import{D as x}from"./ComposedChart.stories-SoeT9Rm0.js";import{D as j}from"./DonutChart.stories-oVX6oRbj.js";import{D as w}from"./LineChart.stories-DWDpKcfA.js";import{D as R}from"./PieChart.stories-vyWPF8VD.js";import{D as I}from"./RadarChart.stories-CBi3V1Wo.js";import{D as S}from"./RadialChart.stories-GnzdUtFZ.js";import{D as $}from"./ScatterChart.stories-7pmDKyTe.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DbPZ0LCP.js";import"./sys-enter-2-Ch2YqKTp.js";import"./alert-CeM8CijD.js";import"./Link-ZWtIcHaY.js";import"./index-BNO-qx4N.js";import"./index-Dl2g3tcZ.js";import"./index-DOBS9bga.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L1xKvRVU.js";import"./addCustomCSSWithScoping-D0v__xyi.js";import"./index-DPEMBgxp.js";import"./index-5JMcfQSp.js";import"./index-CwfO5OAT.js";import"./index-D32QYjx2.js";import"./Illustrations-BL_lLuOy.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DVF51oqu.js";import"./ScrollEnablement-DTj4JYqk.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D_KFd9xX.js";import"./slim-arrow-left-Dt5KkfzG.js";import"./DemoProps-BXMcJj_E.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BnV27tqO.js";import"./ChartContainer-vwhm318T.js";import"./index-C8x-DaOR.js";import"./useCancelAnimationFallback-zyYsL1NU.js";import"./YAxisTicks-D9ctziYd.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Oamng9Di.js";import"./ChartDataLabel-By5iO1d-.js";import"./useOnClickInternal-B3tHmDYF.js";import"./react-content-loader.es-ycBAZfwY.js";import"./useIsRTL-BuL1NiTR.js";import"./useLongestYAxisLabel-Dngq9Xbc.js";import"./ComposedChart-Dx6vu6tC.js";import"./Line-BNAjxyG8.js";import"./Scatter-DUP29dU0.js";import"./index-xbZFdXDK.js";import"./index-womWb0fb.js";import"./Placeholder-DFk3AMqP.js";import"./index-CZrd8TSG.js";const E=`# @ui5/webcomponents-react-charts

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
