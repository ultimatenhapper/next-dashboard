import Image from "next/image";
import CounterPage from "./dashboard/counter/page";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/main");
}
