import Image from "next/image";
import loader from "@/public/images/loader.gif";

const Loading = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loader} width={130} height={130} alt="Image LoadING..." />
    </div>
  );
};

export default Loading;
