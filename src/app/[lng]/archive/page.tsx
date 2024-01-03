import ArchiveTable from "@/components/archive";
import Layout from "@/components/layout";

export default function Archive() {
  return (
    <div>
      <Layout>
        <main>
          <div className="flex flex-col w-full mb-10">
            <h1 className="text-6xl">Archive</h1>
            <span className="text-lg font-light">
              A list of things I´ve worked on
            </span>
          </div>

          <ArchiveTable />
        </main>
      </Layout>
    </div>
  );
}
