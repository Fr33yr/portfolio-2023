import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export interface CardData {
  title: string;
  tecnologies: string[];
  description: string;
  imgUrl?: string;
  repoUrl: string;
  deployUrl: string;
  videoUrl: string;
}

interface Props {
  data: CardData;
}

function Card({ data }: Props) {
  return (
    <div className="flex flex-col-reverse w-fit my-24 mx-auto xl:flex-row-reverse">
      <div className="flex flex-col w-96 mx-auto text-secondary xl:ml-12">
        <h3 className=" text-xl ">{data.title}</h3>
        <p className="text-left m-4">{data.description}</p>
        <ul className="flex flex-wrap list-disc justify-around mt-2 mb-6 mx-12 w-2/3 text-primary">
          {data.tecnologies &&
            data.tecnologies.map((item, index) => (
              <li key={`${index}-${item}-${data.title}`} className="mx-2">
                <span className="text-zinc-50">{item}</span>
              </li>
            ))}
        </ul>
        <div className="flex flex-row justify-center text-3xl">
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
          {data.videoUrl && (
            <a
              href={data.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 hover:text-primary"
            >
              <FontAwesomeIcon icon={faYoutube} width="32" height="32" />
            </a>
          )}
        </div>
      </div>
      {!!data.imgUrl && (
        <Image
          width="480"
          height="228"
          alt="Image"
          src={data.imgUrl}
          className="mb-8"
        />
      )}
    </div>
  );
}

export default Card;
