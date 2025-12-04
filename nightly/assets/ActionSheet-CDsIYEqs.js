import{j as n}from"./iframe-DE39xjY3.js";import{useMDXComponents as i}from"./index-B1qSHwoi.js";import{M as p,C as c}from"./blocks-Cj7tOVqz.js";import"./Tag-BcxJDVC2.js";import"./index-C8AzPoWi.js";import{C as a}from"./ControlsWithNote-B9Ky9-J_.js";import{D as m}from"./DocsHeader-MzP4I_Aj.js";import{F as h}from"./CommandsAndQueries-wC1q0WhV.js";import{C as o,D as r}from"./ActionSheet.stories-x1kP7DG0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D52A35LG.js";import"./sys-enter-2-7R5MTao8.js";import"./alert-jxZm3lXE.js";import"./index-BUS86rTR.js";import"./index-BytuhZWp.js";import"./Link-hO4SGyLs.js";import"./copy-D-1f3Jwc.js";import"./copy-SEjk-khs.js";import"./GitHub-Mark-BxMfSNYU.js";import"./TableOfContent-DgJFK8la.js";import"./index-Dsw7NAug.js";import"./index-BNYAB6MW.js";import"./index-HOUf-EPf.js";import"./index-Di0pge-x.js";import"./index-Crm_KYfs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-k5eDoZ.js";import"./addCustomCSSWithScoping-DCdxMV4u.js";import"./delete-T1M_hPVY.js";import"./utils-C2TjvMrQ.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
