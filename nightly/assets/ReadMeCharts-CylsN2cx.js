import{q as i,j as t,Q as l}from"./iframe-1PJgHZTG.js";import{useMDXComponents as p}from"./index-DQ8p-OUL.js";import{M as u,a as h,n as f}from"./blocks-BWdY__MG.js";import"./Tag-B40KCJnD.js";import"./index-C8yXoAsR.js";import"./CommandsAndQueries-CQXQgoMe.js";import"./copy-DV2HGm9x.js";import{T as d}from"./TableOfContent-BXrMFYBh.js";import{F as b}from"./Footer-Dn-umaI8.js";import"./PageNotFound-BDu5VFGA.js";import{C}from"./index-vkl3uyAK.js";import{D}from"./BarChart.stories-GsDWTF8X.js";import{D as y}from"./BulletChart.stories-BCQxl6XD.js";import{D as g}from"./ColumnChart.stories-Di7-PU_n.js";import{D as v}from"./ColumnChartWithTrend.stories-CieIJyk7.js";import{D as x}from"./ComposedChart.stories-SbwMLUuV.js";import{D as j}from"./DonutChart.stories-B5tnypw0.js";import{D as w}from"./LineChart.stories-CI1hPyey.js";import{D as R}from"./PieChart.stories-78hSAWPY.js";import{D as I}from"./RadarChart.stories-C8R48wjk.js";import{D as S}from"./RadialChart.stories-Bt_-OALo.js";import{D as $}from"./ScatterChart.stories-Y3PJm5Vh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJc7dR8E.js";import"./sys-enter-2-C9tJiXDL.js";import"./alert-DYBuSdd9.js";import"./Link-7AxyQCs2.js";import"./index-BQUqcZEd.js";import"./index-i1xIbWKA.js";import"./index-D-m_lTJG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DnF5TvKk.js";import"./addCustomCSSWithScoping-NZMltsez.js";import"./index-BhuvwaVu.js";import"./index-BpyshfBP.js";import"./index-ppU6pF9w.js";import"./index-BIAg1r_N.js";import"./Illustrations-BZEV-hfk.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-Cwp4UycY.js";import"./ScrollEnablement-CaJ2EN4H.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DznF4BmG.js";import"./slim-arrow-left-jrzv_3vb.js";import"./DemoProps-BYPfxtgr.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-JO5HbhBs.js";import"./ChartContainer-D3MPZlQY.js";import"./index-DcZPtEFB.js";import"./useCancelAnimationFallback-BiIEMtnD.js";import"./YAxisTicks-DJMQFED_.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CPsxu4Mh.js";import"./ChartDataLabel-i8dyYL_K.js";import"./useOnClickInternal-eGV1zOML.js";import"./react-content-loader.es-D-3rbvc8.js";import"./useIsRTL-ACr-zRT8.js";import"./useLongestYAxisLabel-tAWdEGu-.js";import"./ComposedChart-DG0oe7TN.js";import"./Line-bg20rpV7.js";import"./Scatter-DRbVj7ob.js";import"./index-_IBpSTjF.js";import"./index-6LWKbTsB.js";import"./Placeholder-rKdedMK6.js";import"./index-Cnf-OFAn.js";const E=`# @ui5/webcomponents-react-charts

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
