"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Define the type for our migration data
type Migration = {
  id: string
  name: string
  currentSystem: string
  proposedSystem: string
  estimatedTime: string
  estimatedCost: string
  status: "pending" | "in-progress" | "completed"
}

// Sample data matching the screenshot
const migrations: Migration[] = [
  {
    id: "1",
    name: "User Authentication",
    currentSystem: "Custom JWT",
    proposedSystem: "Auth0",
    estimatedTime: "2 weeks",
    estimatedCost: "$5,000",
    status: "pending",
  },
  {
    id: "2",
    name: "Database Migration",
    currentSystem: "MySQL",
    proposedSystem: "PostgreSQL",
    estimatedTime: "4 weeks",
    estimatedCost: "$12,000",
    status: "in-progress",
  },
  {
    id: "3",
    name: "Frontend Framework",
    currentSystem: "Angular",
    proposedSystem: "React",
    estimatedTime: "6 weeks",
    estimatedCost: "$20,000",
    status: "completed",
  },
]

export default function MigrationTable() {
  return (
    <div className="border rounded-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-medium">Name</TableHead>
            <TableHead className="font-medium">Current System</TableHead>
            <TableHead className="font-medium">Proposed System</TableHead>
            <TableHead className="font-medium">Estimated Time</TableHead>
            <TableHead className="font-medium">Estimated Cost</TableHead>
            <TableHead className="font-medium">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {migrations.map((migration) => (
            <TableRow key={migration.id} className="border-t">
              <TableCell>{migration.name}</TableCell>
              <TableCell>{migration.currentSystem}</TableCell>
              <TableCell>{migration.proposedSystem}</TableCell>
              <TableCell>{migration.estimatedTime}</TableCell>
              <TableCell>{migration.estimatedCost}</TableCell>
              <TableCell>
                {migration.status === "completed" ? (
                  <span className="bg-black text-white text-sm px-3 py-1 rounded-full">{migration.status}</span>
                ) : (
                  <span className={`text-sm ${migration.status === "in-progress" ? "text-gray-700" : "text-gray-600"}`}>
                    {migration.status}
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

