"use client";

import React, { useState, ReactNode } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Laptop,
  BarChart3,
  Calendar,
  MapPin,
} from "lucide-react";

interface ServiceTab {
  id: string;
  label: string;
  icon: ReactNode;
  content?: ReactNode;
}

interface ServiceTabsProps {
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  children?: ReactNode;
  tabs?: ServiceTab[];
}

export function ServiceTabs({
  defaultTab = "app",
  onTabChange,
  className = "",
  children,
  tabs: propTabs,
}: ServiceTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const defaultTabs: ServiceTab[] = [
    {
      id: "app",
      label: "Application",
      icon: <Laptop className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      id: "web",
      label: "Web",
      icon: <Globe className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      id: "digital",
      label: "Digital",
      icon: <BarChart3 className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      id: "event",
      label: "Event",
      icon: <Calendar className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      id: "location",
      label: "Location",
      icon: <MapPin className="h-4 w-4 md:h-5 md:w-5" />,
    },
  ];

  const tabs = propTabs || defaultTabs;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  // Find the active tab content
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={`relative ${className}`}>
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between bg-slate-800 dark:bg-slate-800 rounded-full p-1.5 overflow-hidden shadow-inner border border-slate-700/50">
          {/* Navigation Controls for Small Screens */}
          <button
            className="md:hidden flex-none flex items-center justify-center h-8 w-8 rounded-full text-slate-400 hover:text-white bg-slate-800"
            onClick={() => {
              const currentIndex = tabs.findIndex(
                (tab) => tab.id === activeTab
              );
              const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
              handleTabChange(tabs[prevIndex].id);
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Tabs */}
          <div className="flex-1 flex justify-center">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`
                    relative flex items-center justify-center gap-2 py-2 px-3 md:px-5 rounded-full text-sm transition-all duration-200
                    ${
                      isActive
                        ? "text-slate-900 font-medium"
                        : "text-slate-400 hover:text-slate-200"
                    }
                    ${
                      tab.id !== activeTab &&
                      tab.id !== tabs[0].id &&
                      tab.id !== tabs[tabs.length - 1].id
                        ? "hidden md:flex"
                        : "flex"
                    }
                  `}
                >
                  {/* Active Background */}
                  {isActive && (
                    <span className="absolute inset-0 bg-white rounded-full" />
                  )}

                  {/* Icon and Label */}
                  <span className="relative flex items-center gap-2">
                    {tab.icon}
                    <span className={isActive ? "" : "hidden md:inline"}>
                      {tab.label}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls for Small Screens */}
          <button
            className="md:hidden flex-none flex items-center justify-center h-8 w-8 rounded-full text-slate-400 hover:text-white bg-slate-800"
            onClick={() => {
              const currentIndex = tabs.findIndex(
                (tab) => tab.id === activeTab
              );
              const nextIndex = (currentIndex + 1) % tabs.length;
              handleTabChange(tabs[nextIndex].id);
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {children && (
        <div className="mt-8">
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return null;

            // If the child has a tabId prop that matches the active tab, show it
            if (child.props.tabId === activeTab) {
              return child;
            }

            return null;
          })}
        </div>
      )}

      {/* If no children but tabs have content */}
      {!children && activeTabContent && (
        <div className="mt-8">{activeTabContent}</div>
      )}
    </div>
  );
}

// Tab Panel component
interface TabPanelProps {
  tabId: string;
  children: ReactNode;
}

export function TabPanel({ children, tabId }: TabPanelProps) {
  return <div className="animate-fadeIn">{children}</div>;
}
