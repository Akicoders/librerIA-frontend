interface NavItemProps {
    icon: JSX.Element;
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
    return (
        <div className="flex items-center space-x-2 text-sm rounded-md p-2">
            <button className="flex items-center space-x-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-white p-2 rounded-md relative group transition-all duration-300 ease-in-out transform hover:scale-105">
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative flex items-center space-x-2 dark:bg-gray-800 rounded-md p-2 z-10">
                    <span className="transition-colors duration-300">{icon}</span>
                    <span className="text-sm transition-colors duration-300 group-hover:text-white">{label}</span>
                </div>
            </button>
        </div>
    );
};

export default NavItem;