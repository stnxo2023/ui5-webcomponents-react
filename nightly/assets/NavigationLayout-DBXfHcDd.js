import{j as t}from"./iframe-Cv2DxGxx.js";import{useMDXComponents as c}from"./index-DJcSDbNR.js";import{A as o}from"./ArgTypesWithNote-BSRYwLFh.js";import{C as l}from"./ControlsWithNote-DJGesapH.js";import{D as g}from"./DocsHeader-B09D1zZZ.js";import{F as x}from"./CommandsAndQueries-bS4Yf-ej.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-ugoI9X9t.js";import{C as i,D as r}from"./NavigationLayout.stories-Bm4821BP.js";import{S as m,a as s,b as d}from"./index-Puey7b3h.js";import{S as p}from"./chain-link-DeO6Z3Z9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D_TtcnwQ.js";import"./information-DWd1dkKI.js";import"./sys-enter-2-DDyu9UHI.js";import"./alert-3r0WRbjT.js";import"./Tag-Coz7RYuP.js";import"./index-C0_2Dkpw.js";import"./index-B09eBGHl.js";import"./Link-BduAs2w5.js";import"./copy-MzHH9Z0N.js";import"./copy-CqIWY1yr.js";import"./GitHub-Mark-B7CnmgIj.js";import"./TableOfContent-DYlCf-mF.js";import"./index-mHVz6rF3.js";import"./index-CInTOaEh.js";import"./index-DUYUZ9D7.js";import"./index-Gpf6Q-KM.js";import"./index-BniFx0GW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-0lPpvscI.js";import"./addCustomCSSWithScoping-Bw7ry9Qy.js";import"./index-DkOEdBtF.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./menu-D_seVHGp.js";import"./home-Br9QaAs3.js";import"./calendar-B20RQ4wV.js";import"./history-CaI5yQ_R.js";import"./background-CqL3jel9.js";import"./action-settings-BH_hPSLv.js";import"./locked-D9utYGUQ.js";import"./index-Cc2MdgnB.js";import"./ListItemStandard-C1pGRTma.js";import"./ButtonBadge-CJZh5v0W.js";import"./search-w053Ncro.js";import"./overflow-B58IA6pi.js";import"./slim-arrow-down-sehS3JFD.js";import"./slim-arrow-down-BTvRdwWq.js";import"./i18n-defaults-DGnw9SAb.js";import"./navigation-right-arrow-DrgYv11d.js";import"./navigation-right-arrow-D__Tv4vy.js";import"./navigation-down-arrow-0n0msI0k.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
