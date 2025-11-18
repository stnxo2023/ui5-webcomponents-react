import{r as i,j as t,T as l}from"./iframe-DMHzJZ-j.js";import{useMDXComponents as p}from"./index-C6fVjeP1.js";import{M as u,a as h,m as f}from"./blocks-BBNtOPy5.js";import"./Tag-CQITClqv.js";import"./index-C0eFSkjd.js";import{F as d}from"./CommandsAndQueries-DGQGLEXC.js";import"./copy-x3ZdDA2U.js";import{T as b}from"./TableOfContent-DmuZLTjo.js";import{C}from"./index-BjnPk2Cp.js";import{D}from"./BarChart.stories-ovf7A4iK.js";import{D as y}from"./BulletChart.stories-JaSJ1YMt.js";import{D as g}from"./ColumnChart.stories-CC5m494u.js";import{D as v}from"./ColumnChartWithTrend.stories-ChMsHaU6.js";import{D as x}from"./ComposedChart.stories-mbUFMYSi.js";import{D as j}from"./DonutChart.stories-ByAYUhkY.js";import{D as w}from"./LineChart.stories-CxhcpA61.js";import{D as R}from"./PieChart.stories-DDHA5hPC.js";import{D as I}from"./RadarChart.stories-DOBSQe-b.js";import{D as S}from"./RadialChart.stories-DkTy5C9S.js";import{D as T}from"./ScatterChart.stories-Bo0ViE3O.js";import"./preload-helper-PPVm8Dsz.js";import"./information-41_Ak17O.js";import"./sys-enter-2-YeOg860G.js";import"./alert-Dt7k-zHX.js";import"./index-DhIsFRFq.js";import"./index-B1RFmErt.js";import"./index-Cr6zAa1Q.js";import"./Link-DH5vJWVF.js";import"./index-DgEALGZi.js";import"./index-CqxeRCB-.js";import"./index-CEzdIVxS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-bWNLwVQr.js";import"./addCustomCSSWithScoping-Br9NkwKR.js";import"./index-BlloQ94B.js";import"./Carousel-Dr6_crmw.js";import"./ScrollEnablement-CIWRDRru.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BFj5otgT.js";import"./slim-arrow-left-CGCVvKNO.js";import"./DemoProps-HjxxYW2C.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DMvhaiSs.js";import"./ChartContainer-CZnD3BWV.js";import"./index-uksb_LL1.js";import"./useCancelAnimationFallback-CbGhN06C.js";import"./YAxisTicks-DnLPyHEB.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-1DZkV_NM.js";import"./ChartDataLabel-B94iJZYm.js";import"./useOnClickInternal-B8Ju-KqW.js";import"./react-content-loader.es-BNDUFPSh.js";import"./useIsRTL-zZAL_Iqq.js";import"./useLongestYAxisLabel-hCJ-W_YW.js";import"./ComposedChart-CId1lDOk.js";import"./Line-VkiWTjXo.js";import"./Scatter-BrDVnu_Y.js";import"./index-CEEYHkxr.js";import"./index-Xfchf3cG.js";import"./Placeholder-RVFmwvSy.js";import"./index-itWyVsq8.js";const $=`# @ui5/webcomponents-react-charts

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
