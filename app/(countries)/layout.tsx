import React from "react";

import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <LeftSidebar />

      <section
        className="flex min-h-screen flex-1 flex-col 
            p-6 max-md:pb-14 
            sm:px-14"
      >
        <div className="mx-auto w-full max-w-5xl">{children}</div>
      </section>
    </main>
  );
};

export default layout;
