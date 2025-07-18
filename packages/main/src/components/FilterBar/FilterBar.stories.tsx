import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import { useId, useReducer, useRef, useState } from 'react';
import { FlexBoxDirection } from '../../enums/index.js';
import {
  ComboBox,
  ComboBoxItem,
  DatePicker,
  DateRangePicker,
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  Input,
  Label,
  MultiComboBox,
  MultiComboBoxItem,
  MultiInput,
  Option,
  RatingIndicator,
  Select,
  StepInput,
  Switch,
  Title,
  Token,
} from '../../webComponents/index.js';
import { Text } from '../../webComponents/Text/index.js';
import { FilterGroupItem } from '../FilterGroupItem/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { VariantManagement } from '../VariantManagement/index.js';
import { VariantItem } from '../VariantManagement/VariantItem.js';
import type { FilterBarPropTypes } from './index.js';
import { FilterBar } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / FilterBar',
  component: FilterBar,
  args: {
    search: <Input />,
    header: (
      <Title level={TitleLevel.H2} size={TitleLevel.H4}>
        FilterBar
      </Title>
    ),
    filterContainerWidth: '13.125rem',
    onFiltersDialogOpen: fn(),
  },
  argTypes: {
    activeFiltersCount: { control: 'number' },
    search: { control: { disable: true } },
    header: { control: { disable: true } },
    children: { control: { disable: true } },
    filterContainerWidth: { control: 'text' },
    as: { control: { disable: true } },
  },
} satisfies Meta<typeof FilterBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <FilterBar {...args}>
        <FilterGroupItem label="StepInput" required filterKey="stepInput">
          <StepInput required />
        </FilterGroupItem>
        <FilterGroupItem label="RatingIndicator" filterKey="ratingIndicator">
          <RatingIndicator />
        </FilterGroupItem>
        <FilterGroupItem label="MultiInput" active filterKey="multiInput">
          <MultiInput
            tokens={
              <>
                <Token text="Argentina" selected />
                <Token text="Bulgaria" />
                <Token text="England" />
                <Token text="Finland" />
              </>
            }
          />
        </FilterGroupItem>
        <FilterGroupItem label="Input" filterKey="input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Switch" filterKey="switch">
          <Switch />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/ initial selected" hiddenInFilterBar filterKey="selectInitialSelected">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/o initial selected" filterKey="selectNoInitialSelected">
          <Select>
            <Option data-key="Test 1" selected icon="add">
              Test 1
            </Option>
            <Option data-key="Test 2" icon="add">
              Test 2
            </Option>
            <Option data-key="Test 3" icon="add">
              Test 3
            </Option>
            <Option data-key="Test 4" icon="add">
              Test 4
            </Option>
            <Option data-key="Test 5" icon="add">
              Test 5
            </Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="MultiBox w/ initial selected" groupName="Group 1" filterKey="multiBoxInitialSelected">
          <MultiComboBox>
            <MultiComboBoxItem text="MultiComboBoxItem 1" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
            <MultiComboBoxItem text="MultiComboBoxItem 3" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem
          label="ComboBox w/o initial selected"
          groupName="Group 2"
          filterKey="comboBoxNoInitialSelected"
        >
          <ComboBox>
            <ComboBoxItem text="ComboBoxItem 1" />
            <ComboBoxItem text="ComboBoxItem 2" />
            <ComboBoxItem text="ComboBoxItem 3" />
            <ComboBoxItem text="ComboBoxItem 4" />
          </ComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Date Picker" groupName="Group 2" filterKey="datePicker">
          <DateRangePicker style={{ minWidth: 'auto' }} />
        </FilterGroupItem>
      </FilterBar>
    );
  },
};

const initialState = {
  age: 37,
  countries: {},
  currency: 'USD',
  date: '',
  dateRange: '',
  search: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_AGE':
      return { ...state, age: action.payload };
    case 'SET_COUNTRIES':
      return { ...state, countries: action.payload };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_DATE_RANGE':
      return { ...state, dateRange: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'DIALOG_RESTORE':
      return action.payload;
    default:
      return state;
  }
}

export const WithLogic: Story = {
  render: () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [visibleFilters, setVisibleFilters] = useState(new Set(['age', 'countries']));
    const { age, countries, currency, date, dateRange, search } = state;
    const prevDialogOpenState = useRef(undefined);

    const handleSearch = (e) => {
      dispatch({ type: 'SET_SEARCH', payload: e.target.value });
    };

    const handleAgeChange = (e) => {
      dispatch({ type: 'SET_AGE', payload: e.target.value });
    };

    const handleCountriesChange = (e) => {
      const newCountries = e.detail.items.reduce((acc, cur) => {
        return { ...acc, [cur.getAttribute('text').toLowerCase()]: true };
      }, {});
      dispatch({ type: 'SET_COUNTRIES', payload: newCountries });
    };

    const handleCurrencyChange = (e) => {
      dispatch({ type: 'SET_CURRENCY', payload: e.detail.selectedOption.textContent });
    };

    const handleDateChange = (e) => {
      if (e.detail.valid) {
        dispatch({ type: 'SET_DATE', payload: e.detail.value });
      }
    };

    const handleDateRangeChange = (e) => {
      if (e.detail.valid) {
        dispatch({ type: 'SET_DATE_RANGE', payload: e.detail.value });
      }
    };

    const handleFiltersDialogOpen = () => {
      prevDialogOpenState.current = state;
    };

    const handleRestore: FilterBarPropTypes['onRestore'] = (payload) => {
      const prevDialogOpenVisibleFilters = payload.selectedFilterKeys;
      dispatch({ type: 'DIALOG_RESTORE', payload: prevDialogOpenState.current });
      setVisibleFilters(new Set(prevDialogOpenVisibleFilters));
    };

    const handleFiltersDialogSelectionChange: FilterBarPropTypes['onFiltersDialogSelectionChange'] = (payload) => {
      const visibleFilterKeys = payload.selectedFilterKeys;
      setVisibleFilters(new Set(visibleFilterKeys));
    };

    return (
      <>
        <FilterBar
          showResetButton
          search={<Input onInput={handleSearch} />}
          onRestore={handleRestore}
          onFiltersDialogOpen={handleFiltersDialogOpen}
          onFiltersDialogSelectionChange={handleFiltersDialogSelectionChange}
        >
          <FilterGroupItem filterKey="age" label="Age" active={!!age} required>
            <StepInput value={age} onChange={handleAgeChange} required />
          </FilterGroupItem>
          <FilterGroupItem
            filterKey="countries"
            label="Countries"
            active={Object.keys(countries).length > 0}
            hiddenInFilterBar={!visibleFilters.has('countries')}
          >
            <MultiComboBox onSelectionChange={handleCountriesChange}>
              <MultiComboBoxItem text="Argentina" selected={countries.argentina} />
              <MultiComboBoxItem text="Bulgaria" selected={countries.bulgaria} />
              <MultiComboBoxItem text="Finland" selected={countries.finland} />
              <MultiComboBoxItem text="Germany" selected={countries.germany} />
              <MultiComboBoxItem text="Ireland" selected={countries.ireland} />
              <MultiComboBoxItem text="Ukraine" selected={countries.ukraine} />
              <MultiComboBoxItem text="USA" selected={countries.usa} />
            </MultiComboBox>
          </FilterGroupItem>
          <FilterGroupItem
            filterKey="currency"
            label="Currency"
            active={!!currency}
            hiddenInFilterBar={!visibleFilters.has('currency')}
          >
            <Select onChange={handleCurrencyChange}>
              <Option additionalText="€" selected={currency === 'EUR'}>
                EUR
              </Option>
              <Option additionalText="$" selected={currency === 'USD'}>
                USD
              </Option>
              <Option additionalText="£" selected={currency === 'GBP'}>
                GBP
              </Option>
              <Option additionalText="₺" selected={currency === 'TRY'}>
                TRY
              </Option>
              <Option additionalText="¥" selected={currency === 'JPY'}>
                JPY
              </Option>
            </Select>
          </FilterGroupItem>
          <FilterGroupItem
            filterKey="date"
            label="Date"
            active={!!date}
            hiddenInFilterBar={!visibleFilters.has('date')}
          >
            <DatePicker value={date} onChange={handleDateChange} style={{ minWidth: 'auto' }} />
          </FilterGroupItem>
          <FilterGroupItem
            filterKey="date-range"
            label="Date Range"
            active={!!dateRange}
            hiddenInFilterBar={!visibleFilters.has('date-range')}
          >
            <DateRangePicker value={dateRange} onChange={handleDateRangeChange} style={{ minWidth: 'auto' }} />
          </FilterGroupItem>
        </FilterBar>
        <FlexBox direction={FlexBoxDirection.Column}>
          <FlexBox>
            <Label showColon>Search</Label>
            <Text>{search}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Age</Label>
            <Text>{age}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Countries</Label>
            <Text>{JSON.stringify(countries)}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Currency</Label>
            <Text>{currency}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Date</Label>
            <Text>{date}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Date Range</Label>
            <Text>{dateRange}</Text>
          </FlexBox>
          <hr style={{ width: '100%' }} />
          <FlexBox>
            <Label showColon>Visible Filters</Label>
            <Text>{Array.from(visibleFilters).join(', ')}</Text>
          </FlexBox>
        </FlexBox>
      </>
    );
  },
};

export const InDynamicPage: Story = {
  name: 'In DynamicPage',
  render: (args) => {
    return (
      <DynamicPage
        style={{ height: '800px', position: 'relative', zIndex: 0 }}
        titleArea={
          <DynamicPageTitle
            style={{ minHeight: '0px' }}
            heading={
              <VariantManagement
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <VariantItem>Variant 1</VariantItem>
                <VariantItem selected>Variant 2</VariantItem>
              </VariantManagement>
            }
            snappedHeading={
              <VariantManagement
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <VariantItem>Variant 1</VariantItem>
                <VariantItem selected>Variant 2</VariantItem>
              </VariantManagement>
            }
          />
        }
        headerArea={
          <DynamicPageHeader>
            <FilterBar {...args} hideToolbar>
              <FilterGroupItem filterKey="StepInput" label="StepInput">
                <StepInput />
              </FilterGroupItem>
              <FilterGroupItem filterKey="MultiInput" label="MultiInput" active required>
                <MultiInput
                  required
                  tokens={
                    <>
                      <Token text="Argentina" selected />
                      <Token text="Bulgaria" />
                      <Token text="England" />
                      <Token text="Finland" />
                    </>
                  }
                />
              </FilterGroupItem>
              <FilterGroupItem filterKey="Input" label="Input">
                <Input placeholder="Placeholder" />
              </FilterGroupItem>
              <FilterGroupItem filterKey="Switch" label="Switch" hiddenInFilterBar>
                <Switch />
              </FilterGroupItem>
              <FilterGroupItem filterKey="select-init-selected" label="SELECT w/ initial selected" hiddenInFilterBar>
                <Select>
                  <Option>Option 1</Option>
                  <Option selected>Option 2</Option>
                  <Option>Option 3</Option>
                  <Option>Option 4</Option>
                </Select>
              </FilterGroupItem>
              <FilterGroupItem filterKey="select-not-selected" label="SELECT w/o initial selected" hiddenInFilterBar>
                <Select>
                  <Option data-key="Test 1" selected icon="add">
                    Test 1
                  </Option>
                  <Option data-key="Test 2" icon="add">
                    Test 2
                  </Option>
                  <Option data-key="Test 3" icon="add">
                    Test 3
                  </Option>
                  <Option data-key="Test 4" icon="add">
                    Test 4
                  </Option>
                  <Option data-key="Test 5" icon="add">
                    Test 5
                  </Option>
                </Select>
              </FilterGroupItem>
              <FilterGroupItem
                filterKey="mcb-selected"
                label="MultBox w/ initial selected"
                groupName="Group 1"
                hiddenInFilterBar
              >
                <MultiComboBox>
                  <MultiComboBoxItem text="MultiComboBoxItem 1" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
                  <MultiComboBoxItem text="MultiComboBoxItem 3" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
                </MultiComboBox>
              </FilterGroupItem>
              <FilterGroupItem
                filterKey="cb-not-selected"
                label="ComboBox w/o initial selected"
                groupName="Group 2"
                hiddenInFilterBar
              >
                <ComboBox>
                  <ComboBoxItem text="ComboBoxItem 1" />
                  <ComboBoxItem text="ComboBoxItem 2" />
                  <ComboBoxItem text="ComboBoxItem 3" />
                  <ComboBoxItem text="ComboBoxItem 4" />
                </ComboBox>
              </FilterGroupItem>
              <FilterGroupItem filterKey="date-picker" label="Date Picker" groupName="Group 2">
                <DateRangePicker style={{ minWidth: 'auto' }} />
              </FilterGroupItem>
            </FilterBar>
          </DynamicPageHeader>
        }
      >
        <div
          style={{
            background: 'cadetblue',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>Content</Text>
        </div>
      </DynamicPage>
    );
  },
};

export const WithReordering: Story = {
  render(args) {
    const uniqueId = useId();
    const [visibleChildrenByKey, setVisibleChildrenByKey] = useState<Record<string, boolean>>({
      '0': true,
      '1': true,
      '2': true,
      '3': true,
      '5': true,
    });
    const [orderedFilterKeys, setOrderedFilterKeys] = useState(['0', '1', '2', '3', '4', '5']);

    const handleFiltersDialogSave: FilterBarPropTypes['onFiltersDialogSave'] = (e) => {
      setOrderedFilterKeys(e.detail.reorderedFilterKeys);
      setVisibleChildrenByKey(
        e.detail.selectedFilterKeys.reduce((acc, cur) => {
          acc[cur] = true;
          return acc;
        }, {}),
      );
    };

    return (
      <FilterBar {...args} enableReordering showResetButton onFiltersDialogSave={handleFiltersDialogSave}>
        {orderedFilterKeys.map((filterKey) => {
          const isHidden = !visibleChildrenByKey[filterKey];
          switch (filterKey) {
            case '0':
              return (
                <FilterGroupItem filterKey="0" key={`${uniqueId}-0`} label="StepInput" required>
                  <StepInput required />
                </FilterGroupItem>
              );
            case '1':
              return (
                <FilterGroupItem
                  filterKey="1"
                  key={`${uniqueId}-1`}
                  label="RatingIndicator"
                  hiddenInFilterBar={isHidden}
                >
                  <RatingIndicator />
                </FilterGroupItem>
              );
            case '2':
              return (
                <FilterGroupItem
                  filterKey="2"
                  key={`${uniqueId}-2`}
                  label="MultiInput"
                  active
                  hiddenInFilterBar={isHidden}
                >
                  <MultiInput
                    tokens={
                      <>
                        <Token text="Argentina" selected />
                        <Token text="Bulgaria" />
                        <Token text="England" />
                        <Token text="Finland" />
                      </>
                    }
                  />
                </FilterGroupItem>
              );
            case '3':
              return (
                <FilterGroupItem filterKey="3" key={`${uniqueId}-3`} label="Input" hiddenInFilterBar={isHidden}>
                  <Input placeholder="Placeholder" />
                </FilterGroupItem>
              );
            case '4':
              return (
                <FilterGroupItem filterKey="4" key={`${uniqueId}-4`} label="Switch" hiddenInFilterBar={isHidden}>
                  <Switch />
                </FilterGroupItem>
              );
            case '5':
              return (
                <FilterGroupItem
                  filterKey="5"
                  key={`${uniqueId}-5`}
                  label="SELECT w/ initial selected"
                  hiddenInFilterBar={isHidden}
                >
                  <Select>
                    <Option>Option 1</Option>
                    <Option selected>Option 2</Option>
                    <Option>Option 3</Option>
                    <Option>Option 4</Option>
                  </Select>
                </FilterGroupItem>
              );
            default:
              return null;
          }
        })}
      </FilterBar>
    );
  },
};

export const IdentifyInputEventOrigin: Story = {
  parameters: {
    docs: {
      source: {
        type: 'code',
        transform: () => `
        const InputEventOrigin = (props) => {
  const [origin, setOrigin] = useState("");

  const handleInput = (e) => {
    if (!!e.currentTarget.parentElement.dataset.inFilterBar) {
      setOrigin("FilterBar");
    } else {
      setOrigin("Filters Dialog");
    }
  };

  return (
    <>
      <FilterBar {...props}>
        <FilterGroupItem filterKey="input" label="Input">
          <Input onInput={handleInput} />
        </FilterGroupItem>
      </FilterBar>
      <br />
      <Label>Last fired input event origin:</Label>
      <Text>{origin}</Text>
    </>
  );
};

        `,
      },
    },
  },
  render(args) {
    const [origin, setOrigin] = useState('');
    const handleInput = (e) => {
      if (e.currentTarget.parentElement.dataset.inFilterBar) {
        setOrigin('FilterBar');
      } else {
        setOrigin('Filters Dialog');
      }
    };
    return (
      <>
        <FilterBar {...args}>
          <FilterGroupItem filterKey="input" label="Input">
            <Input onInput={handleInput} />
          </FilterGroupItem>
        </FilterBar>
        <br />
        <Label>Last fired input event origin:</Label>
        <Text>{origin}</Text>
      </>
    );
  },
};
