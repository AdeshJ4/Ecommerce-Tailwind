import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {

    const menuLinks = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'Shop',
            link: '/shop'
        },
        {
            id: 3,
            name: 'About',
            link: '/about'
        },
        {
            id: 4,
            name: 'Blogs',
            link: '/blogs'
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div>
                <div className="container">
                    {/* Logo and Links Section */}
                    <div className="flex items-center gap-4">
                        {/* Logo of website */}
                        <Link
                            to="/"
                            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
                        >
                            Eshop
                        </Link>
                        {/* Menu Items */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {menuLinks.map((item) => (
                                    <li key={item.id}>
                                        <Link to={item.link} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Navbar right section */}
                    <div className="flex justify-between items-center gap-4">
                        {/* Search bar section */}
                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder="Search" className="search-bar" />
                            <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400" />
                        </div>
                        {/* Dark Mode Section */}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
