import{j as t}from"./iframe-u8FS7fYy.js";import{useMDXComponents as c}from"./index-C5mdpSHf.js";import{A as o}from"./ArgTypesWithNote-CdVVwD0E.js";import{C as l}from"./ControlsWithNote-BB_y-Ms5.js";import{D as g}from"./DocsHeader-By-_ltcA.js";import{F as x}from"./CommandsAndQueries-q_IHoPaq.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-CA6IPYk4.js";import{C as i,D as r}from"./NavigationLayout.stories-BS6dCjbT.js";import{S as m,a as s,b as d}from"./index-CAH2YAec.js";import{S as p}from"./chain-link-BDeWsuX4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-feIb_zWP.js";import"./information-eayia0M9.js";import"./sys-enter-2-Bq8G42J8.js";import"./alert-C2jJRi0I.js";import"./Tag-DslDE0Bb.js";import"./index-39vhHnbo.js";import"./index-Dt8N5TZZ.js";import"./Link-B1qI_6K5.js";import"./copy-Dg0wNPun.js";import"./copy-DnscT9w9.js";import"./GitHub-Mark-CxXEfG9N.js";import"./TableOfContent-LdXXrtdu.js";import"./index-Dm5-M5Tp.js";import"./index-BLjc-MlZ.js";import"./index-B2lRXwRR.js";import"./index-Ck97t6iE.js";import"./index-Cr0S2U_P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VZfInv7D.js";import"./addCustomCSSWithScoping-Bi-KBOqo.js";import"./index-DUKJDVlK.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./menu-BPK_Utj3.js";import"./home-Bipgwdwt.js";import"./calendar-DgOWV1U3.js";import"./history-Cc0R2YCp.js";import"./background-Sustkyhj.js";import"./action-settings-iD1MR-sn.js";import"./locked-BQZMPkdH.js";import"./index-ni6XenBx.js";import"./ListItemStandard-BMXLX1H8.js";import"./ButtonBadge-DbrQ1FvW.js";import"./search-B2-p3nZ4.js";import"./overflow-4COkL0ZJ.js";import"./slim-arrow-down-BbWvK7SD.js";import"./slim-arrow-down-BzdglbBq.js";import"./i18n-defaults-Begitp65.js";import"./navigation-right-arrow-CGDJY1aB.js";import"./navigation-right-arrow-GAvN6s_t.js";import"./navigation-down-arrow-BuZsOLrp.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
