import{j as e}from"./iframe-UvPIdInY.js";import{useMDXComponents as s}from"./index-C_wnFVs3.js";import{M as m,C as o}from"./blocks-D0ZGQgrL.js";import"./Tag-IR_ETKFS.js";import"./index-D9ZFZ6F-.js";import{C as l}from"./ControlsWithNote-C05KfOzz.js";import{D as p}from"./DocsHeader-CkhoLqPC.js";import{F as d}from"./CommandsAndQueries-aWAd2RXn.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-B_T0s41o.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BPTpUfW-.js";import"./sys-enter-2-CWNypIDi.js";import"./alert-CSWOQ1yD.js";import"./index-D_al-J9d.js";import"./index-mim0XNOQ.js";import"./Link-BLS11L9W.js";import"./copy-D00_ipqs.js";import"./copy-BE3LAxqE.js";import"./GitHub-Mark-NKmIjtfb.js";import"./TableOfContent-C3sVY331.js";import"./index-O5JzLw5N.js";import"./index-Ba89z5vW.js";import"./index-B0iNMIwQ.js";import"./index-CXKBVYRd.js";import"./index-Bvo9-fQy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNxf-Cq6.js";import"./addCustomCSSWithScoping-7EyTrlnL.js";import"./Gregorian-BLO2kjCA.js";import"./getCachedLocaleDataInstance-6CnWvFVu.js";import"./query-CzSBusdE.js";import"./Input-Pl2nYyWp.js";import"./ResponsivePopoverCommon.css-BoaZ2bBu.js";import"./ValueStateMessage.css-byYAWo4s.js";import"./Suggestions.css-PTQQr1HI.js";import"./appointment-2-C-vLkBTg.js";import"./ListItemStandard-n4LvxKbk.js";import"./slim-arrow-left-CcKh7oI8.js";import"./Calendar-B_FRPD5j.js";import"./InvisibleMessage-BEHZLLTD.js";import"./index-DXPBHWGL.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
