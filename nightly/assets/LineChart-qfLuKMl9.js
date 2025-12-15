import{j as e}from"./iframe-CMRYeg3m.js";import{useMDXComponents as a}from"./index-d3aogLFm.js";import{M as d,C as r}from"./blocks-B--XNN4Z.js";import"./Tag-DLJpwqrU.js";import"./index-X7c2uI6J.js";import{C as c}from"./ControlsWithNote-CXzfRtXZ.js";import{D as h}from"./DocsHeader-C1Kp8EXI.js";import{F as m}from"./CommandsAndQueries-DpsRc0ye.js";import{M as l,a as p}from"./LegendConfig-BJSuYPdC.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-Dp-_XyfW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-2R4wAWn8.js";import"./sys-enter-2-h25AZJAc.js";import"./alert-EuMgWuer.js";import"./index-TGfnZuTz.js";import"./index-csz7EJl3.js";import"./Link-Bxvjqypp.js";import"./copy-BaB0kE-C.js";import"./copy-O4x8gwVx.js";import"./GitHub-Mark-DMIALRWG.js";import"./TableOfContent-WwOK0Hwd.js";import"./index-Dt6RwhRx.js";import"./index-BVsKPF1I.js";import"./index-PIXQ40x8.js";import"./index-Ca5PVHn4.js";import"./index-DVEpH7N4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-f1AMIobt.js";import"./addCustomCSSWithScoping-D9ZK4KgK.js";import"./DemoProps-xeUs1NOb.js";import"./index-C1ZFlgFH.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-DOeZcA1O.js";import"./ChartContainer-BCDe7lDT.js";import"./index-8DOGvRkG.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-9iJ12mPr.js";import"./staticProps-Ba7yM6ly.js";import"./ChartDataLabel-BLcSZHs6.js";import"./useLongestYAxisLabel-CG00jcc3.js";import"./react-content-loader.es-CyV_4sj0.js";import"./Line-CfTlmmWN.js";import"./useIsRTL-G_RHHN41.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
