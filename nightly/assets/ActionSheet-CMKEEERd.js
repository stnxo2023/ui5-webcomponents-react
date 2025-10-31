import{j as n}from"./iframe-CZzIPN_f.js";import{useMDXComponents as i}from"./index-BN7772Ln.js";import{M as p,C as c}from"./blocks-CpAefQ0F.js";import"./Tag-B8_XKizL.js";import"./index-CYLMYqU3.js";import{C as a}from"./ControlsWithNote-D0D6e7_T.js";import{D as m}from"./DocsHeader-DscAge5I.js";import{F as h}from"./CommandsAndQueries-C_V-vyfI.js";import{C as o,D as r}from"./ActionSheet.stories-C1hBgySd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-6G8KrWG0.js";import"./sys-enter-2-Blj9-cAn.js";import"./alert-BtpU_SH9.js";import"./index-TDczsIb0.js";import"./index-CiiSHxVf.js";import"./Link-Fkmlwa07.js";import"./copy-CkuztRfR.js";import"./copy-CFuW58eh.js";import"./GitHub-Mark-D1EJCevk.js";import"./TableOfContent-BiAzmVZ5.js";import"./index-RbSpX7Av.js";import"./index-RQjAfURV.js";import"./index-CCj5LB1a.js";import"./index-DMvyX2go.js";import"./index-c-1N-cez.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmB6T7HK.js";import"./addCustomCSSWithScoping-DaZxNPdr.js";import"./delete-BMEp91Mc.js";import"./utils-B4X6J-Z9.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
