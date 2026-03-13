import{j as o}from"./iframe-D-7Wdns9.js";import{useMDXComponents as s}from"./index-DvD8yUkt.js";import{M as i,C as m}from"./blocks-DbRPcZc3.js";import"./Tag-CnF9nKkB.js";import"./index-Be6zsFxp.js";import{C as c}from"./ControlsWithNote-CKX0mdVN.js";import{D as a}from"./DocsHeader-BL48IkRq.js";import{F as d}from"./Footer-M_QXWpzq.js";import"./CommandsAndQueries-DtEJSw4R.js";import"./PageNotFound-C1UEztRs.js";import{C as r,D as t}from"./ResponsivePopover.stories-DHpzqPG_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJAFTTyQ.js";import"./sys-enter-2-CY8szrdt.js";import"./alert-B0l8ygN-.js";import"./index-jYQjsDyG.js";import"./index-IYXWglY5.js";import"./Link-B-zN_JAi.js";import"./copy-CBdiiutr.js";import"./copy-eIAIBU-7.js";import"./GitHub-Mark-BCbihiBb.js";import"./TableOfContent-CHSYHSBj.js";import"./index-BwYsEJM0.js";import"./index-D18p9Zu8.js";import"./index-DvVefbTP.js";import"./index-Bj1jARrT.js";import"./index-Xz-lwjQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyP71rSn.js";import"./addCustomCSSWithScoping-DvzvYvm_.js";import"./Illustrations-BvGUWHq-.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-DN8JrYBf.js";import"./index-D4V_2-aN.js";import"./ListItemStandard-CB-iQ9fV.js";import"./settings-Dera6BUq.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
