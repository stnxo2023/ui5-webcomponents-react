import{j as t}from"./iframe-BliOtBpf.js";import{useMDXComponents as c}from"./index-Cfm9mwpf.js";import{A as o}from"./ArgTypesWithNote-C-2vwzhM.js";import{C as l}from"./ControlsWithNote-DaUK7OUO.js";import{D as g}from"./DocsHeader-4EPeD2VX.js";import{F as x}from"./CommandsAndQueries-BFQnO0Kc.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-DFxqqk7r.js";import{C as i,D as r}from"./NavigationLayout.stories-CiC6FVJc.js";import{S as m,a as s,b as d}from"./index-DjgMzLfx.js";import{S as p}from"./chain-link-CWGngdGJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1gTXVZK.js";import"./information-0hx7iK2K.js";import"./sys-enter-2-CKBXubjR.js";import"./alert-DPJIvRdz.js";import"./Tag-slUCA2Mk.js";import"./index-Dq7D7J3c.js";import"./index-BpaxVzpl.js";import"./Link-AWzdE9bP.js";import"./copy-hXKPEzJS.js";import"./copy-Co-SMUUy.js";import"./GitHub-Mark-0htNnFEc.js";import"./TableOfContent-ByPZIom5.js";import"./index-CljUsgff.js";import"./index-DtASDt-o.js";import"./index-B5gV3DVy.js";import"./index-D6Ss-oF4.js";import"./index-riDZyvDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BuCRse4K.js";import"./addCustomCSSWithScoping-CtbnqYJf.js";import"./index-CCuK0F6N.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./menu-DVOCo-10.js";import"./home-CpdfTMnk.js";import"./calendar-MkL17gMP.js";import"./history-nRdMAz1Z.js";import"./background-C3P8OkXb.js";import"./action-settings-Bx_GqyfO.js";import"./locked-H8_XSqt-.js";import"./index-CvbInxoz.js";import"./ListItemStandard-Bfo68tSl.js";import"./ButtonBadge-B8Qg5sGR.js";import"./search-Dk-RU0SF.js";import"./overflow-BdbA-6Q1.js";import"./slim-arrow-down-DODTVyKq.js";import"./slim-arrow-down-BaX0Om3C.js";import"./i18n-defaults-Ca0KLLzw.js";import"./navigation-right-arrow-BpdCpvV-.js";import"./navigation-right-arrow-CVR_Dlxl.js";import"./navigation-down-arrow-B4INFMdI.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
`,t.jsx(g,{of:i}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(f,{of:r}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show static code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function NavigationLayoutComponent(props) {
  const [selectedContent, setSelectedContent] = useState('Home');
  const [mode, setMode] = useState(props.mode);
  const navigationLayoutRef = useRef<NavigationLayoutDomRef>(null);

  const handleSelectionChange: SideNavigationPropTypes['onSelectionChange'] = (e) => {
    setSelectedContent(e.detail.item.text);
  };

  useEffect(() => {
    setMode(props.mode);
  }, [props.mode]);

  return (
    <div style={{ position: 'relative', height: '800px' }}>
      <NavigationLayout
        {...props}
        ref={navigationLayoutRef}
        mode={mode}
        header={
          <ShellBar
            startButton={
              <Button
                icon={menuIcon}
                onClick={() => {
                  if (navigationLayoutRef.current?.isSideCollapsed()) {
                    setMode(NavigationLayoutMode.Expanded);
                  } else {
                    setMode(NavigationLayoutMode.Collapsed);
                  }
                }}
              />
            }
            primaryTitle="UI5 Web Components for React"
            secondaryTitle="The Best Run SAP"
          />
        }
        sideContent={
          <SideNavigation slot="sideContent" onSelectionChange={handleSelectionChange}>
            <SideNavigationItem text="Home" icon="home" />
            <SideNavigationGroup text="Group 1" expanded>
              <SideNavigationItem text="Item 1" icon="locate-me" expanded>
                <SideNavigationSubItem text="Sub Item 1" />
                <SideNavigationSubItem text="Sub Item 2" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 2" icon="calendar" expanded>
                <SideNavigationSubItem text="Sub Item 3" />
                <SideNavigationSubItem text="Sub Item 4" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 3" icon="activity-assigned-to-goal" expanded>
                <SideNavigationSubItem text="Sub Item 5" />
                <SideNavigationSubItem text="Sub Item 6" />
              </SideNavigationItem>
            </SideNavigationGroup>
            <SideNavigationGroup text="Group 2" expanded>
              <SideNavigationItem text="Item 4" icon="history" />
              <SideNavigationItem text="Item 5" icon="source-code" />
              <SideNavigationItem text="Item 6" icon="background" />
            </SideNavigationGroup>

            <SideNavigationItem
              slot="fixedItems"
              text="Legal"
              href="https://www.sap.com/about/legal/impressum.html"
              target="_blank"
              icon="compare"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Privacy"
              href="https://www.sap.com/about/legal/privacy.html"
              target="_blank"
              icon="locked"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Terms of Use"
              href="https://www.sap.com/terms-of-use"
              target="_blank"
              icon="document-text"
            />
          </SideNavigation>
        }
      >
        <div style={{ padding: '1rem' }}>
          <div>
            <Title>{selectedContent}</Title>
            <br />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
          </div>
        </div>
      </NavigationLayout>
    </div>
  );
}
`})})]}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:r}),`
`,t.jsx(h,{children:S}),`
`,t.jsx(e.h2,{id:"sidenavigation",children:"SideNavigation"}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(o,{metaOf:i,of:m}),`
`,t.jsx(e.h2,{id:"sidenavigationitem",children:"SideNavigationItem"}),`
`,t.jsx(a,{of:s}),`
`,t.jsx(o,{metaOf:i,of:s}),`
`,t.jsx(e.h2,{id:"sidenavigationsubitem",children:"SideNavigationSubItem"}),`
`,t.jsx(a,{of:d}),`
`,t.jsx(o,{metaOf:i,of:d}),`
`,t.jsx(e.h2,{id:"sidenavigationgroup",children:"SideNavigationGroup"}),`
`,t.jsx(a,{of:p}),`
`,t.jsx(o,{metaOf:i,of:p}),`
`,t.jsx(x,{})]})}function ft(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{ft as default};
