import{j as t}from"./iframe-E6MBpCAt.js";import{useMDXComponents as s}from"./index-BRlgPkCG.js";import{M as d,C as o}from"./blocks-WvceCUw-.js";import"./Tag-QOlCM1ZS.js";import"./index-BJtwwTA3.js";import{C as m}from"./ControlsWithNote-Ea5pYw4K.js";import{D as p}from"./DocsHeader-Bs9YoZo4.js";import{F as l}from"./Footer-BLsFxTJ-.js";import"./CommandsAndQueries-8ny61uxe.js";import"./PageNotFound-yO0YjSZG.js";import{C as i,D as r,W as x}from"./Loader.stories-B3issgN4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CRaf149E.js";import"./sys-enter-2-61rHxTWm.js";import"./alert-CCfxXDIv.js";import"./index-Cae4RJ4g.js";import"./index-D9THgfPW.js";import"./Link-BKpa2-tj.js";import"./copy-bVD5Enlh.js";import"./copy-fO140460.js";import"./GitHub-Mark-CK8hZxZv.js";import"./TableOfContent-ClshfEpL.js";import"./index-B2yJC31G.js";import"./index-Bbo3k75A.js";import"./index-CzOa4uz9.js";import"./index-D8EadMTD.js";import"./index-C4VaG2ve.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AugRixR5.js";import"./addCustomCSSWithScoping-B5scap8C.js";import"./Illustrations-AQfBdOwC.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
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
