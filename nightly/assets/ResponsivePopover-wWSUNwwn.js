import{j as o}from"./iframe-DQUr2w9e.js";import{useMDXComponents as s}from"./index-uEfBZmVP.js";import{M as i,C as m}from"./blocks-CTU8TRaT.js";import"./Tag-CGtAgsci.js";import"./index-CHsUWkTe.js";import{C as c}from"./ControlsWithNote-DLcvzWYI.js";import{D as a}from"./DocsHeader-67QXRaFL.js";import{F as d}from"./CommandsAndQueries-BHqFNGC1.js";import{C as r,D as t}from"./ResponsivePopover.stories-DPuvMwoX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BjEP1Brt.js";import"./sys-enter-2-ByVlGYkM.js";import"./alert-B-w-1j20.js";import"./index-4ddJk1R_.js";import"./index-BtkqIySi.js";import"./Link-BHxA_VPp.js";import"./copy-BP8P6B-q.js";import"./copy-DGFXVa9Z.js";import"./GitHub-Mark-D0wVycYe.js";import"./TableOfContent-DJz6oSi_.js";import"./index-BbVmwePH.js";import"./index-2aCTTGoH.js";import"./index-CSO1LyL1.js";import"./index-B4uSF3Nb.js";import"./index-CNdVS1MW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpPxZFHh.js";import"./addCustomCSSWithScoping-CYkIrudw.js";import"./index-C3E04by4.js";import"./index-D38IEv3D.js";import"./ListItemStandard-55PzQGAK.js";import"./settings-BqZXbBzz.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
