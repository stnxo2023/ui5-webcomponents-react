import{j as e}from"./iframe-D7AtRUpE.js";import{useMDXComponents as s}from"./index-DRFX2LG8.js";import{M as m,C as o}from"./blocks-DtVmZnZe.js";import"./Tag-DZXgvHmp.js";import"./index-ehmuZHI1.js";import{C as l}from"./ControlsWithNote-BuOt4CbO.js";import{D as p}from"./DocsHeader-CKFKCZtO.js";import{F as d}from"./CommandsAndQueries-BtIPK2kL.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CuXjdC2s.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D-fAW1gu.js";import"./sys-enter-2-DRPF_4qy.js";import"./alert-fnVpcWPE.js";import"./index-BWvZCzda.js";import"./index-Dd6OnJpC.js";import"./Link-DWIR53PW.js";import"./copy-Bpb_R_BT.js";import"./copy-BpQCF5oY.js";import"./GitHub-Mark-CW0ZyVD2.js";import"./TableOfContent-DJLXVcV1.js";import"./index-CCJ9pFYK.js";import"./index-BGkf-dJq.js";import"./index-CjaPk49X.js";import"./index-CH_KzusP.js";import"./index-54VAs-Li.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RhrsIb0U.js";import"./addCustomCSSWithScoping-C2Eje0Og.js";import"./Gregorian-CukbhssQ.js";import"./query-CzSBusdE.js";import"./Input-BNhpkyEe.js";import"./ResponsivePopoverCommon.css-C_ECllnd.js";import"./ValueStateMessage.css-AtrprVNc.js";import"./Suggestions.css-CrAZUaHe.js";import"./appointment-2-BflZLhN5.js";import"./ListItemStandard-Dkffh3P6.js";import"./slim-arrow-left-DcjwTKEh.js";import"./Calendar-YQ09GDWY.js";import"./InvisibleMessage-BJQIWg2w.js";import"./index-XI1WfX02.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
