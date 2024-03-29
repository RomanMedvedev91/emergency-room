import { AppShell, AppShellProps, ScrollArea } from "@mantine/core";

export const Layout = ({ children }: AppShellProps) => {
  return (
    <AppShell
      padding="xl"
      fixed
      header={<div>Header</div>}
    >
      <ScrollArea>
        {children}
      </ScrollArea>
    </AppShell>
  );
};