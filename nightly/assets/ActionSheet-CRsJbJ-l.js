import{j as n}from"./iframe-OU-rKGVl.js";import{useMDXComponents as i}from"./index-BdFoQaN_.js";import{M as p,C as c}from"./blocks-90C6s9DB.js";import"./Tag-BGeGdyvC.js";import"./index-CvYMziHu.js";import{C as a}from"./ControlsWithNote-DsttCYtU.js";import{D as m}from"./DocsHeader-BYXcCq73.js";import{F as h}from"./CommandsAndQueries-1YsKNX6u.js";import{C as o,D as r}from"./ActionSheet.stories-DFzd4NDL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJNA9m3t.js";import"./sys-enter-2-Cr3cjNlh.js";import"./alert-Czqp44ew.js";import"./index-CvIaP9X3.js";import"./index-BCzS-sMX.js";import"./Link-DUV5jdr_.js";import"./copy-CLHqn6KR.js";import"./copy-ukTvQIks.js";import"./GitHub-Mark-D7jy9NLm.js";import"./TableOfContent-ChbIOij0.js";import"./index-BlWEaWz4.js";import"./index-B5S-I-wQ.js";import"./index-Cy3EQ66_.js";import"./index-M6X6hbjk.js";import"./index-CvP3_iIG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DeGn29mr.js";import"./addCustomCSSWithScoping-BqWgeVkc.js";import"./delete-_xztDnX7.js";import"./utils-C0mg2yQM.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
