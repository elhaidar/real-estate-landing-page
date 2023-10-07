"use client";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full">
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </main>
  );
};

export default Container;
