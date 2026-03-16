import{q as i,j as t,Q as l}from"./iframe-BFfiCRAQ.js";import{useMDXComponents as p}from"./index-CnIchwG9.js";import{M as u,a as h,n as f}from"./blocks-D8UGMoOU.js";import"./Tag-D5_wJnae.js";import"./index-BvMEXi75.js";import"./CommandsAndQueries-D2e25SQ4.js";import"./copy-CbWPHS6-.js";import{T as d}from"./TableOfContent-DfIS3zQ7.js";import{F as b}from"./Footer-3U2rULEI.js";import"./PageNotFound-CAIx-1qq.js";import{C}from"./index-CT5da9wM.js";import{D}from"./BarChart.stories-CZ8DjdxR.js";import{D as y}from"./BulletChart.stories-DEFHp8uf.js";import{D as g}from"./ColumnChart.stories-DM7ysSyO.js";import{D as v}from"./ColumnChartWithTrend.stories-AtwRORI-.js";import{D as x}from"./ComposedChart.stories-BomOwT_P.js";import{D as j}from"./DonutChart.stories-z6Co0FeI.js";import{D as w}from"./LineChart.stories-C-5XdOoq.js";import{D as R}from"./PieChart.stories-CD5yRVwo.js";import{D as I}from"./RadarChart.stories-D0jMMKor.js";import{D as S}from"./RadialChart.stories-D-apTDnY.js";import{D as $}from"./ScatterChart.stories-2wdsEjY_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-mHfS5cWl.js";import"./sys-enter-2-BfeK50PI.js";import"./alert-DGgnTy1o.js";import"./Link-BzXMrnu2.js";import"./index-Arv69njm.js";import"./index-BEK-Ecqi.js";import"./index-CX51hblh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RE3-w7CJ.js";import"./addCustomCSSWithScoping-rUi9bOzC.js";import"./index-De1oz68R.js";import"./index-C_tePRTa.js";import"./index-BsyXKf0m.js";import"./index-stFY49PR.js";import"./Illustrations-DMZSmuvx.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-ixtP09SD.js";import"./ScrollEnablement-BWSWkQKK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-W19j3IAn.js";import"./slim-arrow-left-WtZ7TAZf.js";import"./DemoProps-DmXN_evY.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-FWhe77sn.js";import"./ChartContainer-GpWmwdaE.js";import"./index-D4r21y2V.js";import"./useCancelAnimationFallback-BgdZzccn.js";import"./YAxisTicks-CMorNZAF.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B6j9nMeD.js";import"./ChartDataLabel-vr_IdQqt.js";import"./useOnClickInternal-Ct-ll2w0.js";import"./react-content-loader.es-DAmVMjlE.js";import"./useIsRTL-C_1zrNbW.js";import"./useLongestYAxisLabel-U38l6zFb.js";import"./ComposedChart-C6b-HHtG.js";import"./Line-xjbBMFYe.js";import"./Scatter-C-AltvAw.js";import"./index-DWaD2_AI.js";import"./index-DDww8csz.js";import"./Placeholder-BBW3p1NM.js";import"./index-KrhvA9ok.js";const E=`# @ui5/webcomponents-react-charts

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
