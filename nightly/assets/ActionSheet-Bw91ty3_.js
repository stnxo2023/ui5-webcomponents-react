import{j as n}from"./iframe-28qsVqoa.js";import{useMDXComponents as i}from"./index-BFNvmwXu.js";import{M as p,C as c}from"./blocks-BNVDqSKu.js";import"./Tag-CLPhNAjj.js";import"./index-SsxmriuV.js";import{C as a}from"./ControlsWithNote-Bp2hBOMg.js";import{D as m}from"./DocsHeader-C_paeAL7.js";import{F as h}from"./CommandsAndQueries-BfKaGYgk.js";import{C as o,D as r}from"./ActionSheet.stories-DsxII5dq.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHvzqwV5.js";import"./sys-enter-2-BKUUSCT4.js";import"./alert-D4ecQurj.js";import"./index-CLPTUIfm.js";import"./index-CWduGffo.js";import"./Link-DXcAF61b.js";import"./copy-CsVxvxmU.js";import"./copy-D8k23l_a.js";import"./GitHub-Mark-CDCyIaGl.js";import"./TableOfContent-aWzQSllK.js";import"./index-BaQxmIN-.js";import"./index-QZ0q645F.js";import"./index-BSTD78ro.js";import"./index-Ca0DqgDv.js";import"./index-DL1oyV4a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDZLmGFA.js";import"./addCustomCSSWithScoping-BQde53eT.js";import"./delete-D6n8l8UK.js";import"./utils-DHg3ikqn.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
`,n.jsx(m,{of:o,subComponents:["Button"]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.p,{children:["You can open and close the ",n.jsx(e.code,{children:"ActionSheet"})," component in a declarative way using the ",n.jsx(e.code,{children:"open"})," and ",n.jsx(e.code,{children:"opener"})," prop."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyComponentWithActionSheet = () => {
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openActionSheetBtn'}
        onClick={() => {
          setActionSheetIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <ActionSheet
        opener={'openActionSheetBtn'}
        open={actionSheetIsOpen}
        onClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Opening an ",n.jsx(e.code,{children:"ActionSheet"})," by reference"]})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ActionSheet"})," exposes a way to pass a reference of an element instead of an ",n.jsx(e.code,{children:"id"})," to the ",n.jsx(e.code,{children:"opener"}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={handleOpenerClick}>
        Opener
      </Button>
      <ActionSheet opener={buttonRef.current} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,n.jsx(h,{})]})}function P(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{P as default};
