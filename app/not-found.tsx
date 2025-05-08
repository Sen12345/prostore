"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        priority={true}
        alt={`${APP_NAME}`}
      />
      <div className="p-3 w-full mx-auto rounded-lg  text-center ">
        <div className="flex-center">
          <h1 className="text-3xl font-bold mb-4">Page not found </h1>
          <h1 className="text-3xl font-bold mb-4 px-3">):</h1>
        </div>
      </div>
      <p className="text-destructive"> Could not find requested page</p>

      <Button
        variant="outline"
        className="mt-4 ml-2"
        onClick={() => (window.location.href = "/")}
      >
        Back To Home
      </Button>
    </div>
  );
};

export default NotFound;
