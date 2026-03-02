import{j as t}from"./iframe-Brff1rmP.js";import{useMDXComponents as c}from"./index-CqBWQ9Zx.js";import{A as o}from"./ArgTypesWithNote-C4SU49e0.js";import{C as l}from"./ControlsWithNote-Dryrg7rF.js";import{D as g}from"./DocsHeader-BQeKNX3t.js";import{F as x}from"./CommandsAndQueries-Z2F9olV7.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-Cx2b2NzS.js";import{C as i,D as r}from"./NavigationLayout.stories-DOPMKxxz.js";import{S as m,a as s,b as d}from"./index-BovPkKEr.js";import{S as p}from"./chain-link-B7tnaYKd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlA7--5Z.js";import"./information-Cs5lMjWh.js";import"./sys-enter-2-D0GbakMF.js";import"./alert-DvXA8o8i.js";import"./Tag-CO6ENRz9.js";import"./index-C7l_yPP_.js";import"./index-DYmdKmkq.js";import"./Link-CnNfKrga.js";import"./copy-DTNRA_Dg.js";import"./copy-Bv1OuOcO.js";import"./GitHub-Mark-mz3YWYis.js";import"./TableOfContent-B_7Wp9mr.js";import"./index-Cl8f3le-.js";import"./index-GNhj6rYz.js";import"./index-CHjRsrmQ.js";import"./index-BM_H4FxE.js";import"./index-SsKZpktE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hZd9oRLF.js";import"./addCustomCSSWithScoping-DWThNXxY.js";import"./index-OIQC3-n1.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./menu-DrbrZ9VW.js";import"./home-CxIXPjBD.js";import"./calendar-OXPMtRdv.js";import"./history-Cqn_ZtXU.js";import"./background-B7emOZoM.js";import"./action-settings-gWBwAThc.js";import"./locked-BzyCFyFh.js";import"./index-DwAvAuLn.js";import"./ListItemStandard-CFw-rkJd.js";import"./ButtonBadge-CxavwfVZ.js";import"./search-DajjXOC4.js";import"./overflow-BaLHxEus.js";import"./slim-arrow-down-C94xZ_93.js";import"./slim-arrow-down-DHZaQUOz.js";import"./i18n-defaults-Ca0KLLzw.js";import"./navigation-right-arrow-Dj8u635l.js";import"./navigation-right-arrow-C3t6w78M.js";import"./navigation-down-arrow-Cb_GEVcv.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
