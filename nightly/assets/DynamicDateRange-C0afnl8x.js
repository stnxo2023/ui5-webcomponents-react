import{j as e}from"./iframe-DMHzJZ-j.js";import{useMDXComponents as s}from"./index-C6fVjeP1.js";import{M as m,C as o}from"./blocks-BBNtOPy5.js";import"./Tag-CQITClqv.js";import"./index-C0eFSkjd.js";import{C as l}from"./ControlsWithNote-BUBYP7Bu.js";import{D as p}from"./DocsHeader-7Pk9KcQL.js";import{F as d}from"./CommandsAndQueries-DGQGLEXC.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-o9mGzjwV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-41_Ak17O.js";import"./sys-enter-2-YeOg860G.js";import"./alert-Dt7k-zHX.js";import"./index-BlloQ94B.js";import"./index-Cr6zAa1Q.js";import"./Link-DH5vJWVF.js";import"./copy-16ICJGmW.js";import"./copy-x3ZdDA2U.js";import"./GitHub-Mark-BgT8t9P2.js";import"./TableOfContent-DmuZLTjo.js";import"./index-DhIsFRFq.js";import"./index-B1RFmErt.js";import"./index-DgEALGZi.js";import"./index-CqxeRCB-.js";import"./index-CEzdIVxS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-bWNLwVQr.js";import"./addCustomCSSWithScoping-Br9NkwKR.js";import"./Gregorian-C-QZQYoK.js";import"./query-CzSBusdE.js";import"./Input-D0sQDQIP.js";import"./ResponsivePopoverCommon.css-BZuN8o2Z.js";import"./ValueStateMessage.css-Cu_y8whz.js";import"./Suggestions.css-Du7gKKRX.js";import"./appointment-2-tjJy2Y2D.js";import"./ListItemStandard-CWeiqPrI.js";import"./slim-arrow-left-CGCVvKNO.js";import"./Calendar-DociR7j8.js";import"./InvisibleMessage-DHXVn91v.js";import"./index-DXKiXJss.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
`,e.jsx(d,{})]})}function $(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};
