import AddUserForm from "@/components/forms/add-user-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add User - pgvector",
  description: "Add a new user with our modern, responsive form interface",
};

export default function AddPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Add New User
        </h1>
        <AddUserForm />
      </div>
    </div>
  );
}
