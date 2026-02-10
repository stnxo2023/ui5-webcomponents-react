import{r as i,j as t,O as l}from"./iframe-OU-rKGVl.js";import{useMDXComponents as p}from"./index-BdFoQaN_.js";import{M as u,a as h,n as f}from"./blocks-90C6s9DB.js";import"./Tag-BGeGdyvC.js";import"./index-CvYMziHu.js";import{F as d}from"./CommandsAndQueries-1YsKNX6u.js";import"./copy-ukTvQIks.js";import{T as b}from"./TableOfContent-ChbIOij0.js";import{C}from"./index-ByNJoDG6.js";import{D}from"./BarChart.stories-BuhfMFWr.js";import{D as y}from"./BulletChart.stories-Bnqlf3-1.js";import{D as g}from"./ColumnChart.stories-CGkMahBy.js";import{D as v}from"./ColumnChartWithTrend.stories-kR2AIwei.js";import{D as x}from"./ComposedChart.stories-Vy7RwC4O.js";import{D as j}from"./DonutChart.stories-CU_NTFVd.js";import{D as w}from"./LineChart.stories-DE_3Cd-U.js";import{D as R}from"./PieChart.stories-C0SGy1E9.js";import{D as I}from"./RadarChart.stories-BWrvPN-o.js";import{D as S}from"./RadialChart.stories-COgzD2pe.js";import{D as $}from"./ScatterChart.stories-Ct29PCfm.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJNA9m3t.js";import"./sys-enter-2-Cr3cjNlh.js";import"./alert-Czqp44ew.js";import"./index-BlWEaWz4.js";import"./index-B5S-I-wQ.js";import"./index-BCzS-sMX.js";import"./Link-DUV5jdr_.js";import"./index-Cy3EQ66_.js";import"./index-M6X6hbjk.js";import"./index-CvP3_iIG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DeGn29mr.js";import"./addCustomCSSWithScoping-BqWgeVkc.js";import"./index-CvIaP9X3.js";import"./Carousel-BWoo6chg.js";import"./ScrollEnablement-C7rUKtrC.js";import"./animate-JylhYHXj.js";import"./AnimationMode-pJyXZB1E.js";import"./slim-arrow-left-D6lp9SaE.js";import"./DemoProps-BhZRJlKE.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cw9tLts5.js";import"./ChartContainer-CcuExJ1j.js";import"./index-Bv6B9-dk.js";import"./useCancelAnimationFallback-BuoI-nGP.js";import"./YAxisTicks-CkHHKOgK.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Ba9FDrYz.js";import"./ChartDataLabel-d09cGQQK.js";import"./useOnClickInternal-CkSVXv4Y.js";import"./react-content-loader.es-DWY8MpeC.js";import"./useIsRTL-BiiM2WaD.js";import"./useLongestYAxisLabel-DbdAMvyC.js";import"./ComposedChart-CsFqldwk.js";import"./Line-BODT2AEW.js";import"./Scatter-DMQqkboW.js";import"./index-DqUXB4dC.js";import"./index-OjFHR0HR.js";import"./Placeholder-iS_mKsZR.js";import"./index-BcpEtY5E.js";const E=`# @ui5/webcomponents-react-charts

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
