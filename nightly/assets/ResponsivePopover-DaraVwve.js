import{j as o}from"./iframe-BWTquNFU.js";import{useMDXComponents as s}from"./index-CkXQL6rW.js";import{M as i,C as m}from"./blocks-24keuhPe.js";import"./Tag-DhoajqAo.js";import"./index-B59i8xiW.js";import{C as c}from"./ControlsWithNote-CMzcgNsU.js";import{D as a}from"./DocsHeader-Mg9qrUqm.js";import{F as d}from"./Footer-BPNOTf-P.js";import"./CommandsAndQueries-Cu22SJgH.js";import"./PageNotFound-CJcyxQek.js";import{C as r,D as t}from"./ResponsivePopover.stories-Bo5zyHIO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DMtPZuOJ.js";import"./sys-enter-2-C7vs2MPC.js";import"./alert-CcklZ67u.js";import"./index-kSfV8vRJ.js";import"./index-ChJmkZbc.js";import"./Link-BecYEhoc.js";import"./copy-wtxGWRLy.js";import"./copy-iNwkfzwy.js";import"./GitHub-Mark-CzY2S8W-.js";import"./TableOfContent-xDME-aco.js";import"./index-DVrCMdXJ.js";import"./index-NVW8xIV5.js";import"./index-BTohTOow.js";import"./index-scscec-x.js";import"./index-CKCv8CV3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Byoi_UeP.js";import"./addCustomCSSWithScoping-DP3CaadD.js";import"./Illustrations-CJfJJGnG.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-Bw8aKIth.js";import"./index-CiXNavjP.js";import"./ListItemStandard-DbGrkhZV.js";import"./settings-CGivgX1w.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
