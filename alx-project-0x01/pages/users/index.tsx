import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">User Content</h1>
          <button className=" text-2xl font-semibold">Add user</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts.map(
            (
              {
                id,
                name,
                username,
                email,
                address,
                phone,
                website,
                company,
              }: UserProps,
              key: number
            ) => (
              <UserCard
                key={key}
                id={id}
                name={name}
                username={username}
                email={email}
                address={address}
                phone={phone}
                website={website}
                company={company}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
export default Users;
