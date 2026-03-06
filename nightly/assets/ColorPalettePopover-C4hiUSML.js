import{j as o}from"./iframe-1PJgHZTG.js";import{useMDXComponents as s}from"./index-DQ8p-OUL.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BWdY__MG.js";import"./Tag-B40KCJnD.js";import"./index-C8yXoAsR.js";import{C as x}from"./ControlsWithNote-CsLsgmT1.js";import{D as u}from"./DocsHeader-DnpvZl4X.js";import{F as h}from"./Footer-Dn-umaI8.js";import"./CommandsAndQueries-CQXQgoMe.js";import"./PageNotFound-BDu5VFGA.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BE9CtUGz.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CHeRiPNE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJc7dR8E.js";import"./sys-enter-2-C9tJiXDL.js";import"./alert-DYBuSdd9.js";import"./index-ppU6pF9w.js";import"./index-BhuvwaVu.js";import"./Link-7AxyQCs2.js";import"./copy-BGWb1lfv.js";import"./copy-DV2HGm9x.js";import"./GitHub-Mark-DnHXiXr5.js";import"./TableOfContent-BXrMFYBh.js";import"./index-BIAg1r_N.js";import"./index-BpyshfBP.js";import"./index-BQUqcZEd.js";import"./index-i1xIbWKA.js";import"./index-D-m_lTJG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DnF5TvKk.js";import"./addCustomCSSWithScoping-NZMltsez.js";import"./Illustrations-BZEV-hfk.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-DL_QXptj.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
`,o.jsx(h,{})]})}function $(t={}){const{wrapper:e}={...s(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{$ as default};
