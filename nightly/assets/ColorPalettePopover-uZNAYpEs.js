import{j as o}from"./iframe-DrnWJux_.js";import{useMDXComponents as i}from"./index-8FDMxm68.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BFYkdnf5.js";import"./Tag-C0-SLfdZ.js";import"./index-e4jmEiJR.js";import{C as x}from"./ControlsWithNote-DIYc68X9.js";import{D as u}from"./DocsHeader-rqkxD5o1.js";import{F as h}from"./CommandsAndQueries-CNfp17jg.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BV4zR5V1.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-C48rPwjz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Djf1EDVN.js";import"./sys-enter-2-BH66Bhis.js";import"./alert-DUpqB4cV.js";import"./index-CvpE5smH.js";import"./index-IUrjl9ty.js";import"./Link-DZzQtWK9.js";import"./copy-CUuGlY4c.js";import"./copy-BxyqZoQq.js";import"./GitHub-Mark-C5A0ffo9.js";import"./TableOfContent-CJ3shYO4.js";import"./index-CW1Fzcqx.js";import"./index-Cjg1iz22.js";import"./index-DVoKYJte.js";import"./index-BNqm2zkD.js";import"./index-CBWW3th1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDLiZVZl.js";import"./addCustomCSSWithScoping-CbplP-kx.js";import"./ResponsivePopoverCommon.css-e_PJNQiz.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
`,o.jsx(u,{of:n,since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:r}),`
`,o.jsx(e.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(e.p,{children:["You can open and close the ",o.jsx(e.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(e.code,{children:"open"})," and ",o.jsx(e.code,{children:"opener"})," prop."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(l,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(d,{of:p}),`
`,o.jsx(h,{})]})}function Q(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(s,{...t})}):s(t)}export{Q as default};
