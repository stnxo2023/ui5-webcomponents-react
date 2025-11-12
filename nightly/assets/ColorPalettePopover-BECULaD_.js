import{j as o}from"./iframe-m3wgL8DO.js";import{useMDXComponents as i}from"./index-BDA4Q--W.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CkTarMgO.js";import"./Tag-tSZf1-5X.js";import"./index-XwYlDB9P.js";import{C as x}from"./ControlsWithNote-Bfr8xnVJ.js";import{D as u}from"./DocsHeader-B9aLmGE3.js";import{F as h}from"./CommandsAndQueries-DJJG77Q0.js";import{C as n,D as r}from"./ColorPalettePopover.stories-D0gfTHF6.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CtzXK_HX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DsCCxR_j.js";import"./sys-enter-2-3GVzqOhh.js";import"./alert-CYqVZ7NL.js";import"./index-BSNngnc7.js";import"./index-CVyBcJoi.js";import"./Link-BBA1fpnp.js";import"./copy-CD1CC4_Q.js";import"./copy-CODhXho7.js";import"./GitHub-Mark-CdXXKoW5.js";import"./TableOfContent-CYqz57vy.js";import"./index-BhmtIGIH.js";import"./index-D9MBfHQe.js";import"./index-CLINieEb.js";import"./index-00DfGzTS.js";import"./index-B7uA3u-p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6f_OpFu.js";import"./addCustomCSSWithScoping-D1ffFiBE.js";import"./ResponsivePopoverCommon.css-C9hxCvuP.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
