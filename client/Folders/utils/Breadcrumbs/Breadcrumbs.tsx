"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  transformLabel?: (segment: string) => string;
  showHome?: boolean;
  homeLabel?: string;
  className?: string;
  separator?: React.ReactNode;
}

export default function Breadcrumbs({
  items = [],
  transformLabel,
  showHome = true,
  homeLabel = "خانه",
  className = "",
  separator = ">",
}: BreadcrumbsProps) {
  const pathname = usePathname();

  const pathSegments = pathname
    .split("/")
    .filter(Boolean);

  const generatedItems: BreadcrumbItem[] = pathSegments.map(
    (segment, index) => ({
      href:
        "/" + pathSegments.slice(0, index + 1).join("/"),
      label: transformLabel
        ? transformLabel(segment)
        : defaultTransform(segment),
    })
  );

  const breadcrumbItems =
    items.length > 0 ? items : generatedItems;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-2 text-sm ${className}`}
    >
      {showHome && (
        <>
          <Link
            href="/"
            className="text-gray-500 hover:text-black "
          >
            {homeLabel}
          </Link>

          {breadcrumbItems.length > 0 && (
            <span>{separator}</span>
          )}
        </>
      )}

      {breadcrumbItems.map((item, index) => {
        const isLast =
          index === breadcrumbItems.length - 1;

        if (isLast) {
          return (
            <span
              key={item.href || item.label}
              className="text-[16px]"
            >
              {item.label}
            </span>
          );
        }

        return (
          <div
            key={item.href || item.label}
            className="flex items-center gap-2"
          >
            <Link
              href={item.href || "#"}
              className="text-gray-500 hover:text-black text-[16px]"
            >
              {item.label}
            </Link>

            <span>{separator}</span>
          </div>
        );
      })}
    </nav>
  );
}

function defaultTransform(text: string) {
  return decodeURIComponent(text)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}