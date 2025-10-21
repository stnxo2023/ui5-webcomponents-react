import{j as o}from"./iframe-Bb0HmHnB.js";import{useMDXComponents as s}from"./index-Meo06HOS.js";import{M as i,C as m}from"./blocks-CgyFha0p.js";import"./Tag-CkJgtMYU.js";import"./index-e-oHYPrA.js";import{C as c}from"./ControlsWithNote-C0RGHc9T.js";import{D as a}from"./DocsHeader--oUZkZKK.js";import{F as d}from"./CommandsAndQueries-tR4iht-v.js";import{C as r,D as t}from"./ResponsivePopover.stories-DYB4rAIS.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CuEP2--w.js";import"./sys-enter-2-BxgOL3Cz.js";import"./alert-CRFvm_h4.js";import"./index-CCkcOLyJ.js";import"./index-DRj5BOAv.js";import"./Link-Ctr6McPA.js";import"./copy-D1tyYoI7.js";import"./copy-ClXY_Ebg.js";import"./GitHub-Mark-DQRgODc2.js";import"./TableOfContent-GqtJPfFU.js";import"./index-BUHcje1a.js";import"./index-ujA-0uQD.js";import"./index-DamhzNr0.js";import"./index-kXJ0csex.js";import"./index-DkF-cfFa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmK6tfuz.js";import"./addCustomCSSWithScoping-DZsYEWJZ.js";import"./index-BHDfFIKl.js";import"./index-DnLo1BZO.js";import"./ListItemStandard-DRloOdH2.js";import"./settings-X_qufnfv.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <ResponsivePopover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function A(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{A as default};
