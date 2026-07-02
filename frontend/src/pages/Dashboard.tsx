import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

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
    "http://localhost:3000/avatar",
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
    "http://localhost:3000/avatars",
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

  const mutation = useMutation({
    mutationFn: createAvatar,
    onSuccess: () => {
      setPrompt("");
      setName("");
      query.refetch();
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return (
    <div>
      <h1>Dashboard</h1>

      <Input
        placeholder="Avatar Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        placeholder="Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Button
        onClick={() =>
          mutation.mutate({
            prompt,
            name,
          })
        }
      >
        Create Avatar
      </Button>

      <Button onClick={() => query.refetch()}>
        Refresh Avatars
      </Button>

      {query.isLoading && <p>Loading...</p>}

      {query.isError && <p>Something went wrong.</p>}

      <div>
        <h2>My Avatars</h2>

        {query.data?.map((avatar: any) => (
          <div
            key={avatar.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{avatar.name}</h3>

            {avatar.avatarImages?.map((image: any) => (
              <img
                key={image.id}
                src={`http://localhost:3000${image.url}`}
                alt={avatar.name}
                width={200}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};