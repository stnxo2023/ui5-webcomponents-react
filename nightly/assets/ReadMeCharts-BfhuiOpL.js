import{n as i,j as t,N as l}from"./iframe-Ra0xSmd4.js";import{useMDXComponents as p}from"./index-B1uewCO1.js";import{M as u,a as h,n as f}from"./blocks-B8uzJZ3S.js";import"./Tag-vCzc8lpN.js";import"./index-DhDYAwwg.js";import"./CommandsAndQueries-BEtDWerI.js";import"./copy-Cehqzola.js";import{T as d}from"./TableOfContent-BgPrQZrb.js";import{F as b}from"./Footer-BXZI9V38.js";import"./PageNotFound-DAzm2SbT.js";import{C}from"./index-Bis-8QWa.js";import{D}from"./BarChart.stories-Bjjwoa0m.js";import{D as y}from"./BulletChart.stories-BL-qGX5D.js";import{D as g}from"./ColumnChart.stories-YUmOiMBQ.js";import{D as v}from"./ColumnChartWithTrend.stories-CSAnQMAL.js";import{D as x}from"./ComposedChart.stories-Cfp7LHbk.js";import{D as j}from"./DonutChart.stories-CqwdjJ9u.js";import{D as w}from"./LineChart.stories-CF-cDcBi.js";import{D as R}from"./PieChart.stories-CA4ubfX-.js";import{D as I}from"./RadarChart.stories-CzAnXT7C.js";import{D as S}from"./RadialChart.stories-DFT595xB.js";import{D as $}from"./ScatterChart.stories-dKuRttlx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-hzJ5lLQH.js";import"./sys-enter-2-weVfOb1a.js";import"./alert-BkoFHfp8.js";import"./Link-Cw9gqE6M.js";import"./index-UbhsERGe.js";import"./index-DxchSxRT.js";import"./index-BhvLG_bo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cr-PyOpa.js";import"./addCustomCSSWithScoping-CcLMh_2y.js";import"./index-CCqLDoAJ.js";import"./index-CiJZaHkZ.js";import"./index-Dh9i0xFK.js";import"./index-BHry3UrI.js";import"./Illustrations-DuEXDQCv.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BybG2kqV.js";import"./ScrollEnablement-Dp-oqGSv.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D8HfHO7a.js";import"./slim-arrow-left-DF_vdjLh.js";import"./DemoProps-CYGG3Jvl.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-Bqfcru2D.js";import"./ChartContainer-tZsTHfSj.js";import"./index-C7nsWfZ0.js";import"./useCancelAnimationFallback-COM2cp7o.js";import"./YAxisTicks-jWE1zuFR.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bl8cabAX.js";import"./ChartDataLabel-Bk-tKtg4.js";import"./useOnClickInternal-CtUpzxp8.js";import"./react-content-loader.es-Dl3yTDXT.js";import"./useIsRTL-DQnXSe3U.js";import"./useLongestYAxisLabel-BoK62IqR.js";import"./ComposedChart-OTHQKBpa.js";import"./Line-R3__-c64.js";import"./Scatter-BaQNyRrW.js";import"./index-DjuyrsCo.js";import"./index-uWxcxpxI.js";import"./Placeholder-Cq5Qn4Yd.js";import"./index-BenDwFg1.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),m=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const s=e.current;return s&&o.length&&(r.current=setInterval(()=>{a.current++,s.navigateTo(a.current%o.length)},5e3)),()=>{m()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{m()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function _t(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{_t as default};
