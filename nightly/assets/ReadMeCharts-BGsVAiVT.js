import{r as i,j as t,T as l}from"./iframe-C4t4IgBC.js";import{useMDXComponents as p}from"./index-Mw7OJb9H.js";import{M as u,a as h,m as f}from"./blocks-BBLZG0oz.js";import"./Tag-CDNtFOv1.js";import"./index-Dn3tX0-p.js";import{F as d}from"./CommandsAndQueries-D8F1OdPA.js";import"./copy-Cuc5dF6S.js";import{T as b}from"./TableOfContent-jh3H59Es.js";import{C}from"./index-DDRyHLa5.js";import{D}from"./BarChart.stories-CzEF2nSK.js";import{D as y}from"./BulletChart.stories-C_0vpH_b.js";import{D as g}from"./ColumnChart.stories-CxtOeH3R.js";import{D as v}from"./ColumnChartWithTrend.stories-CJI7X1vh.js";import{D as x}from"./ComposedChart.stories-DHs6HZ9f.js";import{D as j}from"./DonutChart.stories-DYWO243v.js";import{D as w}from"./LineChart.stories-CxM-nszP.js";import{D as R}from"./PieChart.stories-Caj_pdgZ.js";import{D as I}from"./RadarChart.stories-5H7fpm75.js";import{D as S}from"./RadialChart.stories-Cg2dlToK.js";import{D as T}from"./ScatterChart.stories-C951TpdU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ChMVL_f6.js";import"./sys-enter-2-qiLZ6lMH.js";import"./alert-CRjt_mFI.js";import"./index-C_e2hqHh.js";import"./index-DHWon9Pg.js";import"./index-CWVWkCUh.js";import"./Link-DmVNlXZz.js";import"./index-BTZMG5sJ.js";import"./index-DoEQkKHr.js";import"./index-B9hc6QqK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVHmgfEk.js";import"./addCustomCSSWithScoping-BpxylvhK.js";import"./index-nQT45DkO.js";import"./Carousel-UV9CZJrh.js";import"./ScrollEnablement-36SXz3Hc.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DCSMWnrY.js";import"./slim-arrow-left-BJ6ay6Gi.js";import"./DemoProps-BAB1IEO5.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-zXLcH6_c.js";import"./ChartContainer-C-qs6cRC.js";import"./index-CHTmrhF4.js";import"./useCancelAnimationFallback-DLr-6RLR.js";import"./YAxisTicks-DLbGboZe.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dlc890H9.js";import"./ChartDataLabel-Vo9f7lgX.js";import"./useOnClickInternal-SNFRbnUL.js";import"./react-content-loader.es-2Nw3EHL8.js";import"./useIsRTL-w_ivh6EU.js";import"./useLongestYAxisLabel-Dl2_R5rf.js";import"./ComposedChart-Bl9hlQ4c.js";import"./Line-Dv9nVwro.js";import"./Scatter-CDuJE50x.js";import"./index-Drzhtx9C.js";import"./index-DoV4oRsK.js";import"./Placeholder-CSI-8Why.js";import"./index-B7T8IRJg.js";const $=`# @ui5/webcomponents-react-charts

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
