import{j as e}from"./iframe-Dk0n26L0.js";import{useMDXComponents as s}from"./index-GonNK-F8.js";import{M as m,C as o}from"./blocks-Do665btL.js";import"./Tag-DHDcW-fI.js";import"./index-zII-B7tZ.js";import{C as l}from"./ControlsWithNote-DUok2UAj.js";import{D as p}from"./DocsHeader-CgSCNCH-.js";import{F as d}from"./CommandsAndQueries-C5xq4Qip.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CHp1pfrC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CyaCviRw.js";import"./sys-enter-2-BeHXFnMA.js";import"./alert-CjBv8gy0.js";import"./index-DVvxIcdz.js";import"./index-Dww5FXQ1.js";import"./Link-CiqsvlwF.js";import"./copy-DjrSG4W0.js";import"./copy-DI2yzFNj.js";import"./GitHub-Mark-DZxCCe7V.js";import"./TableOfContent-DmHVZj_P.js";import"./index-BOuRbWlk.js";import"./index-DZcV0iyk.js";import"./index-BYI0Uf8A.js";import"./index-A7L-MktQ.js";import"./index-DuchmHxs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-WCv2CDBA.js";import"./addCustomCSSWithScoping-C7tuYiM4.js";import"./Gregorian-BZiTPwmI.js";import"./getCachedLocaleDataInstance-BVrXLuoB.js";import"./query-CzSBusdE.js";import"./Input-BrteEEfL.js";import"./ResponsivePopoverCommon.css-B_3MTk0W.js";import"./ValueStateMessage.css-DW6dpdMx.js";import"./Suggestions.css-BKD2VSge.js";import"./appointment-2-fnraeTn5.js";import"./ListItemStandard-8LD2v8AG.js";import"./slim-arrow-left-Bh-nsn0x.js";import"./Calendar-CzQxUOVE.js";import"./InvisibleMessage-DxH_2GsR.js";import"./index-Blitw6nk.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
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
`,e.jsx(d,{})]})}function ee(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ee as default};
