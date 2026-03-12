import{j as e}from"./iframe-bao9qRDH.js";import{useMDXComponents as s}from"./index-D58rFl3P.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-uUz_WETG.js";import"./Tag-DnPLRNDs.js";import"./index-B3NnTsyp.js";import{C as h}from"./ControlsWithNote-B5-P5vcT.js";import{D as I}from"./DocsHeader-FxRbQzqR.js";import{F as y}from"./Footer-WVPZdxr3.js";import"./CommandsAndQueries-Bg8yb33a.js";import"./PageNotFound-sLpD2w2i.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-BE2sd7CN.js";import{C as m,D as d,a as F}from"./Form.stories-C_Y39E8w.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DbPZ0LCP.js";import"./sys-enter-2-Ch2YqKTp.js";import"./alert-CeM8CijD.js";import"./index-CwfO5OAT.js";import"./index-DPEMBgxp.js";import"./Link-ZWtIcHaY.js";import"./copy-DUEvZFUb.js";import"./copy-jfQcw6pd.js";import"./GitHub-Mark-tOKz_pt5.js";import"./TableOfContent-CharJQun.js";import"./index-D32QYjx2.js";import"./index-5JMcfQSp.js";import"./index-BNO-qx4N.js";import"./index-Dl2g3tcZ.js";import"./index-DOBS9bga.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L1xKvRVU.js";import"./addCustomCSSWithScoping-D0v__xyi.js";import"./Illustrations-BL_lLuOy.js";import"./i18n-defaults-CFWtSmu6.js";import"./slot-_4yKMUwC.js";import"./Input-B4vfEymz.js";import"./ResponsivePopoverCommon.css-boUjI9kL.js";import"./ValueStateMessage.css-Betpi1RU.js";import"./Suggestions.css-Czb7XS0g.js";import"./index-BBPmP6UZ.js";import"./index-WWi3sBsb.js";import"./Select-BY45_jlB.js";import"./InvisibleMessage-lmhcQGzA.js";import"./index-vSP-bfQy.js";import"./Option-DAUEl0Pa.js";import"./ListItemBaseTemplate-RRyIrX0q.js";import"./index-T2J9LMVG.js";import"./TextArea-CkT9Vwbf.js";import"./index-ReeUPo0U.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:m}),`
`,e.jsx(I,{of:m,subComponents:["FormGroup","FormItem"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:d}),`
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
`,e.jsx(y,{})]})}function he(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{he as default};
