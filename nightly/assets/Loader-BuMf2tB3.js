import{j as e}from"./iframe-D_CdPJGB.js";import{useMDXComponents as s}from"./index-CU-ptlAE.js";import{M as d,C as o}from"./blocks-CCtPO9cz.js";import"./Tag-Bp64ITEl.js";import"./index-DvHG4NxR.js";import{C as m}from"./ControlsWithNote-FhkELdDw.js";import{D as p}from"./DocsHeader-w2XQAh8-.js";import{F as l}from"./CommandsAndQueries-mK8OCXMD.js";import{C as i,D as r,W as x}from"./Loader.stories-Q-LchBLw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D72qH7xY.js";import"./sys-enter-2-hXCOpqjq.js";import"./alert-DtWkY9xa.js";import"./index-C4kKrQ_A.js";import"./index-BjO8dbVD.js";import"./Link-D2G2Fur_.js";import"./copy-CuTYOvVJ.js";import"./copy-BADAjupU.js";import"./GitHub-Mark-CohA4-HF.js";import"./TableOfContent-TJ52XTPG.js";import"./index-CZ_x4nC8.js";import"./index-px1zqH5W.js";import"./index-rQn5W4JD.js";import"./index-BtAl8RaU.js";import"./index-Bp0lp_Bf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CAznTGJj.js";import"./addCustomCSSWithScoping-CCFJUFLD.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
