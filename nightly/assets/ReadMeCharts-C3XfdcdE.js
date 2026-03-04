import{r as i,j as t,O as l}from"./iframe-BCeV4J61.js";import{useMDXComponents as p}from"./index-DQSXUrY-.js";import{M as u,a as h,n as f}from"./blocks-BaqdfAa9.js";import"./Tag-Bzl_4yyv.js";import"./index-DSCCKcvn.js";import{F as d}from"./CommandsAndQueries-BMt6Du51.js";import"./copy-BLLS_Koh.js";import{T as b}from"./TableOfContent-BjaZyA9z.js";import{C}from"./index-BWlV4HXp.js";import{D}from"./BarChart.stories-BCEgtqJl.js";import{D as y}from"./BulletChart.stories-bFDkcNI3.js";import{D as g}from"./ColumnChart.stories-Dc4QdCW7.js";import{D as v}from"./ColumnChartWithTrend.stories-DUyhEYNP.js";import{D as x}from"./ComposedChart.stories-C2LcAcAp.js";import{D as j}from"./DonutChart.stories-RnCazbIf.js";import{D as w}from"./LineChart.stories-YpMrjAWn.js";import{D as R}from"./PieChart.stories-Xx2P5nra.js";import{D as I}from"./RadarChart.stories-CNG1xKzI.js";import{D as S}from"./RadialChart.stories-CdKYW5CO.js";import{D as $}from"./ScatterChart.stories-BySc23-t.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DsxmrLjJ.js";import"./sys-enter-2-DTJ11PLs.js";import"./alert-BPfUUxXP.js";import"./index-D6AOhQcP.js";import"./index-BqI0DRaf.js";import"./index-CTun36xm.js";import"./Link-C83i_H7y.js";import"./index-BaMmnI_0.js";import"./index-Dd7n1xMP.js";import"./index-C_9CrSf5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xuzVGY3l.js";import"./addCustomCSSWithScoping-Bz6BhAjV.js";import"./index-MH0uXub1.js";import"./Carousel-Cg7Jpunw.js";import"./ScrollEnablement-D6HdbXM3.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Bi5nNLpw.js";import"./slim-arrow-left-z1F9LaUN.js";import"./DemoProps-Dsk8zMDg.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-ChkQ24JP.js";import"./ChartContainer-NJxsD8OK.js";import"./index-J52IetZK.js";import"./useCancelAnimationFallback-Cg5FBMDz.js";import"./YAxisTicks-BMEkb1vC.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-rXLuh2eC.js";import"./ChartDataLabel-BSUqkkoS.js";import"./useOnClickInternal-278__NSN.js";import"./react-content-loader.es-CcHR0iQ0.js";import"./useIsRTL-BbNqKuvZ.js";import"./useLongestYAxisLabel-2UbqtNH_.js";import"./ComposedChart-1A8Zy77i.js";import"./Line-DfQEerfQ.js";import"./Scatter-CHmZESs5.js";import"./index-Ya8DVo2Z.js";import"./index-drPiq68R.js";import"./Placeholder-zWwzpj-m.js";import"./index-Szd5DjwD.js";const E=`# @ui5/webcomponents-react-charts

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
