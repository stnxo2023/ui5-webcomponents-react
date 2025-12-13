import{j as o}from"./iframe-eEgnsybz.js";import{useMDXComponents as s}from"./index-KUh3EncO.js";import{M as i,C as m}from"./blocks-C6o1VobD.js";import"./Tag-CyCgeEFX.js";import"./index-DlBhGBWU.js";import{C as c}from"./ControlsWithNote-eCm13KUA.js";import{D as a}from"./DocsHeader-BfTikCOy.js";import{F as d}from"./CommandsAndQueries-Bkg2fbFD.js";import{C as r,D as t}from"./ResponsivePopover.stories-DNGdFs8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CKacNM7A.js";import"./sys-enter-2-D0fhmdQp.js";import"./alert-CxkpN3m7.js";import"./index-Pa5s-fex.js";import"./index-0PjuM5S8.js";import"./Link-BuGrrtP2.js";import"./copy-z_bq9S7h.js";import"./copy-7FG8PsWo.js";import"./GitHub-Mark-BfP3Ty1_.js";import"./TableOfContent-DXjRwDfa.js";import"./index-D9oALoTs.js";import"./index-BwSVcTHk.js";import"./index-yhFX9aug.js";import"./index-Dc3QGU-g.js";import"./index-CGhTEkOT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CH2VPx4y.js";import"./addCustomCSSWithScoping-DKRk5X62.js";import"./index-DeVsfJce.js";import"./index-BIEBBMh8.js";import"./ListItemStandard-Bv5pHXMI.js";import"./settings-D6sE3rZn.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
