import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Workflow,
  Database,
} from "lucide-react";

import { Navigation } from "@/components/Navigation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function ContactForm() {
  const [state, handleSubmit] = useForm("xkoelnnr");

  if (state.succeeded) {
    return (
      <div className="border border-border bg-background p-6">
        <p className="text-lg font-display font-medium mb-2">
          Message sent.
        </p>
        <p className="text-muted-foreground">
          Thanks for reaching out. I’ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="uppercase tracking-widest text-xs font-bold">
          Name
        </label>

        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary transition-colors"
        />

        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-sm text-red-600"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="uppercase tracking-widest text-xs font-bold">
          Email
        </label>

        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary transition-colors"
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-sm text-red-600"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="uppercase tracking-widest text-xs font-bold">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary transition-colors resize-none"
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-sm text-red-600"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navigation />

      {/* HERO SECTION */}
      <section
        id="root"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 py-24"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-secondary hidden md:block" />
          <div className="absolute left-[10%] top-[20%] w-px h-[60%] bg-border" />
          <div className="absolute right-[10%] bottom-[20%] w-px h-[40%] bg-border" />
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6 md:space-y-8"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl xl:text-8xl font-display font-medium tracking-tighter leading-[0.9]"
            >
              Eliminate
              <br />
              Manual Work.
              <br />
              <span className="text-primary">Improve Operations.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl xl:text-2xl text-muted-foreground max-w-md leading-relaxed font-light"
            >
              Victus Consulting helps businesses reduce manual work, improve
              operational visibility, and simplify workflows through practical
              automation, data analysis, and AI-assisted solutions.
            </motion.p>

            <motion.div variants={fadeIn}>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-b border-accent pb-1 hover:gap-4 transition-all duration-300 uppercase tracking-widest text-sm text-primary"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block h-[clamp(320px,60vh,600px)] w-full"
          >
            <img
              src="/images/hero-laptop.png"
              alt="Operational analytics and automation"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl font-display font-medium mb-6">
                How We Help
              </h2>

              <div className="h-1 w-20 bg-primary" />
            </div>

            <div className="md:col-span-8 space-y-8">
              <p className="text-2xl md:text-3xl leading-tight font-light text-foreground">
                We help businesses simplify operational workflows, reduce repetitive administrative work, and make better use of their data through practical automation, operational analysis, and AI-assisted solutions.
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h3 className="uppercase tracking-widest text-sm font-bold text-primary">
                    Operational Analytics
                  </h3>

                  <p className="text-muted-foreground">
                    Data wrangling, operational analysis, forecasting, and actionable insights that help businesses make better decisions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="uppercase tracking-widest text-sm font-bold text-primary">
                    Operational Automation
                  </h3>

                  <p className="text-muted-foreground">
                    Workflow automation and AI-assisted systems that reduce
                    repetitive administrative work and improve operational
                    consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS SECTION */}
      <section id="problems" className="py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="uppercase tracking-widest text-xs text-accent font-bold mb-2 block">
              Common Challenges
            </span>

            <h2 className="text-4xl md:text-5xl font-display font-medium">
              Problems We Solve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Too Much Manual Admin",
                desc: "Teams spend too much time on repetitive operational work that slows down the business and creates avoidable mistakes.",
              },
              {
                title: "Reporting Takes Too Long",
                desc: "Important operational information is difficult to organize, analyze, and turn into useful business decisions.",
              },
              {
                title: "Processes Are Inefficient",
                desc: "Operational workflows often evolve over time without structure, creating unnecessary friction and wasted effort.",
              },
              {
                title: "AI Feels Overwhelming",
                desc: "Many businesses are unsure where AI can realistically provide value without disrupting existing operations.",
              },
            ].map((problem) => (
              <div
                key={problem.title}
                className="bg-card p-10 border border-card-border"
              >
                <h3 className="text-2xl font-display font-medium mb-4">
                  {problem.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {problem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="uppercase tracking-widest text-xs text-accent font-bold mb-2 block">
                Consulting Services
              </span>

              <h2 className="text-4xl md:text-5xl font-display font-medium">
                Services
              </h2>
            </div>

            <p className="max-w-md text-muted-foreground text-right md:text-left">
              Practical operational consulting focused on workflow efficiency, business process improvement, and better use of operational data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px border border-border">
            {[
              {
                icon: BarChart3,
                title: "Data Analytics",
                desc: "Data wrangling, operational analysis, forecasting, and actionable insights that help businesses make better decisions.",
              },
              {
                icon: Workflow,
                title: "Workflow Automation",
                desc: "Workflow automation that reduces repetitive operational work and improves process consistency.",
              },
              {
                icon: Bot,
                title: "AI Feasibility Assessment",
                desc: "Evaluate business workflows and identify practical, low-risk opportunities for AI-assisted operations.",
              },
              {
                icon: Database,
                title: "Systems Improvement",
                desc: "Identify inefficiencies in operational systems and improve how teams manage information and workflows.",
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -5 }}
                className="bg-card border border-card-border p-10 flex flex-col gap-6 min-h-[320px] hover:shadow-xl transition-all duration-300 group"
              >
                <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />

                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-display font-medium">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-32 bg-background relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <span className="uppercase tracking-widest text-xs text-accent font-bold mb-2 block">
                Get In Touch
              </span>

              <h2 className="text-4xl md:text-6xl font-display font-medium mb-8">
                Let’s improve
                <br />
                your operations.
              </h2>

              <div className="space-y-8 mt-12">
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-bold mb-2 text-primary">
                    Services
                  </h4>

                  <p className="text-lg text-muted-foreground">
                    Data Analytics
                    <br />
                    Workflow Automation
                    <br />
                    AI Feasibility Assessment
                    <br />
                    Systems Improvement
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-8 md:p-12">
              <h3 className="text-2xl font-display mb-8">
                Send a message
              </h3>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Victus Consulting Inc. All rights
            reserved. 🇨🇦 Proudly Canadian.
          </p>
        </div>
      </footer>
    </div>
  );
}