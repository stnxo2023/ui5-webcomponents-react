import{j as e}from"./iframe-DCh7S_7o.js";import{useMDXComponents as s}from"./index-CQ2Rgf0f.js";import{M as d,C as o}from"./blocks-DmZmqlp_.js";import"./Tag-CZuGcFNN.js";import"./index-C5sgOYh1.js";import{C as m}from"./ControlsWithNote-CnU_Z6uv.js";import{D as p}from"./DocsHeader-DrTYK_rH.js";import{F as l}from"./CommandsAndQueries-BHuSnwTn.js";import{C as i,D as r,W as x}from"./Loader.stories-D43u2aav.js";import"./preload-helper-PPVm8Dsz.js";import"./information-FYwlptxJ.js";import"./sys-enter-2-CNa4r-Sw.js";import"./alert-Bj_hkuex.js";import"./index-gCdJvzAZ.js";import"./index-BzGBt6gL.js";import"./Link-DOaKYpM4.js";import"./copy-CtWnGcSg.js";import"./copy-BrUTFvSK.js";import"./GitHub-Mark-DXFulQjb.js";import"./TableOfContent-BF-a6WsZ.js";import"./index-DvoAW6NG.js";import"./index-BwuMWpwU.js";import"./index-CqXebPST.js";import"./index-CKcNqeBZ.js";import"./index-Gt-7HKkD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDzt8G5a.js";import"./addCustomCSSWithScoping-DaHSAyiF.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
