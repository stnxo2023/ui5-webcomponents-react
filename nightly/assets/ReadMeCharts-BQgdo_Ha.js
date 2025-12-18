import{r as i,j as t,T as l}from"./iframe-DE5WqRSI.js";import{useMDXComponents as p}from"./index-DVGykmsi.js";import{M as u,a as h,n as f}from"./blocks-CybNjylu.js";import"./Tag-DXduP7K6.js";import"./index-BqsIcBTd.js";import{F as d}from"./CommandsAndQueries-CT_qy-L6.js";import"./copy-CmTK1gpG.js";import{T as b}from"./TableOfContent-CFRSt6hc.js";import{C}from"./index-mdsR_0rd.js";import{D}from"./BarChart.stories-ByEreEVu.js";import{D as y}from"./BulletChart.stories-x2Dx6CYl.js";import{D as g}from"./ColumnChart.stories-B--Of-QX.js";import{D as v}from"./ColumnChartWithTrend.stories-N_HzJ6Aw.js";import{D as x}from"./ComposedChart.stories-WL4M9MIm.js";import{D as j}from"./DonutChart.stories-CtnX8ShG.js";import{D as w}from"./LineChart.stories-hK7V0jOS.js";import{D as R}from"./PieChart.stories-Dx08rjhf.js";import{D as I}from"./RadarChart.stories-DegLUKeh.js";import{D as S}from"./RadialChart.stories-BsOnAdwV.js";import{D as T}from"./ScatterChart.stories-f6GZD2Fu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CfYTqUOR.js";import"./sys-enter-2-Dqu1QcV8.js";import"./alert-Dotce8LG.js";import"./index-C3HZg113.js";import"./index-Bo0MdSU9.js";import"./index-CxE79HQo.js";import"./Link-BcyJtysS.js";import"./index-EXtiqGa7.js";import"./index-DF_fIzZz.js";import"./index-BoscFH1P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CURCJNNc.js";import"./addCustomCSSWithScoping-CHzs5Kt8.js";import"./index-C1194UdL.js";import"./Carousel-B78gA3AY.js";import"./ScrollEnablement-B1rg2zRK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-iVXZpah3.js";import"./slim-arrow-left-nSJYa2Hs.js";import"./DemoProps-DVt9PLuh.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DorOaKcl.js";import"./ChartContainer-DZL24cl8.js";import"./index-BcVPuJ_0.js";import"./useCancelAnimationFallback-yVRXueTK.js";import"./YAxisTicks-Cb5wPe_j.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CyaKkiLb.js";import"./ChartDataLabel-Jtpc3tv1.js";import"./useOnClickInternal-BpHOunMS.js";import"./react-content-loader.es-lVH7dB9-.js";import"./useIsRTL-BThYFQYx.js";import"./useLongestYAxisLabel-CGSbSpDM.js";import"./ComposedChart-Cb9pTdI_.js";import"./Line-Dt9SIBP-.js";import"./Scatter-BeCE2chn.js";import"./index-36npKt23.js";import"./index-_l5eQjpe.js";import"./Placeholder-CxH3Hp8k.js";import"./index-DkoaNxvl.js";const $=`# @ui5/webcomponents-react-charts

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
