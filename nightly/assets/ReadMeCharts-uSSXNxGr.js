import{r as i,j as t,T as l}from"./iframe-5rXfnPaz.js";import{useMDXComponents as p}from"./index-BqyI3aT9.js";import{M as u,a as h,m as f}from"./blocks-_HtGHxpQ.js";import"./Tag-BLU9xLwR.js";import"./index-TJORVIjM.js";import{F as d}from"./CommandsAndQueries-Xz4gCbJR.js";import"./copy-3qQuBQub.js";import{T as b}from"./TableOfContent-DOPl490X.js";import{C}from"./index-DcnVX99-.js";import{D}from"./BarChart.stories-BlavMmhI.js";import{D as y}from"./BulletChart.stories-BseDtsn-.js";import{D as g}from"./ColumnChart.stories-DabmYQhx.js";import{D as v}from"./ColumnChartWithTrend.stories-CJ3BIjDW.js";import{D as x}from"./ComposedChart.stories-Dx5RR6Hi.js";import{D as j}from"./DonutChart.stories-BByGRTPI.js";import{D as w}from"./LineChart.stories-CbEvynLJ.js";import{D as R}from"./PieChart.stories-B9KxBB3g.js";import{D as I}from"./RadarChart.stories-ClNhZ3YH.js";import{D as S}from"./RadialChart.stories-OX-wrUUB.js";import{D as T}from"./ScatterChart.stories-C-Es0i1H.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C9cuRXqE.js";import"./sys-enter-2-y9J_ETy2.js";import"./alert-CnXddf7Q.js";import"./index-D3cU9WTA.js";import"./index-BB6TdVmi.js";import"./index-BgPkgqrz.js";import"./Link-IINvsuro.js";import"./index-X9fuUMPC.js";import"./index-DVjD8wbo.js";import"./index-Bna4bEkh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BikUYAZO.js";import"./addCustomCSSWithScoping-Cv8BQzm9.js";import"./index-DN9fi-2P.js";import"./Carousel-CMOrgKlA.js";import"./ScrollEnablement-C55G51IY.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C53Rm5Ta.js";import"./slim-arrow-left-3zUOYbeB.js";import"./DemoProps-DVKFcS-n.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BjG1W4_d.js";import"./ChartContainer-CWpSpZSn.js";import"./index-B15VKN5k.js";import"./useCancelAnimationFallback-CD4ZtGTn.js";import"./YAxisTicks-BTLCwUWi.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bjl4mvEE.js";import"./ChartDataLabel-DUvbbOxZ.js";import"./useOnClickInternal-BvARVDw_.js";import"./react-content-loader.es-kml8wPN6.js";import"./useIsRTL-Cij_psQ1.js";import"./useLongestYAxisLabel-C0lqcPvK.js";import"./ComposedChart-Bh_NOP8I.js";import"./Line-BVNRrtIk.js";import"./Scatter-BMj3X8Nh.js";import"./index-cMw5MSKn.js";import"./index-CRJy1xVs.js";import"./Placeholder-DGFfBiNc.js";import"./index-CJyEjfa6.js";const $=`# @ui5/webcomponents-react-charts

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
