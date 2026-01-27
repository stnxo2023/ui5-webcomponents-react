import{j as e}from"./iframe-CB_qmYI8.js";import{useMDXComponents as s}from"./index-CUbKt2T4.js";import{M as d,C as o}from"./blocks-DzH1842d.js";import"./Tag-BYvfvCLi.js";import"./index-BfAPJluR.js";import{C as m}from"./ControlsWithNote-C2ZegKsl.js";import{D as p}from"./DocsHeader-Cjs_SKtf.js";import{F as l}from"./CommandsAndQueries-HFp-4-55.js";import{C as i,D as r,W as x}from"./Loader.stories-DVPoGCHE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CRpELSoZ.js";import"./sys-enter-2-DeQtcYtY.js";import"./alert-Bc8RvQjV.js";import"./index-03LyQe5H.js";import"./index-DE9gqn8Y.js";import"./Link-BRHRm_Z2.js";import"./copy-Cml5DxfC.js";import"./copy-DF2Z1I-X.js";import"./GitHub-Mark-B8j7QlA7.js";import"./TableOfContent-ANMeDUHZ.js";import"./index-R89IEGRw.js";import"./index-SxWu56C4.js";import"./index-C0flI_9Q.js";import"./index-At4nCxiD.js";import"./index-6WmsPmX0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClKIXNm7.js";import"./addCustomCSSWithScoping-9v1tewFq.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(p,{of:i}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const LoaderComponent = () => {
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
`,e.jsx(l,{})]})}function R(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{R as default};
