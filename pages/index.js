import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone | by Nuno Ferraz</title>
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        {/*Feed */}
        {/*Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
