// Dashboard.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { API_URL } from "../lib/api";

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("You must sign in first.");
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function createAvatar({
  prompt,
  name,
}: {
  prompt: string;
  name: string;
}) {
  const response = await axios.post(
    `${API_URL}/avatar`,
    {
      prompt,
      name,
    },
    getAuthHeaders()
  );

  return response.data;
}

async function getAvatars() {
  const response = await axios.get(
    `${API_URL}/avatars`,
    getAuthHeaders()
  );

  return response.data;
}

async function deleteAvatar(avatarId: string) {
  const response = await axios.delete(
    `${API_URL}/avatar/${avatarId}`,
    getAuthHeaders()
  );

  return response.data;
}

async function deleteAllAvatars() {
  const response = await axios.delete(
    `${API_URL}/avatars`,
    getAuthHeaders()
  );

  return response.data;
}

export const Dashboard = () => {
  const [prompt, setPrompt] = useState("");
  const [name, setName] = useState("");

  const query = useQuery({
    queryKey: ["avatars"],
    queryFn: getAvatars,
  });

  const createMutation = useMutation({
    mutationFn: createAvatar,

    onSuccess: () => {
      setPrompt("");
      setName("");
      query.refetch();
    },

    onError: (error) => {
      console.error(error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteAvatar,

    onSuccess: () => {
      query.refetch();
    },

    onError: (error) => {
      console.error(error);
    },
  });

  const deleteAllMutation = useMutation({
    mutationFn: deleteAllAvatars,

    onSuccess: () => {
      query.refetch();
    },

    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Avatar Dashboard
          </h1>

          <p className="mt-2 text-zinc-400">
            Create and manage your AI avatars.
          </p>
        </div>

        <Card className="mb-10 border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-5 text-center text-xl font-semibold text-white">
            Create a New Avatar
          </h2>

          <div className="flex flex-col gap-4">
            <Input
              placeholder="Avatar name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-zinc-700 bg-zinc-950 text-white"
            />

            <Input
              placeholder="Describe your avatar..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="border-zinc-700 bg-zinc-950 text-white"
            />

            <Button
              variant="outline"
              disabled={createMutation.isPending}
              onClick={() =>
                createMutation.mutate({
                  prompt,
                  name,
                })
              }
              className="w-fit text-black"
            >
              {createMutation.isPending
                ? "Creating..."
                : "Create Avatar"}
            </Button>
          </div>
        </Card>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            My Avatars
          </h2>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="text-black"
              onClick={() => query.refetch()}
            >
              Refresh
            </Button>

            <Button
              variant="destructive"
              disabled={
                deleteAllMutation.isPending ||
                !query.data?.length
              }
              onClick={() => deleteAllMutation.mutate()}
            >
              {deleteAllMutation.isPending
                ? "Deleting..."
                : "Delete All"}
            </Button>
          </div>
        </div>

        {query.isLoading && (
          <p className="text-zinc-400">
            Loading avatars...
          </p>
        )}

        {query.isError && (
          <p className="text-red-400">
            Something went wrong.
          </p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {query.data?.map((avatar: any) => (
            <Card
              key={avatar.id}
              className="overflow-hidden border-zinc-800 bg-zinc-900 transition hover:-translate-y-1"
            >
              {avatar.avatarImages?.[0] && (
                <img
                  src={avatar.avatarImages[0].url}
                  alt={avatar.name}
                  className="h-64 w-full object-cover"
                />
              )}

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {avatar.name}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  AI Generated Avatar
                </p>

                <Button
                  variant="destructive"
                  className="mt-4 w-full"
                  disabled={deleteMutation.isPending}
                  onClick={() =>
                    deleteMutation.mutate(avatar.id)
                  }
                >
                  {deleteMutation.isPending
                    ? "Deleting..."
                    : "Delete"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};