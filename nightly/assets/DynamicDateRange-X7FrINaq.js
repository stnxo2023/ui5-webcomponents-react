import{j as e}from"./iframe-Bqqr6LRd.js";import{useMDXComponents as s}from"./index-Br4hcxKx.js";import{M as m,C as o}from"./blocks-Cu3AJo0i.js";import"./Tag-CwbUvZ-m.js";import"./index-B04Rzf_f.js";import{C as l}from"./ControlsWithNote-DYY2Ctl5.js";import{D as p}from"./DocsHeader-Bs6TWeNW.js";import{F as d}from"./CommandsAndQueries-18MjfAFY.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-C8sxo4d7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BWf6xVI-.js";import"./sys-enter-2-NBiqC5e1.js";import"./alert-eITYjrPF.js";import"./index-JLAmYdlt.js";import"./index-B4-rpm-y.js";import"./Link-1XxvN6x_.js";import"./copy-xdRfKR_3.js";import"./copy-Bhrou6qI.js";import"./GitHub-Mark-B0mJlYmB.js";import"./TableOfContent-MXbQblkO.js";import"./index-Eu6KN1OU.js";import"./index-DkY4sX_i.js";import"./index-uP3qKYkO.js";import"./index-CFiaIaQb.js";import"./index-BFr0IkwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_soG_jSZ.js";import"./addCustomCSSWithScoping-DM5M0hyQ.js";import"./Gregorian-SMiTNA2h.js";import"./query-CzSBusdE.js";import"./Input-vcWbAoGp.js";import"./ResponsivePopoverCommon.css-DVi9wNNs.js";import"./ValueStateMessage.css-DbIMxrdT.js";import"./Suggestions.css-Co8vDkCG.js";import"./appointment-2-QZ1PoFIN.js";import"./ListItemStandard-Hnm9afMy.js";import"./slim-arrow-left-Cs6NMV4F.js";import"./Calendar-DCd-G_vn.js";import"./InvisibleMessage-Bp5Ok78e.js";import"./index-bVqMVufC.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
