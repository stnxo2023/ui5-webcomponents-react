import{j as e}from"./iframe-B-pj6tCi.js";import{useMDXComponents as s}from"./index-CV4vE3wQ.js";import{M as m,C as o}from"./blocks-HpriUj6L.js";import"./Tag-BGSRXwU9.js";import"./index-BjTnndjj.js";import{C as l}from"./ControlsWithNote-B7K7QTtI.js";import{D as p}from"./DocsHeader-BCuAJzUi.js";import{F as d}from"./CommandsAndQueries-D5MjQxKD.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-B1DoEv7A.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D4Uxy2_-.js";import"./sys-enter-2-dO_KPcSs.js";import"./alert-DoolSfaJ.js";import"./index-BOWgSpCi.js";import"./index-BuYTxKvQ.js";import"./Link-C2AEvOhf.js";import"./copy-BVi8j2p3.js";import"./copy-DztVyiyp.js";import"./GitHub-Mark-8l4Jp8Qr.js";import"./TableOfContent-D6cpdcyl.js";import"./index-C-xz_U36.js";import"./index-CBj2QVaO.js";import"./index-BJS1VYKy.js";import"./index-C-cxTaDk.js";import"./index-etFlaHh7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-zIVJXLqJ.js";import"./addCustomCSSWithScoping-NTHEVFVs.js";import"./Gregorian-6FSucnMQ.js";import"./query-CzSBusdE.js";import"./Input-DmrlR0kq.js";import"./ResponsivePopoverCommon.css-CE7mr_pS.js";import"./ValueStateMessage.css-tXcATjqT.js";import"./Suggestions.css-CniPwVQQ.js";import"./appointment-2-D6Kx5ooP.js";import"./ListItemStandard-DZ46rijL.js";import"./slim-arrow-left-BH8tR6Lp.js";import"./Calendar-CAe69Zgk.js";import"./InvisibleMessage-QwxdDQeA.js";import"./index-C_rwdTta.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
