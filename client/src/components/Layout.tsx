import { AppShell, AppShellProps } from "@mantine/core";

export const Layout = ({ children }: AppShellProps) => {
  return (
    <AppShell
      padding="xl"
      fixed
      header={<div>Header</div>}
    >
      {children}
    </AppShell>
  );
};