import { initDatabase } from "@/database/db";
import { Redirect } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    initDatabase();
  }, []);

  return <Redirect href={"/(onboarding)"} />;
}
