import{j as o}from"./iframe-CJJIsx6F.js";import{u as s,M as i,C as m}from"./blocks-ChaXMZP5.js";import"./Tag-n7rERTqv.js";import"./index-C3WbBMZ1.js";import{C as c}from"./ControlsWithNote-C517f0VS.js";import{D as a}from"./DocsHeader-UlcWAO4j.js";import{F as d}from"./Footer-Ce6by-oH.js";import"./CommandsAndQueries-B6BpCs-M.js";import"./PageNotFound-BtSzGq-G.js";import{C as r,D as t}from"./Popover.stories-BiicCgm0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHzv4rEq.js";import"./sys-enter-2-DxE2QBT2.js";import"./alert-BgdGP7JP.js";import"./index-Comgbi1p.js";import"./index-8nS7lmoC.js";import"./Link-GrYjVq0T.js";import"./copy-C35nr0mJ.js";import"./copy-CS6obn2m.js";import"./GitHub-Mark-C9rLi2lG.js";import"./TableOfContent-CASxHgew.js";import"./index-DqWhINqr.js";import"./index-qLq9B_00.js";import"./index-BAPIP2EX.js";import"./index-CiQC7Mcr.js";import"./index-DWaBFkkI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CLM_ccAB.js";import"./addCustomCSSWithScoping-DH49qo7-.js";import"./Illustrations-BhBoWAi4.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-DrDadmIh.js";import"./index-CGyGuqHJ.js";import"./index-B5SvgXn6.js";import"./ListItemStandard-BESL8Ob4.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
`,o.jsx(d,{})]})}function K(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{K as default};
