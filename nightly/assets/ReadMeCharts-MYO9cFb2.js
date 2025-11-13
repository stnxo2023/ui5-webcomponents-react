import{r as i,j as t,T as l}from"./iframe-DtedCjfy.js";import{useMDXComponents as p}from"./index-CHHTCtpJ.js";import{M as u,a as h,m as f}from"./blocks-B76JpcnK.js";import"./Tag-UovGhxml.js";import"./index-DKt9EK6E.js";import{F as d}from"./CommandsAndQueries-CefMw8Tu.js";import"./copy-YvtV-MwK.js";import{T as b}from"./TableOfContent-CgJSyrjN.js";import{C}from"./index-MpTWrOt_.js";import{D}from"./BarChart.stories-BtBmeb07.js";import{D as y}from"./BulletChart.stories-85J4yJ4Z.js";import{D as g}from"./ColumnChart.stories-fP62npGK.js";import{D as v}from"./ColumnChartWithTrend.stories-MbIQRIhN.js";import{D as x}from"./ComposedChart.stories-CnjBIkew.js";import{D as j}from"./DonutChart.stories-UzItPKXa.js";import{D as w}from"./LineChart.stories-CsAHRozb.js";import{D as R}from"./PieChart.stories-CzjY_-I7.js";import{D as I}from"./RadarChart.stories-Boiaty0k.js";import{D as S}from"./RadialChart.stories-uD7XLhVf.js";import{D as T}from"./ScatterChart.stories-BycVxJHv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dgg1zzf6.js";import"./sys-enter-2-BS_wAjUh.js";import"./alert-DCJXRL-H.js";import"./index-DX3eFopX.js";import"./index-DeLaWQId.js";import"./index-B_rkL0I7.js";import"./Link-DZXvuASQ.js";import"./index-CYjF7K0n.js";import"./index-BwT8h001.js";import"./index-CSzpUMpn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDJ7Ajcv.js";import"./addCustomCSSWithScoping-ClguXaul.js";import"./index-Np4eK1ew.js";import"./Carousel-CM7NO1uh.js";import"./ScrollEnablement-CJ3-LAJa.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BXKBXnpc.js";import"./slim-arrow-left-DVFqC7qw.js";import"./DemoProps-CfeanwSF.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-OMkmVIQr.js";import"./ChartContainer-CdYJC03W.js";import"./index-ymNZsoic.js";import"./useCancelAnimationFallback-CKYgi8fl.js";import"./YAxisTicks-DFFunUfK.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bdl0zNIG.js";import"./ChartDataLabel-DTXBEghb.js";import"./useOnClickInternal-q3Krh29u.js";import"./react-content-loader.es-CuIMsZuh.js";import"./useIsRTL-BGj6VAfy.js";import"./useLongestYAxisLabel-DmqwOuIW.js";import"./ComposedChart-BGoeJidj.js";import"./Line-Bx2OLkF7.js";import"./Scatter-DsI3vUao.js";import"./index-CRMgOjpD.js";import"./index-BOPUAJ6K.js";import"./Placeholder-B87LuAhb.js";import"./index-75YMIfxg.js";const $=`# @ui5/webcomponents-react-charts

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
