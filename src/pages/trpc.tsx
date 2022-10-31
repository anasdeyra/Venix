import { trpc } from "../../trpc/trpc";

export default function Trpc() {
  const { data } = trpc.useQuery(["hello", { text: "Anass" }]);

  return <div>{data && data.greeting}</div>;
}
