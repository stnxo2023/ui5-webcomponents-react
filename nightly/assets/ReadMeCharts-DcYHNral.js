import{r as i,j as t,T as l}from"./iframe-m3wgL8DO.js";import{useMDXComponents as p}from"./index-BDA4Q--W.js";import{M as u,a as h,m as f}from"./blocks-CkTarMgO.js";import"./Tag-tSZf1-5X.js";import"./index-XwYlDB9P.js";import{F as d}from"./CommandsAndQueries-DJJG77Q0.js";import"./copy-CODhXho7.js";import{T as b}from"./TableOfContent-CYqz57vy.js";import{C}from"./index-7D6oX55v.js";import{D}from"./BarChart.stories-BjGbAaKe.js";import{D as y}from"./BulletChart.stories-BqVN6cg5.js";import{D as g}from"./ColumnChart.stories-C01s5jDG.js";import{D as v}from"./ColumnChartWithTrend.stories-CIP2LJqk.js";import{D as x}from"./ComposedChart.stories-LWYpsx6Q.js";import{D as j}from"./DonutChart.stories-B44IaJBq.js";import{D as w}from"./LineChart.stories-Bn5zYIjn.js";import{D as R}from"./PieChart.stories-aGaoFF8D.js";import{D as I}from"./RadarChart.stories-DUyvJMxB.js";import{D as S}from"./RadialChart.stories-C9iVBS4z.js";import{D as T}from"./ScatterChart.stories-DKCrCI1U.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DsCCxR_j.js";import"./sys-enter-2-3GVzqOhh.js";import"./alert-CYqVZ7NL.js";import"./index-BhmtIGIH.js";import"./index-D9MBfHQe.js";import"./index-CVyBcJoi.js";import"./Link-BBA1fpnp.js";import"./index-CLINieEb.js";import"./index-00DfGzTS.js";import"./index-B7uA3u-p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6f_OpFu.js";import"./addCustomCSSWithScoping-D1ffFiBE.js";import"./index-BSNngnc7.js";import"./Carousel-uMWI3mll.js";import"./ScrollEnablement-Dlq8aT82.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BT8ro7SM.js";import"./slim-arrow-left-NfrIEcNL.js";import"./DemoProps-BW83u9hH.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BK2aXac9.js";import"./ChartContainer-Cah32QSc.js";import"./index-Bt_KiuWe.js";import"./useCancelAnimationFallback-eBbnYcJ0.js";import"./YAxisTicks-KY8Z2hFP.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BKfNv1S7.js";import"./ChartDataLabel-Nh2ATrmT.js";import"./useOnClickInternal-BmCwJOIN.js";import"./react-content-loader.es-D7Vr2ybA.js";import"./useIsRTL-NbRukm78.js";import"./useLongestYAxisLabel-BpXfBNIk.js";import"./ComposedChart-CwIxKgGz.js";import"./Line-BBgi5lwX.js";import"./Scatter-Clh4q6jZ.js";import"./index-Dh-110DE.js";import"./index-B-6dShvh.js";import"./Placeholder-BmBo9n2I.js";import"./index-DzHzo-FB.js";const $=`# @ui5/webcomponents-react-charts

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
