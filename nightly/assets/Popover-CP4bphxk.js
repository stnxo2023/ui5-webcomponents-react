import{j as o}from"./iframe-B-pj6tCi.js";import{useMDXComponents as s}from"./index-CV4vE3wQ.js";import{M as i,C as m}from"./blocks-HpriUj6L.js";import"./Tag-BGSRXwU9.js";import"./index-BjTnndjj.js";import{C as c}from"./ControlsWithNote-B7K7QTtI.js";import{D as a}from"./DocsHeader-BCuAJzUi.js";import{F as d}from"./CommandsAndQueries-D5MjQxKD.js";import{C as r,D as t}from"./Popover.stories-DToU6zau.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D4Uxy2_-.js";import"./sys-enter-2-dO_KPcSs.js";import"./alert-DoolSfaJ.js";import"./index-BOWgSpCi.js";import"./index-BuYTxKvQ.js";import"./Link-C2AEvOhf.js";import"./copy-BVi8j2p3.js";import"./copy-DztVyiyp.js";import"./GitHub-Mark-8l4Jp8Qr.js";import"./TableOfContent-D6cpdcyl.js";import"./index-C-xz_U36.js";import"./index-CBj2QVaO.js";import"./index-BJS1VYKy.js";import"./index-C-cxTaDk.js";import"./index-etFlaHh7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-zIVJXLqJ.js";import"./addCustomCSSWithScoping-NTHEVFVs.js";import"./settings-uSbSIQHU.js";import"./index-B_v9zx4p.js";import"./index-CC2eGnfy.js";import"./ListItemStandard-DZ46rijL.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
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
      <Popover
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
