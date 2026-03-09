import{j as o}from"./iframe-BdGmxA0i.js";import{useMDXComponents as s}from"./index-C_zfuZcr.js";import{M as i,C as m}from"./blocks-CvQb1zUF.js";import"./Tag-BZN3xK1V.js";import"./index-BNIHl_tg.js";import{C as c}from"./ControlsWithNote-w_YjsiOU.js";import{D as a}from"./DocsHeader-Dftch-HB.js";import{F as d}from"./Footer-Do6hcOrL.js";import"./CommandsAndQueries-DPqSrKc7.js";import"./PageNotFound-CY9FLBWR.js";import{C as r,D as t}from"./ResponsivePopover.stories-REpbsIl5.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CGm_Wlhu.js";import"./sys-enter-2-ckHTVyHn.js";import"./alert-iCvnQY_C.js";import"./index-rE0jwRpd.js";import"./index-DZ9SK43g.js";import"./Link-CQvrABtJ.js";import"./copy-D0MTLwrf.js";import"./copy-uDMRF36v.js";import"./GitHub-Mark-D_uhkrfR.js";import"./TableOfContent-DlZGdJoU.js";import"./index-BdC4vT1G.js";import"./index-B2qLcI40.js";import"./index-DweznLO9.js";import"./index-C9pyPHSx.js";import"./index-DNgHnsc0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-XhNISppA.js";import"./addCustomCSSWithScoping-CVesT24B.js";import"./Illustrations-D5W8On_q.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-CGXbN4gw.js";import"./index-CUQ38Ums.js";import"./ListItemStandard-BDBEqEtu.js";import"./settings-1l_UOAce.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
