import{q as i,j as t,Q as l}from"./iframe-DpyqAETS.js";import{useMDXComponents as p}from"./index-DokE1aPE.js";import{M as u,a as h,n as f}from"./blocks-PLzKwXGQ.js";import"./Tag-DKNf6AcV.js";import"./index-TIDQzFF1.js";import"./CommandsAndQueries-DgdmOsaT.js";import"./copy-Bdya3dKB.js";import{T as d}from"./TableOfContent-BWsdSrea.js";import{F as b}from"./Footer-B_kIXa7O.js";import"./PageNotFound-BN4cbSeC.js";import{C}from"./index-CMV-gk-j.js";import{D}from"./BarChart.stories-CUsZenvb.js";import{D as y}from"./BulletChart.stories-DuGfQnXl.js";import{D as g}from"./ColumnChart.stories-D0KvJ2q1.js";import{D as v}from"./ColumnChartWithTrend.stories-BhISPcA2.js";import{D as x}from"./ComposedChart.stories-DLEB4gPl.js";import{D as j}from"./DonutChart.stories-CFe2at1y.js";import{D as w}from"./LineChart.stories-CNfS_idC.js";import{D as R}from"./PieChart.stories-BX9AFfw-.js";import{D as I}from"./RadarChart.stories-BUKLGDmC.js";import{D as S}from"./RadialChart.stories-Cndj7pdu.js";import{D as $}from"./ScatterChart.stories-BE5kY6wx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-99NDnz_N.js";import"./sys-enter-2-CaEWuWxX.js";import"./alert-L-6hDox8.js";import"./Link-Cygi3wLY.js";import"./index-B67fvT3R.js";import"./index-CnomjaBB.js";import"./index-I3HyyzwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP11CHq4.js";import"./addCustomCSSWithScoping-Co67Uzxh.js";import"./index-B0Hg115V.js";import"./index-CiKduFiJ.js";import"./index-I3Bq7JP2.js";import"./index-B8-2K5Ni.js";import"./Illustrations-Beru7cxi.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-CrGH8CZN.js";import"./ScrollEnablement-cQ2m6PIi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DuEDxLoV.js";import"./slim-arrow-left-BKKM2bbr.js";import"./DemoProps-DAix4CMf.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-JyKMgR7P.js";import"./ChartContainer-CBZRlYIb.js";import"./index-Be45WFmK.js";import"./useCancelAnimationFallback-43osEyF1.js";import"./YAxisTicks-De7XXIIF.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CcRE-lEt.js";import"./ChartDataLabel-B-PSVsct.js";import"./useOnClickInternal-CqWLKxYd.js";import"./react-content-loader.es-CsHdf8_7.js";import"./useIsRTL-kZVBuGuq.js";import"./useLongestYAxisLabel-CNsn2Dbj.js";import"./ComposedChart-DBwPFX-4.js";import"./Line-BgzDZTxC.js";import"./Scatter-DEXCE48c.js";import"./index-CREHP84o.js";import"./index-BrkUjWgg.js";import"./Placeholder-CetRje7S.js";import"./index-KE4OqvsC.js";const E=`# @ui5/webcomponents-react-charts

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
