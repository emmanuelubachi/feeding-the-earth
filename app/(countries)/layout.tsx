import React from "react";

import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <LeftSidebar />

      <section
        className="m-auto flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden 
            p-6 max-md:pb-14 
            sm:px-14"
      >
        <div className="mx-auto w-full ">{children}</div>
      </section>
    </main>
  );
};

export default layout;
