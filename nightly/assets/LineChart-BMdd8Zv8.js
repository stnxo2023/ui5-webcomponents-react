import{j as e}from"./iframe-CJIrZBlB.js";import{useMDXComponents as a}from"./index-xKVU5ZCd.js";import{M as d,C as r}from"./blocks-C-1O0LRm.js";import"./Tag-BNlwFAFY.js";import"./index-DmJ7zXRW.js";import{C as c}from"./ControlsWithNote-DgEi_PLk.js";import{D as h}from"./DocsHeader-BV5sl85-.js";import{F as m}from"./CommandsAndQueries-C3g74-RT.js";import{M as l,a as p}from"./LegendConfig-6_bALzSZ.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CvPlphPR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BaxJEMV7.js";import"./sys-enter-2-COh9WNy8.js";import"./alert-BkaLAKBd.js";import"./index-EdNUKN4_.js";import"./index-CEkWgGTS.js";import"./Link-BElCP5h1.js";import"./copy-Do5bG9wn.js";import"./copy-DR5Kv1Iv.js";import"./GitHub-Mark-CILm86EZ.js";import"./TableOfContent-Cp1YxGMV.js";import"./index-BGOwz-CM.js";import"./index-YnpVhHMg.js";import"./index-BhZheF80.js";import"./index-DmwyQtvi.js";import"./index-BCwOIMZp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bf32rwnZ.js";import"./addCustomCSSWithScoping-CPo-hqqQ.js";import"./DemoProps-D_oajcMV.js";import"./index-CHT-QlxX.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-CvKbFae9.js";import"./ChartContainer-Bhiywa8y.js";import"./index-BPZe2Mw9.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B499U6X0.js";import"./staticProps-DHoQtAVG.js";import"./ChartDataLabel-uv3G1QhM.js";import"./useLongestYAxisLabel-C-SlIkhW.js";import"./react-content-loader.es-jqG3p96k.js";import"./Line-CovAbic7.js";import"./useIsRTL-Bb4BnNpy.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
