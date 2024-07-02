import { useEnsAvatar } from "onchainkit";

export default function Avatar({ address }: { address: any }) {
  const { avatar } = useEnsAvatar({ address });

  if (!avatar) {
    return <div>No avatar found</div>;
  }

  return <img src={avatar} alt="ENS Avatar" />;
}
