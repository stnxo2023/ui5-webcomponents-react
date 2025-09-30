import{j as n}from"./iframe-sceg0YFv.js";import{useMDXComponents as i}from"./index-Dd71zBof.js";import{M as p,C as c}from"./blocks-DYuUqipq.js";import"./Tag-CeuATfsT.js";import"./index-D3F4cwyn.js";import{C as a}from"./ControlsWithNote-LTnpivX1.js";import{D as m}from"./DocsHeader-CSpCxbB9.js";import{F as h}from"./CommandsAndQueries-DKneq4GY.js";import{C as o,D as r}from"./ActionSheet.stories-BWSitIRV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BKrgGcb8.js";import"./sys-enter-2-t67Ok8iZ.js";import"./alert-DGYqNpWm.js";import"./index-B8FjapMT.js";import"./index-F95KXh_C.js";import"./Link-DWrZ8VdK.js";import"./copy-DfLVtJdG.js";import"./copy-BMdV5CCm.js";import"./GitHub-Mark-BSK1eyWR.js";import"./TableOfContent-CwcK6kQm.js";import"./index-8sMjurJr.js";import"./index-DSENQiVR.js";import"./index-Bk8MfuNW.js";import"./index-CEhCU38B.js";import"./index-DAUv-Nz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrlG2Z_i.js";import"./addCustomCSSWithScoping-CcKa_wrj.js";import"./delete-BcYS3_de.js";import"./utils-DWNV0P4_.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
