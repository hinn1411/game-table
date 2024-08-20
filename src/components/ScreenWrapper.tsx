interface SectionContainerProps {
  children: React.ReactNode;
}

export default function ScreenWrapper({ children }: SectionContainerProps) {
  return (
    <main className="flex flex-col space-y-6 mb-6 mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      {children}
    </main>
  );
}
