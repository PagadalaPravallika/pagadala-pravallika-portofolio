import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Get in Touch</h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <a
              href="mailto:pravalika@example.com"
              className="glass rounded-xl p-4 flex items-center gap-4 hover:bg-primary/10 transition-colors group block"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground group-hover:text-primary transition-colors">pravalika@example.com</p>
              </div>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-4 flex items-center gap-4 hover:bg-primary/10 transition-colors group block"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                <Github size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="text-foreground group-hover:text-primary transition-colors">github.com/pravalika</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-4 flex items-center gap-4 hover:bg-primary/10 transition-colors group block"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                <Linkedin size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground group-hover:text-primary transition-colors">linkedin.com/in/pravalika</p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-background/50 border-border/50"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-background/50 border-border/50"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={4}
              className="bg-background/50 border-border/50"
            />
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Send size={16} />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
