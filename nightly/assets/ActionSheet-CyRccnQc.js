import{j as n}from"./iframe-Brff1rmP.js";import{useMDXComponents as i}from"./index-CqBWQ9Zx.js";import{M as p,C as c}from"./blocks-Cx2b2NzS.js";import"./Tag-CO6ENRz9.js";import"./index-DlA7--5Z.js";import{C as a}from"./ControlsWithNote-Dryrg7rF.js";import{D as m}from"./DocsHeader-BQeKNX3t.js";import{F as h}from"./CommandsAndQueries-Z2F9olV7.js";import{C as o,D as r}from"./ActionSheet.stories-Djn_D9Zg.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cs5lMjWh.js";import"./sys-enter-2-D0GbakMF.js";import"./alert-DvXA8o8i.js";import"./index-C7l_yPP_.js";import"./index-DYmdKmkq.js";import"./Link-CnNfKrga.js";import"./copy-DTNRA_Dg.js";import"./copy-Bv1OuOcO.js";import"./GitHub-Mark-mz3YWYis.js";import"./TableOfContent-B_7Wp9mr.js";import"./index-Cl8f3le-.js";import"./index-GNhj6rYz.js";import"./index-CHjRsrmQ.js";import"./index-BM_H4FxE.js";import"./index-SsKZpktE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hZd9oRLF.js";import"./addCustomCSSWithScoping-DWThNXxY.js";import"./delete-C9vgo_nn.js";import"./utils-CGg_sa7o.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
