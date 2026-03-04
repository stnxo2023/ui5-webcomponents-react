import{j as e,B as m}from"./iframe-BliOtBpf.js";import{useMDXComponents as a}from"./index-Cfm9mwpf.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-DFxqqk7r.js";import{A as d}from"./ArgTypesWithNote-C-2vwzhM.js";import{C as f}from"./ControlsWithNote-DaUK7OUO.js";import{D as M}from"./DocsHeader-4EPeD2VX.js";import{F as I}from"./CommandsAndQueries-BFQnO0Kc.js";import{C as o,D as r,B as i}from"./Button.stories-BYiDFdvs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1gTXVZK.js";import"./information-0hx7iK2K.js";import"./sys-enter-2-CKBXubjR.js";import"./alert-DPJIvRdz.js";import"./Tag-slUCA2Mk.js";import"./index-Dq7D7J3c.js";import"./index-BpaxVzpl.js";import"./Link-AWzdE9bP.js";import"./copy-hXKPEzJS.js";import"./copy-Co-SMUUy.js";import"./GitHub-Mark-0htNnFEc.js";import"./TableOfContent-ByPZIom5.js";import"./index-CljUsgff.js";import"./index-DtASDt-o.js";import"./index-B5gV3DVy.js";import"./index-D6Ss-oF4.js";import"./index-riDZyvDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BuCRse4K.js";import"./addCustomCSSWithScoping-CtbnqYJf.js";import"./ai-bQ0fZYdT.js";import"./ai-Ciq2AbAh.js";import"./navigation-down-arrow-B4INFMdI.js";import"./stop-DV5Rzdsa.js";import"./stop-DhvqgoQ7.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-CG03E_OY.js";import"./slim-arrow-down-DODTVyKq.js";import"./slim-arrow-down-BaX0Om3C.js";import"./index-B3aEqtOG.js";import"./index-CxPl1cz3.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
