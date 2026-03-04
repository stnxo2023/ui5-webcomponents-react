import{r as i,j as t,O as l}from"./iframe-BliOtBpf.js";import{useMDXComponents as p}from"./index-Cfm9mwpf.js";import{M as u,a as h,n as f}from"./blocks-DFxqqk7r.js";import"./Tag-slUCA2Mk.js";import"./index-B1gTXVZK.js";import{F as d}from"./CommandsAndQueries-BFQnO0Kc.js";import"./copy-Co-SMUUy.js";import{T as b}from"./TableOfContent-ByPZIom5.js";import{C}from"./index-DGCOK7iK.js";import{D}from"./BarChart.stories-DpfF_3hr.js";import{D as y}from"./BulletChart.stories-CFUoOINv.js";import{D as g}from"./ColumnChart.stories-D6PIyWIX.js";import{D as v}from"./ColumnChartWithTrend.stories-DGw6Ub7N.js";import{D as x}from"./ComposedChart.stories-7IUE_Myf.js";import{D as j}from"./DonutChart.stories-CUMz4bSJ.js";import{D as w}from"./LineChart.stories-CRH0WAvT.js";import{D as R}from"./PieChart.stories-DZNxqsmc.js";import{D as I}from"./RadarChart.stories-BntjmR0J.js";import{D as S}from"./RadialChart.stories-BtFEQCNK.js";import{D as $}from"./ScatterChart.stories-rBKx_xz-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-0hx7iK2K.js";import"./sys-enter-2-CKBXubjR.js";import"./alert-DPJIvRdz.js";import"./index-CljUsgff.js";import"./index-DtASDt-o.js";import"./index-BpaxVzpl.js";import"./Link-AWzdE9bP.js";import"./index-B5gV3DVy.js";import"./index-D6Ss-oF4.js";import"./index-riDZyvDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BuCRse4K.js";import"./addCustomCSSWithScoping-CtbnqYJf.js";import"./index-Dq7D7J3c.js";import"./Carousel-CJVdZ5p6.js";import"./ScrollEnablement-VwJkenso.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DJr-7amQ.js";import"./slim-arrow-left-nRJYtyXr.js";import"./DemoProps-B6H2M8vx.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CJKxx5qI.js";import"./ChartContainer-CSVqYs2z.js";import"./index-CRM_hxbu.js";import"./useCancelAnimationFallback-CIErBexT.js";import"./YAxisTicks-Cilhs4M3.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DGxpRlNI.js";import"./ChartDataLabel-DSaRgBGA.js";import"./useOnClickInternal-CWW5CQXh.js";import"./react-content-loader.es-CNZ0KzWK.js";import"./useIsRTL-nTnNpDkc.js";import"./useLongestYAxisLabel-BUlyXqlm.js";import"./ComposedChart-BGtbTdeH.js";import"./Line-DUePjO8C.js";import"./Scatter-4D-skcl8.js";import"./index-aTDyEK-V.js";import"./index-DLGvQ66Z.js";import"./Placeholder-D2x9r3RG.js";import"./index-Dg6Dmp5-.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
