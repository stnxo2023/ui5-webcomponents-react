import{j as e,B as m}from"./iframe-4UX9zVtN.js";import{useMDXComponents as a}from"./index-BBCkKRvO.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BFxvjNAv.js";import{A as d}from"./ArgTypesWithNote-lIv6H4xu.js";import{C as f}from"./ControlsWithNote-HRuakJ4J.js";import{D as M}from"./DocsHeader-DMgRCPMn.js";import{F as I}from"./CommandsAndQueries-DudJ8lrA.js";import{C as o,D as r,B as i}from"./Button.stories-m28oJll1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BXHIuf-D.js";import"./information-WWzzOZjz.js";import"./sys-enter-2-CaiZT1Nw.js";import"./alert-G68zeMJP.js";import"./Tag-B3FvlNgH.js";import"./index-oGM8b9YF.js";import"./index-DctXwSyI.js";import"./Link-fA-SeXAj.js";import"./copy-C0JILoSE.js";import"./copy-Cyt5Uff4.js";import"./GitHub-Mark-CkNvDNdk.js";import"./TableOfContent-Ceb6N6LS.js";import"./index-S5ZW1bjA.js";import"./index-CXoNptYK.js";import"./index-C3GdV3vE.js";import"./index-De4g9Au_.js";import"./index-DnrxmRVZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-rUq1jEzN.js";import"./addCustomCSSWithScoping-DCDZu8w8.js";import"./ai-pUBExzan.js";import"./ai-DGxjSdVu.js";import"./navigation-down-arrow-BFC6z2qR.js";import"./stop-VNQbH18V.js";import"./stop-DFBflPGD.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-Alo5Po7E.js";import"./slim-arrow-down-6GOcwo6b.js";import"./slim-arrow-down-BheOSzby.js";import"./index-BEddrCSh.js";import"./index-Cn-Oc7EQ.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
