import{j as n}from"./iframe-Brff1rmP.js";import{useMDXComponents as r}from"./index-CqBWQ9Zx.js";import{M as a,C as s}from"./blocks-Cx2b2NzS.js";import"./Tag-CO6ENRz9.js";import"./index-DlA7--5Z.js";import{C as l}from"./ControlsWithNote-Dryrg7rF.js";import{D as p}from"./DocsHeader-BQeKNX3t.js";import{F as d}from"./CommandsAndQueries-Z2F9olV7.js";import{C as t,D as i,W as m}from"./MessageBox.stories-B1EK21Qt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cs5lMjWh.js";import"./sys-enter-2-D0GbakMF.js";import"./alert-DvXA8o8i.js";import"./index-C7l_yPP_.js";import"./index-DYmdKmkq.js";import"./Link-CnNfKrga.js";import"./copy-DTNRA_Dg.js";import"./copy-Bv1OuOcO.js";import"./GitHub-Mark-mz3YWYis.js";import"./TableOfContent-B_7Wp9mr.js";import"./index-Cl8f3le-.js";import"./index-GNhj6rYz.js";import"./index-CHjRsrmQ.js";import"./index-BM_H4FxE.js";import"./index-SsKZpktE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hZd9oRLF.js";import"./addCustomCSSWithScoping-DWThNXxY.js";function c(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:t}),`
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
`,n.jsx(s,{of:m}),`
`,n.jsx(d,{})]})}function R(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(c,{...o})}):c(o)}export{R as default};
