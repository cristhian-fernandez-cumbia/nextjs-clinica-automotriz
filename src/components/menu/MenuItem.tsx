interface MenuItemProps {
    text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text }) => {
    return (
        <li className="lg:mr-10 xl:mr-20 2xl:mr-32 py-2">
            <a href="#" className="text-white hover:text-gray-300 text-[15px] font-medium">{text}</a>
        </li>
    );
}

export default MenuItem;