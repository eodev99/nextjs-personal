import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
  directory: string;
};
export default function Tag({ tag , directory }: Props) {
  return (
    <Link href={`/${directory}/tags/[[...slug]]`} as={`/${directory}/tags/${tag.slug}`}>
      <a>{"#" + tag.name}</a>
    </Link>
  );
}
