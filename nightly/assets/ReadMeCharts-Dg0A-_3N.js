import{r as i,j as t,T as l}from"./iframe-DeMwMmGx.js";import{useMDXComponents as p}from"./index-CWwj9Mnl.js";import{M as u,a as h,k as f}from"./blocks-8D0p5thu.js";import"./Tag-CJlss1uo.js";import"./index-fzrObdgv.js";import{F as d}from"./CommandsAndQueries-BBLmRDsb.js";import"./copy-BgdiHhBm.js";import{T as b}from"./TableOfContent-C7YYhWI1.js";import{C}from"./index-BXpCaWx8.js";import{D}from"./BarChart.stories-Dc1PO0oN.js";import{D as y}from"./BulletChart.stories-DWjYqia8.js";import{D as g}from"./ColumnChart.stories-Dh4CuERQ.js";import{D as v}from"./ColumnChartWithTrend.stories-DNksd0TH.js";import{D as x}from"./ComposedChart.stories-DEVi7lWm.js";import{D as j}from"./DonutChart.stories-Dzt4vSPr.js";import{D as w}from"./LineChart.stories-C8m6eMAc.js";import{D as R}from"./PieChart.stories-CRZOCUtt.js";import{D as I}from"./RadarChart.stories-WmRx8RoB.js";import{D as S}from"./RadialChart.stories-CLTGTHKQ.js";import{D as T}from"./ScatterChart.stories-CcriS6qU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-IgIWD04z.js";import"./sys-enter-2-B6dBkbbN.js";import"./alert-DXbxKJCI.js";import"./index-DaGO4DII.js";import"./index-CvQAJVIm.js";import"./index-CqRETC9D.js";import"./Link-DuK3KTb6.js";import"./index-x-nhhmJ1.js";import"./index-QSmrzR-p.js";import"./index-C3DV1EGu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ0_IZyX.js";import"./addCustomCSSWithScoping-DmQSYZoL.js";import"./index-DwA6oYWp.js";import"./Carousel-wyvAzPSA.js";import"./ScrollEnablement-BDJVsvmw.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CDoEiGfL.js";import"./slim-arrow-left-U3D1nn4T.js";import"./DemoProps-CjpCdgsG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CvZscbHu.js";import"./ChartContainer-JDGgT2YI.js";import"./index-5d-X9JJE.js";import"./useCancelAnimationFallback-z_uDLxvq.js";import"./YAxisTicks-BuUSIDzF.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BXs9v0ls.js";import"./ChartDataLabel-0dmpWg4Q.js";import"./useOnClickInternal-DOQZYX7u.js";import"./react-content-loader.es-DXK8AAhU.js";import"./useIsRTL-Dy9MOOru.js";import"./useLongestYAxisLabel-B3LxMywa.js";import"./ComposedChart-ASbFh-G6.js";import"./Line-CMS7mu1A.js";import"./Scatter-BZg85ruI.js";import"./index-CSE05DeJ.js";import"./index-jx27j8L_.js";import"./Placeholder-CkBt9RTL.js";import"./index-Dul16mqY.js";const $=`# @ui5/webcomponents-react-charts

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
