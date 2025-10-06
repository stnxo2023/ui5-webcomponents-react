import{r as i,j as t,T as l}from"./iframe-C3aU9yO2.js";import{useMDXComponents as p}from"./index-DcLDqK7w.js";import{M as u,a as h,k as f}from"./blocks-B9oc031V.js";import"./Tag-CNw53_eT.js";import"./index-i1N6ua_w.js";import{F as d}from"./CommandsAndQueries-D0nTXU9T.js";import"./copy-D_R4P06r.js";import{T as b}from"./TableOfContent-Bu4A0xbb.js";import{C}from"./index-elVCTo5Z.js";import{D}from"./BarChart.stories-Dt17gEIm.js";import{D as y}from"./BulletChart.stories-DjEhptZX.js";import{D as g}from"./ColumnChart.stories-B5rrHGR2.js";import{D as v}from"./ColumnChartWithTrend.stories-DyF1E0QD.js";import{D as x}from"./ComposedChart.stories-LKee7Pxn.js";import{D as j}from"./DonutChart.stories-Bli47oyl.js";import{D as w}from"./LineChart.stories-fI9LA2JA.js";import{D as R}from"./PieChart.stories-BGLWGzzi.js";import{D as I}from"./RadarChart.stories-eCNfcuvy.js";import{D as S}from"./RadialChart.stories-tlZEoocW.js";import{D as T}from"./ScatterChart.stories-DWleltqR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-Ns6m0d.js";import"./sys-enter-2-D_Kaw-gu.js";import"./alert-7z2pNDRB.js";import"./index-CfpqN5Id.js";import"./index-g0B9jrXN.js";import"./index-DKI76k_B.js";import"./Link-BnEnKAv3.js";import"./index-DBwKQ69N.js";import"./index-D8QgyDbC.js";import"./index-CPcH_eI_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPfGSaYG.js";import"./addCustomCSSWithScoping-C73QrPVQ.js";import"./index-BU0JfJz1.js";import"./Carousel-C573SEud.js";import"./ScrollEnablement-B-ve8lNO.js";import"./animate-JylhYHXj.js";import"./AnimationMode-o_7_NMky.js";import"./slim-arrow-left-MrV-4286.js";import"./DemoProps-Plp2Uyg1.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DIh_lzPK.js";import"./ChartContainer-Dky2DQ4V.js";import"./index-HMHM8G5Q.js";import"./useCancelAnimationFallback-NXzl5O-C.js";import"./YAxisTicks-OOVqRxwz.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CtV5Hje8.js";import"./ChartDataLabel-Dzq0dr2V.js";import"./useOnClickInternal-CnWZPt-h.js";import"./react-content-loader.es-BvloZU49.js";import"./useIsRTL-CyLBUYXb.js";import"./useLongestYAxisLabel-B5pmAcZ-.js";import"./ComposedChart-CmvQzmiO.js";import"./Line-0gFSjCo2.js";import"./Scatter-CS00jjy2.js";import"./index-CVqixkvA.js";import"./index-CTg0KexZ.js";import"./Placeholder-Bhpt98Tg.js";import"./index-DYfyKcGd.js";const $=`# @ui5/webcomponents-react-charts

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
