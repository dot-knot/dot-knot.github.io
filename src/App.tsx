import { motion } from "motion/react";
import { Terminal, Gamepad2, ExternalLink, ChevronRight } from "lucide-react";

const ASCII_LOGO = `
 ____       _   _  __                _   
|  _ \\  ___| |_| |/ /_ __   ___  ___| |_ 
| | | |/ _ \\ __| ' /| '_ \\ / _ \\/ __| __|
| |_| | (_) | |_| . \\| | | | (_) \\__ \\ |_ 
|____/ \\___/ \\__|_|\\_\\_| |_|\\___/|___/\\__|
`;

const ProjectCard = ({ title, description, icon: Icon, tags }: { title: string, description: string, icon: any, tags: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="knot-card group relative border border-gray-800 bg-black p-6 transition-all hover:border-terminal-green/50"
  >
    <div className="mb-4 flex items-center justify-between">
      <div className="flex h-10 w-10 items-center justify-center border border-gray-800 bg-gray-900/50 text-terminal-green group-hover:border-terminal-green/30">
        <Icon size={20} />
      </div>
      <div className="flex space-x-1">
        <div className="h-1.5 w-1.5 rounded-full bg-gray-800"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-gray-800"></div>
      </div>
    </div>
    
    <h3 className="knot-header mb-2 text-lg font-bold tracking-tight text-white">
      {title}
    </h3>
    
    <p className="mb-6 text-sm leading-relaxed text-gray-400">
      {description}
    </p>
    
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="border border-gray-800 px-2 py-0.5 text-[10px] uppercase tracking-widest text-gray-500">
          {tag}
        </span>
      ))}
    </div>

    <div className="mt-6 flex items-center text-xs font-bold text-terminal-green opacity-0 transition-opacity group-hover:opacity-100">
      <ChevronRight size={14} className="mr-1" />
      VIEW_SOURCE
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-terminal-green selection:text-black">
      {/* Visual Effects */}
      <div className="scanline" />
      <div className="screen-flicker" />
      
      {/* Terminal Header */}
      <header className="sticky top-0 z-40 border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56]"></div>
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="h-3 w-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="text-xs font-medium text-gray-500">
            dot-knot <span className="text-terminal-green">~/home</span>
          </div>
          <div className="w-12"></div> {/* Spacer for symmetry */}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 md:py-24">
        {/* Hero Section */}
        <section className="mb-24 flex flex-col items-center text-center">
          <motion.pre 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 hidden overflow-x-auto text-[10px] leading-none text-terminal-green md:block"
          >
            {ASCII_LOGO}
          </motion.pre>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-4xl font-bold tracking-tighter md:hidden"
          >
            DOTKNOT
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-sm tracking-[0.2em] text-gray-400 uppercase"
          >
            Connecting the dots, tying the solutions.
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 h-px w-32 bg-terminal-green/30"
          />
        </section>

        {/* Projects Grid */}
        <section className="mb-24">
          <div className="mb-12 flex items-center space-x-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white">
              [01] PROJECTS_EXPLORER
            </h2>
            <div className="h-px flex-1 bg-gray-800"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard 
              title="রূপান্তর (Rupantor)"
              description="A multi-platform unit converter built for precision and speed. Integrated with Firebase for real-time data syncing and user preferences."
              icon={Terminal}
              tags={["Firebase", "React", "Utility"]}
            />
            <ProjectCard 
              title="Bubble Game"
              description="A physics-based 2D aquarium game. Experience fluid dynamics and satisfying bubble mechanics in a minimalist environment."
              icon={Gamepad2}
              tags={["Godot", "Physics", "2D"]}
            />
          </div>
        </section>

        {/* About / Contact Section */}
        <section className="grid gap-12 md:grid-cols-2">
          <div className="border border-gray-800 p-8">
            <h2 className="knot-header mb-6 text-xs font-bold uppercase tracking-[0.3em]">
              SYSTEM_INFO
            </h2>
            <div className="space-y-2 text-xs text-gray-500">
              <p><span className="text-terminal-green">OS:</span> DotKnot-v2.0.26</p>
              <p><span className="text-terminal-green">HOST:</span> github.io/dot-knot</p>
              <p><span className="text-terminal-green">UPTIME:</span> 100% (Theoretical)</p>
              <p><span className="text-terminal-green">SHELL:</span> /bin/creative-solutions</p>
            </div>
          </div>

          <div className="flex flex-col justify-center border border-gray-800 p-8">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.3em]">CONNECT_WITH_ME</h2>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 transition-colors hover:text-terminal-green">
                <ExternalLink size={18} />
              </a>
              <a href="#" className="text-gray-500 transition-colors hover:text-terminal-green">
                <span className="text-sm font-bold">GH</span>
              </a>
              <a href="#" className="text-gray-500 transition-colors hover:text-terminal-green">
                <span className="text-sm font-bold">LI</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-8 text-center">
        <p className="text-[10px] tracking-widest text-gray-600 uppercase">
          &copy; 2026 DOTKNOT_CONSOLE // ALL_RIGHTS_RESERVED
        </p>
      </footer>
    </div>
  );
}
