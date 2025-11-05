"use client";
import React, { useState, useEffect } from "react";
import Styles from "./navbar.module.scss";
import themeStyles from "./navbarTheme.module.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    const [burgerMenuActive, setBurgerMenuActive] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleBurgerMenu = () => {
        setBurgerMenuActive(!burgerMenuActive);
    };

    const motionVariants = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                ease: "easeOut",
                type: "spring" as const,
            },
        },
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0,
                duration: 0,
            },
        },
    } as const;

    const listItemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.35,
                ease: "easeOut" as const,
            },
        },
        closed: {
            y: 100,
            opacity: 0,
            transition: {
                duration: 0,
            },
        },
    };

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Delay matches GSAP overlay (1.3 delay + 1.2 duration)
        const timer = setTimeout(() => setVisible(true), 2200);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar with blur when scrolling up and past 200px
            if (currentScrollY < lastScrollY && currentScrollY > 200) {
                setScrollingUp(true);
            } else {
                setScrollingUp(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    if (!visible) return null;

    return (
        <div className={themeStyles.navbarTheme}>
            <div
                className={`${Styles.navbar} ${
                    burgerMenuActive ? Styles.active : ""
                } ${scrollingUp ? Styles.scrollingUp : ""}`}
            >
                <div className={Styles.navigation}>
                    <a href="/">
                        <img
                            src={
                                burgerMenuActive
                                    ? "/images/LOGO Black NBG.png"
                                    : "/images/LOGO Sand NBG.png"
                            }
                            alt="TNS Tours Company"
                            className={Styles.logo}
                        />
                    </a>
                    <div
                        className={Styles.burgerMenuContainer}
                        onClick={() => toggleBurgerMenu()}
                    >
                        <div className={Styles.burgerMenuTrigger}></div>
                        <div className={Styles.burgerMenu}></div>
                    </div>
                </div>
                <div className={Styles.content}>
                    <motion.ul
                        animate={burgerMenuActive ? "open" : "closed"}
                        variants={motionVariants}
                    >
                        <motion.li variants={listItemVariants}>
                            <a href="/">home</a>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <a href="#about">about</a>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <a href="#packages">packages</a>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <a href="#gallery">gallery</a>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <a href="#contact">contact</a>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <a href="#photos">a treat for you</a>
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;