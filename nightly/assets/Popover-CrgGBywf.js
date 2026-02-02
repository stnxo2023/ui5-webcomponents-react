import{j as o}from"./iframe-DtD6gRbB.js";import{useMDXComponents as s}from"./index-BiO40HBX.js";import{M as i,C as m}from"./blocks-Ck7wLHdk.js";import"./Tag-CPFNFbnr.js";import"./index-BiosTbTI.js";import{C as c}from"./ControlsWithNote-BOStzrH-.js";import{D as a}from"./DocsHeader-BXYU5Ig6.js";import{F as d}from"./CommandsAndQueries-B26crKtq.js";import{C as r,D as t}from"./Popover.stories-DdhPgztc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-uX8_TnNn.js";import"./sys-enter-2-CJJhzBhO.js";import"./alert-BmD5O1ac.js";import"./index-CDW4JUA8.js";import"./index-pV_yzmY_.js";import"./Link-cYpkkuqp.js";import"./copy-CgVw-Q6h.js";import"./copy-DKyeVOxg.js";import"./GitHub-Mark-BAF9ju05.js";import"./TableOfContent-fgADZnKc.js";import"./index-BSRohzC4.js";import"./index-CRlMy3bg.js";import"./index-391GJ7ps.js";import"./index-DCELbeIn.js";import"./index-KaeBEDf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGQO4fMp.js";import"./addCustomCSSWithScoping-Bt7xCKzu.js";import"./settings-BOwjvOs-.js";import"./index-BgO6mcLt.js";import"./index-CEJjFBjT.js";import"./ListItemStandard-CdwuH3bB.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
