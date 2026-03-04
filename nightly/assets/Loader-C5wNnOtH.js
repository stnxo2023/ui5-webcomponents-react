import{j as e}from"./iframe-BCeV4J61.js";import{useMDXComponents as s}from"./index-DQSXUrY-.js";import{M as d,C as o}from"./blocks-BaqdfAa9.js";import"./Tag-Bzl_4yyv.js";import"./index-DSCCKcvn.js";import{C as m}from"./ControlsWithNote-Bbo9Mum3.js";import{D as p}from"./DocsHeader-BEqeoGp7.js";import{F as l}from"./CommandsAndQueries-BMt6Du51.js";import{C as i,D as r,W as x}from"./Loader.stories-BIHJnHnO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DsxmrLjJ.js";import"./sys-enter-2-DTJ11PLs.js";import"./alert-BPfUUxXP.js";import"./index-MH0uXub1.js";import"./index-CTun36xm.js";import"./Link-C83i_H7y.js";import"./copy-BUUqBpbk.js";import"./copy-BLLS_Koh.js";import"./GitHub-Mark-DAbMFpB8.js";import"./TableOfContent-BjaZyA9z.js";import"./index-D6AOhQcP.js";import"./index-BqI0DRaf.js";import"./index-BaMmnI_0.js";import"./index-Dd7n1xMP.js";import"./index-C_9CrSf5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xuzVGY3l.js";import"./addCustomCSSWithScoping-Bz6BhAjV.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
