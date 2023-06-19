import { useQuery } from "react-query";
import Loader from "../../Components/Loader/Loader";

const Chats = () => {
  // Load Chats
  const { data: chat = [], isLoading } = useQuery({
    queryKey: ["/chat"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/chat");
      const data = res.json();
      return data;
    },
  });

  isLoading && <Loader />;
  return (
    <div>
      <h1>{chat.length}</h1>
    </div>
  );
};

export default Chats;
