import{j as e}from"./iframe-CRwp3Tpg.js";import{useMDXComponents as s}from"./index-COIro8D8.js";import{M as m,C as o}from"./blocks-C4HsTNIO.js";import"./Tag-tfloHdXZ.js";import"./index-B8mUtBGn.js";import{C as l}from"./ControlsWithNote-BCEkc-TD.js";import{D as p}from"./DocsHeader-CApt1QLy.js";import{F as d}from"./CommandsAndQueries-BOt8E6ok.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DNfWX5oP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-MlnnkJju.js";import"./sys-enter-2-DNoGuffO.js";import"./alert-aDgjp5mZ.js";import"./index-C0aL9woL.js";import"./index-Cv51gsI_.js";import"./Link-Dtv1Hpbf.js";import"./copy-9dD-ODJZ.js";import"./copy-DIWKtK23.js";import"./GitHub-Mark-B_6r_Oei.js";import"./TableOfContent-Bq-3BAJF.js";import"./index-DtgT2jRs.js";import"./index-B3NhI5Qb.js";import"./index-DIEFvDQl.js";import"./index-DzYDiZvU.js";import"./index-DYA05DWY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0x12wWs.js";import"./addCustomCSSWithScoping-Dv4ZSX5E.js";import"./Gregorian-DKsjIwtG.js";import"./query-CzSBusdE.js";import"./Input-CKqAaoJh.js";import"./ResponsivePopoverCommon.css-TNg_0n0_.js";import"./ValueStateMessage.css-CYdcHCck.js";import"./Suggestions.css-BAVf_4rH.js";import"./appointment-2-4xYe_qew.js";import"./ListItemStandard-CG69oYew.js";import"./slim-arrow-left-CvF9a1n1.js";import"./Calendar-CWTZR0U2.js";import"./InvisibleMessage-BMQ2txcL.js";import"./index-xFdAYmE4.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
