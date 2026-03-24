import{q as i,j as t,Q as l}from"./iframe-DBRigOoU.js";import{useMDXComponents as p}from"./index-apRVXKap.js";import{M as u,a as h,n as f}from"./blocks-BfIRBmeA.js";import"./Tag-DEWl5_iK.js";import"./index-CtZlHOCH.js";import"./CommandsAndQueries-CSuPwIuY.js";import"./copy-D7myjbZ2.js";import{T as d}from"./TableOfContent-CWrNTkbt.js";import{F as b}from"./Footer-C0l-yj0s.js";import"./PageNotFound-CQZvX7Tj.js";import{C}from"./index-riKfXRGJ.js";import{D}from"./BarChart.stories-BTuruJwq.js";import{D as y}from"./BulletChart.stories-CA4ufspu.js";import{D as g}from"./ColumnChart.stories-Bv50bXZR.js";import{D as v}from"./ColumnChartWithTrend.stories-CzHkQqmM.js";import{D as x}from"./ComposedChart.stories-CavrkRVd.js";import{D as j}from"./DonutChart.stories-DeaF15xR.js";import{D as w}from"./LineChart.stories-D5kFLPvw.js";import{D as R}from"./PieChart.stories-CiymrTMl.js";import{D as I}from"./RadarChart.stories-CQbdhkCj.js";import{D as S}from"./RadialChart.stories-vy8WUao7.js";import{D as $}from"./ScatterChart.stories-21A_BEU8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Di_zbJNn.js";import"./sys-enter-2-CpC_ZrXX.js";import"./alert-CuS5B2OC.js";import"./Link-WDyL8T_Q.js";import"./index-NhTjO4vR.js";import"./index-BAsbE3_A.js";import"./index-u05fNeKh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bc6gryl9.js";import"./addCustomCSSWithScoping-Oz7AbKTz.js";import"./index-DxEJ2UxM.js";import"./index-DybExlT-.js";import"./index-DWKSf_OJ.js";import"./index-C-7GLaxU.js";import"./Illustrations-aiaUW8Wr.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DqqjXsw1.js";import"./ScrollEnablement-D2Hwnqmj.js";import"./animate-JylhYHXj.js";import"./AnimationMode-pb6hrePI.js";import"./slim-arrow-left-CpzhfOav.js";import"./DemoProps-BhXgJm9C.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-ZygU4SUx.js";import"./ChartContainer-DsbxS4k_.js";import"./index-BFhPQQPD.js";import"./useCancelAnimationFallback-C7h3XAPb.js";import"./YAxisTicks-s0xpoTkY.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D1szIjE_.js";import"./ChartDataLabel-RuWIzatB.js";import"./useOnClickInternal-D6UUgQZ7.js";import"./react-content-loader.es-Lt5A3OXV.js";import"./useIsRTL-CEAvFyV7.js";import"./useLongestYAxisLabel-swqC-2-q.js";import"./ComposedChart-CawPqBX6.js";import"./Line-Dt3105nZ.js";import"./Scatter-d5vOCFef.js";import"./index-CftUCL2l.js";import"./index-AqdPq0FX.js";import"./Placeholder-B2iJUMs_.js";import"./index-CQUvyMuD.js";const E=`# @ui5/webcomponents-react-charts

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
