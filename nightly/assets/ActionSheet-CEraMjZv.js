import{j as n}from"./iframe-4UX9zVtN.js";import{useMDXComponents as i}from"./index-BBCkKRvO.js";import{M as p,C as c}from"./blocks-BFxvjNAv.js";import"./Tag-B3FvlNgH.js";import"./index-BXHIuf-D.js";import{C as a}from"./ControlsWithNote-HRuakJ4J.js";import{D as m}from"./DocsHeader-DMgRCPMn.js";import{F as h}from"./CommandsAndQueries-DudJ8lrA.js";import{C as o,D as r}from"./ActionSheet.stories-B0DQ4oIN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-WWzzOZjz.js";import"./sys-enter-2-CaiZT1Nw.js";import"./alert-G68zeMJP.js";import"./index-oGM8b9YF.js";import"./index-DctXwSyI.js";import"./Link-fA-SeXAj.js";import"./copy-C0JILoSE.js";import"./copy-Cyt5Uff4.js";import"./GitHub-Mark-CkNvDNdk.js";import"./TableOfContent-Ceb6N6LS.js";import"./index-S5ZW1bjA.js";import"./index-CXoNptYK.js";import"./index-C3GdV3vE.js";import"./index-De4g9Au_.js";import"./index-DnrxmRVZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-rUq1jEzN.js";import"./addCustomCSSWithScoping-DCDZu8w8.js";import"./delete-CPKq1-iv.js";import"./utils-BL-JB8rb.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
