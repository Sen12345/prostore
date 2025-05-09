import { redirect } from "next/navigation";

const LandingPage = () => {
  return <>{redirect("/root")}</>;
};

export default LandingPage;
