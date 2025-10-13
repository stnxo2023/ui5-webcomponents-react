import{r as i,j as t,T as l}from"./iframe-mZIFexBi.js";import{useMDXComponents as p}from"./index-CSeyhL4L.js";import{M as u,a as h,k as f}from"./blocks-pMMBqTak.js";import"./Tag-C5S5wO6X.js";import"./index-CY-KcLEe.js";import{F as d}from"./CommandsAndQueries-_DqxABXw.js";import"./copy-CK4YnSbS.js";import{T as b}from"./TableOfContent-Bj42saZH.js";import{C}from"./index-C30vtgAO.js";import{D}from"./BarChart.stories-Bf0ym70X.js";import{D as y}from"./BulletChart.stories-Ba_pGXvG.js";import{D as g}from"./ColumnChart.stories-BYIsgjMr.js";import{D as v}from"./ColumnChartWithTrend.stories-CKl6s0BM.js";import{D as x}from"./ComposedChart.stories-IeMjaxmV.js";import{D as j}from"./DonutChart.stories-Cj1JWZVS.js";import{D as w}from"./LineChart.stories-BJ1VQc68.js";import{D as R}from"./PieChart.stories-Clb4AvDT.js";import{D as I}from"./RadarChart.stories-BnzUxcEs.js";import{D as S}from"./RadialChart.stories-BCJoyQI6.js";import{D as T}from"./ScatterChart.stories-B7FX7I7u.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CuCRdO66.js";import"./sys-enter-2-Da-bg0qX.js";import"./alert-4bZr7bHx.js";import"./index-Bym-t_ma.js";import"./index-BFs_s1ec.js";import"./index-CPook487.js";import"./Link-Dky_yGkw.js";import"./index-BbeYDVUM.js";import"./index-DCVKeCrB.js";import"./index-B61-jGoN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9FjHI5t.js";import"./addCustomCSSWithScoping-BJ-ZUtqt.js";import"./index-DbDxOjYs.js";import"./Carousel-BZ08H136.js";import"./ScrollEnablement-C8KKYJfQ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-4Jfo4OT3.js";import"./slim-arrow-left-BfTOY1jK.js";import"./DemoProps-DAHewc2O.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BOn_-psX.js";import"./ChartContainer-CrnQdRVn.js";import"./index-Bdr-0gsP.js";import"./useCancelAnimationFallback-Cgr5A4bp.js";import"./YAxisTicks-tgTdq9Q7.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-vdjtKsZa.js";import"./ChartDataLabel-DSRCcpGS.js";import"./useOnClickInternal-wutRrqBL.js";import"./react-content-loader.es-CH3ecvfL.js";import"./useIsRTL-7fZVXrnl.js";import"./useLongestYAxisLabel-Dzf0LdbU.js";import"./ComposedChart-C8iQfTNC.js";import"./Line-DbrzrnuX.js";import"./Scatter-CBN_vNxK.js";import"./index-yN6qaHNq.js";import"./index-YHhHYBzs.js";import"./Placeholder-DuY_qrJH.js";import"./index-BV9hEthw.js";const $=`# @ui5/webcomponents-react-charts

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
