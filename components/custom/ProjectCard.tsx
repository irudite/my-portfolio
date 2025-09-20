import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tech, github }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-800">
      {/* Project Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title} - <a href={github} target="_blank" className="text-gray-300 underline">
          Github
        </a>
        </h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

