import{j as e}from"./iframe-CRoIzMtp.js";import{useMDXComponents as s}from"./index-uepxEeS1.js";import{M as d,C as o}from"./blocks-BWnl8hC4.js";import"./Tag-pVHInn9_.js";import"./index-l4qALITX.js";import{C as m}from"./ControlsWithNote-B074C6wz.js";import{D as p}from"./DocsHeader-BtNALTqX.js";import{F as l}from"./CommandsAndQueries-tg7iHgNo.js";import{C as i,D as r,W as x}from"./Loader.stories-CXrzeAh6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DT5Qd4to.js";import"./sys-enter-2-DutWnZ3I.js";import"./alert-D-9oczO0.js";import"./index-BY3Vu1_E.js";import"./index-83H_WNAi.js";import"./Link-ByRh7pJY.js";import"./copy-CuZEUVA0.js";import"./copy-D8-Me-o2.js";import"./GitHub-Mark-BMfoN6Yu.js";import"./TableOfContent-CzcYt69w.js";import"./index-C8wLfWwH.js";import"./index-BWA_OWVW.js";import"./index-DCZY0XoF.js";import"./index-BGCNx8iW.js";import"./index-Cq7XEcI3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbjPHeWw.js";import"./addCustomCSSWithScoping-DJ9mEG-L.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
