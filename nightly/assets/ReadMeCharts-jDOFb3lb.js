import{r as i,j as t,O as l}from"./iframe-Bf1hlxgS.js";import{useMDXComponents as p}from"./index-B002OMKA.js";import{M as u,a as h,n as f}from"./blocks-CF_xVWI_.js";import"./Tag-BHAjLoAY.js";import"./index-p22CRHMo.js";import{F as d}from"./CommandsAndQueries-BEe5YBSl.js";import"./copy-D5BVEzvy.js";import{T as b}from"./TableOfContent-nM4bwTjk.js";import{C}from"./index-DGaxOMRK.js";import{D}from"./BarChart.stories-CjeZbSIn.js";import{D as y}from"./BulletChart.stories-C_W8I4NA.js";import{D as g}from"./ColumnChart.stories-C4lKovWR.js";import{D as v}from"./ColumnChartWithTrend.stories-BWc2LSuY.js";import{D as x}from"./ComposedChart.stories-Ce3AqMh5.js";import{D as j}from"./DonutChart.stories-6wIJ-u5e.js";import{D as w}from"./LineChart.stories-D4xu4jlD.js";import{D as R}from"./PieChart.stories-D4Xs_SVc.js";import{D as I}from"./RadarChart.stories-CSVo2-Uo.js";import{D as S}from"./RadialChart.stories-Cv84RZJg.js";import{D as $}from"./ScatterChart.stories-DFK5caJD.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BXU6Hxbd.js";import"./sys-enter-2-BvfgNwob.js";import"./alert-B3TgQjln.js";import"./index-D-S325RU.js";import"./index-BciJGkl8.js";import"./index-hDeN6gmj.js";import"./Link-Bn0GO4LF.js";import"./index-BqDvsFmr.js";import"./index-BjKEmns7.js";import"./index-DhV0sN_I.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D7KxqJSV.js";import"./addCustomCSSWithScoping-BIqc26fM.js";import"./index-2lJhwVzj.js";import"./Carousel-DxPQfuOS.js";import"./ScrollEnablement-Dfx6-CYw.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C01qMv_q.js";import"./slim-arrow-left-OaY2VMx2.js";import"./DemoProps-lFxogGOt.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B2oAhuId.js";import"./ChartContainer-Cmalcr40.js";import"./index-ChBbQCuo.js";import"./useCancelAnimationFallback-B37hmESg.js";import"./YAxisTicks-2JFQ3Ffj.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BdxCRNXB.js";import"./ChartDataLabel-lwr8sK1Q.js";import"./useOnClickInternal-DPuzuk7g.js";import"./react-content-loader.es-hZCl54SH.js";import"./useIsRTL-D-Rd56YE.js";import"./useLongestYAxisLabel-DJfug-6Q.js";import"./ComposedChart-CRsllLvo.js";import"./Line-CVlLT3el.js";import"./Scatter-Dep9M9zU.js";import"./index-BmpE8iTW.js";import"./index-BaNPugZD.js";import"./Placeholder-CKpYMwlQ.js";import"./index-Cw4P4rjm.js";const E=`# @ui5/webcomponents-react-charts

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
