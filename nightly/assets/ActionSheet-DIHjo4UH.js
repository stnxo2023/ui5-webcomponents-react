import{j as n}from"./iframe-D-ZP0dY4.js";import{u as i,M as p,C as c}from"./blocks-DdKopPSC.js";import"./Tag-CNlwwDmZ.js";import"./index-C04kZKw9.js";import{C as a}from"./ControlsWithNote-BIyz1_Xt.js";import{D as m}from"./DocsHeader-MhexG2vZ.js";import{F as h}from"./Footer-BLTkp7nE.js";import"./CommandsAndQueries-BDnj74c9.js";import"./PageNotFound-DiPPX7Ze.js";import{C as o,D as r}from"./ActionSheet.stories-DEZXyQnv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BKIP_Ra_.js";import"./sys-enter-2-vX0Cm-qe.js";import"./alert-Bu79oBCI.js";import"./index-Dx3fp6V7.js";import"./index-BAH7VHrp.js";import"./Link-06g1SNw0.js";import"./copy-DEZgQs9x.js";import"./copy-HW_Kxlr2.js";import"./GitHub-Mark-Cxk1q0bN.js";import"./TableOfContent--BhlVRbW.js";import"./index-Tnz3nQrD.js";import"./index-U3Dsw_H6.js";import"./index-CF2Hkn6J.js";import"./index-BAothMF0.js";import"./index-eZWdMAeg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxeCNWRQ.js";import"./addCustomCSSWithScoping-DSa3TmU8.js";import"./Illustrations-DQsCRA8v.js";import"./i18n-defaults-CFWtSmu6.js";import"./delete-DE6k9FGx.js";import"./utils-CIzQ8GjY.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
`,n.jsx(h,{})]})}function z(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{z as default};
