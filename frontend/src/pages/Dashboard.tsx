import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

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
  const response = await axios.get("http://localhost:3000/avatars", getAuthHeaders());

  return response.data;
}

export const Dashboard = () => {
  const [prompt, setPrompt] = useState("");
  const [name, setName] = useState("");

  const mutation = useMutation({
    mutationFn: createAvatar,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },

    
  });

  const query = useQuery({
        queryFn: getAvatars,
        queryKey: ['avatars']
    })


  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <Input
          placeholder="Avatar Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Prompt (e.g. A superhero wearing red armor)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <Button
          onClick={() => {
            mutation.mutate({
              prompt,
              name,
            });
          }}
        >
          Create Avatar
        </Button>

            <Button onClick={getAvatars}>
            Get Avatars
            </Button>
      </div>

      <div>
        <b>Avatar</b>
        {query.data?.map((avatar: any) => (
          <div >
            <p>{avatar.name}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};