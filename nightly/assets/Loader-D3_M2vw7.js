import{j as t}from"./iframe-CJJIsx6F.js";import{u as s,M as d,C as o}from"./blocks-ChaXMZP5.js";import"./Tag-n7rERTqv.js";import"./index-C3WbBMZ1.js";import{C as p}from"./ControlsWithNote-C517f0VS.js";import{D as m}from"./DocsHeader-UlcWAO4j.js";import{F as l}from"./Footer-Ce6by-oH.js";import"./CommandsAndQueries-B6BpCs-M.js";import"./PageNotFound-BtSzGq-G.js";import{C as i,D as r,W as x}from"./Loader.stories-DDYgyQyy.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHzv4rEq.js";import"./sys-enter-2-DxE2QBT2.js";import"./alert-BgdGP7JP.js";import"./index-Comgbi1p.js";import"./index-8nS7lmoC.js";import"./Link-GrYjVq0T.js";import"./copy-C35nr0mJ.js";import"./copy-CS6obn2m.js";import"./GitHub-Mark-C9rLi2lG.js";import"./TableOfContent-CASxHgew.js";import"./index-DqWhINqr.js";import"./index-qLq9B_00.js";import"./index-BAPIP2EX.js";import"./index-CiQC7Mcr.js";import"./index-DWaBFkkI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CLM_ccAB.js";import"./addCustomCSSWithScoping-DH49qo7-.js";import"./Illustrations-BhBoWAi4.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
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
