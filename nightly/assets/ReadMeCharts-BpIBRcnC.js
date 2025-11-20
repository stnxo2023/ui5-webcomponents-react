import{r as i,j as t,T as l}from"./iframe-HT1spLTi.js";import{useMDXComponents as p}from"./index-DBCrLany.js";import{M as u,a as h,m as f}from"./blocks-BHdc3k3Z.js";import"./Tag-D0fQ6cD9.js";import"./index-QNmDooaX.js";import{F as d}from"./CommandsAndQueries-BbzR7uR6.js";import"./copy-CRfxWZGx.js";import{T as b}from"./TableOfContent-BK7avpMU.js";import{C}from"./index-Bnla2uih.js";import{D}from"./BarChart.stories-Ci9dsEWX.js";import{D as y}from"./BulletChart.stories-BSAmS5Jk.js";import{D as g}from"./ColumnChart.stories-vw6UDX4z.js";import{D as v}from"./ColumnChartWithTrend.stories-BSXqzyQY.js";import{D as x}from"./ComposedChart.stories-BcgbQxCX.js";import{D as j}from"./DonutChart.stories-B8hV0iri.js";import{D as w}from"./LineChart.stories-BR1Cc0GB.js";import{D as R}from"./PieChart.stories-Iu7QyxGj.js";import{D as I}from"./RadarChart.stories-C2_K5W_h.js";import{D as S}from"./RadialChart.stories-F420V2S5.js";import{D as T}from"./ScatterChart.stories-CM7hWANc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BYNrnqUc.js";import"./sys-enter-2-D7etVCyM.js";import"./alert-D38Y2b3l.js";import"./index-BZj-Nofr.js";import"./index-gqzRfHPw.js";import"./index-CWHtqZOi.js";import"./Link-dxeMesAc.js";import"./index-ILnTo0yK.js";import"./index-CNJfOrlA.js";import"./index-CV40RAYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tr8O9Dg_.js";import"./addCustomCSSWithScoping-DOmP-F21.js";import"./index-BXPXbeEl.js";import"./Carousel-RdLtSn8d.js";import"./ScrollEnablement-COl_OArp.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CuGAHrDc.js";import"./slim-arrow-left-DodaR5O4.js";import"./DemoProps-6f4WUAgi.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-ZHx9wbTO.js";import"./ChartContainer-B9HhJ-Hi.js";import"./index-DfU0YBTN.js";import"./useCancelAnimationFallback-CjB1e5BN.js";import"./YAxisTicks-D8Tn6K4p.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DYrH1xsk.js";import"./ChartDataLabel-DStxHJa9.js";import"./useOnClickInternal-7J7L1Ku4.js";import"./react-content-loader.es-C_zquJGY.js";import"./useIsRTL-lcSwUg68.js";import"./useLongestYAxisLabel-CdgOdDRW.js";import"./ComposedChart-DoKYgKZ_.js";import"./Line-DdFC-6yD.js";import"./Scatter-2W_IRCqi.js";import"./index-9tMooUar.js";import"./index-Nmy8Zfma.js";import"./Placeholder-CrE5_r7P.js";import"./index-DmG2BK8A.js";const $=`# @ui5/webcomponents-react-charts

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
