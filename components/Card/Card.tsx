import Image from "next/image";

export interface CardData {
  name: string;
  description: string;
  image?: string;
}

interface Props {
  data: CardData;
}

function Card({ data }: Props) {
  return (
    <div>
      <p>{data.name}</p>
      {!!data.image && (
        <Image width="100" height="100" alt="Image" src={data.image} />
      )}
    </div>
  );
}

export default Card;
