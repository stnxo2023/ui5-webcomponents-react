import{r as i,j as t,T as l}from"./iframe-7SE3nFh2.js";import{useMDXComponents as p}from"./index-C0FWbpZL.js";import{M as u,a as h,k as f}from"./blocks-BJKQ4CAZ.js";import"./Tag-CAr8yJM3.js";import"./index-DcFj-mpl.js";import{F as d}from"./CommandsAndQueries-BztwtTDr.js";import"./copy-CDZIXxHa.js";import{T as b}from"./TableOfContent-B1lf0qQg.js";import{C}from"./index-sYPiGiO4.js";import{D}from"./BarChart.stories-BKxqc0XF.js";import{D as y}from"./BulletChart.stories-DdZO3sl1.js";import{D as g}from"./ColumnChart.stories-aiCSoL07.js";import{D as v}from"./ColumnChartWithTrend.stories-Cp0xsw-C.js";import{D as x}from"./ComposedChart.stories-CLRTcDex.js";import{D as j}from"./DonutChart.stories-DnjOu8me.js";import{D as w}from"./LineChart.stories-uMbRs6Bo.js";import{D as R}from"./PieChart.stories-hZAoo4Ac.js";import{D as I}from"./RadarChart.stories-CubtEROT.js";import{D as S}from"./RadialChart.stories-DxvWKt2t.js";import{D as T}from"./ScatterChart.stories-ZMRZGLuj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CEHY-zK8.js";import"./sys-enter-2-Db6aMDI3.js";import"./alert-iGUotenY.js";import"./index-BdnA4cG1.js";import"./index-DZIYhziJ.js";import"./index-BH5SLEfd.js";import"./Link-DJshYrFL.js";import"./index-CJza0w__.js";import"./index-CHnd9ZVx.js";import"./index-cZBRAzkp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bx3Mb7HN.js";import"./addCustomCSSWithScoping-CrtLyOIc.js";import"./index-CZm6iJJ6.js";import"./Carousel-Bt4nshDj.js";import"./ScrollEnablement-u1O_vcM6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-wwRUSk5e.js";import"./slim-arrow-left-DhzgUYJC.js";import"./DemoProps-BL0YijXX.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps--f1azNqA.js";import"./ChartContainer-ClHzkRhE.js";import"./index-Dx0AFnS0.js";import"./useCancelAnimationFallback-DQhZT2TG.js";import"./YAxisTicks-D5h80vLf.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DibHQCPA.js";import"./ChartDataLabel-Bi3Ei8kq.js";import"./useOnClickInternal-C68swI37.js";import"./react-content-loader.es-CqwqATlt.js";import"./useIsRTL-DTz5BFmM.js";import"./useLongestYAxisLabel-vGQl5gZ5.js";import"./ComposedChart-CC-ItHVk.js";import"./Line-ZtKD44uW.js";import"./Scatter-CkyrNAlS.js";import"./index-B5sMgkaK.js";import"./index-DaPJbdgu.js";import"./Placeholder-BLUTOGgG.js";import"./index-C08MUtmM.js";const $=`# @ui5/webcomponents-react-charts

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
