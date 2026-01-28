import{j as t}from"./iframe-Bqqr6LRd.js";import{useMDXComponents as c}from"./index-Br4hcxKx.js";import{A as o}from"./ArgTypesWithNote-Bnq_cUqN.js";import{C as l}from"./ControlsWithNote-DYY2Ctl5.js";import{D as g}from"./DocsHeader-Bs6TWeNW.js";import{F as x}from"./CommandsAndQueries-18MjfAFY.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-Cu3AJo0i.js";import{C as i,D as r}from"./NavigationLayout.stories-C07L1ofo.js";import{S as m,a as s,b as d}from"./index-BdHPaZa9.js";import{S as p}from"./chain-link-CDL5Qk-V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B04Rzf_f.js";import"./information-BWf6xVI-.js";import"./sys-enter-2-NBiqC5e1.js";import"./alert-eITYjrPF.js";import"./Tag-CwbUvZ-m.js";import"./index-JLAmYdlt.js";import"./index-B4-rpm-y.js";import"./Link-1XxvN6x_.js";import"./copy-xdRfKR_3.js";import"./copy-Bhrou6qI.js";import"./GitHub-Mark-B0mJlYmB.js";import"./TableOfContent-MXbQblkO.js";import"./index-Eu6KN1OU.js";import"./index-DkY4sX_i.js";import"./index-uP3qKYkO.js";import"./index-CFiaIaQb.js";import"./index-BFr0IkwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_soG_jSZ.js";import"./addCustomCSSWithScoping-DM5M0hyQ.js";import"./index-Be0A69Ml.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./menu-CBBHDlCi.js";import"./home-CcKntGK2.js";import"./calendar-mi8uiubt.js";import"./history-DtbTjPuO.js";import"./background-BqNqA0xL.js";import"./action-settings-DP_RMC8M.js";import"./locked-CyltSFxV.js";import"./index-K3hO80VG.js";import"./ListItemStandard-Hnm9afMy.js";import"./ButtonBadge-DkKUXOpJ.js";import"./search-B0KJ4VU5.js";import"./overflow-Wb-2kxl5.js";import"./slim-arrow-down-DZ6p3Bwi.js";import"./slim-arrow-down-BZm47vFp.js";import"./i18n-defaults-Begitp65.js";import"./navigation-right-arrow-Wb7vj7-O.js";import"./navigation-right-arrow-83NG2uzj.js";import"./navigation-down-arrow-CxlZv9_c.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
