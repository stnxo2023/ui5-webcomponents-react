import{j as e}from"./iframe-DVV5VFB7.js";import{useMDXComponents as s}from"./index-qyzUrO0d.js";import{M as d,C as o}from"./blocks-D1E9_7c3.js";import"./Tag-CQyymDzh.js";import"./index-Bn7PyzsE.js";import{C as m}from"./ControlsWithNote-Cyp5Omba.js";import{D as p}from"./DocsHeader-C5HE4F6W.js";import{F as l}from"./CommandsAndQueries-lBZKGmp7.js";import{C as i,D as r,W as x}from"./Loader.stories-B7yzv5f2.js";import"./preload-helper-PPVm8Dsz.js";import"./information-rc4de9km.js";import"./sys-enter-2-DXmpS6_D.js";import"./alert-DByE3GtL.js";import"./index-DCIIs4BW.js";import"./index-gDTG9hvV.js";import"./Link-DfNmKUcn.js";import"./copy-C0qjFs7Y.js";import"./copy-Cn3WomF2.js";import"./GitHub-Mark-DFg714Wy.js";import"./TableOfContent-BFe6IJBY.js";import"./index-Dqdoz1dV.js";import"./index-BkDm8D7N.js";import"./index-gNtvK5Wx.js";import"./index-ZnLduBLK.js";import"./index-BHIms4DS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_xwBI5c.js";import"./addCustomCSSWithScoping-DOzeCYXW.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
