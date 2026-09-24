import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { catalogApps, categories, catalogStats } from "@/data/catalog";
import { AppCard } from "./cards";
import { cn } from "@/lib/utils";

export function CatalogBrowser() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalogApps.filter((a) => {
      const matchCat = active === "All" || a.category === active;
      const matchQ = !q || a.name.toLowerCase().includes(q) || a.wingetId.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [active, query]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search applications..."
            aria-label="Search applications"
            className="h-11 w-full rounded-lg border border-border bg-surface pl-9 pr-3 text-sm text-foreground shadow-panel outline-none placeholder:text-muted-foreground focus-visible:border-silver-soft"
          />
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {filtered.length} of {catalogStats.totalApps} curated applications
        </p>
      </div>

      <div
        className="mt-4 flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label="Application categories"
      >
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "shrink-0 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors",
              active === c
                ? "border-graphite bg-graphite text-primary-foreground"
                : "border-border bg-surface text-graphite hover:bg-hover",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <AppCard key={a.name} app={a} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          No applications match that search.
        </p>
      ) : null}
    </div>
  );
}
