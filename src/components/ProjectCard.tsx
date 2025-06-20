import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gray-800 rounded-xl p-6 text-center shadow-lg"
    >
      <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-black font-bold">{title.split(" ")[0]}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white"> {title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
