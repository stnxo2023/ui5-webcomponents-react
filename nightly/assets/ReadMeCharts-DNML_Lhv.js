import{r as i,j as t,T as l}from"./iframe-eEgnsybz.js";import{useMDXComponents as p}from"./index-KUh3EncO.js";import{M as u,a as h,n as f}from"./blocks-C6o1VobD.js";import"./Tag-CyCgeEFX.js";import"./index-DlBhGBWU.js";import{F as d}from"./CommandsAndQueries-Bkg2fbFD.js";import"./copy-7FG8PsWo.js";import{T as b}from"./TableOfContent-DXjRwDfa.js";import{C}from"./index-FZhZLjiy.js";import{D}from"./BarChart.stories-CK8zlkmr.js";import{D as y}from"./BulletChart.stories-Utwa4wSg.js";import{D as g}from"./ColumnChart.stories-DeWfLKgg.js";import{D as v}from"./ColumnChartWithTrend.stories-BFUTfbOG.js";import{D as x}from"./ComposedChart.stories-B3lJBSrY.js";import{D as j}from"./DonutChart.stories-CriR8_Ub.js";import{D as w}from"./LineChart.stories-jgLil33m.js";import{D as R}from"./PieChart.stories-BJ-zo3WO.js";import{D as I}from"./RadarChart.stories-BzEN9H3r.js";import{D as S}from"./RadialChart.stories-BFmjKrWX.js";import{D as T}from"./ScatterChart.stories-C3vPq4__.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CKacNM7A.js";import"./sys-enter-2-D0fhmdQp.js";import"./alert-CxkpN3m7.js";import"./index-D9oALoTs.js";import"./index-BwSVcTHk.js";import"./index-0PjuM5S8.js";import"./Link-BuGrrtP2.js";import"./index-yhFX9aug.js";import"./index-Dc3QGU-g.js";import"./index-CGhTEkOT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CH2VPx4y.js";import"./addCustomCSSWithScoping-DKRk5X62.js";import"./index-Pa5s-fex.js";import"./Carousel-BAIDfsXj.js";import"./ScrollEnablement-Dj9e3xCo.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CfhF5-KT.js";import"./slim-arrow-left-DqBn4oBs.js";import"./DemoProps-HUCXZjJH.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DYWWoRVV.js";import"./ChartContainer-CFWft_2b.js";import"./index-DYImmnpQ.js";import"./useCancelAnimationFallback-DvtIIwyC.js";import"./YAxisTicks-BGG0zA7u.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bqy73ztF.js";import"./ChartDataLabel-FQ9oe8fa.js";import"./useOnClickInternal-CbSf3Ff8.js";import"./react-content-loader.es-BCSe_iXF.js";import"./useIsRTL-Dm7lVWDa.js";import"./useLongestYAxisLabel-COAXO-_p.js";import"./ComposedChart-BytXlJrd.js";import"./Line-D6EpngAK.js";import"./Scatter-J8NoL2Pj.js";import"./index-DzurESaJ.js";import"./index-BjQ2nkJE.js";import"./Placeholder-Hp75Nyue.js";import"./index-CWDTn_1m.js";const $=`# @ui5/webcomponents-react-charts

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
