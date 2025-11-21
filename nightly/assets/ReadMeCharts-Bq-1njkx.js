import{r as i,j as t,T as l}from"./iframe-DVV5VFB7.js";import{useMDXComponents as p}from"./index-qyzUrO0d.js";import{M as u,a as h,m as f}from"./blocks-D1E9_7c3.js";import"./Tag-CQyymDzh.js";import"./index-Bn7PyzsE.js";import{F as d}from"./CommandsAndQueries-lBZKGmp7.js";import"./copy-Cn3WomF2.js";import{T as b}from"./TableOfContent-BFe6IJBY.js";import{C}from"./index-BUZTHC_L.js";import{D}from"./BarChart.stories-BPLXoFre.js";import{D as y}from"./BulletChart.stories-CJR39UMH.js";import{D as g}from"./ColumnChart.stories-Bgu81LWR.js";import{D as v}from"./ColumnChartWithTrend.stories-BA3cI-ja.js";import{D as x}from"./ComposedChart.stories-Cc7G5z3V.js";import{D as j}from"./DonutChart.stories-CnEJKye2.js";import{D as w}from"./LineChart.stories-CvWWwJmK.js";import{D as R}from"./PieChart.stories-C0YSbPmt.js";import{D as I}from"./RadarChart.stories-CWB6IysM.js";import{D as S}from"./RadialChart.stories-krQ9WgEf.js";import{D as T}from"./ScatterChart.stories-BwwZXKdV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-rc4de9km.js";import"./sys-enter-2-DXmpS6_D.js";import"./alert-DByE3GtL.js";import"./index-Dqdoz1dV.js";import"./index-BkDm8D7N.js";import"./index-gDTG9hvV.js";import"./Link-DfNmKUcn.js";import"./index-gNtvK5Wx.js";import"./index-ZnLduBLK.js";import"./index-BHIms4DS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_xwBI5c.js";import"./addCustomCSSWithScoping-DOzeCYXW.js";import"./index-DCIIs4BW.js";import"./Carousel-bW5OVpRo.js";import"./ScrollEnablement-D9nrHUMi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CHh0awje.js";import"./slim-arrow-left-fK3sWgjM.js";import"./DemoProps-quBDpbqR.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Czgbo61Z.js";import"./ChartContainer-DdOsGayN.js";import"./index-BeQBrD2O.js";import"./useCancelAnimationFallback-B8IxqUtA.js";import"./YAxisTicks-C72HjTki.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C9M0UWIc.js";import"./ChartDataLabel-CpmEiHhW.js";import"./useOnClickInternal--1ZiHOaq.js";import"./react-content-loader.es-reDvQz-e.js";import"./useIsRTL-BHovj_YO.js";import"./useLongestYAxisLabel-B7woOIaX.js";import"./ComposedChart-OQHc-_PD.js";import"./Line-B75U6Hdm.js";import"./Scatter-CxCwc-xr.js";import"./index-J3RvwlDH.js";import"./index-dGYvop2B.js";import"./Placeholder-BBJ71FCZ.js";import"./index-ON8e7djd.js";const $=`# @ui5/webcomponents-react-charts

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
