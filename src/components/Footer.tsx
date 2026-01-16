import { Github, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(199_89%_48%)] flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">r</span>
            </div>
            <span className="font-semibold text-foreground">reKréta</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Adatvédelem
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              GYIK
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Támogatás
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 reKréta. Készült ❤️-vel a diákoknak.</p>
          <p className="mt-2 text-xs">
            A reKréta nem hivatalos alkalmazás és nem kapcsolódik a KRÉTA rendszerhez.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
