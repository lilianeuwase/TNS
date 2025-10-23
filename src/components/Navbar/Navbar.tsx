"use client";
import React, { useState, useEffect } from "react";
import Styles from "./navbar.module.scss";
import themeStyles from "./navbarTheme.module.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    const [burgerMenuActive, setBurgerMenuActive] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuActive(!burgerMenuActive);
    };

    const motionVariants = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                ease: "easeOut",
                type: "spring",
            },
        },
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0,
                duration: 0,
            },
        },
    };

    const listItemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.35,
                ease: "easeOut",
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

      if (!visible) return null; // 🕒 don’t render navbar yet
    return (
        <div className={themeStyles.navbarTheme}>
            <div
                className={`${Styles.navbar} ${
                    burgerMenuActive ? Styles.active : ""
                }`}
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
                            <a href="/">about</a>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <a href="/">portfolio</a>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <a href="/">contact</a>
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
