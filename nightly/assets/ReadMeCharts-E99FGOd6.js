import{r as i,j as t,T as l}from"./iframe-DE39xjY3.js";import{useMDXComponents as p}from"./index-B1qSHwoi.js";import{M as u,a as h,m as f}from"./blocks-Cj7tOVqz.js";import"./Tag-BcxJDVC2.js";import"./index-C8AzPoWi.js";import{F as d}from"./CommandsAndQueries-wC1q0WhV.js";import"./copy-SEjk-khs.js";import{T as b}from"./TableOfContent-DgJFK8la.js";import{C}from"./index-VscLtefH.js";import{D}from"./BarChart.stories-Ctm1x4us.js";import{D as y}from"./BulletChart.stories-QUTaoSsF.js";import{D as g}from"./ColumnChart.stories-Bf52WnEB.js";import{D as v}from"./ColumnChartWithTrend.stories-DiPPjXgE.js";import{D as x}from"./ComposedChart.stories-Cx1RbIxs.js";import{D as j}from"./DonutChart.stories-rrva-jKP.js";import{D as w}from"./LineChart.stories-DGoEilMK.js";import{D as R}from"./PieChart.stories-D5zT5w2M.js";import{D as I}from"./RadarChart.stories-DIggFETf.js";import{D as S}from"./RadialChart.stories-Cc3fmexn.js";import{D as T}from"./ScatterChart.stories-BYBpvqqd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D52A35LG.js";import"./sys-enter-2-7R5MTao8.js";import"./alert-jxZm3lXE.js";import"./index-Dsw7NAug.js";import"./index-BNYAB6MW.js";import"./index-BytuhZWp.js";import"./Link-hO4SGyLs.js";import"./index-HOUf-EPf.js";import"./index-Di0pge-x.js";import"./index-Crm_KYfs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-k5eDoZ.js";import"./addCustomCSSWithScoping-DCdxMV4u.js";import"./index-BUS86rTR.js";import"./Carousel-Ta7E6zhB.js";import"./ScrollEnablement-hjYz1q63.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BG3LJud3.js";import"./slim-arrow-left-mEN7fQty.js";import"./DemoProps-SZzMX0YG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-uQBPIN_V.js";import"./ChartContainer-BG7elXvx.js";import"./index-BcBVfEn1.js";import"./useCancelAnimationFallback-Dzc362i1.js";import"./YAxisTicks-MAPKnon5.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DzrgTDXX.js";import"./ChartDataLabel-HKErCOg3.js";import"./useOnClickInternal-DwaSWI38.js";import"./react-content-loader.es-Cx318dxn.js";import"./useIsRTL-rImD7_or.js";import"./useLongestYAxisLabel-CD8G1RT8.js";import"./ComposedChart-Cn7V5thX.js";import"./Line-CpazwSJ_.js";import"./Scatter-NkW1aBvn.js";import"./index-CBShIpcL.js";import"./index-CIo3Hpjx.js";import"./Placeholder-CA43uFeH.js";import"./index-xPMgGXCQ.js";const $=`# @ui5/webcomponents-react-charts

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
