import{j as e}from"./iframe-0odebeya.js";import{useMDXComponents as a}from"./index-CqFbrvRl.js";import{M as d,C as r}from"./blocks-CZanU-Ia.js";import"./Tag-BUYfpKMM.js";import"./index-D9xNyPsZ.js";import{C as c}from"./ControlsWithNote-yy9Z70tj.js";import{D as h}from"./DocsHeader-HJTTPE0p.js";import{F as m}from"./CommandsAndQueries-EL4jX5E-.js";import{M as l,a as p}from"./LegendConfig-CJKrPoZI.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-BLFX0Zzb.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjkTzkFz.js";import"./sys-enter-2-DdZ_D29i.js";import"./alert-D-ynjdbk.js";import"./index-BINGVIRj.js";import"./index-CaXXMvN7.js";import"./Link-BrHi8e0V.js";import"./copy-BYpie_7C.js";import"./copy-CT5RXkub.js";import"./GitHub-Mark-fdWbDvv0.js";import"./TableOfContent-DKap7IC3.js";import"./index-8HMofQBq.js";import"./index-Bj8LHsHM.js";import"./index-frz6UFer.js";import"./index-tz56fx9f.js";import"./index-CWrbfQpH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHrZH3Z4.js";import"./addCustomCSSWithScoping-Dp2j1Uki.js";import"./DemoProps-Del0UB-K.js";import"./index-Br9oHqC9.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-9JwlcEde.js";import"./ChartContainer-C4EBc8yQ.js";import"./index-zsFPEOYy.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ULU8seYB.js";import"./staticProps-D00UfRK7.js";import"./ChartDataLabel-C3GcLP9V.js";import"./useLongestYAxisLabel-a1omfJ7e.js";import"./react-content-loader.es-C9uzV7wQ.js";import"./Line-H4vVgLXY.js";import"./useIsRTL-3MSrpeOV.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(h,{of:i,isChart:!0}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(n.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(n.h3,{id:"with-formatter",children:"With Formatter"}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,e.jsxs(n.p,{children:["You can set a reference line to any value by using the ",e.jsx(n.code,{children:"referenceLine"})," ",e.jsx(n.code,{children:"chartConfig"})," property. ",e.jsx(n.code,{children:"referenceLine"})," accepts all properties described ",e.jsx(n.a,{href:"https://recharts.org/en-US/api/ReferenceLine",rel:"nofollow",children:"here"}),", but it's recommended to only use ",e.jsx(n.code,{children:"label"}),",",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"color"})," to preserve the intended design."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<LineChart
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
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,e.jsx(r,{of:L}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
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
`,e.jsx(l,{of:W}),`
`,e.jsx(p,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(m,{})]})}function le(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{le as default};
