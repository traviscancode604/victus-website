import { motion } from "framer-motion";
import { ArrowRight, Building2, Ruler, Layout, Home as HomeIcon } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-neutral-900 selection:text-white">
      <Navigation />

      {/* HERO SECTION */}
      <section id="root" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
          {/* Minimal architectural abstract background */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-neutral-50 hidden md:block" />
          <div className="absolute left-[10%] top-[20%] w-[1px] h-[60%] bg-neutral-200" />
          <div className="absolute right-[10%] bottom-[20%] w-[1px] h-[40%] bg-neutral-200" />
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-display font-medium tracking-tighter leading-[0.9]">
              Designing<br />
              Thoughtful<br />
              <span className="text-neutral-400">Spaces.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-neutral-500 max-w-md leading-relaxed font-light">
              We create enduring architecture that balances aesthetics, functionality, and sustainability.
            </motion.p>
            <motion.div variants={fadeIn}>
              <a href="#projects" className="inline-flex items-center gap-2 border-b border-black pb-1 hover:gap-4 transition-all duration-300 uppercase tracking-widest text-sm">
                View Our Work <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block h-[600px] w-full"
          >
            {/* abstract building architecture modern white */}
            <img 
              src="https://pixabay.com/get/g60fb16f941d10428ff1b7d4fabb49267832cde128a5fb2cd93abdfcc59eb64b45378efbe21b15f939eaf0e38c40b779708fe76269a8f154a7707b9ba77452e70_1280.jpg" 
              alt="Modern minimalist architecture" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-xs">
              <p className="font-display text-sm">"Architecture should speak of its time and place, but yearn for timelessness."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl font-display font-medium mb-6">Our Philosophy</h2>
              <div className="h-1 w-20 bg-neutral-900" />
            </div>
            <div className="md:col-span-8 space-y-8">
              <p className="text-2xl md:text-3xl leading-tight font-light text-neutral-800">
                We believe that good architecture is not just about buildings, but about people. It's about how light enters a room, how a space flows, and how it makes you feel.
              </p>
              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h3 className="uppercase tracking-widest text-sm font-bold">Sustainability</h3>
                  <p className="text-neutral-500">Integrating environmentally responsible design principles into every project we undertake.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="uppercase tracking-widest text-sm font-bold">Innovation</h3>
                  <p className="text-neutral-500">Pushing boundaries with modern materials and construction techniques.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="uppercase tracking-widest text-xs text-neutral-400 font-bold mb-2 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-display font-medium">Services</h2>
            </div>
            <p className="max-w-md text-neutral-500 text-right md:text-left">
              Comprehensive architectural services from concept to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
            {[
              { icon: HomeIcon, title: "Residential", desc: "Custom homes tailored to your lifestyle." },
              { icon: Building2, title: "Commercial", desc: "Offices and retail spaces that inspire productivity." },
              { icon: Layout, title: "Urban Design", desc: "Planning sustainable communities for the future." },
              { icon: Ruler, title: "Renovations", desc: "Breathing new life into existing structures." },
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                whileHover={{ y: -5 }}
                className="bg-white p-10 h-80 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <service.icon className="w-8 h-8 text-neutral-300 group-hover:text-black transition-colors" />
                <div>
                  <h3 className="text-xl font-display font-medium mb-3">{service.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <span className="uppercase tracking-widest text-xs text-neutral-500 font-bold mb-2 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-display font-medium">Selected Works</h2>
            </div>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors border-b border-neutral-700 pb-1 hover:border-white">View All Projects</a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "The Glass House", 
                loc: "Portland, OR", 
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" // modern home exterior
              },
              { 
                title: "Nordic Museum", 
                loc: "Seattle, WA", 
                img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop" // minimal concrete building
              },
              { 
                title: "Urban Loft", 
                loc: "New York, NY", 
                img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" // modern interior
              },
            ].map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="overflow-hidden aspect-[4/5] mb-6 bg-neutral-800">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                  />
                </div>
                <h3 className="text-2xl font-display font-medium mb-1">{project.title}</h3>
                <p className="text-neutral-500 text-sm uppercase tracking-widest">{project.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <span className="uppercase tracking-widest text-xs text-neutral-400 font-bold mb-2 block">Get In Touch</span>
              <h2 className="text-4xl md:text-6xl font-display font-medium mb-8">Let's build something<br/>extraordinary.</h2>
              
              <div className="space-y-8 mt-12">
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-bold mb-2">Visit</h4>
                  <p className="text-lg text-neutral-600">123 Architecture Ave,<br/>Design District, NY 10012</p>
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-bold mb-2">Contact</h4>
                  <p className="text-lg text-neutral-600">hello@archstudio.com<br/>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 md:p-12">
              <h3 className="text-2xl font-display mb-8">Send us a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-neutral-100 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-display font-bold uppercase tracking-tighter">ARCH.STUDIO</p>
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Arch Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
