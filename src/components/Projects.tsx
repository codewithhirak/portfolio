const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Project One</h3>
                        <p className="text-gray-700">A brief description of Project One.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Project Two</h3>
                        <p className="text-gray-700">A brief description of Project Two.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Project Three</h3>
                        <p className="text-gray-700">A brief description of Project Three.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;