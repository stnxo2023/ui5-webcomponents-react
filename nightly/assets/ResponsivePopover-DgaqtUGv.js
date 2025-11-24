import{j as o}from"./iframe-8VKaAWwE.js";import{useMDXComponents as s}from"./index-BiQxBi02.js";import{M as i,C as m}from"./blocks-D4P1btFV.js";import"./Tag-CAEVBdQF.js";import"./index-BMIVJ8fC.js";import{C as c}from"./ControlsWithNote-JxH1w4ac.js";import{D as a}from"./DocsHeader-BpyJYh9-.js";import{F as d}from"./CommandsAndQueries-Br8gYKlc.js";import{C as r,D as t}from"./ResponsivePopover.stories-B-js3w_r.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dxy_OYjg.js";import"./sys-enter-2-B9S9TtfQ.js";import"./alert-CW57s-T2.js";import"./index-Bd8LmHtw.js";import"./index-DjKsiZpu.js";import"./Link-Br8LM296.js";import"./copy-eOeIXdn0.js";import"./copy-GTYDTz4M.js";import"./GitHub-Mark-Dx2PTGP9.js";import"./TableOfContent-0W3j5ceT.js";import"./index-DeQFsrbp.js";import"./index-CG1tJmDp.js";import"./index-Wr_VU4vx.js";import"./index--0IHLSpo.js";import"./index-G7mYvFlh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS15uRtL.js";import"./addCustomCSSWithScoping-gm53ZH9E.js";import"./index-CAXoANqy.js";import"./index-Dw_SJKgF.js";import"./ListItemStandard-CACymtkK.js";import"./settings-VKt-L-yH.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
