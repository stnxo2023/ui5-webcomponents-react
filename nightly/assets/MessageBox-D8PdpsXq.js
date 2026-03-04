import{j as n}from"./iframe-BCeV4J61.js";import{useMDXComponents as r}from"./index-DQSXUrY-.js";import{M as a,C as s}from"./blocks-BaqdfAa9.js";import"./Tag-Bzl_4yyv.js";import"./index-DSCCKcvn.js";import{C as l}from"./ControlsWithNote-Bbo9Mum3.js";import{D as p}from"./DocsHeader-BEqeoGp7.js";import{F as d}from"./CommandsAndQueries-BMt6Du51.js";import{C as t,D as i,W as m}from"./MessageBox.stories-_75zc9VN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DsxmrLjJ.js";import"./sys-enter-2-DTJ11PLs.js";import"./alert-BPfUUxXP.js";import"./index-MH0uXub1.js";import"./index-CTun36xm.js";import"./Link-C83i_H7y.js";import"./copy-BUUqBpbk.js";import"./copy-BLLS_Koh.js";import"./GitHub-Mark-DAbMFpB8.js";import"./TableOfContent-BjaZyA9z.js";import"./index-D6AOhQcP.js";import"./index-BqI0DRaf.js";import"./index-BaMmnI_0.js";import"./index-Dd7n1xMP.js";import"./index-C_9CrSf5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xuzVGY3l.js";import"./addCustomCSSWithScoping-Bz6BhAjV.js";function c(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:t}),`
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
