import { Code, Database, Wrench, Brain, Award } from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code size={24} />,
    title: 'Programming',
    skills: ['Python', 'Java', 'SQL', 'JavaScript', 'C++'],
  },
  {
    icon: <Database size={24} />,
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    icon: <Wrench size={24} />,
    title: 'Tools & Platforms',
    skills: ['GitHub', 'GitLab', 'Streamlit', 'Snowflake', 'Docker', 'AWS S3'],
  },
  {
    icon: <Brain size={24} />,
    title: 'Core Concepts',
    skills: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'APIs'],
  },
];

const certifications = [
  'MERN Full Stack Development – SmartInternz',
  'Java Programming: Solving Problems with Software – Coursera',
  'Hands-On Essentials: Data Warehousing, Data Application Builders',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="font-mono text-primary text-xl">04.</span>
            Skills & Certifications
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 bg-card rounded-lg border border-border card-hover group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="p-8 bg-card rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="mt-8 p-6 bg-card rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Languages</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-primary">●</span>
                <span className="text-muted-foreground">English (Full Professional)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">●</span>
                <span className="text-muted-foreground">Tamil (Native)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">●</span>
                <span className="text-muted-foreground">Telugu (Professional)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
