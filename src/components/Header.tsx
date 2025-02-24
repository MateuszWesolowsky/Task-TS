interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderProps) => (
  <header className="bg-gradient-to-r from-blue-400 to-indigo-500 mt-8 text-white py-6 px-4 rounded-md shadow-md mb-4 text-center">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="mt-2 text-lg">{description}</p>
  </header>
);
