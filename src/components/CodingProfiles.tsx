import { motion } from "framer-motion";

const CodingProfiles = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Coding Profiles</h2>
                    <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
                    <p className="text-lg text-foreground/80">
                        A selection of my most recent and notable projects.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default CodingProfiles