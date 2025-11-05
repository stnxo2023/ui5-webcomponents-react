import{j as e}from"./iframe-CRwp3Tpg.js";import{useMDXComponents as s}from"./index-COIro8D8.js";import{M as d,C as o}from"./blocks-C4HsTNIO.js";import"./Tag-tfloHdXZ.js";import"./index-B8mUtBGn.js";import{C as m}from"./ControlsWithNote-BCEkc-TD.js";import{D as p}from"./DocsHeader-CApt1QLy.js";import{F as l}from"./CommandsAndQueries-BOt8E6ok.js";import{C as i,D as r,W as x}from"./Loader.stories-Bid8Xwmc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-MlnnkJju.js";import"./sys-enter-2-DNoGuffO.js";import"./alert-aDgjp5mZ.js";import"./index-C0aL9woL.js";import"./index-Cv51gsI_.js";import"./Link-Dtv1Hpbf.js";import"./copy-9dD-ODJZ.js";import"./copy-DIWKtK23.js";import"./GitHub-Mark-B_6r_Oei.js";import"./TableOfContent-Bq-3BAJF.js";import"./index-DtgT2jRs.js";import"./index-B3NhI5Qb.js";import"./index-DIEFvDQl.js";import"./index-DzYDiZvU.js";import"./index-DYA05DWY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0x12wWs.js";import"./addCustomCSSWithScoping-Dv4ZSX5E.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
