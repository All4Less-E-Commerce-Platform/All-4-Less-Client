// components/Breadcrumb.js
import { theme } from "@/themes/theme";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumb() {
  const pathname = usePathname();

  const pathParts = pathname.split("/").filter((part) => part);

  return (
    <nav aria-label="breadcrumb" className="text-sm mb-4">
      <Box
        sx={{
          color: theme.palette.primary.main,
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
          }}
        >
          <Link href="/">Home</Link>
        </Typography>

        {pathParts.map((part, index) => {
          const isLast = index === pathParts.length - 1;
          const href = `/${pathParts.slice(0, index + 1).join("/")}`;
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Typography key={index} className="inline-flex items-center">
              <span className="mx-2"> / </span>
              {isLast ? (
                <span
                  style={{
                    opacity: 0.7,
                    fontSize: "12px",
                  }}
                >
                  {decodeURIComponent(part)}
                </span>
              ) : (
                <Link
                  style={{
                    fontSize: "12px",
                  }}
                  href={href}
                >
                  {decodeURIComponent(part)}
                </Link>
              )}
            </Typography>
          );
        })}
      </Box>
    </nav>
  );
}
