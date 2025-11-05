import{r as i,j as t,T as l}from"./iframe-CRwp3Tpg.js";import{useMDXComponents as p}from"./index-COIro8D8.js";import{M as u,a as h,m as f}from"./blocks-C4HsTNIO.js";import"./Tag-tfloHdXZ.js";import"./index-B8mUtBGn.js";import{F as d}from"./CommandsAndQueries-BOt8E6ok.js";import"./copy-DIWKtK23.js";import{T as b}from"./TableOfContent-Bq-3BAJF.js";import{C}from"./index-B94p60kD.js";import{D}from"./BarChart.stories-Bd6zi7Zw.js";import{D as y}from"./BulletChart.stories-nYMA79EH.js";import{D as g}from"./ColumnChart.stories-DYhgkBsU.js";import{D as v}from"./ColumnChartWithTrend.stories-DKbfuG78.js";import{D as x}from"./ComposedChart.stories-iHraawtp.js";import{D as j}from"./DonutChart.stories-CGi6JeUG.js";import{D as w}from"./LineChart.stories-DG28A8Ic.js";import{D as R}from"./PieChart.stories-DENYZz21.js";import{D as I}from"./RadarChart.stories-U_-V-lYK.js";import{D as S}from"./RadialChart.stories-MFV1_AYh.js";import{D as T}from"./ScatterChart.stories-e27_O56u.js";import"./preload-helper-PPVm8Dsz.js";import"./information-MlnnkJju.js";import"./sys-enter-2-DNoGuffO.js";import"./alert-aDgjp5mZ.js";import"./index-DtgT2jRs.js";import"./index-B3NhI5Qb.js";import"./index-Cv51gsI_.js";import"./Link-Dtv1Hpbf.js";import"./index-DIEFvDQl.js";import"./index-DzYDiZvU.js";import"./index-DYA05DWY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0x12wWs.js";import"./addCustomCSSWithScoping-Dv4ZSX5E.js";import"./index-C0aL9woL.js";import"./Carousel-D-kuDRLL.js";import"./ScrollEnablement-CzlDnCBe.js";import"./animate-JylhYHXj.js";import"./AnimationMode-ZOkkk70g.js";import"./slim-arrow-left-CvF9a1n1.js";import"./DemoProps-C8kObRDp.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DWVGehE_.js";import"./ChartContainer-DFQ9YZHQ.js";import"./index-WpAbWfDk.js";import"./useCancelAnimationFallback-DYrcuav4.js";import"./YAxisTicks-CaGw9V5c.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-tj_gXCsS.js";import"./ChartDataLabel-CVrPsdIa.js";import"./useOnClickInternal-DPd6eTWI.js";import"./react-content-loader.es-Dno38o49.js";import"./useIsRTL-DAMtZyo0.js";import"./useLongestYAxisLabel-CE97yqMI.js";import"./ComposedChart-BNuo3Grh.js";import"./Line-D-Mg3Wlw.js";import"./Scatter-088TCfsp.js";import"./index-CExhQE7y.js";import"./index-VA43YTPH.js";import"./Placeholder-D3uHAj2g.js";import"./index-B78Tkgvh.js";const $=`# @ui5/webcomponents-react-charts

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
