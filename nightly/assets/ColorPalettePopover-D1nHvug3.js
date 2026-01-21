import{j as o}from"./iframe-BFR-dU1l.js";import{useMDXComponents as i}from"./index-BRr5RSu7.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DTAC1Gxc.js";import"./Tag-Uk5Wz18b.js";import"./index-Dv1E9yaY.js";import{C as x}from"./ControlsWithNote-BAOTy4FM.js";import{D as u}from"./DocsHeader-6Y7Moh3O.js";import{F as h}from"./CommandsAndQueries-kf2pSDF5.js";import{C as n,D as r}from"./ColorPalettePopover.stories-KgQ5C0fa.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DrOWOn0S.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BanFECND.js";import"./sys-enter-2-RSAR57lC.js";import"./alert-4GMQX2Dz.js";import"./index-BAzgfXr-.js";import"./index-CvzwYeg1.js";import"./Link-DIc6gIaF.js";import"./copy-DnbsSyeI.js";import"./copy-Cc7XHaG7.js";import"./GitHub-Mark-B3ESfqwd.js";import"./TableOfContent-De6SMJi5.js";import"./index-CVrFyQhm.js";import"./index-CoobbAbb.js";import"./index-C3CLOvIH.js";import"./index-CFDOjZnD.js";import"./index-VAuUAMe6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1LKO1Rr.js";import"./addCustomCSSWithScoping-BBCqvj7y.js";import"./ResponsivePopoverCommon.css-ibscBu1F.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
