import{j as n}from"./iframe-CTCL6F1r.js";import{useMDXComponents as r}from"./index-COtiMl_W.js";import{M as a,C as s}from"./blocks-BWrgTR_X.js";import"./Tag-BL5Qfzs7.js";import"./index-DN-3xlKC.js";import{C as l}from"./ControlsWithNote-BbSbV3TH.js";import{D as p}from"./DocsHeader-DnQu7owR.js";import{F as m}from"./Footer-DeTYP8-R.js";import"./CommandsAndQueries-BsPL36Z9.js";import"./PageNotFound-D_xGTPNz.js";import{C as t,D as i,W as d}from"./MessageBox.stories-D3JjNRBN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CiEkIJMA.js";import"./sys-enter-2-Cm5ZOXv2.js";import"./alert-CwDd6vfH.js";import"./index-9E9I64Wt.js";import"./index-BzwM6I24.js";import"./Link-A2IdBIvD.js";import"./copy-DGL6Pu-r.js";import"./copy-DEpsQlxb.js";import"./GitHub-Mark-yKvhTSPN.js";import"./TableOfContent-C2y7XBBL.js";import"./index-D_vdDgjG.js";import"./index-DWmGRAcl.js";import"./index-CeDd6fzK.js";import"./index-Dj3jefRS.js";import"./index-ByW0PFuk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bj5cLhE3.js";import"./addCustomCSSWithScoping-Bp0u_2pD.js";import"./Illustrations-GQ99oYm_.js";import"./i18n-defaults-CFWtSmu6.js";function c(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:t}),`
`,n.jsx(p,{of:t}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(s,{of:i}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(l,{of:i}),`
`,n.jsx(e.h2,{id:"opening-and-closing-messageboxes",children:"Opening and Closing MessageBoxes"}),`
`,n.jsxs(e.p,{children:["You can open and close the ",n.jsx(e.code,{children:"MessageBox"})," with the ",n.jsx(e.code,{children:"open"})," prop."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," ",n.jsx(e.code,{children:"onClose"})," is either called by clicking on one of the action buttons in the footer or by pressing the ",n.jsx(e.code,{children:"ESC"})," key."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox open={open} onClose={handleClose}>
        Content
      </MessageBox>
    </>
  );
};
`})}),`
`,n.jsx(e.h2,{id:"accessing-actions-in-the-onclose-callback",children:"Accessing actions in the onClose callback"}),`
`,n.jsxs(e.p,{children:["To add some logic to the respective actions you can use first parameter of the ",n.jsx(e.code,{children:"onClose"})," event handler which contains the name of the clicked action."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  // in case the MessageBox was closed by pressing \`ESC\`, \`action\` will be undefined and \`escapedPressed\` will be true.
  const handleClose = (action, escapedPressed) => {
    if (escapedPressed) {
      // escape button was pressed
    } else if (action === MessageBoxAction.OK) {
      // do something on "Ok" button click
    } else if (action === 'Custom Action') {
      // do something on "Custom Action" click
    } else {
      // do something on "Cancel" or "Abort" button click
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox
        open={open}
        onClose={handleClose}
        actions={[MessageBoxAction.OK, 'Custom Action', MessageBoxAction.Cancel, MessageBoxAction.Abort]}
      >
        Content
      </MessageBox>
    </>
  );
};
`})}),`
`,n.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"messagebox-with-custom-actions",children:"MessageBox with custom actions"}),`
`,n.jsx(s,{of:d}),`
`,n.jsx(m,{})]})}function z(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(c,{...o})}):c(o)}export{z as default};
