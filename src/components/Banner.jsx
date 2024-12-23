import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import myPitcure from "../assets/images/myPitcure.png"

export const Banner = () => {
    return (
        <div className="flex justify-center items-center my-12 w-full h-screen px-9 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1440px]">
                <div className="md:flex md:justify-center md:items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="text-center px-1 md:px-0 md:text-left">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="block my-2 text-primaryColor font-semibold text-lg md:text-2xl">
                            Hello <span className="text-white">, my name is</span>
                        </motion.h2>
                        <TypeAnimation
                            sequence={[
                                "Naufal Ahmad Junaedi", 1500,
                                "Frontend Web Developer", 1500,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="block my-2 text-white text-xl font-semibold md:text-3xl"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 1.5 }}
                            className="block my-2 text-white font-normal"
                        >
                            I am a student from Bandung Digital Technology University.
                        </motion.p>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                            className="text-primaryColor border border-white rounded-md px-2 py-1 md:mt-3">
                            Download Cv
                        </motion.button>
                    </motion.div>
                </div>
                <div className="md:flex md:justify-center md:items-center">
                    <motion.img
                        src={myPitcure}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                    />
                </div>
            </div>
        </div>
    )
}