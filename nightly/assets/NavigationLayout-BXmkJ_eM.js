import{j as t}from"./iframe-CJIrZBlB.js";import{useMDXComponents as c}from"./index-xKVU5ZCd.js";import{A as o}from"./ArgTypesWithNote-DH6P01sb.js";import{C as l}from"./ControlsWithNote-DgEi_PLk.js";import{D as g}from"./DocsHeader-BV5sl85-.js";import{F as x}from"./CommandsAndQueries-C3g74-RT.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-C-1O0LRm.js";import{C as i,D as r}from"./NavigationLayout.stories-Bvvf-HJH.js";import{S as m,a as s,b as d}from"./index-x1cC6r_r.js";import{S as p}from"./chain-link-BZjF3Hiu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmJ7zXRW.js";import"./information-BaxJEMV7.js";import"./sys-enter-2-COh9WNy8.js";import"./alert-BkaLAKBd.js";import"./Tag-BNlwFAFY.js";import"./index-EdNUKN4_.js";import"./index-CEkWgGTS.js";import"./Link-BElCP5h1.js";import"./copy-Do5bG9wn.js";import"./copy-DR5Kv1Iv.js";import"./GitHub-Mark-CILm86EZ.js";import"./TableOfContent-Cp1YxGMV.js";import"./index-BGOwz-CM.js";import"./index-YnpVhHMg.js";import"./index-BhZheF80.js";import"./index-DmwyQtvi.js";import"./index-BCwOIMZp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bf32rwnZ.js";import"./addCustomCSSWithScoping-CPo-hqqQ.js";import"./index-okhZH0KA.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./menu-D4mFhaYY.js";import"./home-BBIARtOf.js";import"./calendar-x9ox3QmO.js";import"./history-B1XY7NLS.js";import"./background-DzzHbdgH.js";import"./action-settings-f6qdrUX7.js";import"./locked-CQWUl4sn.js";import"./index-BTO_FkBp.js";import"./ListItemStandard-CHoTFWQP.js";import"./ButtonBadge-BIfrRLYj.js";import"./search-DifbEbEA.js";import"./overflow-CL644EIQ.js";import"./slim-arrow-down-BTXWHLy9.js";import"./slim-arrow-down-CdpV3nE0.js";import"./i18n-defaults-k5o3Svb4.js";import"./navigation-right-arrow-BtI2EckR.js";import"./navigation-right-arrow-CrzwDQrl.js";import"./navigation-down-arrow-B14ig-WM.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
