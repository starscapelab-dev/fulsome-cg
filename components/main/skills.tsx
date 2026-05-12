import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  VFX_SOFTWARE,
  COMPOSITING_TOOLS,
  AI_TOOLS,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {/* VFX Software */}
      <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
        VFX Software & Tools
      </h3>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-6xl">
        {VFX_SOFTWARE.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Compositing Tools */}
      <h3 className="text-2xl font-semibold text-white mt-16 mb-4">
        Compositing & VFX Techniques
      </h3>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-6xl">
        {COMPOSITING_TOOLS.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* AI Tools */}
      <h3 className="text-2xl font-semibold text-white mt-16 mb-4">
        AI-Enhanced Workflows
      </h3>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-6xl">
        {AI_TOOLS.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div
          className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover"
          style={{
            mixBlendMode: 'screen',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
          }}
        >
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
