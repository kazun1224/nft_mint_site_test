import Link from "next/link";
import { FC } from "react";
import { pagesPath } from "src/utils/$path";

export const Footer: FC = () => {
  return (
    <footer className="bg-violet-700 text-white">
      <div className="inner">
        <div className="py-3 text-center md:py-10">
          <Link href={pagesPath.$url()}>
            <a className="text-lg font-bold md:text-xl">
              Parallel Space test net
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
