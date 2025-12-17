import{j as o}from"./iframe-0odebeya.js";import{useMDXComponents as s}from"./index-CqFbrvRl.js";import{M as i,C as m}from"./blocks-CZanU-Ia.js";import"./Tag-BUYfpKMM.js";import"./index-D9xNyPsZ.js";import{C as c}from"./ControlsWithNote-yy9Z70tj.js";import{D as a}from"./DocsHeader-HJTTPE0p.js";import{F as d}from"./CommandsAndQueries-EL4jX5E-.js";import{C as r,D as t}from"./ResponsivePopover.stories-BITjz9KN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjkTzkFz.js";import"./sys-enter-2-DdZ_D29i.js";import"./alert-D-ynjdbk.js";import"./index-BINGVIRj.js";import"./index-CaXXMvN7.js";import"./Link-BrHi8e0V.js";import"./copy-BYpie_7C.js";import"./copy-CT5RXkub.js";import"./GitHub-Mark-fdWbDvv0.js";import"./TableOfContent-DKap7IC3.js";import"./index-8HMofQBq.js";import"./index-Bj8LHsHM.js";import"./index-frz6UFer.js";import"./index-tz56fx9f.js";import"./index-CWrbfQpH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHrZH3Z4.js";import"./addCustomCSSWithScoping-Dp2j1Uki.js";import"./index-C9fKAKSL.js";import"./index-DFrOQYBP.js";import"./ListItemStandard-B9R18C1J.js";import"./settings-B4AOpzhv.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
