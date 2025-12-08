import{j as o}from"./iframe-C4t4IgBC.js";import{useMDXComponents as s}from"./index-Mw7OJb9H.js";import{M as i,C as m}from"./blocks-BBLZG0oz.js";import"./Tag-CDNtFOv1.js";import"./index-Dn3tX0-p.js";import{C as c}from"./ControlsWithNote-saMruwKV.js";import{D as a}from"./DocsHeader-KOv_8FA5.js";import{F as d}from"./CommandsAndQueries-D8F1OdPA.js";import{C as r,D as t}from"./ResponsivePopover.stories-D8NHHIWn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ChMVL_f6.js";import"./sys-enter-2-qiLZ6lMH.js";import"./alert-CRjt_mFI.js";import"./index-nQT45DkO.js";import"./index-CWVWkCUh.js";import"./Link-DmVNlXZz.js";import"./copy-DrdyAR-2.js";import"./copy-Cuc5dF6S.js";import"./GitHub-Mark-v1exoH6c.js";import"./TableOfContent-jh3H59Es.js";import"./index-C_e2hqHh.js";import"./index-DHWon9Pg.js";import"./index-BTZMG5sJ.js";import"./index-DoEQkKHr.js";import"./index-B9hc6QqK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVHmgfEk.js";import"./addCustomCSSWithScoping-BpxylvhK.js";import"./index-C6p9FXGA.js";import"./index-BwGmy4E4.js";import"./ListItemStandard-Ct25_r8s.js";import"./settings-BzwMkjoZ.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
