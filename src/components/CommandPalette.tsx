import * as React from "react";
import {
  ActionId,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  useMatches,
  ActionImpl,
  useRegisterActions
} from "kbar";
import { useTheme } from "next-themes";

const CommandPalette = () => {
  const { theme, setTheme } = useTheme();

  const useThemeActions = () => {
    useRegisterActions([
      {
        id: "theme",
        name: "Change theme…",
        keywords: "interface color dark light white black",
        section: "Preferences"
      },
      {
        id: "light",
        name: "Light",
        shortcut: ["l"],
        keywords: "light white",
        perform: () => setTheme("light"),
        parent: "theme"
      },
      {
        id: "dark",
        name: "Dark",
        shortcut: ["d"],
        keywords: "dark black",
        perform: () => setTheme("dark"),
        parent: "theme"
      }
    ]);
  };

  useThemeActions();

  return (
    <KBarPortal>
      <KBarPositioner className="z-50 select-none backdrop-blur bg-black/70">
        <KBarAnimator className="w-1/3 overflow-hidden text-lg text-white bg-gray-100 rounded-lg dark:bg-[#111111] min-w-500">
          <KBarSearch className="w-full p-5 text-gray-900 bg-gray-100 rounded-lg outline-none dark:bg-[#111111] dark:text-white" />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

const RenderResults = () => {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="py-5 ml-4 text-sm text-gray-600 uppercase">
            {item}
          </div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId!}
          />
        )
      }
    />
  );
};

// eslint-disable-next-line react/display-name
const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
      currentRootActionId
    }: {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        className={`p-4 flex align-center justify-between cursor-pointer transition-all ${
          active ? "bg-gray-200 dark:bg-[#222222]" : "transparent"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-lg text-gray-900 dark:text-white">
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <div key={ancestor.id} className="text-gray-500">
                    <span className="mr-2">{ancestor.name}</span>
                    <span>&rsaquo;</span>
                  </div>
                ))}
              {action.icon}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span className="text-base text-gray-400">{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div className="flex items-center justify-center">
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                className="px-2 py-1 ml-2 text-sm bg-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 h-fit"
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

export default CommandPalette;
