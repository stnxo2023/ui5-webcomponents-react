import{j as o}from"./iframe-DpyqAETS.js";import{useMDXComponents as s}from"./index-DokE1aPE.js";import{M as i,C as m}from"./blocks-PLzKwXGQ.js";import"./Tag-DKNf6AcV.js";import"./index-TIDQzFF1.js";import{C as c}from"./ControlsWithNote-mFXyia1G.js";import{D as a}from"./DocsHeader-CByV1kO3.js";import{F as d}from"./Footer-B_kIXa7O.js";import"./CommandsAndQueries-DgdmOsaT.js";import"./PageNotFound-BN4cbSeC.js";import{C as r,D as t}from"./ResponsivePopover.stories-Cqoj_sBN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-99NDnz_N.js";import"./sys-enter-2-CaEWuWxX.js";import"./alert-L-6hDox8.js";import"./index-I3Bq7JP2.js";import"./index-B0Hg115V.js";import"./Link-Cygi3wLY.js";import"./copy-Ddv8avgM.js";import"./copy-Bdya3dKB.js";import"./GitHub-Mark-Cf0xY0ZR.js";import"./TableOfContent-BWsdSrea.js";import"./index-B8-2K5Ni.js";import"./index-CiKduFiJ.js";import"./index-B67fvT3R.js";import"./index-CnomjaBB.js";import"./index-I3HyyzwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP11CHq4.js";import"./addCustomCSSWithScoping-Co67Uzxh.js";import"./Illustrations-Beru7cxi.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-DcZIfOhg.js";import"./index-CrY6jiry.js";import"./ListItemStandard-D5IRqJ4A.js";import"./settings-DrzuGCHX.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
`,o.jsx(d,{})]})}function Q(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{Q as default};
