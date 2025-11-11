import{r as i,j as t,T as l}from"./iframe-Di0CnA8S.js";import{useMDXComponents as p}from"./index-D1yNQJed.js";import{M as u,a as h,m as f}from"./blocks-CQfV0luP.js";import"./Tag-YM6QkIty.js";import"./index-Cv974V6E.js";import{F as d}from"./CommandsAndQueries-zSui8mFJ.js";import"./copy-BnyBSvmF.js";import{T as b}from"./TableOfContent-CaAMmFRO.js";import{C}from"./index-Catw7GMJ.js";import{D}from"./BarChart.stories-_uNjLWSH.js";import{D as y}from"./BulletChart.stories-BPqgjJzJ.js";import{D as g}from"./ColumnChart.stories-CQMp3c6s.js";import{D as v}from"./ColumnChartWithTrend.stories-n1gtRqQi.js";import{D as x}from"./ComposedChart.stories-Db9LKzgr.js";import{D as j}from"./DonutChart.stories-Bd2ep8o_.js";import{D as w}from"./LineChart.stories-DamTAh6j.js";import{D as R}from"./PieChart.stories-mQa-hL2W.js";import{D as I}from"./RadarChart.stories-JWQkPCQH.js";import{D as S}from"./RadialChart.stories-BLV_Z4fR.js";import{D as T}from"./ScatterChart.stories-DLZyFo3v.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DzISr5a2.js";import"./sys-enter-2-Vd3zyEtx.js";import"./alert-DaK0qpmR.js";import"./index-Bkm6KJyR.js";import"./index-FrAwh-uI.js";import"./index-CX_Pkcfg.js";import"./Link-WIuadCnC.js";import"./index-Bms_gXSs.js";import"./index-DEJJ6ZVN.js";import"./index-DChMCwxZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BL09SrHJ.js";import"./addCustomCSSWithScoping-D9ak18Ev.js";import"./index-C4vcrMlE.js";import"./Carousel-Ds9pZlx3.js";import"./ScrollEnablement-DhAJ5JnK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BNdfJ__N.js";import"./slim-arrow-left-gTkc1qnR.js";import"./DemoProps-DftF3aTB.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Bxh-banw.js";import"./ChartContainer-DhZVBVox.js";import"./index-BCKZ26pG.js";import"./useCancelAnimationFallback-Dz_AFlVG.js";import"./YAxisTicks-iDDqlONs.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BJH-BfnP.js";import"./ChartDataLabel-CMCt_362.js";import"./useOnClickInternal-b9Ecg-iC.js";import"./react-content-loader.es-CbGxbfpk.js";import"./useIsRTL-DMJx-Dqa.js";import"./useLongestYAxisLabel-BpVv3QmX.js";import"./ComposedChart-DXOdzP1d.js";import"./Line-B5QgWA5G.js";import"./Scatter-vgkPEI4W.js";import"./index-D6zfPnAO.js";import"./index-VmqeBkwe.js";import"./Placeholder-3rWBuVW1.js";import"./index-txAyNegv.js";const $=`# @ui5/webcomponents-react-charts

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
