import{j as e}from"./iframe-DQUr2w9e.js";import{useMDXComponents as s}from"./index-uEfBZmVP.js";import{M as d,C as o}from"./blocks-CTU8TRaT.js";import"./Tag-CGtAgsci.js";import"./index-CHsUWkTe.js";import{C as m}from"./ControlsWithNote-DLcvzWYI.js";import{D as p}from"./DocsHeader-67QXRaFL.js";import{F as l}from"./CommandsAndQueries-BHqFNGC1.js";import{C as i,D as r,W as x}from"./Loader.stories-cr2MFEoq.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BjEP1Brt.js";import"./sys-enter-2-ByVlGYkM.js";import"./alert-B-w-1j20.js";import"./index-4ddJk1R_.js";import"./index-BtkqIySi.js";import"./Link-BHxA_VPp.js";import"./copy-BP8P6B-q.js";import"./copy-DGFXVa9Z.js";import"./GitHub-Mark-D0wVycYe.js";import"./TableOfContent-DJz6oSi_.js";import"./index-BbVmwePH.js";import"./index-2aCTTGoH.js";import"./index-CSO1LyL1.js";import"./index-B4uSF3Nb.js";import"./index-CNdVS1MW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpPxZFHh.js";import"./addCustomCSSWithScoping-CYkIrudw.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
