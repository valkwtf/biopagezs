import  Typewriter from 'typewriter-effect';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const particles = document.createElement('div');
      particles.className = 'particle';
      particles.style.left = `${e.clientX}px`;
      particles.style.top = `${e.clientY}px`;
      document.body.appendChild(particles);

      setTimeout(() => {
        particles.remove();
      }, 1500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="animate-matrix" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-black/80 backdrop-blur-sm p-6 rounded-2xl glow hover:scale-[1.02] transition-transform duration-300">
          
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <img
                src="https://i.pinimg.com/236x/78/ed/f0/78edf07264a4a92c4540a52276512134.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-[#ff00ff] glow group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-[#ff00ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <h1 className="minecraft text-2xl text-center text-white mb-4">
            <Typewriter
              options={{
                strings: ['Valkiezz'],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 150,
              }}
            />
          </h1>

          <div className="minecraft text-sm text-gray-300 text-center mb-6">
            <Typewriter
              options={{
                strings: [
                  'I miss her...',
                  'vluhrs is a femboy',
                  'pls nitro',
                ],
                autoStart: true,
                loop: true,
                delay: 80,
              }}
            />
          </div>

          <div className="flex justify-center space-x-5 mb-6">
            {[
              { Icon: Github, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Mail, href: "#" },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-white hover:text-[#ff00ff] transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Projects', value: '27' },
              { label: 'Experience', value: '3+' },
              { label: 'Commits', value: '100+' },
              { label: 'Sales', value: '90+' },

            ].map(({ label, value }, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="minecraft text-[#ff00ff] text-base group-hover:scale-110 transition-transform duration-300">{value}</div>
                <div className="minecraft text-gray-400 text-[10px]">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-1.5">
            {[
              'HTML', 'Python', 'Data-Breaches', 'Graphics',
              'Cybersecurity', 'Ethical Hacking', 'Seller'
            ].map((skill, index) => (
              <span
                key={index}
                className="minecraft px-2 py-0.5 bg-[#ff00ff]/10 text-[#ff00ff] rounded-xl text-[10px] border border-[#ff00ff]/30 hover:bg-[#ff00ff]/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 
