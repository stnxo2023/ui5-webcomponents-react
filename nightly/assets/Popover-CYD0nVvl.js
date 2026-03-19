import{j as o}from"./iframe-DZQsFHyF.js";import{useMDXComponents as i}from"./index-FeafUf3S.js";import{M as s,C as m}from"./blocks-CCR5dlte.js";import"./Tag-njT3oUWj.js";import"./index-FZQI4JeT.js";import{C as c}from"./ControlsWithNote-DndMN2PG.js";import{D as a}from"./DocsHeader-BYmBOG9m.js";import{F as d}from"./Footer-1JL6Y-Rs.js";import"./CommandsAndQueries-Q7QL049M.js";import"./PageNotFound-CAJJq4gT.js";import{C as r,D as t}from"./Popover.stories-BWmx07Yt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Byx_k42O.js";import"./sys-enter-2-CNKaU8fp.js";import"./alert-HiA3dax7.js";import"./index-JUdhH85j.js";import"./index-DGD79lBE.js";import"./Link-Dy7YK0fU.js";import"./copy-BrbFvn-Q.js";import"./copy-B0ak1fDk.js";import"./GitHub-Mark-DMTHjS90.js";import"./TableOfContent-B8ysGL0D.js";import"./index-CHkzxhcQ.js";import"./index-CeHR91It.js";import"./index-CmNuhxCj.js";import"./index-C2RcbU_s.js";import"./index-QENyXe96.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsnnpcUC.js";import"./addCustomCSSWithScoping-BZT-QmME.js";import"./Illustrations-BlaFZAWE.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-uxlfm5Eb.js";import"./index-BRePqaMI.js";import"./index-BY2jPfZG.js";import"./ListItemStandard-Du0wWGOA.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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
`,o.jsx(d,{})]})}function Q(e={}){const{wrapper:n}={...i(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{Q as default};
