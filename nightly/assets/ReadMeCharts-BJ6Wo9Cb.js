import{r as i,j as t,T as l}from"./iframe-D_CdPJGB.js";import{useMDXComponents as p}from"./index-CU-ptlAE.js";import{M as u,a as h,n as f}from"./blocks-CCtPO9cz.js";import"./Tag-Bp64ITEl.js";import"./index-DvHG4NxR.js";import{F as d}from"./CommandsAndQueries-mK8OCXMD.js";import"./copy-BADAjupU.js";import{T as b}from"./TableOfContent-TJ52XTPG.js";import{C}from"./index-BoGHncfu.js";import{D}from"./BarChart.stories-NtYVW8Tj.js";import{D as y}from"./BulletChart.stories-3SFWftp3.js";import{D as g}from"./ColumnChart.stories-C1E7iJtN.js";import{D as v}from"./ColumnChartWithTrend.stories-D4k3BZqB.js";import{D as x}from"./ComposedChart.stories-D2TkDN6B.js";import{D as j}from"./DonutChart.stories-Br-IJoix.js";import{D as w}from"./LineChart.stories-BWVuqPuR.js";import{D as R}from"./PieChart.stories-CqFSoJqW.js";import{D as I}from"./RadarChart.stories-Wl0Ujpy4.js";import{D as S}from"./RadialChart.stories-DvC8tkZF.js";import{D as T}from"./ScatterChart.stories-Cc4y-Vhc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D72qH7xY.js";import"./sys-enter-2-hXCOpqjq.js";import"./alert-DtWkY9xa.js";import"./index-CZ_x4nC8.js";import"./index-px1zqH5W.js";import"./index-BjO8dbVD.js";import"./Link-D2G2Fur_.js";import"./index-rQn5W4JD.js";import"./index-BtAl8RaU.js";import"./index-Bp0lp_Bf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CAznTGJj.js";import"./addCustomCSSWithScoping-CCFJUFLD.js";import"./index-C4kKrQ_A.js";import"./Carousel-DLNbA5si.js";import"./ScrollEnablement-DdqyZen4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BsKkPbkv.js";import"./slim-arrow-left-CjMFx4r9.js";import"./DemoProps-CZ_8mEGP.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DjgvhuFa.js";import"./ChartContainer-CveQBq50.js";import"./index-DcE2qBtK.js";import"./useCancelAnimationFallback-CQWYlhER.js";import"./YAxisTicks-RwETqs7c.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DODMQ-J2.js";import"./ChartDataLabel-CY8yUSxX.js";import"./useOnClickInternal-DPr4rIUO.js";import"./react-content-loader.es-DzL-slAd.js";import"./useIsRTL-D_nqdA78.js";import"./useLongestYAxisLabel-DEpF0e4i.js";import"./ComposedChart-BfUv5YPw.js";import"./Line-D710axzh.js";import"./Scatter-CzPSil1r.js";import"./index-CjuTshnS.js";import"./index-Ch3YL5pJ.js";import"./Placeholder-BJG90X5t.js";import"./index-CweXMTl8.js";const $=`# @ui5/webcomponents-react-charts

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
