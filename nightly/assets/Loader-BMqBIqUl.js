import{j as t}from"./iframe-ClKZoppV.js";import{useMDXComponents as s}from"./index-BBP-HRkM.js";import{M as d,C as o}from"./blocks-C6PUfAN7.js";import"./Tag-CnAKe81V.js";import"./index-Brz6Jamn.js";import{C as m}from"./ControlsWithNote-BJv1bkXz.js";import{D as p}from"./DocsHeader-aD31_w4z.js";import{F as l}from"./Footer-BJ8-oElo.js";import"./CommandsAndQueries-BSg7r23V.js";import"./PageNotFound-DkMfdMip.js";import{C as i,D as r,W as x}from"./Loader.stories-CsXCbf-z.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2rgVrmf.js";import"./sys-enter-2-zNCrvlrA.js";import"./alert-DLSg1FPP.js";import"./index-CEU-nQxX.js";import"./index-Tx9EfJkS.js";import"./Link-DLU4uHoZ.js";import"./copy-zGSFbqtO.js";import"./copy-rX2zRtcl.js";import"./GitHub-Mark-DlD1eMnp.js";import"./TableOfContent-sHwgKy8t.js";import"./index-kUQXQip-.js";import"./index-Dnwis2Yb.js";import"./index-BFw8ePED.js";import"./index-W9ERffOR.js";import"./index-DG_kdwr6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJ7j91qP.js";import"./addCustomCSSWithScoping-5Po78CSL.js";import"./Illustrations-CjXAC4Lw.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
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
