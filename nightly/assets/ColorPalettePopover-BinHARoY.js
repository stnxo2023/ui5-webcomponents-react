import{j as o}from"./iframe-5Ai_0qn6.js";import{useMDXComponents as i}from"./index-B7f66Dmz.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-B56i3DPI.js";import"./Tag-COMV1q97.js";import"./index-DmI0q2i9.js";import{C as x}from"./ControlsWithNote-Dmf2RZYl.js";import{D as u}from"./DocsHeader-BNDJcX-j.js";import{F as h}from"./CommandsAndQueries-JQTwJq8J.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CBsvLnMC.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BayiktcO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D04M7OHu.js";import"./sys-enter-2-1BgXqzpT.js";import"./alert-BhFUrxxf.js";import"./index-BkdUYSuU.js";import"./index-BRDhzPf9.js";import"./Link-D--4KGaX.js";import"./copy-B5LlkFWV.js";import"./copy-DNLRE2WL.js";import"./GitHub-Mark-CmaLVeo_.js";import"./TableOfContent-BjCvBF3F.js";import"./index-Ce1oa-YM.js";import"./index-q1btkUh6.js";import"./index-B-uO6_4g.js";import"./index-D661wfa7.js";import"./index-Bq31yNzK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COAGvdy_.js";import"./addCustomCSSWithScoping-DYNqCkls.js";import"./ResponsivePopoverCommon.css-C3FRXGqL.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
