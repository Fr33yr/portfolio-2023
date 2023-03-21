import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export interface CardData {
  title: string;
  tecnologies: string[];
  description: string;
  imgUrl?: string;
  repoUrl: string;
  deployUrl: string;
}

interface Props {
  data: CardData;
}

function Card({ data }: Props) {
  return (
    <div className="flex flex-row-reverse w-fit my-0 mx-auto">
      <div className="flex flex-col w-56 ml-12 text-secondary">
        <h3 className=" text-xl ">{data.title}</h3>
        <p className="text-left m-4">{data.description}</p>
        <div className="flex flex-row justify-center">
          {data.repoUrl && (
            <a
              href={data.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon icon={faGithub} width="32" height="32" />
            </a>
          )}
          {data.deployUrl && (
            <a
              href={data.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 hover:text-primary"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                width="32"
                height="32"
              />
            </a>
          )}
        </div>
      </div>
      {!!data.imgUrl && (
        <Image width="480" height="228" alt="Image" src={data.imgUrl} />
      )}
    </div>
  );
}

export default Card;
