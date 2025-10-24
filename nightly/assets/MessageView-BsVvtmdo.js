import{j as e}from"./iframe-DoO3B8k6.js";import{useMDXComponents as h}from"./index-c3qBf9j-.js";import{A as i}from"./ArgTypesWithNote-D3btUsIQ.js";import{C as c}from"./ControlsWithNote-8xXb6PAb.js";import{D as p}from"./DocsHeader-pRz4TQH5.js";import{F as x}from"./CommandsAndQueries-BgTP9rvd.js";import{M as g,C as o,a as j,D as r}from"./blocks-SZ1zCtFT.js";import{C as s,D as a,M as u,W as f,a as d}from"./MessageView.stories-C6VuxBis.js";import{S as w}from"./SubcomponentsSection-BVy4lpQe.js";import{M as l}from"./index-Dp2k8pda.js";import"./preload-helper-PPVm8Dsz.js";import"./index-0e8xkLwE.js";import"./information-CQ3_UNon.js";import"./sys-enter-2-04wFErlJ.js";import"./alert-TTaxVgBW.js";import"./Tag-BQH01MnI.js";import"./index-DcEck9MJ.js";import"./index-DHXtHkXk.js";import"./Link-BjpII7wh.js";import"./copy-KqjGIa02.js";import"./copy-_xuz2Nel.js";import"./GitHub-Mark-CAxvVkKU.js";import"./TableOfContent-B2fiLQKN.js";import"./index-BSLJX4WE.js";import"./index-CQlaTUTv.js";import"./index-DkL8yUNi.js";import"./index-DNsrF3vl.js";import"./index-DeXyQXgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRtsvWdt.js";import"./addCustomCSSWithScoping-BMQmLAx8.js";import"./index-DXQ56gFw.js";import"./slim-arrow-left-DGdlBAho.js";import"./index-Cszwj7rn.js";import"./Bar-CMcc5yLr.js";import"./AnimationMode-BTBJB-eS.js";import"./InvisibleMessage-CgykMR3a.js";import"./index-GNYcE7dh.js";import"./index-BY5N1HVZ.js";import"./index-NWr0Tsrk.js";import"./SegmentedButton-X1XX7xUF.js";function m(t){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...h(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{of:s}),`
`,e.jsx(p,{of:s,subComponents:["MessageItem","MessageViewButton"]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.p,{children:"This component exposes public methods. You can invoke them directly on the instance of the component, e.g. by using React Refs."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Parameters"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"navigateBack"})})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Navigates back to the list view if you are in the details view of a message"})]})})]}),`
`,e.jsx(n.h2,{id:"usage-notes",children:"Usage Notes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"MessageView"})," can be used in several scenarios, but most likely in Dialogs or Popovers."]}),`
`,e.jsxs(n.p,{children:["If used in a Popover it is recommended that the ",e.jsx(n.code,{children:"MessageViewButton"}),` is used as an opener.
The `,e.jsx(n.code,{children:"type"})," of the button should always reflect the highest severity (Error -> Warning -> Success -> Information)."]}),`
`,e.jsxs(n.p,{children:["If the ",e.jsx(n.code,{children:"MessageView"})," is used in a standalone way, you can set the prop ",e.jsx(n.code,{children:"showDetailsPageHeader"})," to ",e.jsx(n.code,{children:"true"}),`.
This will add a bar to the details page where a back button is contained.`]}),`
`,e.jsxs(n.p,{children:["When used in a ",e.jsx(n.code,{children:"Dialog"})," or a ",e.jsx(n.code,{children:"Popover"}),", we recommend not setting the ",e.jsx(n.code,{children:"showDetailsPageHeader"}),` prop but rather listen
to the `,e.jsx(n.code,{children:"onItemSelect"})," event and add a back button to your Dialog or Popover header and use the ",e.jsx(n.code,{children:"navigateBack()"}),` method
to get back to the list view.`]}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(n.h3,{id:"messageview-in-a-dialog",children:"MessageView in a Dialog"}),`
`,e.jsx(o,{of:u}),`
`,e.jsxs(n.p,{children:["Sample Code: ",e.jsx(n.em,{children:"(Button and Dialog opening are omitted here)"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function MyComponent() {
  const messageViewRef = useRef<MessageViewDomRef>(null);
  const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
  return (
    <Dialog
      resizable
      style={{ width: '500px' }}
      className="modal-without-padding"
      onClose={() => {
        messageViewRef.current.navigateBack();
      }}
      header={
        <Bar
          startContent={
            <FlexBox alignItems={FlexBoxAlignItems.Center}>
              {isOnDetailsPage && (
                <Button
                  icon="slim-arrow-left"
                  design={ButtonDesign.Transparent}
                  onClick={() => {
                    setIsOnDetailsPage(false);
                    messageViewRef.current.navigateBack();
                  }}
                  style={{ marginInline: '0 0.5rem' }}
                />
              )}
              <Title level={TitleLevel.H4}>Messages</Title>
            </FlexBox>
          }
        />
      }
    >
      <MessageView
        ref={messageViewRef}
        showDetailsPageHeader={false}
        onItemSelect={() => {
          setIsOnDetailsPage(true);
        }}
      >
        {/* children */}
      </MessageView>
    </Dialog>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"messageview-in-popover-with-messageviewbutton",children:"MessageView in Popover with MessageViewButton"}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(j,{children:w}),`
`,e.jsx(n.h2,{id:"messageitem",children:"MessageItem"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(i,{metaOf:s,of:d}),`
`,e.jsx(n.h2,{id:"messageviewbutton",children:"MessageViewButton"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(i,{metaOf:s,of:l}),`
`,e.jsx(x,{})]})}function ae(t={}){const{wrapper:n}={...h(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m(t)}export{ae as default};
