import{j as e}from"./iframe-DZQsFHyF.js";import{useMDXComponents as a}from"./index-FeafUf3S.js";import{M as d,C as n}from"./blocks-CCR5dlte.js";import"./Tag-njT3oUWj.js";import"./index-FZQI4JeT.js";import{C as m}from"./ControlsWithNote-DndMN2PG.js";import{D as c}from"./DocsHeader-BYmBOG9m.js";import{F as h}from"./Footer-1JL6Y-Rs.js";import"./CommandsAndQueries-Q7QL049M.js";import"./PageNotFound-CAJJq4gT.js";import{M as p,a as l}from"./LegendConfig-CqXLiGhX.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CDDsTwPt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Byx_k42O.js";import"./sys-enter-2-CNKaU8fp.js";import"./alert-HiA3dax7.js";import"./index-JUdhH85j.js";import"./index-DGD79lBE.js";import"./Link-Dy7YK0fU.js";import"./copy-BrbFvn-Q.js";import"./copy-B0ak1fDk.js";import"./GitHub-Mark-DMTHjS90.js";import"./TableOfContent-B8ysGL0D.js";import"./index-CHkzxhcQ.js";import"./index-CeHR91It.js";import"./index-CmNuhxCj.js";import"./index-C2RcbU_s.js";import"./index-QENyXe96.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsnnpcUC.js";import"./addCustomCSSWithScoping-BZT-QmME.js";import"./Illustrations-BlaFZAWE.js";import"./i18n-defaults-CFWtSmu6.js";import"./DemoProps-SNc8xujs.js";import"./index-CPErxcS-.js";import"./ThemingParameters-BvhwmbYD.js";import"./YAxisTicks-DKKf50sZ.js";import"./ChartContainer-B0Hu_5pI.js";import"./index-YUMYtLpT.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DIoX1dqD.js";import"./staticProps-C-iTVrM-.js";import"./ChartDataLabel-BYCOeHds.js";import"./useLongestYAxisLabel-7STPW9g-.js";import"./react-content-loader.es-rXKOYFt1.js";import"./Line-BRafxWtW.js";import"./useIsRTL-BHLafzmS.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(c,{of:i,isChart:!0}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:t}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(r.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(r.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(r.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(r.h3,{id:"with-formatter",children:"With Formatter"}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(r.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(r.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,e.jsxs(r.p,{children:["You can set a reference line to any value by using the ",e.jsx(r.code,{children:"referenceLine"})," ",e.jsx(r.code,{children:"chartConfig"})," property. ",e.jsx(r.code,{children:"referenceLine"})," accepts all properties described ",e.jsx(r.a,{href:"https://recharts.org/en-US/api/ReferenceLine",rel:"nofollow",children:"here"}),", but it's recommended to only use ",e.jsx(r.code,{children:"label"}),",",e.jsx(r.code,{children:"value"})," and ",e.jsx(r.code,{children:"color"})," to preserve the intended design."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`<LineChart
  {...props}
  chartConfig={{
    referenceLine: {
      color: 'red',
      label: 'MAX',
      value: 650
    }
  }}
/>
`})}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(r.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(r.h4,{id:"code",children:"Code"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
  return (
    <LineChart
      dataset={bigDataSet}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users',
          width: 2,
          color: 'url(#colorUsers)'
        }
      ]}
    >
      <defs>
        <linearGradient id="colorUsers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
    </LineChart>
  );
};
`})}),`
`,e.jsx(p,{of:W}),`
`,e.jsx(l,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(h,{})]})}function fe(o={}){const{wrapper:r}={...a(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(s,{...o})}):s(o)}export{fe as default};
