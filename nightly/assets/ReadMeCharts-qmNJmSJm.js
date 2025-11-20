import{r as i,j as t,T as l}from"./iframe-CJIrZBlB.js";import{useMDXComponents as p}from"./index-xKVU5ZCd.js";import{M as u,a as h,m as f}from"./blocks-C-1O0LRm.js";import"./Tag-BNlwFAFY.js";import"./index-DmJ7zXRW.js";import{F as d}from"./CommandsAndQueries-C3g74-RT.js";import"./copy-DR5Kv1Iv.js";import{T as b}from"./TableOfContent-Cp1YxGMV.js";import{C}from"./index-D-3AOewu.js";import{D}from"./BarChart.stories-dB7pRlye.js";import{D as y}from"./BulletChart.stories-jRReTz21.js";import{D as g}from"./ColumnChart.stories-DXIZ74mN.js";import{D as v}from"./ColumnChartWithTrend.stories-DwkmJfJN.js";import{D as x}from"./ComposedChart.stories-D09ZlgBM.js";import{D as j}from"./DonutChart.stories-DUt1nj9X.js";import{D as w}from"./LineChart.stories-CvPlphPR.js";import{D as R}from"./PieChart.stories-Phb14cbI.js";import{D as I}from"./RadarChart.stories-0wWuHmjs.js";import{D as S}from"./RadialChart.stories-zfsDPywS.js";import{D as T}from"./ScatterChart.stories-9bPYYAqL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BaxJEMV7.js";import"./sys-enter-2-COh9WNy8.js";import"./alert-BkaLAKBd.js";import"./index-BGOwz-CM.js";import"./index-YnpVhHMg.js";import"./index-CEkWgGTS.js";import"./Link-BElCP5h1.js";import"./index-BhZheF80.js";import"./index-DmwyQtvi.js";import"./index-BCwOIMZp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bf32rwnZ.js";import"./addCustomCSSWithScoping-CPo-hqqQ.js";import"./index-EdNUKN4_.js";import"./Carousel-BIbtcO3u.js";import"./ScrollEnablement-CKbJdcjA.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cb-GbYLc.js";import"./slim-arrow-left-DUoaE11e.js";import"./DemoProps-D_oajcMV.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DHoQtAVG.js";import"./ChartContainer-Bhiywa8y.js";import"./index-BPZe2Mw9.js";import"./useCancelAnimationFallback-DpwlURVa.js";import"./YAxisTicks-CvKbFae9.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B499U6X0.js";import"./ChartDataLabel-uv3G1QhM.js";import"./useOnClickInternal-DhSZFaNW.js";import"./react-content-loader.es-jqG3p96k.js";import"./useIsRTL-Bb4BnNpy.js";import"./useLongestYAxisLabel-C-SlIkhW.js";import"./ComposedChart-BBlpl0Rd.js";import"./Line-CovAbic7.js";import"./Scatter-Df3k7cCg.js";import"./index-DlRGV9_O.js";import"./index-CryxvfqC.js";import"./Placeholder-LNhxHP9f.js";import"./index-CHT-QlxX.js";const $=`# @ui5/webcomponents-react-charts

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
