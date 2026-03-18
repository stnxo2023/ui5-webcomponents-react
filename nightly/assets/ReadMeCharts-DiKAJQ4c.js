import{q as i,j as t,Q as l}from"./iframe-BWTquNFU.js";import{useMDXComponents as p}from"./index-CkXQL6rW.js";import{M as u,a as h,n as f}from"./blocks-24keuhPe.js";import"./Tag-DhoajqAo.js";import"./index-B59i8xiW.js";import"./CommandsAndQueries-Cu22SJgH.js";import"./copy-iNwkfzwy.js";import{T as d}from"./TableOfContent-xDME-aco.js";import{F as b}from"./Footer-BPNOTf-P.js";import"./PageNotFound-CJcyxQek.js";import{C}from"./index-Cw7pBHUA.js";import{D}from"./BarChart.stories-B-1SXs-z.js";import{D as y}from"./BulletChart.stories-Xw-q7A3O.js";import{D as g}from"./ColumnChart.stories-D1B1T2AL.js";import{D as v}from"./ColumnChartWithTrend.stories-DpuuqKeh.js";import{D as x}from"./ComposedChart.stories-CD7O2Fp3.js";import{D as j}from"./DonutChart.stories-CXlLe6b-.js";import{D as w}from"./LineChart.stories-BXYP_rkC.js";import{D as R}from"./PieChart.stories-CtYJQEX9.js";import{D as I}from"./RadarChart.stories-QDaA1SEG.js";import{D as S}from"./RadialChart.stories-Li5aWSZW.js";import{D as $}from"./ScatterChart.stories-oHRLF4Il.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DMtPZuOJ.js";import"./sys-enter-2-C7vs2MPC.js";import"./alert-CcklZ67u.js";import"./Link-BecYEhoc.js";import"./index-BTohTOow.js";import"./index-scscec-x.js";import"./index-CKCv8CV3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Byoi_UeP.js";import"./addCustomCSSWithScoping-DP3CaadD.js";import"./index-ChJmkZbc.js";import"./index-NVW8xIV5.js";import"./index-kSfV8vRJ.js";import"./index-DVrCMdXJ.js";import"./Illustrations-CJfJJGnG.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-mfXSpi6R.js";import"./ScrollEnablement-BoYZgYHz.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DHFhPWcM.js";import"./slim-arrow-left-DthTDeGF.js";import"./DemoProps-CjF81M9E.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-DHt-efw_.js";import"./ChartContainer-Bkr3T37d.js";import"./index-B1xXM3b0.js";import"./useCancelAnimationFallback-caLmZu0S.js";import"./YAxisTicks-C5zWNXRQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DmPj5BBV.js";import"./ChartDataLabel-CTxobgdk.js";import"./useOnClickInternal-BS8S1mPh.js";import"./react-content-loader.es-BhRquOMJ.js";import"./useIsRTL-D1j5P2oj.js";import"./useLongestYAxisLabel-DxxXEY-3.js";import"./ComposedChart-CK4KaDfy.js";import"./Line-B_Dqrvpg.js";import"./Scatter-Bwh-6afD.js";import"./index-oFSvdlvh.js";import"./index-DVs8MBGw.js";import"./Placeholder-DSx-Ae9N.js";import"./index-4FoNWAZA.js";const E=`# @ui5/webcomponents-react-charts

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
