import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Pagadala Pravalika. Built with passion and purpose.
      </p>
      <div className="flex gap-4">
        <a href="mailto:pagadalapravallika2409@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
        <a href="https://github.com/pagadalapravallika" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
        <a href="https://linkedin.com/in/pagadalapravallika" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
