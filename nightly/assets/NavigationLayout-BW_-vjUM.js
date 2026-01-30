import{j as t}from"./iframe-D2NU56Rf.js";import{useMDXComponents as c}from"./index-PnjEbenM.js";import{A as o}from"./ArgTypesWithNote-D2s5X3r0.js";import{C as l}from"./ControlsWithNote-CAF9_eD5.js";import{D as g}from"./DocsHeader-Cl3nNz31.js";import{F as x}from"./CommandsAndQueries-29xiV4Jg.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-DZ0UXwr1.js";import{C as i,D as r}from"./NavigationLayout.stories-Ca7w_bLz.js";import{S as m,a as s,b as d}from"./index-CM6vnqMU.js";import{S as p}from"./chain-link-CLheqOHl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUSq7sbq.js";import"./information-D0vbTy2i.js";import"./sys-enter-2-VpvNFzz0.js";import"./alert-BQIN7sJt.js";import"./Tag-gDuKwEK0.js";import"./index-jUVFgVlz.js";import"./index-Un1NcZ-Y.js";import"./Link-O92RF9SA.js";import"./copy-DukcYOao.js";import"./copy-2VqtSmY4.js";import"./GitHub-Mark-CouNLLl9.js";import"./TableOfContent-CihQPfob.js";import"./index-B7GdD8iT.js";import"./index-B9i47eba.js";import"./index-Dje3V7QZ.js";import"./index-4WW0oGrP.js";import"./index-CgZch3zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHOcvBV5.js";import"./addCustomCSSWithScoping-CUv8r2Rw.js";import"./index-04tD64QU.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./menu-JBFP1Wv-.js";import"./home-BAg3Ad6F.js";import"./calendar-DfukyY3C.js";import"./history-T6WzlIIK.js";import"./background-7S-YcYu6.js";import"./action-settings-By97tBkN.js";import"./locked-DJyrgIr4.js";import"./index-BMPd2-A7.js";import"./ListItemStandard-BIEX9q1d.js";import"./ButtonBadge-B2zgJDNf.js";import"./search-BIsyaY7t.js";import"./overflow-D3nrvVZU.js";import"./slim-arrow-down-BnBg9S_U.js";import"./slim-arrow-down-CM6lEZEE.js";import"./i18n-defaults-Begitp65.js";import"./navigation-right-arrow-C6Zb3cwl.js";import"./navigation-right-arrow-IKuy3H_N.js";import"./navigation-down-arrow-BYO53pAx.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
