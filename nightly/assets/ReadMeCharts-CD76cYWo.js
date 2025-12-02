import{r as i,j as t,T as l}from"./iframe-CojmUvbr.js";import{useMDXComponents as p}from"./index-yNE59oSe.js";import{M as u,a as h,m as f}from"./blocks-CCIsbg9K.js";import"./Tag-Dsf3IOJa.js";import"./index-Brr98IUO.js";import{F as d}from"./CommandsAndQueries-aZHAlwyo.js";import"./copy-BaosELJI.js";import{T as b}from"./TableOfContent-CYdFHrwI.js";import{C}from"./index-Dv9MLN-V.js";import{D}from"./BarChart.stories-BqxdNjTN.js";import{D as y}from"./BulletChart.stories-DP7ch4r8.js";import{D as g}from"./ColumnChart.stories-CUtDcQ8i.js";import{D as v}from"./ColumnChartWithTrend.stories-DoRsTDpf.js";import{D as x}from"./ComposedChart.stories-Cp-o24RT.js";import{D as j}from"./DonutChart.stories-B02kUzsV.js";import{D as w}from"./LineChart.stories-CjqGoP_k.js";import{D as R}from"./PieChart.stories-zlYYmNzz.js";import{D as I}from"./RadarChart.stories-Bc-9QXBi.js";import{D as S}from"./RadialChart.stories-g0yXXDpE.js";import{D as T}from"./ScatterChart.stories-jxj_jv-8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BEykFvbu.js";import"./sys-enter-2-BjWZZR70.js";import"./alert-CeJt7tDB.js";import"./index-DWXpW2Nz.js";import"./index-CJ7ufDVc.js";import"./index-YKIZAZmt.js";import"./Link-DrGCnOch.js";import"./index-DSq2zmmv.js";import"./index-n-K8h2zA.js";import"./index-BIRLYBEm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBX4KpMg.js";import"./addCustomCSSWithScoping-IwiFNes4.js";import"./index-CW7nJiyw.js";import"./Carousel-Mi6HS6C2.js";import"./ScrollEnablement-CsFUE6Hy.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dxk1AuPw.js";import"./slim-arrow-left-LByT51OQ.js";import"./DemoProps-B6OfUCOs.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-trZGGzpB.js";import"./ChartContainer-DE6nPvSZ.js";import"./index-fxNkC4ZC.js";import"./useCancelAnimationFallback-4aMETlor.js";import"./YAxisTicks-SByMWhy7.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bd2rjuTq.js";import"./ChartDataLabel-3pft5nVe.js";import"./useOnClickInternal-CRiatAl_.js";import"./react-content-loader.es-CqL-7ZAQ.js";import"./useIsRTL-BjmSWWr0.js";import"./useLongestYAxisLabel-CkPrnEob.js";import"./ComposedChart-CLyz03kh.js";import"./Line-B6u4YhCK.js";import"./Scatter-CVtD0yev.js";import"./index-BPMnS9sX.js";import"./index-COydUIQs.js";import"./Placeholder-Cwe6mhvh.js";import"./index-JfqvDF0d.js";const $=`# @ui5/webcomponents-react-charts

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
