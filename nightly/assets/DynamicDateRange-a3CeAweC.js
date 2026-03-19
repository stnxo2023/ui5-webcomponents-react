import{j as e}from"./iframe-DZQsFHyF.js";import{useMDXComponents as s}from"./index-FeafUf3S.js";import{M as m,C as o}from"./blocks-CCR5dlte.js";import"./Tag-njT3oUWj.js";import"./index-FZQI4JeT.js";import{C as p}from"./ControlsWithNote-DndMN2PG.js";import{D as l}from"./DocsHeader-BYmBOG9m.js";import{F as d}from"./Footer-1JL6Y-Rs.js";import"./CommandsAndQueries-Q7QL049M.js";import"./PageNotFound-CAJJq4gT.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CnhKtgiZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Byx_k42O.js";import"./sys-enter-2-CNKaU8fp.js";import"./alert-HiA3dax7.js";import"./index-JUdhH85j.js";import"./index-DGD79lBE.js";import"./Link-Dy7YK0fU.js";import"./copy-BrbFvn-Q.js";import"./copy-B0ak1fDk.js";import"./GitHub-Mark-DMTHjS90.js";import"./TableOfContent-B8ysGL0D.js";import"./index-CHkzxhcQ.js";import"./index-CeHR91It.js";import"./index-CmNuhxCj.js";import"./index-C2RcbU_s.js";import"./index-QENyXe96.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsnnpcUC.js";import"./addCustomCSSWithScoping-BZT-QmME.js";import"./Illustrations-BlaFZAWE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-t1T8HCb6.js";import"./getCachedLocaleDataInstance-CkAEsJYF.js";import"./query-CzSBusdE.js";import"./Input-DmDSg_Bp.js";import"./ResponsivePopoverCommon.css-CH3mALXJ.js";import"./ValueStateMessage.css-EXmMX5gs.js";import"./Suggestions.css-D2AfaPCJ.js";import"./appointment-2-x4b4RlQr.js";import"./ListItemStandard-Du0wWGOA.js";import"./slim-arrow-left-C5GlNcuU.js";import"./Calendar-CCHO7kA1.js";import"./InvisibleMessage-BsWqZsBR.js";import"./index-2s676dlH.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
