import{j as o}from"./iframe-D9bwNIEw.js";import{useMDXComponents as s}from"./index-C7Zm3EXU.js";import{M as i,C as m}from"./blocks-CdTlBqmb.js";import"./Tag-nAJAFGwR.js";import"./index-v7UWUzZA.js";import{C as c}from"./ControlsWithNote-Jn1GAeVz.js";import{D as a}from"./DocsHeader-D_ch1a__.js";import{F as d}from"./Footer-rCYhEoIf.js";import"./CommandsAndQueries-C_WJZTxK.js";import"./PageNotFound-C24XQEWZ.js";import{C as r,D as t}from"./ResponsivePopover.stories-DufmW_q3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BBRTwn-C.js";import"./sys-enter-2-BgYzXgjA.js";import"./alert-Dvz5ATv0.js";import"./index-DYbVUH4U.js";import"./index-DpP2zBoF.js";import"./Link-DLbf1NX7.js";import"./copy-XBKnZrVA.js";import"./copy-C4qxUcFd.js";import"./GitHub-Mark-B3kCUXSj.js";import"./TableOfContent-DIRu9y5y.js";import"./index-B24aDDF0.js";import"./index-B5Io8E3V.js";import"./index-DiWu_OvK.js";import"./index-BWceQhWo.js";import"./index-DX-an7LC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYx-bkvu.js";import"./addCustomCSSWithScoping-CTtTC3T9.js";import"./Illustrations-CAUI_mYY.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-CxdTHADh.js";import"./index-CjyQYo-y.js";import"./ListItemStandard-CLmJtC2x.js";import"./settings-D-Mp7imo.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
