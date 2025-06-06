// import Ping from "./Ping";
// import { client } from "@/sanity/lib/client";
// import { STARTUPS_VIEWS_QUERY } from "@/sanity/lib/queries";
// import { writeClient } from "@/sanity/lib/write-client";
// import { unstable_after as after } from "next/dist/server/web/spec-extension/unstable-after";
// const View = async ({ id }: { id: string }) => {
//   const { views: totalViews } = await client
//     .withConfig({ useCdn: false })
//     .fetch(STARTUPS_VIEWS_QUERY, { id });

//   after(async () => {
//     try {
//       await writeClient
//         .patch(id)
//         .set({ views: totalViews + 1 })
//         .commit();
//     } catch (error) {
//       console.error("Failed to update view count:", error);
//     }
//   });

//   return (
//     <div className="view-container">
//       <div className="absolute -top-2 -right-2">
//         <Ping />
//       </div>

//       <p className="view-text">
//         <span className="font-black">Views: {totalViews}</span>
//       </p>
//     </div>
//   );
// };

// export default View;

import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUPS_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";

// Server Action to increment views
async function incrementView(id: string) {
  "use server";

  try {
    const { views: currentViews } = await client
      .withConfig({ useCdn: false })
      .fetch(STARTUPS_VIEWS_QUERY, { id });

    await writeClient
      .patch(id)
      .set({ views: currentViews + 1 })
      .commit();
  } catch (error) {
    console.error("Failed to increment view:", error);
  }
}

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUPS_VIEWS_QUERY, { id });

  // Call the server action
  incrementView(id);

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
};

export default View;
