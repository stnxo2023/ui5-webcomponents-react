import{j as e}from"./iframe-DeMwMmGx.js";import{useMDXComponents as s}from"./index-CWwj9Mnl.js";import{M as d,C as o}from"./blocks-8D0p5thu.js";import"./Tag-CJlss1uo.js";import"./index-fzrObdgv.js";import{C as m}from"./ControlsWithNote--Y171OS7.js";import{D as p}from"./DocsHeader-1qlZPebp.js";import{F as l}from"./CommandsAndQueries-BBLmRDsb.js";import{C as i,D as r,W as x}from"./Loader.stories-B4PMwwQm.js";import"./preload-helper-PPVm8Dsz.js";import"./information-IgIWD04z.js";import"./sys-enter-2-B6dBkbbN.js";import"./alert-DXbxKJCI.js";import"./index-DwA6oYWp.js";import"./index-CqRETC9D.js";import"./Link-DuK3KTb6.js";import"./copy-D4ttHYhx.js";import"./copy-BgdiHhBm.js";import"./GitHub-Mark-BoPYVYSH.js";import"./TableOfContent-C7YYhWI1.js";import"./index-DaGO4DII.js";import"./index-CvQAJVIm.js";import"./index-x-nhhmJ1.js";import"./index-QSmrzR-p.js";import"./index-C3DV1EGu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ0_IZyX.js";import"./addCustomCSSWithScoping-DmQSYZoL.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
