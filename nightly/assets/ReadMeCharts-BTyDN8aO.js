import{r as i,j as t,O as l}from"./iframe-D2RmpAtO.js";import{useMDXComponents as p}from"./index-DiCnj7u5.js";import{M as u,a as h,n as f}from"./blocks-B4Ev-YXh.js";import"./Tag-BWvTCWNx.js";import"./index-chYDxilS.js";import{F as d}from"./CommandsAndQueries-DvQ8BP-Z.js";import"./copy-BW6gA-qB.js";import{T as b}from"./TableOfContent-wa27kzYJ.js";import{C}from"./index-r4xTmx-g.js";import{D}from"./BarChart.stories-UivhBjh7.js";import{D as y}from"./BulletChart.stories-BEdDXEWt.js";import{D as g}from"./ColumnChart.stories-Bv2qOwOl.js";import{D as v}from"./ColumnChartWithTrend.stories-DG_Mj9La.js";import{D as x}from"./ComposedChart.stories-B7DBEUgA.js";import{D as j}from"./DonutChart.stories-BHghHnLp.js";import{D as w}from"./LineChart.stories-DQecDwMP.js";import{D as R}from"./PieChart.stories-CO9lSA7g.js";import{D as I}from"./RadarChart.stories-B9AnYGdD.js";import{D as S}from"./RadialChart.stories-BQwk45KX.js";import{D as $}from"./ScatterChart.stories-D-aZjIOd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DyTRt78C.js";import"./sys-enter-2-BwNIaTDW.js";import"./alert-DiSc05uc.js";import"./index-BmyeAcwI.js";import"./index-D_sGGZyZ.js";import"./index-i343fVly.js";import"./Link-BzydKqDb.js";import"./index-Cm3TMOjS.js";import"./index-BeHBKa6s.js";import"./index-B2C__dDn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-fsmSjvJs.js";import"./addCustomCSSWithScoping-BvD5X_dz.js";import"./index-BieATUAG.js";import"./Carousel-ulShcN7O.js";import"./ScrollEnablement-Cm66ONH8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DpVEilkb.js";import"./slim-arrow-left-DTsLDLL8.js";import"./DemoProps-BKm0hru2.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-oJTSaO7J.js";import"./ChartContainer-Cer22AHu.js";import"./index-C_50PDoe.js";import"./useCancelAnimationFallback-heRdOGN7.js";import"./YAxisTicks-DC-dF0UB.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-kP0fbNW2.js";import"./ChartDataLabel-DpuURRpq.js";import"./useOnClickInternal-C0OpSVm6.js";import"./react-content-loader.es-B6ITmP23.js";import"./useIsRTL-y3GnqRIn.js";import"./useLongestYAxisLabel-s5rAc4fB.js";import"./ComposedChart-46iZhlH2.js";import"./Line-DjUkxVav.js";import"./Scatter-Cz3YdBu5.js";import"./index-YxO8-xm-.js";import"./index-xMwJX_fh.js";import"./Placeholder-CisYg5dw.js";import"./index-BMaD13BP.js";const E=`# @ui5/webcomponents-react-charts

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
