import{j as e}from"./iframe-B7xuoxGk.js";import{useMDXComponents as s}from"./index-D6aSzRGN.js";import{M as m,C as o}from"./blocks-DZ0Vo0vM.js";import"./Tag-CtaADOFc.js";import"./index-BzZxDoNe.js";import{C as p}from"./ControlsWithNote-B_1zPi3p.js";import{D as l}from"./DocsHeader-BbOLILti.js";import{F as d}from"./Footer--uD18Qhj.js";import"./CommandsAndQueries-DKcdQNlV.js";import"./PageNotFound-DygNwEfd.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-auFZ8FYc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BW_uN0gP.js";import"./sys-enter-2-BoXj1fRr.js";import"./alert-Cl-xvHRs.js";import"./index-DmGPBpXp.js";import"./index-BXMXe_Dr.js";import"./Link-YW7Wqeu4.js";import"./copy-RUh9U7xa.js";import"./copy-h55QeB4j.js";import"./GitHub-Mark-BWr1adaM.js";import"./TableOfContent-DJgrMBhW.js";import"./index-B7nFcBs2.js";import"./index-B_T64Hn2.js";import"./index-wxY5XpWW.js";import"./index-D_A15Zs0.js";import"./index-Bimscpqo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZFeJY_e.js";import"./addCustomCSSWithScoping-1uVBaclk.js";import"./Illustrations-w0lfALHe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-DnhIAk_K.js";import"./getCachedLocaleDataInstance-BoqZ3inu.js";import"./query-CzSBusdE.js";import"./Input-eFb_xp2M.js";import"./ResponsivePopoverCommon.css-CyKUqKvQ.js";import"./ValueStateMessage.css-Df99lQxg.js";import"./Suggestions.css-CBArPh6-.js";import"./appointment-2-CV6Sdh29.js";import"./ListItemStandard-CqEt74g6.js";import"./slim-arrow-left-CfaCIxVO.js";import"./Calendar-xF6FupKI.js";import"./InvisibleMessage-eHM0y0K2.js";import"./index-DFpdt6Cf.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(t.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(t.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.h4,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
  const [selValue, setSelValue] = useState("");
  const [convertedDates, setConvertedDates] = useState("");
  return (
    <>
      <DynamicDateRange
        onChange={(e) => {
          const selectedValue = e.detail.value;
          setSelValue(JSON.stringify(selectedValue));

          const dates = e.currentTarget.toDates(selectedValue);
          setConvertedDates(
            dates.map((date) => date.toLocaleString()).join(" - "),
          );
        }}
      />
      <hr />
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="sel-val" showColon>
          Selected Value
        </Label>
        <Input
          id="sel-val"
          readonly
          value={selValue}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="conv-val" showColon>
          Converted Dates
        </Label>
        <Input
          id="conv-val"
          readonly
          value={convertedDates}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
    </>
  );
}
`})}),`
`,e.jsx(d,{})]})}function re(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{re as default};
