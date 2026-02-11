import{j as e}from"./iframe-BvHqSIyK.js";import{useMDXComponents as s}from"./index-C9vrwz77.js";import{M as m,C as o}from"./blocks-BxoU3Yu6.js";import"./Tag-99RoGaFy.js";import"./index-BB14dXBi.js";import{C as l}from"./ControlsWithNote-CTnWG3NF.js";import{D as p}from"./DocsHeader-Cs7Yrkde.js";import{F as d}from"./CommandsAndQueries-B3hUlog3.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-23L-IwJN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-zngl4LUv.js";import"./sys-enter-2-D9Z1FJcM.js";import"./alert-F1tFIdLT.js";import"./index-B7BXsln5.js";import"./index-Dvhux2R5.js";import"./Link-CgDmPG1r.js";import"./copy-D3tG-hpB.js";import"./copy-BP-1S5h9.js";import"./GitHub-Mark-DZZ8zVqy.js";import"./TableOfContent-B7BIrx_g.js";import"./index-DAufjIqI.js";import"./index-Cb6d5Ui8.js";import"./index-BX2w3DS0.js";import"./index-lpb4Baiz.js";import"./index--L__lImq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3VWoxNN.js";import"./addCustomCSSWithScoping-Bvbl39sy.js";import"./Gregorian-BBv8gLLy.js";import"./getCachedLocaleDataInstance-D01QRLlV.js";import"./query-CzSBusdE.js";import"./Input-Br-sY9ky.js";import"./ResponsivePopoverCommon.css-sekIyiK-.js";import"./ValueStateMessage.css-BRJx2fcS.js";import"./Suggestions.css-CV4MjGEF.js";import"./appointment-2-DTM7sB_Y.js";import"./ListItemStandard-WAmqQIXu.js";import"./slim-arrow-left-DFVvPBDG.js";import"./Calendar-CMC2Q_AC.js";import"./InvisibleMessage-BSe3iB9m.js";import"./index-D39_iadB.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
