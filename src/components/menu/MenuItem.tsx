import Link from "next/link";
interface MenuItemProps {
    text: string;
    to: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, to }) => {
    return (
        <li className="lg:mr-10 xl:mr-20 2xl:mr-32 py-2">
            <Link href={`#${to}`} className="text-white hover:text-gray-300 text-[15px] font-medium" passHref>
                {text}
            </Link>
        </li>
    );
}

export default MenuItem;
