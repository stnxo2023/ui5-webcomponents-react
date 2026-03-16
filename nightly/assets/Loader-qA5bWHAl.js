import{j as t}from"./iframe-B7xuoxGk.js";import{useMDXComponents as s}from"./index-D6aSzRGN.js";import{M as d,C as o}from"./blocks-DZ0Vo0vM.js";import"./Tag-CtaADOFc.js";import"./index-BzZxDoNe.js";import{C as m}from"./ControlsWithNote-B_1zPi3p.js";import{D as p}from"./DocsHeader-BbOLILti.js";import{F as l}from"./Footer--uD18Qhj.js";import"./CommandsAndQueries-DKcdQNlV.js";import"./PageNotFound-DygNwEfd.js";import{C as i,D as r,W as x}from"./Loader.stories-Bjy5IsiK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BW_uN0gP.js";import"./sys-enter-2-BoXj1fRr.js";import"./alert-Cl-xvHRs.js";import"./index-DmGPBpXp.js";import"./index-BXMXe_Dr.js";import"./Link-YW7Wqeu4.js";import"./copy-RUh9U7xa.js";import"./copy-h55QeB4j.js";import"./GitHub-Mark-BWr1adaM.js";import"./TableOfContent-DJgrMBhW.js";import"./index-B7nFcBs2.js";import"./index-B_T64Hn2.js";import"./index-wxY5XpWW.js";import"./index-D_A15Zs0.js";import"./index-Bimscpqo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZFeJY_e.js";import"./addCustomCSSWithScoping-1uVBaclk.js";import"./Illustrations-w0lfALHe.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
`,t.jsx(p,{of:i}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(o,{of:r}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(m,{of:r}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,t.jsx(o,{of:x}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const LoaderComponent = () => {
  const initialText =
    'This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.';
  const [text, setText] = useState(initialText);
  const [loading, setLoading] = useState(false);
  const onHeaderClick = () => {
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setText((prev) => (prev === initialText ? 'Updated (⌐■_■)' : initialText));
        setLoading(false);
      }, 5000);
    }
  }, [loading]);
  return (
    <Card
      header={
        <CardHeader
          titleText="Click the header to update the text below."
          interactive
          avatar={<Icon name="activate" />}
          onClick={onHeaderClick}
        />
      }
      style={{ width: '400px' }}
    >
      <FlexBox direction={FlexBoxDirection.Column}>
        {loading && <Loader />}
        <Text style={spacing.sapUiContentPadding}>{text}</Text>
      </FlexBox>
    </Card>
  );
};
`})}),`
`,t.jsx(l,{})]})}function G(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}export{G as default};
