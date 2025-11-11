import{j as e}from"./iframe-BzFFzKD_.js";import{useMDXComponents as s}from"./index-CZpqZls8.js";import{M as d,C as o}from"./blocks-Dfn8aDA2.js";import"./Tag-Du7Hh6Mn.js";import"./index-BnnU1inb.js";import{C as m}from"./ControlsWithNote-BkyUdb-g.js";import{D as p}from"./DocsHeader-iVh68d6y.js";import{F as l}from"./CommandsAndQueries-98tICPmn.js";import{C as i,D as r,W as x}from"./Loader.stories-C1GB9w0z.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ItcJqxXi.js";import"./sys-enter-2-Y1mMTef-.js";import"./alert-BnuKtxZV.js";import"./index-BkRjFulW.js";import"./index-BTogfKzr.js";import"./Link-CMUJ7C_U.js";import"./copy-BLSEYFZK.js";import"./copy-CYosl6Ho.js";import"./GitHub-Mark-Ba76Xl_0.js";import"./TableOfContent-DvvjzS1z.js";import"./index-s8GS1odQ.js";import"./index-CjTZ8O9p.js";import"./index-DDykH0pl.js";import"./index-DXrTedKP.js";import"./index-DWEvXFon.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUUeXWCw.js";import"./addCustomCSSWithScoping-26WgEUoU.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
