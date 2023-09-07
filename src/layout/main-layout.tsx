export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1>My page</h1>
      </header>
      <main>{children}</main>
      <footer>
        <small>Copyright Ⓒ 2023 Jorgen. All Rights Reserved</small>
      </footer>
    </>
  );
}
