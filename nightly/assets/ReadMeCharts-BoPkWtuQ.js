import{r as i,j as t,T as l}from"./iframe-CMRYeg3m.js";import{useMDXComponents as p}from"./index-d3aogLFm.js";import{M as u,a as h,n as f}from"./blocks-B--XNN4Z.js";import"./Tag-DLJpwqrU.js";import"./index-X7c2uI6J.js";import{F as d}from"./CommandsAndQueries-DpsRc0ye.js";import"./copy-O4x8gwVx.js";import{T as b}from"./TableOfContent-WwOK0Hwd.js";import{C}from"./index-Cz7NJmnI.js";import{D}from"./BarChart.stories-DjlO3GJi.js";import{D as y}from"./BulletChart.stories-CbQsdlHr.js";import{D as g}from"./ColumnChart.stories-DbVha7_h.js";import{D as v}from"./ColumnChartWithTrend.stories-BF5wPXYL.js";import{D as x}from"./ComposedChart.stories-wvvkN_7u.js";import{D as j}from"./DonutChart.stories-DvoxWhSt.js";import{D as w}from"./LineChart.stories-Dp-_XyfW.js";import{D as R}from"./PieChart.stories-DkrovP5Q.js";import{D as I}from"./RadarChart.stories-DVvIndW1.js";import{D as S}from"./RadialChart.stories-8wBBdlnW.js";import{D as T}from"./ScatterChart.stories-B88W8GES.js";import"./preload-helper-PPVm8Dsz.js";import"./information-2R4wAWn8.js";import"./sys-enter-2-h25AZJAc.js";import"./alert-EuMgWuer.js";import"./index-Dt6RwhRx.js";import"./index-BVsKPF1I.js";import"./index-csz7EJl3.js";import"./Link-Bxvjqypp.js";import"./index-PIXQ40x8.js";import"./index-Ca5PVHn4.js";import"./index-DVEpH7N4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-f1AMIobt.js";import"./addCustomCSSWithScoping-D9ZK4KgK.js";import"./index-TGfnZuTz.js";import"./Carousel-o5tSuuiW.js";import"./ScrollEnablement-CHUJ-chc.js";import"./animate-JylhYHXj.js";import"./AnimationMode-ePkhLkv3.js";import"./slim-arrow-left-DcWnXf0s.js";import"./DemoProps-xeUs1NOb.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Ba7yM6ly.js";import"./ChartContainer-BCDe7lDT.js";import"./index-8DOGvRkG.js";import"./useCancelAnimationFallback-B4racQ-t.js";import"./YAxisTicks-DOeZcA1O.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-9iJ12mPr.js";import"./ChartDataLabel-BLcSZHs6.js";import"./useOnClickInternal-B2RIzsZm.js";import"./react-content-loader.es-CyV_4sj0.js";import"./useIsRTL-G_RHHN41.js";import"./useLongestYAxisLabel-CG00jcc3.js";import"./ComposedChart-DIrdOc0w.js";import"./Line-CfTlmmWN.js";import"./Scatter-CHDRfiEF.js";import"./index-ePfiejlc.js";import"./index-CtX7f7jE.js";import"./Placeholder-COQAeZfx.js";import"./index-C1ZFlgFH.js";const $=`# @ui5/webcomponents-react-charts

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
