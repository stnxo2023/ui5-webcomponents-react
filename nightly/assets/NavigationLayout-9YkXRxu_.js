import{j as t}from"./iframe-30LZfzOw.js";import{useMDXComponents as c}from"./index-9hK3vCGp.js";import{A as o}from"./ArgTypesWithNote-BmhzoFhd.js";import{C as l}from"./ControlsWithNote-CXKPC-Oz.js";import{D as g}from"./DocsHeader-WWsNQMtH.js";import{F as x}from"./Footer-BNR5gUPY.js";import"./CommandsAndQueries-B3tX98p8.js";import"./PageNotFound-yG6M5MId.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-C0vZ6D8t.js";import{C as i,D as r}from"./NavigationLayout.stories-CfN1K-Ai.js";import{S as m,a as s,b as d}from"./index-6odgWnbh.js";import{S as p}from"./chain-link-d2FgSslf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjMm9yFV.js";import"./information-BQPccwsM.js";import"./sys-enter-2-CbSQlHDF.js";import"./alert-BwFRRuyW.js";import"./Tag-Dtxkyswp.js";import"./index-CZwEe_4d.js";import"./index-CqMGZXJd.js";import"./Link-CPAvZ0M5.js";import"./copy-B0nYe01_.js";import"./copy-BDfV85Pd.js";import"./GitHub-Mark-zOAT4iF3.js";import"./TableOfContent-BvUVIFBa.js";import"./index-CFfbQ4H0.js";import"./index-DBMP_Ccw.js";import"./index-BqAk99uF.js";import"./index-orHhnsuM.js";import"./index-DNQEiveD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl3uWGQL.js";import"./addCustomCSSWithScoping-DtBGS5Q4.js";import"./Illustrations-BGO-1oHt.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-6YcSZDnA.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./menu-DBIl9C6I.js";import"./home-DklVbAtF.js";import"./calendar-BN2V8KMJ.js";import"./history-BQvlBk4r.js";import"./background-Lcu8-FAd.js";import"./action-settings-DxgH9eIK.js";import"./locked-DZIbTK5H.js";import"./index-C9nfUbbh.js";import"./query-CzSBusdE.js";import"./ButtonBadge-BA5qPUac.js";import"./ListItemStandard-DUX806d8.js";import"./search-CN6c2zbz.js";import"./overflow-CPdsBZbd.js";import"./navigation-right-arrow-BjkMCO6q.js";import"./navigation-right-arrow-xyDtPWf6.js";import"./navigation-down-arrow-C1y2H9vH.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
`,t.jsx(x,{})]})}function Nt(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{Nt as default};
