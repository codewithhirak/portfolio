const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">My Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Company A</h3>
                    <p className="text-gray-700 mb-2">Role: Frontend Developer</p>
                    <p className="text-gray-700">Duration: Jan 2020 - Dec 2021</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Company B</h3>
                    <p className="text-gray-700 mb-2">Role: Full-Stack Developer</p>
                    <p className="text-gray-700">Duration: Feb 2022 - Present</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Freelance</h3>
                    <p className="text-gray-700 mb-2">Role: Web Developer</p>
                    <p className="text-gray-700">Duration: Jun 2019 - Present</p>
                </div>
            </div>
        </div>
    </section>
  );
};
export default Experience;