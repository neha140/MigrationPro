import MigrationTable from "@/components/migration-table"
import { SearchBar } from "@/components/search-bar"
import { AddNewItemButton } from "@/components/add-new-item-button"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Migration Estimates and Proposals</h1>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <SearchBar />
        <AddNewItemButton />
      </div>

      <MigrationTable />
    </main>
  )
}

