import { getWishes } from "@/app/actions/wishActions";
import WishingWallClient from "./WishingWallClient";
export default async function WishingWall() {
  const wishes = await getWishes();

  return <WishingWallClient wishes={wishes} />;
}