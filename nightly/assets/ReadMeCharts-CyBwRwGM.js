import{n as i,j as t,N as l}from"./iframe-J46VriOb.js";import{useMDXComponents as p}from"./index-CBla0wLi.js";import{M as u,a as h,n as f}from"./blocks-beoBu_qL.js";import"./Tag-DrBKyONn.js";import"./index-_u-v5yqi.js";import"./CommandsAndQueries-BzSXHbZJ.js";import"./copy-_0TxAB6h.js";import{T as d}from"./TableOfContent-Udn_Do39.js";import{F as b}from"./Footer-CEGsJe_E.js";import"./PageNotFound-D29obeve.js";import{C}from"./index-FsBpAg9q.js";import{D}from"./BarChart.stories-DblpIukU.js";import{D as y}from"./BulletChart.stories-DG-KBtku.js";import{D as g}from"./ColumnChart.stories-1y_Ix5GQ.js";import{D as v}from"./ColumnChartWithTrend.stories-CSsrxW3j.js";import{D as x}from"./ComposedChart.stories-C6NzS2F6.js";import{D as j}from"./DonutChart.stories-vBcdUi8F.js";import{D as w}from"./LineChart.stories-BuZ5wpy7.js";import{D as R}from"./PieChart.stories-9XzXQKZ7.js";import{D as I}from"./RadarChart.stories-bdELjUBF.js";import{D as S}from"./RadialChart.stories-Ce4XWH_F.js";import{D as $}from"./ScatterChart.stories-BIC97fAT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CATkPoRV.js";import"./sys-enter-2-Cc8Mj3l6.js";import"./alert-BWP7y2xA.js";import"./Link-B4FJ2xg8.js";import"./index-Dw3YBt24.js";import"./index-D6itq-2d.js";import"./index-aps2uNQB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxsI6DA6.js";import"./addCustomCSSWithScoping-Dl6_6-AL.js";import"./index-BrGkrW3e.js";import"./index-Dt6WNWTR.js";import"./index-CT7sD2iL.js";import"./index-BkIHYavW.js";import"./Illustrations-D_iUtabn.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BbQt177Y.js";import"./ScrollEnablement-DNtDiy2E.js";import"./animate-JylhYHXj.js";import"./AnimationMode-ByEUk1Zv.js";import"./slim-arrow-left-yRl7wI8T.js";import"./DemoProps-DigXS3Jq.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-BT2LOv_s.js";import"./ChartContainer-Drc4H9Mp.js";import"./index-Pf84_VDN.js";import"./useCancelAnimationFallback-CTOya2j0.js";import"./YAxisTicks-DwKJHbJG.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dg7lW4dS.js";import"./ChartDataLabel-CkrtnQlH.js";import"./useOnClickInternal-dfdGu6zp.js";import"./react-content-loader.es-BJ2HWs2p.js";import"./useIsRTL-CWARZAlF.js";import"./useLongestYAxisLabel-DouXvG74.js";import"./ComposedChart-DZYiavD7.js";import"./Line-BB0lWSLG.js";import"./Scatter-CxBRZHkE.js";import"./index-4QPeCBem.js";import"./index-DMX5QRRW.js";import"./Placeholder-CD_K_--0.js";import"./index-Ch9hOpBJ.js";const E=`# @ui5/webcomponents-react-charts

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
