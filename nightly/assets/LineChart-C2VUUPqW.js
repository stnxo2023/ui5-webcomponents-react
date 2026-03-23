import{j as e}from"./iframe-DpyqAETS.js";import{useMDXComponents as a}from"./index-DokE1aPE.js";import{M as d,C as n}from"./blocks-PLzKwXGQ.js";import"./Tag-DKNf6AcV.js";import"./index-TIDQzFF1.js";import{C as m}from"./ControlsWithNote-mFXyia1G.js";import{D as c}from"./DocsHeader-CByV1kO3.js";import{F as h}from"./Footer-B_kIXa7O.js";import"./CommandsAndQueries-DgdmOsaT.js";import"./PageNotFound-BN4cbSeC.js";import{M as p,a as l}from"./LegendConfig-Csecdy7X.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CNfS_idC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-99NDnz_N.js";import"./sys-enter-2-CaEWuWxX.js";import"./alert-L-6hDox8.js";import"./index-I3Bq7JP2.js";import"./index-B0Hg115V.js";import"./Link-Cygi3wLY.js";import"./copy-Ddv8avgM.js";import"./copy-Bdya3dKB.js";import"./GitHub-Mark-Cf0xY0ZR.js";import"./TableOfContent-BWsdSrea.js";import"./index-B8-2K5Ni.js";import"./index-CiKduFiJ.js";import"./index-B67fvT3R.js";import"./index-CnomjaBB.js";import"./index-I3HyyzwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP11CHq4.js";import"./addCustomCSSWithScoping-Co67Uzxh.js";import"./Illustrations-Beru7cxi.js";import"./i18n-defaults-CFWtSmu6.js";import"./DemoProps-DAix4CMf.js";import"./index-KE4OqvsC.js";import"./ThemingParameters-BvhwmbYD.js";import"./YAxisTicks-De7XXIIF.js";import"./ChartContainer-CBZRlYIb.js";import"./index-Be45WFmK.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CcRE-lEt.js";import"./staticProps-JyKMgR7P.js";import"./ChartDataLabel-B-PSVsct.js";import"./useLongestYAxisLabel-CNsn2Dbj.js";import"./react-content-loader.es-CsHdf8_7.js";import"./Line-BgzDZTxC.js";import"./useIsRTL-kZVBuGuq.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
