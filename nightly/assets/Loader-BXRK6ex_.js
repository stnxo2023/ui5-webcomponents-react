import{j as t}from"./iframe-bao9qRDH.js";import{useMDXComponents as s}from"./index-D58rFl3P.js";import{M as d,C as o}from"./blocks-uUz_WETG.js";import"./Tag-DnPLRNDs.js";import"./index-B3NnTsyp.js";import{C as m}from"./ControlsWithNote-B5-P5vcT.js";import{D as p}from"./DocsHeader-FxRbQzqR.js";import{F as l}from"./Footer-WVPZdxr3.js";import"./CommandsAndQueries-Bg8yb33a.js";import"./PageNotFound-sLpD2w2i.js";import{C as i,D as r,W as x}from"./Loader.stories-DH5PuCrO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DbPZ0LCP.js";import"./sys-enter-2-Ch2YqKTp.js";import"./alert-CeM8CijD.js";import"./index-CwfO5OAT.js";import"./index-DPEMBgxp.js";import"./Link-ZWtIcHaY.js";import"./copy-DUEvZFUb.js";import"./copy-jfQcw6pd.js";import"./GitHub-Mark-tOKz_pt5.js";import"./TableOfContent-CharJQun.js";import"./index-D32QYjx2.js";import"./index-5JMcfQSp.js";import"./index-BNO-qx4N.js";import"./index-Dl2g3tcZ.js";import"./index-DOBS9bga.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L1xKvRVU.js";import"./addCustomCSSWithScoping-D0v__xyi.js";import"./Illustrations-BL_lLuOy.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
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
