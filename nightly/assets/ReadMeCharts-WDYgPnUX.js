import{r as i,j as t,O as l}from"./iframe-D2NU56Rf.js";import{useMDXComponents as p}from"./index-PnjEbenM.js";import{M as u,a as h,n as f}from"./blocks-DZ0UXwr1.js";import"./Tag-gDuKwEK0.js";import"./index-BUSq7sbq.js";import{F as d}from"./CommandsAndQueries-29xiV4Jg.js";import"./copy-2VqtSmY4.js";import{T as b}from"./TableOfContent-CihQPfob.js";import{C}from"./index-DLoS9SBQ.js";import{D}from"./BarChart.stories-DiiwlPOd.js";import{D as y}from"./BulletChart.stories-M5_kiU_R.js";import{D as g}from"./ColumnChart.stories-CACWxD9J.js";import{D as v}from"./ColumnChartWithTrend.stories-Di6UgNt3.js";import{D as x}from"./ComposedChart.stories-2jx4EXzh.js";import{D as j}from"./DonutChart.stories-Bcz9XEnN.js";import{D as w}from"./LineChart.stories-B8NUNYn1.js";import{D as R}from"./PieChart.stories-DmNhVX3y.js";import{D as I}from"./RadarChart.stories-6eCtSSlF.js";import{D as S}from"./RadialChart.stories-CXTb7Oes.js";import{D as $}from"./ScatterChart.stories-BJlcfCjP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0vbTy2i.js";import"./sys-enter-2-VpvNFzz0.js";import"./alert-BQIN7sJt.js";import"./index-B7GdD8iT.js";import"./index-B9i47eba.js";import"./index-Un1NcZ-Y.js";import"./Link-O92RF9SA.js";import"./index-Dje3V7QZ.js";import"./index-4WW0oGrP.js";import"./index-CgZch3zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHOcvBV5.js";import"./addCustomCSSWithScoping-CUv8r2Rw.js";import"./index-jUVFgVlz.js";import"./Carousel-CRq0fIBf.js";import"./ScrollEnablement-B2R8AjnU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CRgv0LEW.js";import"./slim-arrow-left-DbPu26yZ.js";import"./DemoProps-BE88PHko.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BSHxD-9P.js";import"./ChartContainer-jl81eVzP.js";import"./index-CoXQm9zc.js";import"./useCancelAnimationFallback-CS8ok251.js";import"./YAxisTicks-BGU5BMYx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BwwC8oVB.js";import"./ChartDataLabel-CED34eYI.js";import"./useOnClickInternal-CHCEDgfz.js";import"./react-content-loader.es-Bu747-ib.js";import"./useIsRTL-BmdyIu_o.js";import"./useLongestYAxisLabel-B4sSe4NR.js";import"./ComposedChart-BHj1FuiD.js";import"./Line-CiiaW5X5.js";import"./Scatter-DZ8tMlVg.js";import"./index-Bno5H4Vj.js";import"./index-CBd62X_Q.js";import"./Placeholder-Cb7kSzPk.js";import"./index-BCP4do_t.js";const E=`# @ui5/webcomponents-react-charts

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
