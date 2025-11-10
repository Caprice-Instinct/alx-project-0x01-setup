import Header from "@/components/layout/Header";

const Post: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />

      <h1 className="text-4xl font-bold mb-4">Post</h1>
      <p className="text-lg">This is the Post page.</p>
    </div>
  );
};

export default Post;
