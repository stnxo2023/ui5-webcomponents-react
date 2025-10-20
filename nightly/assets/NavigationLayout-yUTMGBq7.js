import{j as t}from"./iframe-D7LtZGbE.js";import{useMDXComponents as c}from"./index-DPe-hK9n.js";import{A as o}from"./ArgTypesWithNote-Ca9oGN9u.js";import{C as l}from"./ControlsWithNote-BGB5-nBh.js";import{D as g}from"./DocsHeader-SfH7r9rU.js";import{F as x}from"./CommandsAndQueries-16gk4cWC.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-pr2PodND.js";import{C as i,D as r}from"./NavigationLayout.stories-POwXpRzf.js";import{S as m,a as s,b as d}from"./index-CHCQ3cVg.js";import{S as p}from"./chain-link-CiVs61AY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8IYrQOsB.js";import"./information-DGR9jLKW.js";import"./sys-enter-2-pukk9ibo.js";import"./alert-ltuZ9R-x.js";import"./Tag-CAGvJLHq.js";import"./index-nlmJusRV.js";import"./index-DCDoujQt.js";import"./Link-DR-Yc_uT.js";import"./copy-uVLIBiwm.js";import"./copy-irE93QLw.js";import"./GitHub-Mark-q0BPK-l1.js";import"./TableOfContent-BQqicCGe.js";import"./index-CTJj7zal.js";import"./index-CQrPSC4r.js";import"./index-D9f7QWgZ.js";import"./index-7y0cv8s8.js";import"./index-B5kVVFk8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0rw92sk.js";import"./addCustomCSSWithScoping-Q6oWMzUs.js";import"./index-_eZYM5pK.js";import"./parameters-bundle.css-DHbieIhm.js";import"./menu-8u4wxVUG.js";import"./home-CSIPD49e.js";import"./calendar-MAYPcz-B.js";import"./history-D9nDZpP4.js";import"./background-DrsWTT0D.js";import"./action-settings-DYzDhnf3.js";import"./locked-vlH2SZ1V.js";import"./index-DD5uFoVD.js";import"./ListItemStandard-DJhw0qF_.js";import"./ButtonBadge-DF9ZsK6t.js";import"./search-DYQneyy-.js";import"./overflow-JRtY1LFK.js";import"./slim-arrow-down-CRqqmTAd.js";import"./slim-arrow-down-CSg5EB5A.js";import"./i18n-defaults-DGnw9SAb.js";import"./navigation-right-arrow-IFUe67pQ.js";import"./navigation-right-arrow-LlpQSEVq.js";import"./navigation-down-arrow-CJtYN5Co.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
