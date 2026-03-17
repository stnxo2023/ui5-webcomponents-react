import{j as e}from"./iframe-30LZfzOw.js";import{useMDXComponents as s}from"./index-9hK3vCGp.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-C0vZ6D8t.js";import"./Tag-Dtxkyswp.js";import"./index-CjMm9yFV.js";import{C as h}from"./ControlsWithNote-CXKPC-Oz.js";import{D as I}from"./DocsHeader-WWsNQMtH.js";import{F as y}from"./Footer-BNR5gUPY.js";import"./CommandsAndQueries-B3tX98p8.js";import"./PageNotFound-yG6M5MId.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-CPjfd435.js";import{C as m,D as d,a as F}from"./Form.stories-DNhz1rll.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BQPccwsM.js";import"./sys-enter-2-CbSQlHDF.js";import"./alert-BwFRRuyW.js";import"./index-CZwEe_4d.js";import"./index-CqMGZXJd.js";import"./Link-CPAvZ0M5.js";import"./copy-B0nYe01_.js";import"./copy-BDfV85Pd.js";import"./GitHub-Mark-zOAT4iF3.js";import"./TableOfContent-BvUVIFBa.js";import"./index-CFfbQ4H0.js";import"./index-DBMP_Ccw.js";import"./index-BqAk99uF.js";import"./index-orHhnsuM.js";import"./index-DNQEiveD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl3uWGQL.js";import"./addCustomCSSWithScoping-DtBGS5Q4.js";import"./Illustrations-BGO-1oHt.js";import"./i18n-defaults-CFWtSmu6.js";import"./slot-_4yKMUwC.js";import"./Input-C9d7fki7.js";import"./ResponsivePopoverCommon.css-COYnkjUj.js";import"./ValueStateMessage.css-BtsWCoC_.js";import"./Suggestions.css-BIuoYk1E.js";import"./index-B3GhDGHr.js";import"./index-B1i_wN68.js";import"./Select-l4rVM2RI.js";import"./InvisibleMessage-IbisIrn1.js";import"./index-BZL0dq0V.js";import"./Option-CtcuoPzM.js";import"./ListItemBaseTemplate-CbFyC0Bd.js";import"./index-BWkLQ4di.js";import"./TextArea-CZLqn-T5.js";import"./index-Dxoj_xD_.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:m}),`
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
