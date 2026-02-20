import{j as e,B as m}from"./iframe-D_oMot10.js";import{useMDXComponents as a}from"./index-Cg6HnkxT.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-2cuCWctq.js";import{A as d}from"./ArgTypesWithNote-CPEdS_de.js";import{C as f}from"./ControlsWithNote-DXnp8onQ.js";import{D as M}from"./DocsHeader-f9VHbHEE.js";import{F as I}from"./CommandsAndQueries-DPkePXTz.js";import{C as o,D as r,B as i}from"./Button.stories-DiTns3O2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYuRbnft.js";import"./information-D9-yMhmx.js";import"./sys-enter-2-B1tI1-EQ.js";import"./alert-C600_lKj.js";import"./Tag-R7_VB2zh.js";import"./index-s1VP44pI.js";import"./index-DO_1WCge.js";import"./Link-9JdM6Hjv.js";import"./copy-C7-LK9Y4.js";import"./copy-D4R1-NDI.js";import"./GitHub-Mark-os5OPWIB.js";import"./TableOfContent-BFzbgAl_.js";import"./index-Ds5vSSWx.js";import"./index-3r4NxXtD.js";import"./index-DnX1qu0M.js";import"./index-DRuRCvkV.js";import"./index-1pxNHpjB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-izT7sph5.js";import"./addCustomCSSWithScoping-BPH8FgqV.js";import"./ai-rnAfbdOM.js";import"./ai-C0pfqc8O.js";import"./navigation-down-arrow-BD0SNbXx.js";import"./stop-DiWzE52q.js";import"./stop-DdIDWKCA.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-D7p8MYNj.js";import"./slim-arrow-down-Dlw-8h3-.js";import"./slim-arrow-down-DgLBVq-1.js";import"./index-B52tlBku.js";import"./index-Cx3v-CpP.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
`,e.jsx(M,{of:o,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show static code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function AIButton(props) {
  const generationIdRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<ButtonDomRef>(null);
  const [buttonState, setButtonState] = useState("generate");
  const [menuOpen, setMenuOpen] = useState(false);

  const startGeneration = () => {
    generationIdRef.current = setTimeout(() => {
      setButtonState("revise");
    }, 3000);
  };

  const handleClick: ButtonPropTypes["onClick"] = (e) => {
    const btn = e.target;

    setMenuOpen(false);
    switch (btn.state) {
      case "generate":
        setButtonState("generating");
        startGeneration();
        break;
      case "generating":
        if (generationIdRef.current) {
          clearTimeout(generationIdRef.current);
          generationIdRef.current = null;
        }
        setButtonState("generate");
        break;
      case "revise":
        setMenuOpen(true);
        break;
    }
  };

  const handleMenuItemClick: MenuPropTypes["onItemClick"] = (e) => {
    if (e.detail.text === "Regenerate") {
      setButtonState("generating");
      startGeneration();
    }
  };

  return (
    <>
      <Button
        {...props}
        onClick={handleClick}
        state={buttonState}
        ref={buttonRef}
      >
        <ButtonState name="generate" text="Generate" icon={aiIcon} />
        <ButtonState name="generating" text="Stop Generating" icon={stopIcon} />
        <ButtonState
          name="revise"
          text="Revise"
          icon={aiIcon}
          endIcon={navDownIcon}
        />
      </Button>
      {menuOpen && (
        <Menu
          opener={buttonRef.current}
          open
          onItemClick={handleMenuItemClick}
          onClose={() => {
            setMenuOpen(false);
          }}
        >
          <MenuItem text="Regenerate" />
          <MenuSeparator />
          <MenuItem text="Fix Spelling & Grammar" />
          <MenuItem text="Change Tone">
            <MenuItem text="Option 1" />
            <MenuItem text="Option 2" />
            <MenuItem text="Option 3" />
          </MenuItem>
          <MenuItem text="Adjust Length">
            <MenuItem text="Shorten text" />
            <MenuItem text="Lengthen text" />
          </MenuItem>
          <MenuItem text="Bulleted List" />
          <MenuItem text="Translate">
            <MenuItem text="English" />
            <MenuItem text="German" />
            <MenuItem text="Spanish" />
          </MenuItem>
        </Menu>
      )}
    </>
  );
}
`})})]}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(f,{of:r}),`
`,e.jsx(l,{children:u}),`
`,e.jsx(t.h2,{id:"buttonstate",children:"ButtonState"}),`
`,e.jsx(x,{of:i}),`
`,e.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,e.jsx(I,{}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function se(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{se as default};
