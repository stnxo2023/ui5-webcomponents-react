import{j as e}from"./iframe-D_CdPJGB.js";import{useMDXComponents as s}from"./index-CU-ptlAE.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-CCtPO9cz.js";import"./Tag-Bp64ITEl.js";import"./index-DvHG4NxR.js";import{C as h}from"./ControlsWithNote-FhkELdDw.js";import{D as I}from"./DocsHeader-w2XQAh8-.js";import{F as y}from"./CommandsAndQueries-mK8OCXMD.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-Ob3L9Gz6.js";import{C as d,D as m,a as F}from"./Form.stories-gaLEIXE6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D72qH7xY.js";import"./sys-enter-2-hXCOpqjq.js";import"./alert-DtWkY9xa.js";import"./index-C4kKrQ_A.js";import"./index-BjO8dbVD.js";import"./Link-D2G2Fur_.js";import"./copy-CuTYOvVJ.js";import"./copy-BADAjupU.js";import"./GitHub-Mark-CohA4-HF.js";import"./TableOfContent-TJ52XTPG.js";import"./index-CZ_x4nC8.js";import"./index-px1zqH5W.js";import"./index-rQn5W4JD.js";import"./index-BtAl8RaU.js";import"./index-Bp0lp_Bf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CAznTGJj.js";import"./addCustomCSSWithScoping-CCFJUFLD.js";import"./Input-DDlyZUe3.js";import"./ResponsivePopoverCommon.css-BLJDaaVS.js";import"./ValueStateMessage.css-BCduw_aJ.js";import"./Suggestions.css-BidsuWHC.js";import"./index-B48rPRkP.js";import"./TextArea-C8xwVJFX.js";import"./index-L2EXVoeb.js";import"./index-D1WIrmAT.js";import"./Select-6cSgUjJb.js";import"./InvisibleMessage-C5We_rGd.js";import"./slim-arrow-down-CHdhic0E.js";import"./slim-arrow-down-DjB7mIxL.js";import"./index-B4aMp4lg.js";import"./Option-DUZ1b-TT.js";import"./ListItemBaseTemplate-DxdVRh6Y.js";import"./index-DeJpfMkF.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
`,e.jsx(I,{of:d,subComponents:["FormGroup","FormItem"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:m}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(t.h2,{id:"display-only-and-edit-mode",children:"Display-Only and Edit mode"}),`
`,e.jsx(o,{of:F,sourceState:"none"}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const StandardField = ({ editMode, value, inputType = InputType.Text, onInput, ...rest }) => {
  if (editMode) {
    return <Input value={value} style={{ width: '100%' }} type={inputType} onInput={onInput} {...rest} />;
  }
  if (inputType === InputType.URL || inputType === InputType.Email) {
    return (
      <Link href={inputType === InputType.Email ? \`mailto:\${value}\` : value} target="_blank" {...rest}>
        {value}
      </Link>
    );
  }
  return <Text {...rest}>{value}</Text>;
};

const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const FormComponent = (props) => {
  const [editMode, toggleEditMode] = useReducer((prev) => !prev, false, undefined);
  const [formState, dispatch] = useReducer(
    reducer,
    {
      name: 'Red Point Stores',
      street: 'Main St 1618',
      zip: 31415,
      city: 'Maintown',
      country: 'Germany',
      web: 'https://www.sap.com',
      mail: 'john.smith@sap.com',
      twitter: '@sap',
      phone: '+49 1234 56789'
    },
    undefined
  );
  const { zip, city, name, street, country, web, mail, twitter, phone } = formState;

  const handleInput = (e) => {
    dispatch({ field: Object.keys(e.target.dataset)[0], value: e.target.value });
  };

  return (
    <>
      <Button onClick={toggleEditMode}>Toggle {editMode ? 'Display-Only Mode' : 'Edit Mode'}</Button>
      <Form
        {...props}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormGroup titleText="Address">
          <FormItem label="Name">
            <StandardField editMode={editMode} value={name} onInput={handleInput} data-name />
          </FormItem>
          <FormItem label="Street">
            <StandardField editMode={editMode} value={street} onInput={handleInput} data-street />
          </FormItem>
          <FormItem label="ZIP Code / City">
            {editMode ? (
              <>
                <Input value={zip} type={InputType.Number} style={{ width: '30%' }} onInput={handleInput} data-zip />
                <Input value={city} style={{ width: '70%' }} onInput={handleInput} data-city />
              </>
            ) : (
              <Text>{\`\${zip} \${city}\`}</Text>
            )}
          </FormItem>
          <FormItem label="Country">
            <StandardField editMode={editMode} value={country} onInput={handleInput} data-country />
          </FormItem>
          <FormItem label="Web">
            <StandardField editMode={editMode} value={web} inputType={InputType.URL} onInput={handleInput} data-web />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Contact">
          <FormItem label="Email">
            <StandardField
              editMode={editMode}
              value={mail}
              inputType={InputType.Email}
              onInput={handleInput}
              data-email
            />
          </FormItem>
          <FormItem label="Twitter">
            <StandardField editMode={editMode} value={twitter} onInput={handleInput} data-twitter />
          </FormItem>
          <FormItem label="Phone">
            <StandardField
              editMode={editMode}
              value={phone}
              inputType={InputType.Tel}
              onInput={handleInput}
              data-phone
            />
          </FormItem>
        </FormGroup>
      </Form>
    </>
  );
};
`})})]}),`
`,e.jsx(c,{children:x}),`
`,e.jsx(t.h2,{id:"form-group",children:"Form Group"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"formitem",children:"FormItem"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(y,{})]})}function se(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{se as default};
