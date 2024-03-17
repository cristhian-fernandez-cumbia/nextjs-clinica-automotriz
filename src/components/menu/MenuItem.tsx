interface MenuItemProps {
    text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text }) => {
    return (
        <li className="mr-6 py-2">
            <a href="#" className="text-white hover:text-gray-300">{text}</a>
        </li>
    );
}

export default MenuItem;