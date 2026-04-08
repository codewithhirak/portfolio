const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Hirak Patel</h1>
        <p className="text-xl mb-8">A Passionate Full-Stack Developer</p>
        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            View My Work
        </a>
    </section>
  );
};
export default Hero;