import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  MileIQLogo,
  MileIQSymbol,
  NavButton,
} from '$components';

import Arrowdown from '$icons/arrow-down-b.svg?react';
import BusinessICON from '$icons/between-offices.svg?react';
import BlogICON from '$icons/blog.svg?react';
import CarICON from '$icons/car.svg?react';
import ReportsICON from '$icons/reports.svg?react';
import SettingsICON from '$icons/settings.svg?react';
import SubscriptionICON from '$icons/subscription.svg?react';
import SupportICON from '$icons/support.svg?react';

import { version } from 'package.json';

import { cn } from '$lib/utils';
import './layout.css';

// review all data-testid

export const DashboardLayout = ({
  hasSubmenu,
  hasAside,
  header,
  submenu,
  aside,
  children,
}) => {
  return (
    <div
      id="dashboard-layout"
      className={cn([hasSubmenu && 'with-submenu', hasAside && 'with-aside'])}
    >
      {/* TBD: which is the best placement order for accessibility - screen reader */}
      <div id="header">{header}</div>
      <main id="main">{children}</main>
      {hasAside && <div id="aside">{aside}</div>}
      <div id="sidebar">
        <Account />
        <Menu />
      </div>
      {hasSubmenu && <div id="submenu">{submenu}</div>}
      <div id="footer">{version}</div>
    </div>
  );
};

const Account = () => {
  return (
    <div className="w-full relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full">
          <div className="top-0 absolute L:w-full L:relative">
            <div data-testid="miq-trigger-dropdown" tabIndex={-1}>
              <div
                className="group/menu flex items-center justify-between w-full"
                data-testid="sidenav-top-menu-label"
              >
                <div>
                  <MileIQLogo className="hidden L:block w-[107px] h-[30px]" />
                  <MileIQSymbol className="L:hidden w-[31px] h-[30px]" />
                </div>
                <div className="flex items-center L:group-hover/menu:bg-interaction-secondary rounded-[14px] w-[20px] L:p-[10px] L:w-[40px] ml-[-3px] ">
                  <Arrowdown className="scale-75 L:scale-100" />
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onSelect={() => {}}>Option</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const Menu = () => {
  const onClick = (path) => {};

  const items = [
    {
      label: 'Menu',
      items: [
        {
          label: 'Drives',
          icon: <CarICON />,
          isActive: true,
          onClick,
        },
        {
          label: 'Reports',
          icon: <ReportsICON />,
          isActive: false,
          onClick,
        },
        {
          label: 'Subscription',
          icon: <SubscriptionICON />,
          isActive: false,
          onClick,
        },
        {
          label: 'Settings',
          icon: <SettingsICON />,
          isActive: false,
          onClick,
        },
      ],
    },
    {
      label: 'MileIQ for Teams',
      items: [
        {
          label: 'Teams Dashboard',
          icon: <BusinessICON />,
          isExternal: true,
          isActive: false,
          onClick,
        },
      ],
    },
    {
      label: 'Help',
      items: [
        {
          label: 'Blog',
          icon: <BlogICON />,
          isActive: false,
          onClick,
        },
        {
          label: 'Help',
          icon: <SupportICON />,
          isActive: false,
          onClick,
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col">
      {items.map(({ label, items }) => (
        <div className="w-full" key={label}>
          <div className="px-3 border-t border-t-black/25 my-space20 L:my-space12 L:border-0">
            <span className="text-bodyS-600 text-black/40 hidden L:inline">
              {label}
            </span>
          </div>
          <div className="L:hidden w-full flex flex-col gap-space2">
            {items.map((item) => (
              <NavButton
                iconOnly
                key={item.label}
                leftIcon={item.icon}
                isActive={item.isActive}
                onClick={item.onClick}
              >
                {item.label}
              </NavButton>
            ))}
          </div>
          <div className="hidden w-full L:flex flex-col gap-space2">
            {items.map((item) => (
              <NavButton
                className="group/navbutton"
                key={item.label}
                leftIcon={item.icon}
                isActive={item.isActive}
                onClick={item.onClick}
              >
                {item.label}
                {item.isExternal && (
                  <svg
                    className="transition-opacity duration-300 opacity-0 w-space12 h-space12 group-hover/navbutton:opacity-40"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15 10.833v5a1.666 1.666 0 0 1-1.667 1.667H4.167A1.667 1.667 0 0 1 2.5 15.833V6.667A1.667 1.667 0 0 1 4.167 5h5M12.5 2.5h5v5M8.333 11.667 17.5 2.5"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
              </NavButton>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
