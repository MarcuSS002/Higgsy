import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { API_URL } from "../lib/api";
import { Sparkles, RefreshCw, Trash2, Plus } from "lucide-react";

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("You must sign in first.");
  return { headers: { Authorization: `Bearer ${token}` } };
}

async function createAvatar({ prompt, name }: { prompt: string; name: string }) {
  const response = await axios.post(`${API_URL}/avatar`, { prompt, name }, getAuthHeaders());
  return response.data;
}

async function getAvatars() {
  const response = await axios.get(`${API_URL}/avatars`, getAuthHeaders());
  return response.data;
}

async function deleteAvatar(avatarId: string) {
  const response = await axios.delete(`${API_URL}/avatar/${avatarId}`, getAuthHeaders());
  return response.data;
}

async function deleteAllAvatars() {
  const response = await axios.delete(`${API_URL}/avatars`, getAuthHeaders());
  return response.data;
}

export const Dashboard = () => {
  const [prompt, setPrompt] = useState("");
  const [name, setName] = useState("");

  const query = useQuery({ queryKey: ["avatars"], queryFn: getAvatars });

  const createMutation = useMutation({
    mutationFn: createAvatar,
    onSuccess: () => { setPrompt(""); setName(""); query.refetch(); },
    onError: (error) => console.error(error),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteAvatar,
    onSuccess: () => query.refetch(),
    onError: (error) => console.error(error),
  });

  const deleteAllMutation = useMutation({
    mutationFn: deleteAllAvatars,
    onSuccess: () => query.refetch(),
    onError: (error) => console.error(error),
  });

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c7ff] mb-2">AI Studio</p>
          <h1 className="text-4xl font-bold text-white">Avatar Dashboard</h1>
          <p className="mt-2 text-sm text-zinc-500">Create and manage your AI-generated avatars.</p>
        </div>

        {/* Create form */}
        <div className="mb-12 rounded-2xl border border-[#022954]/40 bg-[#022954]/10 p-8">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-4 w-4 text-[#93c7ff]" />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Create New Avatar
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <Input
              placeholder="Avatar name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 rounded-xl bg-black border border-[#93c7ff]/60 text-white placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-[#93c7ff] focus-visible:border-[#93c7ff]"
            />
            <Input
              placeholder="Describe your avatar..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-11 rounded-xl bg-black border border-[#93c7ff]/60 text-white placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-[#93c7ff] focus-visible:border-[#93c7ff]"
            />
            <Button
              disabled={createMutation.isPending}
              onClick={() => createMutation.mutate({ prompt, name })}
              className="w-fit h-11 px-6 rounded-xl bg-[#022954] hover:bg-[#033d7a] text-white font-semibold flex items-center gap-2 transition-all duration-200"
            >
              <Plus className="h-4 w-4" />
              {createMutation.isPending ? "Creating..." : "Create Avatar"}
            </Button>
          </div>
        </div>

        {/* Avatars header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">My Avatars</h2>
            <p className="text-xs text-zinc-600 mt-0.5">{query.data?.length ?? 0} avatars</p>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => query.refetch()}
              className="h-9 px-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 text-sm flex items-center gap-2 transition-all"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </Button>
            <Button
              disabled={deleteAllMutation.isPending || !query.data?.length}
              onClick={() => deleteAllMutation.mutate()}
              className="h-9 px-4 rounded-xl bg-red-950/40 border border-red-900/40 hover:bg-red-900/50 text-red-400 text-sm flex items-center gap-2 transition-all"
            >
              <Trash2 className="h-3.5 w-3.5" />
              {deleteAllMutation.isPending ? "Deleting..." : "Delete All"}
            </Button>
          </div>
        </div>

        {/* States */}
        {query.isLoading && (
          <div className="flex items-center gap-2 text-zinc-500 text-sm py-10">
            <RefreshCw className="h-4 w-4 animate-spin" />
            Loading avatars...
          </div>
        )}

        {query.isError && (
          <p className="text-red-400 text-sm py-10">Something went wrong. Please try again.</p>
        )}

        {/* Avatar grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {query.data?.map((avatar: any) => (
            <div
              key={avatar.id}
              className="group rounded-2xl border border-zinc-900 bg-zinc-950 overflow-hidden hover:border-[#022954]/60 transition-all duration-300 hover:-translate-y-1"
            >
              {avatar.avatarImages?.[0] ? (
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={avatar.avatarImages[0].url}
                    alt={avatar.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="h-60 bg-[#022954]/10 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-[#022954]/40" />
                </div>
              )}

              <div className="p-5">
                <h3 className="text-base font-semibold text-white">{avatar.name}</h3>
                <p className="mt-0.5 text-xs text-zinc-600">AI Generated Avatar</p>

                <Button
                  disabled={deleteMutation.isPending}
                  onClick={() => deleteMutation.mutate(avatar.id)}
                  className="mt-5 w-full h-9 rounded-xl bg-transparent border border-red-900/40 hover:bg-red-950/40 text-red-400 text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  {deleteMutation.isPending ? "Deleting..." : "Delete"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {!query.isLoading && !query.isError && query.data?.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="h-16 w-16 rounded-2xl bg-[#022954]/10 border border-[#022954]/20 flex items-center justify-center mb-4">
              <Sparkles className="h-7 w-7 text-[#022954]/50" />
            </div>
            <p className="text-zinc-400 font-medium">No avatars yet</p>
            <p className="text-zinc-600 text-sm mt-1">Create your first avatar above</p>
          </div>
        )}

      </div>
    </div>
  );
};