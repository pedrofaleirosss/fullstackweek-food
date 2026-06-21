import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-4 border-t bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center md:flex-row md:px-8 md:text-left lg:px-10">
        <div>
          <p className="text-sm font-semibold">FSW Food</p>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FSW Food. Desenvolvido por Pedro
            Faleiros.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/pedrofaleirosss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon size={22} />
          </Link>

          <Link
            href="https://linkedin.com/in/pedro-faleiros123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon size={22} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
