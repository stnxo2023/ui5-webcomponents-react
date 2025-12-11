import{j as e}from"./iframe-D74d3IUT.js";import{useMDXComponents as a}from"./index-BzFpXofy.js";import{M as d,C as r}from"./blocks-CXGWO-SS.js";import"./Tag-CGDi5rN6.js";import"./index-D9Jimze5.js";import{C as c}from"./ControlsWithNote-CvEObb8r.js";import{D as h}from"./DocsHeader-DPBbsWBU.js";import{F as m}from"./CommandsAndQueries-CXtjs1YA.js";import{M as l,a as p}from"./LegendConfig-BO4d-fN1.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CXi6qaQx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CzZVG8MP.js";import"./sys-enter-2-Bo9ZeWqv.js";import"./alert-BpouBdE8.js";import"./index-B6nGMvY0.js";import"./index-nz5M1FvK.js";import"./Link-BnKuAsKS.js";import"./copy-C5C63oSw.js";import"./copy-B52gZhj1.js";import"./GitHub-Mark-DXqoSDG3.js";import"./TableOfContent-CtfBXmkb.js";import"./index-Dp6BwZZH.js";import"./index-BAV2Dqb-.js";import"./index-CGofV6Bd.js";import"./index-CBnDxC_O.js";import"./index-CUp4_VMY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI0ZtE-_.js";import"./addCustomCSSWithScoping-DX0DY0tV.js";import"./DemoProps-Ri-5urG6.js";import"./index-Czlz_RcT.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-BZ9BYD6C.js";import"./ChartContainer-CdjIRbtD.js";import"./index-BJZ4mF5F.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DvfxMzSY.js";import"./staticProps-B-Lc9tqI.js";import"./ChartDataLabel-CxQi6cLB.js";import"./useLongestYAxisLabel-4UrRovAz.js";import"./react-content-loader.es-CFbN_kUB.js";import"./Line-Bfn4p6CA.js";import"./useIsRTL-D2mdH9Ar.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
