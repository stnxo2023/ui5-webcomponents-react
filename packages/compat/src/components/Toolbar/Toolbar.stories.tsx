import type { Meta, StoryObj } from '@storybook/react';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import downloadIcon from '@ui5/webcomponents-icons/dist/download.js';
import editIcon from '@ui5/webcomponents-icons/dist/edit.js';
import favoriteIcon from '@ui5/webcomponents-icons/dist/favorite.js';
import settingsIcon from '@ui5/webcomponents-icons/dist/settings.js';
import { Button } from '@ui5/webcomponents-react/dist/webComponents/Button/index.js';
import { DatePicker } from '@ui5/webcomponents-react/dist/webComponents/DatePicker/index.js';
import { Icon } from '@ui5/webcomponents-react/dist/webComponents/Icon/index.js';
import { Input } from '@ui5/webcomponents-react/dist/webComponents/Input/index.js';
import { Menu } from '@ui5/webcomponents-react/dist/webComponents/Menu/index.js';
import { MenuItem } from '@ui5/webcomponents-react/dist/webComponents/MenuItem/index.js';
import { Select } from '@ui5/webcomponents-react/dist/webComponents/Select/index.js';
import { Slider } from '@ui5/webcomponents-react/dist/webComponents/Slider/index.js';
import { Switch } from '@ui5/webcomponents-react/dist/webComponents/Switch/index.js';
import { Text } from '@ui5/webcomponents-react/dist/webComponents/Text/index.js';
import { ToggleButton } from '@ui5/webcomponents-react/dist/webComponents/ToggleButton/index.js';
import { useState } from 'react';
import { ToolbarDesign } from '../../enums/ToolbarDesign.js';
import { ToolbarStyle } from '../../enums/ToolbarStyle.js';
import { OverflowToolbarButton } from '../OverflowToolbarButton/index.js';
import { OverflowToolbarToggleButton } from '../OverflowToolbarToggleButton/index.js';
import { ToolbarSeparator } from '../ToolbarSeparator/index.js';
import { ToolbarSpacer } from '../ToolbarSpacer/index.js';
import { Toolbar } from './index.js';

const meta = {
  title: 'Toolbar',
  component: Toolbar,
  argTypes: {
    children: { control: { disable: true } },
    as: { control: { disable: true } },
    overflowButton: { control: { disable: true } },
  },
  args: {
    design: ToolbarDesign.Auto,
    toolbarStyle: ToolbarStyle.Standard,
  },
  parameters: {
    chromatic: { delay: 1000 },
  },
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <Toolbar {...args}>
        <Text>Toolbar</Text>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button One
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button Two
        </Button>
        <Input data-accessible-name />
        <DatePicker data-accessible-name />
        <Switch data-accessible-name />
      </Toolbar>
    );
  },
};

export const RightAlignedItems: Story = {
  name: 'right aligned items',
  render(args) {
    return (
      <Toolbar {...args}>
        <ToolbarSpacer />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button
        </Button>
        <Icon data-accessible-name accessibleName="Settings" name={settingsIcon} />
        <Icon data-accessible-name accessibleName="Download" name={downloadIcon} />
      </Toolbar>
    );
  },
};

export const EvenlyAlignedItems: Story = {
  name: 'evenly aligned items',
  render(args) {
    return (
      <Toolbar {...args}>
        <Text>Left</Text>
        <ToolbarSpacer />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Center
        </Button>
        <ToolbarSpacer />
        <Text>Right</Text>
        <Icon data-accessible-name accessibleName="Settings" name={settingsIcon} />
        <Icon data-accessible-name accessibleName="Download" name={downloadIcon} />
      </Toolbar>
    );
  },
};

export const WithSeparator: Story = {
  name: 'with separator',
  render(args) {
    return (
      <Toolbar {...args}>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item1
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item2
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item3
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item4
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item5
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item6
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item7
        </Button>
      </Toolbar>
    );
  },
};

export const PopoverInOverflowPopover: Story = {
  name: 'Popover in Overflow Popover',
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);
    const [opener, setOpener] = useState('openMenuBtn');
    const handlePopoverOpenerClick = (e) => {
      setOpener(e.target.id);
      setPopoverIsOpen(true);
    };
    return (
      <>
        <Toolbar {...args} style={{ width: '400px' }}>
          <Text>Toolbar</Text>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button One
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Two
          </Button>
          <Button
            data-accessible-name
            design={ButtonDesign.Transparent}
            id="openMenuBtn"
            onClick={handlePopoverOpenerClick}
          >
            Open Popover (Menu)
          </Button>
        </Toolbar>
        <Menu
          opener={opener}
          open={popoverIsOpen}
          onClose={() => {
            setPopoverIsOpen(false);
          }}
        >
          <MenuItem text="New File" />
          <MenuItem text="New Folder" />
        </Menu>
      </>
    );
  },
};

export const WithOverflowButton: Story = {
  name: 'with overflow button',
  render(args) {
    const [value, setValue] = useState(100);
    const handleInput = (e) => {
      setValue(e.target.value);
    };
    return (
      <>
        <Slider onInput={handleInput} value={value} />
        <Toolbar {...args} style={{ width: `calc(100% * ${value / 100})` }}>
          <Text>Toolbar</Text>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button One
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent} icon="accept" />
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Two
          </Button>
          <Select data-accessible-name style={{ width: 'auto' }} />
          <Switch data-accessible-name />
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Three
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Four
          </Button>
          <OverflowToolbarButton data-accessible-name icon={editIcon}>
            Edit
          </OverflowToolbarButton>
          <OverflowToolbarToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon}>
            Favorite
          </OverflowToolbarToggleButton>
        </Toolbar>
      </>
    );
  },
};

export const OverflowBtns: Story = {
  name: 'OverflowToolbarButton & OverflowToolbarToggleButton',
  render(args) {
    return (
      <Toolbar {...args} style={{ width: '500px', ...args.style }}>
        <Button data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton
          data-accessible-name
          design={ButtonDesign.Transparent}
          icon={editIcon}
          tooltip="Text only visible in popover"
        >
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton
          data-accessible-name
          design={ButtonDesign.Transparent}
          icon={favoriteIcon}
          tooltip="Text always visible"
        >
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton
          data-accessible-name
          design={ButtonDesign.Transparent}
          icon={favoriteIcon}
          tooltip="Text only visible in popover"
        >
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
        <Button data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton
          data-accessible-name
          design={ButtonDesign.Transparent}
          icon={editIcon}
          tooltip="Text only visible in popover"
        >
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton
          data-accessible-name
          design={ButtonDesign.Transparent}
          icon={favoriteIcon}
          tooltip="Text always visible"
        >
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton
          data-accessible-name
          design={ButtonDesign.Transparent}
          icon={favoriteIcon}
          tooltip="Text only visible in popover"
        >
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
      </Toolbar>
    );
  },
};

export const CustomOverflowButton: Story = {
  name: 'with custom overflow button',
  render(args) {
    return (
      <>
        <Toolbar
          {...args}
          style={{ width: '300px', ...args.style }}
          overflowButton={
            <ToggleButton
              icon="menu2"
              design={ButtonDesign.Transparent}
              onClick={() => {
                alert('Custom action');
              }}
            />
          }
        >
          <Input />
          <Text maxLines={1}>Overflow Content</Text>
        </Toolbar>
        <Toolbar
          {...args}
          style={{ width: '300px', ...args.style }}
          overflowButton={
            <ToggleButton
              icon="menu2"
              design={ButtonDesign.Transparent}
              onClick={(e) => {
                e.preventDefault();
                alert('Custom action');
              }}
            />
          }
        >
          <Text maxLines={1}>Opening the popover is prevented</Text>
          <Text maxLines={1}>Overflow Content</Text>
        </Toolbar>
      </>
    );
  },
};
