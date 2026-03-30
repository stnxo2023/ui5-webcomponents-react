import{j as t}from"./iframe-BXb_n64_.js";import{u as s,M as d,C as o}from"./blocks-9VP231tA.js";import"./Tag-CRNARXt6.js";import"./index-BL83g4Fz.js";import{C as p}from"./ControlsWithNote-D6w6Kb-X.js";import{D as m}from"./DocsHeader-BZ77PaiO.js";import{F as l}from"./Footer-DPPwB2I6.js";import"./CommandsAndQueries-BI-RA2OZ.js";import"./PageNotFound-CZrojxwO.js";import{C as i,D as r,W as x}from"./Loader.stories-C_n29Rbg.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./index-BNBy1IQK.js";import"./index-BD_xT1Nj.js";import"./Link-BUcKjx9R.js";import"./copy-CsgZl58a.js";import"./copy-BBKTKpbi.js";import"./GitHub-Mark-BVBi5bkL.js";import"./TableOfContent-CJDX4QJ8.js";import"./index-BSoVaSRp.js";import"./index-DqAHmx0d.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
`,t.jsx(m,{of:i}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(o,{of:r}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(p,{of:r}),`
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
`,t.jsx(l,{})]})}function A(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}export{A as default};
